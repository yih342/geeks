/**
 * Created by yihuan on 2016/11/8.
 */
function oSort(arr)
{
    var result ={};
    var newArr=[];
    for(var i=0;i<arr.length;i++)
    {

        if(!result[arr])
        {
            newArr.push(arr)
            result[arr]=1
        }
    }
    return newArr
}