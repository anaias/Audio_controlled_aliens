function start_classify(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/GmMCV5yNT/model.json',model_ready);

}

function model_ready(){
    classifier.classify(got_Results);
}

function got_Results(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_no_r=Math.floor(Math.random()*255)+1;
        random_no_g=Math.floor(Math.random()*255)+1;
        random_no_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML="I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy - " +(results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+random_no_r+","+random_no_g+","+random_no_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_no_r+","+random_no_g+","+random_no_b+")";
        
        img1=document.getElementById("alien-1");
        img2=document.getElementById("alien-2");
        img3=document.getElementById("alien-3");
        img4=document.getElementById("alien-4");

        if(results[0].label=="CLAPPING"){
            img1.src='aliens-01.gif';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }

        else if(results[0].label=="bell"){
            img1.src='aliens-01.png';
            img2.src='aliens-02.gif';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }

        else if(results[0].label=="metal falling"){
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.gif';
            img4.src='aliens-04.png';
        }

        else{
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.gif';
        }
    }


}