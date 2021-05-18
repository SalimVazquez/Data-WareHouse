### Minería de Datos
#### Data Warehouse Actividad 1
Se integrarán 2 fuentes de datos y se generarán gráficas de pesos y temperaturas

### Datos
Se utilizaron [archivos .csv](/assets/data) descargados de [Conagua](https://smn.conagua.gob.mx/es/climatologia/temperaturas-y-lluvias/resumenes-mensuales-de-temperaturas-y-lluvias), en los cuales el archivo [`data.csv`](/assets/data/data.csv) integra todas las fuentes, para ser leidas en JS.

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
### **Importante**
Para poder ver las gráficas, es necesario desplegar en un VirtualHost, por la lectura de recursos (CORS).
- [WampServer o Xampp](https://programacionymas.com/blog/archivo-hosts-y-virtual-hosts-apache-windows)
- [Docker](https://github.com/SalimVazquez/Data-WareHouse/tree/dockerizing#dockerizar)
