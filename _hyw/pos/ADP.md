---
layout: postag
title: 'ADP'
shortdef: 'adposition'
udver: '2'
---

### Definition

Western Armenian has prepositions and postpositions but no circumpositions. They occur before or after a complement noun phrase (noun or pronoun) and form a single structure with the complement to express its grammatical and semantic relation to another unit within a clause.

Some prepositions take the form of fixed multiword expressions, e.g. _ի վեր_/_i ver_ “since”, _ի պատիւ_/_i patiw_ “in honor of”. The component words are then still tagged according to their basic usage (_ի_/_i_ is `ADP`, _վեր_/_ver_ is `ADV`, etc.) and their status as multiword expressions is accounted for in the [syntactic annotation](fixed).

Note that the Armenian `ADP` also covers inflected “localizers”. These are a closed set of postpositions (traditionally known as “improper adpositions”) which inflect for `Case`, `Number[psor]` and `Person[psor]` and typically indicate spatial information in relation to the preceding noun. Localizers are still tagged as `ADP`, but receive additional features and the special dependency relation [case:loc]().
Here is the list of commonly used localizers: _մէջէն_/_mēǰēn_, _ետեւէ_/_etewē_, _ետեւէն_/_etewēn_, _վրայի_/_vrayi_, _վրայէն_/_vrayēn_, _վրայով_/_vrayov_, _առջեւէն_/_aṙǰewēn_, _առաջքէն_/_aṙaǰk’ēn_, _ընդմէջէն_/_ëndmēǰēn_, _քովէն_/_k’ovēn_, _տակէն_/_takēn_, _դիմացի_/_dimac’i_.

- _Փայտաշէն հին տունի մը <b>քովէն</b> անցնելու ատեն Օքանին կը հանդիպինք։_/_P’aytašēn hin towni më <b>k’ovēn</b> anc’nelow aten Òk’anin kë handipink’_ “While passing <b>by</b> an old wooden house, we meet Okan.”
- _կը սլանամ ծառուղիներու <b>մէջէն</b>_/_kë slanam çaṙowġinerow <b>mēǰēn</b>_ “I dash <b>through</b> the alleys”

Although a few localizers have further grammaticalized into adverbials denoting spatial concepts, they are still tagged as `ADP`. Their adverbial function is reflected by additional features and by the dependency relation [obl]().

- _ո եւ է բեռ չունէին <b>հետերնին</b>_/_o ew ē beṙ čownēin <b>heternin</b>_ “they had no luggage <b>with them</b>”

Note also that Western Armenian has a number of case-marking elements (traditionally called “adpositional words”), derived from a closed set of [nouns](NOUN), [adjectives/participles](VerbForm) or [adverbs](ADV). They are tagged based on their main part-of-speech category in UPOS. Their function as a category different from that indicated by their UPOS tag is marked by the [ExtPos]() feature.

- _սորվելու <b>նպատակով</b>_/_sorvelow <b>npatakov</b>_ “<b>for the purpose</b> of learning”

### Examples

- Prepositions: _ի_/_i_ “for, in”, _առ_/_aṙ_ “up to”, _ըստ_/_ëst_ “according to”
- Postpositions: _համար_/_hamar_ “for”, _հանդերձ_/_handerj_ “together with”, _պէս_/_pēs_ “as”
- Localizers / postpositions: _մօտ_/_mòt_ “at”, _վրայ_/_vray_ “on”, _մէջ_/_mēǰ_ “in”, _տակ_/_tak_ “under”, _առաջ_/_aṙaǰ_, _առջեւ_/_aṙǰew_, _դիմաց_/_dimac’_ “in front of, opposite, ahead of”
- Case-marking words: _նպատակով_/_npatakov_ “for the purpose”, _պատճառով_/_patč̣aṙov_ “because of”, _պարագային_/_paragayin_ “in case”
<!-- Interlanguage links updated St 6. května 2026, 20:41:53 CEST -->
