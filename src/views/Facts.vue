<template>
  <div class="facts">
    <h1>Facts Page</h1>
    <h5>{{ $route.params.id | toCap }}</h5>
  </div>
</template>

<script>
export default {
  name: "Facts",
  components: {},
  filters: {
    toCap(value) {
      return value.toUpperCase();
    },
  },
};
</script>
