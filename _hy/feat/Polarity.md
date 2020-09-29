---
layout: feature
title: 'Polarity'
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

In Armenian, negation is mostly done using the bound morpheme _չ-,&nbsp;_
and an independent negating particle (equivalent to English “not”)
is rarely seen. Words that can take the morpheme of negation have
the feature of polarity.

It applies to [verbs](VERB), [auxilaries](AUX) and some [particles](PART). See also the related feature [Connegative]().

Note that `Polarity=Neg` is not the same thing as
[PronType]() =`Neg`. For pronouns and other pronominal parts of speech
there is no such binary opposition as for verbs and auxilaries. (There
is no such thing as “affirmative pronoun”.)

Note that in Armenian [adjectives](ADJ), sometimes also [adverbs](ADV) can be negated by adding the negating particle _ոչ&nbsp;_, denote the complement of the original adjective or adverb: e.g. _պաշտոնական&nbsp;_ “official” vs. _ոչ պաշտոնական&nbsp;_ “unofficial” (lit: “not official (something)”).

A set of non-productive prefixes, _ան-,&nbsp; ապ-,&nbsp; դժ-,&nbsp; տ-,&nbsp; չ-,&nbsp;_ can be used for negating a lexicalized set of adjectives, e.g. _անբախտ, ապաշնորհ, դժբախտ, տգեղ, չտես_ “unlucky, dull, unfortunate, ugly, covetous”. We do not mark adjectives for the `Polarity` feature.

Negating nouns are usually limited to those derived from verbs (_չունեցողի, չգրվածները_). We (currently) do not mark them with `Polarity=Neg`. 

### <a name="Pos">`Pos`</a>: positive, affirmative

#### Examples

* _<b>եկավ</b>&nbsp;_ “he came”
* _<b>են</b>&nbsp;_ “they are”
* _<b>պիտի (պետք է)</b> գրեն&nbsp;_ “they must write”

### <a name="Neg">`Neg`</a>: negative

#### Examples

* _<b>չեկավ</b>&nbsp;_ “he did not come”
* _<b>չեն</b>&nbsp;_ “they are not”
* _<b>չպիտի (չպետք է)</b> գրեն&nbsp;_ “they mustn't write”
<!-- Interlanguage links updated Út zář 29 20:43:03 CEST 2020 -->
