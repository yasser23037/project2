import bcrypt from 'bcryptjs';
const data ={ users: [
    {
      name: 'yasser',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
    products:[
        {
        name:'lasagna',
        image:'/images/p1.jpg',
        price:10,
        category:'main course',
        rating:4.5,
        description:'Lasagna is both pasta in the shape of rectangular sheets, as well as an Italian cuisine recipe based on alternating layers of lasagna, parmesan, mozzarella, or ricotta pasta, and bolognese sauce or bechamel sauce, au gratin in the oven',
        slug:'lasagna',
        countInStock:4,
        numReviews:10,},
    
        {
        name:'panna cotta',
        image:'/images/p2.jpg',
        price:5,
        category:'dessert',
        rating:5,
        description:'Panna cotta is made from a mixture of cream, milk and sugar, to which gelatin is added after boiling (sometimes replaced by melted white chocolate) to obtain a firm gelatinous consistency after cooling in the refrigerator in ramekins or indiv_idual glasses It can be flavored with, among other things, vanilla, chocolate, coffee, lemon, orange, orange blossom water, or even rum',
        slug:'panna cotta',
        countInStock:4,
        numReviews:10,},

        {
        name:'tiramisu',
        image:'/images/p3.jpg',
        price:10,
        category:'dessert',
        rating:4.5,
        description:'Dessert d origine italienne mondialement connu. Le tiramisu est fait à base de café, de sucre, d oeufs, de biscuits secs baptisés boudoirs, et d un fromage frais appelé mascarpone. On y ajoute du marsala, de l amaretto ou du kalhua',
        slug:'tiramisu',
        countInStock:4,
        numReviews:18,},
    
        {
        name:'pasta carbonara',
        image:'/images/p4.jpg',
        price:12,
        category:'main course',
        rating:4,
        description:'Carbonara pasta or carbonara sauce is a traditional culinary specialty of Italian cuisine, originating in Rome and Lazio, very popular in Italy and around the world, made with pasta cooked with eggs, bacon bits and grated cheese',
        slug:'pasta carbonara',
        countInStock:4,
        numReviews:8,},
    
        {
        name:'pizza Margherita',
        image:'/images/p5.jpg',
        price:10,
        category:'main course',
        rating:5,
        description:'Margherita pizza is the name of a traditional culinary specialty from the city of Naples in Italy. Very popular, this Napoletana pizza is topped with tomatoes, mozzarella, fresh basil, salt and olive oil. This pizza is in the colors of the Italian flag',
        slug:'pizza Margherita',
        countInStock:4,
        numReviews:15,},
    
        {
        name:'spaghetti bolognese',
        image:'/images/p6.jpg',
        price:15,
        category:'main course',
        rating:4.5,
        description:'Spaghetti bolognese consists of spaghetti (long strings of pasta) with an Italian ragù (meat sauce) made with minced beef, bacon and tomatoes ',
        slug:'spaghetti bolognese',
        countInStock:4,
        numReviews:6,
    },
    
        {
        name:'minestrone soup',
        image:'/images/p7.jpg',
        price:7,
        category:'starter',
        rating:4.5,
        description:'A minestrone is a variation of thick vegetable soup in Italian cuisine, often with added pasta or rice and served with grated parmesan cheese',
        slug:'minestrone soup',
        countInStock:4,
        numReviews:8,
    },
        {
        name:'seafood risotto',
        image:'/images/p8.jpg',
        price:10,
        category:'main course',
        rating:3.5,
        description:'This fragrant seafood risotto recipe from Shaun Rankin contains prawns, mussels and scallops and is given beautiful flavour by an assortment of fresh herbs',
        slug:'seafood risotto',
        countInStock:4,
        numReviews:10,
    },
    
        {
        name:'bruschetta',
        image:'/images/p9.jpg',
        price:5,
        category:'starter',
        rating:3,
        description:'Nothing screams summer quite like bruschetta. We know it may sound strange, but rubbing the toasted bread with garlic will help impart tons',
    slug:'bruschetta',
    countInStock:4,
    numReviews:10,
    
    },
    
    
    
    
    
    
    
    
    
    
    ]
    
    
    
    
    };
    export default data