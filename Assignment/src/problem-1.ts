{
    function sumArray(arr:number[]):number{
        const n = arr.length;
        let sum = 0;
        for(let i =0;i<n;i++)
        {
            sum+=arr[i];
        }

        return sum;
    }

    console.log(sumArray([1,2,3,4,5]));
}