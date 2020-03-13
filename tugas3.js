//fungsi nilai rata-rata
function average(totalValue){
    var sum = 0;
    for (var i = 0; i<totalValue.length; i++){
        sum += parseInt(totalValue[i])
    }
    return sum/totalValue.length;
}
//fungsi nilai median
function median(totalValue){
    var med = Math.floor(totalValue.length/2);

    totalValue.sort(function(a, b) { return a - b; });

    if (totalValue.length % 2) {
        return totalValue[med]
    } else {
        return (totalValue[med-1] + totalValue[med])/2.0;
    }
}
//fungsi nilai maksimum
function highest(totalValue){
    return Math.max(...totalValue);
}
//fungsi nilai minimum
function lowest(totalValue){
    return Math.min(...totalValue);
}
function calculateValue(){
    //mendapatkan nilai 1 hingga nilai 5
    var value1 = (document.getElementById("number1").value);
    var value2 = (document.getElementById("number2").value);
    var value3 = (document.getElementById("number3").value);
    var value4 = (document.getElementById("number4").value);
    var value5 = (document.getElementById("number5").value);
    //membuat array
    let totalValue = [value1,value2,value3,value4,value5];
    //menampilkan hasil
    document.getElementById("avrg").innerHTML = "Nilai Rata-Rata = " + average(totalValue);
    document.getElementById("med").innerHTML = "Nilai Tengah = " + median(totalValue);
    document.getElementById("max").innerHTML = "Nilai Maksimum = " + highest(totalValue);
    document.getElementById("min").innerHTML = "Nilai Minimum = " + lowest(totalValue);
}
//fungsi reset
function resetValue(){
    document.getElementById("form").reset();
    document.getElementById("avrg").innerHTML = " ";
    document.getElementById("med").innerHTML = " ";
    document.getElementById("max").innerHTML = " ";
    document.getElementById("min").innerHTML = " ";
}
