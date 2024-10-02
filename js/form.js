const form = document.querySelector('#form-identifier');
const submitBtn = document.querySelector('#submit');


// TODO: Create a function that handles the form submission. 
function handleFormSubmission(event) {

    event.preventDefault();

    //1: Grab form data and store it in local storage
    let entriesArray = readLocalStorage();
    entriesArray.array.forEach(storeLocalStorage);

    //2: then redirect to the blog page using the `redirectPage` function. 
    redirectPage('./blog.html');

    
    //3: If the form is submitted with missing data, display an error message to the user
    // if (!username || username === "") {
    //     const errorMessage = document.querySelector('#error');
    //     errorMessage.innerHTML = "";
    //     errorMessage.innerHTML = 'Please complete the form.';
    // } else if (!title || title === "") {
    //     const errorMessage = document.querySelector('#error');
    //     errorMessage.innerHTML = '';
    //     errorMessage.innerHTML = 'Please complete the form.';
    // } else if (!content || content === '') {
    //     const errorMessage = document.querySelector('#error');
    //     errorMessage.innerHTML = '';
    //     errorMessage.innerHTML = 'Please complete the form.';
    // }
}


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
submitBtn.addEventListener('click', handleFormSubmission);
