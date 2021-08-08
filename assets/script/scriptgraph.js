const emotionSpan = document.getElementById('emotion-span')
const emotionText = document.getElementById('emotion-span-text')

var getEmotion = JSON.parse(localStorage.getItem("emotion-detect"))|| [];
emotionSpan.textContent = getEmotion


function user2response() {
   let emotionArray = ["joy","surprise","disgust","sadness","anger","fear"]
   console.log(emotionArray)
    emotionArray.forEach(element => {
        console.log(element)
        if (getEmotion === element[0]){
            console.log(getEmotion)
       
            emotionText.textContent = 'That is so good to hear! I hope the rest of your week is the same way!'
    
    
            //devin could you have user2 write a response save it to local storage and then their input would replace what is in text content? 
            //not to worry the sun will come out tomorrow
        }
        
    });
    
    
}

user2response()

//want to look at graph again! 
const ctx = document.getElementById('myChart').getContext('2d');
const xlabels = [];
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: xlabels,
        datasets: [{
            label: 'Emotional Trends',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// getData();




// asynch function getData(){
//     const

// }