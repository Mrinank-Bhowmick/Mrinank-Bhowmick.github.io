AOS.init();

//  Tech Stacks cards
const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python Programming is a high-level, interpreted, interactive and object-oriented scripting language.</li>",
  },
  {
    langImage: "assets/images/techstack-page/kubernetes.png",
    langName: "Kubernetes",
    langDesc: "<li>kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications.</li>",
  },
  {
    langImage: "assets/images/techstack-page/docker.png",
    langName: "Docker",
    langDesc: "<li>docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.</li>",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage:"assets/images/techstack-page/c.png",
    langName:"C",
    langDesc:"<li>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system</li>"
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
