function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      // Deduct random value between 5 & 12
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue; //  OR this.monsterHealth = this.monsterHealth - attackValue;
    },
    // When player attacks monster, monster attacks back
    attackPlayer() {
      const attackValue = getRandomValue(8, 12);
      this.playerHealth -= attackValue;
    },
  },
});

app.mount("#app");
