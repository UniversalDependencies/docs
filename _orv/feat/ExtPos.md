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
  <td><a href="#INTJ">INTJ</a></td>
  <td><a href="#NOUN">NOUN</a></td>
  <td><a href="#NUM">NUM</a></td>
  <td><a href="#PART">PART</a></td>
  <td><a href="#PRON">PRON</a></td>
  <td><a href="#PROPN">PROPN</a></td>
  <td><a href="#SCONJ">SCONJ</a></td>
  <td><a href="#VERB">VERB</a></td>
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

`ExtPos` feature is used in fixed functional multiword expressions (the head node has one
or more children attached via the [fixed]() relation). However, `ExtPos` is occasionally useful in other situations, too:
for example, when a multiword expression acts as a proper noun (although its parts behave like other
words) or as an interjection.

### <a name="ADJ">`ADJ`</a>: adjective-like expression

#### Examples

### <a name="ADP">`ADP`</a>: adposition-like expression

#### Examples

* _<b>як то</b>_ “that” (_як_ = [SCONJ](orv-pos/SCONJ))  

### <a name="ADV">`ADV`</a>: adverb-like expression

The multiword parentheticals are also considered as adverb-like expressions.

#### Examples

### <a name="CCONJ">`CCONJ`</a>: coordinating conjunction-like expression

#### Examples

* _<b>то естъ</b>_ “i. e.” (_то_ = [PRON](orv-pos/PRON))  
* _<b>а и</b>_ “and” (_а_ = [CCONJ](orv-pos/CCONJ))  
* _<b>а любо</b>_ “and” (_а_ = [CCONJ](orv-pos/CCONJ))  
* _<b>а также (и)</b>_ “and also” (_а_ = [CCONJ](orv-pos/CCONJ))  
* _<b>яко и</b>_ “and” (_яко_ = [SCONJ](orv-pos/SCONJ))  

### <a name="DET">`DET`</a>: determiner-like expression

#### Examples

### <a name="INTJ">`INTJ`</a>: interjection-like expression

#### Examples

### <a name="NOUN">`NOUN`</a>: noun-like expression

#### Examples

### <a name="NUM">`NUM`</a>: numeral-like expression

#### Examples

### <a name="PART">`PART`</a>: particle-like expression

#### Examples

### <a name="PRON">`PRON`</a>: pronoun-like expression

#### Examples

### <a name="PROPN">`PROPN`</a>: proper noun-like expression

#### Examples

### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression

#### Examples

* _<b>што жъ</b>_ “that” (_што_ = [SCONJ](orv-pos/SCONJ))  
* _<b>заню ж</b>_ “that” (_заню_ = [SCONJ](orv-pos/SCONJ))
  
### <a name="VERB">`VERB`</a>: verb-like (predicative) expression

#### Examples

<!-- Interlanguage links updated So 10. května 2025, 18:14:06 CEST -->
