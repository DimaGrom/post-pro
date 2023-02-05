
const dateNow = () => {
	const  date = new Date();
		const Year = date.getFullYear()
		const Month = String(date.getMonth() + 1).padStart(2, '0')
		const Day = String(date.getDate()).padStart(2, '0')
		const Hour = String(date.getHours()).padStart(2, '0')
		const Minutes = String(date.getMinutes()).padStart(2, '0')
		const Seconds = String(date.getSeconds()).padStart(2, '0')
		const time = Day + '.' + Month + '.' + Year + ' ' + Hour + ":" + Minutes + ":" + Seconds

		return time
}

export default dateNow