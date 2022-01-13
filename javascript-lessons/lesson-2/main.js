function generateId(length = 8, type = "abc") {
    let result = ""
    if (type === "dec") {
        for (let i = 0; i < length; i++) {
            const rand = Math.random()
            const bigNumber = rand * 10
            const toInteger = Math.floor(bigNumber)
            result += toInteger
        }
        return result
    } else if (type === "abc") {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        for (let index = 0; index < length; index++) {
            const rand = Math.random()
            const bigNumber = rand * alphabet.length
            const toInteger = Math.floor(bigNumber)
            const letter = alphabet[toInteger]
            result += letter
        }
        return result
    }
}

const myId = generateId(10, "abc");
console.log(myId)