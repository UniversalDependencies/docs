---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

  
The `flat` relation is one of the three relations for MWE in UD (together with [compound]() and [fixed]()). In Armenian it is used for proper nouns constituted of multiple nominal elements. For phrasal or clausal names the usual relations are used (e.g. _Երևանի պետական համալսարան, Կասպից ծով, Խաղաղ օվկիանոս, Ալանաց դշխուհի_). In general, names are annotated in a `flat`, head-initial structure, in which all words in the name modify the head using the `flat` label.

~~~ sdparse
Նախագահ Լևոն Տեր - Պետրոսյանը երեկ այցելել է Երևանի պետական համալսարան ։ \n President Levon Ter - Petrosyan yesterday visited Yerevan State University .
flat(Լևոն, Պետրոսյանը)
flat(Levon, Petrosyan)
flat(Լևոն, Տեր)
flat(Levon, Ter)
nmod(Լևոն, Նախագահ)
nmod(Levon, President)
amod(համալսարան, պետական)
amod(University, State)
nmod(համալսարան, Երևանի)
nmod(University, Yerevan)
~~~

~~~ sdparse
Խոսրով Գ Կոտակ \n Khosrov III the-Small
flat(Խոսրով, Կոտակ)
flat(Khosrov, the-Small)
flat(Խոսրով, Գ)
flat(Khosrov, III)
~~~

~~~ sdparse
Նյու Յորք \n New York
flat(Նյու, Յորք)
flat(New, York)
~~~

~~~ sdparse
Վանա լիճ \n Lake Van
flat(Վանա, լիճ)
flat(Van, Lake)
~~~

The `flat` relation is also used for numerals and numerical expressions that lack phrasal structure. The most left numeral is the head, the other numerals are attached as its modifiers.

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

Note, that for fraction or range [numbers](NumType) the [compound]() relation is used.
