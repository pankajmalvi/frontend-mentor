const data = [
    {
        title: "Product preview card component",
        githubLink: "https://github.com/pankajmalvi/frontend-mentor/tree/product-preview-card-component-main",
        githubBranch: "product-preview-card-component-main",
        liveLink: "https://product-preview-pm.netlify.app/",
    },
    {
        title: "3-column preview card component",
        githubLink: "https://github.com/pankajmalvi/frontend-mentor/tree/3-col-preview-card",
        githubBranch: "3-col-preview-card",
        liveLink: "https://col-3-preview-card.netlify.app/",
    }

]


var tableBody = document.getElementById("table-body");

data.map(d => {

    var row = tableBody.insertRow(0);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Add some text to the new cells:
    cell1.innerHTML = d.title;
    cell2.innerHTML = `<a
    href=${d.githubLink}>${d.githubBranch}</a>`;
    cell3.innerHTML = `<a href="${d.liveLink}">${d.liveLink}</a>`;
})