<template>
  <li
    class="threa-list-item"
    :class="{ active: active }"
    @click="$emit('switch-thre', thread.id)"
  >
    <h5 class="thread-name">{{ thread.name }}</h5>
    <div class="thread-time">
      {{ thread.lastMessage.timestamp | time }}
    </div>
    <div class="thread-last-messate">{{ thread.lastMessage.text }}</div>
  </li>
</template>

<script>
export default {
  name: "Thread",
  props: {
    thread: Object,
    active: Boolean
  }
};
</script>
