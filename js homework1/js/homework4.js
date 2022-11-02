function checkvalues(a,b)
{
    if(a>0&&b>0)
    {
    if((100-a)>(100-b))

    {
        return b;
    }
    else if((100-a)==(100-b))
    {
     return 'they are equal';
    }
    else
    {
        return a;
    }
  }

if(a<0&&b<0)
{
    if((100-a)<(100-b))

    {
        return a;
    }
    else if((100-a)==(100-b))
    {
     return 'they are equal';
    }
    else
    {
        return b;
    }

}
}
console.log(checkvalues(10,20));
console.log(checkvalues(10,90));
console.log(checkvalues(50,50));
console.log(checkvalues(-30,-60));
