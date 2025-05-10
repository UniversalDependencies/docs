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
  <td><a href="#DET">DET</a></td>
  <!--<td><a href="#INTJ">INTJ</a></td>-->
  <!--td><a href="#NOUN">NOUN</a></td-->
  <!--td><a href="#NUM">NUM</a></td-->
  <td><a href="#PART">PART</a></td>
  <!--<td><a href="#PRON">PRON</a></td>-->
  <!--<td><a href="#PROPN">PROPN</a></td>-->
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
however, `ExtPos` is sometimes used even if it is identical to the UPOS of the head node. Also, it is
not strictly necessary that the expression is multiword – if one of the words of the expression is
omitted by mistake, or if a single word has been coerced into a part of speech different from its
lexical one, `ExtPos` may be used to signal it.

Currently in Latgalian `ExtPos` is planned to be used exactly the same as in Latvian, i.e., for fixed
functional multiword expressions (the head node has one or more children attached via the [fixed]()
relation). However, this may change when more sentences will be annotated.



### <a name="ADV">`ADV`</a>: adverb-like expression

#### Examples

* _process aizasuoce <b>vaira kai</b> 50 godu atpakaļ_ "process started more
  than 50 years ago" (_vaira_ = [ADV](), _kai_ = [SCONJ]())


### <a name="CCONJ">`CCONJ`</a>: coordinating conjunction-like expression

#### Examples

* _Kūki dūd pakriesli, <b>kai ari</b> labi izaver._ "Trees give shade and look
  good." (_kai_ = [CCONJ](), _ari_ = [PART]())


### <a name="DET">`DET`</a>: determiner-like expression

#### Examples

*  _es dzierdieju <b>taidu kai</b> bolsu_ "I heard something of a voice"
  (_taidu_ = [DET](), _kai_ = [SCONJ]())


### <a name="PART">`PART`</a>: multiword particle

All words in the construction are [PART]().

#### Examples

* _ite beja <b>it kai</b> moza butkeņa_ "there was ??? a little hut". _it 
kai_ gives all this sentence a flavour of uncertainty - maybe the hut
was small, maybe the hut wasn't that small, maybe it wasn't hut at all
but just an old wreck, who knows, how the situation will look, when
the narrator comes closer.
* _damys suknēs kai nu žurnala vuoka, <b>nazy voi</b> pošys šyvušys_ 
"ladies in dresses like from the magazine cover, ??? sewn by
themselves". Here _nazy voi_ let's us know that narrator doubts if the
ladies made their dreses on their own - maybe they did, maybe not, and
narrator somewhat favors the hypothesis that they didn't.
- _nikas <b>it kai</b> nabeja nūtics, knapi turiejūs kuojuos_ "nothing ???
hadn't happened, [I] could barely stand on my legs". _It kai_ again
gives uncertainty, and the continuation of the sentence further builds
on that element of doubt - if narrator struggles to stand, then it is
even more likely that narrator's judgement about how nothing happened
is wrong.


### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression

#### Examples

* _Es navarieju tikt jam leidza, <b>partū ka</b> jis skrēja puoruok mudri._
"I wasn't able to keep up, because he run too fast." (_partū_ = [ADV](),
_ka_ = [SCONJ]())
* _jis atsagrīze, <b>koč i</b> tys nabeja vajadzeigs_ "he returned even
though it was not necessary" (_koč_ = [SCONJ](), _i_ = [PART]())
<!-- Interlanguage links updated So 10. května 2025, 18:14:06 CEST -->
