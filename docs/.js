// Selecciona los trozos y los pepperonis 

const slices = document.querySelectorAll('.slice'); 

const pepperonis = document.querySelectorAll('.pepperoni'); 

  

// Función para animar las porciones de pizza 

function animatePizza() { 

  slices.forEach((slice, index) => { 

    setTimeout(() => { 

      slice.classList.add('visible'); // Muestra el trozo 

    }, index * 500); // Retardo entre trozos 

  }); 

  

  // Mostrar los pepperonis después de que todos los trozos aparezcan 

  setTimeout(() => { 

    pepperonis.forEach((pepperoni, index) => { 

      setTimeout(() => { 

        pepperoni.classList.add('visible'); // Muestra el pepperoni 

      }, index * 100); // Retardo entre pepperonis 

    }); 

  }, slices.length * 500); // Espera a que los trozos se muestren 

} 

  

// Inicia la animación 

animatePizza(); 