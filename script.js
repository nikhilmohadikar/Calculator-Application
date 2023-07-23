const Buttons = document.querySelectorAll(".buttons-btn button")
const Number = document.querySelector("#number");
const Input = document.querySelector("#input-box");
const historyBtn = document.querySelector("#history-btn");
const memoryBtn = document.querySelector("#memory-btn");
const Trash = document.querySelector("#trash");
let output = "";
let store = 0;
let plus1 = 1;
let plus2 = 1;
let target_plus = 1;
let recentArray = [""]
let history_data_append = "";
let id = 0;
let outputSymbolsStore = "";
let outputXValuesStore = "";
let outputXStore = "";

function mainDivTag() {
    const div_tag = document.createElement("div");
    const historyContainer = document.getElementById("history_container");
    document.body.appendChild(div_tag);

    recentArray.forEach(() => {
        history_data_append = `<div class="color-container-1" id="color-container-${id}"></div>`
        setTimeout(() => {
            firstDivTag();
        });
    })
    historyContainer.innerHTML += history_data_append

    let firstDivCreatingArray = [""];
    let firstDivDataStore = ""
    function firstDivTag() {
        let firstDivTag = document.createElement("div");
        let firstcolorContainerID = document.getElementById(`color-container-${id}`);
        document.body.appendChild(firstDivTag);

        firstDivCreatingArray.forEach(() => {
            firstDivDataStore = `<div class="color1" id="color1">${outputSymbolsStore}= </div>`
            firstcolorContainerID.innerHTML += firstDivDataStore;
            secondDivTag();
        })
    }

    let secondDivCreatingArray = [""];
    let secondDivDataStore = ""
    function secondDivTag() {
        let secondDivTag = document.createElement("div");
        let secondColorContainerID = document.getElementById(`color-container-${id}`);
        document.body.appendChild(secondDivTag);

        secondDivCreatingArray.forEach(() => {
            secondDivDataStore = `<div class="color2" id="color2">${output}</div>`
            secondColorContainerID.innerHTML += secondDivDataStore;
        })
    }
}

function xValueFucntion() {
    const div_tag = document.createElement("div");
    const historyContainer = document.getElementById("history_container");
    document.body.appendChild(div_tag);

    recentArray.forEach(() => {
        history_data_append = `<div class="color-container-1" id="color-container-${id}"></div>`
        setTimeout(() => {
            firstDivTag();
        });
    })
    historyContainer.innerHTML += history_data_append

    let firstDivCreatingArray = [""];
    let firstDivDataStore = ""
    function firstDivTag() {
        let firstDivTag = document.createElement("div");
        let firstcolorContainerID = document.getElementById(`color-container-${id}`);
        document.body.appendChild(firstDivTag);

        firstDivCreatingArray.forEach(() => {
            firstDivDataStore = `<div class="color1" id="color1">${outputXValuesStore} </div>`
            firstcolorContainerID.innerHTML += firstDivDataStore;
            secondDivTag();
        })
    }

    let secondDivCreatingArray = [""];
    let secondDivDataStore = ""
    function secondDivTag() {
        let secondDivTag = document.createElement("div");
        let secondColorContainerID = document.getElementById(`color-container-${id}`);
        document.body.appendChild(secondDivTag);

        secondDivCreatingArray.forEach(() => {
            secondDivDataStore = `<div class="color2" id="color2">${outputXStore}</div>`
            secondColorContainerID.innerHTML += secondDivDataStore;
        })
    }
}


// Creating array for Buttons
Array.from(Buttons).forEach((buttons) => {
    buttons.addEventListener("click", (e) => {

        if (e.target.value === "=") {
            const History = document.getElementById("history");
            History.innerHTML = ""

            if (document.querySelector("input").value === "") {
            }
            else if (output === document.querySelector("input").value) {
                output = eval(output);
                document.querySelector("input").value = output
                Number.textContent += ` = ${output}`
                Trash.style.opacity = "1"
                plus1++;
                id++;
                mainDivTag()
            }
            else {
                document.querySelector("input").value = store;
                Trash.style.opacity = "1"
                plus2++;
                id++;
                xValueFucntion();
            }

            if (plus1 > 1) {
                document.querySelector("input").value = output;
            }

            if (plus2 > 2) {
                document.querySelector("input").value = store;
            }
        }
        else if (e.target.value === "%") {
            if (document.querySelector("input").value === "") { }
            else {
                output += e.target.value;
                output = output.slice(0, -1)
                output = output * output / 100

                document.querySelector("input").value = output;
            }
        }
        else if (e.target.value === "C") {
            if (document.querySelector("input").value === "") { }
            else {
                output = ""
                document.querySelector("input").value = "";
                Number.textContent = ""
            }
        }
        else if (e.target.value === "CE") {
            if (document.querySelector("input").value === "") { }
            else {
                output = "";
                document.querySelector("input").value = output;
            }
        }
        else if (e.target.value === "delete") {
            if (document.querySelector("input").value === "") { }
            else {
                output = output.slice(0, -1)
                document.querySelector("input").value = output;
                Number.textContent = Number.textContent.slice(0, -1)
                Trash.style.opacity = "0"
            }
        }
        else if (e.target.value === "/") {
            if (document.querySelector("input").value === "") { }
            else {
                output += e.target.value;
                document.querySelector("input").value = output;
                Number.textContent = output;
            }
        }
        else if (e.target.value === "*") {
            if (document.querySelector("input").value === "") { }
            else {
                output += e.target.value;
                document.querySelector("input").value = output;
                Number.textContent = output;
            }
        }
        else if (e.target.value === "-") {
            if (document.querySelector("input").value === "") { }
            else {
                output += e.target.value;
                document.querySelector("input").value = output;
                Number.textContent = output;
            }
        }
        else if (e.target.value === "+") {
            if (document.querySelector("input").value === "") { }
            else {
                output += e.target.value;
                document.querySelector("input").value = output;
                Number.textContent = output;
            }
        }
        else if (e.target.value === "2√x") {
            if (document.querySelector("input").value === "") { }
            else {
                output += e.target.value
                output = output.slice(0, -3)

                document.querySelector("input").value = Math.sqrt(output);
                Number.textContent = `√ (${output}) = ${Math.sqrt(output)}`;
                store = Math.sqrt(output);
                outputXValuesStore = `√(${output}) = `
                outputXStore = Math.sqrt(output)
            }
        }
        else if (e.target.value === "x²") {
            if (document.querySelector("input").value === "") { }
            else {
                output += e.target.value
                output = output.slice(0, -2)

                document.querySelector("input").value = output * output;
                Number.textContent = `sqr (${output}) = ${output * output}`;
                store = output * output;
                outputXValuesStore = `sqr(${output}) = `
                outputXStore = output * output
            }
        }
        else if (e.target.value === "1/x") {
            if (document.querySelector("input").value === "") { }
            else {
                let one_number = 1;
                output += e.target.value
                output = output.slice(0, -3)

                document.querySelector("input").value = one_number / output;
                Number.textContent = `${one_number} / (${output}) = ${one_number / output}`;
                store = one_number / output;
                outputXValuesStore = `${one_number}/(${output}) =`
                outputXStore = one_number / output
            }
        }
        else if (e.target.value === "+/-") {
            if (document.querySelector("input").value === "") { }
            else {
                output += e.target.value
                output = output.slice(0, -3)

                if (output > 0) {
                    output = -(output)
                    document.querySelector("input").value = output;
                    Number.textContent = output;
                    store = output;
                }
                else {
                    output = -(output)
                    document.querySelector("input").value = output;
                    Number.textContent = output;
                    store = output;
                }
            }
        }
        else {
            output += e.target.value;
            document.querySelector("input").value = output;
            Number.textContent = output;
            outputSymbolsStore = output
        }
    });
});

// History massege showing in the history container
const History = document.getElementById("history");
History.innerHTML = "There's no history yet"

function historyCalling() {
    let divCreating = document.createElement("div");
    const historyContainer = document.getElementById("history_container");
    document.body.appendChild(divCreating);

    historyContainer.innerHTML += `<div class="history" id="history"></div>`;

    const history = document.getElementById("history");
    history.innerHTML += "There's no history yet"
}

function memoryCalling() {
    let divCreating = document.createElement("div");
    const historyContainer = document.getElementById("history_container");
    document.body.appendChild(divCreating);

    historyContainer.innerHTML += `<div class="history" id="history"></div>`;

    const history = document.getElementById("history");
    history.innerHTML += "There's is nothing saved in your memory"
}

historyBtn.addEventListener("click", () => {
    const History = document.getElementById("history");
    const memoryBtn = document.getElementById("memory-btn");
    const historyBtn = document.getElementById("history-btn");

    memoryBtn.classList.remove("show")
    historyBtn.classList.remove("show")

    History.innerHTML = "There's no history yet"
    if (!History.closest(".colorClass")) { }
});

memoryBtn.addEventListener("click", () => {
    const History = document.getElementById("history");
    const memoryBtn = document.getElementById("memory-btn");
    const historyBtn = document.getElementById("history-btn");
    const historyContainer = document.getElementById("history_container");

    memoryBtn.classList.add("show")
    historyBtn.classList.add("show")
    History.innerHTML = "There's is nothing saved in your memory"
    historyContainer.innerHTML = "";
    memoryCalling();
});

Trash.addEventListener("click", () => {
    const historyContainer = document.getElementById("history_container");
    historyContainer.innerHTML = "";
    historyCalling()
    Trash.style.opacity = "0"
});


// Function to filter out non-numeric characters from the input
function displayCheckingInput(event) {
    let inputField = event.target;
    let sanitizedInput = inputField.value.replace(/[^0-9+\-*/]/g, '');
    inputField.value = sanitizedInput;
}

// Add event listener to the input field to filter non-numeric characters
document.getElementById("input-box").addEventListener("input", displayCheckingInput);

// Function to validate the input when the submit button is clicked
function numberAccept() {
    let inputField = document.getElementById("input-box");
    let inputValue = inputField.value.trim();
    let sumation = 0;

    if (inputValue === "") {
        // console.log("Please enter a number.");
    } else {
        // console.log("Input accepted: " + inputValue);
    }
}