console.log('DOM');

// wyszukanie wszystkich linków, które posiadają atrybut data-url.
const linksWithAttribute = document.querySelectorAll('a[data-url]');
const convertedArray = Array.from(linksWithAttribute)

// Następnie należy pobrać zawartość tego atrybutu do zmiennej.
// Potem wartość tej zmiennej przypisać do atrybutu href wyszukanego elementu </a>.
const newArr = convertedArray.map( (el, index) => {
   return el[index] = el.getAttribute('data-url');
})

const [ devMentor, developerMozilla, stackOverFlow ] = newArr;

convertedArray[0].href = devMentor;
convertedArray[1].href = developerMozilla;
convertedArray[2].href = stackOverFlow;

