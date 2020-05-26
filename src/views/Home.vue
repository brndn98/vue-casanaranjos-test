<template>
  <div class="home">
    <div v-for="event in events" :key="event.id">
      <img
        v-bind:src="event.better_featured_image.source_url"
        alt="image"
        width="400px"
        height="400px"
      />
      <router-link :to="'/' + event.slug">{{event.title.rendered}}</router-link>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["events"])
  },
  methods: {
    ...mapActions(["fetchAllEvents"])
  },
  created() {
    this.fetchAllEvents();
  }
};
</script>
