
/**
 * Con ruồi nhằm check dimention
 * @param {{width:number,height:number}} dim 
 */
export function fly(dim) {
    if (!dim || !dim.hasOwnProperty("height") || dim.hasOwnProperty("width")) {
        console.error("Dim not avalable");
        return;
    }
    else {
        if (dim.width > dim.height) return { height: 100 + '%', width: 'auto' }
        else if (dim.width < dim.height) return { height: 'auto', width: 100 + '%' }
        else return { height: 100 + '%', width: 'auto' }
    }
}