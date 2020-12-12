---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation is one of three relations for multiword expressions (MWEs) (the other two being fixed and flat). It is used for  

- any kind of X<sup>0</sup> compounding: noun compounds (e.g., *стресс менеджмент* “stress management", *Темпл бар* “Tample bar"), but also 
adjective compounds (e.g., *бэд блоки* “bad blocks", *мини колонка* “mini speaker", *Гранд отель* “Grand hotel") and some other types (*+ 1*, *№ 1*).
Compounds are not typical for the literary Russian language but are widely used in electronic communication. Note that some clitics can divide two parts of the composite word that would otherwise be written as one word: in this case, the first part is attached as `compound`.

~~~ sdparse
на минус втором этаже \n on-the minus second floor  
compound(втором, минус)
compound(second, minus)
~~~

~~~ sdparse
в бизнес же центре \n in the business , well , center
compound(втором, минус)
compound(second, minus)
~~~

In Russian `compound` is regulary used in compound numerals. The rightmost numeral is the head, the other numerals are attached as its modifiers.
Note that in Russian the words *тысяча* “thousand”, *миллион* “million”, *миллиард* “billion”, etc. change case depending the numeral of a smaller number to their left, so this relation cannot be considered compound (the numeral of a smaller number is attached to *тысяча* etc. as <a href="nummod.html">nummod</a>).

~~~ sdparse
Это будет стоить максимум 5 тысяч 500 рублей . \n It will cost at-most 5 thousand 500 rubles .
nummod:gov(рублей, тысяч)
nummod:gov(rubles, thousand)
nummod:gov(тысяч, 5-5)
nummod:gov(thousand, 5-15)
compound(500, тысяч)
compound(500, thousand)
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

~~~ sdparse
в двадцать первом веке . \n in-the twenty first century .
compound(первом, двадцать)
compound(first, twenty)
~~~

### Note

The `compound` relation (nor any subtype thereof) is not used in the Russian serial verb constructions such as *сижу смотрю* “I'm just sitting here watching”, *сходи купи (мороженое)* “go get (an ice cream)”. The second verb is attached to the first one using the `flat` relation.


<!-- Interlanguage links updated Čt lis 12 09:43:18 CET 2020 -->
