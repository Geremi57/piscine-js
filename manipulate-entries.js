function filterEntries(obj, fn) {
// console.log("filterEntries", obj)
return Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => fn([k, v]))
    )
}

function mapEntries(obj, fn) {
    // console.log("mapEntries", obj)
    return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => fn([k, v]))
)
}

function reduceEntries(obj, fn, start) {
return Object.entries(obj).reduce(
        (acc, [k, v]) => fn(acc, [k, v]),
    start
    )
}

function totalCalories(cart) {
// console.log("cart", cart)
const total = reduceEntries(cart, (total, [item, grams]) => {
// console.log(item, grams, nutritionDB[item].calories)
        // const cal = nutritionDB[item].calories * grams / 100
        // console.log("cal", cal)
        return total + (nutritionDB[item].calories * grams / 100)
    }, 0)
// console.log("total before round", total)
    return Math.round(total * 10) / 10
    // return Math.round(total)
}

function lowCarbs(cart) {
// console.log("lowCarbs cart", cart)
return filterEntries(cart, ([item, grams]) => {
    const carbsPer100 = nutritionDB[item].carbs
        const totalCarbs = carbsPer100 * grams / 100
    // console.log(item, "totalCarbs", totalCarbs)
        // return totalCarbs <= 50
        return totalCarbs < 50
    })
}

function cartTotal(cart) {
    // console.log("cartTotal", cart)
return mapEntries(cart, ([item, grams]) => {
        const nutrition = nutritionDB[item]
    // console.log("nutrition", nutrition)
        const scaled = {}

    for (const key in nutrition) {
        // scaled[key] = nutrition[key] * grams / 100
        scaled[key] = Number(
            (nutrition[key] * grams / 100).toFixed(3)
            )
        }

        // console.log("scaled", item, scaled)
        return [item, scaled]
    })
}

// function totalMacros(cart) {
//     return reduceEntries(cart, (acc, [item, grams]) => {
//         const n = nutritionDB[item]
//         acc.protein += n.protein * grams / 100
//         acc.carbs += n.carbs * grams / 100
//         acc.fat += n.fat * grams / 100
//         return acc
//     }, { protein: 0, carbs: 0, fat: 0 })
// }

// function highProtein(cart) {
//     return filterEntries(cart, ([item, grams]) => {
//         return nutritionDB[item].protein * grams / 100 > 5
//     })
// }