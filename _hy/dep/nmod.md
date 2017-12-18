---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependents of another noun or noun phrase and functionally corresponds to an attribute, or possessive (genitive) complement.

In Armenian the `nmod` relation can be expressed using all [cases](Case) except locative. If a possessive [determiner](DET) is used, the relation is labeled [det]().

We also use the following language-specific subtypes for `nmod`:

nmod:poss: possessor in in a genitive-possessive construction with the option of a subtype like nmod:poss to distinguish non-adpositional case
nmod:comp: a comparative nominal modifier
nmod:part: noun modifier specifying the whole-part relation

~~~ sdparse
տնօրենի գրասենյակը \n office of-the-director.`Dat`
nmod(գրասենյակը, տնօրենի)
nmod(office, of-the-director.`Dat`)
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


~~~ sdparse
kancelář ředitele \n office of-the-director
nmod(kancelář, ředitele)
nmod(office, of-the-director)
~~~



In conjunction with the [case](case) relation, `nmod` provides a uniform analysis for the possessive alternation

(with the option of a subtype like nmod:poss to distinguish non-adpositional case):

~~~ sdparse
սեղանի վրայի գիրքը \n the-book on.`Dat` of-the-table 
nmod(գիրքը, սեղանի)
case(սեղանի, վրայի)
nmod(the-book, of-the-table)
case(of-the-table, on.`Dat`)
~~~

~~~ sdparse
թշնամու դեմ պատերազմը \n the-war against the-enemy
nmod(պատերազմը, թշնամու)
case(թշնամու, դեմ)
nmod(the-war, the-enemy)
case(the-enemy, against)
~~~

## Agreeing attribute of a noun

`nmod` noun phrases attached to nouns are usually in the dative [Case]() and precedes the modified noun. However, there is also a different kind of `nmod` that precedes the modified noun and agrees with it in case and number.
A typical example is a title attached to a name of a person. The relation is similar to the [flat]() relation
that links the first and the last name, but it is not labeled `flat` because the title is not part of the name:

~~~ sdparse
առաջին նախագահ Լևոն Տեր - Պետրոսյանը \n the-first president Levon Ter - Petrosyan 
amod(նախագահ, առաջին)
nmod(Պետրոսյանը, նախագահ)
flat(Պետրոսյանը, Լևոն)
flat(Պետրոսյանը, Տեր)
punct(Պետրոսյանը, --5)
amod(president, the-first)
nmod(Petrosyan, president)
flat(Petrosyan, Levon)
flat(Petrosyan, Ter)
punct(Petrosyan, --11)
~~~

Note that the same thing can be also expressed using an [apposition](appos).
In the case of apposition, the title follows the modified name and is separated by a punctuation symbol:

~~~ sdparse
Լևոն Տեր - Պետրոսյանը ՝ առաջին նախագահը , \n Levon Ter - Petrosyan , the-first president ,
flat(Պետրոսյանը, Լևոն)
flat(Պետրոսյանը, Տեր)
punct(Պետրոսյանը, --3)
punct(Պետրոսյանը, ՝)
amod(նախագահը, առաջին)
punct(նախագահը, ,-8)
appos(Պետրոսյանը, նախագահը)

flat(Petrosyan, Levon)
flat(Petrosyan, Ter)
punct(Petrosyan, --11)
punct(Petrosyan, ,-13)
amod(president, the-first)
punct(president, ,-16)
appos(Petrosyan, president)
~~~
