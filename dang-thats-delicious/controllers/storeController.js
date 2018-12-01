exports.myMiddleware = (req, res, next) => {
	req.name = 'Matt';
	res.cookie('name', 'Matt is cool', { maxAge: 9000000 });
	if(req.name == 'Matt') {
		throw Error('That is a great name');
	}
	next();
}

exports.homePage = (req, res) => {
	console.log(req.name);
	res.render('index');
};