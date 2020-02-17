<template>
    <div>
        <h1>All about my Data</h1>
        {{ videos }}
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  created() {
    this.fetchVideos();
  },
  computed: {
    ...mapState('video', [
      'videos',
    ]),
  },
  methods: {
    ...mapActions('video', [
      'fetchVideos',
    ]),
  },
};
</script>
