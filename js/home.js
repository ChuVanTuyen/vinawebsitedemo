window.onscroll = () => {
  const windowHeight = window.innerHeight;
  const homeRow = document.querySelectorAll(".home_row");
  if (window.scrollY >= homeRow[0].offsetTop - windowHeight / 2) {
    l = homeRow.length;
    for (let i = 0; i < l; i++) {
      if (window.scrollY >= homeRow[i].offsetTop - windowHeight / 2) {
        const homeRowItem = homeRow[i].querySelectorAll(".post_item");
        addAnimateListDelay(homeRowItem, "moveRight");
      }
    }
  }
  const sectionWhyList = document.querySelector(".section_why");
  if(sectionWhyList){
    if (window.scrollY >= sectionWhyList.offsetTop - windowHeight/2) {
      const sectionWhy = document.querySelectorAll(".section_why > *");
      sectionWhy[0].classList.add("moveDown");
      sectionWhy[0].style.opacity = "1";
      sectionWhy[1].classList.add("moveUp");
      sectionWhy[1].style.opacity = "1";
      sectionWhy[2].classList.add("moveDownGrowUp");
      sectionWhy[2].style.opacity = "1";
      for (let i = 3; i < sectionWhy.length; i++) {
        setTimeout(() => {
          sectionWhy[i].classList.add("moveRight");
          sectionWhy[i].style.opacity = "1";
        }, (i - 2) * 500);
      }
    }
  }
  const secBannerImg = document.querySelector(".sec_banner_img img");
  if (window.scrollY >= secBannerImg.offsetTop - windowHeight/2) {
    secBannerImg.classList.add("moveUp");
    secBannerImg.style.opacity = "1";
  }
  const procedureTitle = document.querySelector(".procedure_title");
  if (window.scrollY >= procedureTitle.offsetTop - windowHeight/2) {
    procedureTitle.classList.add("moveDown");
    procedureTitle.style.opacity = "1";
    const road = document.querySelectorAll(".procedure_road .step");
    for (let i = 0; i < road.length; i++) {
      if (i % 2 == 0 && window.scrollY >= 3420 + 250 * i) {
        const roadItem = road[i].querySelectorAll("div");
        roadItem[2].classList.add("growUp");
        roadItem[2].style.opacity = "1";
        roadItem[1].classList.add("moveLeft");
        roadItem[1].style.opacity = "1";
        roadItem[0].classList.add("moveRight");
        roadItem[0].style.opacity = "1";
      }
      if (i % 2 == 1 && window.scrollY >= 3420 + 250 * i) {
        const roadItem = road[i].querySelectorAll("div");
        roadItem[0].classList.add("growUp");
        roadItem[0].style.opacity = "1";
        roadItem[1].classList.add("moveRight");
        roadItem[1].style.opacity = "1";
        roadItem[2].classList.add("moveLeft");
        roadItem[2].style.opacity = "1";
      }
    }
    const roadDecoration = document.querySelectorAll(
      ".procedure_road .decoration"
    );
    if (window.scrollY >= 3670) {
      roadDecoration[0].classList.add("moveUp");
      roadDecoration[0].style.opacity = "1";
      setTimeout(() => {
        roadDecoration[1].classList.add("moveDown");
        roadDecoration[1].style.opacity = "1";
      }, 500);
    }
    if (window.scrollY >= 3900) {
      roadDecoration[2].classList.add("moveLeft");
      roadDecoration[2].style.opacity = "1";
    }
    if (window.scrollY >= 4425) {
      roadDecoration[3].classList.add("moveDown");
      roadDecoration[3].style.opacity = "1";
    }
  }
  const titleReason = document.querySelector(".title_reason");
  if (window.scrollY >= titleReason.offsetTop - windowHeight/2) {
    titleReason.classList.add("moveUp");
    titleReason.style.opacity = "1";
  }
  const reason1List = document.querySelector(".reason_1");
  if (window.scrollY >= reason1List.offsetTop - windowHeight/2) {
    const reason1 = document.querySelectorAll(".reason_1 .reason_item");
    addAnimateListDelay(reason1, "moveUp", 200);
  }
  const reason2List = document.querySelector(".reason_2");
  if (window.scrollY >= reason2List.offsetTop - windowHeight/2) {
    const reason2 = document.querySelectorAll(".reason_2 .reason_item");
    addAnimateListDelay(reason2, "moveUp", 200);
  }
  const hotline = document.querySelector(".hotline > div");
  if (window.scrollY >= hotline.offsetTop-windowHeight) {
    const register = document.querySelector(".register > div");
    hotline.classList.add("moveRight");
    hotline.style.opacity = "1";
    register.classList.add("moveLeft");
    register.style.opacity = "1";
  }

  const widgetsMenu = document.querySelector(".widgets_menu h3");
  if (window.scrollY >= widgetsMenu.offsetTop - windowHeight) {
    const widgetsMenuItem = document.querySelectorAll(".widgets_menu_item");
    widgetsMenu.classList.add("moveRight");
    widgetsMenu.style.opacity = "1";
    addAnimateListDelay(widgetsMenuItem, "moveRight", 200);
  }

  if (window.scrollY >= document.querySelector(".footer_info").offsetTop-windowHeight) {
    const footerInfo = document.querySelectorAll(".footer_info > *");
    const footerSupport = document.querySelector(".footer_support > ul");
    footerSupport.classList.add("moveRight");
    addAnimateListDelay(footerInfo, "moveRight", 0);
    footerSupport.style.opacity = "1";
  }
};
