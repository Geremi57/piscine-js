function pronoun(str) {
    // console.log("input", str)
    // console.log("lower", str.toLowerCase())

    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we']
    // const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we', 'my', 'your']

   // const words = str.toLowerCase().split(' ')
   // const words = str.toLowerCase().split(/\s+/)
   const raw = str.toLowerCase()
    const tokens = raw.split(/\s+/)
    // console.log("tokens", tokens)

   const words = []
   let t = 0
     while (t < tokens.length) {
        // const cleaned = tokens[t].replace(/[^a-z]/g, '')
        const cleaned = tokens[t].replace(/[^a-zA-Z]/g, '').toLowerCase()
        // if (cleaned.length > 0) words.push(cleaned)
        words.push(cleaned)
        t++
    }
    // console.log("words", words)

    const result = {}
    // const result = Object.create(null)

   let i = 0
  while (i < words.length) {
        const word = words[i]
        // console.log("checking", word)

        let isPronoun = false
        let p = 0
        while (p < pronouns.length) {
            if (pronouns[p] === word) {
                isPronoun = true
                // console.log("found pronoun", word)
                break
            }
            p++
        }
        // let isPronoun = pronouns.includes(word)
        // let isPronoun = pronouns.indexOf(word) !== -1

        if (isPronoun) {
           if (!result[word]) {
               // result[word] = { count: 0, word: [] }
               result[word] = { word: [], count: 0 }
          }

          result[word].count++
           // result[word].count = result[word].count + 1          
           // 
            // console.log("count for", word, result[word].count)

         const next = words[i + 1]
           // console.log("next word", next)
         // const next = words[i + 1] || null

           if (next) {
            let nextIsPronoun = false
               let pp = 0
               while (pp < pronouns.length) {
                  if (pronouns[pp] === next) {
                        nextIsPronoun = true
                        break
                   }
                 pp++
                                }
                // console.log("next is pronoun", nextIsPronoun)
                // if (!pronouns.includes(next)) {
                if (!nextIsPronoun) {
                    // console.log("pushing", next, "for", word)
                    result[word].word.push(next)
              }
          }
      }

       i++
  }

    // console.log("result", result)
    return result
}

// function getPronounList() {
//     return ['i', 'you', 'he', 'she', 'it', 'they', 'we']
// }