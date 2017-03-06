module.exports = {
	GetJson: (url, parmas, callback) => {
		return new Promise((resolve, reject) => {
			opt.method = opt.method.toUpperCase() || 'POST';
			opt.url = opt.url || '';
			opt.async = opt.async || true;
			opt.data = opt.data || null;
			opt.success = opt.success || function() {};

			var xmlHttp = null;
			if (XMLHttpRequest) {
				xmlHttp = new XMLHttpRequest();
			} else {
				xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
			}
			var params = [];
			for (var key in opt.data) {
				params.push(key + '=' + opt.data[key]);
			}
			var postData = params.join('&');



			xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
			xmlHttp.send(null);
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
					opt.success(xmlHttp.responseText);
				}
			};
		});
	},
	PostJson: () => {

		xmlHttp.open(opt.method, url, opt.async);
		xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
		xmlHttp.send(postData);
	}
}