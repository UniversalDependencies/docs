---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

`compound` is one of the relations in UD for compounding. The bigest numeral is the head, the other numerals are attached as its modifiers.

~~~ sdparse
Սա առավելագույնը 5 հազար դրամ կարժենա։
Это будет стоить максимум 5 тысяч рублей . \n It will cost at-most 5 thousand drams .
nummod(դրամ, հազար)
nummod(rubles, thousand)
compound(հազար, 5-3)
compound(thousand, 5-14)
~~~

~~~ sdparse
Սա առավելագույնը հարյուր հինսունհինգ հազար դրամ կարժենա։
Это будет стоить пятьдесят пять тысяч рублей . \n It will cost hundred fifty five thousand drams .
nummod(դրամ, հազար)
nummod(rubles, thousand)
compound(հարյուր, հիսունհինգ)
compound(thousand, fifty five)
compound(հազար, հարյուր)
compound(thousand, thousand)
~~~
x
