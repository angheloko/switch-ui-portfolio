<template>
  <div
    class="flex items-start overflow-x-hidden"
    :class="{ 'cursor-pointer': isDragging }"
    @mousedown="mouseDownHandler"
    @mouseup="mouseUpHandler"
    @mousemove.prevent="mouseMoveHandler"
  >
    <div
      v-for="(project, index) of projects"
      :key="project.slug"
      class="project pb-2 pl-4 last:pr-4"
      @click="selectProject(index)"
    >
      <h2 class="w-48 pb-1 text-blue-700 dark:text-green-600 text-lg truncate px-2">
        {{ project.title }}
      </h2>
      <div class="image-wrapper bg-transparent p-2 rounded">
        <div class="h-48 w-48 flex-none shadow-md hover:shadow-none">
          <img :src="project.image" :alt="project.title" class="h-full w-full object-cover object-center" draggable="false">
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
      startDrag: false,
      isDragging: false,
      left: 0,
      x: 0
    }
  },
  methods: {
    mouseDownHandler (e) {
      this.startDrag = true
      this.x = e.clientX
      this.left = this.$el.scrollLeft
    },
    mouseUpHandler () {
      setTimeout(() => {
        this.startDrag = false
        this.isDragging = false
      })
    },
    mouseMoveHandler (e) {
      if (this.startDrag) {
        this.isDragging = true
        const distance = e.clientX - this.x
        this.$el.scrollLeft = this.left - distance
      }
    },
    selectProject (index) {
      if (!this.isDragging) {
        this.$emit('click', index)
      }
    }
  }
}
</script>

<style scoped>
.project h2 {
  visibility: hidden;
}
.project:hover .image-wrapper {
  @apply bg-blue-700 shadow-md;
}
.dark .project:hover .image-wrapper {
  @apply bg-green-600;
}
.project:hover h2 {
  visibility: visible;
}
</style>
