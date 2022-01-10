module.exports = function toReadable(number) {
	let res = ''
	number = String(number)
	const numbs = {
		units: { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', },
		first_ten: { 0: 'ten', 1: 'eleven', 2: 'twelve', 3: 'thirteen', 4: 'fourteen', 5: 'fifteen', 6: 'sixteen', 7: 'seventeen', 8: 'eighteen', 9: 'nineteen', },
		dozens: { 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety', }
	}
	if (number.length === 3) {
		if (number[1] == 0) {
			if (number[2] == 0) {
				res = numbs.units[number[0]] + ' hundred'
			} else { res = numbs.units[number[0]] + ' hundred ' + toReadable(number.slice(2)) }
		} else { res = numbs.units[number[0]] + ' hundred ' + toReadable(number.slice(1)); }
	}


	if (number.length === 2) {
		if ((number[0] == 1)) {
			res = `${numbs.first_ten[number[1]]}`;
		} else {
			if (number[1] == 0) {
				res = `${numbs.dozens[number[0]]}`
			} else {
				res = `${numbs.dozens[number[0]]} ${numbs.units[number[1]]}`;
			}
		}
	}
	if (number.length === 1) {
		res = `${numbs.units[number[0]]}`;
	}
	return res
}
