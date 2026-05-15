const hasCity = function(country, cities) { 
   return function(ct) {
        const city =

            cities.includes(ct);
        
            if (city) {
                return `${ct} is a city from ${country}`;
        
            }
        return `${ct} is not a city from ${country}`;
    };
};