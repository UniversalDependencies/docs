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
  <td><a href="#AUX">AUX</a></td>
  <td><a href="#CCONJ">CCONJ</a></td>
  <td><a href="#DET">DET</a></td>
  <td><a href="#INTJ">INTJ</a></td>
  <!--td><a href="#NOUN">NOUN</a></td-->
  <!--td><a href="#NUM">NUM</a></td-->
  <td><a href="#PRON">PRON</a></td>
  <td><a href="#PROPN">PROPN</a></td>
  <td><a href="#SCONJ">SCONJ</a></td>
  <td><a href="#PART">PART</a></td>
  <!--td><a href="#VERB">VERB</a></td-->
</tr>
</table>

This feature differs significantly from all other features: It describes neither the lexical category,
nor the inflectional paradigm slot of the token it appears on. Rather than to the individual token,
it pertains to a multiword expression and indicates the part of speech that the expression would get
if it were analyzed as a single word. `ExtPos` is annotated at the head node of the multiword
expression. The possible values are taken from the defined [UPOS tags](/u/pos/index.html) and no other
values are allowed (not even at the language-specific level). The main motivation for `ExtPos` is that
the multiword expression may behave like a part of speech different from the UPOS of the head node;
however, `ExtPos` is sometimes used even if it is identical to the UPOS of the head node. Also, it is
not strictly necessary that the expression is multiword – if one of the words of the expression is
omitted by mistake, or if a single word has been coerced into a part of speech different from its
lexical one, `ExtPos` may be used to signal it.

`ExtPos` is strongly recommended for fixed functional multiword expressions (the head node has one
or more children attached via the [fixed]() relation). These should normally lead to `ExtPos` values
`ADP`, `ADV`, `AUX`, `CCONJ`, `DET`, `PRON`, `SCONJ` (the `fixed` relation should not be used for compounds
that work like content words). However, `ExtPos` is occasionally useful in other situations, too:
for example, when a multiword expression acts as a proper noun (although its parts behave like other
words) or as an interjection.

### <a name="ADJ">`ADJ`</a>: adjective-like expression

#### Examples

* _<b>շատ մը</b>_ (a multiword adjective paraphrasable as “a lot of”, lit. "many some"; here the first node is the technical head and it is an adjective itself, so UPOS = `ExtPos`)

### <a name="ADP">`ADP`</a>: adposition-like expression

Multiword adpositions are often grammaticalized prepositional phrases.

#### Examples

* _<b>ի տարբերութիւն</b>_ “<b>as opposed to</b>” (here the first node is the technical head and it is a preposition itself, so UPOS = `ExtPos`)
* _<b>նախ քան</b>_ “before” (_նախ_ = [ADV]())

### <a name="ADV">`ADV`</a>: adverb-like expression

#### Examples

* _<b>առ նուազն</b>_ (a multiword adverb paraphrasable as “at least”; the first node is [ADP]())

### <a name="CCONJ">`CCONJ`</a>: coordinating conjunction-like expression

#### Examples

* _<b>ինչպէս նաեւ</b>_ “not only” (_ինչպէս_ = [ADV]())

### <a name="DET">`DET`</a>: determiner-like expression

#### Examples

* _<b>ոչ մի</b>_ “not any” (_ոչ_ = [PART]())

### <a name="PRON">`PRON`</a>: pronoun-like expression

#### Examples

* _<b>ամէն ինչ</b>_ (a multiword determiner paraphrasable as _everything_, _ամէն_= [DET]())

### <a name="PROPN">`PROPN`</a>: proper noun-like expression

#### Examples

* _<b>Camilla՚s Garden</b>_ (_<b>Camilla_ = [X]())

### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression

#### Examples

* _<b>այնպէս որ</b>_ “so, therefore” (_այնպէս_ = [ADV]())

### <a name="PART">`PART`</a>: particle-like expression

#### Examples

* _<b>դժուար թէ</b>_ (a multiword particle paraphrasable as “hardly”; the first node is [ADJ]())

### <a name="INTJ">`INTJ`</a>: interjection-like expression

#### Examples

* _<b>ափսոս որ</b>_ (a multiword interjection paraphrasable as “...”; the first node is [INTJ]())
  
<!-- Interlanguage links updated Po 29. června 2026, 17:58:07 CEST -->
