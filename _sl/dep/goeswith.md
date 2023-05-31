---
layout: relation
title: 'goeswith'
shortdef: 'goes with'
udver: '2'
---

The `goeswith` relation links together two or more **separated parts of a word** which would normally appear as one single unit. The head of the relation is always the first part of the word, while all the other parts are its dependents. 

~~~ sdparse
brez časna knjiga \n time less book
goeswith(brez,časna)
goeswith(time,less)
~~~

Note that the `goeswith` relation is used exclusively for linking separated parts of words which result from **technical errors or obvious typos**, as the word rarely appears in this form in other texts. For parts of words that often appear—without any difference in meaning—both as two separate words and together as one unit (such as *kadar koli, po navadi*), the fixed relation is used instead.
<!-- Interlanguage links updated Út 9. května 2023, 20:04:17 CEST -->
