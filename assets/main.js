var topics = ["HTML", "CSS", "GIT", "JS"];

var randomTopics = topics[Math.floor(Math.random() * topics.length)];

function studytopics() {
    
    for (x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
    
}

function selecttopic() {
 
    if (randomTopics === 'HTML') {
        console.log("Let's study HTML!");
      } else if (randomTopics === 'CSS') {
        console.log("Let's study CSS!");
      } else if (randomTopics === 'GIT') {
        console.log("Let's study GIT!");
      } else if (randomTopics === 'JavaScript') {
        console.log("Let's study JavaScript!");
      } 
}

console.log('Here are the topics we learned through Prework:');
studytopics();
console.log('Which topic should we study first?');
selecttopic();
