//please work

document.querySelector(".button1").addEventListener("click",function(){
    document.querySelector(".form1").classList.toggle("hidden");
});

document.querySelectorAll('.button3').forEach(button => {
    button.addEventListener('click', function() {
        const x = parseInt(this.dataset.i);
        const postElement = document.querySelector(`#post${x}`);
        const title = postElement.querySelector("h3").innerText;
        const content =postElement.querySelector("p").innerText;
        
        postElement.innerHTML = `
            <input type="text" value="${title}" id="editTitle${x}">
            <textarea id="editContent${x}">${content}</textarea>
            <button class="saveButton">Save</button>`;
        
        const saveButton = postElement.querySelector('.saveButton');
        saveButton.addEventListener('click', function() {
            saveChanges(x);
        });
    });
});

function saveChanges(x) {
    const postElement = document.querySelector(`#post${x}`);
    let title = postElement.querySelector(`#editTitle${x}`).value;
    let content = postElement.querySelector(`#editContent${x}`).value;
    postElement.innerHTML = `
        <h3 id="title<%= i %>">${title}</h3>
        <p id="content<%= i %>">${content}</p>
        <form action="/del" method="GET" class="button2">
            <input type="hidden" name="index" value="${x}">
            <input type="submit" value="delete">
        </form>
        
        <button class="button3" data-i="${x}">edit again</button>`;
        postElement.querySelector("h3").innerText =`${title}`;
        postElement.querySelector("p").innerText =`${content}`;

        
    // Attach event listener to the "edit again" button after it's recreated
    const editAgainButton = postElement.querySelector('.button3');
    editAgainButton.addEventListener('click', function() {
        editPost(x);
    });
}

// Modified editPost function to accept x as a parameter
function editPost(x) {
    const postElement = document.querySelector(`#post${x}`);
    const title = postElement.querySelector("h3").innerText;
    const content =postElement.querySelector("p").innerText;
    
    postElement.innerHTML = `
        <input type="text" value="${title}" id="editTitle${x}">
        <textarea id="editContent${x}">${content}</textarea>
        <button class="saveButton">Save</button>`;

    const saveButton = postElement.querySelector('.saveButton');
    saveButton.addEventListener('click', function() {
        saveChanges(x);
    });
}
