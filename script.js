// Sample book data (you can replace it with your own data)
const books = [

  
    {
      title: "A scientist's inspiring vision of our return to the Moon as humanity's next thrilling step in space exploration.",
      author: "Anelia Hepworth",
      coverImage:"image/book2.jpg" ,
      pdfFile: "image/I_Love_You_to_the_Moon_and_Back_pdf_by_A.pdf",
      description: "A scientist's inspiring vision of our return to the Moon as humanity's next thrilling step in space exploration."
    },
    {
      title: "A beloved novel that follows the spirited Elizabeth Bennet as she navigates the complex world.",
      author: "Jane Austen",
      coverImage: "image/book8.jpg",
      pdfFile: "image/pride-and-prejudice.pdf",
      description: "a beloved novel that follows the spirited Elizabeth Bennet as she navigates the complex world."
    },


    {
      title: "When Kip Bramley receives a cryptic invitation, delivered by a beetle shaped drone which appears to be breathing.",
      author: "Loris Owen",
      coverImage: "image/book5.jpg" ,
      pdfFile: "image/ten riddles.pdf",
      description: "When Kip Bramley receives a cryptic invitation, delivered by a beetle shaped drone which appears to be breathing."
    },

   
    {
      title:  "A cracking underdog story that explores the determination and risk-taking necessary in  one's dreams.",
      author: "Fleur Hichcock",
      coverImage:"image/book3.jpg" ,
      pdfFile: "image/pdf-the-boy-who-flew-too-high-01_compress.pdf",
      description: "a cracking underdog story that explores the determination and risk-taking necessary in  one's dreams. ."
    },
  
    {
        title: "A classic American novel that explores themes of wealth, love, the pursuit of the American Dream.",
        author: "F. Scott Fitzgerald",
        coverImage: "image/book10.jpg" ,
        pdfFile: "image/the-great-gatsby.pdf",
        description: "a classic American novel that explores themes of wealth, love, the pursuit of the American Dream."
      },
      {
        title:  "A powerful coming-of-age novel set in the racially charged atmosphere of the 1930s Deep South. ",
        author: "Harper Lee",
        coverImage: "image/book7.jpg",
        pdfFile: "image/to-kill-a-mockingbird-by-harper-lee-pdf-free-download.pdf",
        description: "a powerful coming-of-age novel set in the racially charged atmosphere of the 1930s Deep South. "
      },
     
      {
        title:"A young boy team up with his ancestor to break the curse thats haunted their family for generations.",
        author: "Tracy badua",
        coverImage: "image/book6.jpg" ,
        pdfFile: "",
        description: "a young boy team up with his ancestor to break the curse thats haunted their family for generations."
      },
      {
        title:  "Dystopian novel that paints a chilling picture of a totalitarian society.",
        author: "George Orwell",
        coverImage: "image/book14.jpg",
        pdfFile: "image/1984.pdf",
        description: "dystopian novel that paints a chilling picture of a totalitarian society."
      },

      {
        title:  " Playful, and mischievous Ruby is fully dimensional, as she has shown her bravery during the many hardships of her young life.",
        author: "Temre Beltz",
        coverImage: "image/book4.jpg" ,
        pdfFile: "",
        description: " playful, and mischievous Ruby is fully dimensional, as she has shown her bravery during the many hardships of her young life."
      },
      {
        title: "The seminal novel captures the disillusionment of teenage rebellion..",
        author: "J.D. Salinger",
        coverImage: "image/book11.jpg",
        pdfFile: "image/the catcher the the rye.pdf",
        description: "The seminal novel captures the disillusionment of teenage rebellion.."
      },
  ];
  
  
 
  document.getElementById("readButton").addEventListener("click", function() {
    var pdfURL = "path/to/your/pdf/file.pdf";
    var pdfContainer = document.getElementById("pdfContainer");
  
    // Clear any existing PDF content
    pdfContainer.innerHTML = "";
  
    // Create a new iframe to display the PDF
    var iframe = document.createElement("iframe");
    iframe.src = "https://mozilla.github.io/pdf.js/web/viewer.html?file=" + encodeURIComponent(pdfURL);
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    pdfContainer.appendChild(iframe);
  });


function displayBooks() {
  const bookList = document.getElementById("book-list");

  bookList.innerHTML = "";

  books.forEach(book => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");

    const bookImage = document.createElement("img");
    bookImage.src = book.coverImage;
    bookElement.appendChild(bookImage);

    const bookOverlay = document.createElement("div");
    bookOverlay.classList.add("overlay");

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;
    bookOverlay.appendChild(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `By ${book.author}`;
    bookOverlay.appendChild(bookAuthor);
    // const bookDescription = document.createElement("p");
    // bookDescription.textContent = book.description;
    // bookElement.appendChild(bookDescription);

    const bookButton = document.createElement("button");
    bookButton.textContent = "Read";
    bookButton.addEventListener("click", () => {
      window.open(book.pdfFile, "_blank");
    });
    bookOverlay.appendChild(bookButton);

    bookElement.appendChild(bookOverlay);

    bookList.appendChild(bookElement);
  });

  // Add event listeners to each book element for hover effect
  const bookElements = document.querySelectorAll(".book");
  bookElements.forEach(book => {
    book.addEventListener("mouseover", () => {
      book.querySelector(".overlay").style.display = "block";
    });

    book.addEventListener("mouseout", () => {
      book.querySelector(".overlay").style.display = "none";
    });
  });
}

window.addEventListener("DOMContentLoaded", displayBooks);



















