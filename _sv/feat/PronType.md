---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
udver: '2'
---

Pronominal type is a feature of (some) pronouns, determiners and pronominal adverbs in Swedish.

### <a name="Int">`Int`</a>: interrogative pronoun, determiner, or adverb

#### Examples:

* Pronouns: _vem_ "who", _vad_ "what"
* Determiners: _vilken_ (common singular) "which", _vilket_ (neuter singular) "which", _vilka_ (plural) "which"
* Adverbs: _när_ "when", _var_ "where", _hur_ "how"

### <a name="Rel">`Rel`</a>: relative pronoun, determiner, or adverb

#### Examples:

* Pronouns: _som_ "that", _vilken_ "who"
* Determiners: _vars_, _vilkens_ "whose"
* Adverbs: _då_ "when", _där_ "where"

<b>Note:</b> Because the original Swedish treebank annotation uses a single category subsuming both interrogative and relative
(corresponding to the English wh-category), we currently do not disambiguate between `Int` and `Rel`, which means
that any word belonging to one of these categories is assigned the feature `PronType=Int,Rel`.
<!-- Interlanguage links updated Čt lis 12 09:43:06 CET 2020 -->
