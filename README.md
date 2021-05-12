### Minería de Datos
### Data Warehouse Actividad 1
___
Se integrarán 2 fuentes de datos y se generarán gráficas de pesos y temperaturas

### Datos
Se utilizaron [archivos .csv](/assets/data), en los cuales el archivo [`data.csv`](/assets/data/data.csv) integra todas las fuentes, para ser leidas en JS.

### Gráficas
Se utilizo la libreria [ChartJS](https://www.chartjs.org/), para representarlos los `datos .csv`, [configuración.](/assets/js/line-chart.js)

### Dockerizar
Para levantar la aplicación en un contenedor
- Buildear la imagen
  ```bash
  docker build -t $name-image:$version .
  ```
- Crear contenedor
  ```bash
  docker run --name $name-container -p $portInHost:$portInContainer -d $name-image:$version
  ```
