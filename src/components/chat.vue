<template>
  <div class="chatapp">
    <thread-section></thread-section>
    <message-section></message-section>
  </div>
</template>

<script>
import ThreadSection from "./ThreadSection.vue";
import MessageSection from "./MessageSection.vue";
export default {
  name: "app",
  components: {
    ThreadSection,
    MessageSection
  }
};
</script>
