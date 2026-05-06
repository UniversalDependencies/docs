---
layout: postag
title: 'ADP'
shortdef: 'adposition'
udver: '2'
---

### Definition

Armenian has prepositions and postpositions but no circumpositions. They occur before or after complement noun phrase (noun, pronoun) and they form a single structure with the complement to express its grammatical and semantic relation to another unit within a clause.

Some prepositions take the form of fixed multiword expressions, e.g. _ի սեր&nbsp;_ “for the love of”, _ի պատիվ&nbsp;_ “in honor of”. The component words are then still tagged according to their basic use (_ի&nbsp;_ is `ADP`, _սեր&nbsp;_ is [NOUN](), etc.) and their status as multiword expressions is accounted for in the [syntactic annotation](fixed).

Note, that the Armenian `ADP` covers also “localizers”. These are a closed set of postpositions (traditionally known as “improper adpositions”) which inflect for [Case](), [Number[psor]]() and [Person[psor]]() and typically indicate spatial information in relation to the noun preceding it. Localizers are still tagged as `ADP`, but are labeled with additional features and with special dependency relation [case:loc]().
Here is the list of commonly used localizers: _միջի_, _միջից_, _միջով_, _ետևից_, _հետևից_, _հետևում_, _վրայի_, _վրայից_, _վրայով_, _տակի_, _տակից_, _տակով_, _մոտի_, _մոտից_, _մոտով_, _առջևի_, _առջևից_, _առջևով_.

- _Վերցրեց գիրքը սեղանի <b>վրայից</b>։&nbsp;_ “He took the book from on the table.”
- _Ճանապարհն անցնում էր դաշտերի <b>միջով</b>։&nbsp;_ “The road passed through the fields.”

Although a few localizers have further grammaticalized into adverbials denoting spatial concepts, localizers with the adverbial function are still tagged as `ADP` (but are labeled with additional features and with the dependency relation [obl]()).

- _Հետո սկսում ես <b>հետները</b> չշփվել։&nbsp;_ “Then you stop communicating _<b>with-them</b>_.”

Note also, that there is a number of case-marking elements (traditionally called “adpositional words”), derived from a closed set of [nouns](NOUN), [adjectivs/participles](VerbForm) or [adverbs](ADV). They are tagged based on their main part-of-speech category in UPOS. Their function as a part of speech, different from that in UPOS, is indicated with the relation [ExtPos]().

- _անհրաժեշտության <b>դեպքում</b>_ “_<b>in case</b> of necessity_”

### Examples

- Prepositions, postpostions: _ի&nbsp;_ “for the sake of”, _առ&nbsp;_ “up to”, _ըստ&nbsp;_ “according to”, _համար&nbsp;_ “for”, _հանդերձ&nbsp;_ “together with”, _պես&nbsp;_ “as”
- Localizers / postpositions։ _մոտ&nbsp;_ “at”, _վրա&nbsp;_ “on”, _մեջ&nbsp;_ “in”, _տակ&nbsp;_ “under”, _առաջ, առջև, դիմաց&nbsp;_ “before, front side, ahead”
- Case-marking words: _հետո&nbsp;_ “after”
<!-- Interlanguage links updated St 6. května 2026, 20:41:53 CEST -->
