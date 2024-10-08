function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;

      // Deduct random value between 5 & 12
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue; //  OR this.monsterHealth = this.monsterHealth - attackValue;

      // Execute this function right after
      this.attackPlayer();
    },
    // When player attacks monster, monster attacks back
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
    // Special attack only available after every 3 rounds
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      // If health is above 100, set value to 100 (to ensure value doesn't go beyond 100)
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }

      // Monster still attacks player while healing
      this.attackPlayer();
    },
  },
});

app.mount("#game");
