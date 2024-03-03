<template>
  <div class="md-body">
    <Form @onSubmit="handleSubmit" />
    <List @onRemove="handleRemove" />
  </div>
</template>

<script>
import Form from "@/components/Notes/Form.vue";
import List from "@/components/Notes/List.vue";
export default {
  components: { Form, List },
  data() {
    return {};
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  methods: {
    handleSubmit(title) {
      this.$store.dispatch("handleSubmit", title);
    },
    handleRemove(index) {
      this.$store.dispatch("handleRemove", index); // диспатч вызывает action в скобках
    },
    getNotes() {
      const localNotes = localStorage.getItem("notes");
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },
  },
  computed: {},
};
</script>
