---
layout: base
title:  'Akuntsu UD'
udver: '2'
---

# UD for Akuntsu <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation

* Akuntsú uses all 17 [UPOS](https://universaldependencies.org/u/pos/index.html), although the class of adjectives is a complicated matter that requires more examination.
* Tokenization and semgmentatoin in Akunstú is straightforward. There are no multiwords that require spaces or dashes.
* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We always tokenize them as separate tokens (words).

## Morphology 

### Tags

* Akuntsú is mostly a suffixing language, though its number of affixes and suffixes are relatively small if compared to some other South American languages. Words in this language can be composed as few as single morpheme, or can bear to different affixes. Inflection, derivation and compounding are processes found in the language, and derivation and compounding are productive in word formation.

### Features

NOMINAL FEATURE
* Nominal words, NOUN, PROPN and PRON, are not marked for Gender, plural or animacy.
* There are no classifiers.
* The notion of plural is expressed through numerals, particles or through reduplication.
* The two main values of the Number feature are Sing and Plural. Plural is marked by reduplication.
* Akuntsú has postpositions and oblique clitis, including Ablative `Abl`, allative `All`, dative `Dat`,  essive `Ess`, locative `Loc`, translative `Tra` and inessive `Ine`.

VERBAL FEATURE
* Verbs tend to combine with categories that denote aspect, modality, and voice.
* The aspectual morphemes include the iterative `Iter`, and habitual `Hab`. There is also a projective aspect.
* Akunstu has the following voice features [VOICE](https://universaldependencies.org/u/feat/Voice.html): Middle `Mid` and causative `Cau` 

## Syntax

* Akuntsú is predominantly head-final. 
* Objects tend to precede verbs. The most frequent word order is (S)OV. 
* The basic clausal constituents may be described basically as [(PRONOMINAL CLITICS) + NOUNS + (NOMINAL MORPHOLOGY) + (OBJECT) + (VERBAL MORPHOLOGY) + VERB + (VERBAL MORPHOLOGY) + (AUXILIARY)]. 
* Clause combining mainly involves coordination, subordination, and complementation. Coordination is done by the simple juxtaposition of clauses; complementation is usually in the form of nominalizations. 

## Treebanks

There are [N](../treebanks/aqz-comparison.html) Akuntsu UD treebanks:

  * [Akuntsu-A](../treebanks/aqz_a/index.html)
  * [Akuntsu-B](../treebanks/aqz_b/index.html)

