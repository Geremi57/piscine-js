export const build = function(num) {let curr = 1;
    const createBrick = function() {
        const brick = document.createElement("div");
      
        brick.id = `brick-${curr}`;
      
        if ((curr + 1) % 3 === 0) {
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
        if(
            element.hasAttribute(
                "data-foundation"
            ))
             {element.dataset.repaired ="pending";

        }else {
            element.dataset.repaired =
            "true";
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