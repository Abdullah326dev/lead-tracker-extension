import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js"
import { getDatabase, 
        ref,
        push,
        onValue,
        remove } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js"


const firebaseConfig = {
    databaseURL: import.meta.env.VITE_DATABASE_URL
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database, "leads") 

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deletBtn = document.getElementById("delet-btn")
const saveTab = document.getElementById("save-tab")

onValue(referenceInDB, function(snapshot){
    const snapShotVale = snapshot.val()
    const leads = Object.values(snapShotVale)
    renderLeads(leads)
})
 
function leadPusher(){
    push(referenceInDB, inputEl.value)
    inputEl.value = ""
}

function renderLeads(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}

function deletAll(){
   remove(referenceInDB)
   ulEl.innerHTML = ""
}


// event lisiners

deletBtn.addEventListener("dblclick", deletAll)
inputBtn.addEventListener("click", leadPusher)
saveTab.addEventListener("click", SaveChormeTabs) 