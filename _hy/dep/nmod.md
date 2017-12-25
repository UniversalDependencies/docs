---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependents of another noun or noun phrase and functionally corresponds to an attribute, to a genitive complement and to an (non-core) argument or adjunct.

We use the following language-specific subtypes for `nmod`:

* `nmod`: noun modifier functionally corresponds to an attribute,
* [nmod:poss](): noun modifier functionally corresponds to a possessives,
* [nmod:obl](): noun modifier functionally corresponds to an oblique argument or adjunct,
* [nmod:comp](): a comparative nominal modifier.

In Armenian `nmod` is used:

* for noun-noun modification: `nmod` noun phrases attached to nouns are usually in the nominative [Case]() and precede the modified noun. There are alternations in ablative or instrumental Cases.

~~~ sdparse
քամի եղանակ \n wind.Nom weather
nmod(եղանակ, քամի)
nmod(weather, wind.Nom)
~~~

~~~ sdparse
ռետինից գնդակ \n rubber.Abl ball
nmod(գնդակ, ռետինից)
nmod(ball, rubber.Abl)
~~~

~~~ sdparse
տարիքով մարդ \n age.Ins man
nmod(մարդ, տարիքով)
nmod(age.Ins, man)
~~~

Standard nominal modification relationships are used even when things are being counted in groups (with “massifiers”):

~~~ sdparse
երկու բաժակ ջուր \n two cup.Nom water
nmod(բաժակ, ջուր)
nummod(բաժակ, երկու)
nmod(cup.Nom, water)
nummod(cup.Nom, two)
~~~

* for an explicative attribute of a noun: a typical example is a title attached to a name of a person. The relation is similar to the [flat]() relation that links the first and the last name, but it is not labeled `flat` because the title is not part of the name:

~~~ sdparse
Արշակ թագավորը \n King Arshak 
nmod(թագավորը, Արշակ)
nmod(King, Arshak)
~~~

~~~ sdparse
առաջին նախագահ Լևոն Տեր - Պետրոսյանը \n the-first president Levon Ter - Petrosyan 
amod(նախագահ, առաջին)
nmod(Պետրոսյանը, նախագահ)
flat(Պետրոսյանը, Լևոն)
flat(Պետրոսյանը, Տեր)
amod(president, the-first)
nmod(Petrosyan, president)
flat(Petrosyan, Levon)
flat(Petrosyan, Ter)
~~~

Note that the same thing can be also expressed using an [apposition](appos).
In the case of apposition, the title follows the modified name and is separated by a punctuation symbol:

~~~ sdparse
Լևոն Տեր - Պետրոսյանը ՝ առաջին նախագահը \n Levon Ter - Petrosyan , the-first president
flat(Պետրոսյանը, Լևոն)
flat(Պետրոսյանը, Տեր)
punct(Պետրոսյանը, ՝)
amod(նախագահը, առաջին)
appos(Պետրոսյանը, նախագահը)
flat(Petrosyan, Levon)
flat(Petrosyan, Ter)
punct(Petrosyan, ,)
amod(president, the-first)
appos(Petrosyan, president)
~~~

Note also, that so-called “bare noun compounds” (e.g. _մարդ արարած&nbsp;_ “human being”) marked using the [compound]() relation.

* The `nmod` relation is further specified by the [case]() relation.

~~~ sdparse
մի փղի չափ կենդանի \n 
nmod(կենդանի, փղի)
case(փղի, չափ)
det(կենդանի, մի)
~~~

~~~ sdparse
ոսկու պես աղջիկ \n 
nmod(աղջիկ, ոսկու)
case(ոսկու, պես)
~~~
