---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependents of another noun or noun phrase. We use the following language-specific subtypes:

* `nmod`: a noun modifier that functionally corresponds to an attribute,
* [nmod:poss](): a noun modifier that functionally corresponds to a possessive complement,
* [nmod:npmod](): a noun phrase functioning as a nominal modifier.

In Armenian `nmod` is used:

* for noun-noun modification involving an attributive or associative relation between the nouns: nominal dependents attached with `nmod` are usually in the nominative [Case]() and precede the modified noun. Alternations in the ablative or instrumental case also occur.

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

The standard `nmod` relation is used even when things are being counted in groups (with “massifiers”):

~~~ sdparse
երկու բաժակ/NOUN[Case=Nom] ջուր ուզեց \n two cup water
nmod(ջուր, բաժակ)
nummod(բաժակ, երկու)
nmod(water, cup)
nummod(cup, two)
~~~

An `nmod` dependent may itself be modified by a case-marking element attached with the [case]() relation (associative modification).

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

Note that so-called “bare noun compounds” (e.g. _թղթակից անդամ_ “corresponding member”) are marked using the [compound]() relation.

* for an explicative attribute of a noun or for a noun modifier specifying a whole-part relation. A typical example is a title or profession attached to the name of a person. This contrasts with titles, honorifics, regnal numbers, and epithets that follow the personal name and are treated as part of it. These are attached with [flat:name]().

~~~ sdparse
առաջին նախագահ/NOUN[Case=Nom] Լևոն Տեր - Պետրոսյանը \n the-first president Levon Ter - Petrosyan 
amod(նախագահ, առաջին)
nmod(Լևոն, նախագահ)
flat:name(Լևոն, Պետրոսյանը)
flat:name(Լևոն, Տեր)
amod(president, the-first)
nmod(Levon, president)
flat:name(Levon, Petrosyan)
flat:name(Levon, Ter)
~~~

A nominal expression identifying or further specifying another nominal may instead be attached using the [appos]() relation, particularly when it follows the modified nominal and is set off by punctuation.

~~~ sdparse
Լևոն Տեր - Պետրոսյանը ՝ առաջին նախագահը \n Levon Ter - Petrosyan , the-first president
flat:name(Լևոն, Պետրոսյանը)
flat:name(Լևոն, Տեր)
punct(նախագահը, ՝)
amod(նախագահը, առաջին)
appos(Լևոն, նախագահը)
flat:name(Levon, Petrosyan)
flat:name(Levon, Ter)
punct(president, ,)
amod(president, the-first)
appos(Levon, president)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:16 CEST -->
