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
Here is the list of commonly used localizers: _մէջէն_/_mēchēn_, _ետեւէ_/_edewē_, _ետեւէն_/_edewēn_, _վրայի_/_vrayi_, _վրայէն_/_vrayēn_, _վրայով_/_vrayov_, _առջեւէն_/_aṛchewēn_, _առաջքէն_/_aṛachkʿēn_, _ընդմէջէն_/_ěntmēchēn_, _քովէն_/_kʿovēn_, _տակէն_/_dagēn_, _դիմացի_/_timatsʿi_.

- _Փայտաշէն հին տունի մը **քովէն** անցնելու ատեն Օքանին կը հանդիպինք։_/_Pʿaydashēn hin duni mě **kʿovēn** antsʿnelu aden Ōkʿanin gě hantibinkʿ_ “While passing **by** an old wooden house, we meet Okan.”
- _կը սլանամ ծառուղիներու **մէջէն**_/_gě slanam dzaṛughineru <b>mēchēn</b>_ “I dash through the alleys”

Although a few localizers have further grammaticalized into adverbials denoting spatial concepts, localizers with the adverbial function are still tagged as `ADP` (but are labeled with additional features and with the dependency relation [obl]()).

- _ո եւ է բեռ չունէին **հետերնին**_/_o ew ē peṛ chʿunēin **hedernin**_ “they had no luggage **with them**”

Note also that there are a number of case-marking elements (traditionally called “adpositional words”), derived from a closed set of [nouns](NOUN), [adjectives/participles](VerbForm) or [adverbs](ADV). They are tagged based on their main part-of-speech category in UPOS. Their function as a part of speech different from that indicated by their UPOS tag is marked by the [ExtPos]() feature.

- _սորվելու **նպատակով**_/_sorvelu **nbadagov**_ “**for the purpose** of learning”

### Examples

- Prepositions: _ի_/_i_ “for, in”, _առ_/_aṛ_ “up to”; _ըստ_/_ěsd_ “according to”
- Postpositions: _համար_/_hamar_ “for”; _հանդերձ_/_hanterts_ “together with”; _պէս_/_bēs_ “as”
- Localizers / postpositions: _մօտ_/_mot_ “at”; _վրայ_/_vra_ “on”; _մէջ_/_mech_ “in”; _տակ_/_dag_ “under”; _առաջ_/_aṛach_, _առջեւ_/_aṛchev_, _դիմաց_/_timatsʿ_ “in front of, opposite, ahead of”
- Case-marking words: _յետոյ_/_yedoy_ “after”
<!-- Interlanguage links updated St 6. května 2026, 20:41:53 CEST -->
