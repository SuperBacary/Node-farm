module.exports = (temp, product) =>{
    let outpout = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    outpout = outpout.replace(/{%IMAGE%}/g, product.image);
    outpout = outpout.replace(/{%PRICE%}/g, product.price);
    outpout = outpout.replace(/{%FROM%}/g, product.from);
    outpout = outpout.replace(/{%NUTRIENTS%}/g, product.nutrients);
    outpout = outpout.replace(/{%QUANTITY%}/g, product.quantity);
    outpout = outpout.replace(/{%DESCRIPTION%}/g, product.description);
    outpout = outpout.replace(/{%ID%}/g, product.id);

    if(!product.organic) outpout = outpout.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return outpout;
}