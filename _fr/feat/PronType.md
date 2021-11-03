---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
udver: '2'
---

The three corpora **UD_French-ParTUT**, **UD_French-Sequoia** and **UD_French-GSD** use the feature `PronType`:
 * on pronouns with values:
   * `Prs` (_il_, _elle_, _se_)
   * `Rel` (_qui_, _dont_, _où_)
   * `Dem` (_ceux_)
   * `Neg` (_personne_)
   * `Ind` (_quiconque_)
   * `Int` (_que_)
 * on determiners with values:
   * `Art` (_le_, _un_)
   * `Prs` (_mon_, _leur_)
   * `Dem` (_ce_)
   * `Exc` (_quel_)
   * `Neg` (_aucun_)

### <a name="Prs">`Prs`</a>: personal or possessive personal pronoun or determiner

See also the [Poss]() feature that distinguishes normal personal
pronouns from possessives. Note that `Prs` also includes reflexive
personal/possessive pronouns.

#### Examples

* _il, elle, se_
* _mon, leur_

### <a name="Art">`Art`</a>: article

Article is a special case of determiner that bears the feature of
[definiteness](Definite) (in other languages, the feature may be
marked directly on nouns).

#### Examples

* _le, un_

### <a name="Int">`Int`</a>: interrogative pronoun, determiner, numeral or adverb

Note that possessive interrogative determiners (_whose_) can be
distinguished by the [Poss]() feature.

#### Examples:

* _que_

### <a name="Exc">`Exc`</a>: Exclamative determiners

#### Examples:

* _quel_ in _Quel dommage !_ [What a pity!]

### <a name="Rel">`Rel`</a>: relative pronoun, determiner, numeral or adverb

#### Examples:

* _qui, dont, où_

### <a name="Dem">`Dem`</a>: demonstrative pronoun, determiner, numeral or adverb

#### Examples

* _ce, ceux_

### <a name="Neg">`Neg`</a>: negative pronoun, determiner or adverb

Negative pronominal words are distinguished from negating [particles](u-pos/PART)
and from words that inflect for polarity (verbs, adjectives etc.) Those words
do not use `PronType=Neg`, they use `Polarity=Neg` instead. See the
[Polarity]() feature for further details.

#### Examples:

* _aucun_

### <a name="Ind">`Ind`</a>: indefinite pronoun, determiner, numeral or adverb

#### Examples

* _quiconque_

<!-- Interlanguage links updated St lis 3 20:58:28 CET 2021 -->
