---
layout: feature
title: 'Polarity'
shortdef: 'polarity
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Neg">Neg</a></td>
</tr>
</table>

In Modern Greek is a language that negates using bound
morphemesnegative, so polarity is  a feature of [verbs](u-pos/VERB), e.g., ξεστρίβω "unwind",
[adjectives](u-pos/ADJ), e.g. άνοστος "tasteless", [adverbs](u-pos/ADV), e.g., ξεδιάντροπα "unshamefully" and
[nouns](u-pos/NOUN), e.g, ανικανότητα "inability".

The `Polarity` feature can be also used to distinguish response
[interjections](u-pos/INTJ) _yes_ and _no_.

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
* [en] _<b>no</b>_ as in _no, I don't think so;_ but not as in _we have no bananas_
<!-- Interlanguage links updated So kvě 14 19:02:32 CEST 2022 -->



Hint: *όχι" / *ochi* "no/not" should be tagged as [PART]() and <code>Polarity=Neg</code> if it is used like the English 
particle *not*, e.g., *φέρε τον αναπτήρα, όχι τα σπίρτα* / *fere ton anaptira, ochi ta spirta* "fetch the lighter, not the matches".
*Όχι* / *ochi* "no/not" is typically used as an interjection <code>INTJ</code> with <code>Polarity=Neg</code>.
