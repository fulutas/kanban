<template>
  <div class="home">
    <h2 class="main-title">Your Board</h2>
    <h2 class="msg" v-if="!boards.length">you don't have any boards.</h2>
    <div class="boards-container" ref="boards" @mousedown="mouseDown" @mouseleave="mouseLeave" @mouseup="mouseUp" @mousemove="mouseMove" v-else>
        <Board v-for="(board,index) in boards" :key="index" :board="board" :style="{ borderColor : board.color }"/>
    </div>
  </div>
</template>

<script>

import Board from "@/components/Board.vue" 
import EventBus from "@/utils/eventBus";


export default {
  name: "Home",
  components : {
    Board
  },
  mounted(){
    EventBus.$on("addBoard", data => {
      this.boards.push({
        title : data.inputA,
        color : data.inputB || "#000", // renk belirtilmez ise #000 ekle.
        items : []
      })
    })
  },
  data() {
    return {
      boards: [
        {
          title: "Lorem ipsum dolor sit amet consectetur dolor dolor dolor dolor dolor dolor dolor dolor dolor",
          color  : "red",
          items : [
            { 
              title : "Item1",
              priority : "high",
            },
            { 
              title : "Item2",
              priority : "low",
            }
          ]
        },
        {
          title: "Lorem ipsum",
          color  : "green",
          items : [
            { 
              title : "Item1",
              priority : "medium",
            },
                        { 
              title : "Item1",
              priority : "high",
            }
          ]
        },
        {
          title: "Dolar sit equra",
          color  : "blue",
          items : [
            { 
              title : "Item3",
              priority : "low",
            },
            { 
              title : "Item4",
              priority : "medium",
            },
            { 
              title : "Item5",
              priority : "low",
            },
                        { 
              title : "Item6",
              priority : "low",
            }
          ]
        },
        {
          title: "Javascript",
          color  : "blue",
          items : [
            { 
              title : "Item3",
              priority : "low",
            },
            { 
              title : "Item4",
              priority : "medium",
            },
            { 
              title : "Item5",
              priority : "low",
            },
          ]
        },
        {
          title: "Project 1",
          color  : "violet",
          items : [
            { 
              title : "Item3",
              priority : "low",
            },
            { 
              title : "Item4",
              priority : "medium",
            },
            { 
              title : "Item5",
              priority : "low",
            },
          ]
        },       
      ],
      isDown : false,
      startX : null, // başlangıç noktası
      scrollLeft : null
    };
  },
  methods : {
    mouseDown(e){
      this.isDown = true; 
    
      // this.$refs.boards.classList.add('board-active')
      this.startX = e.pageX - this.$refs.boards.offsetLeft
      this.scrollLeft = this.$refs.boards.scrollLeft
    },
    mouseLeave(e){
      this.isDown = false;
      // this.$refs.boards.classList.remove('board-active')
    },
    mouseUp(e){
      this.isDown = false;
      // this.$refs.boards.classList.remove('board-active')
    },
    mouseMove(e){
      if(!this.isDown) return; // Üzerine geldiğinde çalışmasını engeller. (sadece click olduğunda çalışır)
      e.preventDefault()
      const x = e.pageX - this.$refs.boards.offsetLeft
      const walk = (x - this.startX) * 3;
      this.$refs.boards.scrollLeft = this.scrollLeft - walk
    },
    
  },

};
</script>

<style scoped>
.boards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  gap: 28px;
  overflow-x: scroll;
  overflow-y: hidden;
  grid-auto-flow: column;
  grid-auto-columns: 272px;
  scroll-snap-type: x mandatory;
  cursor: grab;
  /* Pintereest tarzı için (yukardakileri kapat) */ 
  /* column-count: 4;
  -webkit-column-gap: 1;
  -moz-column-gap: 1em;
   column-gap: 1em; */
}

.boards-container::-webkit-scrollbar{
  background: #e7e7e7;
  border-radius: 20px;
  cursor: pointer;
}

.main-title{
  margin-bottom: 1em;
}

</style>
