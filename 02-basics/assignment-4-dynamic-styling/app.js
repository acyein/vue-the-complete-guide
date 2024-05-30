const app = Vue.createApp({
	data() {
		return {
			inputClass: '',
			paragraphIsVisible: true,
			inputBgColor: '',
		};
	},
	computed: {
		paragraphClasses() {
			return { user1: this.inputClass === 'user1', user2: this.inputClass === 'user2', visible: this.paragraphIsVisible, hidden: !this.paragraphIsVisible };
		},
	},
	methods: {
		toggleVisibility() {
			this.paragraphIsVisible = !this.paragraphIsVisible;
		},
	},
});

app.mount('#assignment');
