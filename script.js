const { createApp } = Vue;

const app = Vue.createApp({
  data() {
    return {
      apiUri: "http://localhost/php-dischi-json/discs.php",
      discs: [],
    };
  },
  mounted() {
    axios.get(this.apiUri).then((res) => {
      this.discs = res.data;
    });
  },
});
app.mount("#app");
