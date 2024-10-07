const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      tasks: [],
      isShown: true,
    };
  },
  computed: {
    buttonText() {
      return this.isShown ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
    },
    toggleList() {
      this.isShown = !this.isShown;
    },
  },
});

app.mount("#assignment");
