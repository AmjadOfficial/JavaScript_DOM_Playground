    const text = document.getElementById("text");
    const addTextBtn = document.getElementById("addTextBtn");
    const changeText = document.getElementById("changeText");
    //add event listener to the button
    addTextBtn.addEventListener("click", () => {
        changeText.innerHTML = text.value;
        const newPara = document.createElement("p");
        newPara.innerHTML = text.value;
        newPara.style.color = "red";
        newPara.style.fontSize = "20px";
        document.body.appendChild(newPara);
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Clear All";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.addEventListener("click", () => {
            document.body.removeChild(newPara);
            document.body.removeChild(deleteBtn);
        });
        document.body.appendChild(deleteBtn);

    });