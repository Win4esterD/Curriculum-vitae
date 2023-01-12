class burgerMenu{
  constructor(menuSelector, headerSelector, navSelector, mainSelector){
      this.menu = document.querySelector(menuSelector);
      this.header = document.querySelector(headerSelector);
      this.navigation = document.querySelector(navSelector);
      this.main = document.querySelector(mainSelector);
}

activate(){
  this.menu.addEventListener('click', () => {
    if(window.getComputedStyle(this.navigation).display === 'none'){
      this.header.style.height = '50px';
      this.navigation.style.display = 'flex';
      setTimeout(() => {
        this.navigation.style.opacity = '1';
      }, 500)
    }else{
      this.navigation.style.opacity = '0';
      this.navigation.style.display = 'none';
      this.header.style.height = "20px";
    }
  });

  this.main.addEventListener('click', () => {
    this.header.style.height = "20px";
    this.navigation.style.opacity = '0';
    this.navigation.style.display = 'none';
    setTimeout(() => this.navigation.style.display = 'none', 500)
  })
}
}

const burger = new burgerMenu('.burger-menu', '.header', '.nav__ul', 'main');
burger.activate();