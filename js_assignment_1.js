/* this is for sorting the array */
function sortString(array)
{
                var tmp;
                for(var i = 0; i < array.length; i++)
                {
                    for(var j = i + 1; j < array.length; j++)
                    {
                        if(array[i] > array[j])
                        {
                            tmp = array[i];
                            array[i] = array[j];
                            array[j] = tmp;
                        }
                    }
                }

  return array;
}

/* storing the string into array */

function isAnagram(str1,str2)
{

        if (str1.length !== str2.length) return false;
        var str1 = str1.toLowerCase();
        var str2 = str2.toLowerCase();
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < str1.length; ++i) 
        {
            arr1[i] = str1[i];
            arr2[i] = str2[i];
        }
        var arr1 = sortString(arr1);
        var arr2 = sortString(arr2);
    for (var i = 0; i < arr1.length; ++i)
        if (arr1[i] !== arr2[i]) return false;
    return true;


}
/* sample input and output */
console.log(isAnagram('celler','recell')); // true     
console.log(isAnagram('arm','elbow')); // false
console.log(isAnagram('foog','goof')); // false
