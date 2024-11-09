function loadingBar(progress) {
    const percentSymbols = '%'.repeat(progress / 10);
    const dots = '.'.repeat(10 - percentSymbols.length);

    if (progress === 100) {
        console.log("100% Complete!");
        console.log(`[${percentSymbols}]`);
    } else {
        console.log(`${progress}% [${percentSymbols}${dots}]`);
        console.log("Still loading...");
    }
}

loadingBar(30);  // Output: 30% [%%%.......] Still loading...
loadingBar(50);  // Output: 50% [%%%%%.....] Still loading...
loadingBar(100); // Output: 100% Complete! [%%%%%%%%%%]
