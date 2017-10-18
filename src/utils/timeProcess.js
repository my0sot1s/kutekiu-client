/**
 * 
 * @param {date} date 
 */
export const timeAgo = date => {
    var now = new Date().getTime()
        , countDownDate = new Date(date).getTime()

    var distance = now - countDownDate;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (days > 0) return days + 'd'
    if (hours > 0) return hours + "h " + minutes + "m"
    if (minutes > 0) return minutes + "min"
    if (seconds > 0) return seconds + "sec"
}