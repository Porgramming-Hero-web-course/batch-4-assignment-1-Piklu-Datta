{
    class Car {
        
        constructor(
        public make:string ,public mode:string,public year:number
    ){}
     
    getCarAge():number{
        const currentAge = new Date().getFullYear();
        return currentAge-this.year
    }


    }

    const car = new Car("Honda","Civic",2018);
    console.log(car.getCarAge());
}