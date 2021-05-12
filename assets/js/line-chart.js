$.ajax({
    url: '../assets/data/data.csv',
    dataType: "text",
    contentType: "charset=utf-8",
}).done(grafica1);

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
    return [months, tmax, tmin, pesos, dTemp];
}

function searchFrom() {
    let from = $('#from').val();
    console.log(from);
}

function searchTo() {
    let to = $('#to').val();
    console.log(to);
}

function grafica1(allData) {
    let allRows = allData.split(",");
    console.log(allRows);
    let data = cleaning(allRows);

    var graf1 = document.getElementById('Graf1').getContext('2d');
    var myChart = new Chart(graf1, {
        type: 'line',
        data: {
            labels: data[0],
            datasets: [
                {
                    label: 'Temperatura Máxima',
                    data: data[1],
                    backgroundColor: 'red',
                    borderColor: 'red',
                    borderWidth: 1,
                },
                {
                    label: 'Temperatura Mínima',
                    data: data[2],
                    backgroundColor: 'blue',
                    borderColor: 'blue',
                    borderWidth: 1,
                },
                {
                    label: 'Pesos',
                    data: data[3],
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
    })

    var graf2 = document.getElementById('Graf2').getContext('2d');
    var myChart = new Chart(graf2, {
        type: 'line',
        data: {
            labels: data[0],
            datasets: [
                {
                    label: 'Pesos',
                    data: data[3],
                    backgroundColor: 'green',
                    borderColor: 'green',
                    borderWidth: 1,
                },
                {
                    label: 'Diferencia de Temperaturas',
                    data: data[4],
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