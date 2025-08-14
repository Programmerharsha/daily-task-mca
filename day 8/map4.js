// 4. Map an array of timestamps to formatted time strings.
// Input:
// [1630488000000, 1631179200000, 1633708800000]
// Output:
// ['2:50:00 PM', '2:50:00 PM', '9:30:00 PM']

const timestamps = [1630488000000, 1631179200000, 1633708800000];
const formattedTimes = timestamps.map(ts => {
    const date = new Date(ts);
    return date.toLocaleTimeString('en-US');
});
console.log(formattedTimes);