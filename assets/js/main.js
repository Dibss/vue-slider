// Partendo da un array di immagini, realizziamo uno slider con Vue.js come da mockup
// Al click delle freccette "sinistra" e "destra" lo slider cambierà l'immagine visibile passando alla successiva oppure alla precedente.

// Attenzione

// Quando le immagini terminano, lo slider ricomincerà dalla prima
// Bonus

// applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente ( riguardare la documentazione su i lifecycle hooks )
// Al click su un pallino verrà visualizzata l'immagine di riferimento associata ( il terzo pallino sarà associato alla terza immagine e così via..)

var app = new Vue({
  el : "#root",
  data : {
    slideshowImages : [
      "https://unsplash.it/900/500?image=28",
      "https://unsplash.it/900/500?image=70",
      "https://unsplash.it/900/500?image=53",
      "https://unsplash.it/900/500?image=67",
    ],
    timer: null,
    currentIndex: 0
  },
  methods : {
    currentImg : function(){
      for(let i = 0; i < this.slideshowImages.length; i++)
      this.slideshowImages[i] = this.currentIndex;
      return this.currentIndex;
    },

    dots: function(){

    },
    
    timerSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },

    prev: function() {
      this.currentIndex -= 1;
    },
  }
});