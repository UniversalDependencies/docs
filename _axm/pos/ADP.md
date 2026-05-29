---
layout: postag
title: 'ADP'
shortdef: 'adposition'
udver: '2'
---

### Definition
Middle Armenian has prepositions, postpositions, and ambipositional adpositions, but no circumpositions. They occur before or after a complement noun phrase (noun, pronoun) and form a single structure with the complement to express its grammatical and semantic relation to another unit within a clause.

There are fixed multiword expressions where an adposition is involved, which may function either as complex adpositions (e.g., _դեպ ի/dep i_ “to, towards”) or as other parts of speech, such as adverbs (e.g., _ի պահն_/_i pahn_ “at the moment, immediately”). The component words are still tagged according to their basic usage (_ի/i_ is `ADP`, _պահն/pahn_ is [NOUN](), etc.), and their status as a multiword expression is accounted for in the syntactic annotation using the [fixed]() relation. To capture the syntactic role of the whole phrase, the [ExtPos]() feature is applied to the first word of the expression to specify the UPOS that the entire expression would have if treated as a single word (e.g., `ExtPos=ADV` for _ի_/_i_ in  _ի պահն_/_i pahn_).

Note that there are a number of case-marking elements (traditionally called “adpositional words”), derived from a closed set of [nouns](NOUN), [adjectives/participles](VerbForm) or [adverbs](ADV). They are tagged based on their main part-of-speech category in UPOS. Their function as a part of speech different from that indicated by their UPOS tag is marked by the [ExtPos]() feature.

### Examples

- prepositions: _<b>ի</b>/i_ “from, to, into, for” (with its antevocalic form _յ-_); _<b>առ</b>/ar_ “up to”; _<b>ընդ</b>/ënd_ “under, by, through, with, instead of”;  _<b>ինչվի</b>/inčvi_ “till, up to”
- postpositions: _<b>համար</b>/hamar_ “for”; _<b>հանդէպ</b>/handēp_ “to, towards”; _<b>պէս</b>/pēs_ “as”
- ambipositions: _ինձ <b>դէմ</b>ս/inj dēms_ “in front of me”;  _<b>դէմ</b> քեզ/dēm k’ez_ “in front of you”
- complex prepositions: _<b>ի խէչ</b>/i xēč_ “at”; _<b>ի վերայ</b>/i veray_ “on, over, about”; _<b>ի մէջ</b>/i mēǰ_ “in, into, between”
  
<!-- Interlanguage links updated St 6. května 2026, 20:41:52 CEST -->
