let arr1 = [1, 2, 2, 2, 3, 3, 4, 4, 5]
let arr2 = [6, 7, 8, 5, 2]

const duplicationCheck = (element, arr2) => {
    let length2 = arr2.length;
    for (let i = 0; i < length2; i++) {
        if (element === arr2[i]) {
            return element
        }
    }
    return false;
};
const removeDuplication = (total) => {
    let unique = [];
    total.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element)
        }
    });
    return unique
}
const union = (arr1, arr2) => {
    const total = arr1.concat(arr2);
    const length1 = arr1.length;
    for (let i = 0; i < length1; i++) {
        const result = duplicationCheck(arr1[i], arr2);
        if (result) {
            total.push(result);
        }
    }
    const uniqueTotal = removeDuplication(total)
    return uniqueTotal;
};

console.log(union(arr1, arr2));
