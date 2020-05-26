<template>
  <div class="about">
    <div v-if="event">
      <img
        v-bind:src="event.better_featured_image.source_url"
        alt="image"
        width="400px"
        height="400px"
      />
      <h1>{{event.title.rendered}}</h1>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "About",
  computed: {
    ...mapState(["event"])
  },
  methods: {
    ...mapActions(["fetchSingleEvent"])
  },
  created() {
    this.fetchSingleEvent(this.$route.params.event);
  }
};
</script>
