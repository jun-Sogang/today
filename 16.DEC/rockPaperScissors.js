/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/
var rockPaperScissors = function (n) {
	var RPS = ["rock","scissors","paper"];
	var res=[];
	for(var i=0; i<Math.pow(3,n); ++i){
		var inner_res = [];
		for(var j=n-1; j>=0; j--){
			inner_res.push(RPS[Math.floor((i/Math.pow(3,j)%3))]);
		}
		res.push(inner_res);
	}
	return res;
};
console.log(rockPaperScissors(5));
