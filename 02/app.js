console.log('DOM');

const linksWithAttribute = document.querySelectorAll('a[data-url]');
const convertedArray = Array.from(linksWithAttribute)
console.log(convertedArray[2].getAttribute('data-url'))

// convertedArray.reduce( (acc, item) => {
//     acc[item] = 'aa'
//     return acc
// }, {})

const newArr = convertedArray.map( (el, index) => {
   return el[index] = el.getAttribute('data-url')
})
console.log(newArr)