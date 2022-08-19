const data = [
	{
		id: 16482,
		steps: 15,
		lead_id: 1456,
		recorded_date: '2022-08-17 19:00:00',
		created_at: '2022-08-18 19:39:05',
		updated_at: '2022-08-18 19:39:05'
	},
	{
		id: 16481,
		steps: 10,
		lead_id: 1456,
		recorded_date: '2022-08-17 12:00:00',
		created_at: '2022-08-18 19:39:05',
		updated_at: '2022-08-18 19:39:05'
	},
	{
		id: 16480,
		steps: 5,
		lead_id: 1456,
		recorded_date: '2022-08-17 11:00:00',
		created_at: '2022-08-18 19:39:05',
		updated_at: '2022-08-18 19:39:05'
	}
];

const series = data.map((item) => item.steps);
const labels = data.map((item) => {
	const date = new Date(item.recorded_date);
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const ampm = hours >= 12 ? 'pm' : 'am';
	const hoursFormatted = hours % 12 || 12;
	const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
	return `${hoursFormatted}:${minutesFormatted} ${ampm}`;
});

console.log(series, labels);
