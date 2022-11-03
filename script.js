const suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];


const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggestionBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
const linkTag = searchWrapper.querySelector("a");
let webLink;

function onItemClick(event) {
    const selectedData = event.target.textContent
    inputBox.value = selectedData;

    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }

    searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
    console.log(list);
    const dataList = listData = list.join('') || `<li>${inputBox.value}</li>`;
    suggestionBox.innerHTML = dataList;
}

function onInputKeyup(e) {    
    let userData = e.target.value; // user entered data
    if (userData) {
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }

        const dataSuggestionList = suggestions.flatMap((item) => {
            if (item.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())) {
                return `<li>${item}</li>`;
            }
            return [];
        });

        searchWrapper.classList.add("active");
        showSuggestions(dataSuggestionList);

        suggestionBox.querySelectorAll("li").forEach((item) => {
            item.addEventListener("click", onItemClick);
        });
    } else {
        searchWrapper.classList.remove("active");
    }
}

inputBox.addEventListener("keyup", onInputKeyup);
