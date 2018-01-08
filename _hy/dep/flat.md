---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

`flat` is one of the relations for compounding in UD (together with [compound]() and [fixed]()).

In Armenian it is used for proper nouns constituted of multiple nominal elements. For phrasal or clausal names the usual relations are used (e.g. _Երևանի պետական համալսարան_).

The inflected name is always the head and the other name(s) are attached to it, the inflected name is usually the last name.

~~~ sdparse
Նախագահ Լևոն Տեր - Պետրոսյանը երեկ այցելել է Երևանի պետական համալսարան ։ \n President Levon Ter - Petrosyan yesterday visited Yerevan State University .
flat(Պետրոսյանը, Լևոն)
flat(Petrosyan, Levon)
flat(Պետրոսյանը, Տեր)
flat(Petrosyan, Ter)
nmod(Պետրոսյանը, Նախագահ)
nmod(Petrosyan, President)
amod(համալսարան, պետական)
amod(University, State)
nmod(համալսարան, Երևանի)
nmod(University, Yerevan)
~~~

~~~ sdparse
Խոսրով Գ Կոտակը \n Khosrov III the Small
flat(Կոտակը, Խոսրով)
flat(Small, Khosrov)
flat(Կոտակը, Գ)
flat(Small, III)
~~~

~~~ sdparse
Նյու Յորքը \n New York
flat(Յորքը, Նյու)
flat(York, New)
~~~

~~~ sdparse
Վանա լիճը \n Lake Van
flat(լիճը, Վանա)
flat(Lake, Van)
~~~

The `flat` relation can also be used for other numerals and other numerical expressions that lack phrasal structure. The most left numeral is the head, the other numerals are attached as its modifiers.

~~~ sdparse
Սա առավելագույնը հինգ հազար դրամ կարժենա ։ \n It will cost at-most 5 thousand drams .
nummod(դրամ, հինգ)
nummod(drams, 5)
flat(հինգ, հազար-4)
flat(5, thousand-14)
~~~

~~~ sdparse
Սա առավելագույնը հարյուր հիսունհինգ հազար դրամ կարժենա ։ \n It will cost at-most hundred fifty-five thousand drams .
nummod(դրամ, հարյուր)
nummod(drams, hundred)
flat(հարյուր, հիսունհինգ-4)
flat(hundred, fifty-five)
flat(հիսունհինգ, հազար-5)
flat(fifty-five, thousand)
~~~
