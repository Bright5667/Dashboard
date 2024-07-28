const chart = document.querySelector("#chart").getContext('2d');

// create a new chart instance 
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov'],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 49631, 59015, 36684, 33572, 39974, 48847, 29374, 29374, 29374],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88800, 26000, 46000, 5000, 1000, 18656, 24832, 36844],
                borderColor: 'blue',
                borderWidth: 2
            },
        ]
    },
    options: {
        responsive: true
    }
})