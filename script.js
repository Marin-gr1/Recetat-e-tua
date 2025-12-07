function addRecipe() {
    let name = document.getElementById("recipeName").value;
    let ingredients = document.getElementById("ingredients").value;
    let instructions = document.getElementById("instructions").value;

    if (name.trim() === "" || ingredients.trim() === "" || instructions.trim() === "") {
        alert("Ju lutem plotësoni të gjitha fushat!");
        return;
    }

    let recipeBox = document.createElement("div");
    recipeBox.className = "recipe-box";

    recipeBox.innerHTML = `
        <button class="delete-btn" onclick="deleteRecipe(this)">Fshi</button>
        <h3>${name}</h3>
        <p><strong>Përbërësit:</strong><br>${ingredients.replace(/\n/g, "<br>")}</p>
        <p><strong>Udhëzimet:</strong><br>${instructions.replace(/\n/g, "<br>")}</p>
    `;

    document.getElementById("recipeList").appendChild(recipeBox);

    document.getElementById("recipeName").value = "";
    document.getElementById("ingredients").value = "";
    document.getElementById("instructions").value = "";
}

function deleteRecipe(btn) {
    btn.parentElement.remove();
}