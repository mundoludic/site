(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var logger = require('./logger');

logger.log('Heyyy, it works!!!');

logger.cuad(3);

logger.sum(4,5);
},{"./logger":2}],2:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpb2lwL3NpdGVzL2xhYi9mcm9udGVuZC13b3JrZmxvdy9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWFyaW9pcC9zaXRlcy9sYWIvZnJvbnRlbmQtd29ya2Zsb3cvc3JjL2pzL2Zha2VfODNmYTU4YjQuanMiLCIvVXNlcnMvbWFyaW9pcC9zaXRlcy9sYWIvZnJvbnRlbmQtd29ya2Zsb3cvc3JjL2pzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGxvZ2dlciA9IHJlcXVpcmUoJy4vbG9nZ2VyJyk7XG5cbmxvZ2dlci5sb2coJ0hleXl5LCBpdCB3b3JrcyEhIScpO1xuXG5sb2dnZXIuY3VhZCgzKTtcblxubG9nZ2VyLnN1bSg0LDUpOyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRsb2c6IGZ1bmN0aW9uKHN0cmluZyl7XG5cdFx0aWYgKGNvbnNvbGUpIGNvbnNvbGUubG9nKHN0cmluZyk7XG5cdH0sXG5cdGN1YWQ6IGZ1bmN0aW9uKG51bSl7XG5cdFx0Y29uc29sZS5sb2cobnVtKm51bSk7XG5cdH0sXG5cdHN1bTogZnVuY3Rpb24odjEsIHYyKXtcblx0XHRjb25zb2xlLmxvZyh2MSt2Mik7XG5cdH1cbn0iXX0=
