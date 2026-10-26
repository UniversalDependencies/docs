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

In Western Armenian, negation is mostly expressed using the bound morpheme _չ-_/_č-_.
Words that can take the morpheme of negation are annotated with the feature `Polarity`.

It applies to [verbs](VERB), [auxiliaries](AUX) and some [particles](PART). See also the related feature [Connegative]().

Note that `Polarity=Neg` is not the same thing as [PronType]() =`Neg`. For pronouns and other pronominal parts of speech there is no such binary opposition as for verbs and auxiliaries. (There is no such thing as “affirmative pronoun”.)

Note that in Armenian [adjectives](ADJ), sometimes also [adverbs](ADV) can be negated by adding the negating particle _ոչ_, expressing the negation of the original adjective or adverb։ e.g. _պաշտօնական_/_paštònakan_ “official” vs. _ոչ պաշտօնական_/_oč paštònakan_ “unofficial” (lit. “not official”).

A set of non-productive prefixes, _ան-_/_an-_, _ապ-_/_ap-_, _դժ-_/_dž-_, _տ-_/_t-_, _չ-_/_č-_ can be used for negating a lexicalized set of adjectives, e.g. _անտուն_/_antown_ “homeless”, _ապաշնորհ_/_apašnorh_“ungrateful”, _դժբախտ_/_džbaxt_ “unfortunate”, _տգեղ_/_tgeġ_ “ugly”, _չտես_/_čtes_ “covetous”. We do not mark adjectives for the `Polarity` feature.

Negated nouns are usually limited to those derived from verbs (_չունեցողներուն_/_čownecʼoġnerown_ “(for) those who doesn't have (smth.)”, _չհարցուցածը_/_čharcʼowcʼaçë_ “what wasn't asked, the unasked question”). We do not mark them with `Polarity=Neg`.

### <a name="Pos">`Pos`</a>: positive, affirmative

#### Examples

* _<b>եկաւ</b>_/_ekaw_ “he came”
* _<b>են</b>_/_en_ “they are”
* _<b>պիտի (պէտք է)</b> գրեն_/_<b>piti (pētkʼ ē)</b> gren_ “they must write”

### <a name="Neg">`Neg`</a>: negative

#### Examples

* _<b>չեկաւ</b>_/_čekaw_ “he did not come”
* _<b>չեն</b>_/_čen_ “they are not”
* _<b>չպիտի (չպէտք է)</b> գրեն_/_<b>čpiti (čpētkʼ ē)</b> gren_ “they mustn't write”
<!-- Interlanguage links updated Út 30. června 2026, 10:59:12 CEST -->
