
## ¿Cómo hacer una aplicación Responsive, con React? 

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Para ver este mismo ejemplo en SandBox

https://codesandbox.io/s/github/correooke/react-responsive

# Descripción

En este ejemplo utilizamos 3 técnicas diferentes para lograr que la aplicación sea responsive, pero sin utilizar ninguna grilla (GRID), cómo podría ser bootstrap o flexbox-grid.

La primer técnica es la utilización de dimensiones relativas al tamaño de la pantalla (ancho) mediante la unidad "vw" = View Width. Esta técnica la vemos aplicada al título del ejemplo el cual se agranda o achica junto con el tamaño relativo de la pantalla.

La segunda técnica que utilizamos es Media Query, una capacidad que brinda CSS y que permite definir un ancho de la pantalla y cuando el tamaño de la pantalla cae dentro de ese rango aplica algunas clases CSS, con ciertos atributos, que al salir de ese tamaño definido ya no aplica. De esta manera se pueden generar múltiples estilos que son aplicados solamente ante un determinado tamaño de pantalla y de esa manera ajustamos los tamaños de los componentes o controlamos que sean visibles o se oculten de acuerdo a nuestra conveniencia.

La tercer técnica, quizás la más avanzada y particular de react es el componente react-responsive. Esta librería expone el componente MediaQuery el cual acepta diferentes parámetros, y nos permite renderizar o no los elementos "child" de acuerdo al tamaño actual de la pantalla. Al contrario que las otras técnicas, donde simplemente ocultamos los elementos, en este caso directamente ya no forman parte del DOM. Esto es especialmente útil para el caso de dispositivos celulares, donde queremos primar la eficiencia y donde tampoco cabe la posibilidad de que la pantalla pueda agrandarse.
Exploramos dos variantes de esta técnica, utilizando una variable de evaluación "match" y una función, y la más directa, con elementos "child" tal como mencionamos anteriormente.


### Autor: Emiliano Ocariz