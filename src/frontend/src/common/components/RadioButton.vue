<template>
  <input
    type="radio"
    name="name"
    class="visually-hidden"
    :value="value"
    :checked="checked"
  />
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
