---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
udver: '2'
---

Pronominal type is a feature of (some) pronouns, determiners and pronominal adverbs in Swedish.

### <a name="Prs">`Prs`</a>: personal or possessive personal pronoun or determiner

See also the [Poss]() feature that distinguishes normal personal
pronouns from possessives. Note that `Prs` also includes reflexive
personal/possessive pronouns.

#### Examples

* _jag, du, han, hon, sig, vi_

### <a name="Rcp">`Rcp`</a>: reciprocal pronoun

This value is used for pronouns that are specifically reciprocal. If a reflexive pronoun can be used to convey reciprocal meaning,
it is still labeled as reflexive (`PronType=Prs|Reflex=Yes`). It is not marked as reciprocal in contexts in which it is used
reciprocally.

Reciprocal means that there is a plural subject and every member of the group does the thing described by the predicate to
every other member of the group. A reciprocal pronoun is used in the object position to signal such configuration.

#### Examples

* _varandra_ “each other”

### <a name="Art">`Art`</a>: article

Article is a special case of determiner that bears the feature of
[definiteness](Definite).

#### Examples

* _en, ett, den, de, det_

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

### <a name="Dem">`Dem`</a>: demonstrative pronoun, determiner, numeral or adverb

#### Examples

* _detta, denna, dessa, det, den, de, denne, dennes_

### <a name="Tot">`Tot`</a>: total (collective) pronoun, determiner or adverb

#### Examples

* _alla, allt, varje_

### <a name="Neg">`Neg`</a>: negative pronoun, determiner or adverb

Negative pronominal words are distinguished from negating [particles](u-pos/PART)
and from words that inflect for polarity (verbs, adjectives etc.) Those words
do not use `PronType=Neg`, they use `Polarity=Neg` instead. See the
[Polarity]() feature for further details.

#### Examples:

* _ingen, ingenting, inget, inga_

### <a name="Ind">`Ind`</a>: indefinite pronoun, determiner, numeral or adverb

#### Examples

* _man, någon, något, samma, några, en, andra_

<!-- Interlanguage links updated Čt lis 12 09:43:06 CET 2020 -->
