/*
  DevoteeConnect Landing Page Script
  ----------------------------------
  This lightweight script powers the interactive Sadhana Rhythm Finder on the landing page. When the visitor
  fills out the quiz and submits the form, the script determines a recommended devotional rhythm based on
  their answers and displays the result. The result text is intentionally simple and encouraging, as the
  fully personalised rhythm experience will be delivered inside the DevoteeConnect app. The script does not
  send any network requests or collect data; it merely updates the DOM. For privacy reasons no user data
  is stored or transmitted.
*/

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rhythmForm");
  const resultContainer = document.getElementById("result");
  const resultText = document.getElementById("resultText");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Get user inputs
    const rounds = form.elements["rounds"].value;
    const time = form.elements["time"].value;
    const ekadashi = form.elements["ekadashi"].value;
    const reminder = form.elements["reminder"].value;
    const experience = form.elements["experience"].value;

    // Determine a simple recommended rhythm based on answers
    let recommendation = "";

    if (experience === "beginner") {
      recommendation += "Start with consistency over quantity. Begin with a gentle " + (rounds === "less_than_4" ? "1–2" : rounds === "4_to_8" ? "4" : "8") + " round practice in the " + time + ", and build a habit.";
    } else if (experience === "steady") {
      recommendation += "Protect your practice with steady rounds (" + (rounds === "more_than_16" ? "16+" : rounds.replace(/_/g, "–")) + ") during the " + time + ". Use " + (reminder === "accountability" ? "community accountability" : "gentle reminders") + " to stay focused.";
    } else {
      // advanced
      recommendation += "Deepen your sadhana by maintaining your current rounds (" + (rounds === "more_than_16" ? "16+" : rounds.replace(/_/g, "–")) + ") and adding study or kirtan sessions in the " + (time === "morning" ? "evening" : "morning") + ".";
    }

    if (ekadashi === "yes") {
      recommendation += " Remember to observe Ekadashi. " + (reminder === "none" ? "Set an internal reminder" : "Enable notifications") + " for fasting and paran times.";
    }
    recommendation += " We'll save your rhythm once you join the beta.";

    // Display result
    resultText.textContent = recommendation;
    resultContainer.hidden = false;
    resultContainer.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});