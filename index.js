"use strict"

const btns = document.getElementsByClassName("bottoni")
const min_btns = document.getElementsByClassName("min-button")

for (let btn of btns) {
    btn.addEventListener("click", paragrafo)
}

for (let btn of min_btns) {
    btn.addEventListener("click", min_paragrafo)
}

let prg
function paragrafo() {
    let id = this.id.split('-')[0]
    const aperto = document.getElementsByClassName("paragrafo-aperto")[0]
    prg = document.getElementsByClassName(`card-${id}`)[0]
    if (aperto != prg) {
        if (aperto) {
            aperto.classList.remove("paragrafo-aperto")
            aperto.addEventListener("transitionend", aggigereParagrafo)
        }
        else {
            prg.classList.add("paragrafo-aperto")
        }
    }
    else {
        prg.classList.remove("paragrafo-aperto")
        prg = ""
    }
}

function aggigereParagrafo() {
    prg.classList.add("paragrafo-aperto")
    this.removeEventListener("transitionend", aggigereParagrafo)
}

function min_paragrafo() {
    const id = this.id.split('-')[0];

    localStorage.setItem("targetScrollID", id);

    window.location.href = "./Conoscenze.html";
}

window.addEventListener("DOMContentLoaded", function(){
    const targetID = localStorage.getItem("targetScrollID");

    if (targetID) {
        setTimeout(function() {
            const btn = document.getElementById(`${targetID}-btn`);

            if (btn) {
                btn.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                if(targetID!='icdl' && targetID!='camb'){
                    btn.click();
                }
            }
            localStorage.removeItem("targetScrollID");
        }, 100);
    }
});
