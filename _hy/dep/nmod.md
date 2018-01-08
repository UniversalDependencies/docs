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
* [nmod:obl](): noun modifier functionally corresponds to an oblique argument or adjunct.

In Armenian `nmod` is used:

* for noun-noun modification: `nmod` noun phrases attached to nouns are usually in the nominative [Case]() and precede the modified noun. There are alternations in ablative or instrumental cases.

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

Standard `nmod` relation is used even when things are being counted in groups (with “massifiers”):

~~~ sdparse
երկու բաժակ ջուր \n two cup.Nom water
nmod(ջուր, բաժակ)
nummod(բաժակ, երկու)
nmod(water, cup.Nom)
nummod(cup.Nom, two)
~~~

Note, that so-called “bare noun compounds” (e.g. _մարդ արարած&nbsp;_ “human being”) marked using the [compound]() relation.

* for an explicative attribute of a noun: a typical example is a title attached to a name of a person. The relation is similar to the [flat]() relation that links the first and the last name, but it is not labeled `flat` because the title is not part of the name:

~~~ sdparse
Արշակ թագավորը \n King Arshak 
nmod(թագավորը, Արշակ)
nmod(King, Arshak)
~~~

~~~ sdparse
առաջին նախագահ Լևոն Տեր - Պետրոսյանը \n the-first president Levon Ter - Petrosyan 
amod(նախագահ, առաջին)
nmod(Լևոն, նախագահ)
flat(Լևոն, Պետրոսյանը)
flat(Լևոն, Տեր)
amod(president, the-first)
nmod(Levon, president)
flat(Levon, Petrosyan)
flat(Levon, Ter)
~~~

Note that the same thing can be also expressed using an [apposition](appos).
In the case of apposition, the title follows the modified name and is separated by a punctuation symbol:

~~~ sdparse
Լևոն Տեր - Պետրոսյանը ՝ առաջին նախագահը \n Levon Ter - Petrosyan , the-first president
flat(Լևոն, Պետրոսյանը)
flat(Լևոն, Տեր)
punct(նախագահը, ՝)
amod(նախագահը, առաջին)
appos(Լևոն, նախագահը)
flat(Levon, Petrosyan)
flat(Levon, Ter)
punct(president, ,)
amod(president, the-first)
appos(Levon, president)
~~~

* The `nmod` relation is further specified by the [case]() relation.

~~~ sdparse
մի փղի չափ կենդանի \n an elephant size animal
nmod(կենդանի, փղի)
case(փղի, չափ)
det(կենդանի, մի)
nmod(animal, elephant)
case(elephant, size)
det(animal, an)
~~~

~~~ sdparse
ոսկու պես աղջիկ \n gold like girl
nmod(աղջիկ, ոսկու)
case(ոսկու, պես)
nmod(girl, gold)
case(gold, like)
~~~
