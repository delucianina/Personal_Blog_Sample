const form = document.querySelector('#form-identifier');

console.log('test2');

// TODO: Create a function that handles the form submission. 
function handleFormSubmission(event) {

    event.preventDefault();

    console.log('test');

    //1: Grab form data and store it in local storage
    const username = document.querySelector('#username').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    const errorEl = document.querySelector('#error');

    if (!username || !title || !content) {
        errorEl.textContent = 'Please complete the form.';
        // errorEl.classList.remove('hide');
        return;
    }
    
    const newBlogObject = {
        username: username,
        title: title,
        content: content
    }

    storeLocalStorage(newBlogObject);
    //2: then redirect to the blog page using the `redirectPage` function. 
    redirectPage('./blog.html');    
    //3: If the form is submitted with missing data, display an error message to the user
}


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handleFormSubmission);
