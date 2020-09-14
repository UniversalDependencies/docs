---
layout: base
title:  'Breton UD'
udver: '2'
---

# UD for Breton <span class="flagspan"><img class="flag" src="../../flags/svg/FR-BRE.svg" /></span>

## Tokenisation and Word Segmentation

Tokenisation was originally done using the Apertium morphological analyser for Breton. This joins certain multiword
tokens with spaces as single tokens. Where the number of spaces in the original token matches the number of spaces
in the multiword token, these are split into separate tokens in UD, where the part of speech of the multiword token
is given to the first token, and subsequent tokens are given the part of speech [X]() and attached with the [fixed]() relation.

The most important tokenisation factor is with the words traditionally described as *inflected* or *conjugated* prepositions. Here
we analyse them as contractions of prepositions and pronouns. For example, *dit* is tokenised as a multiword token
constructed from *da* "for" and *it* "you". 

## Morphology

### Tags

* [ADJ]() [ADP]() [ADV]() [AUX]() [CCONJ]() [DET]() [INTJ]() [NOUN]() [NUM]() [PART]() [PRON]() [PROPN]() [PUNCT]() [SCONJ]() [SYM]() [VERB]() [X]()

Some comments on various parts of speech:

* [X]() Used for parts of multiword tokens that do not necessary have a part of speech of their own. 
* [ADP]() Breton has prepositions. Those words often called *inflected* or *conjugated* prepositions are analysed as multiword tokens (see above).
* [PART]() Words described in the literature as *verbal particles* are tagged as [AUX]().

Words tagged as [AUX]():

Copulae:

* *bezañ*

Auxiliary verbs:

* *kaout*
* *ober*

Verbal "particles":

* *a*
* *en ur*
* *en em*
* *e*
* *o*
* *na*
* *ra*

---

### Features

Inherent:

* Gender (in NOUNs)
* NumType
* Polarity
* Case
* PronType
* Reflex
* Poss
* Person
* Gender[psor]

Inflectional:

* Aspect
* Degree
* Gender (other than NOUNs)
* Mood
* Number
* Tense
* VerbForm


## Syntax

The following relation subtypes are used in the Breton data:

* [acl:focus]()
* [acl:relcl]()
* [advmod:neg]()
* [aux:pass]() Auxiliary verb used in the construction of the passive
* [flat:name]()
* [nmod:gen]() Nominal modification with genitive meaning using Celtic-style conjunctive genitive
* [nmod:poss]()
* [nsubj:appos]()
* [nsubj:cop]()
* [obl:agent]() An oblique introduced with *gant* "with" that expresses the agent in a passive construction
* [obl:x]()

---

## Treebanks

There is 1 Breton UD treebank:

  * [Breton-KEB](../treebanks/br_keb/index.html)

