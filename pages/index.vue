<template>
  <div class="h-full py-4 flex flex-col">
    <div class="h-16 mx-8 mb-8 flex justify-between items-center">
      <div class="p-1 bg-white shadow rounded-full">
        <img src="/avatar.jpg" class="w-14 h-14 object-cover object-center rounded-full" />
      </div>
      <div>
        <LightMode class="h-8 w-8" />
      </div>
    </div>
    <div>
      <Gallery />
      <div class="mt-8 flex justify-center items-center">
        <div class="flex text-gray-600">
          <div class="p-2 mx-2 bg-white rounded-full shadow">
            <Blog class="w-14 h-14 fill-current" />
          </div>
          <div class="p-2 mx-2 bg-white rounded-full shadow">
            <GitHub class="w-14 h-14 fill-current" />
          </div>
          <div class="p-2 mx-2 bg-white rounded-full shadow">
            <LinkedIn class="w-14 h-14 fill-current" />
          </div>
          <div class="p-2 mx-2 bg-white rounded-full shadow">
            <Twitter class="w-14 h-14 fill-current" />
          </div>
          <div class="p-2 mx-2 bg-white rounded-full shadow">
            <Mail class="w-14 h-14 fill-current" />
          </div>
        </div>
      </div>
    </div>
    <div class="h-16 mx-8 mt-8 py-4 border-t border-gray-800">
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
export default {
  components: { Gallery, Blog, Mail, Twitter, LinkedIn, GitHub, LightMode }
}
</script>

<style>
</style>
