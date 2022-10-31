const contactMapBtn = document.querySelector(".contact_map_btn");
contactMapBtn.onclick = (e)=>{
    contactMapBtn.querySelector("button.active").classList.remove("active");
    e.target.classList.add("active");
    if(e.target.matches("button#HCMmap")){
        const googleMap = document.querySelector(".google_map");
        googleMap.innerHTML=`<iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7837.716708418302!2d106.700937!3d10.82215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9bbd59fab087d9dd!2sVinaHost%20Co.%2C%20Ltd!5e0!3m2!1sen!2sus!4v1666930642879!5m2!1sen!2sus"
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    }
    if(e.target.matches("button#Hanoimap")){
        const googleMap = document.querySelector(".google_map");
        googleMap.innerHTML=`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7449.811442024747!2d105.826871!3d20.996416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac88433bddef%3A0x8c1e620e8467077b!2zNzggUC4gSG_DoG5nIFbEg24gVGjDoWksIEtoxrDGoW5nIFRydW5nLCBUaGFuaCBYdcOibiwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2sus!4v1666932286261!5m2!1sen!2sus" 
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    }
}