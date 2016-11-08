function jugeResult(data) {
    var dataArr = data.split('');

    for(var i = 0 ; i < dataArr.length ; i++){

            if(dataArr[i] == 'J'){
                dataArr[i] = 11;
            }else if(dataArr[i] == 'Q'){
                dataArr[i] = 12;
            }else if(dataArr[i] == 'K'){
                dataArr[i] = 13;
            }

        console.log(dataArr[i]);

    };

    //1．利用3×8=24、4×6=24 、12×2=24求解。
    //2．利用0、1的运算特性求解

    if(dataArr[0]+dataArr[1]+dataArr[2]+dataArr[3]>24){
        //0,1计算

    }else{
        //利用3×8=24、4×6=24 、12×2=24求解。

    }








}

console.log('2 J Q K',jugeResult('2 J Q K'));