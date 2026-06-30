---
layout: postag
title: 'ADP'
shortdef: 'adposition'
udver: '2'
---

### Definition
Middle Armenian has prepositions, postpositions, and ambipositional adpositions, but no circumpositions. They occur before or after a complement noun phrase (noun, pronoun) and form a single structure with the complement to express its grammatical and semantic relation to another unit within a clause.

Some adpositions occur in fixed multiword expressions, which may function either as complex adpositions (e.g., _դեպ ի/dep i_ “to, towards”) or as other parts of speech, such as adverbs (e.g., _ի պահն_/_i pahn_ “at the moment, immediately”). The component words are still tagged according to their basic usage (_ի/i_ is `ADP`, _պահն/pahn_ is [NOUN](), etc.), and their status as a multiword expression is accounted for in the syntactic annotation using the [fixed]() relation. To capture the syntactic role of the whole phrase, the [ExtPos]() feature is applied to the first word of the expression to specify the UPOS that the entire expression would have if treated as a single word (e.g., `ExtPos=ADV` for _ի_/_i_ in  _ի պահն_/_i pahn_).

Note that there are a number of case-marking elements (traditionally called “adpositional words”), derived from a closed set of [nouns](NOUN), [adjectives/participles](VerbForm) or [adverbs](ADV). They are tagged based on their main part-of-speech category in UPOS. Their function as a category different from that indicated by their UPOS tag is marked by the [ExtPos]() feature.

### Examples

- Prepositions: _ի_/_i_ “from, to, into, for” (with its antevocalic form _յ-_); _առ_/_ar_ “up to”; _ընդ_/_ënd_ “under, by, through, with, instead of”;  _ինչվի_/_inčvi_ “till, up to”
- Postpositions: _համար_/_hamar_ “for”; _հանդէպ_/_handēp_ “to, towards”; _պէս_/_pēs_ “as”
- Ambipositions: _ինձ <b>դէմ</b>ս_/_inj <b>dēm</b>s_ “in front of me”;  _<b>դէմ</b> քեզ_/_<b>dēm</b> k’ez_ “in front of you”
- Complex prepositions: _ի խէչ_/_i xēč_ “at”; _ի վերայ_/_i veray_ “on, over, about”; _ի մէջ_/_i mēǰ_ “in, into, between”
<!-- Interlanguage links updated Út 30. června 2026, 10:32:59 CEST -->
