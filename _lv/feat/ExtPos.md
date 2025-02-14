---
layout: feature
title: 'ExtPos'
shortdef: 'external part of speech'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <!--<td><a href="#ADJ">ADJ</a></td>-->
  <!--<td><a href="#ADP">ADP</a></td>-->
  <td><a href="#ADV">ADV</a></td>
  <td><a href="#CCONJ">CCONJ</a></td>
  <!--<td><a href="#DET">DET</a></td>
  <td><a href="#INTJ">INTJ</a></td>-->
  <!--td><a href="#NOUN">NOUN</a></td-->
  <!--td><a href="#NUM">NUM</a></td-->
  <td><a href="#PART">PART</a></td>
  <!--<td><a href="#PRON">PRON</a></td>
  <td><a href="#PROPN">PROPN</a></td>
  <td><a href="#SCONJ">SCONJ</a></td>-->
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

Currently in Latvian `ExtPos` is used for fixed functional multiword expressions (the head node has
one or more children attached via the [fixed]() relation). 


### <a name="ADV">`ADV`</a>: adverb-like expression

#### Examples

* _process aizsākās <b>vairāk kā</b> 50 gadus atpakaļ_ "process started more
  than 50 years ago" (_vairāk_ = [ADV](), _kā_ = [SCONJ]())

### <a name="CCONJ">`CCONJ`</a>: coordinating conjunction-like expression

#### Examples

* _Koki dod ēnu, <b>kā arī</b> labi izskatās._ "Trees give shade and look
  good." (_kā_ = [SCONJ](), _arī_ = [CCONJ]())


### <a name="PART">`PART`</a>: multiword particle

#### Examples

* _te bija <b>it kā</b> maza būdiņa_ "there was ??? a little hut". _it 
kā_ gives all this sentence a flavour of uncertainty - maybe the hut
was small, maybe the hut wasn't that small, maybe it wasn't hut at all
but just an old wreck, who knows, how the situation will look, when
the narrator comes closer.
* _dāmas kleitās kā no žurnāla vāka, <b>diez vai</b> pašas šuvušas_ 
"ladies in dresses like from the magazine cover, ??? sewn by
themselves". Here _diez vai_ let's us know that narrator doubts if the
ladies made their dreses on their own - maybe they did, maybe not, and
narrator somewhat favors the hypothesis that they didn't.
- _nekas <b>it kā</b> nebija noticis, knapi turējos kājās_ "nothing ???
hadn't happened, [I] could barely stand on my legs". _It kā_ again
gives uncertainty, and the continuation of the sentence further builds
on that element of doubt - if narrator struggles to stand, then it is
even more likely that narrator's judgement about how nothing happened
is wrong.


<!--
### <a name="ADJ">`ADJ`</a>: adjective-like expression

#### Examples

* [sv] _<b>före detta</b>_ (a multiword adjective paraphrasable as “former”, lit. "before that"; the first node is [ADV]())

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
-->

<!-- Interlanguage links updated Po 11. listopadu 2024, 20:09:41 CET -->
