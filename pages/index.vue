<template>
  <div class="w-full h-full sm:h-3/5 flex flex-col overflow-hidden">
    <div v-show="showProject" v-if="projects[currentIndex] !== undefined" class="fixed inset-0 z-10 overflow-y-auto">
      <div class="min-h-screen text-center">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="px-4 py-2 w-full flex flex-col min-h-screen align-bottom text-left overflow-hidden transform transition-all bg-gray-200 dark:bg-gray-800 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="px-4 pt-2 pb-4 border-b border-gray-600 flex">
            <img
              :src="projects[currentIndex].image"
              :alt="projects[currentIndex]"
              class="w-24 h-24 mr-4"
            >
            <div class="flex flex-col justify-end">
              <h2 class="text-lg">
                {{ projects[currentIndex].title }}
              </h2>
              <div class="text-sm text-gray-500">
                {{ projects[currentIndex].createdAt | toDate }}
              </div>
            </div>
          </div>
          <div class="p-4 flex-grow overflow-y-auto">
            <nuxt-content :document="projects[currentIndex]" />
          </div>
          <div class="flex justify-end border-t border-gray-600 px-4 py-2">
            <button class="flex items-center" @click="showProject = false">
              <Close class="h-4 w-4 fill-current p-0.5 bg-gray-600 text-white rounded-full" />&nbsp;Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="h-16 m-4 sm:m-8 flex justify-between items-center">
      <div class="p-1 bg-white shadow rounded-full">
        <img src="https://picsum.photos/100/100" class="w-14 h-14 object-cover object-center rounded-full" alt="Avatar">
      </div>
      <button @click="toggleTheme">
        <LightMode v-if="isDark" class="h-8 w-8 fill-current" />
        <DarkMode v-else class="h-8 w-8 fill-current" />
      </button>
    </div>
    <div class="flex-grow flex flex-col justify-center">
      <Gallery
        :projects="projects"
        @click="selectProject"
      />
      <div class="mt-8 flex justify-center items-center">
        <div class="flex text-gray-600">
          <div class="p-2 mx-2 bg-white rounded-full shadow">
            <Blog class="w-10 h-10 sm:w-14 sm:h-14 fill-current text-yellow-500" />
          </div>
          <div class="p-2 mx-2 bg-white rounded-full shadow">
            <GitHub class="w-10 h-10 sm:w-14 sm:h-14 fill-current text-black" />
          </div>
          <div class="p-2 mx-2 bg-white rounded-full shadow">
            <LinkedIn class="w-10 h-10 sm:w-14 sm:h-14 fill-current text-blue-700" />
          </div>
          <div class="p-2 mx-2 bg-white rounded-full shadow">
            <Twitter class="w-10 h-10 sm:w-14 sm:h-14 fill-current text-blue-500" />
          </div>
          <div class="p-2 mx-2 bg-white rounded-full shadow">
            <Mail class="w-10 h-10 sm:w-14 sm:h-14 fill-current" />
          </div>
        </div>
      </div>
    </div>
    <div class="h-12 m-4 sm:m-8 border-t border-gray-600 flex items-center">
      &nbsp;Some text.
    </div>
  </div>
</template>

<script>
import LightMode from '../components/icons/LightMode'
import GitHub from '../components/icons/GitHub'
import LinkedIn from '../components/icons/LinkedIn'
import Twitter from '../components/icons/Twitter'
import Mail from '../components/icons/Mail'
import Blog from '../components/icons/Blog'
import Gallery from '../components/Gallery'
import DarkMode from '../components/icons/DarkMode'
import Close from '../components/icons/Close'
export default {
  components: { Close, DarkMode, Gallery, Blog, Mail, Twitter, LinkedIn, GitHub, LightMode },
  data () {
    return {
      isDark: false,
      projects: [],
      showProject: false,
      currentIndex: 0
    }
  },
  mounted () {
    this.isDark = localStorage.isDark ? JSON.parse(localStorage.isDark) : false
    this.toggleClass()

    this.$content('projects').sortBy('createdAt', 'desc').fetch()
      .then((result) => {
        this.projects = result
      })
  },
  methods: {
    toggleTheme () {
      this.isDark = !this.isDark
      localStorage.isDark = JSON.stringify(this.isDark)
      this.toggleClass()
    },
    toggleClass () {
      if (this.isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    selectProject (index) {
      this.showProject = true
      this.currentIndex = index
    }
  }
}
</script>

<style>
</style>
