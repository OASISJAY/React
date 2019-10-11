import _ from 'lodash';
export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    // _.slice(items, startIndex)
    // _.take()// total number of items we want to take from the array.
    //chain usage of that array. 
    //first to convert the arrray to a lodash rappers object
    //value() will convert to regular array.
    return _(items)
        .slice(startIndex)
        .take(pageSize)
        .value();
}