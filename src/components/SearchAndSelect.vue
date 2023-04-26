<template>
    <div class="p-5">
        <div class="grid grid-cols-2 gap-5 items-center bg-white rounded-lg px-5 py-2">
            <!-- <label for="search">Search:</label> -->
            <!-- <input type="text" id="search" v-model="searchQuery" placeholder="Search Product" /> -->
            <div class="relative py-3">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input type="search" id="search"
                    class="block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search" required v-model="searchQuery">
            </div>
            <div>
                <select id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option selected>Choose a country</option>
                    <option value=" USA">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>
        </div>
        <div class="">

        </div>
    </div>
</template>
  
<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
    name: "SearchAndSelect",
    data() {
        return {
            searchQuery: ref(null),
        }
    },
    watch: {
        // whenever question changes, this function will run
        searchQuery(newSearch, oldSearch) {
            this.$emit('search', newSearch)
        }
    },
});
</script>
<style scoped></style>
  