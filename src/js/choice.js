module.exports={
    contrast:0,
    year:0,
    month:0,
    day:0,
    numberOfDays:0,
    indexDay:1,
    informationArr:[0,1,1],
    lock:true,
    promptRendering:function(){
        var oDiv = document.getElementsByClassName('specific-date')[0];
        var oSpan = oDiv.getElementsByTagName('span');
        oSpan[0].innerHTML=this.year;
        oSpan[1].innerHTML=this.month;
        oSpan[2].innerHTML=this.day;
    },
    renderingDay:function(){
        var oUl = document.getElementsByClassName('choice');
        elementDay='<li></li>';
        this.monthlyNumberOfDays();
        for(var i=1; i<=this.numberOfDays; i++){
            elementDay+='<li>'+ i +'日</li>';
        }
        elementDay+='<li></li><li></li><li></li>';
        oUl[2].innerHTML=elementDay;
        oUl[2].getElementsByTagName('li')[this.indexDay].setAttribute('class','discolour')
    },
    rendering:function(){
        var nowYear=new Date().getUTCFullYear();
        this.year=nowYear;
        this.month=1;
        this.day=1;
        var oUl = document.getElementsByClassName('choice');
        minimumYear=nowYear-100;
        elementYear='<li></li>';
        elementMonth='<li></li>';
        for(var i=nowYear; i>=minimumYear; i--){
            if(i==nowYear){
                elementYear+='<li class="discolour">'+ i +'年</li>';
            }else{
                elementYear+='<li>'+ i +'年</li>';
            }
        }
        elementYear+='<li></li><li></li><li></li>';
        oUl[0].innerHTML=elementYear;
        for(var j=1;j<13;j++){
            if(j==1){
                elementMonth+='<li class="discolour">'+ j +'月</li>';
            }else{
                elementMonth+='<li>'+ j +'月</li>';
            }
        }
        elementMonth+='<li></li><li></li><li></li>';
        oUl[1].innerHTML=elementMonth;
        this.renderingDay()
        this.promptRendering()
    },
    monthlyNumberOfDays:function(){
        switch(this.month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                this.numberOfDays = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                this.numberOfDays = 30;
                break;
        }
    },
    yearOfJudgment:function(){
        if(this.year%4==0 && this.month==2){
            this.numberOfDays = 29;
            this.renderingDay()
        }else if(this.year%4!=0 && this.month==2){
            this.numberOfDays = 28;
            this.renderingDay()
        }
    },
    specificDate:function(number,figure){
        if(number === 0){
            this.year = parseInt(figure);
            this.yearOfJudgment();
        }else if(number === 1){
            this.month = parseInt(figure);
            this.monthlyNumberOfDays()
            this.renderingDay()
            this.yearOfJudgment();
        }else if(number === 2){
            this.day = parseInt(figure);
        }
    },
    location:function(moveNumbers,oHeight){
        var model = parseInt(-moveNumbers) % 40;
        //计算出li是否挪动
        var reduce = parseInt(-moveNumbers)-model;
        //判断出li位置
        var except = (parseInt(-moveNumbers)-model) / 40;
        //判断方向
        if(this.contrast>moveNumbers){
            if(model>29){
                return [reduce+40, except+2];
            }else {
                return [reduce, except+1];
            }
        }else {
            if(model>20){
                return [reduce-40, except-1];
            }else {
                return [reduce, except];
            }
        }
        this.contrast = moveNumbers;
    },
    slide:function(){
        var beforeY=[0,0,0];
        var move = [0,0,0];
        var storage = [0,0,0];
        var oUl = document.getElementsByClassName('choice');
        var oThis = this;
        for(var i=0;i<oUl.length;i++){
            (function(i){
                oUl[i].ontouchmove=function(e){
                    var y = e.changedTouches[0].clientY;
                    var oHeight = this.offsetHeight;
                    var oLi = this.getElementsByTagName('li')
                    for(var j=0; j<oLi.length; j++){
                        oLi[j].setAttribute('class',' ');
                    }
                    oHeight = 200-oHeight;                    
                    if(!beforeY[i]){
                        beforeY[i] = y; 
                    }
                    move[i] = -(beforeY[i]-y);
                    beforeY[i] = y;
                    if(-50<move[i] && move[i]<50){
                        storage[i]+=move[i];
                        if(storage[i]>1){
                            this.style.transform = 'translateY(0px)';
                            storage[i] = 0;
                        }else if(storage[i]<oHeight){
                            this.style.transform = 'translateY('+oHeight+'px)';
                            storage[i] = oHeight;
                        }else{
                            this.style.transform = 'translateY(' + storage[i] + 'px)';
                            var moveString = this.style.transform;
                            var moveArr = moveString.split('(');
                            var moveNumbers = parseFloat(moveArr[1]);
                            this.ontouchend = function(){
                                var accept = oThis.location(moveNumbers,oHeight);
                                this.style.transform = 'translateY(-' + accept[0] + 'px)';
                                accept[1]=accept[1] == 0 ? 1 : accept[1];
                                oLi[accept[1]].setAttribute('class','discolour');
                                if(i == 2){
                                    oThis.indexDay=accept[1]
                                }
                                var figure = this.getElementsByClassName('discolour')[0].innerHTML;
                                oThis.specificDate(i,figure);
                                oThis.promptRendering()
                                oThis.informationArr[0]=oThis.year;
                                oThis.informationArr[1]=oThis.month;
                                oThis.informationArr[2]=oThis.day;
                                location.hash=oThis.informationArr
                            }
                        }
                    }
                }
            }(i))   
        }
    },
    generationDateBox:function(){
        var oDiv = document.getElementsByClassName('data')[0];
        oDiv.setAttribute('style','display: block');
        var oDiv1 = document.getElementsByClassName('background-shadow')[0];
        if(this.lock){
            oDiv.innerHTML=`<div class="specific-date">
                            <span>1994</span>-<span>02</span>-<span>28</span>
                        </div>
                        <div class="year">  
                            <div class="indicate"></div>
                            <ul class="choice" style="transform: translateY(0px)">
                                
                            </ul>
                        </div>
                        <div class="month">
                            <div class="indicate"></div>
                            <ul class="choice" style="transform: translateY(0px)">
                                
                            </ul>
                        </div>
                        <div class="day">
                            <div class="indicate"></div>
                            <ul class="choice" style="transform: translateY(0px)">
                                
                            </ul>
                        </div>
                        <div class="push-button">
                            <a href="javaScript:void(0)" class="button-a">取消</a>
                            <a href="javaScript:void(0)" class="button-a">确定</a>
                        </div>`;
            this.lock=false;
        }
        
        oDiv1.setAttribute('style','display: block');
    },
    comprehensive:function(){
        this.generationDateBox();
        this.rendering();
        this.slide();
        this.informationArr[0]=this.year;
        location.hash=this.informationArr;
    }
}