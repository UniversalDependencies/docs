---
layout: postag
title: 'ADP'
shortdef: 'adposition'
udver: '2'
---

### Definition

Armenian has prepositions and postpositions but no circumpositions. They occur before or after a complement noun phrase (noun, pronoun) and they form a single structure with the complement to express its grammatical and semantic relation to another unit within a clause.

Some prepositions take the form of fixed multiword expressions, e.g. _ի սեր_/_i ser_ “for the sake of”, _ի պատիվ_/_i pativ_ “in honor of”. The component words are then still tagged according to their basic use (_ի_/_i_ is `ADP`, _սեր_/_ser_ is [NOUN](), etc.) and their status as multiword expressions is accounted for in the [syntactic annotation](fixed).

Note that the Armenian `ADP` covers also “localizers”. These are a closed set of postpositions (traditionally known as “improper adpositions”) which inflect for [Case](), [Number[psor]]() and [Person[psor]]() and typically indicate spatial information in relation to the noun preceding it. Localizers are still tagged as `ADP`, but are labeled with additional features and with special dependency relation [case:loc]().
Here is the list of commonly used localizers: _միջի_/_miǰi_, _միջից_/_miǰic’_, _միջով_/_miǰov_, _ետևից_/_etewic’_, _հետևից_/_hetewic’_, _հետևում_/_hetewowm_, _վրայի_/_vrayi_, _վրայից_/_vrayic’_, _վրայով_/_vrayov_, _տակի_/_taki_, _տակից_/_takic’_, _տակով_/_takov_, _մոտի_/_moti_, _մոտից_/_motic’_, _մոտով_/_motov_, _առջևի_/_aṙǰewi_, _առջևից_/_aṙǰewic’_, _առջևով_/_aṙǰewov_.

- _Վերցրեց գիրքը սեղանի <b>վրայից</b>։_/_Verc’rec’ girk’ë seġani <b>vrayic’</b>_ “He took the book from off the table.”
- _Ճանապարհն անցնում էր դաշտերի <b>միջով</b>։_/_Č̣anaparhn anc’nowm ēr dašteri <b>miǰov</b>_ “The road passed through the fields.”

Although a few localizers have further grammaticalized into adverbials denoting spatial concepts, localizers with the adverbial function are still tagged as `ADP` (but are labeled with additional features and with the dependency relation [obl]()).

- _Հետո սկսում ես <b>հետները</b> չշփվել_/_Heto sksowm es <b>hetnerë</b> čšp’vel_ “Then you stop communicating _<b>with-them</b>_.”

Note also that there is a number of case-marking elements (traditionally called “adpositional words”), derived from a closed set of [nouns](NOUN), [adjectives/participles](VerbForm) or [adverbs](ADV). They are tagged based on their main part-of-speech category in UPOS. Their function as a part of speech, different from that in UPOS, is indicated with the [ExtPos] feature.

- _անհրաժեշտության <b>դեպքում</b>_/_anhražeštowt’yan <b>depk’owm</b>_ “_<b>in case</b> of necessity_”

### Examples

- Prepositions, postpositons: _ի_/_i_ “for, in”, _առ_/_ar_ “up to”, _ըստ_/_ëst_ “according to”, _համար_/_hamar_ “for”, _հանդերձ_/_handerj_ “together with”, _պես_/_pes_ “as”
- Localizers / postpositions։ _մոտ_/_mot_ “at”, _վրա_/vra_ “on”, _մեջ_/_mej_ “in”, _տակ_/_tak_ “under”, _առաջ_/_araj_, _առջև_/_arjew_, _դիմաց_/_dimac’_ “before, front side, ahead”
- Case-marking words: _հետո_/_heto_ “after”
<!-- Interlanguage links updated St 6. května 2026, 20:41:53 CEST -->
