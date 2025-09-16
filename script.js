e// -------------------------
// SCRIPT GLOBAL
// -------------------------

document.addEventListener("DOMContentLoaded", () => {
  // --- BUSCADOR ---
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.querySelector(".search-input");
  const searchMessage = document.getElementById("search-message");

  // Diccionario de recetas -> página de destino
  const recetas = {
    "carne": "carne.html",
    "bistec": "carne.html",
    "res": "carne.html",
    "pollo": "pollo.html",
    "aves": "pollo.html",
    "pescado": "pescado.html",
    "filete": "pescado.html",
    "pez": "pescado.html",
    "postre": "postre.html",
    "dulce": "postre.html",
    "vainilla": "postre.html",
    "flan": "postre.html"
  };

  // Evento al enviar el buscador
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita recargar página

    const query = searchInput.value.trim().toLowerCase();

    if (query === "") {
      showMessage("⚠️ Por favor escribe algo para buscar", "error");
      return;
    }

    let encontrado = false;
    for (let palabra in recetas) {
      if (query.includes(palabra)) {
        showMessage("✅ Redirigiendo a recetas relacionadas con " + palabra, "success");

        // Redirigir con pequeña pausa
        setTimeout(() => {
          window.location.href = recetas[palabra];
        }, 1200);

        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      showMessage("❌ No se encontró ninguna receta relacionada con: " + query, "error");
    }
  });

  // --- FUNCIÓN PARA MOSTRAR MENSAJES ---
  function showMessage(texto, tipo) {
    searchMessage.textContent = texto;
    searchMessage.className = ""; // resetear clases
    searchMessage.classList.add("visible");

    if (tipo === "success") {
      searchMessage.classList.add("success");
    } else {
      searchMessage.classList.add("error");
    }

    // Mostrar
    searchMessage.style.display = "block";

    // Ocultar automáticamente después de 3s
    setTimeout(() => {
      searchMessage.classList.remove("visible");
      setTimeout(() => {
        searchMessage.style.display = "none";
      }, 500); // tiempo para animación fade-out
    }, 3000);
  }

  // --- AÑO AUTOMÁTICO EN EL FOOTER ---
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
