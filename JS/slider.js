import slides from '../JSON/flags.json' assert {type: 'json'};

class Slider{
    constructor(slidesNames, slidesRoute, format, slideIMGSelector, leftArrow, rightArrow){
      this.slidesNames = slidesNames;
      this.slidesRoute = slidesRoute;
      this.format = format;
      this.img = document.querySelector(slideIMGSelector);
      this.leftArrow = document.querySelector(leftArrow);
      this.rightArrow = document.querySelector(rightArrow);
      this.counter = 0;
    }

    setImage(){
      this.img.setAttribute('src', `${this.slidesRoute}${this.slidesNames[this.counter]}.${this.format}`)
    }

    changeLeft(){
      if(this.counter > 0){
        this.counter -= 1;
        this.setImage()
      }else if (this.counter === 0){
        this.counter = this.slidesNames.length - 1;
        this.setImage()
      }
    }

    changeRight(){
      if(this.counter < this.slidesNames.length - 1){
        this.counter += 1;
        this.setImage()
      }else if (this.counter === this.slidesNames.length - 1){
        this.counter = 0;
        this.setImage()
      }
    }


    slideLeft(){
      this.leftArrow.addEventListener('click', () => {
        this.img.style.transform = "translate(-400px)";
        setTimeout(() => {
          this.changeLeft();
          this.img.style.transition = "0s";
          this.img.style.transform = "translate(400px)";
        }, 500)
        setTimeout(() => {
          this.img.style.transition = "0.5s";
          this.img.style.transform = "translate(0px)"
        }, 900)
      })
    }

    slideRight(){
      this.rightArrow.addEventListener('click', () => {
        this.img.style.transform = "translate(400px)";
        setTimeout(() => {
          this.changeLeft();
          this.img.style.transition = "0s";
          this.img.style.transform = "translate(-400px)";
        }, 500)
        setTimeout(() => {
          this.img.style.transition = "0.5s";
          this.img.style.transform = "translate(0px)"
        }, 900)
      })
    }
}

const flagsSlider = new Slider(slides, "assets/IMG/flags/", "jpg", ".slider__flag", ".arrows__left", '.arrows__right');

flagsSlider.setImage();
flagsSlider.slideLeft();
flagsSlider.slideRight();
// flagsSlider.changeLeft();
// flagsSlider.changeRight();
