// Sample data for the graph
const userData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
        {
            label: 'Active Users',
            data: [100, 150, 120, 200, 180],
            backgroundColor: 'rgba(0, 123, 255, 0.6)',
        },
    ],
};

// Create a chart using Chart.js
const ctx = document.getElementById('userAnalyticsChart').getContext('2d');

const userAnalyticsChart = new Chart(ctx, {
    type: 'bar',
    data: userData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
