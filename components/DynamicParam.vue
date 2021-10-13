<template>
  <div>
    <ul>
      <li v-for="t in things" :key="t">{{ t }}</li>
    </ul>
  </div>
</template>

<script>
const collectionOfThings = {
  a: ["a1", "a2", "a3"],
  b: ["b1", "b2"],
  c: [],
  d: ["this is D"],
};

export default {
  props: ["type"],
  data() {
    return {
      things: [],
    };
  },
  watch: {
    type: {
      handler(t) {
        this.things = collectionOfThings[t];
      },
      immediate: true,
    },
  },
};
</script>