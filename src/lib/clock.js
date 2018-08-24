
const oneSecond = () => 1000 
const getCurrentTime = () => new Date() 
const clear = () => console.clear() 
const log = message => console.log(message)


function getClockTime() {

    var date = new Date();   var time = "";     // Serialize clock time   


var time = {hours: date.getHours(),     minutes: date.getMinutes(),     seconds: date.getSeconds(),     ampm: "AM"   }     // Convert to civilian time
   if (time.hours == 12) {     time.ampm = "PM";    } else if (time.hours > 12) {     time.ampm = "PM";     time.hours -= 12;   }   // Prepend a 0 on the hours to make double digits 
   if (time.hours < 10) {     time.hours = "0" + time.hours;   }   // prepend a 0 on the minutes to make double digits
    if (time.minutes < 10) {
    time.minutes = "0" + time.minutes;   } 
      // prepend a 0 on the seconds to make double digits
        if (time.seconds < 10) {     
         time.seconds = "0" + time.seconds;   
        }   // Format the clock time as a string "hh:mm:ss tt"
            return time.hours + ":" + time.minutes + ":"+ time.seconds + " " + time.ampm;
        }

    

const serializeClockTime = (date = new Date()) => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
}) 
const civilianHours = clockTime =>({
    ...clockTime,
    hours: (clockTime.hours > 12) ? clockTime.hours - 12 : clockTime.hours
})
const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: (clockTime.hours >= 12) ? "PM" : "AM"
})


const display = target => time => target(time)
const formatClock = format => time => format.replace("hh", time.hours).replace("mm", time.minutes).replace("ss", time.seconds).replace("tt", time.ampm) 
const prependZero = key => clockTime =>({ 
     ...clockTime,
     [key]: (clockTime[key] < 10) ? "0" + clockTime[key] :   clockTime[key]
})

const convertToCivilianTime = clockTime => 
    compose( appendAMPM,
     civilianHours,
    )(clockTime)

const doubleDigits = civilianTime => 
    compose(         
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
)(civilianTime)

const startTicking = () =>
     setInterval(
     compose( 
         clear,
         getCurrentTime, 
         serializeClockTime,
         convertToCivilianTime,
         doubleDigits,
         formatClock("hh:mm:ss tt"),
         display(log)
     ),
     oneSecond()) 
const compose = (...fns) => (arg) => 
    fns.reduce(
        (composed, f) => f(composed),
    arg
)

exports.getClockTime = serializeClockTime;

