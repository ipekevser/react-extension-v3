function ToggleButton() {

  function handleClick() {
    chrome.runtime.sendMessage({
      message: "clicked_extension_button",
    });
  }

  return (
    <div className="extension-button-wrapper">
      <button id="extension-toogle-button" onClick={handleClick}>
        Change Theme
      </button>
    </div>
  );
}

export default ToggleButton;
