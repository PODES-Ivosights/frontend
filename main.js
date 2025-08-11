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