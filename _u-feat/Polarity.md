---
layout: feature
title: 'Polarity'
shortdef: 'polarity'
redirect_from:
  - "u/feat/Negativeness.html"
  - "u/feat/Negative.html"
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Neg">Neg</a></td>
  <td><a href="#Pos">Pos</a></td>
</tr>
</table>

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
Language-specific documentation should define under which
circumstances the positive polarity is annotated.

In Czech, for instance, all verbs and adjectives can be negated using the prefix
_ne-_.

In English, verbs are negated using the [particle](u-pos/PART) _not_.
English adjectives can be negated with _not_, or sometimes using prefixes
_(wise &ndash; unwise, probable &ndash; improbable)_,
although the use of prefixes is less productive than in Czech.
In general, only the most grammatical (as opposed to lexical) forms of
negation should receive `Polarity=Neg`.

Note that `Polarity=Neg` is not the same thing as
[PronType]()`=Neg`. For pronouns and other pronominal parts of speech
there is no such binary opposition as for verbs and adjectives. (There
is no such thing as "affirmative pronoun".)

The `Polarity` feature can be also used to distinguish response
[interjections](u-pos/INTJ) _yes_ and _no_.

### <a name="Pos">`Pos`</a>: positive, affirmative

#### Examples

* [cs] _<b>přišel</b>_ “he came”
* [cs] _<b>velký</b>_ “big”
* [en] _<b>yes</b>_

### <a name="Neg">`Neg`</a>: negative

#### Examples

* [cs] _<b>nepřišel</b>_ “he did not come”
* [cs] _<b>nevelký</b>_ “not big”
* [en] _<b>not</b>_
* [en] _<b>nor</b>_
* [en] _<b>no</b>_ as in _no, I don't think so;_ but not as in _we have no bananas_

<!-- Interlanguage links updated Ne 5. května 2024, 18:20:16 CEST -->
