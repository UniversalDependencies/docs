---
layout: base
title:  'Tagalog UD'
udver: '2'
---

# UD for Tagalog <span class="flagspan"><img class="flag" src="../../flags/svg/PH.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace. Exceptions:
  * compound words separated by a hyphen are tokenized independently (e.g. *bukod*  + *-* + *tangi*) if each word can be taken as a separate semantic expression forming a whole
  * contractions are tokenized independently whenever possible (e.g. *iba* + *'t*)
  * occurrences of the linker *-ng* are annotated as multi-word tokens, (e.g. surface form: *maraming*, underlying words: *marami* + *-ng*)
* Words with spaces do not regularly occur in Tagalog.

## Morphology

### Tags

* Tagalog uses 16 out of the 17 universal POS tags. The auxiliary ([AUX](https://universaldependencies.org/u/pos/AUX_.html)) tag is not used, as equivalent function words in Tagalog are classified as verbs or adverbs, and no copulas exist.
  * Note: the UD_Tagalog-TRG treebank incorrectly labels the verb *may* "there is" as [AUX](https://universaldependencies.org/u/pos/AUX_.html). This will be updated in a future release. 
* Several word types are classified as particles ([PART](https://universaldependencies.org/u/pos/PART.html)). These fall under two categories:
  * grammatical particles (the inversion marker *ay*; and relative or linking markers *na* and *-ng*)
  * lexical particles (the question marker *ba*, the negation marker *hindi*, fillers such as *e*, *o*, and *a*, and the honorific *po*)
* Quantifiers (including the pluralizer *mga* and indefinite quantifiers such as *marami* "many" and *ilan* "some") are classified as determiners ([DET](https://universaldependencies.org/u/pos/DET.html)). Possessive pronouns are classified under pronouns ([PRON](https://universaldependencies.org/u/pos/PRON.html)) since several identical word forms are also used to indicate the objective case.
  * Note: the UD_Tagalog-TRG treebank incorrectly labels the adposition *ang* as [DET](https://universaldependencies.org/u/pos/DET.html). This will be updated in a future release.
* Case-marking function words are tagged as adpositions ([ADP](https://universaldependencies.org/u/pos/ADP.html)). These include:
  * the topic marker *ang*
  * the non-topic marker *ng*
  * oblique markers such as *sa*, *mula sa*, *para sa*, *sa pamamamgitan ng*, etc.


### Features

* To be determined.


## Syntax

### Core Arguments and Adjuncts

* Tagalog uses the (Austronesian voice system)[https://en.wikipedia.org/wiki/Austronesian_alignment], a typologically unusual class of morphosyntactic alignment. In Tagalog, two core arguments (the topic argument and non-topic argument) are marked by prepositions, with their semantic roles determined by voice affixes on the verb. For the purposes of UD annotation, the following guidelines are used:
  * The topic argument (marked by the preposition *ang*) is attached to the predicate using the (nsubj)[https://universaldependencies.org/u/dep/nsubj.html] relation.
  * The non-topic argument (marked by the preposition *ng*) is attached to the predicate using the (obj)[https://universaldependencies.org/u/dep/obj.html] relation.
  * Other adjuncts are attached to the predicate using the (obl)[https://universaldependencies.org/u/dep/obl.html] relation.

### Non-verbal Predicates

* Non-verbal clauses (such as noun, adverb, or adjective phrases) may be used as predicates in Tagalog. In these instances, the highest node of the clause is labeled as (root)[https://universaldependencies.org/u/dep/root.html], and all other nodes typically connected to the root verb are instead connected to this node.


## Treebanks

There are [2](../treebanks/tl-comparison.html) Tagalog UD treebanks:

  * [Tagalog-TRG](../treebanks/tl_trg/index.html)
  * [Tagalog-Ugnayan](../treebanks/tl_ugnayan/index.html)


