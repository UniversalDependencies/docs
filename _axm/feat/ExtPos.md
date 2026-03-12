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

This feature differs significantly from all other features: It describes neither the lexical category, nor the inflectional paradigm slot of the token it appears on.
Rather than to the individual token, it pertains to a multiword expression and indicates the part of speech that the expression would get if it were analyzed as a single word.
`ExtPos` is annotated at the head node of the multiword expression. The possible values are taken from the defined [UPOS tags](/u/pos/index.html) and no other
values are allowed (not even at the language-specific level). The main motivation for `ExtPos` is that the multiword expression may behave like a part of speech different from 
the UPOS of the head node; however, `ExtPos` is sometimes used even if it is identical to the UPOS of the head node. Also, it is not strictly necessary that the expression is 
multiword – if one of the words of the expression is omitted by mistake, or if a single word has been coerced into a part of speech different from its lexical one, `ExtPos` may 
be used to signal it.

`ExtPos` is strongly recommended for fixed functional multiword expressions (the head node has one or more children attached via the [fixed]() relation). These should normally
lead to `ExtPos` values `ADP`, `ADV`, `AUX`, `CCONJ`, `DET`, `PRON`, `SCONJ` (the `fixed` relation should not be used for compounds that work like content words). However, 
`ExtPos` is occasionally useful in other situations, too: for example, when a multiword expression acts as a proper noun (although its parts behave like other words) or as
an interjection.

### <a name="ADJ">`ADJ`</a>: adjective-like expression

#### Examples

* _<b>ի բան</b>/i ban_ (a multiword adjective paraphrasable as “useful, necassary”, lit. "to/for something")
* _<b>նախշ ու նիգար</b>/naxš ow nigar_ (a multiword adjective paraphrasable as “tracery, ornamental”, lit. "ornament and figure"; the first node is [NOUN]())

### <a name="ADP">`ADP`</a>: adposition-like expression

Multiword adpositions are often grammaticalized prepositional phrases.

#### Examples

* _<b>ի խէչ</b>/i xēč_ “<b>at; near; next to</b>” (here the first node is the technical head and it is a preposition itself, so UPOS = `ExtPos`)

### <a name="ADV">`ADV`</a>: adverb-like expression

#### Examples

* _<b>ի հօն</b>/i hòn_ (a multiword adverb paraphrasable as “there”; the first node is [ADP]())

### <a name="CCONJ">`CCONJ`</a>: coordinating conjunction-like expression

#### Examples

* _<b>ոչ (ե)թէ</b>/oč (e)t’ē_ “<b>not</b>” (in "not... but") (_ոչ_ = [PART]())

### <a name="DET">`DET`</a>: determiner-like expression

#### Examples

* _<b>ոչ որ</b>/oč or_ “<b>not any</b>” (_ոչ_ = `PART`)

### <a name="PRON">`PRON`</a>: pronoun-like expression

#### Examples

* _<b>ամէն մէկ</b>/amēn mēk_ (a multiword determiner paraphrasable as _everyone_, _ամեն_= [DET]())


### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression

#### Examples

* _<b>թող թէ</b>/t’oġ t’ē_ “<b>even if; apart from</b>” (_թող_ = [VERB])

### <a name="PART">`PART`</a>: particle-like expression

#### Examples

* _<b>կարծեմ թէ</b>/karçem t’ē_ (a multiword particle paraphrasable as “probably, perhaps”; the first node is [VERB]())

