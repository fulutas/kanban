<template>
  <div class="modal">
    <div class="content">
      <p class="title">{{ title }}</p>
      <div class="form">
        <label for="board-title">{{ labelA }}</label>
        <input type="text" id="board-title" v-model="inputA" />
        <label for="board-color">{{ labelB }}</label>
        <input :type="inputBtype" id="board-color" v-model="inputB" />
      </div>
      <p class="text-right">
        <button @click="handleClose" class="btn btn--close">Close</button>
        <button @click="submit" class="btn btn--add">Submit</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["title", "labelA", "labelB", "inputBtype"],
  data() {
    return {
      inputA: "",
      inputB: "",
    };
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    submit() {
      if (!this.inputA) {
        alert("Board title required.");
        return;
      }

      this.$emit("submit", {
        inputA: this.inputA,
        inputB: this.inputB,
      });

    },
  },
};
</script>

<style scoped>
.text-right .btn:nth-child(2) {
  margin-left: 1em;
}
</style>
