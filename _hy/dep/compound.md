---
layout: relation
title: 'compound'
shortdef: 'compound'
---

`compound` is one of the relations in UD for compounding. The bigest numeral is the head, the other numerals are attached as its modifiers.

~~~ sdparse
Սա առավելագույնը 5 հազար դրամ կարժենա։
Это будет стоить максимум 5 тысяч рублей . \n It will cost at-most 5 thousand rubles .
nummod(դրամ, հազար)
nummod:gov(rubles, thousand)
compound(հազար, 5-3)
compound(thousand, 5-14)
~~~

~~~ sdparse
Սա առավելագույնը հինսունհինգ հազար դրամ կարժենա։
Это будет стоить пятьдесят пять тысяч рублей . \n It will cost fifty five thousand rubles .
nummod:gov(рублей, тысяч)
nummod:gov(rubles, thousand)
compound(тысяч, пятьдесят)
compound(thousand, fifty)
compound(тысяч, пять)
compound(thousand, five)
~~~
x
