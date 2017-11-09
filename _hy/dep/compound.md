---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

`compound` is one of the relations in UD for compounding. The most left numeral is the head, the other numerals are attached as its modifiers.

~~~ sdparse
Սա առավելագույնը 5 հազար դրամ կարժենա ։ \n It will cost at-most 5 thousand drams .
nummod(դրամ, 5)
nummod(drams, 5)
compound(5, հազար-3)
compound(5, thousand-13)
~~~

~~~ sdparse
Սա առավելագույնը հարյուր հիսունհինգ հազար դրամ կարժենա ։ \n It will cost hundred fifty-five thousand drams .
nummod(դրամ, հարյուր)
nummod(drams, hundred)
compound(հարյուր, հիսունհինգ-3)
compound(hundred, fifty-five-3)
compound(հիսունհինգ, հազար-4)
compound(fifty-five, thousand-16)
~~~
x
