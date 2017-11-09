---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

`compound` is one of the relations in UD for compounding. The most left numeral is the head, the other numerals are attached as its modifiers.

~~~ sdparse
Սա առավելագույնը 5 հազար դրամ կարժենա ։ \n It will cost at-most 5 thousand drams .
nummod(դրամ, հինգ)
nummod(drams, 5)
compound(հինգ, հազար-4)
compound(5, thousand-14)
~~~

~~~ sdparse
Սա առավելագույնը հարյուր հիսունհինգ հազար դրամ կարժենա ։ \n It will cost at-most hundred fifty-five thousand drams .
nummod(դրամ, հարյուր)
nummod(drams, hundred)
compound(հարյուր, հիսունհինգ-4)
compound(hundred, fifty-five)
compound(հիսունհինգ, հազար-5)
compound(fifty-five, thousand)
~~~
