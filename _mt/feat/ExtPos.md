---
layout: feature
title: 'ExtPos'
shortdef: 'external part of speech'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#ADP">ADP</a></td>
  <td><a href="#ADV">ADV</a></td>
  <td><a href="#CCONJ">CCONJ</a></td>
  <td><a href="#DET">DET</a></td>
  <td><a href="#INTJ">INTJ</a></td>
  <td><a href="#NOUN">NOUN</a></td>
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

In Maltese, `ExtPos` is used for the following types of fixed expressions.

### <a name="ADP">`ADP`</a>: adposition-like expression

Multiword adpositions occur in many languages. Often they are grammaticalized prepositional phrases.

#### Examples

* [mt] _<b>permezz ta'</b> elezzjoni_ “<b>by means of</b> an election".


### <a name="ADV">`ADV`</a>: adverb-like expression

#### Examples

* [mt] _<b>in ġenerali</b>_ "in general".
* [mt] _<b>x' aktarx</b>_ "rather (lit. what more)"

### <a name="CCONJ">`CCONJ`</a>: coordinating conjunction-like expression

#### Examples

* [mt] _<b>kif ukoll</b>_ “as well as”. Note _kif_ is an interrogative `PRON` and _ukoll_ is a focus particle with UPOS=`ADV`.

### <a name="PART">`PART`</a>: negator

#### Examples
* [mt] _...s'issa għadhom <b>lanqas biss</b> irċevew acknowledgment tat-talba tagħha._ "... as of today, they still have<b>n't even</b> received the acknowledgment of her request."

### <a name="PROPN">`PROPN`</a>: proper noun-like expression

#### Examples

* [cs] _Jeho kniha <b>Most přes řeku Kwai</b> byla zfilmována._ “His book <b>The Bridge over the River Kwai</b> was made into a movie.” (_Most_ = [NOUN]())

### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression

#### Examples
In Maltese, this is the most common type of fixed expression, typically consisting of an `ADP` and a complementizer, most commonly _li_, but also _ma_.

* [mt] _<b>Wara li</b> kienet ħarġet l-aħbar sirna nafu..._ "<b>After</b> the news item came out, we came to learn..."
* [mt] _<b>Filwaqt li</b> ma nikkunsidrax lili nnifsi nisrani..._ "<b>while</b> I do not consider myself a Christian..." Note that _filwaqt_ on its own is also a `SCONJ`.
* [mt] _<b>Hekk kif</b> il-prezz tal-fuel fil-pajjiż din il-ġimgħa laħaq livelli rekord._ "Just as the price of fuel in the country reached record levels this week." Note that _hekk_ is normally an `ADV` and _kif_ is an interrogative `PRON`.

This also includes the circumstantial `SCONJ` that consists of a `PRON` and the `CCONJ` _u_:
* [mt] _Niftakar <b>jien u</b> nilbisha ħassejtha tiżloq fuqi._ "I remember how <b>when I</b> put it on, it felt slippery on me.
<!-- Interlanguage links updated St 12. listopadu 2025, 09:20:14 CET -->
