const app = Vue.createApp({
	data() {
		return {
			boxASelected: false,
			boxBSelected: false,
			boxCSelected: false,
		};
	},
	computed: {
		boxAClasses() {
			return { active: this.boxASelected };
		},
	},
	methods: {
		boxSelected(box) {
			if (box === 'A') {
				// this.boxASelected = true;

				// Able to select & unselect (toggle)
				this.boxASelected = !this.boxASelected;
			} else if (box === 'B') {
				this.boxBSelected = !this.boxBSelected;
			} else if (box === 'C') {
				this.boxCSelected = !this.boxCSelected;
			}
		},
	},
});

app.mount('#styling');
