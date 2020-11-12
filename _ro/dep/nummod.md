---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
---

A numeric modifier of a noun is any number phrase that serves to modify the meaning of the noun with a quantity.

When analysing dates, only the day is marked as a nummod for the month, whereas the year is an nmod for the month:

~~~ sdparse
3 august 1957
nummod(august, 3)
nmod(august, 1957)
~~~

Regarding the analysis of years, we show two ways in which they are analysed: (i) in strings such as 'În anul 2000 am absolvit facultatea.' (In year-the 2000 have-I graduated faculty-the.), the year is an nummod for 'anul'; (ii) in strings such as 'În 2000 am absolvit facultatea' (In 2000 have-I graduated faculty-the.), the year is an nmod for the verb.


~~~ sdparse
În anul 2000 am absolvit facultatea .
nummod(anul, 2000)
nmod(absolvit, anul)
~~~


~~~ sdparse
În 2000 am absolvit facultatea .
nmod(absolvit, 2000)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:34 CET 2020 -->
