
function preloader() {
    const imagesPaths = [
        "./img/logo.png",
        "./img/staticbg.jpg",
        "./img/Yeti.png",
        "./img/landing_img.jpg",
        "./img/fox-gif3.gif"

    ];
    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};

window.addEventListener("load", preloader);


const buttons = document.querySelectorAll(".port-button p");


const resources = [
    {
        heading: "to my general portfolio page!",
        imagePath: "./img/Yeti.png",
        imageAlt: "Yeti Illustration",
        body: "Here you will find a collection of complete projects, works in progress and other odds and ends. My work ranges from animation/videos to websites/back-end development to illustions/front-end development. Feel free to relax and scroll away or click on one of the buttons below to filter the pieces by type."
    },
    {
        heading: "to my content portfolio page!",
        imagePath: "./img/photo-deer.jpg",
        imageAlt: "Photo of Deer sticking out it's tongue",
        body: "Here you will find several pieces ranging from illustrations to photographs. Some of these are standalone and others were made to support a bigger project."
    },
    {
        heading: "to my layout portfolio page!",
        imagePath: "./img/landing_img.jpg",
        imageAlt: "Photoshopped image of girl holding logo",
        body: "Here you'll find websites, posters and any other piece that involves carefully arranging elements for a great look and user experience. In most cases I am also responsible for the content within the piece but I have worked with assets provided to me as well."
    },
    {
        heading: "to my motion portfolio page!",
        imagePath: "./img/fox-gif3.gif",
        imageAlt: "Gif of fox wagging tail",
        body: "Here you'll find a collection of animations, videos and motion graphics."
    }
];



const currentContent = document.querySelector(".current-content");



currentContent.innerHTML = `<div class="col-md-5 align-items-start">
                                <h2>${resources[0].heading}</h2>
                                <p>
                                    ${resources[0].body}
                                </p>
                            </div>
                            <div class="col-md-4 row justify-content-center">
                                <img class="align-self-end jumbo-img" alt="${resources[0].imageAlt}" src="${resources[0].imagePath}">
                            </div> `;


function contentLoader(ev){
    let eventTarget = ev.target.textContent;
    console.log(eventTarget);



    for (let btn of buttons) {
        if(btn.id) {
            btn.removeAttribute("id");
           }
    }
    
    
    ev.target.setAttribute("id", "button-active");


        if (eventTarget === "GENERAL") {
        currentContent.innerHTML = `<div class="col-md-5 align-items-start">
                                        <h2>${resources[0].heading}</h2>
                                        <p>
                                            ${resources[0].body}
                                        </p>
                                    </div>
                                    <div class="col-md-4 row justify-content-center">
                                        <img class="align-self-end jumbo-img" alt="${resources[0].imageAlt}" src="${resources[0].imagePath}">
                                    </div> `;

    } else if (eventTarget === "CONTENT") {
        currentContent.innerHTML = `<div class="col-md-5 align-items-start">
                                        <h2>${resources[1].heading}</h2>
                                        <p>
                                            ${resources[1].body}
                                        </p>
                                    </div>
                                    <div class="col-md-4 row justify-content-center">
                                        <img class="align-self-end jumbo-img" alt="${resources[1].imageAlt}" src="${resources[1].imagePath}">
                                    </div> `;
        
    } else if (eventTarget === "LAYOUT") {
        currentContent.innerHTML = `<div class="col-md-5 align-items-start">
                                        <h2>${resources[2].heading}</h2>
                                        <p>
                                            ${resources[2].body}
                                        </p>
                                    </div>
                                    <div class="col-md-4 row justify-content-center">
                                        <img class="align-self-end jumbo-img" alt="${resources[2].imageAlt}" src="${resources[2].imagePath}">
                                    </div> `;
        
    } else {
        currentContent.innerHTML = `<div class="col-md-5 align-items-start">
                                        <h2>${resources[3].heading}</h2>
                                        <p>
                                            ${resources[3].body}
                                        </p>
                                    </div>
                                    <div class="col-md-4 row justify-content-center">
                                        <img class="align-self-end jumbo-img" alt="${resources[3].imageAlt}" src="${resources[3].imagePath}">
                                    </div> `;
    }
    
}

buttons[0].addEventListener("click", contentLoader);
buttons[1].addEventListener("click", contentLoader);
buttons[2].addEventListener("click", contentLoader);
buttons[3].addEventListener("click", contentLoader);
