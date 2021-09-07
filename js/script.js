function subscribe(){
    //submit form
    const form = document.getElementById("subs-form");
    form.submit();
};

function copy_mail(){
    const mail = 'animeicons@pm.me';
    navigator.clipboard.writeText(mail);
    const text = document.getElementById("copied");
    text.style.display = "block";
};

function remove_tab(){
    const text = document.getElementById("copied");
    text.style.display = "none";
}