function handleReviewSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("reviewerName").value.trim();
    const message = document.getElementById("reviewMessage").value.trim();

    if (name === "" || message === "") {
      alert("Please fill in both your name and review.");
      return;
    }

    alert("Thank you, " + name + "! Your review has been received.");
    e.target.reset();
  }
