---
layout: relation
title: 'expl'
shortdef: 'expletive'
udver: '2'
---

The `expl` relation captures expletive or pleonastic nominals. These are nominals that appear in an argument position of a predicate, but which do not themselves satisfy any of the semantic roles of the predicate.

In Slovene treebanks, this relation is mostly used for the clitic forms of the reflexive pronoun _**se**_ (_se_, _si_; 'oneself') attached to inherently reflexive verbs, i.e. verbs that that cannot occur without _se_ (e.g. _oddahniti si/se_ 'to be relieved') or change the meaning when they do (e.g. _dati se_ 'can, be able to' vs. _dati_ 'to give'). This also holds for the reflexive _se_ occurring as a voice marker in passive constructions (e.g. _se reče_ 'is said'). 

If, on the other hand, the reflexive functions as a nominal with a clearly identifiable semantic role, it is analyzed as direct ([obj]()) or indirect ([iobj]()) object.

~~~ sdparse
Vse so se veselo smejale . \n All-of-them they-aux-PAST REFLEX happily laughed .
expl(smejale,se)
expl(laughed,REFLEX)
~~~
~~~ sdparse
Pogosto se omenja planinski turizem . \n Often REFLEX mentions alpine tourism .
expl(omenja,se)
expl(mentions,REFLEX)
~~~

In addition to the reflexive pronoun, the `expl` relation is also used with accusative clitic forms of the personal pronouns _ga_ 'him' and _jo_ 'her' in verbal idiomatic expressions like in the examples below, where the pronoun lies outside the predicate-argument structure.


~~~ sdparse
Celo noč so ga žurali . \n All night they-aux-PAST him-CLITIC partied .
expl(žurali,ga)
expl(partied,him-CLITIC)
~~~
~~~ sdparse
Zagodla jim jo je bolezen . \n Ruined-their-plans them her-CLITIC aux-PAST illness .
expl(Zagodla,jo)
expl(Ruined-their-plans,her-CLITIC)
~~~

This relation is also applied to **genitive pronouns** in cases where the pronoun and subject **refer to the same participant**. This often happens in negated sentences. 
~~~ sdparse
Je ni substance pri kateri bi bila raziskovalna dejavnost tako silovita . \n She-GEN does-not-exist substance for which would be research activities so vigorous .
expl(ni,Je)
nsubj(ni,substance-3)
expl(does-not-exist,She-GEN)
nsubj(does-not-exist,substance-16)
~~~
<!-- Interlanguage links updated Út 9. května 2023, 20:04:14 CEST -->
