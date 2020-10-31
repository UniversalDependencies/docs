---
layout: base
title:  'French UD'
udver: '2'
---

# UD for French <span class="flagspan"><img class="flag" src="../../flags/svg/FR.svg" /></span>

## Tokenization and Word Segmentation

 * In general, words are delimited by whitespace characters and punctuations are considered as separated words.
 * Only numbers can contain spaces (following `[0-9 ,]+` regexp).
 * There are several closed classes of contractions that are treated as multi-word tokens and segmented to individual syntactic words.
For instance, `au` -> `à` + `le`, `auquel` -> `de` + `lequel`.
Note that `du` and `des` are ambiguous and can be split or not depending of their usage.

For more details, see [tokenization](tokenization.html).

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [French POS tags](pos/index.html)
and [French features](feat/index.html).

* French uses all 17 universal POS categories, including particles ([PART]()). [PART]() is used differently among treebanks. Most common usages are for euphonic element (like *t* in *a-t-il*) or for *-là* and *-ci* when they follow a pronoun (*celle-là*) or a noun (*cette fois-ci*). Some corpora uses [PART]() for negation words *ne* and *pas*.
* Most French corpora has just three auxiliary verb ([AUX]())
	* *être* (to be) is used as a copule, as a tense auxiliary and as a passive auxiliary,
	* *avoir* (to have) is used as a tense auxiliary,
	* *faire* (to make) is used in causative constructions.
* **UD_French-ParTUT** uses a few more auxiliaries (*aller*, *devoir*, *pouvoir*, …).

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

There are [seven](../treebanks/fr-comparison.html) French UD treebanks:

  * [UD_French-ParTUT](../treebanks/fr_partut)
  * [UD_French-GSD](../treebanks/fr_gsd)
  * [UD_French-Sequoia](../treebanks/fr_sequoia)
  * [UD_French-PUD](../treebanks/fr_pud)
  * [UD_French-FTB](../treebanks/fr_ftb)
  * [UD_French-Spoken](../treebanks/fr_spoken)
  * [UD_French-FQB](../treebanks/fr_fqb)
