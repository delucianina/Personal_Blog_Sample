const darkModeButton = document.querySelector('#toggle');

function toggleDarkMode() {
    const mode = localStorage.getItem('mode');
  
    if (!mode || mode === 'light') {
      document.body.classList.add('dark');
      localStorage.setItem('mode', 'dark');
      document.documentElement.style.setProperty('--circle-color', '#eee');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('mode', 'light');
      document.documentElement.style.setProperty('--circle-color', '#555');
    }
  
  }

darkModeButton.addEventListener('click', toggleDarkMode);

  



// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  // let updatedStoredEntries = JSON.parse(localStorage.getItem('storedEntries'));

  // // still seems to not work... getting error 
  // //"Uncaught TypeError: Cannot read properties of null (reading 'length') 
  // //    at readLocalStorage (logic.js:27:28) 
  // //    at HTMLButtonElement.handleFormSubmission (form.js:11:24)" "
  // if (!updatedStoredEntries) {
  //   updatedStoredEntries = [];
  //   return updatedStoredEntries;
  // } else {
  //   return updatedStoredEntries;
  // }

  return JSON.parse(localStorage.getItem('storedEntries')) || [];
}





// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(newBlogObject) {
  // can't tell if this is working... 
    let entriesArray = readLocalStorage();

    entriesArray.push(newBlogObject);

    localStorage.setItem('storedEntries', JSON.stringify(entriesArray));
};






// ! Use the following function whenever you need to redirect to a different page
// I have not changed this from the given code. 
// It seems to be angry that the redirectURL is empty but it doesn't make sense to fill it here? Should be done when calling the function? 
let redirectURL = './blog.html';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
