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
[adjectives](cs-pos/ADJ), sometimes also [adverbs](cs-pos/ADV) and
even [nouns](cs-pos/NOUN).
(Most nouns have just `Polarity=Pos`;
deverbative nouns can have also `Polarity=Neg`.
Occasionally, other nouns can be negated to denote the complement of the original noun:
_plavec_ “swimmer” vs. _neplavec_ “non-swimmer”.)

Note that `Polarity=Neg` is not the same thing as
[PronType]()`=Neg`. For pronouns and other pronominal parts of speech
there is no such binary opposition as for verbs and adjectives. (There
is no such thing as “affirmative pronoun”.)

### <a name="Pos">`Pos`</a>: positive, affirmative

#### Examples

* _<b>přišel</b>&nbsp;_ “he came”
* _<b>rozumný</b>&nbsp;_ “wise”
* _<b>pěkně</b>&nbsp;_ “nicely”
* _<b>přijetí</b>&nbsp;_ “acceptance”

### <a name="Neg">`Neg`</a>: negative

#### Examples

* _<b>nepřišel</b>&nbsp;_ “he did not come”
* _<b>nerozumný</b>&nbsp;_ “unwise”
* _<b>nepěkně</b>&nbsp;_ “nastily”
* _<b>nepřijetí</b>&nbsp;_ “non-acceptance, rejection”
<!-- Interlanguage links updated Út zář 29 18:40:58 CEST 2020 -->
