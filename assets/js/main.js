// Al click su un pallino verrà visualizzata l'immagine di riferimento associata ( il terzo pallino sarà associato alla terza immagine e così via..)

var app = new Vue({
  el : "#root",
  data : {
    slideshowImages : [
      "https://unsplash.it/900/500?image=28",
      "https://unsplash.it/900/500?image=70",
      "https://unsplash.it/900/500?image=53",
      "https://unsplash.it/900/500?image=67"
    ],
    timer: null,
    currentIndex: 0
  },
  methods : {
    dots: function(){
      
    },

    next: function() {
      if (this.currentIndex < this.slideshowImages.length - 1){
        this.currentIndex += 1;
      } else {
        this.currentIndex = 0;
      }
    },

    prev: function() {
      if(this.currentIndex == 0){
        this.currentIndex = this.slideshowImages.length - 1;
      } else {
        this.currentIndex -= 1;
      }
    },
  },

  mounted() {
    this.timer = setInterval(this.next, 3000);
  }
});