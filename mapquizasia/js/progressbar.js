class ProgressBar{
                                       
    constructor(element, initialValue=0){
        this.valueElem = element.querySelector('.progress-bar-value');
        this.fillElem = element.querySelector('.progress-bar-fill');

        this.setValue(initialValue);
    }
    setValue(newValue){
        if(newValue <0){
            newValue=0;
        }                                                                       //progress bar

        if(newValue > 100){
            newValue=100;
            this.fillElem.style.background = "#59ea63";
        }
        if(newValue <=25){
          this.fillElem.style.background = "red";
        }else{
            this.fillElem.style.background = "#59ea63";
        }

        this.value= newValue;
        this.update();
    }
    update(){
        const percentage = this.value + '%';
        
        
        this.fillElem.style.height = percentage;
        this.valueElem.textContent = percentage;
    }
}

const pb1 =  new ProgressBar(document.querySelector('.progress-bar') , 100);