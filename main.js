// Sample data for Instagram feed
const posts = [
  {
    id: 1,
    username: 'xXBrigateRed08Xx',
    userAvatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    location: 'via Caetani',
    mediaType: 'image',
    media: 'https://cinecitta.com/wp-content/uploads/2023/11/moro-1024x682.webp',
    caption: 'Ho appena rapito Aldo Moro a 100k like svelo la macchina #GiuseppeVerde #BrigateRosse', //
    likes: 696969,
    isLiked: false,
    comments: [
      { username: 'Comunista32', text: 'Viva il comunismo! 😍' },
      { username: 'ElBornoEgisiano', text: 'Bastardi terroristi!' }
    ],
    timePosted: '11 marzo 2025'
  },
  {
    id: 2,
    username: 'LebronJames',
    userAvatar: 'https://cdn.nba.com/teams/uploads/sites/1610612747/2024/03/james-40k-celebrate-240303-1000x1500-LAL_social_watermark_1080x1350-1.jpg?im=Resize=(640)',
    location: 'Los Angeles',
    mediaType: 'image',
    media: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQCyIC7HIaTATK1Vqu3FAV35mVhCF_IZ04zlmfAkzZydHEp8mdDobWQG4PnT07c6H6R2-nrqJNH26nehMSdTemQ1qXEiP4BMRfSai-JBLa9JS-lpZnx3PyyvJ7rqzHw73S03XjQQgqR1Q',
    caption: 'Working hard with Luka',
    likes: 100000000,
    isLiked: true,
    comments: [
      { username: 'KingJamesL0v3rrrr', text: 'Thank you daddy Lebronnnnnnnnnn my sunshineeeee' },
      { username: 'savannah_james', text: 'I want the LeHammer 👌' }
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
  { username: 'your_story', avatar: 'https://randomuser.me/api/portraits/lego/5.jpg', isYou: true },
  { username: 'john_doe', avatar: 'https://randomuser.me/api/portraits/men/43.jpg' },
  { username: 'travel_addict', avatar: 'https://randomuser.me/api/portraits/women/63.jpg' },
  { username: 'food_lover', avatar: 'https://randomuser.me/api/portraits/men/91.jpg' },
  { username: 'fitness_freak', avatar: 'https://randomuser.me/api/portraits/women/89.jpg' },
  { username: 'tech_geek', avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { username: 'art_enthusiast', avatar: 'https://randomuser.me/api/portraits/women/32.jpg' },
  { username: 'music_lover', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' }
];

// Function to render stories
function renderStories() {
  const storiesContainer = document.getElementById('stories-container');
  
  stories.forEach(story => {
    const storyElement = document.createElement('div');
    storyElement.className = 'story';
    storyElement.innerHTML = `
      <div class="story-avatar-container">
        <img src="${story.avatar}" alt="${story.username}" class="story-avatar">
      </div>
      <div class="story-username">${story.isYou ? 'Your Story' : story.username}</div>
    `;
    storiesContainer.appendChild(storyElement);
  });
}

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
        <i class="post-action download" src="${post.media}">Download</i>
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
    console.log("=== MEDIA URL", downloadButton.getAttribute('src'))
    downloadButton.addEventListener('click', () => downloadMedia(downloadButton));
  });
}

// Initialize the Instagram feed
document.addEventListener('DOMContentLoaded', () => {
  renderStories();
  renderPosts();
  addEventListeners();
});