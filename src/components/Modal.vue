<template>
  <div class="modal">
    <div class="content">
      <p class="title">{{ title }}</p>
      <div class="form">
        <label for="inputA">{{ labelA }}</label>
        <input type="text" id="inputA" v-model="inputA" />
        <label for="inputB">{{ labelB }}</label>
        <input :type="inputBtype" id="inputB" v-model="inputB" @keyup.enter="submit" />
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
  props : {
    title : {
      required : true,
      type : String
    },
    labelA : {
      required : true,
      type : String,
    },
    labelB : {
      required : false,
      type : String
    },
    inputBtype : {
      required : false,
      type : String
    },
    priority : {
      required : false,
      type : Array
    }
  },
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
        alert(`${this.labelA} required.`);
        return;
      } else if (this.title === "Add another card" && !this.inputB){
        alert(`${this.labelB} required.`);
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
