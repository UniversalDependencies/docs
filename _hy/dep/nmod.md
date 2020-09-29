---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependents of another noun or noun phrase. We use the following language-specific subtypes:

* `nmod`: noun modifier functionally corresponds to an attribute,
* [nmod:poss](): noun modifier functionally corresponds to possessive complement,
* [nmod:npmod](): noun phrase as nominal modifier.

In Armenian `nmod` is used:

* for noun-noun modification with an attributive or associative relations between them: `nmod` nouns attached to nouns are usually in the nominative [Case]() and precede the modified noun. There are alternations in ablative or instrumental cases.

~~~ sdparse
քամի/NOUN[Case=Nom] եղանակ \n wind weather
nmod(եղանակ, քամի)
nmod(weather, wind)
~~~

~~~ sdparse
ռետինից/NOUN[Case=Abl] գնդակ \n rubber ball
nmod(գնդակ, ռետինից)
nmod(ball, rubber)
~~~

~~~ sdparse
տարիքով/NOUN[Case=Ins] մարդ \n age man
nmod(մարդ, տարիքով)
nmod(age, man)
~~~

Standard `nmod` relation is used even when things are being counted in groups (with “massifiers”):

~~~ sdparse
երկու բաժակ/NOUN[Case=Nom] ջուր ուզեց \n two cup water
nmod(ջուր, բաժակ)
nummod(բաժակ, երկու)
nmod(water, cup)
nummod(cup, two)
~~~

The `nmod` relation is further specified by the [case]() relation (associative modfication).

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

Note, that so-called “bare noun compounds” (e.g. _թղթակից անդամ&nbsp;_ “corresponding member”) marked using the [compound]() relation.

* for an explicative attribute of a noun or for noun modifier specifying the whole-part relation: a typical example is a title/profession attached to a name of a person. The relation is similar to the [flat]() relation that links the first and the last name, but it is not labeled `flat` because the title is not part of the name:

~~~ sdparse
առաջին նախագահ/NOUN[Case=Nom] Լևոն Տեր - Պետրոսյանը \n the-first president Levon Ter - Petrosyan 
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
<!-- Interlanguage links updated Út zář 29 20:31:56 CEST 2020 -->
