---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

The `flat` relation is one of the three relations for MWE in UD. It is used for exocentric (headless) semi-fixed MWEs like names and dates. It contrasts with [fixed](), which applies to completely fixed grammaticized (function word-like) MWEs, and with [compound](), which applies to endocentric (headed) MWEs.

Flat MWEs are annotated with a flat structure, where all subsequent words in the expression are attached to the first one using the `flat` label. The assumption is that these expressions do not have any internal syntactic structure and that the structural annotation is in principle arbitrary.

## Names

In Armenian the `flat` relation is used to join the first (or middle) and the last name of a person. In general, names are annotated in a `flat`, head-initial structure, in which all words in the name modify the head using the `flat` label.

For phrasal or clausal names the usual relations are used (e.g. multi-word names of places, organizations etc. _Երևանի պետական համալսարան, Պարսից ծով, Խաղաղ օվկիանոս, Ալանաց դշխուհի_).

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
nmod:poss(համալսարան, Երևանի)
nmod:poss(University, Yerevan)
~~~

~~~ sdparse
Նյու Յորք \n New York
flat(Նյու, Յորք)
flat(New, York)
~~~

~~~ sdparse
Վանա/ADJ[NameType=Geo|Poss=Yes] լիճ/NOUN \n Lake Van
amod(լիճ, Վանա)
amod(Lake, Van)
~~~

~~~ sdparse
Պարսից/ADJ[Poss=Yes] ծոց/NOUN \n Persian Gulf
amod(ծոց, Պարսից)
amod(Gulf, Persian)
~~~

Note, that the titles/honorifics, when immediately following the first noun, are analyzed using the `flat` relation. They are treated as a part of the names: (see also [nmod]() and [apposition](appos)): 

~~~ sdparse
Խոսրով Գ Կոտակ \n Khosrov III the-Small
flat(Խոսրով, Կոտակ)
flat(Khosrov, the-Small)
flat(Խոսրով, Գ)
flat(Khosrov, III)
~~~

~~~ sdparse
Արշակ թագավորը \n King Arshak 
flat(Արշակ, թագավորը)
flat(King, Arshak)
~~~

~~~ sdparse
Զարեհ էֆենդին \n Zareh Efendi 
flat(Զարեհ, էֆենդին)
flat(Zareh, Efendi)
~~~

~~~ sdparse
Անդրանիկ փաշան \n Andranik Pasha
flat(Անդրանիկ, փաշան)
flat(Andranik, Pasha)
~~~

~~~ sdparse
Մարկոս աղան \n Markos Agha
flat(Մարկոս, աղան)
flat(Markos, Agha)
~~~

## Dates and Complex Numerals

The `flat` relation is also used for numerals and numerical expressions that lack phrasal structure. The most left numeral is the head, the other numerals are attached as its modifiers. Note, that for fraction or range [numbers](NumType) the [compound]() relation is used.

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
flat(հարյուր, հազար-5)
flat(hundred, thousand)
~~~

Date expressions which have a very clear syntactic structure, as in _the 21th of September of 1991 year_, and should be annotated with regular dependency relations. In other cases, they have a flat structure with no clearly discernible head, as in _18 December 2015_, in which case the `flat` relation should be used. 

~~~ sdparse
1991 թ . սեպտեմբերի 21-ին \n on-the-21th of-September of-year 1991
nmod:poss(21-ին, սեպտեմբերի)
nmod:poss(սեպտեմբերի, թ)
punct(թ, .)
nummod(թ, 1991-1)
nmod:poss(on-the-21th, of-September)
nmod:poss(of-September, of-year)
nummod(of-year, 1991-10)
~~~

~~~ sdparse
18 Դեկտեմբեր 2015 \n 18 December 2015
flat(18-1, Դեկտեմբեր)
flat(18-1, 2015-3)
flat(18-5, December)
flat(18-5, 2015-7)
~~~

~~~ sdparse
Տարածաշրջան , Ուրբաթ 18 Դեկտեմբեր 2015 \n Region , Friday 18 December 2015
obl(Տարածաշրջան, Ուրբաթ)
appos(Ուրբաթ, 18-4)
flat(18-4, Դեկտեմբեր)
flat(18-4, 2015-6)
obl(Region, Friday)
appos(Friday, 18-11)
flat(18-11, December)
flat(18-11, 2015-13)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:19 CEST 2020 -->
