<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Type ur note" />
      <TagsList @onItemClick="handleTagClick" :tags="getAllTags" />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from "@/components/UI/TagsList";
export default {
  components: { TagsList },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.value);
      this.value = "";
    },
    handleTagClick(tag) {
      this.$store.dispatch("handleTagClick", tag);
    },
  },
  computed: {
    getAllTags() {
      return this.$store.getters.getAllTags;
    },
  },
};
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
}
</style>
