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
however, `ExtPos` is  used in the case of a fixed construct even if it is identical to the UPOS of the head node. 

`ExtPos` is strongly recommended for fixed functional multiword expressions (the head node has one
or more children attached via the [fixed]() relation). These should normally lead to `ExtPos` values
`ADP`, `ADV`, `CCONJ`, `DET`, `PRON`, `SCONJ`, 'INTJ'  because the idea is that the `fixed` relation should not be used for compounds
that work like content words. In Modern Greek,  the "fixed" relation is used for some very rare cases of totally fixed nominals, i.e., nouns and ajdectives as can be seen in the examples given below.  

It should be noted that in the case of Modern Greek, a large number of fixed expressions are inherited from the various historical phases of Greek and, often, the same construct is used in Modern Greek in several historical forms with no change in meaning or function.

### <a name="ADJ">`ADJ`</a>: adjective-like expression
Adjectives modify only nominals and can occur either between the DET and the nominal or with the copula.

#### Examples

* [el] _<b>μη μου άπτου</b>_ (a multiword adjective paraphrasable as “too sensitive”, lit. "not me touch"; the first node is a [PART]())
* [el] _<b>εν λόγω</b>_ “<b>the aforesaid</b>” (lit. "in speech.DAT"; received from the diachrony of Greek, the first node is an [ADP]()) 	



### <a name="ADP">`ADP`</a>: adposition-like expression
Adpositions occur only followed by nominals (whose case is often selected by the adposition) and the whole construct can modify various PoS including verbs.

#### Examples

* [el] _<b>υπό την αιγίδα</b>_ “<b>under the auspices</b>” (here the first node is an [ADP]() of Ancient Greek)
<!-- * [cs] _<b>nehledě na</b> jeho úspěchy_ “<b>disregarding</b> his achievements” (here the first node is a [VERB]())-->

### <a name="ADV">`ADV`</a>: adverb-like expression
Adverbs can modify both nouns and nominals.

#### Examples

* [el] να φύγει _<b>μια ώρα αρχύτερα</b>_ (lit. "to leave one our earlier", the multiword adverb is paraphrasable as “as early as possible”; the first node of the fixed adverb is a [NUM]())
  * [el] ενεργεί _<b>εκ προθέσεως</b>_ (lit. "acts from intention", the multiword adverb is paraphrasable as “intentionally”; the first node of the fixed adverb is an [ADP]() from the diachrony of Greek)
  * [el] αυτή η _<b>εκ προθέσεως</b>_ ενέργεια (lit. "this the from intention action", the multiword adverb is paraphrasable as “intentional”; the first node of the fixed adverb is an [ADP]() from the diachrony of Greek)

### <a name="CCONJ">`CCONJ`</a>: coordinating conjunction-like expression
A CCONJ conjoins similar phrasal structures, e.g., two main clauses, two subordinated clauses, etc

#### Examples

* [el] _<b>ακόμη και</b>_ “even the” (here the first node _aκόμη_ is an [ADV]())

### <a name="DET">`DET`</a>: determiner-like expression
A determiner specifies a nominal.

#### Examples

* [el] _πέντε δέκα_ “five or ten” (here the first node _five_ is a [NUM]())

### <a name="INTJ">`INTJ`</a>: interjection-like expression
An interjection can occur independenly.

#### Examples

* [el] _τέλος πάντων_ “anyway” (here the first node _τέλος_ is a [NOUN]())

### <a name="SCONJ">`SCONJ`</a>: subordinator-like expression
An SCONJ introduces a subordinated clause.

#### Examples

* [el] _σε περίπτωση που_ “in the case that, if” (here the first node _σε_ is an [ADP]())
* [el] _αν και_ “although” (the first node is an  [SCONJ]() itself, so UPOS = ExtPos)

### <a name="PART">`PART`</a>: particle

#### Examples

* [el]


<!-- Interlanguage links updated Po 29. června 2026, 17:58:06 CEST -->
