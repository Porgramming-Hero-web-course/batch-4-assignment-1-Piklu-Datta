{
    type Circle = {
        shape:'circle',
        radius:number
    }

    type Rectangle = {
        shape:'rectangle',
        width:number,
        height:number
    }

    type Shape = Circle | Rectangle;

    function  calculateShapeArea(shape:Shape):number|undefined{
        if( shape.shape === 'circle'&& typeof shape.radius === 'number'){
           let ans = Math.PI * shape.radius * shape.radius
            return parseFloat(ans.toFixed(2));
            
        }
        else if(shape.shape === 'rectangle' && typeof shape.width === 'number' &&
            typeof shape.height === 'number'){
                const ans = shape.width * shape.height;
                return ans;
            }

      
    }

   //console.log(calculateShapeArea({ shape: "circle", radius: 5 }))
   console.log(calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  }))
}