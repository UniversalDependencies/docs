---
layout: postag
title: 'ADP'
shortdef: 'adposition'
udver: '2'
---

### Definition

Western Armenian has prepositions and postpositions but no circumpositions. They occur before or after a complement noun phrase (noun, pronoun) and they form a single structure with the complement to express its grammatical and semantic relation to another unit within a clause.

Some prepositions take the form of fixed multiword expressions, e.g. _ի վեր_/_i ver_ “since”, _ի պատիւ_/_i badiw_ “in honor of”. The component words are then still tagged according to their basic usage (_ի_/_i_ is `ADP`, _վեր_/_ver_ is `ADV`, etc.) and their status as multiword expressions is accounted for in the [syntactic annotation](fixed).

Note that the Armenian `ADP` also covers “localizers”. These are a closed set of postpositions (traditionally known as “improper adpositions”) which inflect for `Case`, `Number[psor]` and `Person[psor]` and typically indicate spatial information in relation to the noun preceding it. Localizers are still tagged as `ADP`, but are labeled with additional features and with special dependency relation [case:loc]().
Here is the list of commonly used localizers: _մէջէն_/_mēchēn_, _ետեւէ_/_edewē_, _ետեւէն_/_edewēn_, _վրայի_/_vrayi_, _վրայէն_/_vrayic’_, _վրայով_/_vrayov_, _առջեւէն_/_aṛchewēn_, _առաջքէն_/_aṛachkʿēn_, _ընդմէջէն_/_ěntmēchēn_, _քովէն_/_kʿovēn_, _տակէն_/_dagēn_, _դիմացի_/_timatsʿi_.

- _Վերցրեց գիրքը սեղանի <b>վրայից</b>։_/_Verc’rec’ girk’ë seġani <b>vrayic’</b>_ “He took the book <b>off</b> the table.”
- _Ճանապարհն անցնում էր դաշտերի <b>միջով</b>։_/_Č̣anaparhn anc’nowm ēr dašteri <b>miǰov</b>_ “The road passed <b>through</b> the fields.”

Although a few localizers have further grammaticalized into adverbials denoting spatial concepts, localizers with the adverbial function are still tagged as `ADP` (but are labeled with additional features and with the dependency relation [obl]()).

- _Հետո սկսում ես <b>հետները</b> չշփվել_/_Heto sksowm es <b>hetnerë</b> čšp’vel_ “Then you stop communicating <b>with them</b>.”

Note also that there are a number of case-marking elements (traditionally called “adpositional words”), derived from a closed set of [nouns](NOUN), [adjectives/participles](VerbForm) or [adverbs](ADV). They are tagged based on their main part-of-speech category in UPOS. Their function as a part of speech different from that indicated by their UPOS tag is marked by the [ExtPos]() feature.

- _անհրաժեշտության <b>դեպքում</b>_/_anhražeštowt’yan <b>depk’owm</b>_ “<b>in case</b> of necessity”

### Examples

- Prepositions: _ի_/_i_ “for, in”, _առ_/_ar_ “up to”; _ըստ_/_ëst_ “according to”
- Postpositions: _համար_/_hamar_ “for”; _հանդերձ_/_handerj_ “together with”; _պես_/_pes_ “as”
- Localizers / postpositions: _մոտ_/_mot_ “at”; _վրա_/_vra_ “on”; _մեջ_/_meǰ_ “in”; _տակ_/_tak_ “under”; _առաջ_/_araǰ_, _առջև_/_arǰew_, _դիմաց_/_dimac’_ “in front of, opposite, ahead of”
- Case-marking words: _հետո_/_heto_ “after”
<!-- Interlanguage links updated St 6. května 2026, 20:41:53 CEST -->
