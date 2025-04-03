const products = {
    tierra: [
      { name: "Zarandeada", desc: "Tierra negra seleccionada, limpia", use: "Rellenar para césped o plantas", measures: "largo-ancho-volumen", image: "img/TIERRA NEGRA ZARANDEADA.jpeg" },
<<<<<<< HEAD
      { name: "Relleno", desc: "Mezcla de tierra, piedras, arena", use: "Rellenar espacios amplios", measures: "largo-ancho-volumen", image: "img/TIERRA RELLENO.png" }
=======
      { name: "Relleno", desc: "Mezcla de tierra, piedras, arena", use: "Rellenar espacios amplios", measures: "largo-ancho-volumen", image: "/assets/img/TIERRA RELLENO.png" }
>>>>>>> 0c210a20453440ff020ddf9d393eb033944e333c
    ],
    cesped: [
      { name: "Bermuda o Tifway", desc: "Césped adaptado al clima", use: "Zonas de pleno sol", measures: "largo-ancho", image: "img/CESPED TIFWAY.jpg" },
      { name: "Grama Bahiana", desc: "Césped perenne de hoja ancha", use: "Media sombra", measures: "largo-ancho", image: "img/CESPED BERMUDA.png" }
    ],
    aridos: [
      { name: "Piedra Partida", desc: "Piedra triturada 1-3 cm", use: "Decoración o senderos", measures: "largo-ancho-volumen", image: "img/PIEDRA PARTIDA.jpg" },
      { name: "Piedra Paraná", desc: "Canto rodado pequeño", use: "Decoración o senderos", measures: "largo-ancho-volumen", image: "img/PIEDRA PARANA.jpeg" },
      { name: "Binder", desc: "Piedra micro triturada", use: "Decoración o senderos", measures: "largo-ancho-volumen", image: "img/PIEDRA BINDER.jpg" }
    ],
    naturales: [
      { name: "Corteza de Pino", desc: "Cáscara de pino triturada", use: "Decorar canteros o caminos", measures: "cantidad", image: "img/CORTEZA DE PINO.jpg" }
    ],
    cerco: [
      { name: "Photinia Fraseri", desc: "Arbusto perenne hasta 5m", use: "Cortinas verdes altas", measures: "metros", image: "img/PHOTINIA FRASSERI.jpg" },
      { name: "Olea Texano", desc: "Arbusto mediano hasta 1.8m", use: "Cerco de mediana altura", measures: "metros", image: "img/OLEA TEXANO.jpeg" },
      { name: "Viburnum Tinus", desc: "Arbusto mediano con flores", use: "Cerco verde decorativo", measures: "metros", image: "img/VIBURNUM TINUS.jpg" },
      { name: "Cotoneaster Delsiana", desc: "Arbusto de ramas finas", use: "Cerco decorativo", measures: "metros", image: "img/COTONEASTER DELSIANA.png" }
    ],
    cantero: [
      { name: "Arbustos", desc: "Plantas perennes medianas", use: "Base del jardín", measures: "cantidad", image: "img/ARBUSTOS.jpg" },
      { name: "Herbáceas, Gramíneas y Bulbosas", desc: "Plantas decorativas", use: "Color y estilo", measures: "cantidad", image: "img/HERBACEAS GRAMINEAS Y BULVOSAS.jpeg" },
      { name: "Palmeras", desc: "Plantas de gran porte", use: "Sensación tropical", measures: "cantidad", image: "img/PALMERAS.jpeg" }
    ]
  };
  
  // Validar y mostrar la sección de cotización
  document.getElementById("personal-info-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
  
    // Validar que los campos no estén vacíos
    if (!name || !email || !phone) {
      alert("Por favor, completa todos los campos antes de continuar.");
      return;
    }
  
    // Validar formato del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }
  
    // Validar formato del teléfono (solo números, al menos 8 dígitos)
    const phonePattern = /^\d{8,}$/;
    if (!phonePattern.test(phone)) {
      alert("Por favor, ingresa un número de teléfono válido (solo números, al menos 8 dígitos).");
      return;
    }
  
    // Guardar los datos en los campos ocultos del formulario
    document.getElementById("form-name").value = name;
    document.getElementById("form-email").value = email;
    document.getElementById("form-phone").value = phone;
  
    // Ocultar la sección de datos personales y mostrar la de cotización
    document.getElementById("personal-info-section").classList.add("d-none");
    document.getElementById("cotizador-section").classList.remove("d-none");
  });
  
  function updateVariants() {
    const product = document.getElementById("product").value;
    const variantSelect = document.getElementById("variant");
    variantSelect.innerHTML = '<option value="">Selecciona una variedad</option>';
    if (product && products[product]) {
      products[product].forEach(v => {
        variantSelect.innerHTML += `<option value="${v.name}">${v.name}</option>`;
      });
    }
    updateInputs();
  }
  
  function updateInputs() {
    const product = document.getElementById("product").value;
    const variant = document.getElementById("variant").value;
    const inputsDiv = document.getElementById("inputs");
    const productImage = document.getElementById("product-img");
    const productInfo = document.getElementById("product-info");
    inputsDiv.innerHTML = "";
    productImage.style.display = "none";
    productInfo.innerHTML = "<p>Selecciona un producto para ver los detalles.</p>";
  
    if (product && variant) {
      const selected = products[product].find(v => v.name === variant);
      // Actualizar imagen y detalles
      productImage.src = selected.image;
      productImage.style.display = "block";
      productInfo.innerHTML = `
        <p><a href="#" class="text-primary" onclick="alert('${selected.desc}'); return false;">¿Qué es?</a> | <a href="#" class="text-primary" onclick="alert('${selected.use}'); return false;">¿Para qué sirve?</a></p>
      `;
      // Actualizar campos de entrada
      if (selected.measures === "largo-ancho-volumen") {
        inputsDiv.innerHTML += `
          <div class="mb-3">
            <label class="form-label">Largo (cm):</label>
            <input type="number" id="largo" name="largo" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Ancho (cm):</label>
            <input type="number" id="ancho" name="ancho" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Volumen (cm³):</label>
            <input type="number" id="volumen" name="volumen" class="form-control" required>
          </div>
        `;
      } else if (selected.measures === "largo-ancho") {
        inputsDiv.innerHTML += `
          <div class="mb-3">
            <label class="form-label">Largo (cm):</label>
            <input type="number" id="largo" name="largo" class="form-control" required>
          </div>
          <div class="mb-3">
            <label class="form-label">Ancho (cm):</label>
            <input type="number" id="ancho" name="ancho" class="form-control" required>
          </div>
        `;
      } else if (selected.measures === "metros") {
        inputsDiv.innerHTML += `
          <div class="mb-3">
            <label class="form-label">Metros:</label>
            <input type="number" id="metros" name="metros" class="form-control" required>
          </div>
        `;
      } else if (selected.measures === "cantidad") {
        inputsDiv.innerHTML += `
          <div class="mb-3">
            <label class="form-label">Cantidad:</label>
            <input type="number" id="cantidad" name="cantidad" class="form-control" required>
          </div>
        `;
      }
    }
  }
  
  // Simular el envío del formulario localmente
  document.getElementById("cotizador-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
  
    // Simular una respuesta exitosa
    setTimeout(() => {
      document.getElementById("result").classList.remove("d-none");
      form.reset();
      updateInputs(); // Resetear los detalles del producto
      // Volver a la sección de datos personales
      document.getElementById("cotizador-section").classList.add("d-none");
      document.getElementById("personal-info-section").classList.remove("d-none");
    }, 500);
  });
