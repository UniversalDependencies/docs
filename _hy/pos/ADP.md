---
layout: postag
title: 'ADP'
shortdef: 'adposition'
udver: '2'
---

### Definition

Armenian has prepositions and postpositions but no circumpositions. They occur before or after a complement noun phrase (noun or pronoun) and form a single structure with the complement to express its grammatical and semantic relation to another unit within a clause.

Some prepositions take the form of fixed multiword expressions, e.g. _ի սեր_/_i ser_ “for the sake of”, _ի պատիվ_/_i pativ_ “in honor of”. The component words are then still tagged according to their basic usage (_ի_/_i_ is `ADP`, _սեր_/_ser_ is `NOUN`, etc.) and their status as multiword expressions is accounted for in the [syntactic annotation](fixed).

Note that the Armenian `ADP` also covers inflected localizers. These are a closed set of postpositions (traditionally known as “improper adpositions”) which inflect for `Case`, `Number[psor]` and `Person[psor]` and typically indicate spatial information in relation to the preceding noun. Localizers are still tagged as `ADP`, but are annotated with additional features and the special dependency relation [case:loc]().
Here is the list of commonly used localizers: _միջի_/_miǰi_, _միջից_/_miǰic’_, _միջով_/_miǰov_, _ետևից_/_etewic’_, _հետևից_/_hetewic’_, _հետևում_/_hetewowm_, _վրայի_/_vrayi_, _վրայից_/_vrayic’_, _վրայով_/_vrayov_, _տակի_/_taki_, _տակից_/_takic’_, _տակով_/_takov_, _մոտի_/_moti_, _մոտից_/_motic’_, _մոտով_/_motov_, _առջևի_/_aṙǰewi_, _առջևից_/_aṙǰewic’_, _առջևով_/_aṙǰewov_.

- _Վերցրեց գիրքը սեղանի <b>վրայից</b>։_/_Verc’rec’ girk’ë seġani <b>vrayic’</b>_ “He took the book <b>off</b> the table.”
- _Ճանապարհն անցնում էր դաշտերի <b>միջով</b>։_/_Č̣anaparhn anc’nowm ēr dašteri <b>miǰov</b>_ “The road passed <b>through</b> the fields.”

Although a few localizers have further grammaticalized into adverbials denoting spatial concepts, they are still tagged as `ADP`. Their adverbial function is reflected by additional features and by the dependency relation [obl]().

- _Հետո սկսում ես <b>հետները</b> չշփվել_/_Heto sksowm es <b>hetnerë</b> čšp’vel_ “Then you stop communicating <b>with them</b>.”

Note also that Armenian has a number of case-marking elements (traditionally called “adpositional words”), derived from a closed set of [nouns](NOUN), [adjectives/participles](VerbForm) or [adverbs](ADV). They are tagged based on their main part-of-speech category in UPOS. Their function as a part of speech different from that indicated by their UPOS tag is marked by the [ExtPos]() feature.

- _անհրաժեշտության <b>դեպքում</b>_/_anhražeštowt’yan <b>depk’owm</b>_ “<b>in case</b> of necessity”

### Examples

- Prepositions: _ի_/_i_ “for, in”, _առ_/_ar_ “up to”; _ըստ_/_ëst_ “according to”.
- Postpositions: _համար_/_hamar_ “for”, _հանդերձ_/_handerj_ “together with”, _պես_/_pes_ “as”.
- Localizers / postpositions: _մոտ_/_mot_ “at”, _վրա_/_vra_ “on”, _մեջ_/_meǰ_ “in”, _տակ_/_tak_ “under”, _առաջ_/_araǰ_, _առջև_/_arǰew_, _դիմաց_/_dimac’_ “in front of, opposite, ahead of”.
- Case-marking words: _ընթացքում_/_ënt’ac’k’owm_ "during, in the course of", _դեպքում_/_depk’owm_ "in case", _կողքին_/_koġk’in_ "next to", _պատճառով_/_patč̣aṙov_ "because of".
<!-- Interlanguage links updated Út 30. června 2026, 10:32:59 CEST -->
