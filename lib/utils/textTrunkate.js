export default function truncate(cid, size) {

    if(cid === undefined){
        return cid
    }

    if(cid.length < (size*2)){
        return cid
    }


    
    let middle = " ... ";
    let first3 = cid.substring(0, size);
    let last3 = cid.substring(cid.length - size, cid.length );

    return `${first3}${middle}${last3}`;
  }