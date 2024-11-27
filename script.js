// Simulate loading JSON content (e.g., from a server)
const jsonContent = {
    "media": [
        {
            "type": "video",
            "src": "https://www.w3schools.com/html/mov_bbb.mp4",
            "title": "Sample Video"
        },
        {
            "type": "audio",
            "src": "https://www.w3schools.com/html/horse.mp3",
            "title": "Sample Audio"
        },
        {
            "type": "image",
            "src": "https://www.w3schools.com/html/pic_trulli.jpg",
            "alt": "Trulli",
            "title": "Sample Image"
        },
        {
            "type": "text",
            "content": "This is a sample content area. You can add custom text here, providing more details about your media or other content."
        }
    ]
};

// Function to load content
function loadContent(content) {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Clear previous content

    content.media.forEach(item => {
        const mediaElement = document.createElement('div');
        mediaElement.classList.add('media-content');

        switch (item.type) {
            case 'video':
                const video = document.createElement('video');
                video.setAttribute('controls', true);
                video.src = item.src;
                video.classList.add('video');
                mediaElement.innerHTML = `<h3>${item.title}</h3>`;
                mediaElement.appendChild(video);
                break;
            case 'audio':
                const audio = document.createElement('audio');
                audio.setAttribute('controls', true);
                audio.src = item.src;
                audio.classList.add('audio');
                mediaElement.innerHTML = `<h3>${item.title}</h3>`;
                mediaElement.appendChild(audio);
                break;
            case 'image':
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = item.alt;
                img.classList.add('image');
                mediaElement.innerHTML = `<h3>${item.title}</h3>`;
                mediaElement.appendChild(img);
                break;
            case 'text':
                const text = document.createElement('p');
                text.classList.add('text-content');
                text.innerText = item.content;
                mediaElement.appendChild(text);
                break;
        }
        contentContainer.appendChild(mediaElement);
    });
}

// Load the content when the page is ready
window.onload = () => {
    loadContent(jsonContent);
};
