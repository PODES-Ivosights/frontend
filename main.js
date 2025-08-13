function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function toggleVisibility(){
    const visibility = document.querySelector('.visibility')
    const password = document.querySelector('.password')
    if(password.getAttribute('type') === "password"){
        password.setAttribute('type', 'text');
        visibility.setAttribute('src', "Asset/visibility.svg"); 
    }else{
        password.setAttribute('type', 'password');
        visibility.setAttribute('src', "Asset/visibility_off.svg");
    }
}

function openSearchBar(){
    const start = document.getElementById('mulaiCari')
    const open = document.getElementById('searchBar')
    start.style.display = 'none';
    open.style.display = 'flex';
}

// Search Result ////////////////////////////

// Data
let kategoriData = [
    {
        name: "Kategori 1",
        desc: "Kategori 1 .... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec facilisis erat, nec pretium lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus. Sed sed mi at augue vehicula pretium. Nullam sed neque urna. Vivamus nec turpis vitae felis fermentum elementum. In sed ligula vitae orci accumsan viverra. Maecenas porta leo id felis porta, in dignissim elit ultrices. Fusce et urna ac mi faucibus euismod. Integer tincidunt nunc vitae lorem viverra, ac ultricies turpis suscipit.",
        keterangan: ["Keterangan 1A", "Keterangan 1B", "Keterangan 1C"],
        status: ["Status 1A", "Status 1B", "Status 1C"]
    },
    {
        name: "Kategori 2",
        desc: "Kategori 2 .... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec facilisis erat, nec pretium lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus. Sed sed mi at augue vehicula pretium. Nullam sed neque urna. Vivamus nec turpis vitae felis fermentum elementum. In sed ligula vitae orci accumsan viverra. Maecenas porta leo id felis porta, in dignissim elit ultrices. Fusce et urna ac mi faucibus euismod. Integer tincidunt nunc vitae lorem viverra, ac ultricies turpis suscipit.",
        keterangan: ["Keterangan 2A", "Keterangan 2B"],
        status: ["Status 2A", "Status 2B"]
    },
    {
        name: "Kategori 3",
        desc: "Kategori 3 .... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec facilisis erat, nec pretium lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus. Sed sed mi at augue vehicula pretium. Nullam sed neque urna. Vivamus nec turpis vitae felis fermentum elementum. In sed ligula vitae orci accumsan viverra. Maecenas porta leo id felis porta, in dignissim elit ultrices. Fusce et urna ac mi faucibus euismod. Integer tincidunt nunc vitae lorem viverra, ac ultricies turpis suscipit.",
        keterangan: ["Keterangan 3A", "Keterangan 3B", "Keterangan 3C", "Keterangan 3D"],
        status: ["Status 3A", "Status 3B", "Status 3C", "Status 3D"]
    },
    {
        name: "Kategori 4",
        desc: "Kategori 4 .... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec facilisis erat, nec pretium lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus. Sed sed mi at augue vehicula pretium. Nullam sed neque urna. Vivamus nec turpis vitae felis fermentum elementum. In sed ligula vitae orci accumsan viverra. Maecenas porta leo id felis porta, in dignissim elit ultrices. Fusce et urna ac mi faucibus euismod. Integer tincidunt nunc vitae lorem viverra, ac ultricies turpis suscipit.",
        keterangan: ["Keterangan 4A"],
        status: ["Status 4A"]
    },
    {
        name: "Kategori 5",
        desc: "Kategori 5 .... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec facilisis erat, nec pretium lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus. Sed sed mi at augue vehicula pretium. Nullam sed neque urna. Vivamus nec turpis vitae felis fermentum elementum. In sed ligula vitae orci accumsan viverra. Maecenas porta leo id felis porta, in dignissim elit ultrices. Fusce et urna ac mi faucibus euismod. Integer tincidunt nunc vitae lorem viverra, ac ultricies turpis suscipit.",
        keterangan: ["Keterangan 5A", "Keterangan 5B"],
        status: ["Status 5A", "Status 5B"]
    }
];

// DOM references
const listKategori = document.querySelector('#listKategori');
const judulKategori = document.querySelector('#judulKategori');
const deskripsiKategori = document.querySelector('#deskripsiKategori');
const infoTBody = document.querySelector('#infoTBody');

// Build kategori list
kategoriData.forEach((item, index) => {
    let div = document.createElement('div');
    div.innerHTML = item.name;
    if (index === 0) div.classList.add('selected'); // default selected
    listKategori.appendChild(div);
});

// Function to update informasi & table
function updateInformasi(index) {
    let data = kategoriData[index];
    judulKategori.textContent = data.name;
    deskripsiKategori.textContent = data.desc;

    // Clear table
    infoTBody.innerHTML = "";

    // Populate table rows
    data.keterangan.forEach((ket, i) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="number">${i + 1}</td>
            <td class="middle">${ket}</td>
            <td class="end">${data.status[i]}</td>
        `;
        infoTBody.appendChild(tr);
    });
}

// Set default on page load
updateInformasi(0);

// Handle category click
listKategori.addEventListener('click', function (e) {
    if (e.target.tagName === 'DIV') {
        let current = listKategori.querySelector('.selected');
        if (current) current.classList.remove('selected');

        e.target.classList.add('selected');

        let index = Array.from(listKategori.children).indexOf(e.target);
        updateInformasi(index);
    }
});

/////////////////////////////////////////////