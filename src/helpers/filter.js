export const FilterProduct = (arr, text) => {
    
    arr.filter((item) => {
        return item.product === text
    })
    
}

