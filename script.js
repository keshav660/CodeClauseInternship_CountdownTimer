let countdown
function startTimer() {
  clearInterval(countdown)
  const input = document.getElementById("timeInput").value
  const target = new Date(input).getTime()
  countdown = setInterval(() => {
    const now = new Date().getTime()
    const distance = target - now
    if (distance <= 0) {
  clearInterval(countdown)
  document.getElementById("timer").innerText = "00:00:00:00"
  document.getElementById("alarmSound").play()
  document.getElementById("celebration").style.display = "flex"
  alert("🎉 Countdown Finished! Now Celebrate! 🎊")
}

    if (distance <= 0) {
      clearInterval(countdown)
      document.getElementById("timer").innerText = "00:00:00:00"
      document.getElementById("alarmSound").play()
    } else {
      const days = Math.floor(distance / (1000*60*60*24))
      const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60))
      const minutes = Math.floor((distance % (1000*60*60)) / (1000*60))
      const seconds = Math.floor((distance % (1000*60)) / 1000)
      document.getElementById("timer").innerText =
        (days<10?"0"+days:days)+":"+
        (hours<10?"0"+hours:hours)+":"+
        (minutes<10?"0"+minutes:minutes)+":"+
        (seconds<10?"0"+seconds:seconds)
    }
  },1000)
}
