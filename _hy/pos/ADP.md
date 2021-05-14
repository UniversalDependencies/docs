---
layout: postag
title: 'ADP'
shortdef: 'adposition'
udver: '2'
---

### Definition

Armenian has prepositions and postpositions but no circumpositions. They occur before or after complement noun phrase (noun, pronoun) and they form a single structure with the complement to express its grammatical and semantic relation to another unit within a clause.

Some prepositions take the form of fixed multiword expressions, e.g. _ի սեր&nbsp;_ “for the love of”, _ի պատիվ&nbsp;_ “in honor of”. The component words are then still tagged according to their basic use (_ի&nbsp;_ is `ADP`, _սեր&nbsp;_ is [NOUN](), etc.) and their status as multiword expressions is accounted for in the [syntactic annotation](fixed).

Note, that the Armenian `ADP` covers also “localizers”. These are a closed set of postpositions (traditionally known as “improper adpositions”) which inflect for [Case](), [Number[psor]]() and [Person[psor]]() and typically indicate spatial information in relation to the noun preceding it. Localizers are still tagged as `ADP`, but are labeled with additional features and with special dependency relation [case:loc]():

- _Վերցրեց գիրքը սեղանի <b>վրայից</b>։&nbsp;_ “He took the book from on the table.”
- _Ճանապարհն անցնում էր դաշտերի <b>միջով</b>։&nbsp;_ “The road passed through the fields.”

Although a few localizers have further grammaticalized into adverbials denoting spatial concepts, localizers with the adverbial function are still tagged as `ADP` (but are labeled with additional features and with the dependency relation [obl]()).

- _<b>Մոտովս</b> անցան երկու սիլուետներ։&nbsp;_ “Two silhouettes passed by me.”

Note also, that there is a number of case-marking elements (traditionally called “adpositional words”), derived from a closed set of nouns, [adjectivs/participles](VerbForm) or [adverbs](ADV). They are still tagged `ADP`.

### Examples

- Prepositions, postpostions: _ի&nbsp;_ “for the sake of”, _առ&nbsp;_ “up to”, _ըստ&nbsp;_ “according to”, _համար&nbsp;_ “for”, _հանդերձ&nbsp;_ “together with”, _պես&nbsp;_ “as”
- Localizers / postpositions։ _մոտ&nbsp;_ “at”, _վրա&nbsp;_ “on”, _մեջ&nbsp;_ “in”, _տակ&nbsp;_ “under”, _առաջ, առջև, դիմաց&nbsp;_ “before, front side, ahead”
- Case-marking words: _հետո&nbsp;_ “after”
<!-- Interlanguage links updated Pá kvě 14 11:08:17 CEST 2021 -->
