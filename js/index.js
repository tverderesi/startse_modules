function getid(obj) {
  const anim = document.getElementById("boday");
  anim.classList.replace("text-focus-in", "text-blur-out");
  setTimeout(() => {
    window.location.href = `./html/${obj.id}.html`;
  }, 1000);
}
