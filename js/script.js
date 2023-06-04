var selectedButton = null;
var selectedDiv = null;

function toggleDiv(id, button) {
  var div = document.getElementById(id);

  if (selectedDiv !== div) {
    // Clicou em um novo botão
    if (selectedButton) {
      // Remove a classe de seleção do botão anterior
      selectedButton.classList.remove("selected");
      // Oculta a div do botão anterior
      selectedDiv.classList.add("hidden");
      // Remove a classe visible do botão anterior, se existir
      selectedDiv.classList.remove("visible");
    }

    // Adiciona a classe hidden a todas as outras divs
    var allDivs = document.querySelectorAll("#content1, #content2, #content3, #content4, #content5");
    allDivs.forEach(function(div) {
      div.classList.add("hidden");
    });

    // Abre a div do novo botão e adiciona a classe de seleção e visible
    div.classList.remove("hidden");
    div.classList.add("visible");
    button.classList.add("selected");

    // Atualiza as variáveis de controle
    selectedButton = button;
    selectedDiv = div;
    document.getElementById("menu-h").style.transform = "translateX(-50px)";
  } else {
    // Clicou novamente no mesmo botão, fecha a div e remove a classe de seleção e visible
    div.classList.add("hidden");
    div.classList.remove("visible");
    button.classList.remove("selected");
    selectedButton = null;
    selectedDiv = null;
    document.getElementById("menu-h").style.transform = "translateX(0)";
  }
}


