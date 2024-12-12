const porciones = document.querySelectorAll('.porcion');
const pepperonis = document.querySelectorAll('.pepperoni');
const titulo = document.getElementById('titulo');


// Función para animar las porciones y los pepperonis
function animarPizza() {
  porciones.forEach((porcion, index) => {
    setTimeout(() => {
      porcion.classList.add('visible');
    }, index * 500);
  });

  setTimeout(() => {
    pepperonis.forEach((pepperoni, index) => {
      setTimeout(() => {
        pepperoni.classList.add('visible');
      }, index * 200);
    });
  }, porciones.length * 500);
}

// Animar el título
function animarTitulo() {
<<<<<<< HEAD
  const texto = "Último Trozo";
=======
  const texto = ": Último Trozo";
>>>>>>> 7c5f67b7588cc3987db04bbad94b1c2d7734c2e1
  let index = 0;

  const intervalo = setInterval(() => {
    titulo.textContent += texto[index];
    index++;

    if (index === texto.length) {
      clearInterval(intervalo);
    }
  }, 200);
}

document.addEventListener('DOMContentLoaded', () => {
  animarTitulo();
  animarPizza();
});
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


(function(vegaEmbed) {
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300}}, "data": {"name": "data-82532849182174375ef3c736120e134f"}, "mark": "rect", "encoding": {"color": {"field": "Promedio Rating", "scale": {"domain": [0, 5], "scheme": "orangered"}, "title": "Promedio Rating", "type": "quantitative"}, "opacity": {"condition": {"value": 1, "selection": "selector008"}, "value": 0.2}, "tooltip": [{"field": "Comuna", "type": "nominal"}, {"field": "Cadena", "type": "nominal"}, {"field": "Promedio Rating", "type": "quantitative"}], "x": {"field": "Cadena", "title": "Cadena", "type": "nominal"}, "y": {"field": "Comuna", "title": "Comunas", "type": "nominal"}}, "selection": {"selector008": {"type": "multi", "fields": ["Comuna"], "bind": "legend"}}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-82532849182174375ef3c736120e134f": [{"Comuna": "Santiago", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 6, "Total Reviews": "50,064", "Promedio Rating": 4.3}, {"Comuna": "Santiago", "Cadena": "Melt Pizza", "Cantidad de locales": 2, "Total Reviews": "40,580", "Promedio Rating": 4.4}, {"Comuna": "Santiago", "Cadena": "Little Caesars", "Cantidad de locales": 2, "Total Reviews": "9,204", "Promedio Rating": 4.5}, {"Comuna": "Santiago", "Cadena": "Domino's Pizza", "Cantidad de locales": 2, "Total Reviews": "8,075", "Promedio Rating": 3.1}, {"Comuna": "Santiago", "Cadena": "Telepizza", "Cantidad de locales": 3, "Total Reviews": "6,371", "Promedio Rating": 4.0}, {"Comuna": "Santiago", "Cadena": "Pizzapizza", "Cantidad de locales": 2, "Total Reviews": "1711", "Promedio Rating": 4.6}, {"Comuna": "Santiago", "Cadena": "Pizza hut", "Cantidad de locales": 6, "Total Reviews": "9,379", "Promedio Rating": 3.2}, {"Comuna": "Santiago", "Cadena": "Lovdo", "Cantidad de locales": 1, "Total Reviews": "4,091", "Promedio Rating": 4.1}, {"Comuna": "Santiago", "Cadena": "Milano\u00b4s pizza", "Cantidad de locales": 4, "Total Reviews": "6,012", "Promedio Rating": 4.5}, {"Comuna": "Maip\u00fa", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 6, "Total Reviews": "36,614", "Promedio Rating": 4.6}, {"Comuna": "Maip\u00fa", "Cadena": "Melt Pizza", "Cantidad de locales": 3, "Total Reviews": "25,546", "Promedio Rating": 4.6}, {"Comuna": "Maip\u00fa", "Cadena": "Little Caesars", "Cantidad de locales": 3, "Total Reviews": "39,693", "Promedio Rating": 4.4}, {"Comuna": "Maip\u00fa", "Cadena": "Domino's Pizza", "Cantidad de locales": 2, "Total Reviews": "5,516", "Promedio Rating": 3.5}, {"Comuna": "Maip\u00fa", "Cadena": "Telepizza", "Cantidad de locales": 4, "Total Reviews": "11,153", "Promedio Rating": 4.2}, {"Comuna": "Maip\u00fa", "Cadena": "Pizzapizza", "Cantidad de locales": 2, "Total Reviews": "1520", "Promedio Rating": 3.7}, {"Comuna": "Maip\u00fa", "Cadena": "Pizza hut", "Cantidad de locales": 9, "Total Reviews": "19,978", "Promedio Rating": 3.3}, {"Comuna": "Puente Alto", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 4, "Total Reviews": "28,687", "Promedio Rating": 4.4}, {"Comuna": "Puente Alto", "Cadena": "Melt Pizza", "Cantidad de locales": 3, "Total Reviews": "29,524", "Promedio Rating": 4.6}, {"Comuna": "Puente Alto", "Cadena": "Little Caesars", "Cantidad de locales": 4, "Total Reviews": "20,630", "Promedio Rating": 4.6}, {"Comuna": "Puente Alto", "Cadena": "Domino's Pizza", "Cantidad de locales": 1, "Total Reviews": "2,009", "Promedio Rating": 3.6}, {"Comuna": "Puente Alto", "Cadena": "Telepizza", "Cantidad de locales": 5, "Total Reviews": "4,400", "Promedio Rating": 4.2}, {"Comuna": "Puente Alto", "Cadena": "Pizzapizza", "Cantidad de locales": 1, "Total Reviews": "916", "Promedio Rating": 3.7}, {"Comuna": "Puente Alto", "Cadena": "Pizza hut", "Cantidad de locales": 2, "Total Reviews": "10,369", "Promedio Rating": 4.3}, {"Comuna": "Puente Alto", "Cadena": "Lovdo", "Cantidad de locales": 2, "Total Reviews": "1,525", "Promedio Rating": 3.9}, {"Comuna": "Las Condes", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 9, "Total Reviews": "34,515", "Promedio Rating": 4.2}, {"Comuna": "Las Condes", "Cadena": "Melt Pizza", "Cantidad de locales": 3, "Total Reviews": "20,386", "Promedio Rating": 4.4}, {"Comuna": "Las Condes", "Cadena": "Little Caesars", "Cantidad de locales": 5, "Total Reviews": "16,414", "Promedio Rating": 4.2}, {"Comuna": "Las Condes", "Cadena": "Domino's Pizza", "Cantidad de locales": 2, "Total Reviews": "4,544", "Promedio Rating": 3.9}, {"Comuna": "Las Condes", "Cadena": "Waldo\u00b4s", "Cantidad de locales": 1, "Total Reviews": "278", "Promedio Rating": 4.8}, {"Comuna": "Las Condes", "Cadena": "Pizzapizza", "Cantidad de locales": 5, "Total Reviews": "2208", "Promedio Rating": 1.1}, {"Comuna": "Las Condes", "Cadena": "Pizza hut", "Cantidad de locales": 7, "Total Reviews": "6,857", "Promedio Rating": 4.0}, {"Comuna": "Las Condes", "Cadena": "Lovdo", "Cantidad de locales": 1, "Total Reviews": "33", "Promedio Rating": 3.6}, {"Comuna": "La Florida ", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 6, "Total Reviews": "37,509", "Promedio Rating": 4.3}, {"Comuna": "La Florida ", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": "15,251", "Promedio Rating": 4.6}, {"Comuna": "La Florida ", "Cadena": "Little Caesars", "Cantidad de locales": 2, "Total Reviews": "13,772", "Promedio Rating": 4.4}, {"Comuna": "La Florida ", "Cadena": "Domino's Pizza", "Cantidad de locales": 2, "Total Reviews": "5,018", "Promedio Rating": 3.0}, {"Comuna": "La Florida ", "Cadena": "Telepizza", "Cantidad de locales": 3, "Total Reviews": "1,145", "Promedio Rating": 3.9}, {"Comuna": "La Florida ", "Cadena": "Pizzapizza", "Cantidad de locales": 1, "Total Reviews": "708", "Promedio Rating": 3.9}, {"Comuna": "La Florida ", "Cadena": "Pizza hut", "Cantidad de locales": 2, "Total Reviews": "4,202", "Promedio Rating": 4.4}, {"Comuna": "La Florida ", "Cadena": "Lovdo", "Cantidad de locales": 2, "Total Reviews": "1,011", "Promedio Rating": 3.8}, {"Comuna": "\u00d1u\u00f1oa", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 5, "Total Reviews": "28,635", "Promedio Rating": 4.0}, {"Comuna": "\u00d1u\u00f1oa", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": "10,183", "Promedio Rating": 4.3}, {"Comuna": "\u00d1u\u00f1oa", "Cadena": "Little Caesars", "Cantidad de locales": 2, "Total Reviews": "20,828", "Promedio Rating": 4.4}, {"Comuna": "\u00d1u\u00f1oa", "Cadena": "Domino's Pizza", "Cantidad de locales": 2, "Total Reviews": "8,082", "Promedio Rating": 3.2}, {"Comuna": "\u00d1u\u00f1oa", "Cadena": "Telepizza", "Cantidad de locales": 1, "Total Reviews": "754", "Promedio Rating": 4.2}, {"Comuna": "\u00d1u\u00f1oa", "Cadena": "Pizzapizza", "Cantidad de locales": 1, "Total Reviews": "1,006", "Promedio Rating": 2.7}, {"Comuna": "\u00d1u\u00f1oa", "Cadena": "Pizza hut", "Cantidad de locales": 1, "Total Reviews": "6,197", "Promedio Rating": 4.2}, {"Comuna": "Providencia", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 2, "Total Reviews": "16,371", "Promedio Rating": 4.3}, {"Comuna": "Providencia", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": "10,142", "Promedio Rating": 4.5}, {"Comuna": "Providencia", "Cadena": "Little Caesars", "Cantidad de locales": 2, "Total Reviews": "30,744", "Promedio Rating": 4.4}, {"Comuna": "Providencia", "Cadena": "Domino's Pizza", "Cantidad de locales": 3, "Total Reviews": "7,077", "Promedio Rating": 3.3}, {"Comuna": "Providencia", "Cadena": "Telepizza", "Cantidad de locales": 1, "Total Reviews": "2,175", "Promedio Rating": 3.8}, {"Comuna": "Providencia", "Cadena": "Pizzapizza", "Cantidad de locales": 1, "Total Reviews": "440", "Promedio Rating": 0.0}, {"Comuna": "Providencia", "Cadena": "Pizza hut", "Cantidad de locales": 3, "Total Reviews": "3,684", "Promedio Rating": 3.9}, {"Comuna": "Estaci\u00f3n Central", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 3, "Total Reviews": "26,765", "Promedio Rating": 4.5}, {"Comuna": "Estaci\u00f3n Central", "Cadena": "Little Caesars", "Cantidad de locales": 2, "Total Reviews": "31,736", "Promedio Rating": 4.5}, {"Comuna": "Estaci\u00f3n Central", "Cadena": "Domino's Pizza", "Cantidad de locales": 1, "Total Reviews": "6,007", "Promedio Rating": 3.2}, {"Comuna": "Estaci\u00f3n Central", "Cadena": "Telepizza", "Cantidad de locales": 5, "Total Reviews": "2,182", "Promedio Rating": 3.9}, {"Comuna": "Estaci\u00f3n Central", "Cadena": "Milano\u00b4s pizza", "Cantidad de locales": 1, "Total Reviews": "613", "Promedio Rating": 4.4}, {"Comuna": "Estaci\u00f3n Central", "Cadena": "Pizza hut", "Cantidad de locales": 4, "Total Reviews": "3,709", "Promedio Rating": 4.2}, {"Comuna": "San Miguel", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 3, "Total Reviews": "25,413", "Promedio Rating": 4.4}, {"Comuna": "San Miguel", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": "25,200", "Promedio Rating": 4.5}, {"Comuna": "San Miguel", "Cadena": "Domino's Pizza", "Cantidad de locales": 1, "Total Reviews": "1,508", "Promedio Rating": 2.9}, {"Comuna": "San Miguel", "Cadena": "Lovdo", "Cantidad de locales": 1, "Total Reviews": "1,041", "Promedio Rating": 4.1}, {"Comuna": "San Miguel", "Cadena": "Telepizza", "Cantidad de locales": 2, "Total Reviews": "6,238", "Promedio Rating": 4.2}, {"Comuna": "San Miguel", "Cadena": "Pizzapizza", "Cantidad de locales": 1, "Total Reviews": "904", "Promedio Rating": 2.8}, {"Comuna": "San Miguel", "Cadena": "Pizza hut", "Cantidad de locales": 1, "Total Reviews": "3,097", "Promedio Rating": 3.6}, {"Comuna": "La Cisterna", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 1, "Total Reviews": "15,160", "Promedio Rating": 4.5}, {"Comuna": "La Cisterna", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": "7,251", "Promedio Rating": 4.5}, {"Comuna": "La Cisterna", "Cadena": "Little Caesars", "Cantidad de locales": 2, "Total Reviews": "21,655", "Promedio Rating": 4.5}, {"Comuna": "La Cisterna", "Cadena": "Telepizza", "Cantidad de locales": 1, "Total Reviews": "3,249", "Promedio Rating": 4.3}, {"Comuna": "La Cisterna", "Cadena": "Pizzapizza", "Cantidad de locales": 1, "Total Reviews": "437", "Promedio Rating": 4.4}, {"Comuna": "La Cisterna", "Cadena": "Pizza hut", "Cantidad de locales": 1, "Total Reviews": "7,210", "Promedio Rating": 4.4}, {"Comuna": "Pe\u00f1alol\u00e9n", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 2, "Total Reviews": "15,096", "Promedio Rating": 4.2}, {"Comuna": "Pe\u00f1alol\u00e9n", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": "10,179", "Promedio Rating": 4.2}, {"Comuna": "Pe\u00f1alol\u00e9n", "Cadena": "Little Caesars", "Cantidad de locales": 1, "Total Reviews": "10,466", "Promedio Rating": 4.5}, {"Comuna": "Pe\u00f1alol\u00e9n", "Cadena": "Domino's Pizza", "Cantidad de locales": 1, "Total Reviews": "2,005", "Promedio Rating": 3.3}, {"Comuna": "Pe\u00f1alol\u00e9n", "Cadena": "Telepizza", "Cantidad de locales": 2, "Total Reviews": "3,289", "Promedio Rating": 4.3}, {"Comuna": "Pe\u00f1alol\u00e9n", "Cadena": "Pizzapizza", "Cantidad de locales": 1, "Total Reviews": "807", "Promedio Rating": 4.1}, {"Comuna": "Pe\u00f1alol\u00e9n", "Cadena": "Pizza hut", "Cantidad de locales": 2, "Total Reviews": "5,740", "Promedio Rating": 4.2}, {"Comuna": "Huechuraba", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 1, "Total Reviews": "7,067", "Promedio Rating": 4.0}, {"Comuna": "Huechuraba", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": "15,144", "Promedio Rating": 4.5}, {"Comuna": "Huechuraba", "Cadena": "Little Caesars", "Cantidad de locales": 1, "Total Reviews": "10,540", "Promedio Rating": 4.5}, {"Comuna": "Huechuraba", "Cadena": "Domino's Pizza", "Cantidad de locales": 1, "Total Reviews": "3,004", "Promedio Rating": 4.2}, {"Comuna": "Huechuraba", "Cadena": "Telepizza", "Cantidad de locales": 1, "Total Reviews": "600", "Promedio Rating": 4.1}, {"Comuna": "Huechuraba", "Cadena": "Pizzapizza", "Cantidad de locales": 1, "Total Reviews": "602", "Promedio Rating": 5.0}, {"Comuna": "Huechuraba", "Cadena": "Lovdo", "Cantidad de locales": 1, "Total Reviews": "1,516", "Promedio Rating": 4.1}, {"Comuna": "Huechuraba", "Cadena": "Pizza hut", "Cantidad de locales": 1, "Total Reviews": "4,136", "Promedio Rating": 4.1}, {"Comuna": "La Reina", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 2, "Total Reviews": "9,205", "Promedio Rating": 4.1}, {"Comuna": "La Reina", "Cadena": "Melt Pizza", "Cantidad de locales": 3, "Total Reviews": "22,416", "Promedio Rating": 4.3}, {"Comuna": "La Reina", "Cadena": "Little Caesars", "Cantidad de locales": 1, "Total Reviews": "2,091", "Promedio Rating": 4.2}, {"Comuna": "La Reina", "Cadena": "Domino's Pizza", "Cantidad de locales": 1, "Total Reviews": "1,502", "Promedio Rating": 4.6}, {"Comuna": "La Reina", "Cadena": "Pizzapizza", "Cantidad de locales": 1, "Total Reviews": "501", "Promedio Rating": 4.8}, {"Comuna": "La Reina", "Cadena": "Lovdo", "Cantidad de locales": 1, "Total Reviews": "1,014", "Promedio Rating": 4.3}, {"Comuna": "Lo Barnechea", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 2, "Total Reviews": "10,045", "Promedio Rating": 4.7}, {"Comuna": "Lo Barnechea", "Cadena": "Melt Pizza", "Cantidad de locales": 2, "Total Reviews": "11,414", "Promedio Rating": 4.4}, {"Comuna": "Lo Barnechea", "Cadena": "Little Caesars", "Cantidad de locales": 1, "Total Reviews": "8,277", "Promedio Rating": 4.4}, {"Comuna": "Lo Barnechea", "Cadena": "Pizzapizza", "Cantidad de locales": 1, "Total Reviews": "1,004", "Promedio Rating": 3.7}, {"Comuna": "San Joaqu\u00edn", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 1, "Total Reviews": "10,171", "Promedio Rating": 4.1}, {"Comuna": "San Joaqu\u00edn", "Cadena": "Little Caesars", "Cantidad de locales": 1, "Total Reviews": "20,587", "Promedio Rating": 4.3}, {"Comuna": "Macul", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 1, "Total Reviews": "8,212", "Promedio Rating": 4.1}, {"Comuna": "Macul", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": "15,251", "Promedio Rating": 4.3}, {"Comuna": "Macul", "Cadena": "Domino's Pizza", "Cantidad de locales": 1, "Total Reviews": "3,005", "Promedio Rating": 4.2}, {"Comuna": "Macul", "Cadena": "Telepizza", "Cantidad de locales": 1, "Total Reviews": "3,174", "Promedio Rating": 3.9}, {"Comuna": "Macul", "Cadena": "Pizzapizza", "Cantidad de locales": 1, "Total Reviews": "706", "Promedio Rating": 4.9}, {"Comuna": "Macul", "Cadena": "Milano\u00b4s pizza", "Cantidad de locales": 1, "Total Reviews": "338", "Promedio Rating": 4.5}, {"Comuna": "Recoleta", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 4, "Total Reviews": "17,305", "Promedio Rating": 3.4}, {"Comuna": "Recoleta", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": "10,159", "Promedio Rating": 4.4}, {"Comuna": "Recoleta", "Cadena": "Domino's Pizza", "Cantidad de locales": 1, "Total Reviews": "3,006", "Promedio Rating": 4.2}, {"Comuna": "Recoleta", "Cadena": "Telepizza", "Cantidad de locales": 1, "Total Reviews": "72", "Promedio Rating": 4.5}, {"Comuna": "Vitacura", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 2, "Total Reviews": "7,099", "Promedio Rating": 4.4}, {"Comuna": "Vitacura", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": "10,131", "Promedio Rating": 4.3}, {"Comuna": "Vitacura", "Cadena": "Domino's Pizza", "Cantidad de locales": 1, "Total Reviews": "1,503", "Promedio Rating": 2.7}, {"Comuna": "Vitacura", "Cadena": "Milano\u00b4s pizza", "Cantidad de locales": 1, "Total Reviews": "267", "Promedio Rating": 4.6}, {"Comuna": "Vitacura", "Cadena": "Pizza hut", "Cantidad de locales": 1, "Total Reviews": "21", "Promedio Rating": 3.2}, {"Comuna": "Vitacura", "Cadena": "Little Caesars", "Cantidad de locales": 2, "Total Reviews": "9,281", "Promedio Rating": 4.4}, {"Comuna": "Lo Prado", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 1, "Total Reviews": "20,282", "Promedio Rating": 4.4}, {"Comuna": "Lo Prado", "Cadena": "Pizzapizza", "Cantidad de locales": 1, "Total Reviews": "1,008", "Promedio Rating": 4.2}, {"Comuna": "Quilicura", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 2, "Total Reviews": "10,488", "Promedio Rating": 4.1}, {"Comuna": "Quilicura", "Cadena": "Domino's Pizza", "Cantidad de locales": 1, "Total Reviews": "2,019", "Promedio Rating": 3.8}, {"Comuna": "Quilicura", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": "5,208", "Promedio Rating": 4.6}, {"Comuna": "Quilicura", "Cadena": "Pizzapizza", "Cantidad de locales": 1, "Total Reviews": "514", "Promedio Rating": 4.1}, {"Comuna": "Quilicura", "Cadena": "Telepizza", "Cantidad de locales": 1, "Total Reviews": "926", "Promedio Rating": 4.1}, {"Comuna": "Quilicura", "Cadena": "Pizza hut", "Cantidad de locales": 1, "Total Reviews": "4,195", "Promedio Rating": 4.3}, {"Comuna": "Pudahuel", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 2, "Total Reviews": "20,420", "Promedio Rating": 4.6}, {"Comuna": "Pudahuel", "Cadena": "Little Caesars", "Cantidad de locales": 1, "Total Reviews": "500", "Promedio Rating": 4.6}, {"Comuna": "Independencia", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 1, "Total Reviews": "10,242", "Promedio Rating": 4.4}, {"Comuna": "Independencia", "Cadena": "Little Caesars", "Cantidad de locales": 1, "Total Reviews": "7,618", "Promedio Rating": 4.5}, {"Comuna": "Independencia", "Cadena": "Pizzapizza", "Cantidad de locales": 1, "Total Reviews": "1,006", "Promedio Rating": 4.1}, {"Comuna": "Cerrillos", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 1, "Total Reviews": "10,000", "Promedio Rating": 4.6}, {"Comuna": "Cerrillos", "Cadena": "Pizzapizza", "Cantidad de locales": 1, "Total Reviews": "455", "Promedio Rating": 4.2}, {"Comuna": "Cerrillos", "Cadena": "Pizza hut", "Cantidad de locales": 1, "Total Reviews": "3,069", "Promedio Rating": 4.1}, {"Comuna": "Cerrillos", "Cadena": "Lovdo", "Cantidad de locales": 1, "Total Reviews": "1,514", "Promedio Rating": 4.2}, {"Comuna": "San Bernardo", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 3, "Total Reviews": "9,229", "Promedio Rating": 4.2}, {"Comuna": "San Bernardo", "Cadena": "Pizza hut", "Cantidad de locales": 2, "Total Reviews": "857", "Promedio Rating": 4.2}, {"Comuna": "Colina", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 4, "Total Reviews": "1448", "Promedio Rating": 3.4}, {"Comuna": "Colina", "Cadena": "Domino's Pizza", "Cantidad de locales": 2, "Total Reviews": "294", "Promedio Rating": 3.3}, {"Comuna": "Colina", "Cadena": "Little Caesars", "Cantidad de locales": 1, "Total Reviews": "739", "Promedio Rating": 4.4}, {"Comuna": "Colina", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": "759", "Promedio Rating": 4.5}, {"Comuna": "San Ram\u00f3n", "Cadena": "Telepizza", "Cantidad de locales": 1, "Total Reviews": "2,085", "Promedio Rating": 4.2}, {"Comuna": "La Granja", "Cadena": "Telepizza", "Cantidad de locales": 1, "Total Reviews": "1,512", "Promedio Rating": 4.3}, {"Comuna": "Lampa", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 1, "Total Reviews": "258", "Promedio Rating": 4.5}, {"Comuna": "Lampa", "Cadena": "Little Caesars", "Cantidad de locales": 1, "Total Reviews": "792", "Promedio Rating": 4.5}, {"Comuna": "El Bosque", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 1, "Total Reviews": "847", "Promedio Rating": 4.3}, {"Comuna": "El Bosque", "Cadena": "Telepizza", "Cantidad de locales": 4, "Total Reviews": "73", "Promedio Rating": 4.5}, {"Comuna": "Melipilla", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 1, "Total Reviews": "245", "Promedio Rating": 4.6}, {"Comuna": "Melipilla", "Cadena": "Little Caesars", "Cantidad de locales": 1, "Total Reviews": "581", "Promedio Rating": 4.6}, {"Comuna": "Melipilla", "Cadena": "Pizza hut", "Cantidad de locales": 1, "Total Reviews": "122", "Promedio Rating": 3.9}, {"Comuna": "Buin", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 2, "Total Reviews": "155", "Promedio Rating": 4.6}, {"Comuna": "Buin", "Cadena": "Domino's Pizza", "Cantidad de locales": 1, "Total Reviews": "9", "Promedio Rating": 3.4}, {"Comuna": "Buin", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": "136", "Promedio Rating": 4.6}, {"Comuna": "Renca", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 2, "Total Reviews": "273", "Promedio Rating": 3.7}, {"Comuna": "Pe\u00f1aflor", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 1, "Total Reviews": "276", "Promedio Rating": 4.6}, {"Comuna": "Padre Hurtado", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 1, "Total Reviews": "265", "Promedio Rating": 4.3}, {"Comuna": "Cerro Navia", "Cadena": "Telepizza", "Cantidad de locales": 1, "Total Reviews": "256", "Promedio Rating": 4.3}, {"Comuna": "La Pintana", "Cadena": "Papa Jhon\u00b4s", "Cantidad de locales": 1, "Total Reviews": "104", "Promedio Rating": 4.5}, {"Comuna": "Talagante", "Cadena": "Telepizza", "Cantidad de locales": 1, "Total Reviews": "90", "Promedio Rating": 4.7}]}};
  var embedOpt = {"mode": "vega-lite"};

  function showError(el, error){
      el.innerHTML = ('<div class="error" style="color:red;">'
                      + '<p>JavaScript Error: ' + error.message + '</p>'
                      + "<p>This usually means there's a typo in your chart specification. "
                      + "See the javascript console for the full traceback.</p>"
                      + '</div>');
      throw error;
  }
  const el = document.getElementById('vis');
  vegaEmbed("#vis1", spec, embedOpt)
    .catch(error => showError(el, error));
})(vegaEmbed);

(function(vegaEmbed) {
  var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300}}, "data": {"name": "data-ab37984771b4179a12d46a71c43faf4c"}, "mark": {"type": "bar", "color": "orange"}, "encoding": {"tooltip": [{"field": "Comuna", "type": "nominal"}, {"field": "Promedio Rating", "type": "quantitative"}], "x": {"field": "Promedio Rating", "title": "Rating", "type": "quantitative"}, "y": {"field": "Comuna", "sort": "-x", "title": "Comunas", "type": "nominal"}}, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-ab37984771b4179a12d46a71c43faf4c": [{"Comuna": "Santiago", "Cadena": "Melt Pizza", "Cantidad de locales": 2, "Total Reviews": 40.58, "Promedio Rating": 4.4}, {"Comuna": "Maip\u00fa", "Cadena": "Melt Pizza", "Cantidad de locales": 3, "Total Reviews": 25.546, "Promedio Rating": 4.6}, {"Comuna": "Puente Alto", "Cadena": "Melt Pizza", "Cantidad de locales": 3, "Total Reviews": 29.524, "Promedio Rating": 4.6}, {"Comuna": "Las Condes", "Cadena": "Melt Pizza", "Cantidad de locales": 3, "Total Reviews": 20.386, "Promedio Rating": 4.4}, {"Comuna": "La Florida ", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": 15.251, "Promedio Rating": 4.6}, {"Comuna": "\u00d1u\u00f1oa", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": 10.183, "Promedio Rating": 4.3}, {"Comuna": "Providencia", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": 10.142, "Promedio Rating": 4.5}, {"Comuna": "San Miguel", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": 25.2, "Promedio Rating": 4.5}, {"Comuna": "La Cisterna", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": 7.251, "Promedio Rating": 4.5}, {"Comuna": "Pe\u00f1alol\u00e9n", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": 10.179, "Promedio Rating": 4.2}, {"Comuna": "Huechuraba", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": 15.144, "Promedio Rating": 4.5}, {"Comuna": "La Reina", "Cadena": "Melt Pizza", "Cantidad de locales": 3, "Total Reviews": 22.416, "Promedio Rating": 4.3}, {"Comuna": "Lo Barnechea", "Cadena": "Melt Pizza", "Cantidad de locales": 2, "Total Reviews": 11.414, "Promedio Rating": 4.4}, {"Comuna": "Macul", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": 15.251, "Promedio Rating": 4.3}, {"Comuna": "Recoleta", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": 10.159, "Promedio Rating": 4.4}, {"Comuna": "Vitacura", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": 10.131, "Promedio Rating": 4.3}, {"Comuna": "Quilicura", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": 5.208, "Promedio Rating": 4.6}, {"Comuna": "Colina", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": 759.0, "Promedio Rating": 4.5}, {"Comuna": "Buin", "Cadena": "Melt Pizza", "Cantidad de locales": 1, "Total Reviews": 136.0, "Promedio Rating": 4.6}]}};
  var embedOpt = {"mode": "vega-lite"};

  function showError(el, error){
      el.innerHTML = ('<div class="error" style="color:red;">'
                      + '<p>JavaScript Error: ' + error.message + '</p>'
                      + "<p>This usually means there's a typo in your chart specification. "
                      + "See the javascript console for the full traceback.</p>"
                      + '</div>');
      throw error;
  }
  const el = document.getElementById('vis');
  vegaEmbed("#vis2", spec, embedOpt)
    .catch(error => showError(el, error));
<<<<<<< HEAD
})(vegaEmbed);
=======
})(vegaEmbed);
>>>>>>> 7c5f67b7588cc3987db04bbad94b1c2d7734c2e1
