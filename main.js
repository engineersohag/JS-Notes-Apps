const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

let notes = document.querySelectorAll('.input-box');

	// after reopen and reload browser -- show items
function showNotes(){
	notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();


	// save to local storage
function updateStorage(){
	localStorage.setItem("notes", notesContainer.innerHTML);
}

	// -- input box create 
createBtn.addEventListener("click", ()=> {
	let inputBox = document.createElement("p");
	let img = document.createElement("img");
	inputBox.className = "input-box";
	inputBox.setAttribute("contenteditable", "true");
	img.src = "img/delete.png";
	notesContainer.appendChild(inputBox).appendChild(img);
});

	// remove note box
notesContainer.addEventListener("click", (e) => {
	if (e.target.tagName === "IMG") {
		e.target.parentElement.remove();
		updateStorage();
	}else if(e.target.tagName === "P"){
		notes = document.querySelectorAll(".input-box");
		notes.forEach(nt => {
			nt.onkeyup = function(){
				updateStorage();
			}
		})
	}
});