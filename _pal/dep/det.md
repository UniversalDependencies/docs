---
layout: relation
title: 'det'
shortdef: '<shortdef>'
udver: '2'
---

Determiner relations usually holds between a nominal head and a demonstrative, quantifier or possessive pronoun (`det:poss`).

The enclitic numeral *=ēw* 'one' also appears to be used as a marker for indefiniteness ('(some)one') or specificity ('a certain') as with New Persian. It is not fully clear whether this relation is a result of interference of New Persian copyists of Middle Persian texts or simple writing errors in the manuscripts (*=ēw* often written by a small hook only).

Determiners always precede their head with the exception of the enclitic numeral *=ēw*.
 
- "that way, the way"
~~~ sdparse
ān rāh \n that way
det(rāh, ān)
~~~

- "all ways"
~~~ sdparse
hamāg rāh \n all way
det(rāh, hamāg)
~~~

- "my father"
~~~ sdparse
man pid \n I father
det:poss(pid, man)
~~~

- "one way, a single way, a way, a certain way"
~~~ sdparse
rāh =ēw \n way one
det(rāh, =ēw)
~~~


**The Ezāfe particle**

The so-called *ezāfe* particle *ī* derives from a relative pronoun and can still be used as such in Middle Persian. It links whatever kind of attribute to its head. With nominal modifiers, *ī* corresponds to English *of* (as in 'the house *of* Henry') or possessive *'s* (as in 'Henry *'s* house'), but as it also links adjectives, adverbs, adpositional phrases, appositions, and non-finite attributive clauses the prepositional relation `case` does not fit.<br>Note that the *ezāfe* particle can be repeated if a noun has several modifiers, a so-called *ezāfe* chain.

Since the *ezāfe* particle determines the syntactic relation of what follows as attributive, we consider it a determiner of the attribute. Like that, the relation continues the relative clause relation it originates from, and it is at times difficult to distinguish them. <br>When *ī* is used as a relativizer or general subordinator, it is in `mark` relation.

- "in the name of the gods"
~~~ sdparse
pad nām ī yazdān \n in name Ezafe gods
case(nām, pad)
det(yazdān, ī)
nmod(nām, yazdān)
~~~

- "the path of righteousness"
~~~ sdparse
ān ī ahlāyīh rāh \n that EZ righteousness way
det(rāh, ān)
det(ahlāyīh, ī)
nmod(rāh, ahlāyīh)
~~~

- "in evil times"
~~~ sdparse
andar āwām ī wad \n in period EZ bad
case(āwām, andar)
det(wad, ī)
amod(āwām, wad)
~~~

- "running backwards"
~~~ sdparse
dwārišn ī ō pas \n running EZ to behind
det(pas, ī)
case(pas, ō)
advmod:lmod(dwārišn, pas)
~~~

- "salvation in the afterlife"
~~~ sdparse
bōzišn ī ānōh \n salvation EZ there
det(ānōh, ī)
advmod(bōzišn, ānōh)
~~~

- "Ohrmazd, the Lord"
~~~ sdparse
ohrmazd ī xwadāy \n Ohrmazd EZ lord
det(xwadāy, ī)
appos(ohrmazd, xwadāy)
~~~

- "the path to paradise"
~~~ sdparse
rāh ī ō wahišt \n way EZ to paradise
det(wahišt, ī)
case(wahišt, ō)
nmod(rāh, wahišt)
~~~

**Adjectives *pro nomen* in case of head omission**

Adjectives and nouns are not clearly distinguished in Middle Persian. Still, there is a specific construction, which is used when the nominal head is omitted and the remaining attributive adjective is raised to head position.

- "of the spiritual creation and also of the material (one)"
~~~ sdparse
az dahišn mēnōyīg az =iz ān ī gētīyīg \n from creation spiritual from also that EZ material
case(dahišn, az-1)
amod(dahišn, mēnōyīg)
case(gētīyīg, az-4)
advmod(gētīyīg, =iz)
det(gētīyīg, ān)
det(gētīyīg, ī)
conj(dahišn, gētīyīg)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:01 CEST -->
