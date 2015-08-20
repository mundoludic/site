module.exports = {
	log: function(string){
		if (console) console.log(string);
	},
	cuad: function(num){
		console.log(num*num);
	},
	sum: function(v1, v2){
		console.log(v1+v2);
	}
}