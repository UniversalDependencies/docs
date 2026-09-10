---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

The `flat` relation is used to combine the elements of an expression in which none of the immediate components can be identified as the sole head using standard substitution tests.
This includes both cases where more than one component passes the head test, and cases where no component does.
Note also that the `flat` relation is appropriate in such cases only when no more specific relation applies. For example, in coordination structures annotated with the [conj]() relation, any of the conjuncts can usually replace the whole.

For phrasal or clausal names the usual relations are used (e.g. multi-word names of places, organizations etc. _Երևանի պետական համալսարան, Պարսից ծով, Խաղաղ օվկիանոս, Ալանաց դշխուհի_).

~~~ sdparse
Նախագահ Լևոն Տեր - Պետրոսյանը երեկ այցելել է Երևանի պետական համալսարան ։ \n President Levon Ter - Petrosyan yesterday visited Yerevan State University .
flat:name(Լևոն, Պետրոսյանը)
flat:name(Levon, Petrosyan)
flat:name(Լևոն, Տեր)
flat:name(Levon, Ter)
nmod(Լևոն, Նախագահ)
nmod(Levon, President)
amod(համալսարան, պետական)
amod(University, State)
nmod:poss(համալսարան, Երևանի)
nmod:poss(University, Yerevan)
~~~

~~~ sdparse
Նյու Յորք \n New York
flat:name(Նյու, Յորք)
flat:name(New, York)
~~~

~~~ sdparse
Պարսից/ADJ[Poss=Yes] ծոց/NOUN \n Persian Gulf
amod(ծոց, Պարսից)
amod(Gulf, Persian)
~~~

In Eastern Armenian, personal names are annotated using a head-initial structure, in which the first name is the head and all subsequent components of the name, such as middle and last names, are attached to it with the flat:name relation. Note that the titles/honorifics, when immediately following the first noun, are also analyzed using the `flat:name` relation. They are treated as a part of the names: (see also [nmod]() and [apposition](appos)): 

~~~ sdparse
Խոսրով Գ Կոտակ \n Khosrov III the-Small
flat:name(Խոսրով, Կոտակ)
flat:name(Khosrov, the-Small)
flat:name(Խոսրով, Գ)
flat:name(Khosrov, III)
~~~

~~~ sdparse
Արշակ թագավորը \n King Arshak 
flat:name(Արշակ, թագավորը)
flat:name(King, Arshak)
~~~

~~~ sdparse
Զարեհ էֆենդին \n Zareh Efendi 
flat:name(Զարեհ, էֆենդին)
flat:name(Zareh, Efendi)
~~~

~~~ sdparse
Անդրանիկ փաշան \n Andranik Pasha
flat:name(Անդրանիկ, փաշան)
flat:name(Andranik, Pasha)
~~~

~~~ sdparse
Մարկոս աղան \n Markos Agha
flat:name(Մարկոս, աղան)
flat:name(Markos, Agha)
~~~

Flat expressions are annotated with a flat structure, where all subsequent components in the expression are attached to the first one using the `flat` label. The assumption is that in these expressions, the `flat` relations are not syntactic head-modifier relations, and that the structural annotation is in principle arbitrary.
The components of a flat expression may have their own dependents, including nested flat structures.

~~~ sdparse
375009, Երևան 9, ԱՎ. ԻՍԱՀԱԿՅԱՆ ՓՈՂՈՑ № 28։
flat(375009, Երևան)
flat(Երևան, 9)
flat(375009, №)

The `flat` relation is also used for numerals, and for numerical and mathematical expressions that lack an internal syntactic structure. The leftmost numeral is the head, and the other numerals are attached to it as modifiers. Note that for numerical (spatial and temporal) distributions and ranges the [flat:dist]() and [flat:range]() relations are used.

~~~ sdparse
Սա առավելագույնը հարյուր հիսունհինգ հազար դրամ կարժենա ։ \n It will cost at-most hundred fifty-five thousand drams .
nummod(դրամ, հարյուր)
nummod(drams, hundred)
flat(հարյուր, հիսունհինգ-4)
flat(hundred, fifty-five)
flat(հարյուր, հազար-5)
flat(hundred, thousand)
~~~

Date expressions which have a clear syntactic structure should be annotated with regular dependency relations. In other cases, when they have a flat structure with no clearly discernible head, the `flat` relation should be used.

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

<!-- Interlanguage links updated Út 30. června 2026, 11:00:09 CEST -->
