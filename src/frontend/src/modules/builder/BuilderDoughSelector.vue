<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>

      <div class="sheet__content dough">
        <label
          v-for="doughItem in dough"
          :key="doughItem.id"
          :class="`dough__input dough__input--${doughItem.slug}`"
          @click="changeDough(doughItem)"
        >
          <RadioButton
            name="dought"
            :value="doughItem.slug"
            :checked="doughItem.id === 1"
          />
          <b>{{ doughItem.name }}</b>
          <span>{{ doughItem.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "@/common/components/RadioButton";

export default {
  props: {
    dough: {
      type: Array,
    },
  },
  name: "BuilderDoughtSelector",
  components: {
    RadioButton,
  },
  methods: {
    changeDough(dough) {
      console.log(dough.name);
      this.$emit("changeDough", dough);
    },
  },
};
</script>
