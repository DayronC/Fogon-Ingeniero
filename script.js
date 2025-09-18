document.addEventListener("DOMContentLoaded", () => {
  // --- BUSCADOR ---
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.querySelector(".search-input");
  const searchMessage = document.getElementById("search-message");

  // Rutas corregidas con carpetas
  const recetas = {
    "carne":"Carnes/Bistec.html","bistec":"Carnes/Bistec.html","res":"Carnes/Bistec.html",
    "pollo":"Pollos/Pollo_Horno.html","ave":"Pollos/Pollo_Horno.html",
    "pescado":"Pescados/Filete_Pescado.html","filete":"Pescados/Filete_Pescado.html","pez":"Pescados/Filete_Pescado.html",
    "postre":"Postre/Flan_Vainilla.html","flan":"Postre/Flan_Vainilla.html","dulce":"Postre/Flan_Vainilla.html","vainilla":"Postre/Flan_Vainilla.html",
  };

  function showMessage(texto, tipo){
    if(!searchMessage) return;
    searchMessage.textContent = texto;
    searchMessage.className = "search-message " + tipo + " visible";
    setTimeout(()=>{ searchMessage.classList.remove("visible"); searchMessage.style.display="none"; }, 3000);
  }

  if(searchForm){
    searchForm.addEventListener("submit", (e)=>{
      e.preventDefault();
      const q = (searchInput?.value || "").trim().toLowerCase();
      if(!q){ showMessage("⚠️ Escribe algo para buscar","error"); return; }
      const key = Object.keys(recetas).find(k=> q.includes(k));
      if(key){ showMessage("✅ Redirigiendo a la receta de " + key,"success"); setTimeout(()=>{ window.location.href = recetas[key]; }, 900); }
      else{ showMessage("❌ No encontré recetas para: " + q,"error"); }
    });
  }

  // --- SLIDER ---
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let index = 0;

  function showSlide(i){
    slides.forEach(s=> s.classList.remove("active"));
    slides[i].classList.add("active");
  }
  if(slides.length){
    showSlide(index);
    let timer = setInterval(()=>{ index = (index+1)%slides.length; showSlide(index); }, 4000);

    const reset = ()=>{ clearInterval(timer); timer = setInterval(()=>{ index = (index+1)%slides.length; showSlide(index); }, 4000); };
    prevBtn?.addEventListener("click", ()=>{ index = (index-1+slides.length)%slides.length; showSlide(index); reset(); });
    nextBtn?.addEventListener("click", ()=>{ index = (index+1)%slides.length; showSlide(index); reset(); });
  }

  // --- FOOTER YEAR ---
  const yearSpan = document.getElementById("year");
  if(yearSpan) yearSpan.textContent = new Date().getFullYear();
});
