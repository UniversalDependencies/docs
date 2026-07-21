---
layout: feature
title: 'ExtPos'
shortdef: 'external part of speech'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#ADJ">ADJ</a></td>
  <td><a href="#ADP">ADP</a></td>
  <td><a href="#ADV">ADV</a></td>
  <td><a href="#CCONJ">CCONJ</a></td>
  <td><a href="#DET">DET</a></td>
  <!--td><a href="#NOUN">NOUN</a></td-->
  <!--td><a href="#NUM">NUM</a></td-->
  <td><a href="#PRON">PRON</a></td>
  <td><a href="#PROPN">PROPN</a></td>
  <td><a href="#SCONJ">SCONJ</a></td>
  <td><a href="#PART">PART</a></td>
  <!--td><a href="#VERB">VERB</a></td-->
</tr>
</table>

This feature differs significantly from all other features: it describes neither the lexical category, nor the inflectional paradigm slot of the token it appears on. Rather than to the individual token, it pertains to a multiword expression and indicates the part of speech that the expression would get if it were analyzed as a single word. `ExtPos` is annotated at the head node of the multiword expression. The possible values are taken from the defined [UPOS tags](/u/pos/index.html) and no other values are allowed (not even at the language-specific level). The main motivation for `ExtPos` is that the multiword expression may behave like a part of speech different from the UPOS of the head node; however, `ExtPos` is sometimes used even if it is identical to the UPOS of the head node. Also, it is not strictly necessary that the expression is multiword – if one of the words of the expression is omitted by mistake, or if a single word has been coerced into a part of speech different from its lexical one, `ExtPos` may be used to signal it.

`ExtPos` is strongly recommended for fixed functional multiword expressions (the head node has one or more children attached via the [fixed]() relation). These should normally lead to `ExtPos` values `ADP`, `ADV`, `AUX`, `CCONJ`, `DET`, `PRON`, `SCONJ` (the `fixed` relation should not be used for compounds that work like content words). However, `ExtPos` is occasionally useful in other situations, too: for example, when a multiword expression acts as a proper noun (although its parts behave like other words) or as an interjection.

### <a name="ADJ">`ADJ`</a>: adjective-like expression

#### Examples

* _<b>ի բան</b>_/_<b>i ban</b>_ (a multiword adjective paraphrasable as “useful, necessary”, lit. “to/for something”)
* _<b>նախշ ու նիգար</b>_/_<b>naxš ow nigar</b>_ (a multiword adjective paraphrasable as “ornamental”, lit. “ornament and figure”; the first node _նախշ_/_naxš_ is [NOUN]())

### <a name="ADP">`ADP`</a>: adposition-like expression

Multiword adpositions are often grammaticalized prepositional phrases.

#### Examples

* _<b>ի խէչ</b>_/_<b>i xēč</b>_ “at; near; next to” (here the first node is the technical head and it is a preposition itself, so UPOS = `ExtPos`)

### <a name="ADV">`ADV`</a>: adverb-like expression

#### Examples

* _<b>ի հօն</b>_/_<b>i hòn</b>_ (a multiword adverb paraphrasable as “there”; _ի_/_i_ = [ADP]())

### <a name="CCONJ">`CCONJ`</a>: coordinating conjunction-like expression

#### Examples

* _<b>ոչ (ե)թէ</b>_/_<b>oč (e)t’ē</b>_ “not” (in “not ... but”) (_ոչ_/_oč_ = [PART]())

### <a name="DET">`DET`</a>: determiner-like expression

#### Examples

* _<b>ոչ որ</b>_/_<b>oč or</b>_ “not any” (_ոչ_/_oč_ = [PART]())

### <a name="PRON">`PRON`</a>: pronoun-like expression

#### Examples

* _<b>ամէն մէկ</b>_/_<b>amēn mēk</b>_ (a multiword determiner paraphrasable as “everyone”, _ամեն_/_amēn_ = [DET]())

### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression

#### Examples

* _<b>թող թէ</b>_/_<b>t’oġ t’ē</b>_ “even if; apart from” (_թող_/_t’oġ_ = [VERB])

### <a name="PART">`PART`</a>: particle-like expression

#### Examples

* _<b>կարծեմ թէ</b>_/_<b>karçem t’ē</b>_ (a multiword particle paraphrasable as “probably, perhaps”; the first node _կարծեմ_/_karçem_ is [VERB]()).
<!-- Interlanguage links updated Út 30. června 2026, 10:58:52 CEST -->
