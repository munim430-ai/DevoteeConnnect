/* DevoteeConnect interactions and GSAP motion */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rhythmForm");
  const resultContainer = document.getElementById("result");
  const resultText = document.getElementById("resultText");

  const initGsap = () => {
    if (!window.gsap) return;

    const gsap = window.gsap;

    if (window.ScrollTrigger) {
      gsap.registerPlugin(window.ScrollTrigger);
    }

    gsap.set([".hero-copy", ".hero-stage"], { autoAlpha: 0, y: 40 });
    gsap.to(".hero-copy", { autoAlpha: 1, y: 0, duration: 1.1, ease: "power3.out" });
    gsap.to(".hero-stage", { autoAlpha: 1, y: 0, duration: 1.2, delay: 0.18, ease: "power3.out" });

    gsap.from(".hero-pills span", {
      autoAlpha: 0,
      y: 18,
      duration: 0.7,
      delay: 0.55,
      stagger: 0.08,
      ease: "power3.out"
    });

    gsap.to(".krishna-card", {
      y: -18,
      rotateY: 7,
      rotateX: -3,
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".peacock-feather", {
      rotate: "+=7",
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.25
    });

    gsap.to(".flute", {
      x: 8,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(".wallpaper-mark", {
      y: -24,
      x: 12,
      duration: 8,
      repeat: -1,
      yoyo: true,
      stagger: 0.7,
      ease: "sine.inOut"
    });

    if (window.ScrollTrigger) {
      gsap.utils.toArray(".reveal").forEach((section) => {
        gsap.from(section, {
          autoAlpha: 0,
          y: 54,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%"
          }
        });
      });

      gsap.utils.toArray(".stagger-group").forEach((group) => {
        gsap.from(group.children, {
          autoAlpha: 0,
          y: 32,
          rotateX: -10,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 84%"
          }
        });
      });

      gsap.to(".japa-progress", {
        background: "conic-gradient(#d99a22 0% 72%, rgba(217,154,34,0.16) 72% 100%)",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".japa-circle",
          start: "top 78%"
        }
      });

      gsap.to(".rounds-label", {
        textContent: 11,
        duration: 1.5,
        ease: "power2.out",
        snap: { textContent: 1 },
        onUpdate: function () {
          const value = Math.round(this.targets()[0].textContent || 0);
          this.targets()[0].textContent = `${value} / 16`;
        },
        scrollTrigger: {
          trigger: ".japa-circle",
          start: "top 78%"
        }
      });
    }
  };

  initGsap();

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 16;
      const rotateX = ((y / rect.height) - 0.5) * -14;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  document.querySelectorAll(".card, .feature, .audience-card, .premium-panel").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      if (window.gsap) {
        window.gsap.to(item, { y: -8, scale: 1.015, duration: 0.25, ease: "power2.out" });
      }
    });

    item.addEventListener("mouseleave", () => {
      if (window.gsap) {
        window.gsap.to(item, { y: 0, scale: 1, duration: 0.25, ease: "power2.out" });
      }
    });
  });

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const rounds = form.elements["rounds"].value;
    const time = form.elements["time"].value;
    const ekadashi = form.elements["ekadashi"].value;
    const reminder = form.elements["reminder"].value;
    const experience = form.elements["experience"].value;

    let recommendation = "";

    if (experience === "beginner") {
      recommendation += "Start with consistency over quantity. Begin with a gentle " + (rounds === "less_than_4" ? "1–2" : rounds === "4_to_8" ? "4" : "8") + " round practice in the " + time + ", and build a steady habit.";
    } else if (experience === "steady") {
      recommendation += "Protect your practice with steady rounds (" + (rounds === "more_than_16" ? "16+" : rounds.replace(/_/g, "–")) + ") during the " + time + ". Use " + (reminder === "accountability" ? "community accountability" : "gentle reminders") + " to stay focused.";
    } else {
      recommendation += "Deepen your sadhana by maintaining your current rounds (" + (rounds === "more_than_16" ? "16+" : rounds.replace(/_/g, "–")) + ") and adding study or kirtan sessions in the " + (time === "morning" ? "evening" : "morning") + ".";
    }

    if (ekadashi === "yes") {
      recommendation += " Remember to observe Ekadashi. " + (reminder === "none" ? "Set an internal reminder" : "Enable notifications") + " for fasting and paran times.";
    }

    recommendation += " We'll save your rhythm once you join the beta.";

    resultText.textContent = recommendation;
    resultContainer.hidden = false;

    if (window.gsap) {
      window.gsap.fromTo(resultContainer, { autoAlpha: 0, y: 28, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, ease: "power3.out" });
    }

    resultContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
