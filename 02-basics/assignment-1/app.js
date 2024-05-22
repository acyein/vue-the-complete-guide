const app = Vue.createApp({
	data() {
		return {
			name: 'Salt',
			age: 20,
            imageLink: 'https://images.unsplash.com/photo-1714911463647-c3150ce15ad1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		};
	},
	methods: {
		addAge() {
			return this.age + 5;
		},
		outputNumber() {
			return Math.random();
		},
	},
});

app.mount('#assignment');
