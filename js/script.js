// Load your images on page-load
function preloader() {
    const imagesList = [
        "./img/govImg.jpg",
        "./img/windGen.jpg",
        "./img/windEnergy.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

// Complete your resource-object that will store the dynamic content.
// Each sub-object represents a solution with headingContent, bodyText, imgUrl, and imgAlt properties.
const resourceObject = {
    solution1: {
        headingContent: "Government Subsidies and Incentives",
        bodyText: "Governments can provide financial subsidies and incentives to promote the adoption of clean energy sources. This can include tax credits, grants, and rebates for individuals and businesses that invest in renewable energy technologies such as solar panels, wind turbines, and energy-efficient appliances. By reducing the upfront costs of clean energy installations, more people can afford to make the switch.",
        imgUrl: "./img/govImg.jpg",
        imgAlt: "govImg"
    },
    solution2: {
        headingContent: "Community-Based Solar and Wind Projects",
        bodyText: "Community-based clean energy projects allow multiple households to pool their resources and invest in shared solar or wind installations. This approach lowers the individual cost burden, making clean energy more accessible to a broader segment of the population. Additionally, community projects foster a sense of ownership and collaboration, promoting sustainable practices within the community.",
        imgUrl: "./img/windGen.jpg",
        imgAlt: "comImg"
    },
    solution3: {
        headingContent: "Energy Efficiency Programs",
        bodyText: "Investing in energy efficiency measures can significantly reduce energy consumption and, in turn, lower energy bills. Governments and organizations can offer energy efficiency programs that provide financial support for home and business upgrades, such as insulation, LED lighting, and smart energy management systems. By using energy more efficiently, individuals can save money and contribute to a greener environment.",
        imgUrl: "./img/windEnergy.jpg",
        imgAlt: "programImg"
    }
};

// Get the reference to your HTML-container that will be dynamically loaded from the resource-object.
const dynamicContent = document.getElementById("dynamic-content");

// The first button in a NODE LIST of buttons will initially have the id: active-button (uniquely styled).
// The first content from the resource-object will be loaded on the page load.
window.addEventListener("load", () => {
    buttons[0].setAttribute("id", "active-button");
    updateContent(resourceObject.solution1);
});

// Start your handleSelection function here.
function handleSelection(event) {
    // Remove the id "active-button" from the element that contains it prior to the click-event.
    console.log("here")
    const activeButton = document.getElementById("active-button");
    if (activeButton) {
        activeButton.removeAttribute("id");
    }
    // Use the element-object method setAttribute() to set the id "active-button" to the currently clicked button.
    event.target.setAttribute("id", "active-button");
    console.log(event.target)

    // Use conditional and event-object to check which button is clicked and update the content accordingly.
    const clickedButton = event.target.dataset.key;
    const selectedSolution = resourceObject[clickedButton];

    // Check if the selectedSolution exists before updating the content
    if (selectedSolution) {
        updateContent(selectedSolution);
    }
}

// Register all buttons to click event. The event-handler handleSelection will listen for this event to happen.
const buttons = document.querySelectorAll(".buttons button");
buttons.forEach(button => {
    button.addEventListener("click", handleSelection);
});

// Function to update the dynamic content based on the selected solution
function updateContent(solution) {
    dynamicContent.innerHTML = `
        <h1>${solution.headingContent}</h1>
        <div class="image-and-content">

        <div class="image-in-dynamic">
            <img class="img-in-box" src="${solution.imgUrl}" alt="${solution.imgAlt}">
        </div>
        <p>${solution.bodyText}</p>
        </div>
    `;
}
