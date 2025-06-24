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
  <td><a href="#PRON">PRON</a></td>
  <td><a href="#PROPN">PROPN</a></td>
  <td><a href="#SCONJ">SCONJ</a></td>
  <td><a href="#PART">PART</a></td>
</tr>
</table>


This feature pertains to a multiword expression and indicates the part of speech that the expression would get
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

### <a name="ADJ">`ADJ`</a>: adjective-like expression

#### Examples

* [el] _<b>μη μου άπτου</b>_ (a multiword adjective paraphrasable as “too sensitive”, lit. "not me touch"; the first node is a [PART]())

### <a name="ADP">`ADP`</a>: adposition-like expression

Multiword adpositions occur in many languages. Often they are grammaticalized prepositional phrases.

#### Examples

* [el] _<b>υπό την αιγίδα</b>_ “<b>under the auspices</b>” (here the first node is an [ADP]() of Ancient Greek)
<!-- * [cs] _<b>nehledě na</b> jeho úspěchy_ “<b>disregarding</b> his achievements” (here the first node is a [VERB]())-->

### <a name="ADV">`ADV`</a>: adverb-like expression

#### Examples

* [el] _<b>μια ώρα αρχύτερα</b>_ (a multiword adverb paraphrasable as “as early as possible”; the first node is a [NUM]())

### <a name="CCONJ">`CCONJ`</a>: coordinating conjunction-like expression

#### Examples

* [el] _<b>ακόμη και</b>_ “even the” (here the first node _aκόμη_ is an [ADV]())

### <a name="DET">`DET`</a>: determiner-like expression

#### Examples

* [el] _πέντε δέκα_ “five or ten” (here the first node _five_ is a [NUM]())

### <a name="INTJ">`INTJ`</a>: interjection-like expression

#### Examples

* [el] _τέλος πάντων_ “anyway” (here the first node _τέλος_ is a [NOUN]())

### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression

#### Examples

* [el] _σε περίπτωση που_ “in the case that, if” (here the first node _σε_ is an [ADP]())
* [el] _αν και_ “although” (the first node is an  [SCONJ]() itself, so UPOS = ExtPos)

### <a name="PART">`PART`</a>: particle

#### Examples

* [el]

<!-- Interlanguage links updated So 10. května 2025, 18:14:06 CEST -->
