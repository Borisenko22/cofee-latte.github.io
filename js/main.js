const tabsBtn  = document.querySelectorAll(".menu__tabs-btn");
const tabsItems = document.querySelectorAll(".tabs__content-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.menu__tabs-btn').click();

$(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded");
});

$(".burger ").on("click",".bar",function(){
  
    $(".nav-menu").slideToggle();
    $(".bar").toggleClass('change');
    $(".nav-menu li").slideRight();
  
   });
  