
/* PASSWORD */

const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlock-btn");
const errorMessage = document.getElementById("error-message");

const lockScreen = document.getElementById("lock-screen");
const journalScreen = document.getElementById("journal-screen");

function unlockJournal() {
    const password = passwordInput.value.trim();

    if (password === "30112008") {
        errorMessage.textContent = "";

        lockScreen.classList.add("hidden");
        journalScreen.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {
        errorMessage.textContent =
            "Oops, that's not our little secret! Try again, Moonlight ♡";

        passwordInput.value = "";
        passwordInput.focus();
    }
}

unlockButton.addEventListener("click", unlockJournal);

passwordInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        unlockJournal();
    }
});


/* LETTERS */

const letters = {
    birthday: {
        title: "Happy Birthday, Moonlight ♡",
        text: `Happy birthday to my favourite person!

I hope this year brings you all the happiness,
love and beautiful moments you deserve.

Thank you for being my safe place,
my laughter and my favourite kind of chaos.

No matter how much life changes,
I hope we always find our way back to each other.

I love you endlessly, my Moonlight.

Forever your Cherrybug 🍒`
    },

    miss: {
        title: "When you miss me, Moonbeam 🌙",
        text: `Hey, my little Moonbeam.

If you're reading this because you miss me,
just remember that somewhere in this world
there is someone who is always cheering for you.

Think of our silly memories,
our endless conversations and all the times
we laughed over absolutely nothing.

Distance or busy days cannot change
how much you mean to me.

Sending you the biggest virtual hug.

Your Sunshine ☀️`
    },

    reasons: {
        title: "Things I love about you 🌷",
        text: `My sweet Cherrybug,

I love your laugh.
I love the way you make ordinary days special.
I love how you understand me.
I love our random conversations.
I love how we can be completely silly together.

But most of all,
I love that I get to call you my best friend.

You are one of my favourite people
in this entire world.

Love always,
Your Moonlight's bestie ♡`
    },

    sunshine: {
        title: "A little note for my Sunshine ☀️",
        text: `Hey, Sunshine!

On the days when everything feels a little too much,
I hope you remember how loved you are.

You deserve kindness,
beautiful opportunities
and all the little things that make you smile.

Never forget how special you are.

Keep shining, my little star.

I am always rooting for you. ♡`
    }
};

const letterButtons = document.querySelectorAll(".letter-btn");
const letterModal = document.getElementById("letter-modal");
const letterTitle = document.getElementById("letter-title");
const letterText = document.getElementById("letter-text");
const closeModalButton = document.getElementById("close-modal");

letterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const letterName = button.dataset.letter;
        const selectedLetter = letters[letterName];

        if (selectedLetter) {
            letterTitle.textContent = selectedLetter.title;
            letterText.textContent = selectedLetter.text;

            letterModal.classList.remove("hidden");
        }
    });
});

closeModalButton.addEventListener("click", function() {
    letterModal.classList.add("hidden");
});

letterModal.addEventListener("click", function(event) {
    if (event.target === letterModal) {
        letterModal.classList.add("hidden");
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        letterModal.classList.add("hidden");
    }
});


/* FINAL BIRTHDAY SURPRISE */

const surpriseButton = document.getElementById("surprise-btn");

surpriseButton.addEventListener("click", function() {
    letterTitle.textContent = "A little birthday wish for you 🎂";

    letterText.textContent =
        `Happy birthday, my Moonlight!

        I wish I could give you the biggest hug
        and tell you how much you mean to me.

        Thank you for being my best friend,
        my favourite person to laugh with
        and my forever Cherrybug.

        May your life always be filled with
        love, laughter, flowers and happiness.

        I love you more than words can say.

        Happy birthday, my little star! 🌙`;

    letterModal.classList.remove("hidden");
});
