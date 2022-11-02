str1 = 'home';
str2 = 'New'+ str1;
function check(str2)
{
if(str2.substring(0, 3) =='New')
{
    return str2;
 }
}
console.log(check(str2));