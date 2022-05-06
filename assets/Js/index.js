async function wakeLockScreen() {
    let wakeLock = await navigator.wakeLock.request('screen');
}
document.querySelector("button")
    .assEventListener("click", wakeLockScreen)