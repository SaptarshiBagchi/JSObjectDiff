let max = 10
let min = 3
const target = 5

/**
 * I need the permutations of the difference such that max - min = target and max and min are not present
 * so it can be 9 - 3 = 6, 8 - 2 = 6, 7-1 = 6
 * 
 */
const list = [10,2,3,4,6]
function generatePermutations(){
        const difference = max - min - target
        // base case
        if(difference === 0) return [max, min]
        
        // the actual arithmatic
        
            if(list.includes(max - difference)) {
                if(list.includes(min + difference)) {
                    min--
                    max--
                }
                else{
                    min = min + difference
                }
            }
            else
            {
                max = max - difference
            }

        return generatePermutations()

}

console.log(generatePermutations())
