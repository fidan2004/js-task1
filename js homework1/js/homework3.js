function addition(str)
{
    if(str.length>=3)
    {
       var lastword = str.substring(str.length-3)
       return lastword + str + lastword;
    }
    else{
        return false;
    }

}
console.log(addition('fidan'));