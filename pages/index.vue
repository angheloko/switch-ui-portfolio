<template>
  <div class="w-full h-full sm:h-auto flex flex-col overflow-hidden">
    <Modal
      v-show="showProject"
      v-if="projects[currentIndex] !== undefined"
      :project="projects[currentIndex]"
      @close="showProject = false"
    />
    <div class="h-16 m-4 mb-0 px-4 sm:m-8 flex justify-between items-center">
      <div class="p-1 bg-white dark:bg-gray-600 shadow rounded-full">
        <img src="https://picsum.photos/100/100" class="w-14 h-14 object-cover object-center rounded-full" alt="Avatar">
      </div>
      <button class="focus:outline-none" @click="toggleTheme">
        <LightMode v-if="isDark" class="h-8 w-8 fill-current" />
        <DarkMode v-else class="h-8 w-8 fill-current" />
      </button>
    </div>
    <div class="flex-grow flex flex-col justify-center">
      <Gallery
        :projects="projects"
        @click="selectProject"
      />
      <div class="mt-6 flex justify-center items-center">
        <div class="flex text-gray-600">
          <div class="p-2 mx-2 bg-white rounded-full shadow">
            <a href="https://donlalicon.dev">
              <Blog class="w-10 h-10 sm:w-14 sm:h-14 fill-current text-yellow-500" />
            </a>
          </div>
          <div class="p-2 mx-2 bg-white rounded-full shadow">
            <a href="https://github.com/angheloko">
              <GitHub class="w-10 h-10 sm:w-14 sm:h-14 fill-current text-black" />
            </a>
          </div>
          <div class="p-2 mx-2 bg-white rounded-full shadow">
            <a href="https://www.linkedin.com/in/dalalicon/">
              <LinkedIn class="w-10 h-10 sm:w-14 sm:h-14 fill-current text-blue-700" />
            </a>
          </div>
          <div class="p-2 mx-2 bg-white rounded-full shadow">
            <a href="https://twitter.com/DonOrDoNot">
              <Twitter class="w-10 h-10 sm:w-14 sm:h-14 fill-current text-blue-500" />
            </a>
          </div>
          <div class="p-2 mx-2 bg-white rounded-full shadow">
            <a href="mailto:dalalicon@gmail.com">
              <Mail class="w-10 h-10 sm:w-14 sm:h-14 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="h-16 m-4 px-4 sm:m-8 border-t border-gray-600 dark:border-gray-100 flex items-center">
      <div class="flex-grow" />
      <a href="https://github.com/angheloko/switch-ui-portfolio">
        <GitHub class="w-6 h-6 inline-block" /> switch-ui-portfolio
      </a>
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
import Modal from '../components/Modal'
export default {
  components: { Modal, DarkMode, Gallery, Blog, Mail, Twitter, LinkedIn, GitHub, LightMode },
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
