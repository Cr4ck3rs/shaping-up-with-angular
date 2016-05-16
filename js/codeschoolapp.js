(function(){
  var store = angular.module('store', []);

  store.controller('StoreController', function(){
    this.products = gems;
  });

  store.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });

  store.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  })

  store.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  var gems = [
    {
    name: 'Dodecahedron',
    price: 120,
    description: 'The convex regular dodecahedron is one of the five regular Platonic solids and can be represented by its Schläfli symbol {5, 3}',
    "shine": 3,
    "rarity": 10,
    "color": "#51F",
    "faces": 24,
    canPurchase: true,
    soldOut: false,
    images: [
      {
        full: 'img/dodecahedron-01-full.jpg',
        thumb: 'img/gem-01.gif'
      },
    ],
    "reviews": [],
  },
  {
    name: 'Nonahedron',
    price: 105.23,
    description: 'There are 2606 distinct convex nonahedra, corresponding to the 2606 nonisomorphic nonahedral graphs',
    "shine": 5,
    "rarity": 5,
    "color": "#22C",
    "faces": 9,
    canPurchase: true,
    soldOut: true,
    images: [
      {
        full: 'img/gem-02-full.jpg',
        thumb: 'img/gem-02.gif'
      },
      {
        full: 'img/gem-03-full.jpg',
        thumb: 'img/gem-03.gif'
      },
      {
        full: 'img/gem-04-full.jpg',
        thumb: 'img/gem-04.gif'
      },
    ],
    "reviews": [],
  },
  {
    "name": "Zircon",
    "description": "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    "shine": 70,
    "price": 1100,
    "rarity": 2,
    "color": "#456",
    "faces": 6,
    canPurchase: true,
    soldOut: false,
    "images": [
      {
        full: 'img/gem-05-full.jpg',
        thumb: 'img/gem-05.gif'
      },
    ],
    "reviews": []
  },
  {
    name: 'Azurite',
    price: 5.95,
    description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.',
    "shine": 8,
    "rarity": 7,
    "color": "#E2E",
    "faces": 14,
    canPurchase: false,
    soldOut: false,
    images: [
      {
        full: 'img/gem-06-full.jpg',
        thumb: 'img/gem-06.gif'
      },
      {
        full: 'img/gem-07-full.jpg',
        thumb: 'img/gem-07.gif'
      },
    ],
    "reviews": [],
  },
  {
    name: 'Bloodstone',
    price: 22.90,
    description: 'Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.',
    "shine": 10,
    "rarity": 7,
    "color": "#FA1",
    "faces": 12,
    canPurchase: true,
    soldOut: false,
    images: [
      {
        full: 'img/gem-08-full.jpg',
        thumb: 'img/gem-08.gif'
      },
      {
        full: 'img/gem-09-full.jpg',
        thumb: 'img/gem-09.gif'
      },
      {
        full: 'img/gem-01-full.jpg',
        thumb: 'img/gem-01.gif'
      },
    ],
    "reviews": [
      {
        stars:4,
        body:'WHat a great gem',
        author:'Kuku'
      },
      {
        stars:5,
        body:'l33t g4m my |-|0m1es',
        author:'g4nst4 D00d'
      }
    ],
  }
  ];

})();
