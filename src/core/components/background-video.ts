export function renderBackground(src: string): HTMLVideoElement {

    const video = document.createElement('video');
    video.classList.add('background-video')
    video.autoplay = true
    video.loop = true;
    video.playsInline = true;
    video.muted = true;
    video.src = src;
    return video;
}
