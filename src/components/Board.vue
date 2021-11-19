<template>
       <div class="board">
        <div class="head">
          <div class="title"> {{ board.title.length < 30 ? board.title :  board.title.substring(0,20) + '...' }}
            <span class="tooltiptext" v-if="board.title.length > 30">{{ board.title }}</span>
          </div>
          <span class="head-btns">
            <i class="fas fa-trash" @click="handleBoardDelete"></i>
          </span>
        </div>
        <div>
              <p class="msg" v-if="!board.items.length">No items yet.</p>
              <div class="item-card" v-else>
                <draggable v-model="board.items" group="items" handle=".handle">
                  <transition-group name="list">
                    <Item v-for="(item,index) in board.items" :key="item.title" :item="item" :boardId="id" :itemId="index" />
                  </transition-group>
                </draggable>
              </div>
             <AddItem :boardId="id" />
        </div>
      </div>
</template>

<script>

import draggable from "vuedraggable"

import Item from "@/components/Item"
import AddItem from "@/components/AddItem"
import EventBus from "@/utils/eventBus"

export default {
    name : "Board",
    components: {
        Item,
        AddItem,
        draggable
    },
    props : {
        board : {
            required : true,
            type : Object,
            default : "-"
        },
        id : {
          required : true,
          type : Number
        }
    },
    methods : {
      handleBoardDelete(){
        EventBus.$emit("deleteBoard", this.id)
      }
    }
}
</script>

<style scoped>
.board {
  padding: 1em;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-top: 3px solid;
  border-radius: 4px;
  height: fit-content;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  cursor: auto;
  background-color: #f2f2f3;
  /* Pintereest tarzı için (aşağıdakileri uygula) */ 
  /* page-break-inside: avoid;
  break-inside: avoid;
  margin: 1rem 0 1rem 0;
  width: 100%;
  height: fit-content; */

  margin-left: 1px;
  margin-right: 1px;
  margin-bottom: 2em;
}

.board .head{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .5em;
}

.head .title{
  position: relative;
  display: inline-block;
  font-size: 1.1em;
  font-weight: bold;
}

.fa-trash{
  cursor: pointer;
  margin-left: .74em;
  color: rgb(108 108 108);
}

.tooltiptext{
  visibility: hidden;
  width: 270px;
  margin-left: 15px;
  background-color: #333030;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 6px;
  /* Position the tooltip */
  position: absolute;
  left: -1em;
  top: 1.1em;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.7s ease;
  overflow: scroll;
}

.title:hover .tooltiptext{
   visibility: visible;
   opacity: 1;
   transition: 1s;
}


</style>