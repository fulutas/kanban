<template>
  <div class="item">
      <div class="head">
          <span class="priority">
              <span class="priority-title">Priority:</span>
              <span class="badge" :style="{ backgroundColor : priorityClr }">{{ item.priority }}</span>
          </span>
          <i class="fas fa-sort" :style="{ color : clr }"></i>
      </div>
      <p class="title">{{ item.title }}</p>
      <p class="text-right">
          <!-- <button class="btn btn--del">Delete</button> -->
      </p>
  </div>
</template>

<script>
export default {
    name : 'Item',
    props : ['item','clr'],
    computed: {
        priorityClr(){
            if(this.item.priority == 'low'){
                return '#d0c6fc'
            } else if(this.item.priority == 'medium'){
                return '#f69611'
            } else if(this.item.priority == 'high'){
                return '#d13667'
            }
        }
    }
}
</script>

<style scoped>

.item{
  padding: 1em;
  box-shadow: 0 2px 6px rgb(0 0 0 / 5%);
  border-radius: 4px;
  margin-bottom: 1em;
  background-color: #fff;
}

.item .head{
    display: flex;
    justify-content: space-between;
}

.item .head .priority{
    font-weight: bold;
    color: #080808;
}

.item .title{
    font-weight: bold;
    font-size: 1.1em;
    margin-top: 1em;
}

.priority .badge {
    padding: .3em .75em;
    background-color: rgb(134, 131, 131);
    border-radius: 3px;
    margin-left: .5em;
    color: #FFF;
    text-transform: uppercase;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    font-size: .7em;
    letter-spacing: 1px;
}

.fa-sort{
    cursor: move;
}

.priority-title{
    color: rgb(65, 64, 64);
    font-size: 15px;
}


</style>