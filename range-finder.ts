
let max = 9
let min = 1
const target = 6

/**
 * I need the permutations of the difference such that max - min = target and max and min are not present
 * so it can be 9 - 3 = 6, 8 - 2 = 6, 7-1 = 6
 * 
 */
const list = [9,2,3,4,6]
function generatePermutations(){
        const difference = max - min - target
        console.log(difference)
        if(difference === 0) return [max, min]
        if(difference > 0){
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


}

console.log(generatePermutations())
