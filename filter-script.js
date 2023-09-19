// Sample organization data (replace with your actual data)
const organizations = [
    { name: "Delhi State Disaster Management Authority (DSDMA)", type: "NGO", officersCount: 10, resources: ["volunteers"], location: "Delhi" },
    { name: "Andhra Pradesh State Disaster Management Authority (APSDMA)", type: "GOV", officersCount: 5, resources: ["volunteers"], location: "Andhra Pradesh" },
    { name: "Arunachal Pradesh State Disaster Management Authority (APSDMA)", type: "GOV", officersCount: 8, resources: ["volunteers"], location: "Arunachal Pradesh" },
    { name: "Assam State Disaster Management Authority (ASDMA)", type: "GOV", officersCount: 12, resources: ["volunteers"], location: "Assam" },
    { name: "Bihar State Disaster Management Authority (BSDMA)", type: "GOV", officersCount: 7, resources: ["funds", "volunteers"], location: "Bihar" },
    { name: "Chhattisgarh State Disaster Management Authority (CSDMA)", type: "GOV", officersCount: 15, resources: ["volunteers"], location: "Chhattisgarh" },
    { name: "Goa State Disaster Management Authority (GSDMA)", type: "GOV", officersCount: 9, resources: ["funds", "volunteers"], location: "Goa" },
    { name: "Gujarat State Disaster Management Authority (GSDMA)", type: "NGO", officersCount: 11, resources: ["volunteers"], location: "Gujarat" },
    { name: "Haryana State Disaster Management Authority (HSDMA)", type: "GOV", officersCount: 6, resources: ["funds", "volunteers"], location: "Haryana" },
    { name: "Himachal Pradesh State Disaster Management Authority (HPSDMA)", type: "GOV", officersCount: 8, resources: ["volunteers"], location: "Himachal Pradesh" },
    { name: "Jharkhand State Disaster Management Authority (JSDMA)", type: "GOV", officersCount: 7, resources: ["funds", "volunteers"], location: "Jharkhand" },
    { name: "Karnataka State Disaster Management Authority (KSDMA)", type: "GOV", officersCount: 9, resources: ["funds", "volunteers"], location: "Karnataka" },
    { name: "Kerala State Disaster Management Authority (KSDMA)", type: "NGO", officersCount: 10, resources: ["volunteers"], location: "Kerala" },
    { name: "Madhya Pradesh State Disaster Management Authority (MPSDMA)", type: "GOV", officersCount: 11, resources: ["volunteers"], location: "Madhya Pradesh" },
    { name: "Maharashtra State Disaster Management Authority (MSDMA)", type: "GOV", officersCount: 12, resources: ["funds", "volunteers"], location: "Maharashtra" },
    { name: "Manipur State Disaster Management Authority (MSDMA)", type: "GOV", officersCount: 6, resources: ["volunteers"], location: "Manipur" },
    { name: "Meghalaya State Disaster Management Authority (MeSDMA)", type: "GOV", officersCount: 5, resources: ["funds", "volunteers"], location: "Meghalaya" },
    { name: "Mizoram State Disaster Management Authority (MzSDMA)", type: "GOV", officersCount: 4, resources: ["volunteers"], location: "Mizoram" },
    { name: "Nagaland State Disaster Management Authority (NSDMA)", type: "GOV", officersCount: 3, resources: ["volunteers"], location: "Nagaland" },
    { name: "Odisha State Disaster Management Authority (OSDMA)", type: "GOV", officersCount: 13, resources: ["funds", "volunteers"], location: "Odisha" },
    { name: "Punjab State Disaster Management Authority (PSDMA)", type: "GOV", officersCount: 14, resources: ["volunteers"], location: "Punjab" },
    { name: "Rajasthan State Disaster Management Authority (RSDMA)", type: "GOV", officersCount: 10, resources: ["funds", "volunteers"], location: "Rajasthan" },
    { name: "Sikkim State Disaster Management Authority (SSDMA)", type: "NGO", officersCount: 7, resources: ["volunteers"], location: "Sikkim" },
    { name: "Tamil Nadu State Disaster Management Authority (TNSDMA)", type: "NGO", officersCount: 8, resources: ["volunteers"], location: "Tamil Nadu" },
    { name: "Telangana State Disaster Response and Fire Services Department (TSDR&FSD)", type: "GOV", officersCount: 9, resources: ["funds", "volunteers"], location: "Telangana" },
    { name: "Tripura State Disaster Management Authority (TSDMA)", type: "GOV", officersCount: 5, resources: ["funds", "volunteers"], location: "Tripura" },
    { name: "Uttar Pradesh State Disaster Management Authority (UPSDMA)", type: "GOV", officersCount: 12, resources: ["funds", "volunteers"], location: "Uttar Pradesh" },
    { name: "Uttarakhand State Disaster Management Authority (USDMA)", type: "GOV", officersCount: 10, resources: ["volunteers"], location: "Uttarakhand" },
    { name: "West Bengal State Disaster Management Authority (WBSDMA)", type: "GOV", officersCount: 8, resources: ["funds", "volunteers"], location: "West Bengal" }
      ]
      
    // Add more organizations
;

// Function to filter and sort organizations based on user input
function filterOrganizations() {
    const orgType = document.getElementById("org-type").value;
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
