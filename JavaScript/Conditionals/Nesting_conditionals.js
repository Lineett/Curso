
const password = prompt("Please enter a new password");

if (password.length >= 6) {
     console.log("LONG ENOUGH PASSWORD")
} else {
     console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}

if (password.indexOf('') == -1) {
     console.log("Valid password")
} else {
    console.log("Password cannot contain space")
}