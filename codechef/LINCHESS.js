process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
        main()
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let test_cases = readLine()
   
    for(let x=1; x<=test_cases; x++) {
         let userInput = readLine().split(" ")
        let N = userInput[0]
        let K = userInput[1]
        let positions = readLine().split(" ")
        let res = 1000000000
        let player
        
        for(let i=0; i<positions.length; i++) {
            if(K % positions[i] === 0 ) {
                let step = K/positions[i]
                if(step < res ) {
                    res = step
                    player = positions[i]
                }
        
            }
        }
        
        if( res !== 1000000000 ) {
            console.log(player)
        } else {
            console.log(-1)
        }
    }

}