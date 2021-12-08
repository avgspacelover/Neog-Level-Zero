var dateOfBirth = document.querySelector("#birth-date")
var checkPalindromeBtn = document.querySelector("#check-palindrome")
var outputDiv = document.querySelector("#output")

function reverseList(str) {
    var charList = str.split('')
    var reversedList = charList.reverse()
    var checkList = reversedList.join('')
    return (checkList)
}

function checkPalindrome(str) {
    var reversedStr = reverseList(str)
    return str === reversedStr
}


function convertDateToString(date) {
    var dateStr = {
        day: '',
        month: '',
        year: ''
    }

    if (date.day < 10) {
        dateStr.day = "0" + date.day
    } else {
        dateStr.day = date.day.toString()
    }

    if (date.month < 10) {
        dateStr.month = "0" + date.month
    } else {
        dateStr.month = date.month.toString()
    }

    dateStr.year = date.year.toString()

    return dateStr
}

function getAllDateFormats(date) {
    var dateStr = convertDateToString(date)

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2)
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2)
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day


    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]

}

function checkPalindromeForAllDateFormats(date) {
    var listOfPalindromes = getAllDateFormats(date)
    var palindrome = false

    for (var i = 0; i < listOfPalindromes.length; i++) {
        if (checkPalindrome(listOfPalindromes[i])) {
            palindrome = true
            break
        }
    }

    return palindrome
}


function isLeapYear(year) {

    if (year % 400 === 0)
        return true

    if (year % 100 === 0)
        return false

    if (year % 4 === 0)
        return true

    return false
}

function getNextDate(date) {
    var day = date.day + 1
    var month = date.month
    var year = date.year

    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (month === 2) {
        if (isLeapYear(year)){
            if (day>29){
                day = 1;
                month = month+1
            }
        } else {
            if (day>28){
                day = 1;
                month = month+1;
            }
        }

    } else {
        if (day > daysInMonth[month - 1]) {
            day = 1;
            month = month + 1;
        }
    }

    if (month > 12) {
        month = 1
        year = year + 1;
    }

    return {
        day: day,
        month: month,
        year: year
    }

}


function getNextPalindromeDate (date){
    var ctr=0
    var nextDate = getNextDate(date)
       

    while(1){
        ctr++
        var resultList = checkPalindromeForAllDateFormats(nextDate)
        if (resultList){
            break;
        }
        nextDate = getNextDate(nextDate)
    }

    return [ctr, nextDate]
}

function clickHandler(e){
    var bdayStr = dateOfBirth.value 

    if (bdayStr !== ''){
        var listOfDate = bdayStr.split('-')
        var date = {
            day: Number(listOfDate[2]),
            month: Number(listOfDate[1]),
            year: Number(listOfDate[0])
        }
        
        
        var isPalindrome = checkPalindromeForAllDateFormats(date)

        if (isPalindrome){
            outputDiv.innerText = "Yayy! This is a palindrome!!"
        } else {
            var [ctr, nextDate] = getNextPalindromeDate(date)
            outputDiv.innerText = 'The next palindrome date is '+ nextDate.day+"-"+nextDate.month+"-"+nextDate.year + " and you missed it by " + ctr + " days"
        }
    }
}

checkPalindromeBtn.addEventListener('click', clickHandler)