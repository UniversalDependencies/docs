---
layout: feature
title: 'ExtPos'
shortdef: 'external part of speech'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <!--td><a href="#ADJ">ADJ</a></td-->
  <td><a href="#ADP">ADP</a></td>
  <td><a href="#ADV">ADV</a></td>
  <td><a href="#CCONJ">CCONJ</a></td>
  <td><a href="#DET">DET</a></td>
  <td><a href="#INTJ">INTJ</a></td>
  <!--td><a href="#NOUN">NOUN</a></td-->
  <!--td><a href="#NUM">NUM</a></td-->
  <td><a href="#PRON">PRON</a></td>
  <td><a href="#PROPN">PROPN</a></td>
  <td><a href="#SCONJ">SCONJ</a></td>
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
however, `ExtPos` is sometimes used even if it is identical to the UPOS of the head node.

`ExtPos` is strongly recommended for fixed functional multiword expressions (the head node has one
or more children attached via the [fixed]() relation). These should normally lead to `ExtPos` values
`ADP`, `ADV`, `CCONJ`, `DET`, `PRON`, `SCONJ` (the `fixed` relation should not be used for compounds
that work like content words). However, `ExtPos` is occasionally useful in other situations, too:
for example, when a multiword expression acts as a proper noun (although its parts behave like other
words) or as an interjection.

### <a name="ADP">`ADP`</a>: adposition-like expression

Multiword adpositions occur in many languages. Often they are grammaticalized prepositional phrases.

#### Examples

* [cs] _<b>na rozdíl ode</b> mne_ “<b>in contrast to</b> me” (here the first node is the technical head and it is a preposition itself, so UPOS = `ExtPos`)
* [cs] _<b>nehledě na</b> jeho úspěchy_ “<b>disregarding</b> his achievements” (here the first node is a [VERB]())

### <a name="ADV">`ADV`</a>: adverb-like expression

#### Examples

* [en] _<b>by and large</b>_ (a multiword adverb paraphrasable as “altogether”; the first node is [ADP]())

### <a name="CCONJ">`CCONJ`</a>: coordinating conjunction-like expression

#### Examples

* [fr] _<b>ainsi que</b>_ “as well as” (_ainsi_ = [ADV]())

### <a name="DET">`DET`</a>: determiner-like expression

#### Examples

* [fr] _le volcan émet <b>de la</b> vapeur_ “the volcano emits steam” (_de_ = `ADP`)

### <a name="INTJ">`INTJ`</a>: interjection-like expression

#### Examples

* [es] _¡<b>Por Dios</b>!_ “for God’s sake” (_por_ = `ADP`, _Dios_ = [PROPN]())

### <a name="PRON">`PRON`</a>: pronoun-like expression

#### Examples

* [en] _<b>each other</b>_ (_each_ = [DET]())

### <a name="PROPN">`PROPN`</a>: proper noun-like expression

#### Examples

* [cs] _Jeho kniha <b>Most přes řeku Kwai</b> byla zfilmována._ “His book <b>The Bridge over the River Kwai</b> was made into a movie.” (_Most_ = [NOUN]())

### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression

#### Examples

* [fr] _<b>bien que</b>_ “although” (_bien_ = `ADV`)

<!-- Interlanguage links updated Ne 5. května 2024, 18:19:56 CEST -->
