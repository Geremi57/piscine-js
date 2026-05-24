const  isWinner = async function(country) {
    try {
        country = await db.getWinner(country)
        //console.log(country)

        const years = country && country.id ? (await db.getResults(country.id)) : null
            //console.log(years)
            //let results = await db.getResults(country.name)

        switch (true) {
            case country === Error('Country Not Found'):
                return `${country.name} never was a winner`

            case country.continent !== 'Europe':
              return `${country.name} is not what we are looking for because of the continent`

                case years === Error('Results Not Found'):
                return `${country.name} never was a winner`

            case years.length < 3:
                return `${country.name} is not what we are looking for because of the number of times it was champion`

            default: {
                //console.log(years)
                const y = years.map((r) => r.year).join(', ')
                    const s = years.map((r) => r.score).join(', ')
                return `${country.name} won the FIFA World Cup in ${y} winning by ${s}`
            }
        }

    } catch (e) {
        //console.log(e)
        if (e.message === 'Country Not Found') {
            return `${country} never was a winner`
        }
    }
}