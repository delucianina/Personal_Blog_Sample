const darkModeButton = document.querySelector('#toggle');

function toggleDarkMode() {
    const mode = localStorage.getItem('mode');
  
    if (!mode || mode === 'light') {
      document.body.classList.add('dark');
      localStorage.setItem('mode', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('mode', 'light');
    }
  
  }

darkModeButton.addEventListener('click', toggleDarkMode);

  



// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  return JSON.parse(localStorage.getItem('storedEntries') || []);
}





// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(obj) {
    let entriesArray = readLocalStorage();

    const usernameInput = document.querySelector('#username').value;
    const titleInput = document.querySelector('#title').value;
    const contentInput = document.querySelector('#content').value;

    const newBlogObject = {
        username: usernameInput,
        title: titleInput,
        content: contentInput
    }

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
