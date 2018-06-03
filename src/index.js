const getRandomNumber = (min, max) => {
	return Math.floor(min + Math.random() * (max + 1 - min));
};

module.exports = async (req, res) => {
	return { randomNumber: getRandomNumber(1, 100) };
};
