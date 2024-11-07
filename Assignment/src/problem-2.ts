{
    function removeDuplicates(arr:number[]):number[]{
        const n = arr.length;
        let newArr : number[] = [];
        for(let i=0;i<n;i++)
        {
            if(!newArr.includes(arr[i]))
            {
                newArr.push(arr[i]);
            }

          
            
        }
        return newArr;
    }

    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}