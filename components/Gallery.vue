<template>
  <div
    class="flex-grow flex items-start overflow-x-hidden"
    @mousedown="mouseDownHandler"
    @mouseup="mouseUpHandler"
    @mousemove="mouseMoveHandler"
  >
    <div v-for="i in 10" :key="i" class="pl-8 last:pr-8">
      <div class="h-40 w-40 flex-none shadow bg-blue-600">
        {{ i }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      isDragging: false,
      left: 0,
      x: 0
    }
  },
  methods: {
    mouseDownHandler (e) {
      this.isDragging = true
      this.x = e.clientX
      this.left = this.$el.scrollLeft
    },
    mouseUpHandler () {
      this.isDragging = false
    },
    mouseMoveHandler (e) {
      if (this.isDragging) {
        const distance = e.clientX - this.x
        this.$el.scrollLeft = this.left - distance
      }
    }
  }
}
</script>

<style scoped>

</style>
