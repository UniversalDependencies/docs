---
layout: base
title:  'French UD'
udver: '2'
---

# UD for French <span class="flagspan"><img class="flag" src="../../flags/svg/FR.svg" /></span>

## Tokenization and Word Segmentation

 * In general, words are delimited by whitespace characters and punctuations are considered as separated words.
 * Only numbers can contain spaces (following the regexp `[0-9 ,]+`).
 * There are several closed classes of contractions that are treated as multi-word tokens and segmented to individual syntactic words.
For instance, *au* -> *à* + *le*, *auquel* -> *de* + *lequel*.
Note that *du* and *des* are ambiguous and can be split or not depending of their usage.

For more details, see [tokenization](tokenization.html).

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [French POS tags](pos/index.html)
and [French features](feat/index.html).

* French uses all 17 universal POS categories:
  * ([PART]()) is used only in **UD_French-ParTUT** for the negation particule *ne* (which is annotated `ADV` in other treebanks).
  * All French corpora has just three auxiliary verb ([AUX]())
    * *être* (to be) is used as a copule, as a tense auxiliary and as a passive auxiliary,
    * *avoir* (to have) is used as a tense auxiliary,
    * *faire* (to make) is used in causative constructions.

### Features

* TODO (see [French features](feat/index.html)).

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

* TODO (see [French relations](dep/index.html)).

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [eight](../treebanks/fr-comparison.html) French UD treebanks:

  * [UD_French-ParTUT](../treebanks/fr_partut)
  * [UD_French-GSD](../treebanks/fr_gsd)
  * [UD_French-Sequoia](../treebanks/fr_sequoia)
  * [UD_French-FQB](../treebanks/fr_fqb)
  * [UD_French-Rhapsodie](../treebanks/fr_rhapsodie) (This treebank was named UD_French-Spoken until version 2.8)
  * [UD_French-ParisStories](../treebanks/fr_parisstories)
  * [UD_French-PUD](../treebanks/fr_pud)
  * [UD_French-FTB](../treebanks/fr_ftb)
  
Note that the corpus UD_French-FTB was not updated since 2018 and may not follow the more rencent description given in these guidelines.
