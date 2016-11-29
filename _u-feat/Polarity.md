---
layout: feature
title: 'Polarity'
shortdef: 'polarity'
redirect_from: "u/feat/Negativeness.html"
redirect_from: "u/feat/Negative.html"
---

Polarity is typically a feature of [verbs](u-pos/VERB),
[adjectives](u-pos/ADJ), sometimes also [adverbs](u-pos/ADV) and
[nouns](u-pos/NOUN) in languages that negate using bound
morphemes.
In languages that negate using a function word, `Polarity` is used to mark
that function word, unless it is a pro-form already marked with
`PronType=Neg` (see below).

For instance, all Czech verbs and adjectives can be negated
using the prefix _ne-_.  In English, verbs are negated using the
[particle](u-pos/PART) _not_ and adjectives are also negated using
prefixes, although the process is less productive than in Czech _(wise
&ndash; unwise, probable &ndash; improbable)_.

Note that `Polarity=Neg` is not the same thing as
[PronType]()`=Neg`. For pronouns and other pronominal parts of speech
there is no such binary opposition as for verbs and adjectives. (There
is no such thing as "affirmative pronoun".)

The `Polarity` feature can be also used to distinguish response
[interjections](u-pos/INTJ) _yes_ and _no_.

### `Pos`: positive, affirmative

#### Examples

* [cs] _<b>přišel</b>_ "he came"

### Neg: negative

#### Examples

* [cs] _<b>nepřišel</b>_ "he did not come"
