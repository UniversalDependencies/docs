---
layout: feature
title: 'Number'
shortdef: 'number'
udver: '2'
---

In English, `Number` is a feature of [nouns](en-pos/NOUN) and other parts of speech that mark agreement with nouns, i.e. personal [pronouns](en-pos/PRON), [verbs](en-pos/VERB), and some [determiners](en-pos/DET).

The values are described below: `Sing` for all nouns that take singular agreement, `Plur` for most plural nouns, and `Ptan` for pluralia tantum (nouns exhibiting grammatically plural morphology and agreement that cannot be made singular). We don't distinguish collective/mass nouns.

### <a name="Sing">`Sing`</a>: singular

A singular noun denotes one person, animal or thing. Every noun with the PTB tag `NN` or `NNP` is marked with this feature.

#### Examples:

* _an <b>apple</b>, a <b>train</b>_

Pronouns that refer to a single person, an animal or a thing are also marked with this feature.

* _I, me, my, myself, he, his, him, himself, she, her, hers, herself, it, its, itself_

We also mark all verbs with the PTB tag `VBZ` with this feature.

#### Examples:

* _she <b>does</b>_
* _he <b>walks</b>_

Further, we mark inflections of `be` that can only have a singular noun or pronoun in subject position with this feature.

* _am, is, was_

Demonstrative determiners of singular nouns and demonstrative pronouns that refer to singular nouns are also marked with this feature.

* _this, that_

### <a name="Plur">`Plur`</a>: plural

A plural noun denotes several persons, animals or things. Every noun with the PTB tag `NNS` or `NNPS` is marked with this feature.

#### Examples:

* _several <b>apples</b>, two <b>trains</b>_

Pronouns that refer to a single person, an animal or a thing are also marked with this feature.

* _we, us, our, ours, ourselves, yourselves, they, them, their, theirs, themselves_

Demonstrative determiners of plural nouns and demonstrative pronouns that refer to plural nouns are also marked with this feature.

* _these, those_


### <a name="Ptan">`Ptan`</a>: plurale tantum

Some nouns appear only in the plural form, with a regular plural suffix and plural agreement, but lack a singular counterpart (at least when serving as a nominal head).
Semantically, they often denote a mass-like collection, or a doublet object. These form a relatively closed set.

#### Examples

* _<b>clothes<b>, <b>scissors<b>, <b>riches<b>_

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:41:53 CET -->
