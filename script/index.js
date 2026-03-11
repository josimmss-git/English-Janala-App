const loadLessons = () => {
  // promise of responce
  fetch("https://openapi.programming-hero.com/api/levels/all")
  .then(res => res.json())  //promise of json data
  .then((json) => displayLesson(json.data));
}

const loadLevelWord = (id) => {
 
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
  
  
};
const displayLevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";


  if (words.length == 0) {
    wordContainer.innerHTML = `
    
    <div
     class=" text-center col-span-full rounded-xl py-10 space-y-6 bangla-font">

     <img class="mx-auto" src="./assets/alert-error.png" alt="">
      <p class="text-xl font-medium text-gray-400">“এই lesson কোনো ভোকাবুলারি যুক্ত করা হয়নি।”</p>
      <h2 class="font-bold text-3xl">নেক্সট Lesson এ যান</h2>

    </div>
    `;
  }

//   {
//     "id": 102,
//     "level_no": 2,
//     "lessonName": "Everyday Words"
// }
  
  

  words.forEach((word) => {
    const card = document.createElement("div");
    card.innerHTML = `
  <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">

      <h2 class="font-bold text-2xl">${word.word ? word.word:"শব্দ পাওয়া যায়নি"} </h2>
      <p class="font-semibold">Meading/Pronouncialtion</p>
      <div class="bangla-font text-2xl font-medium">"${word.meaning ? word.meaning: "অর্থ পাওয়া যায়নি"} / ${word.pronunciation? word.pronunciation : "pronunciation not found"}"</div>
      <div class="flex justify-between items-center">
        <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
        <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
      </div>


    </div>
  `;
    wordContainer.append(card);
  });
};



const displayLesson = (lessons) => {
  // 1.get the container & empty
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  // 2. get into every loadLessons
  for (let lesson of lessons) {


    // 3.create Element
    const btnDiv = document.createElement("div");
    console.log(lesson);

    btnDiv.innerHTML =`
  <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
  <i class="fa-solid fa-book-open"></i>lesson - ${lesson.level_no}
  </button>
  `;
    
    
    // 4.append into container
    levelContainer.append(btnDiv);

  };
};

loadLessons();