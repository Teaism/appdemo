<template>
  <div class="about">
    <div class="tips" @click="tipsClick()">click me tips</div>
    <mt-progress class="defi-progress" :value="0" :bar-height="5">
      <div slot="start">0%</div>
      <div slot="end">100%</div>
    </mt-progress>
    <mt-button type="default" @click="updateFile()">上传文件</mt-button>
    <div>
      count: {{ count }} {{ doneTodos }} doneTodosCount:
      {{ this.$store.getters.doneTodosCount }}
      {{ getTodoById }}
    </div>
    <br />
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "about",
  props: [],
  data() {
    return {
      // count: 0
    };
  },
  methods: {
    checkMe() {
      alert(this.value);
    },
    test() {},
    tipsClick() {
      this.$toast({
        message: "操作成功"
      });
      this.$store.commit("INCREMENT", 6);
      console.log(this.$store.getters.getTodoById(2));
      console.log(this.$store.getters.doneTodosCount);
    },
    updateFile() {
      // this.props.value = 80;
      console.log(document.querySelector(".defi-progress").value);
      alert("aa");
    },
    ...mapActions(["increment"]),
    increment() {
      this.$store.dispatch("incrementAsync");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    testAction() {
      this.$store.dispatch("actionA").then(() => {
        console.log("dispatch actionA");
      });
    }
  },
  computed: {
    ...mapState(["count", "doneTodos", "doneTodosCount", "getTodoById"])
  }
};
</script>
<style lang="scss" scoped>
.about {
  .tips {
    color: #f00;
  }
}
</style>
