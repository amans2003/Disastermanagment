// Sample organization data (replace with your actual data)
const organizations = [
    { name: "Org1", type: "private", officersCount: 10, resources: ["funds", "volunteers"], location: "Andhra Pradesh" },
    { name: "Org2", type: "ngo", officersCount: 5, resources: ["volunteers"], location: "Karnataka" },
    // Add more organizations
];

// Function to filter and sort organizations based on user input
function filterOrganizations() {
    const orgType = document.getElementById("org-type").value.toLowerCase();
    const resourcesSelect = document.getElementById("resources");
    const resources = Array.from(resourcesSelect.selectedOptions).map(option => option.value);
    const location = document.getElementById("location").value;
    const sortOrder = document.getElementById("sort-order").value;

    // Check if "Nil" is selected and handle accordingly
    let filteredOrgs;
    if (resources.includes("nil")) {
        // If "Nil" is selected, include organizations with no specific resources
        filteredOrgs = organizations.filter(org => {
            return (orgType === "" || org.type === orgType) &&
                   (location === "" || org.location === location);
        });
    } else {
        // Otherwise, filter based on selected resources
        filteredOrgs = organizations.filter(org => {
            return (orgType === "" || org.type === orgType) &&
                   (resources.length === 0 || resources.every(resource => org.resources.includes(resource))) &&
                   (location === "" || org.location === location);
        });
    }

    // Sort the organizations based on the selected sort order
    if (sortOrder === "asc") {
        filteredOrgs.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else if (sortOrder === "desc") {
        filteredOrgs.sort((a, b) => (a.name < b.name) ? 1 : -1);
    }

    displayOrganizations(filteredOrgs);
}

// Function to display filtered organizations
function displayOrganizations(orgs) {
    const organizationList = document.getElementById("organization-list");
    organizationList.innerHTML = "";

    orgs.forEach(org => {
        const orgBox = document.createElement("div");
        orgBox.classList.add("organization-box");

        const orgTable = document.createElement("table");
        orgTable.innerHTML = `
            <thead>
                <tr>
                    <th>Organization Name</th>
                    <th>Organization Type</th>
                    <th>Officers Count</th>
                    <th>Resources Available</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${org.name}</td>
                    <td>${org.type}</td>
                    <td>${org.officersCount}</td>
                    <td>${org.resources.join(", ")}</td>
                    <td>${org.location}</td>
                </tr>
            </tbody>
        `;

        orgBox.appendChild(orgTable);
        organizationList.appendChild(orgBox);
    });
}

// Attach event listener to the filter button
document.getElementById("filter-button").addEventListener("click", filterOrganizations);

// Initialize with all organizations
displayOrganizations(organizations);
