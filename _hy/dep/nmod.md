---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependents of another noun or noun phrase and functionally corresponds to an attribute, or possessive (genitive) complement.

In Armenian the `nmod` relation can be expressed using all [cases](Case) except locative. If a possessive [determiner](DET) is used, the relation is labeled [det]().

We also use the following language-specific subtypes for `nmod`:

* nmod: noun modifier is  functionally corresponds to an attribute, and is in Nominative,
* [nmod:poss](): noun modifier is functionally corresponds to a possessive complement (non-nominative and adpositional cases),
* [nmod:npmod](): noun phrase is is functionally corresponds to an argument or adjunct.

Nominal modifiers not marked by a preposition or ‘s genitive are tagged , a subtype of nmod. 

In Armenian `nmod` is used:

~~~ sdparse
տնօրենի գրասենյակը \n office of-the-director.`Dat`
nmod:poss(գրասենյակը, տնօրենի)
nmod:poss(office, of-the-director.`Dat`)
~~~

~~~ sdparse
նրա գրասենյակը \n his office
det(գրասենյակը, նրա)
det(office, his)
~~~

~~~ sdparse
քամի եղանակ \n wind.`Nom` weather
~~~

~~~ sdparse
երկու բաժակ ջուր
~~~

~~~ sdparse
ռետինից գնդակ \n rubber-from.`Abl` ball
~~~

~~~ sdparse
տարիքով մարդ \n age-with.`Ins` man
~~~

In conjunction with the [case](case) relation, `nmod` provides a uniform analysis for the possessive alternation:

~~~ sdparse
սեղանի վրայի գիրքը \n the-book on.`Dat` of-the-table 
nmod:poss(գիրքը, սեղանի)
case(սեղանի, վրայի)
nmod:poss(the-book, of-the-table)
case(of-the-table, on.`Dat`)
~~~

~~~ sdparse
թշնամու դեմ պատերազմը \n the-war against the-enemy
nmod:poss(պատերազմը, թշնամու)
case(թշնամու, դեմ)
nmod:poss(the-war, the-enemy)
case(the-enemy, against)
~~~

## Explicative attribute of a noun

`nmod` noun phrases attached to nouns are usually in the dative [Case]() and precedes the modified noun. However, there is also a different kind of `nmod` that precedes the modified noun also, is in Nominative and has a explicative meaning. A typical example is a title attached to a name of a person. The relation is similar to the [flat]() relation
that links the first and the last name, but it is not labeled `flat` because the title is not part of the name:

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

Nominal modifiers not marked by a preposition or ‘s genitive are tagged nmod:npmod, a 

as subtypes of `nmod`. 

Temporal nominal modifiers are also marked with a separate relation nmod:tmod. 

See the definitions of [nmod:poss](): and [nmod:npmod] relations.
