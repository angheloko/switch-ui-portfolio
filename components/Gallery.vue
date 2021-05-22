<template>
  <div class="overflow-x-auto mx-2 flex items-start">
    <div
      v-for="(project, index) of projects"
      :key="project.slug"
      class="project pb-2"
      :class="{ 'focused': focused === index }"
      @click="clickHandler(index)"
      @mouseover="focused = index"
      v-touch:start="touchHandler(index)"
    >
      <h2 class="w-48 pb-1 text-lg truncate">
        {{ project.title }}
      </h2>
      <div class="image-wrapper bg-transparent p-2 rounded">
        <div class="h-48 w-48 flex-none shadow-md">
          <img :src="project.image" :alt="project.title" class="h-full w-full object-cover object-center rounded" draggable="false">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    projects: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      focused: 0
    }
  },
  methods: {
    touchHandler (index) {
      return () => {
        this.focused = index
      }
    },
    clickHandler (index) {
      this.$emit('click', index)
    }
  }
}
</script>

<style scoped>
.project h2 {
  visibility: hidden;
  color: #26A69A;
}
.dark .project h2 {
  color: #00BCD4;
}
.project.focused h2 {
  visibility: visible;
}
.project.focused .image-wrapper {
  @apply shadow-md;
  background-color: #26A69A;
}
.dark .project.focused .image-wrapper {
  background-color: #00BCD4;
}
</style>
