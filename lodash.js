//lodash ceil
let a1=5.4
let b1=parseInt(a1)+1
console.log(b1)

//lodash max
let a2=[2,5,8,9,2,3,4]
a2.sort(function(a,b){
    return b-a
})
console.log(a2[0])

//lodash pull

let a3=[2,5,8,9,2,3,4]
let n3=2
for(let i=0;i<a3.length;i++)
{
    if(a3[i]==n3)
    {
        a3.splice(i,1)
    }
}
console.log(a3)

//lodash camelCase
let a4="guvi geek code"
let b4=a4.split(' ')
for(let i=1;i<b4.length;i++)
{
    let k=b4[i].split('')
    k[0]=k[0].toUpperCase()
    b4[i]=k.join('')
}
console.log(b4.join(''))

//lodash Capitalize

let a5="guvi geek code"
let b5=a5[0].split(' ')
for(let i=0;i<b4.length;i++)
{
    let k=b4[i].split('')
    k[0]=k[0].toUpperCase()
    b5[i]=k.join('')
}
console.log(b5.join(' '))
