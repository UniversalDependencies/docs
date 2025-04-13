---
layout: feature
title: 'Polarity'
redirect_from: "cs/feat/Negative.html"
shortdef: 'whether the word can be or is negated'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Neg">Neg</a></td>
  <td><a href="#Pos">Pos</a></td>
</tr>
</table>

In Czech, negation is mostly done using the bound morpheme _ne-,_
and an independent negating particle (equivalent to English “not”)
is rarely seen. Words that can take the morpheme of negation have
the feature of polarity.

It applies to [verbs](cs-pos/VERB),
[adjectives](cs-pos/ADJ), sometimes also [adverbs](cs-pos/ADV).

Note that `Polarity=Neg` is not the same thing as
[PronType]()`=Neg`. For pronouns and other pronominal parts of speech
there is no such binary opposition as for verbs and adjectives. (There
is no such thing as “affirmative pronoun”.)

Since UD release 2.15, `Polarity` is not used with nouns, although in principle every noun can be negated (_plavec_ “swimmer” vs. _neplavec_ “non-swimmer”).
Negative nouns will now have negative lemmas (previously some of them had positive lemmas and `Polarity=Neg`, but it was not applied consistently).



### <a name="Pos">`Pos`</a>: positive, affirmative

#### Examples

* _<b>přišel</b>&nbsp;_ “he came”
* _<b>rozumný</b>&nbsp;_ “wise”
* _<b>pěkně</b>&nbsp;_ “nicely”

### <a name="Neg">`Neg`</a>: negative

#### Examples

* _<b>nepřišel</b>&nbsp;_ “he did not come”
* _<b>nerozumný</b>&nbsp;_ “unwise”
* _<b>nepěkně</b>&nbsp;_ “nastily”

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:09:59 CET -->
