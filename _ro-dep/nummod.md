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
