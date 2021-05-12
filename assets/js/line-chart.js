let months = [];
let tmax = [];
let tmin = [];
let pesos = [];
let dTemp = [];
const canva1 = document.getElementById('Graf1').getContext('2d');
const canva2 = document.getElementById('Graf2').getContext('2d');
let chartOne;
let chartTwo;
const MESES = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
];

$.ajax({
    url: '../assets/data/data.csv',
    dataType: "text",
    contentType: "charset=utf-8",
}).done(graphics);

function cleaning(data) {
    let cleanOne = data[15].split("\n");
    data[15] = cleanOne[0];
    data.splice(16, 0, cleanOne[1]);
    let cleanTwo = data[31].split("\n");
    data[31] = cleanTwo[0];
    data.splice(32, 0, cleanTwo[1]);
    let cleanThree = data[47].split("\n");
    data[47] = cleanThree[0];
    data.splice(48, 0, cleanThree[1]);
    // Meses: 0-16
    // TMax: 16-32
    // TMin: 32-48
    // Pesos: 48-64
    months = data.slice(0, 16);
    tmax = data.slice(16, 32);
    tmin = data.slice(32, 48);
    pesos = data.slice(48, data.length);
    dTemp = tmin.map((e,i) => tmax[i] ? tmax[i] - e : e);
}

function searchFrom() {
    let inputFrom = $('#from').val();
    let dateFrom = new Date(inputFrom);
    let from = MESES[dateFrom.getMonth()] + '-' + dateFrom.getFullYear().toString().substring(2,4);
    let parseDateFrom = months.indexOf(from);
    let auxMonths = months.slice(parseDateFrom, months.length-1);
    let auxTmax = tmax.slice(parseDateFrom, months.length-1);
    let auxTmin = tmin.slice(parseDateFrom, months.length-1);
    let auxPesos = pesos.slice(parseDateFrom, months.length-1);
    chartOne.data.labels = auxMonths;
    chartOne.data.datasets[0].data = auxTmax;
    chartOne.data.datasets[1].data = auxTmin;
    chartOne.data.datasets[2].data = auxPesos;
    chartOne.update();
}

function searchTo() {
    let to = $('#to').val();
    console.log(to);
}

function graphics(allData) {
    let allRows = allData.split(",");
    console.log(allRows);
    cleaning(allRows);

    chartOne = new Chart(canva1, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Temperatura Máxima',
                    data: tmax,
                    backgroundColor: 'red',
                    borderColor: 'red',
                    borderWidth: 1,
                },
                {
                    label: 'Temperatura Mínima',
                    data: tmin,
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    borderWidth: 1,
                },
                {
                    label: 'Pesos',
                    data: pesos,
                    backgroundColor: 'green',
                    borderColor: 'green',
                    borderWidth: 1,
                },
            ],
        },
        options: {
            resposive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
        },
    });

    chartTwo = new Chart(canva2, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: 'Pesos',
                    data: pesos,
                    backgroundColor: 'green',
                    borderColor: 'green',
                    borderWidth: 1,
                },
                {
                    label: 'Diferencia de Temperaturas',
                    data: dTemp,
                    backgroundColor: 'orange',
                    borderColor: 'orange',
                    borderWidth: 1,
                },
            ],
        },
        options: {
            resposive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
        },
    })
}