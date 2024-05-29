const app = Vue.createApp({
	data() {
		return {
			counter: 10,
			name: '',
			confirmedName: '',
		};
	},
	methods: {
		add(num) {
			this.counter = this.counter + num;
		},
		minus(num) {
			this.counter = this.counter - num;
		},
		setName(event, lastName) {
			this.name = event.target.value + ' ' + lastName;
		},
		// setName(event) {
		// 	this.name = event.target.value;
		// },
		submitForm() {
			alert('Submitted');
		},
		confirmInput() {
			this.confirmedName = this.name;
		},
	},
});

app.mount('#events');
