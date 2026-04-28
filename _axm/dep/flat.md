---
layout: relation
title: 'flat'
shortdef: 'flat'
udver: '2'
---

The `flat` relation is one of the three relations for MWE in UD. It is used for exocentric (headless) semi-fixed MWEs like names and dates. It contrasts with [fixed](), 
which applies to completely fixed grammaticized (function word-like) MWEs, and with [compound](), which applies to endocentric (headed) MWEs.

Flat MWEs are annotated with a flat structure, where all subsequent words in the expression are attached to the first one using the `flat` label. The assumption is that
these expressions do not have any internal syntactic structure and that the structural annotation is in principle arbitrary.

## Names

In Middle Armenian the [flat:name]() relation as a specialization of `flat` is used to join the first (or middle) and the last name of a person. In general, names are
annotated in a `flat:name`, head-initial structure, in which all words in the name modify the head using the `flat:name` label.

For phrasal or clausal names the usual relations are used (e.g. multi-word names of places).

~~~ sdparse
flat:name()
flat:name()
flat:name()
flat:name()
nmod()
nmod()
amod()
amod()
nmod:poss()
nmod:poss()
~~~

~~~ sdparse
flat:name()
flat:name()
~~~

~~~ sdparse
Վանա/ADJ[NameType=Geo|Poss=Yes] լիճ/NOUN \n Lake Van
amod(լիճ, Վանա)
amod(Lake, Van)
~~~

Note, that the titles/honorifics, when immediately following the first noun, are analyzed using the `flat:name` relation. They are treated as a part of the names: (see also [nmod]() and [apposition](appos)): 

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


## Dates and Complex Numerals

The `flat` relation is also used for numerals and numerical expressions that lack phrasal structure. The most left numeral is the head, the other numerals are attached as its modifiers. Note, that for numerical (spacial and time) distributions and ranges the [flat:dist]() and [flat:range]() relations are used.

~~~ sdparse
հարյուր հիսունհինգ հազար \n one hundred fifty-five thousand .
flat(հարյուր, հիսունհինգ)
flat(hundred, fifty-five)
flat(հարյուր, հազար)
flat(hundred, thousand)
~~~

Date expressions which have a very clear syntactic structure, should be annotated with regular dependency relations. In 
other cases, they have a flat structure with no clearly discernible head, as in _ _, in which case the `flat` relation should be used. 


~~~ sdparse
18 Դեկտեմբեր 2015 \n 18 December 2015
flat(18-1, Դեկտեմբեր)
flat(18-1, 2015-3)
flat(18-5, December)
flat(18-5, 2015-7)
~~~
<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:55 CET -->
