require('../less/index.less');
var selectionDateObj=require('../js/choice');
var pastTimeObj=require('../js/formerly');

var oButton=document.getElementsByClassName('time-button')[0];
oButton.onclick=function(){
    if(oButton.getAttribute('class') == 'time-button'){
        selectionDateObj.comprehensive();
        pastTimeObj.startUp();
    }else if(oButton.getAttribute('class') == 'death-button'){
        
    }
    
}
