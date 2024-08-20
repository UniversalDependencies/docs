---
layout: feature
title: 'Number'
shortdef: 'number'
udver: '2'
---

In English, `Number` is a feature of [nouns](en-pos/NOUN) and other parts of speech that mark agreement with nouns, i.e. personal [pronouns](en-pos/PRON), [verbs](en-pos/VERB) including verbal [auxiliaries](en-pos/AUX), and some [determiners](en-pos/DET).

For nouns, number is determined primarily by agreement (not necessarily form), per Penn Treebank tag guidelines. The values are described below: essentially, `Sing` for nouns that take singular agreement, `Plur` for most nouns that take plural agreement, and `Ptan` for pluralia tantum (nouns exhibiting grammatically plural morphology and agreement that cannot be made singular). (There is no separate value for collective/mass nouns.)

For many word types, the `Number` feature is variable—that is, it depends on context and not just form.

### <a name="Sing">`Sing`</a>: singular

The grammatical singular vs. plural contrast is defined in terms of agreement.
A singular noun prototypically denotes one person, animal, or thing, but collective/mass nouns may also be grammatically singular.
Every noun with the PTB tag `NN` or `NNP` is marked with this feature.
In addition, singular pronouns (see [PRON]()), singular demonstrative determiners, and verbs with a singular subject receive this feature.

#### Examples:

* _an <b>apple</b>, a <b>train</b>, this <b>sheep</b>, this <b>species</b>_
* _some <b>information</b>, the <b>news</b>_
* _the <b>committee</b> has voted_
* _<b>linguistics</b> is my favorite subject_
* _I, me, my, myself, he, his, him, himself, she, her, hers, herself, it, its, itself_
* _this, that_
* _am, is, was_
* _he <b>wanted</b> a cat_
* _she <b>does</b> like cats_

### <a name="Plur">`Plur`</a>: plural

Every noun with the PTB tag `NNS` or `NNPS` (including measure terms like _inches_ or _years_ even though sometimes
the measurement noun phrase can be construed as singular and take singular agreement) is considered plural.
This feature applies to such nouns with the exception of pluralia tantum (`Ptan`; see below).
In addition, plural pronouns (see [PRON]()), plural demonstrative determiners, and verbs with a plural subject receive this feature.

#### Examples:

* _several <b>apples</b>, two <b>trains</b>, these <b>sheep</b>, these <b>species</b>_
* _<b>Police</b> are everywhere_
* _10 <b>minutes</b> is not enough time_
* _we, us, our, ours, ourselves, yourselves, they, them, their, theirs, themselves_
* _these, those_
* _are, were_
* _they <b>wanted</b> a cat_
* _we <b>do</b> like cats_

### <a name="Ptan">`Ptan`</a>: plurale tantum

Some nouns appear only in the plural form, with a regular plural suffix and plural agreement,
but lack a singular counterpart (at least when serving as a nominal head).
(The lemma is therefore the plural form.) These form a relatively closed set.
Semantically, they often denote a mass-like collection, or a doublet object.

Note that some nouns have endings that look like regular plural endings, but are not:
_linguistics_ and _Xerxes_ are singular, and _species_ and _series_ may be singular or plural, but none of these are pluralia tantum.

#### Examples

* _<b>clothes</b>, <b>scissors</b>, <b>riches</b>_

<!-- Interlanguage links updated Ne 5. května 2024, 18:20:06 CEST -->
