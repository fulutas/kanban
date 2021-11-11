<template>
  <div class="add-item">
  <button @click="handleClick" class="btn add-card"><i class="fas fa-plus"></i> Add another card</button>
    <transition name="fade" mode="out-in" appear>
      <Modal
        v-if="showModal"
        title="Add another card"
        labelA="Enter card title"
        labelB="Enter priority"
        inputBtype="text"
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
  props : ['boardId'],
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

      EventBus.$emit("addItem", {
        ...data,
        boardId: this.boardId
      });
      
      this.showModal = false;
    },
  },
};
</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
