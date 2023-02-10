// // local reviews data
// const reviews = [
//   {
//     id: 1,
//     name: "susan smith",
//     job: "web developer",
//     img:
//       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
//     text:
//       "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
//   },
//   {
//     id: 2,
//     name: "anna johnson",
//     job: "web designer",
//     img:
//       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
//     text:
//       "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
//   },
//   {
//     id: 3,
//     name: "peter jones",
//     job: "intern",
//     img:
//       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
//     text:
//       "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
//   },
//   {
//     id: 4,
//     name: "bill anderson",
//     job: "the boss",
//     img:
//       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
//     text:
//       "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
//   },
// ];


// const reviewList = document.querySelector(".review")
// // console.log(reviews)

// const next = document.querySelector(".next-btn");
// // console.log(next);

// const previous = document.querySelector(".prev-btn");
// // console.log(previous);

// const random = document.querySelector(".random-btn");
// // console.log(random);

// const img = document.querySelector('.person-img');
// // console.log(img);

// const author = document.querySelector('.author');
// // console.log(author);

// const job = document.querySelector('.job');
// // console.log(job);

// const info = document.querySelector('.info');
// // console.log(info);

// let increase = -1
// next.addEventListener("click",()=>{
// increase++
//   if(increase === 4){
//     increase = 0
//   }
//   img.src = reviews[increase].img
//   author.innerHTML = reviews[increase].name
//   job.innerHTML = reviews[increase].job
//   info.innerHTML = reviews[increase].text
//   // console.log(increase);
// })


// let decrease = 4
// previous.addEventListener("click",()=>{
// decrease--
//   if(decrease === -1){
//     decrease = 4
//   }
//   img.src = reviews[decrease].img
//   author.innerHTML = reviews[decrease].name
//   job.innerHTML = reviews[decrease].job
//   info.innerHTML = reviews[decrease].text
//   // console.log(decrease);
// })


// random.addEventListener("click",()=>{

// let randomBtn = Math.floor(Math.random() * reviews.length);
// console.log(randomBtn);
//   img.src = reviews[randomBtn].img
//   author.innerHTML = reviews[randomBtn].name
//   job.innerHTML = reviews[randomBtn].job
//   info.innerHTML = reviews[randomBtn].text
//   // console.log(randomBtn);
// })



const person = {
  name:"amrish",
  age:12,

}
console.log(person["age"]);