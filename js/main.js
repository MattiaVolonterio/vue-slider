const { createApp } = Vue;

createApp({
  data() {
    return {
      slides: [
        {
          image: "01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      activeSlide: 0,
      autoplay: false,
    };
  },

  methods: {
    goNext() {
      if (this.activeSlide < this.slides.length - 1) {
        this.activeSlide++;
      } else {
        this.activeSlide = 0;
      }
    },

    goPrev() {
      if (this.activeSlide > 0) {
        this.activeSlide--;
      } else {
        this.activeSlide = this.slides.length - 1;
      }
    },

    goToSlide(slideIndex) {
      this.activeSlide = slideIndex;
    },

    startAutoplay() {
      this.autoplay = setInterval(() => {
        this.goNext();
      }, 3000);
    },
  },

  mounted() {
    this.startAutoplay();
  },
}).mount("#app");
