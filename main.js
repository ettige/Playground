window.addEventListener("gamepadconnected", (event) => {
    console.log(navigator.getGamepads());
  });
  window.onload=navigator.getGamepads().mapping;
