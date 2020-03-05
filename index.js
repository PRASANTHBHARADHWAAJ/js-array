const arr1=[{name:"sdxs",age:12},{name1:"sds",age1:56}];
const arr=[1,2,3,4,5]
let fe= arr1.forEach(function (val1) {
 console.log(val1.name);
})
//returns sdxs

//map
const mapArray= arr.map(item =>
{
	return item=item * item;
})
console.log(mapArray)
//returns [1, 4, 9, 16, 25]

//filter
const found=arr1.filter(item =>
{
return item.name == "sdxs";
})
console.log(JSON.stringify(found))
//returns [{"name":"sdxs","age":12}]

//includes returns true or false
const found= arr.includes(5)
console.log(found)

const i = arr.indexOf(1)
console.log(i)
// 0

const findind = arr1.findIndex(function (val) 
{
  return val.name == 'sdxs';
})
console.log(findind);
//0

//find
const found=arr.find(item =>
{
return item == 2;
})
console.log(found);
//2


//slice
const slice1 = arr.slice(1,4)
console.log(slice1)
//[2,3,4]

//splice
const splice1 = arr.splice()








 


