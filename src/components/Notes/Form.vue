<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea required v-model="value" placeholder="Type ur note" />
      <TagsList
        @onItemClick="handleTagClick"
        :items="tags"
        :isActive="tags.isActive"
      />
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
      tags: [
        {
          title: "home",
          isActive: false,
        },
        {
          title: "work",
          isActive: false,
        },
        {
          title: "travel",
          isActive: false,
        },
      ],
    };
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.value);
      this.value = "";
    },
    handleTagClick(tag) {
      this.isActive = !this.isActive;
      this.tags.forEach((element) => {
        if (tag.title === element.title) {
          element.isActive = !element.isActive;
        }
      });
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
