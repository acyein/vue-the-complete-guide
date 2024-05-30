const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			lastName: '',
			// fullname: '',
		};
	},
	watch: {
		// Watchers are good for HTTP requests e.g. setting timers
		counter(value) {
			if (value > 50) {
				setTimeout(() => {
					// Reset value with 2s timeout
					that.counter = 0;
				}, 2000);
			}
		},
		// name(value) {
		// 	if (value === '') {
		// 		this.fullname = '';
		// 	} else {
		// 		this.fullname = value + ' ' + this.lastName;
		// 	}
		// },
		// lastName(value) {
		// 	if (value === '') {
		// 		this.fullname = '';
		// 	} else {
		// 		this.fullname = this.name + ' ' + value;
		// 	}
		// },
	},
	computed: {
		// Name your computed properties like data properties, despite using it like methods
		fullname() {
			console.log('test');
			if (this.name === '' || this.lastName === '') {
				return '';
			}
			return this.name + ' ' + this.lastName;
		},
	},
	methods: {
		setName(event, lastName) {
			this.name = event.target.value;
		},
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
			// this.counter--;
		},
		resetInput() {
			this.name = '';
		},
	},
});

app.mount('#events');
