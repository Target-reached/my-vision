// Collect data to act!
const menuButton = document.querySelector('.menubutton');
const menuoptions = document.querySelector('.navoptions');
const show_container1 = document.querySelector('.container1');
const reach_designer = document.querySelector('.contact_developer');
const open_helpdesk = document.querySelector('.contact_designer1');
const instagram = document.querySelector('.instagram');
const mail = document.querySelector('.mail');
const instagram1 = document.querySelector('.instagram1')
const mail1 = document.querySelector('.mail1')
const course_box = document.querySelector('.frontend-courses');  //course_box=frontend box
const backend_box = document.querySelector('.backend-courses');
const prgrm_box = document.querySelector('.prgrm_src');
const help_button = document.querySelector('.help_button');
const goback_helpdesk = document.querySelector('.exit_helpdesk')

menuButton.addEventListener('click', (e) => {
    menuoptions.style.display = menuoptions.style.display === "block" ? "none" : "block";

});
document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && !menuoptions.contains(e.target)) {
        menuoptions.style.display = "none";
    }
});


// Create an Course Data Set! Object!
const courses = {
    html: {
        course_name: "HTML",
        course_video: "https://www.youtube.com/embed/_fvNAh_Tn7A",
        web_tutorial: "https://www.w3schools.com/html/default.asp"
    },

    css: {
        course_name: "CSS",
        course_video: "https://www.youtube.com/embed/I6sD16dnS7o",
        web_tutorial: "https://www.w3schools.com/css/default.asp"
    },

    javascript: {
        course_name: "JavaScript",
        course_video: "https://www.youtube.com/embed/I7VNBalcDAc",
        web_tutorial: "https://www.w3schools.com/js/default.asp",
    },

    reactjs: {
        course_name: "React JS",
        course_video: "https://www.youtube.com/embed/QFaFIcGhPoM",
        web_tutorial: "https://www.w3schools.com/react/default.asp",
    },
    projects_frontend: function () {
        window.open("https://www.geeksforgeeks.org/blogs/front-end-projects-to-improve-your-coding-skills/", "_blank")
    },

    resumeBuilding: function () {
        window.open("https://zety.com/lp/cv-maker-in?utm_source=bing&utm_medium=sem&utm_campaign=567883115&utm_term=online%20resume%20maker&network=o&device=c&adposition=&adgroupid=1188573810428943&placement=&utm_source=bing&utm_medium=sem&utm_campaign=567883115&utm_term=online%20resume%20maker&network=o&device=c&adposition=&adgroupid=1188573810428943&placement=&msclkid=f6461367d56119cd50767a019297cb4b", "_blank")
    },

    webhttp: {
        course_name: "webhttp",
        course_video: "https://www.youtube.com/embed/2JYT5f2isg4",
        web_tutorial: "https://www.tutorialspoint.com/http/index.htm"
    },
    api: {
        course_name: "api",
        course_video: "https://www.youtube.com/embed/WXsD0ZgxjRw",
        web_tutorial: "https://www.w3schools.com/js/js_api_intro.asp"
    },
    nodejs: {
        course_name: "nodejs",
        course_video: "https://www.youtube.com/embed/5eaBOxXABkU",
        web_tutorial: "https://www.w3schools.com/nodejs/default.asp"
    },
    expressjs: {
        course_name: "expressjs",
        course_video: "https://www.youtube.com/embed/fBzm9zja2Y8",
        web_tutorial: "https://www.geeksforgeeks.org/node-js/express-js/"
    },
    databases: {
        course_name: "database",
        course_video: "https://www.youtube.com/embed/pPqazMTzNOM",
        web_tutorial: "https://www.geeksforgeeks.org/dbms/dbms/"
    },
    authentication: {
        course_name: "authentication",
        course_video: "https://www.youtube.com/embed/UBUNrFtufWo",
        web_tutorial: "https://www.geeksforgeeks.org/blogs/how-to-implement-authentication-in-your-web-app-choosing-the-right-authentication-method/"
    },
    python: {
        course_name: "python",
        course_video: "https://www.youtube.com/embed/WGJJIrtnfpk",
        web_tutorial: "https://www.w3schools.com/python/"
    },
    cpp: {
        course_name: "cpp",
        course_video: "https://www.youtube.com/embed/8jLOx1hD3_o",
        web_tutorial: "https://www.w3schools.com/cpp/default.asp"
    },
    java: {
        course_name: "java",
        course_video: "https://www.youtube.com/embed/hBh_CC5y8-s",
        web_tutorial: "https://www.w3schools.com/java/default.asp"
    }

};

//type writter
function typewritter(container, lines, speed = 90) {
    let stepindex = 0;
    let charindex = 0;
    function typetext() {
        if (charindex < lines[stepindex].length) {
            container.innerHTML += lines[stepindex].charAt(charindex);
            charindex++;
            setTimeout(typetext, speed);
        } else {
            container.innerHTML += "<br>";
            stepindex++;
            charindex = 0;
            if (stepindex < lines.length) {
                setTimeout(typetext, 500);
            }
        }
    }
    typetext();
}


// Act for courses_names
function get_course_box(box) {
    box.addEventListener('click', (e) => {
        const crs_type = e.target;

        if (!crs_type.matches('img')) return;

        const course_name = crs_type.alt.trim().toLowerCase();

        if (course_name === 'projects') {
            const projects_page = confirm(`Do you want to open ${course_name} page?`);
            if (!projects_page) return;
            courses.projects_frontend();
        }
        else if (course_name === 'resume') {
            const resume_page = confirm(`Do you want to open ${course_name} page?`);
            if (!resume_page) return;
            courses.resumeBuilding();
        }
        else {
            const confirm_it = confirm(`Do you want to open ${course_name} page?`);

            if (!confirm_it) return;
            load_course(course_name);

        }


    });
}

get_course_box(course_box);
get_course_box(backend_box);
get_course_box(prgrm_box);



//Function to load Course!
function load_course(course_name) {
    const course_desk = document.querySelector('.course-desk');

    if (!courses[course_name]) return; // safety check

    show_container1.style.display = 'none';
    course_desk.style.display = 'flex';
    const course_wish = document.createElement('p');
    course_wish.textContent = 'Welcome';
    course_wish.className = 'course-wish';
    const goback = document.createElement('button');
    goback.className = 'home';
    goback.textContent = "Go Back";



    const video_div = document.createElement('div');
    video_div.className = 'videoDiv';
    const iframe = document.createElement('iframe');
    iframe.className = 'iframe';
    iframe.src = courses[course_name].course_video;
    iframe.allowFullscreen = true;


    const external_box = document.createElement('div');
    external_box.className = 'extrenal_box';
    const ext_link = document.createElement('p');
    ext_link.textContent = `Do you want an external resourse to learn ${course_name.toUpperCase()} ? `
    const ex_btn = document.createElement('button');
    ex_btn.className = 'ex_btn';
    ex_btn.textContent = "Yes";


    course_desk.innerHTML = '';
    course_desk.append(goback);
    course_desk.append(course_wish);
    video_div.append(iframe);
    course_desk.append(video_div);
    external_box.append(ext_link, ex_btn);
    course_desk.append(external_box);



    ex_btn.addEventListener('click', () => {
        const confirm_redirect = confirm("You will be taken to an enternal page! Do you want to continue ?");
        if (!confirm_redirect) return;
        window.open(courses[course_name].web_tutorial, "_blank");
    });

    home_go(course_desk, goback);
}



help_button.addEventListener('click', (e) => {
    const get_helpdesk = document.querySelector('.helpDesk');
    get_helpdesk.innerHTML = "";
    show_container1.style.display = 'none';
    get_helpdesk.innerHTML = "";
    get_helpdesk.style.display = 'flex';
    const help_desk = document.createElement('div');
    help_desk.className = 'helpdesk';

    const goback = document.createElement('button');
    goback.className = 'goBack';
    goback.textContent = "Go Back";
    get_helpdesk.append(goback);
    const heading = document.createElement('h2');
    heading.className = 'heading';
    heading.textContent = "How to handle this Website ? ";

    help_desk.append(heading);
    get_helpdesk.append(help_desk);
    const img_box = document.createElement('div');
    img_box.className = 'imgpreview';
    const webimg = document.createElement('img');
    webimg.className = 'image';
    webimg.src = "priview_page1.png";
    img_box.append(webimg);
    get_helpdesk.append(img_box);
    const direction_lines = {
        Step1: "👉 See all the course images!",
        Step2: "👉 Choose the course you need to learn.",
        Step3: "👉 You will be directed to another page!",
        Step4: "👉 See the video and learn the course!",
        Step5: "👉 Click external link to learn more..."
    }
    const steps = Object.values(direction_lines);
    const typewrtr = document.createElement('div');
    typewrtr.className = 'typer';
    get_helpdesk.append(typewrtr);


    typewritter(typewrtr, steps, 60);

    home_go(get_helpdesk, goback)
});




// Developer page!
const about_developer = document.querySelector('.about_developer');
about_developer.addEventListener('click', (e) => {
    show_container1.style.display = 'none';
    const about_section = document.querySelector('.about_designer');
    about_section.innerHTML = "";
    about_section.style.display = 'flex';
    const goback = document.createElement('button');
    goback.className = "exit_about";
    goback.textContent = "Go Back";

    const developer = document.createElement('div');
    developer.className = 'developer_image';
    const about_typewritter = document.createElement('div');
    about_typewritter.className = 'about_typewritter';

    about_section.append(goback, developer, about_typewritter);
    const about_object = [
        "Name: TALARI JAGAN MOHAN",
        "Phone: (REVEALED SOON!)",
        "G-Mail: (REVEALED SOON!)"
    ];

    typewritter(about_typewritter, about_object);

    home_go(about_section, goback);
});

const about_in_m = document.querySelector('.about_developer_m');
about_in_m.addEventListener('click', (e) => {
    show_container1.style.display = 'none';
    const about_section = document.querySelector('.about_designer');
    about_section.innerHTML = "";
    about_section.style.display = 'flex';
    const goback = document.createElement('button');
    goback.className = "exit_about";
    goback.textContent = "Go Back";

    const developer = document.createElement('div');
    developer.className = 'developer_image';
    const about_typewritter = document.createElement('div');
    about_typewritter.className = 'about_typewritter';

    about_section.append(goback, developer, about_typewritter);
    const about_object = [
        "Name: TALARI JAGAN MOHAN",
        "Phone: 9629342968",
        "G-Mail: jai.8.joy@gmail.com"
    ];

    typewritter(about_typewritter, about_object);

    home_go(about_section, goback);
});

reach_designer.addEventListener('click', (e) => {
    show_container1.style.display = 'none';
    open_helpdesk.style.display = 'flex';
    home_go(open_helpdesk, goback_helpdesk);

});

function contact_dev_link(element, url) {
    element.addEventListener('click', (e) => {
        const reach_developer = confirm("Are You Sure Want to Reach Designer?")
        if (!reach_developer) return;
        window.open(url, "_blank");
    })
}

contact_dev_link(instagram, "https://www.instagram.com/direct/t/17846284425392915/?__pwa=1");
contact_dev_link(instagram1, "https://www.instagram.com/direct/t/17846284425392915/?__pwa=1");
contact_dev_link(mail, "mailto:jai.8.joy@gmail.com");
contact_dev_link(mail1, "mailto:jai.8.joy@gmail.com");

//go back function for each page!
function home_go(main_window, button) {
    button.addEventListener('click', (e) => {
        main_window.style.display = 'none';
        show_container1.style.display = 'block';
    });
}



