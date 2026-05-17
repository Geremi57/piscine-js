export const build = function(num) {let curr = 1;
    const createBrick = function() {
        const brick = document.createElement("div");
      
        brick.id = `brick-${curr}`;
      
        if ((curr) % 3 === 0) {
            brick.dataset.foundation = "true";
        }

        document.body.append(brick);
        if (curr === num) {
            clearInterval(interval);
        }
        curr++;
    };

    const interval = setInterval(createBrick, 100);
};

export const repair = function(...ids) {
    ids.forEach(function(id) {
        const element = document.getElementById(id);
        if(!element){
            return;
        }

        let brickNumber = Number(id.replace('brick-', ''))
        if (brickNumber % 3 === 2){
            element.dataset.repaired = 'in progress';

        }else {
            element.dataset.repaired =
            "repaired";
        }
    });
};

export const destroy = function(){
    const allBricks = document.body.getElementsByTagName("div");
    const reversedBricks =Array.from(allBricks).reverse();
    
    const lastBrick =reversedBricks[0];
    
    if(lastBrick) {
        lastBrick.remove();

    }else{
        console.log("bricks over");
    }

};