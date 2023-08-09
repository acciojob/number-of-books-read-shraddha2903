const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	var count=0;
	for(let i:library)
		{
			if(i.readingStatus==true)
		    {
			    count++;
		    }
		}
   // return count;
console.log(count);
};

// Do not change the code below

alert(numberOfBooksRead());
