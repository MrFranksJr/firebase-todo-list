import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://shopping-list-b859a-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const appDatabase = getDatabase(app)
const itemsInDB = ref(appDatabase, "shopping")


const addButtonEl = document.getElementById('add-button')
const inputFieldEl = document.getElementById('input-field')

addButtonEl.addEventListener("click", addToList)

function addToList() {
    const inputValue = inputFieldEl.value
    console.log(inputValue)
}