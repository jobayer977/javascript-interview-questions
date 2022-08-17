const obj = {
	x: 1,
	getX() {
		const inner = () => {
			console.log(this);
		};

		inner();
	}
};
obj.getX();
