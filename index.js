const topicList = [
  {
    topic:'影像剪輯AI',
    sub: [
      {
        detail: '咩係影像剪輯AI？',
        link: 'public/videos/A1.mp4'
      },
      {
        detail: 'AI剪片工具有咩用途？',
        link: 'public/videos/A2.mp4'
      },
      {
        detail: '市面上有咩影像剪輯AI工具？',
        link: 'public/videos/A3.mp4'
      },
    ]
  },
  {
    topic:'文案寫作AI',
    sub: [
      {
        detail: '咩係文案寫作AI？',
        link: 'public/videos/B1.mp4'
      },
      {
        detail: '市面上有咩文案寫作AI？',
        link: 'public/videos/B2.mp4'
      },
      {
        detail: '文案寫作AI可以做到D咩？',
        link: 'public/videos/B3.mp4'
      },
      {
        detail: '有冇D文案寫作AI使用tips？',
        link: 'public/videos/B4.mp4'
      },

    ]
  },
  {
    topic:'音效處理AI',
    sub: [
      {
        detail: '咩係音效處理AI？',
        link: 'public/videos/C1.mp4'
      },
      {
        detail: '市面上有咩音效處理AI？',
        link: 'public/videos/C2.mp4'
      },
      {
        detail: 'AI 可唔可以做到聲音合成？',
        link: 'public/videos/C3.mp4'
      },
    ]
  },
  {
    topic:'視覺設計AI',
    sub: [
      {
        detail: '咩係視覺設計AI？',
        link: 'public/videos/D1.mp4'
      },
      {
        detail: '市面上有咩視覺設計AI？',
        link: 'public/videos/D2.mp4'
      },
      {
        detail: '邊個視覺設計AI可以免費試用？',
        link: 'public/videos/D3.mp4'
      },

    ]
  },
  {
    topic:'數據分析AI',
    sub: [
      {
        detail: '咩係數據分析AI？',
        link: 'public/videos/E1.mp4'
      },
      {
        detail: '市面上有咩數據分析AI？',
        link: 'public/videos/E2.mp4'
      },
      {
        detail: '有冇咩AI係可以工作上使用？',
        link: 'public/videos/E3.mp4'
      },
    ]
  },
  {
    topic:'工作類AI',
    sub: [
      {
        detail: '咩係市場營銷AI？',
        link: 'public/videos/F1.mp4'
      },
      {
        detail: '咩係客服系統AI？',
        link: 'public/videos/F2.mp4'
      },
      {
        detail: '咩係人力資源管理AI？',
        link: 'public/videos/F3.mp4'
      },
      {
        detail: '咩係程式開發AI？',
        link: 'public/videos/F4.mp4'
      },
    ]
  },
  {
    topic:'IPHONE',
    sub: [
      {
        detail: 'IPHONE video 1',
        link: 'public/videos/F1.mp4'
      },
      {
        detail: 'IPHONE video 2',
        link: 'public/videos/F2.mp4'
      },
      {
        detail: 'IPHONE video 3',
        link: 'public/videos/F3.mp4'
      },
      {
        detail: 'IPHONE video 4',
        link: 'public/videos/F4.mp4'
      },
      {
        detail: 'IPHONE video 5',
        link: 'public/videos/F4.mp4'
      },
    ]
  },
]

let currentTopic = 0
let currentDetail = 0

const updateTopicText = () => {
  document.getElementById('topic_text').innerHTML = topicList[currentTopic].topic;
}

const changeDetailByTopic = () => {
  document.getElementById('detail_text').innerHTML = topicList[currentTopic].sub[0].detail;
  currentDetail = 0;
}

const updateDetailText = () => {
  document.getElementById('detail_text').innerHTML = topicList[currentTopic].sub[currentDetail].detail;
}

const onTopicChange = (direction) => {
  if (currentTopic === 6 && direction === 1) {
    currentTopic = 0
  } else if (currentTopic === 0 && direction === -1) {
    currentTopic = 6
  } else {
    currentTopic = currentTopic + direction
  }
  updateTopicText();
  changeDetailByTopic();
}

const onDetailChange = (direction) => {
  const subLength = topicList[currentTopic].sub.length - 1;
  if (currentDetail === subLength && direction === 1) {
    currentDetail = 0
  }else if (currentDetail === 0 && direction === -1) {
    currentDetail = subLength
  } else {
    currentDetail = currentDetail + direction
  }
  updateDetailText();
}

const showVideoModal = () => {
  document.getElementById('video_modal').style.display = 'block';
  let video = document.querySelector('#short_video')
  let videoSource = document.querySelector('#short_video > source')
  videoSource.setAttribute('src', topicList[currentTopic].sub[currentDetail].link);
  video.load();
  video.play();
}

window.onload = () => {
  updateTopicText();
  changeDetailByTopic();
};

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toNextTopic').addEventListener('click', () => onTopicChange(1))
  document.getElementById('toLastTopic').addEventListener('click', () => onTopicChange(-1))
  document.getElementById('toNextDetail').addEventListener('click', () => onDetailChange(1))
  document.getElementById('toLastDetail').addEventListener('click', () => onDetailChange(-1))
  document.getElementById('play_btn').addEventListener('click', () => showVideoModal())
})

