<template>
  <div class="md-body">
    <Form @onSubmit="handleSubmit" />
    <List @onRemove="handleRemove" :items="notes" />
  </div>
</template>

<script>
import Form from "@/components/Notes/Form.vue";
import List from "@/components/Notes/List.vue";
export default {
  components: { Form, List },
  data() {
    return {
      notes: [
        {
          title: "learn vue3",
          tags: ["work"],
        },
        {
          title: "finish course",
          tags: ["work", "home"],
        },
        {
          title: "hello",
          tags: [],
        },
      ],
    };
  },
  methods: {
    handleSubmit(note) {
      this.notes.push(note);
    },
    handleRemove(index) {
      this.notes.splice(index, 1);
    },
  },
};
</script>
