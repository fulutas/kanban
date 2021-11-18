<template>
  <div class="add-board">
    <button @click="handleClick" class="btn">
      <i class="fas fa-plus"></i>Add Board
    </button>
    <transition name="fade" mode="out-in" appear>
      <Modal
        v-if="showModal"
        title="Add New Board"
        labelA="Board Title"
        labelB="Board Color"
        inputBtype="color"
        @close="showModal = false"
        @submit="handleSubmit"
      />
    </transition>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import EventBus from "@/utils/eventBus";

export default {
  name: "AddBoard",
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    handleClick() {
      this.showModal = true;
    },
    handleSubmit(data) {
      EventBus.$emit("addBoard", data);
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.add-board {
  display: inline-block;
  margin-left: 2em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
