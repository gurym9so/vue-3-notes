<template>
  <div class="tags-list">
    <div
      class="tag-item"
      v-for="item in tags"
      :key="item"
      @click="$emit('onItemClick', item)"
      :class="{ isPreview: isPreview, isActive: item.isActive }"
    >
      {{ item.title || item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isPreview: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: Array,
    },
  },
};
</script>
<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isActive {
    background-color: #444ce0;
    color: #fff;
  }
  &.isPreview {
    padding: 0;
    cursor: default;
    color: #444ce0;
    &:before {
      content: "#";
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
