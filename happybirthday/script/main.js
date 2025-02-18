// window.addEventListener('load', () => {
//     Swal.fire({
//         title: 'Shall we combine music to make this beautiful day even sweeter?',
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes',
//         cancelButtonText: 'No',
//     }).then((result) => {
//         if (result.isConfirmed) {
//             document.querySelector('.song').play(); // Play music on confirmation
//             animationTimeline(); // Run animation timeline
//         } else {
//             animationTimeline(); // Run animation timeline without music
//         }
//     });
// });
// // Animation timeline
// const animationTimeline = () => {
//     const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
//     const hbd = document.getElementsByClassName("wish-hbd")[0];

//     textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML.split("").join("</span><span>")}</span>`;
//     hbd.innerHTML = `<span>${hbd.innerHTML.split("").join("</span><span>")}</span>`;

//     const ideaTextTrans = { opacity: 0, y: -20, rotationX: 5, skewX: "15deg" };
//     const ideaTextTransLeave = { opacity: 0, y: 20, rotationY: 5, skewX: "-15deg" };

//     // timeline initialization
//     const tl = new TimelineMax();

//     tl.to(".container", 0.6, { visibility: "visible" })
//       .from(".one", 0.7, { opacity: 0, y: 10 })
//       .from(".two", 0.4, { opacity: 0, y: 10 })
//       .to(".one", 0.7, { opacity: 0, y: 10 }, "+=3.5")
//       .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")
//       .from(".three", 0.7, { opacity: 0, y: 10 })
//       .to(".three", 0.7, { opacity: 0, y: 10 }, "+=3")
//       .from(".four", 0.7, { scale: 0.2, opacity: 0 })
//       .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
//       .staggerTo(".hbd-chatbox span", 1.5, { visibility: "visible" }, 0.05)
//       .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" }, "+=4")
//       .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=1")
//       .from(".idea-1", 0.7, ideaTextTrans)
//       .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
//       .from(".idea-2", 0.7, ideaTextTrans)
//       .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
//       .from(".idea-3", 0.7, ideaTextTrans)
//       .to(".idea-3 strong", 0.5, {
//           scale: 1.2,
//           x: 10,
//           backgroundColor: "rgb(21, 161, 237)",
//           color: "#fff",
//       })
//       .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
//       .from(".idea-4", 0.7, ideaTextTrans)
//       .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
//       .from(".idea-5", 0.7, { rotationX: 15, rotationZ: -10, skewY: "-5deg", y: 50, z: 10, opacity: 0 }, "+=1.5")
//       .to(".idea-5 span", 0.7, { rotation: 90, x: 8 }, "+=1.4")
//       .to(".idea-5", 0.7, { scale: 0.2, opacity: 0 }, "+=2")
//       .staggerFrom(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: 15, ease: Expo.easeOut }, 0.2)
//       .staggerTo(".idea-6 span", 0.8, { scale: 3, opacity: 0, rotation: -15, ease: Expo.easeOut }, 0.2, "+=1.5")
//       .staggerFromTo(".baloons img", 2.5, { opacity: 0.9, y: 1400 }, { opacity: 1, y: -1000 }, 0.2)
//       .from(".profile-picture", 0.5, { scale: 3.5, opacity: 0, x: 25, y: -25, rotationZ: -45 }, "-=2")
//       .from(".hat", 0.5, { x: -100, y: 350, rotation: -180, opacity: 0 })
//       .staggerFrom(".wish-hbd span", 0.7, { opacity: 0, y: -50, rotation: 150, skewX: "30deg", ease: Elastic.easeOut.config(1, 0.5) }, 0.1)
//       .staggerFromTo(".wish-hbd span", 0.7, { scale: 1.4, rotationY: 150 }, { scale: 1, rotationY: 0, color: "#ff69b4", ease: Expo.easeOut }, 0.1, "party")
//       .from(".wish h5", 0.5, { opacity: 0, y: 10, skewX: "-15deg" }, "party")
//       .staggerTo(".eight svg", 1.5, { visibility: "visible", opacity: 0, scale: 80, repeat: 3, repeatDelay: 1.4 }, 0.3)
//       .to(".six", 0.5, { opacity: 0, y: 30, zIndex: "-1" })
//       .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
//       .to(".last-smile", 0.5, { rotation: 90 }, "+=1");

//     // Stop the music just before the 9th section animation starts
//     tl.add(() => {
//         // Stop background music
//         document.querySelector('.song').pause();
//     }, "+=0.5");

//     // Make the video appear in the 9th section (add opacity and visibility)
//     tl.to(".nine video", 1, { opacity: 1, visibility: "visible" }, "+=0.5")

//       // Auto-play the video (since it's muted, it should play automatically)
//       .add(() => {
//         const video = document.querySelector(".nine video");
//         video.play(); // Explicitly call play()
//       });

//     // Restart Animation on click
//     const replyBtn = document.getElementById("replay");
//     replyBtn.addEventListener("click", () => {
//         tl.restart();
//     });
// };
// Create floating hearts background
function createHeartBackground() {
    const heartBackground = document.querySelector('.heart-background');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart floating-heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.animationDelay = `${Math.random() * 3}s`;
        heartBackground.appendChild(heart);
    }
}

// Initialize animations
window.addEventListener('load', () => {
    // Create heart background
    createHeartBackground();

    // Ask for music permission using SweetAlert2
    Swal.fire({
        title: 'Shall we combine music to make this beautiful day even sweeter?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#ff4d82',
        cancelButtonColor: '#808080',
        confirmButtonText: 'Yes, play music!',
        cancelButtonText: 'No, thanks'
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
        }
        startAnimations();
    });
});

// Main animation timeline
const animationTimeline = () => {
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML.split("").join("</span><span>")}</span>`;
    hbd.innerHTML = `<span>${hbd.innerHTML.split("").join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    };

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    };

    const tl = new gsap.timeline();

    tl.to(".container", { visibility: "visible", duration: 0.1 })
      .from(".one", { opacity: 0, y: 10, duration: 0.7 })
      .from(".two", { opacity: 0, y: 10, duration: 0.4 })
      .to(".one", { opacity: 0, y: 10, duration: 0.7 }, "+=3.5")
      .to(".two", { opacity: 0, y: 10, duration: 0.7 }, "-=1")
      .from(".three", { opacity: 0, y: 10, duration: 0.7 })
      .to(".three", { opacity: 0, y: 10, duration: 0.7 }, "+=3")
      .from(".four", { scale: 0.2, opacity: 0, duration: 0.7 })
      .from(".fake-btn", { scale: 0.2, opacity: 0, duration: 0.3 })
      .staggerTo(".hbd-chatbox span", 0.5, { visibility: "visible" }, 0.05)
      .to(".fake-btn", { backgroundColor: "#ff6b95", duration: 0.1 }, "+=4")
      .to(".four", { scale: 0.2, opacity: 0, y: -150, duration: 0.5 }, "+=1")
      .from(".idea-1", { ...ideaTextTrans, duration: 0.7 })
      .to(".idea-1", { ...ideaTextTransLeave, duration: 0.7 }, "+=2.5")
      .from(".idea-2", { ...ideaTextTrans, duration: 0.7 })
      .to(".idea-2", { ...ideaTextTransLeave, duration: 0.7 }, "+=2.5")
      .from(".idea-3", { ...ideaTextTrans, duration: 0.7 })
      .to(".idea-3 strong", {
          scale: 1.2,
          x: 10,
          backgroundColor: "#ff4d82",
          color: "white",
          duration: 0.5
      })
      .to(".idea-3", { ...ideaTextTransLeave, duration: 0.7 }, "+=2.5")
      .from(".idea-4", { ...ideaTextTrans, duration: 0.7 })
      .to(".idea-4", { ...ideaTextTransLeave, duration: 0.7 }, "+=2.5")
      .from(".idea-5", {
          rotationX: 15,
          rotationZ: -10,
          skewY: "-5deg",
          y: 50,
          z: 10,
          opacity: 0,
          duration: 0.7
      }, "+=1.5")
      .to(".idea-5 span", { rotation: 90, x: 8, duration: 0.7 }, "+=1.4")
      .to(".idea-5", { scale: 0.2, opacity: 0, duration: 0.7 }, "+=2")
      .staggerFrom(".idea-6 span", 0.8, {
          scale: 3,
          opacity: 0,
          rotation: 15,
          ease: "back.out(1.7)",
      }, 0.2)
      .staggerTo(".idea-6 span", 0.8, {
          scale: 3,
          opacity: 0,
          rotation: -15,
          ease: "back.in(1.7)",
      }, 0.2, "+=1.5")
      .staggerFromTo(".baloons img", 2.5,
          { opacity: 0.9, y: 1400 },
          { opacity: 1, y: -1000 },
          0.2
      )
      .from(".profile-picture", {
          scale: 3.5,
          opacity: 0,
          x: 25,
          y: -25,
          rotationZ: -45,
          duration: 0.5
      }, "-=2")
      .staggerFrom(".wish-hbd span", 0.7, {
          opacity: 0,
          y: -50,
          rotation: 150,
          skewX: "30deg",
          ease: "elastic.out(1, 0.5)",
      }, 0.1)
      .staggerFromTo(".wish-hbd span", 0.7,
          { scale: 1.4, rotationY: 150 },
          {
              scale: 1,
              rotationY: 0,
              color: "#ff4d82",
              ease: "elastic.out(1, 0.5)",
          },
          0.1, "party"
      )
      .from(".wish h5", {
          opacity: 0,
          y: 10,
          skewX: "-15deg",
          duration: 0.5
      }, "party")
      .staggerTo(".eight svg", 1.5, {
          visibility: "visible",
          opacity: 0,
          scale: 80,
          repeat: 3,
          repeatDelay: 1.4
      }, 0.3)
      .to(".six", {
          opacity: 0,
          y: 30,
          zIndex: "-1",
          duration: 0.5
      })
      .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
      .to(".last-smile", { rotation: 90, duration: 0.5 }, "+=1")
      .to(".video", {
          opacity: 1,
          visibility: "visible",
          duration: 1
      }, "+=0.5")
      .add(() => {
          document.querySelector(".video").play();
      })
      // Stop the music when the nine section animation starts
      .add(() => {
          document.querySelector('.song').pause(); // Stop the music
      });

    // Restart Animation
    const replayBtn = document.getElementById("replay");
    if (replayBtn) {
        replayBtn.addEventListener("click", () => {
            tl.restart();
        });
    }
};

function startAnimations() {
    setTimeout(() => {
        animationTimeline();
    }, 1000);
}
