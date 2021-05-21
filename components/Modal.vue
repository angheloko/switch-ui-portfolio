<template>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="min-h-screen text-center">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="px-4 py-2 w-full flex sm:inline-flex flex-col min-h-screen align-bottom text-left overflow-hidden transform transition-all bg-gray-200 dark:bg-gray-800 sm:align-middle sm:max-w-2xl sm:w-full">
        <div class="px-4 pt-2 pb-4 border-b border-gray-600 dark:border-gray-100 flex">
          <img
            :src="project.image"
            :alt="project"
            class="w-24 h-24 mr-4"
          >
          <div class="flex flex-col justify-end">
            <h2 class="text-lg">
              {{ project.title }}
            </h2>
            <div class="text-sm text-gray-500">
              {{ project.createdAt | toDate }}
            </div>
          </div>
        </div>
        <div class="p-4 flex-grow overflow-y-auto">
          <nuxt-content :document="project" />
        </div>
        <div class="flex justify-end border-t border-gray-600 dark:border-gray-100 px-4 py-2">
          <button class="flex items-center focus:outline-none" @click="$emit('close')">
            <Close class="h-4 w-4 fill-current p-0.5 bg-gray-600 dark:bg-white text-white dark:text-gray-800 rounded-full" />&nbsp;Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Close from './icons/Close'
export default {
  name: 'Modal',
  components: { Close },
  props: {
    project: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>

</style>
