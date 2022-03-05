(() => {
  function handleDrawer(method) {
    if (!typeof document.body.classList[method] === "function") {
      throw Error("Unkown method");
    }
    document
      .querySelector(".drawer-container")
      .classList[method]("drawer-container--show-yes");
    document
      .querySelector(".drawer-curtain")
      .classList[method]("drawer-curtain--show-yes");

    document.body.classList[method]("drawer-scroll--enable-no");
  }

  document
    .getElementsByClassName("burger")[0]
    .addEventListener("click", (_) => handleDrawer("toggle"));

  document
    .getElementsByClassName("drawer-curtain")[0]
    .addEventListener("click", (_) => handleDrawer("remove"));

  document
    .getElementsByClassName("drawer-close-icon")[0]
    .addEventListener("click", (_) => handleDrawer("remove"));
})();
