function chekWhether(year) {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log('yes')
    } else {
        console.log('no')
    }
}

chekWhether(1984); // Output: yes
chekWhether(2003); // Output: no
chekWhether(4);    // Output: yes