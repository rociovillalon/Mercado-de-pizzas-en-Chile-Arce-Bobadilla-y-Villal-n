# Mercado de pizzas en Chile
_Rocío Villalón._

Tras el aumento del **Mercado de pizzas** en Chile, hemos hecho una investigación a tráves de distintos ejes, ya sea desde las grandes cadenas hasta la relación con la geografía, como lo es en mi caso. 

![imagen](https://www.ocu.org/-/media/ocu/images/home/alimentacion/alimentos/pizzas_selector_1600x900.jpg?rev=6a81e278-07fc-4e95-9ba1-361063f35adf&hash=B8B1264AB6FC3F4B1AE140EB390208CD)

## Base de Datos
La base utilizada para la limpieza fue obtenida del Servicio de Impuestos Internos (SII), esta contiene la actividad económica por rubro en todas las regiones de Chile, desde el 2005 al 2022.



## Limpieza de datos 

## Paso 1
Abrí la base de datos en Excel para utilizar la herramienta de filtro, en ella filtré por rubro de comida.

## Paso 2 ##
Una vez filtrado el rubro de la comida por región desde el año 2005 al 2022, cree una tabla dinámica para poder tener una mejor organización de datos

## Paso 3
Después de generar una tabla dinámica, ordené las variables que me interesaban (Eliminando columnas que no servían para el análisis) y me servían para estudiar con sus respectivas filas y columnas.

- Regiones = Fila.
 - Año = Fila.
- Total de Número de Empresas = Columna.
- Suma de Renta neta informada en UF= Columna.
- Cuenta de ventas anuales en UF = Columnas.

## Paso 4
Posteriormente a ordenar la tabla, seleccioné los años de estudio, en este caso desde 2017 a 2022 (año el cual llega la base de datos).

## Paso 5
Finalmente, hice una suma total de cada columna para comparar entre los años de actividad e ingresos.

## Preguntas a respoder en base a la tabla:
 - Región con mayor número de empresas: La categoría "Total" tiene el mayor número de empresas, con 1.176.486 empresas registradas. Esta categoría parece agrupar el total de todas las regiones, lo que justifica que sea la más alta. El análisis individual de las regiones muestra variaciones significativas en la cantidad de empresas.

 - Promedio de renta neta informada en UF: El promedio de la renta neta informada es de 324.960.323 UF. Este valor representa el promedio de las rentas netas de todas las regiones en la base de datos. El hecho de que el valor promedio sea tan alto puede reflejar la alta concentración de ingresos en algunas regiones con economías más grandes.

 - Variación en el número de empresas: El número de empresas varía de manera considerable entre las regiones. La estadística descriptiva muestra un promedio de 218.073 empresas, con un mínimo de 433 empresas y un máximo de 7.923.351 (probablemente en la categoría "Total"). Esto refleja la gran diferencia en el desarrollo económico de las diferentes regiones.

 ## Explicación:
 Utilicé la base de datos del SII, porque nos permitía ver un aumento a lo largo de los años a lo largo de todas las regiones de Chile y esto permite hacer una comparación a nivel nacional sobre el aumento del rubro de comida en el país.


## Lista de las fuentes de datos utilizadas
Base de datos:
- La sacamos de la página de Servicio de Impuestos Internos (SII), ya que sus datos son públicos y tienen datos desde 2005 hasta 2022 lo que nos sirve para ver el crecimiento según los años. 

Articulos web consultados para el proyecto:

- Publicación de Foodservice (https://www.espaciofoodservice.cl/el-30-del-total-de-pizzerias-en-chile-pertenece-a-alguna-cadena-de-comida/): La fuente de esta página es Gregario. Esta información nos sirvió para conocer algunos datos interesantes como que el 30% de las pizzerias en Chile pertenece a alguna cadena de comida (como Papa John's, Telepizza, entre otras), el top 5 de comunas con más locales de pizzerías en la Región Metropolitana, entre otros datos específicos. 
- Análisis del consumo de pizza en Chile (https://www.maquipan.cl/wp-content/uploads/2024/04/Maquipan-solucion-pizzeria.pdf): esto nos sirvió para otros datos como que el número de pizzerias en Chile se ha duplicado en los últimos cinco años y además hay una historia/caso particular sobre un local de pizza que nos podría servir para más adelante. 
- Datos adicionales de la comida rápida en Chile (https://canalhoreca.cl/2024/05/15/ventas-de-servicio-de-comida-rapida-alcanzan-cifras-record-crecen-118-el-primer-trimestre-de-2024/): esta página nos sirvió para ver el crecimiento que ha tenido el consumo de comida rápida en Chile en los últimos años.
- Preferencias de los chilenos respecto a pedidos por Delivery(https://aimchile.cl/preferencias-delivery/): esta página habla sobre el aumento de las personas que eligen pedir a través de apps de delivery.
- Informe de consumo de fast food (https://aimchile.cl/wp-content/uploads/2024/07/241104_Informe_Radografia-al-consumo-de-FastFood_0703_V1.pdf): es un estudio sobre el consumo de fast food en Chile hecho en marzo de 2024.