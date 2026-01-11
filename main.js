// Sample data for Instagram feed
const posts = [
  {
    id: 1,
    username: 'traveler_jane',
    userAvatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    location: 'Bali, Indonesia',
    mediaType: 'image',
    media: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    caption: 'Paradise found 🌴 #bali #vacation #paradise',
    likes: 1243,
    isLiked: false,
    comments: [
      { username: 'travel_lover', text: 'This looks amazing! 😍' },
      { username: 'photo_enthusiast', text: 'Great shot! What camera did you use?' }
    ],
    timePosted: '2 HOURS AGO'
  },
  {
    id: 2,
    username: 'food_explorer',
    userAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    location: 'Downtown Cafe',
    mediaType: 'video',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-pizza-being-prepared-22969-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    caption: 'Best pizza in town! 🍕 #foodie #delicious #pizza',
    likes: 856,
    isLiked: false,
    comments: [
      { username: 'pizza_fan', text: 'I need to try this place!' },
      { username: 'chef_mike', text: 'The crust looks perfect 👌' }
    ],
    timePosted: '5 HOURS AGO'
  },
  {
    id: 3,
    username: 'fitness_guru',
    userAvatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    location: 'Sunset Gym',
    mediaType: 'image',
    media: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    caption: 'Morning workout done! 💪 #fitness #motivation #healthylifestyle',
    likes: 2105,
    isLiked: false,
    comments: [
      { username: 'gym_rat', text: 'Keep crushing it! 💯' },
      { username: 'health_coach', text: 'What\'s your routine?' }
    ],
    timePosted: '7 HOURS AGO'
  },
  {
    id: 4,
    username: 'nature_lover',
    userAvatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    location: 'Mountain View Trail',
    mediaType: 'video',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
    caption: 'Nothing beats the sound of nature 🌿 #nature #hiking #peaceful',
    likes: 1876,
    isLiked: false,
    comments: [
      { username: 'hiker101', text: 'This spot looks incredible!' },
      { username: 'outdoor_enthusiast', text: 'The perfect weekend getaway 👏' }
    ],
    timePosted: '1 DAY AGO'
  },
  {
    id: 5,
    username: 'urban_photographer',
    userAvatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    location: 'Downtown Metro',
    mediaType: 'carousel',
    mediaItems: [
      { type: 'image', src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000' },
      { type: 'video', src: 'https://assets.mixkit.co/videos/preview/mixkit-time-lapse-of-a-city-at-night-4264-large.mp4', thumbnail: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9' },
      { type: 'image', src: 'https://images.unsplash.com/photo-1444084316824-dc26d6657664' }
    ],
    caption: 'City lights and urban nights 🌃 #cityscape #nightphotography #urban',
    likes: 3421,
    isLiked: false,
    comments: [
      { username: 'city_dweller', text: 'I love the contrast in these shots!' },
      { username: 'night_owl', text: 'The city never sleeps 🌙' }
    ],
    timePosted: '3 DAYS AGO'
  }
];

// Sample data for stories
const stories = [
  { username: 'your_story', avatar: 'https://randomuser.me/api/portraits/lego/5.jpg', isYou: true, storyImage: 'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6' },
  { username: 'john_doe', avatar: 'https://randomuser.me/api/portraits/men/43.jpg', storyImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
  { username: 'travel_addict', avatar: 'https://randomuser.me/api/portraits/women/63.jpg', storyImage: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9' },
  { username: 'food_lover', avatar: 'https://randomuser.me/api/portraits/men/91.jpg', storyImage: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327' },
  { username: 'fitness_freak', avatar: 'https://randomuser.me/api/portraits/women/89.jpg', storyImage: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1' },
  { username: 'tech_geek', avatar: 'https://randomuser.me/api/portraits/men/75.jpg', storyImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c' },
  { username: 'art_enthusiast', avatar: 'https://randomuser.me/api/portraits/women/32.jpg', storyImage: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f' },
  { username: 'music_lover', avatar: 'https://randomuser.me/api/portraits/men/22.jpg', storyImage: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae' }
];

// Sample data for explore/search grid
const exploreItems = [
  { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4', likes: 4521, comments: 89, isVideo: false, large: true },
  { id: 2, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', likes: 2103, comments: 43, isVideo: false },
  { id: 3, image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470', likes: 3892, comments: 156, isVideo: true },
  { id: 4, image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1', likes: 1876, comments: 32, isVideo: false },
  { id: 5, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba', likes: 5421, comments: 201, isVideo: false },
  { id: 6, image: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f', likes: 892, comments: 21, isVideo: false, large: true },
  { id: 7, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', likes: 3201, comments: 87, isVideo: true },
  { id: 8, image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e', likes: 2543, comments: 65, isVideo: false },
  { id: 9, image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716', likes: 4102, comments: 134, isVideo: false },
  { id: 10, image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', likes: 1654, comments: 28, isVideo: false },
  { id: 11, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', likes: 2876, comments: 76, isVideo: false },
  { id: 12, image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff', likes: 3421, comments: 98, isVideo: false }
];

// Sample data for activity/notifications
const activityData = {
  today: [
    { type: 'like', username: 'travel_addict', avatar: 'https://randomuser.me/api/portraits/women/63.jpg', text: 'liked your photo.', time: '2h', postImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4' },
    { type: 'follow', username: 'photo_master', avatar: 'https://randomuser.me/api/portraits/men/45.jpg', text: 'started following you.', time: '3h', isFollowing: false },
    { type: 'comment', username: 'food_lover', avatar: 'https://randomuser.me/api/portraits/men/91.jpg', text: 'commented: "This looks amazing! 🔥"', time: '5h', postImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38' }
  ],
  week: [
    { type: 'like', username: 'fitness_freak', avatar: 'https://randomuser.me/api/portraits/women/89.jpg', text: 'and 23 others liked your photo.', time: '2d', postImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438' },
    { type: 'follow', username: 'nature_explorer', avatar: 'https://randomuser.me/api/portraits/women/28.jpg', text: 'started following you.', time: '3d', isFollowing: true },
    { type: 'mention', username: 'tech_geek', avatar: 'https://randomuser.me/api/portraits/men/75.jpg', text: 'mentioned you in a comment.', time: '4d', postImage: 'https://images.unsplash.com/photo-1501854140801-50d01698950b' }
  ],
  earlier: [
    { type: 'follow', username: 'art_lover', avatar: 'https://randomuser.me/api/portraits/women/55.jpg', text: 'started following you.', time: '1w', isFollowing: false },
    { type: 'like', username: 'music_fan', avatar: 'https://randomuser.me/api/portraits/men/33.jpg', text: 'liked your reel.', time: '1w', postImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000' },
    { type: 'follow', username: 'chef_mike', avatar: 'https://randomuser.me/api/portraits/men/67.jpg', text: 'started following you.', time: '2w', isFollowing: true }
  ]
};

// Sample data for profile grid
const profilePosts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4', likes: 1243, comments: 45 },
  { id: 2, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38', likes: 856, comments: 23 },
  { id: 3, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438', likes: 2105, comments: 67 },
  { id: 4, image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b', likes: 1876, comments: 54 },
  { id: 5, image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000', likes: 3421, comments: 89 },
  { id: 6, image: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9', likes: 2340, comments: 56 },
  { id: 7, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4', likes: 4521, comments: 102 },
  { id: 8, image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', likes: 1567, comments: 34 },
  { id: 9, image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1', likes: 2890, comments: 78 }
];

// Function to render stories
function renderStories() {
  const storiesContainer = document.getElementById('stories-container');

  stories.forEach((story, index) => {
    const storyElement = document.createElement('div');
    storyElement.className = 'story';
    // Add click event to open story
    storyElement.addEventListener('click', () => openStory(index));

    storyElement.innerHTML = `
      <div class="story-avatar-container">
        <img src="${story.avatar}" alt="${story.username}" class="story-avatar">
      </div>
      <div class="story-username">${story.isYou ? 'Your Story' : story.username}</div>
    `;
    storiesContainer.appendChild(storyElement);
  });
}

// ==========================================
// STORY FUNCTIONALITY
// ==========================================
let currentStoryIndex = 0;
let storyTimer = null;
let storyStartTime = 0;
const STORY_DURATION = 3000; // 3 seconds per story

function openStory(index) {
  currentStoryIndex = index;
  const modal = document.getElementById('story-modal');
  modal.classList.add('active');

  showStory(currentStoryIndex);

  // Add listeners for modal controls if not already added
  // (Ideally specific story listeners should be managed carefully to avoid duplicates, 
  // but for this simple app, we can rely on Global listeners or attach once)
}

function showStory(index) {
  if (index < 0 || index >= stories.length) {
    closeStory();
    return;
  }

  const story = stories[index];

  // Update DOM
  document.getElementById('story-header-avatar').src = story.avatar;
  document.getElementById('story-header-username').textContent = story.isYou ? 'Your Story' : story.username;
  document.getElementById('story-content-image').src = story.storyImage;
  document.getElementById('story-header-time').textContent = Math.floor(Math.random() * 23) + 1 + 'h';

  // Render progress bars
  const progressContainer = document.getElementById('story-progress-container');
  progressContainer.innerHTML = '';

  stories.forEach((_, i) => {
    const bar = document.createElement('div');
    bar.className = 'story-progress-bar';
    const fill = document.createElement('div');
    fill.className = 'story-progress-fill';

    if (i < index) {
      fill.style.width = '100%';
    } else if (i === index) {
      fill.style.width = '0%';
      // Will be animated
      fill.id = 'current-story-progress';
    } else {
      fill.style.width = '0%';
    }

    bar.appendChild(fill);
    progressContainer.appendChild(bar);
  });

  // Start timer
  startStoryTimer();
}

function startStoryTimer() {
  clearStoryTimer();
  storyStartTime = Date.now();

  const currentFill = document.getElementById('current-story-progress');

  storyTimer = setInterval(() => {
    const elapsed = Date.now() - storyStartTime;
    const progress = Math.min((elapsed / STORY_DURATION) * 100, 100);

    if (currentFill) {
      currentFill.style.width = `${progress}%`;
    }

    if (elapsed >= STORY_DURATION) {
      nextStory();
    }
  }, 16); // ~60fps
}

function clearStoryTimer() {
  if (storyTimer) {
    clearInterval(storyTimer);
    storyTimer = null;
  }
}

function nextStory() {
  if (currentStoryIndex < stories.length - 1) {
    currentStoryIndex++;
    showStory(currentStoryIndex);
  } else {
    closeStory();
  }
}

function prevStory() {
  if (currentStoryIndex > 0) {
    currentStoryIndex--;
    showStory(currentStoryIndex);
  } else {
    // Restart current story or close? Instagram usually resets or goes to previous user.
    // Here we'll just restart if it's the first one.
    showStory(currentStoryIndex);
  }
}

function closeStory() {
  const modal = document.getElementById('story-modal');
  modal.classList.remove('active');
  clearStoryTimer();
}

// Add Story specific event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Navigation tap areas
  document.getElementById('story-nav-prev').addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing if we had a click-to-close on background
    prevStory();
  });

  document.getElementById('story-nav-next').addEventListener('click', (e) => {
    e.stopPropagation();
    nextStory();
  });

  // Close button
  document.getElementById('story-close').addEventListener('click', (e) => {
    e.stopPropagation();
    closeStory();
  });
});


// Function to create media element based on type
function createMediaElement(post) {
  if (post.mediaType === 'image') {
    return `
      <div class="post-image-container">
        <img src="${post.media}" alt="Post image" class="post-image">
      </div>
    `;
  } else if (post.mediaType === 'video') {
    return `
      <div class="post-video-container">
        <video class="post-video" poster="${post.thumbnail}" controls>
          <source src="${post.media}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="video-overlay">
          <i class="fas fa-play video-play-icon"></i>
        </div>
      </div>
    `;
  } else if (post.mediaType === 'carousel') {
    const carouselItems = post.mediaItems.map((item, index) => {
      if (item.type === 'image') {
        return `
          <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${item.src}" alt="Carousel image" class="post-image">
          </div>
        `;
      } else {
        return `
          <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <video class="post-video" poster="${item.thumbnail}" controls>
              <source src="${item.src}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <div class="video-overlay">
              <i class="fas fa-play video-play-icon"></i>
            </div>
          </div>
        `;
      }
    }).join('');

    return `
      <div class="post-carousel-container">
        <div class="carousel-items">
          ${carouselItems}
        </div>
        <div class="carousel-controls">
          <button class="carousel-control prev"><i class="fas fa-chevron-left"></i></button>
          <button class="carousel-control next"><i class="fas fa-chevron-right"></i></button>
        </div>
        <div class="carousel-indicators">
          ${post.mediaItems.map((_, index) =>
      `<div class="carousel-indicator ${index === 0 ? 'active' : ''}"></div>`
    ).join('')}
        </div>
      </div>
    `;
  }
}

// Function to render posts
function renderPosts() {
  const feedContainer = document.getElementById('instagram-feed');

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'instagram-post';
    postElement.dataset.postId = post.id;

    const mediaElement = createMediaElement(post);

    postElement.innerHTML = `
      <div class="post-header">
        <img src="${post.userAvatar}" alt="${post.username}" class="post-avatar">
        <div>
          <div class="post-username">${post.username}</div>
          <div class="post-location">${post.location}</div>
        </div>
        <div class="post-more">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
      
      ${mediaElement}
      
      <div class="post-actions">
        <i class="post-action like-button ${post.isLiked ? 'fas fa-heart liked' : 'far fa-heart'}"></i>
        <i class="post-action far fa-comment"></i>
        <i class="post-action far fa-paper-plane"></i>
        <i class="post-action bookmark far fa-bookmark"></i>
        <!-- <i class="post-action download" src="${post.media}">Download</i> -->
      </div>
      
      <div class="post-likes">${post.likes.toLocaleString()} likes</div>
      
      <div class="post-caption">
        <span class="post-caption-username">${post.username}</span> ${post.caption}
      </div>
      
      <div class="post-comments">
        <div class="post-view-comments">View all comments</div>
        ${post.comments.map(comment => `
          <div class="post-comment">
            <span class="post-comment-username">${comment.username}</span> ${comment.text}
          </div>
        `).join('')}
      </div>
      
      <div class="post-time">${post.timePosted}</div>
      
      <div class="post-add-comment">
        <input type="text" placeholder="Add a comment..." class="post-add-comment-input">
        <div class="post-add-comment-button">Post</div>
      </div>
    `;

    feedContainer.appendChild(postElement);
  });
}

// Function to download media
async function downloadMedia(downloadButton) {
  const mediaURL = new URL(downloadButton.getAttribute('src'));
  try {
    const response = await fetch(mediaURL.href);
    const blob = await response.blob();

    // Create a temporary anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);

    // Set the file name
    downloadLink.download = mediaURL.href.split('/').pop();

    // Append to the body, click, and remove
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // Clean up the object URL
    URL.revokeObjectURL(downloadLink.href);
  } catch (error) {
    console.error('Error downloading media:', error);
    alert('Failed to download media. Please try again later.');
  }
}

// Function to handle like button clicks
function handleLikeButtonClick(button) {
  const postId = button.closest('.instagram-post').dataset.postId;
  const post = posts.find(p => p.id == postId);

  if (button.classList.contains('far')) {
    // Like the post
    button.classList.remove('far');
    button.classList.add('fas', 'liked');
    post.likes++;
    post.isLiked = true;
  } else {
    // Unlike the post
    button.classList.remove('fas', 'liked');
    button.classList.add('far');
    post.likes--;
    post.isLiked = false;
  }

  // Update likes count
  const likesElement = button.closest('.instagram-post').querySelector('.post-likes');
  likesElement.textContent = `${post.likes.toLocaleString()} likes`;
}

// Function to handle double-click on post image
function handleMediaDoubleClick(mediaElement) {
  const postElement = mediaElement.closest('.instagram-post');
  const likeButton = postElement.querySelector('.like-button');
  const postId = postElement.dataset.postId;
  const post = posts.find(p => p.id == postId);

  if (!post.isLiked) {
    // Like the post
    likeButton.classList.remove('far');
    likeButton.classList.add('fas', 'liked');
    post.likes++;
    post.isLiked = true;

    // Update likes count
    const likesElement = postElement.querySelector('.post-likes');
    likesElement.textContent = `${post.likes.toLocaleString()} likes`;

    // Show heart animation
    const heart = document.createElement('i');
    heart.className = 'fas fa-heart post-like-animation';

    mediaElement.parentNode.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
}

// Function to handle video play/pause
function handleVideoOverlayClick(overlay) {
  const videoContainer = overlay.closest('.post-video-container');
  const video = videoContainer.querySelector('video');

  if (video.paused) {
    video.play();
    overlay.style.opacity = '0';
  } else {
    video.pause();
    overlay.style.opacity = '1';
  }
}

// Function to handle video play/pause events
function handleVideoEvents(video) {
  const overlay = video.parentNode.querySelector('.video-overlay');

  video.addEventListener('play', () => {
    overlay.style.opacity = '0';
  });

  video.addEventListener('pause', () => {
    overlay.style.opacity = '1';
  });

  video.addEventListener('ended', () => {
    overlay.style.opacity = '1';
  });
}

// Function to handle carousel navigation
function handleCarouselControls(carouselContainer) {
  const items = carouselContainer.querySelectorAll('.carousel-item');
  const indicators = carouselContainer.querySelectorAll('.carousel-indicator');
  const prevButton = carouselContainer.querySelector('.carousel-control.prev');
  const nextButton = carouselContainer.querySelector('.carousel-control.next');
  let currentIndex = 0;

  // Function to update active item
  const updateActiveItem = (index) => {
    // Remove active class from all items and indicators
    items.forEach(item => item.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Add active class to current item and indicator
    items[index].classList.add('active');
    indicators[index].classList.add('active');

    // Pause all videos when switching slides
    carouselContainer.querySelectorAll('video').forEach(video => {
      video.pause();
    });

    // Update button visibility
    prevButton.style.display = index === 0 ? 'none' : 'flex';
    nextButton.style.display = index === items.length - 1 ? 'none' : 'flex';
  };

  // Initialize button visibility
  prevButton.style.display = 'none';

  // Add click event to previous button
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateActiveItem(currentIndex);
    }
  });

  // Add click event to next button
  nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      updateActiveItem(currentIndex);
    }
  });

  // Add click events to indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateActiveItem(currentIndex);
    });
  });
}

// Function to handle comment input
function handleCommentInput(input) {
  const postButton = input.nextElementSibling;

  if (input.value.trim() !== '') {
    postButton.classList.add('active');
  } else {
    postButton.classList.remove('active');
  }
}

// Function to handle comment posting
function handleCommentPost(button) {
  const input = button.previousElementSibling;
  const commentText = input.value.trim();

  if (commentText !== '') {
    const postElement = button.closest('.instagram-post');
    const commentsContainer = postElement.querySelector('.post-comments');
    const postId = postElement.dataset.postId;
    const post = posts.find(p => p.id == postId);

    // Add new comment
    const newComment = { username: 'you', text: commentText };
    post.comments.push(newComment);

    // Create and append new comment element
    const commentElement = document.createElement('div');
    commentElement.className = 'post-comment';
    commentElement.innerHTML = `<span class="post-comment-username">you</span> ${commentText}`;
    commentsContainer.appendChild(commentElement);

    // Clear input
    input.value = '';
    button.classList.remove('active');
  }
}

// Function to handle bookmark clicks
function handleBookmarkClick(bookmark) {
  if (bookmark.classList.contains('far')) {
    bookmark.classList.remove('far');
    bookmark.classList.add('fas');
  } else {
    bookmark.classList.remove('fas');
    bookmark.classList.add('far');
  }
}

// Function to add all event listeners
function addEventListeners() {
  // Like button functionality
  document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => handleLikeButtonClick(button));
  });

  // Double-click to like for images
  document.querySelectorAll('.post-image').forEach(image => {
    image.addEventListener('dblclick', () => handleMediaDoubleClick(image));
  });

  // Video overlay click
  document.querySelectorAll('.video-overlay').forEach(overlay => {
    overlay.addEventListener('click', () => handleVideoOverlayClick(overlay));
  });

  // Video events
  document.querySelectorAll('.post-video').forEach(video => {
    handleVideoEvents(video);
  });

  // Carousel controls
  document.querySelectorAll('.post-carousel-container').forEach(carousel => {
    handleCarouselControls(carousel);
  });

  // Comment input functionality
  document.querySelectorAll('.post-add-comment-input').forEach(input => {
    input.addEventListener('input', () => handleCommentInput(input));

    // Allow posting comment with Enter key
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && input.value.trim() !== '') {
        handleCommentPost(input.nextElementSibling);
      }
    });
  });

  // Comment post button functionality
  document.querySelectorAll('.post-add-comment-button').forEach(button => {
    button.addEventListener('click', () => handleCommentPost(button));
  });

  // Bookmark functionality
  document.querySelectorAll('.bookmark').forEach(bookmark => {
    bookmark.addEventListener('click', () => handleBookmarkClick(bookmark));
  });

  // Download functionality
  document.querySelectorAll('.download').forEach(downloadButton => {
    console.log('=== MEDIA URL', downloadButton.getAttribute('src'));
    downloadButton.addEventListener('click', () => downloadMedia(downloadButton));
  });
}

// Initialize the Instagram feed
document.addEventListener('DOMContentLoaded', () => {
  renderStories();
  renderPosts();
  renderExploreGrid();
  renderActivity();
  renderProfileGrid();
  addEventListeners();
  addNavigationListeners();
});

// Function to render explore grid
function renderExploreGrid() {
  const exploreGrid = document.getElementById('explore-grid');
  if (!exploreGrid) return;

  exploreItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = `explore-item${item.large ? ' large' : ''}`;
    itemElement.innerHTML = `
      <img src="${item.image}" alt="Explore post">
      ${item.isVideo ? '<i class="fas fa-play explore-video-indicator"></i>' : ''}
      <div class="explore-item-overlay">
        <div class="explore-stat">
          <i class="fas fa-heart"></i>
          <span>${formatNumber(item.likes)}</span>
        </div>
        <div class="explore-stat">
          <i class="fas fa-comment"></i>
          <span>${formatNumber(item.comments)}</span>
        </div>
      </div>
    `;
    exploreGrid.appendChild(itemElement);
  });
}

// Function to render activity items
function renderActivity() {
  renderActivitySection('activity-today', activityData.today);
  renderActivitySection('activity-week', activityData.week);
  renderActivitySection('activity-earlier', activityData.earlier);
}

function renderActivitySection(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  items.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.className = 'activity-item';

    let actionElement = '';
    if (item.type === 'follow') {
      actionElement = `<button class="activity-follow-btn${item.isFollowing ? ' following' : ''}">${item.isFollowing ? 'Following' : 'Follow'}</button>`;
    } else if (item.postImage) {
      actionElement = `<img src="${item.postImage}" alt="Post" class="activity-post-thumb">`;
    }

    itemElement.innerHTML = `
      <img src="${item.avatar}" alt="${item.username}" class="activity-avatar">
      <div class="activity-content">
        <p class="activity-text">
          <span class="username">${item.username}</span> ${item.text} <span class="time">${item.time}</span>
        </p>
      </div>
      ${actionElement}
    `;
    container.appendChild(itemElement);
  });
}

// Function to render profile grid
function renderProfileGrid() {
  const profileGrid = document.getElementById('profile-grid');
  if (!profileGrid) return;

  profilePosts.forEach(post => {
    const itemElement = document.createElement('div');
    itemElement.className = 'profile-grid-item';
    itemElement.innerHTML = `
      <img src="${post.image}" alt="Profile post">
      <div class="profile-grid-overlay">
        <div class="profile-grid-stat">
          <i class="fas fa-heart"></i>
          <span>${formatNumber(post.likes)}</span>
        </div>
        <div class="profile-grid-stat">
          <i class="fas fa-comment"></i>
          <span>${formatNumber(post.comments)}</span>
        </div>
      </div>
    `;
    profileGrid.appendChild(itemElement);
  });
}

// Helper function to format numbers
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

// Navigation functionality
function addNavigationListeners() {
  const navIcons = document.querySelectorAll('.bottom-nav-icon');
  const pages = document.querySelectorAll('.page');

  navIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const targetPage = icon.dataset.page;

      // Update active nav icon
      navIcons.forEach(nav => nav.classList.remove('active'));
      icon.classList.add('active');

      // Update active page
      pages.forEach(page => page.classList.remove('active'));
      const targetPageElement = document.getElementById(`${targetPage}-page`);
      if (targetPageElement) {
        targetPageElement.classList.add('active');
      }

      // Scroll to top when switching pages
      window.scrollTo(0, 0);
    });
  });

  // Add follow button functionality in activity page
  document.querySelectorAll('.activity-follow-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('following')) {
        btn.classList.remove('following');
        btn.textContent = 'Follow';
      } else {
        btn.classList.add('following');
        btn.textContent = 'Following';
      }
    });
  });
}