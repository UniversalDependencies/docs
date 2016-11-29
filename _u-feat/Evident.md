---
layout: feature
title: 'Evident'
shortdef: 'evidentiality'
redirect_from:
  - "u/feat/Evidentiality.html"
udver: '2'
---

Polarity is typically a feature of [verbs](u-pos/VERB),
[adjectives](u-pos/ADJ), sometimes also [adverbs](u-pos/ADV) and
[nouns](u-pos/NOUN) in languages that negate using bound
morphemes.
In languages that negate using a function word, `Polarity` is used to mark
that function word, unless it is a pro-form already marked with
`PronType=Neg` (see below).

Positive polarity (affirmativeness) is rarely, if at all, encoded using overt
morphology. The feature value `Polarity=Pos` is usually used to signal that a lemma
has negative forms but this particular form is not negative. Using the feature
in such cases is somewhat optional for words that can be negated but rarely are.

For instance, all Czech verbs and adjectives can be negated using the prefix
_ne-_. In theory, all nouns can be negated too, with the meaning “anything
except the entities denotable by the original noun”. However, negated nouns
are rare and it is not necessary to annotate every positive noun with
`Polarity=Pos`. Language-specific documentation should define under which
circumstances the positive polarity is annotated.

In English, verbs are negated using the [particle](u-pos/PART) _not_ and
adjectives are also negated using prefixes, although the process is less
productive than in Czech _(wise &ndash; unwise, probable &ndash; improbable)_.

Note that `Polarity=Neg` is not the same thing as
[PronType]()`=Neg`. For pronouns and other pronominal parts of speech
there is no such binary opposition as for verbs and adjectives. (There
is no such thing as "affirmative pronoun".)

The `Polarity` feature can be also used to distinguish response
[interjections](u-pos/INTJ) _yes_ and _no_.

Note: `Polarity` was called `Negative` in the version 1 of UD guidelines and it is renamed in version 2.

### `Pos`: positive, affirmative

#### Examples

* [cs] _<b>přišel</b>_ “he came”
* [cs] _<b>velký</b>_ “big”
* [en] _<b>yes</b>_

### `Neg`: negative

#### Examples

* [cs] _<b>nepřišel</b>_ “he did not come”
* [cs] _<b>nevelký</b>_ “not big”
* [en] _<b>not</b>_
* [en] _<b>no</b>_ as in _no, I don't think so;_ but not as in _we have no bananas_
