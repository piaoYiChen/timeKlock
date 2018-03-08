module.exports={
    year:0,
    month:0,
    day:0,
    nowHours:0,
    nowMinutes:0,
    nowSeconds:0,
    nowDate:0,
    nowMonth:0,
    nowFullYear:0,
    clocksAndWatches:function(){
        var hourValue = 0;
        var oStyle = document.createElement('style');
        //小时
        if(this.nowHours>12){
            hourValue = this.nowHours-12;
        }else {
            hourValue = this.nowHours;
        }
        var hourDegree = 360/12;
        hourDegree *= hourValue;
        var hourDegrees = hourDegree+360;
        //分钟
        var minutesDegree = 360/60;
        minutesDegree *= this.nowMinutes;
        hourDegree += (30/60*this.nowMinutes);
        var minutesDegrees = minutesDegree+360;
        //秒
        var secondsDegree = 360/60;
        secondsDegree *= this.nowSeconds;
        hourDegree += (30/360*this.nowSeconds);
        minutesDegree += (6/60*this.nowSeconds);
        var secondsDegrees = secondsDegree+360;
        oStyle.innerHTML='@keyframes hour\
                        {\
                            from {transform:rotate('+hourDegree+'deg)}\
                            to {transform:rotate('+hourDegrees+'deg)}\
                        }\
                        @keyframes minutes\
                        {\
                            from {transform:rotate('+minutesDegree+'deg)}\
                            to {transform:rotate('+minutesDegrees+'deg)}\
                        }\
                        @keyframes seconds\
                        {\
                            from {transform:rotate('+secondsDegree+'deg)}\
                            to {transform:rotate('+secondsDegrees+'deg)}\
                        }\
                        @keyframes hours\
                        {\
                            from {transform:rotate(0deg)}\
                            to {transform:rotate('+hourDegree+'deg)}\
                        }\
                        @keyframes minutess\
                        {\
                            from {transform:rotate(0deg)}\
                            to {transform:rotate('+minutesDegree+'deg)}\
                        }\
                        @keyframes secondss\
                        {\
                            from {transform:rotate(0deg)}\
                            to {transform:rotate('+secondsDegree+'deg)}\
                        }';
        var oHead = document.getElementsByTagName('head')[0].appendChild(oStyle);
        document.getElementsByClassName('hour-hand')[0].setAttribute('style','animation:hours 1s linear,hour 86400s linear 1s infinite');
        document.getElementsByClassName('minute-hand')[0].setAttribute('style','animation:minutess 1s linear,minutes 3600s linear 1s infinite');
        document.getElementsByClassName('second-hand')[0].setAttribute('style','animation:secondss 1s linear,seconds 60s linear 1s infinite');
    },
    calculatingAge:function(){
        var age = this.nowFullYear - this.year - 1;
        var days = 0;
        var seconds = 0;
        if(this.month==2 && this.day==29){
            if(this.nowFullYear%4 != 0){
                this.day=28;
            }
        }
        if(this.nowMonth<this.month){
            for(var i=this.month; i <= 12; i++){
                if(i==2 && (this.nowFullYear-1)%4 == 0){
                    days += 29;
                    continue;
                }else if(i==2 && (this.nowFullYear-1)%4 != 0){
                    days += 28;
                    continue;
                }
                switch(i){
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        days+=31;
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        days+=30;
                        break;
                }
            }
            days -= this.day;
            for(var j=this.nowMonth; j > 0; j--){
                if(j==2 && this.nowFullYear%4 == 0){
                    days += 29;
                    continue;
                }else if(j==2 && this.nowFullYear%4 != 0){
                    days += 28;
                    continue;
                }
                switch(j){
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        days+=31;
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        days+=30;
                        break;
                }
            }
            if(this.nowMonth ==2 && this.nowFullYear%4 == 0){
                days -= (29-this.nowDate);
            }else if(this.nowMonth ==2 && this.nowFullYear%4 != 0){
                days -= (28-this.nowDate);
            }else {
                switch(this.nowMonth){
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        days-=(31-this.nowDate);
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        days-=(30-this.nowDate);
                        break;
                }
            }
            seconds = days*24*60*60-8640+((this.nowHours*60)+this.nowMinutes)*60;
        }else if(this.nowMonth>this.month){
            age+=1;
            for(var i=this.month; i<=this.nowMonth; i++){
                if(i==2 && this.nowFullYear%4 == 0){
                    days += 29;
                    continue;
                }else if(i==2 && this.nowFullYear%4 != 0){
                    days += 28;
                    continue;
                }
                switch(i){
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        days+=31;
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        days+=30;
                        break;
                }
            }
            days -= this.day;
            if(this.nowMonth ==2 && this.nowFullYear%4 == 0){
                days -= (29-this.nowDate);
            }else if(this.nowMonth ==2 && this.nowFullYear%4 != 0){
                days -= (28-this.nowDate);
            }else {
                switch(this.nowMonth){
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                        days-=(31-this.nowDate);
                        break;
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                        days-=(30-this.nowDate);
                        break;
                }
            }
            seconds = days*24*60*60-8640+((this.nowHours*60)+this.nowMinutes)*60;
        }else if(this.nowMonth=this.month){
            if(this.day<this.nowDate){
                age+=1;
                for(var i=this.month; i<=this.nowMonth; i++){
                    if(i==2 && this.nowFullYear%4 == 0){
                        days += 29;
                        continue;
                    }else if(i==2 && this.nowFullYear%4 != 0){
                        days += 28;
                        continue;
                    }
                    switch(i){
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            days+=31;
                            break;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            days+=30;
                            break;
                    }
                }
                days -= this.day;
                if(this.nowMonth ==2 && this.nowFullYear%4 == 0){
                    days -= (29-this.nowDate);
                }else if(this.nowMonth ==2 && this.nowFullYear%4 != 0){
                    days -= (28-this.nowDate);
                }else {
                    switch(this.nowMonth){
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            days-=(31-this.nowDate);
                            break;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            days-=(30-this.nowDate);
                            break;
                    }
                }
                seconds = days*24*60*60-8640+((this.nowHours*60)+this.nowMinutes)*60;
            }else if(this.day>this.nowDate){
                for(var i=this.month; i <= 12; i++){
                    if(i==2 && (this.nowFullYear-1)%4 == 0){
                        days += 29;
                        continue;
                    }else if(i==2 && (this.nowFullYear-1)%4 != 0){
                        days += 28;
                        continue;
                    }
                    switch(i){
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            days+=31;
                            break;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            days+=30;
                            break;
                    }
                }
                days -= this.day;
                for(var j=this.nowMonth; j > 0; j--){
                    if(j==2 && this.nowFullYear%4 == 0){
                        days += 29;
                        continue;
                    }else if(j==2 && this.nowFullYear%4 != 0){
                        days += 28;
                        continue;
                    }
                    switch(j){
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            days+=31;
                            break;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            days+=30;
                            break;
                    }
                }
                if(this.nowMonth ==2 && this.nowFullYear%4 == 0){
                    days -= (29-this.nowDate);
                }else if(this.nowMonth ==2 && this.nowFullYear%4 != 0){
                    days -= (28-this.nowDate);
                }else {
                    switch(this.nowMonth){
                        case 1:
                        case 3:
                        case 5:
                        case 7:
                        case 8:
                        case 10:
                        case 12:
                            days-=(31-this.nowDate);
                            break;
                        case 4:
                        case 6:
                        case 9:
                        case 11:
                            days-=(30-this.nowDate);
                            break;
                    }
                }
                seconds = days*24*60*60-8640+((this.nowHours*60)+this.nowMinutes)*60;
            }else if(this.day=this.nowDate){
                age+=1;
                days = 0;
                seconds = ((this.nowHours*60)+this.nowMinutes)*60;
            }
        }
        this.addRendering(age,days,seconds)
        this.numberOfSeconds(days);
    },
    numberOfSeconds:function(days){
        var displayAge=document.getElementsByClassName('display-age')[0];
        var age=Number(displayAge.innerHTML);
        var displaySecond=document.getElementsByClassName('display-second')[0];
        var seconds=Number(displaySecond.innerHTML);
        var oThis = this;
        var node = document.createElement('div');
        node.setAttribute('class','death');
        node.innerHTML=`<p class='existence-display'>你还有 <span class='display-ages'></span>.<span class='display-seconds'></span> 岁了</p>
                        <p class='existence-words'>在这个世界上，你还有</p>
                        <div class='display-information'>
                            <div class='each-information'>
                                <p class='each-valuers'>1</p>
                                <p class='each-valuers'>年</p>
                            </div><div class='each-information'>
                                <p class='each-valuers'>1</p>
                                <p class='each-valuers'>月</p>
                            </div><div class='each-information'>
                                <p class='each-valuers'>1</p>
                                <p class='each-valuers'>周</p>
                            </div><div class='each-information'>
                                <p class='each-valuers'>1</p>
                                <p class='each-valuers'>天</p>
                            </div><div class='each-information'>
                                <p class='each-valuers'>1</p>
                                <p class='each-valuers'>小时</p>
                            </div><div class='each-information'>
                                <p class='each-valuers'>1000000000</p>
                                <p class='each-valuers'>分钟</p>
                            </div>
                        </div>`
        document.getElementsByClassName('information')[0].appendChild(node);
        setInterval(function(){
            seconds += 1;
            if(seconds == 31536000){
                age+=1;
            }
            oThis.addRendering(age,days,seconds,1)
        },1000)
        var button=document.getElementsByClassName('death-button')[0];
        var death=document.getElementsByClassName('death')[0];
        var existence=document.getElementsByClassName('existence')[0];
        var yichen = true;
        button.onclick=function(){
            if(yichen){
                death.setAttribute('style','display: block');
                existence.setAttribute('style','display: none');
                button.innerHTML='生之钟';
                yichen = false;
            }else{
                death.setAttribute('style','display: none');
                existence.setAttribute('style','display: block');
                button.innerHTML='死之钟';
                yichen = true;
            }
        }
    },
    addRendering:function(age,days,seconds,piao){
        var sun =0;
        for(var i=this.year; i<this.year+age; i++){
            if(i%4 == 0){
                sun+=366;
            }else{
                sun+=365;
            }
        } 
        // sun+=days;
        document.getElementsByClassName('display-age')[0].innerHTML=age;
        document.getElementsByClassName('display-second')[0].innerHTML=seconds;
        document.getElementsByClassName('each-valuer')[0].innerHTML=age;
        document.getElementsByClassName('each-valuer')[2].innerHTML=parseInt((sun*24*60*60+seconds)/60/60/24/30);
        document.getElementsByClassName('each-valuer')[4].innerHTML=parseInt((sun*24*60*60+seconds)/60/60/24/7);
        document.getElementsByClassName('each-valuer')[6].innerHTML=parseInt((sun*24*60*60+seconds)/60/60/24);
        document.getElementsByClassName('each-valuer')[8].innerHTML=parseInt((sun*24*60*60+seconds)/60/60);
        document.getElementsByClassName('each-valuer')[10].innerHTML=parseInt((sun*24*60*60+seconds)/60) ;
        if(piao==1){
            document.getElementsByClassName('display-ages')[0].innerHTML=100-age;
            document.getElementsByClassName('display-seconds')[0].innerHTML=31536000-seconds;
            document.getElementsByClassName('each-valuers')[0].innerHTML=100-age;
            document.getElementsByClassName('each-valuers')[2].innerHTML=1200-parseInt((sun*24*60*60+seconds)/60/60/24/30);
            document.getElementsByClassName('each-valuers')[4].innerHTML=5214-parseInt((sun*24*60*60+seconds)/60/60/24/7);
            document.getElementsByClassName('each-valuers')[6].innerHTML=36500-parseInt((sun*24*60*60+seconds)/60/60/24);
            document.getElementsByClassName('each-valuers')[8].innerHTML=876000-parseInt((sun*24*60*60+seconds)/60/60);
            document.getElementsByClassName('each-valuers')[10].innerHTML=52560001-parseInt((sun*24*60*60+seconds)/60) ;
        }
    },
    timeRotation:function(){
        var date = new Date();
        //获取小时
        this.nowHours = date.getHours();
        if(this.nowHours == 0){
            this.nowHours = 24;
        }
        //获取分钟
        this.nowMinutes = date.getMinutes();
        //获取秒
        this.nowSeconds = date.getSeconds();
        //获取天
        this.nowDate = date.getDate();
        //获取月
        this.nowMonth = date.getMonth()+1;
        //获取年
        this.nowFullYear = date.getFullYear();
        this.clocksAndWatches();
        this.calculatingAge();
    },
    getHash:function(){
        var hashString=location.hash;
        hashString=hashString.split('#');
        hashString=hashString[1].split(',');
        this.year = Number(hashString[0]);
        this.month = Number(hashString[1]);
        this.day = Number(hashString[2]);
        this.timeRotation();
    },
    confirmationOfCancellation:function(){
        var oDiv = document.getElementsByClassName('data')[0];
        var oDiv1 = document.getElementsByClassName('background-shadow')[0];
        var oA = document.getElementsByClassName('button-a');
        var oButton=document.getElementsByClassName('time-button')[0];
        var oThis = this;
        oA[0].onclick=function(){
            oDiv.setAttribute('style','display: none');
            oDiv1.setAttribute('style','display: none');
            return false;
        }
        oA[1].onclick=function(){
            oDiv.setAttribute('style','display: none');
            oDiv1.setAttribute('style','display: none');
            oButton.innerHTML='死之钟';
            oButton.setAttribute('class','death-button');
            document.getElementsByClassName('surface')[0].setAttribute('style','margin-top: 10%');
            document.getElementsByClassName('information')[0].setAttribute('style','height: 42vh');
            var node = document.createElement('div');
            node.setAttribute('class','existence');
            node.innerHTML=`<p class='existence-display'>你已经 <span class='display-age'></span>.<span class='display-second'></span> 岁了</p>
                            <p class='existence-words'>在这个世界上，你已经存在</p>
                            <div class='display-information'>
                                <div class='each-information'>
                                    <p class='each-valuer'>1</p>
                                    <p class='each-valuer'>年</p>
                                </div><div class='each-information'>
                                    <p class='each-valuer'>1</p>
                                    <p class='each-valuer'>月</p>
                                </div><div class='each-information'>
                                    <p class='each-valuer'>1</p>
                                    <p class='each-valuer'>周</p>
                                </div><div class='each-information'>
                                    <p class='each-valuer'>1</p>
                                    <p class='each-valuer'>天</p>
                                </div><div class='each-information'>
                                    <p class='each-valuer'>1</p>
                                    <p class='each-valuer'>小时</p>
                                </div><div class='each-information'>
                                    <p class='each-valuer'>1000000000</p>
                                    <p class='each-valuer'>分钟</p>
                                </div>
                            </div>`
            document.getElementsByClassName('information')[0].appendChild(node);
            document.getElementsByClassName('start')[0].setAttribute('style','display: none');
            oThis.getHash();
            return false;
        }
    },
    startUp:function(){
        this.confirmationOfCancellation();
    }
}