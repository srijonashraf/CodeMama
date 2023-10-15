function main(input) {
    const numbers = input.trim().split(' ');
    const minute = parseFloat(numbers[0]);
    const fps = parseFloat(numbers[1]);
    
    const frames = calculateFrames(minute, fps);
    
    console.log(frames);
}

function calculateFrames(minutes, fps) {
    const secondsInMinute = 60;
    const frames = Math.round(minutes * fps * secondsInMinute);
    return frames;
}

process.stdin.once('data', data => {
    main(data.toString());
});
