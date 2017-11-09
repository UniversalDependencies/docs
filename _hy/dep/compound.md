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
nummod(դրամ, հազար)
nummod(rubles, thousand)
compound(հարյուր, հիսունհինգ-4)
compound(thousand, fifty-five-4)
compound(հազար, հարյուր-3)
compound(thousand, thousand-16)
~~~
x
