/* 
1185. Day of the Week
https://leetcode.com/problems/day-of-the-week/

Given a date, return the corresponding day of the week for that date.

The input is given as three integers representing the day, month and year respectively.

Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.
 
Constraints:
The given dates are valid dates between the years 1971 and 2100.
*/


/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    const dateStr = `${month}-${day}-${year}`;
    const date = new Date(Date.parse(dateStr));
    
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]
    
    const dayOfWeek = days[date.getDay()];
    
    return dayOfWeek;
};