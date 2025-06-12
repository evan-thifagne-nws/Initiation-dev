// On récupère les boutons
let boutonAjouter = document.getElementById("ajouter");
let boutonCalcul = document.getElementById("boutonCalcul");

boutonAjouter.addEventListener("click", () => {
  // Récupération du container
  let container = document.getElementById("container");

  // Création des champs input
  let inputNom = document.createElement("input");
  inputNom.setAttribute("placeholder", "Nom de l'étudiant");

  let inputNote = document.createElement("input");
  inputNote.setAttribute("placeholder", "Note de l'étudiant");
  inputNote.setAttribute("type", "number");
  inputNote.value = 0;

  // Log quand la note change
  inputNote.addEventListener("change", () => {
    console.log("Valeur changée");
  });

  // Création d'un groupe pour les inputs
  let inputGroup = document.createElement("div");
  inputGroup.appendChild(inputNom);
  inputGroup.appendChild(inputNote);

  // Injection dans le container
  container.appendChild(inputGroup);

  console.log(container);
});

boutonCalcul.addEventListener("click", () => {
  let notes = document.querySelectorAll('input[type="number"]');
  calculerMoyenne(notes);
});

function calculerMoyenne(notes) {
  let moyenne = 0;
  for (let note of notes) {
    moyenne = moyenne + Number(note.value);
  }

  moyenne = moyenne / notes.length;
  alert("La moyenne de la classe est de " + moyenne);
  return moyenne;
}
