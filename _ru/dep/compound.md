---
layout: relation
title: 'compound'
shortdef: 'compound'
---

`compound` is one of the relations in UD for compounding.
The rightmost numeral is the head, the other numerals are attached as its modifiers.

~~~ sdparse
Это будет стоить максимум 5 тысяч рублей . \n It will cost at-most 5 thousand rubles .
nummod:gov(рублей, тысяч)
nummod:gov(rubles, thousand)
compound(тысяч, 5-5)
compound(thousand, 5-14)
~~~

~~~ sdparse
Это будет стоить пятьдесят пять тысяч рублей . \n It will cost fifty five thousand rubles .
nummod:gov(рублей, тысяч)
nummod:gov(rubles, thousand)
compound(тысяч, пятьдесят)
compound(thousand, fifty)
compound(тысяч, пять)
compound(thousand, five)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:18 CET 2020 -->
