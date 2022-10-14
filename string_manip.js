function strip(str, chars) {
    let start = 0;
    let end = str.length;

    // Get the index of where we should start the substring
    while(start < end && chars.indexOf(str[start]) >= 0) {
        start++;
    }
    
    // Get the index of where we should stop the substring
    while(end > start && chars.indexOf(str[end - 1]) >= 0) {
        end--;
    }

    // We don't need to call the substring method if it's not going to do anything
    return (start > 0 || end < str.length) ? str.substring(start, end) : str;
}

// wtf is this one liner
// Anyways this assumes that all the rows have the same length as row[0]
let zip = rows => rows[0].map((_, column) => rows.map(row => row[column]));