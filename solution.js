/************* KEEP BELOW CODE AS IT IS *********************/
/**
 * This code has been taken from: https://codeforces.com/blog/entry/69610
 * I am not the owner of the readLine function below, understanding them require knowledge of basic NodeJS I/O and streams
 */
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

const cin = () => readLine();
const cout = (s = "") => process.stdout.write(String(s));

/* Default approach
 * function main() {
	const n = Number(cin());
	const vis = new Array(n + 1).fill(false); 
	const arr = cin().split(" ").map(Number);
	
	for (const x of arr) {
		vis[x] = true;
	}
	
	for ( let i = 1; i <= n; i++ ) {
		if (!vis[i]) {
			cout(i + "\n");
			return;
		}
	}
}
 */ 
 
 /*
  * 
  * // Summation approach
function main() {
	const n = Number(cin());
	
	// expected sum of 1..n
	const expected = (n * (n + 1)) / 2;
	const sum = cin()
				.split(" ")
				.map(Number)
				.reduce((a,b) => a + b, 0);
	// instead of reduce let total = 0;for ( const x of sum ) total += x;
	const missing = expected - sum;
	cout(missing + "\n");
}
  * 
  * 
  */ 

// xor approach
function main() {
	const n = Number(cin());
	let x = 0;
	
	// XOR all numbers from 1..n
	for (let i = 1; i <= n; i++) {
		x ^= i;
	}
	// XOR the input numbers
	const arr = cin().split(" ").map(Number);
	for ( const v of arr ) {
		x ^= v;
	}
	
	cout(x + "\n");
}
