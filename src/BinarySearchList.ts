export default function bs_list(haystack: number[], needle: number): boolean {
  let low = 0
  let high = haystack.length

  do {
    const middle = Math.floor((low + (high - low)/2))
    const value = haystack[middle]

    if(needle < value) {
      high = middle
    } else if(needle > value) {
      low = middle + 1
    } else {
      return true
    }
  } while(low < high)
	
  return false
}