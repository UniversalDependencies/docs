---
layout: base
title:  'Paumari UD'
udver: '2'
---

# UD for Paumari <span class="flagspan"><img class="flag" src="../../flags/svg/BR.svg" /></span>

## Tokenization and Word Segmentation

- In general, words are delimited by whitespace characters.
- Every sentence has a special line in the comment section named 'text_seg' that states morpheme boundaries within words. This layer is directly taken from the article on Paumari by Chapman and Derbyshire in the <a id='chapman_derbyshire'></a>[Handbook of Amazonian Languages](https://doi.org/10.1515/9783110854374) (1991), Vol.3 .

---

## Morphology

### Tags

- CCONJ is not used. According to the glosses used in [Chapman and Derbyshire (1991)](#chapman_derbyshire), conjunctions are not overtly expressed but rather inferred from context.
- Moreover, no word is tagged as PART, SYM or X.
- The remaining other 13 universal tags are used.
- All words tagged AUX are verbal and can be divided into two categories:
	- The standard auxiliaries *hi* and *ni* which both can be translated as 'be' - see Chapman and Derbyshire (1991, chpt. 18.8) for more detailed information. 
	- The copula *mani*, which can also be translated as 'be'.
- Whenever in the handbook article by [Chapman and Derbyshire (1991)](#chapman_derbyshire) there is the gloss 'DEM' (short for 'demonstrative') and there is a corresponding noun within the same clause, the tag DET is used. If a corresponding noun as the head of a clause is missing, the tag PRON is used.
- As far as apparent, there is no deverbal form of ADJ.
- There are occurrences of deverbal ADV such as in:
	- *baranahi* (e.g. HB_1.36) where the suffix *hi* is used to turn the verb stem *barana* (calling) into an adverb. The same is true for *ki'darahihia* (e.g. HB_1.37) where the verb *ki'daraha* (run) is adverbialised via the same suffix.
 	- *afosiaga* (e.g. HB_3.53) where the adverbialiser prefix *afo* prepends the verbal suffix *siaga* (follow).
  	- The information on deriving adverbs from other word forms is taken from chapter 20 in [Chapman and Derbyshire (1991)](#chapman_derbyshire).
- Deverbal forms of a NOUN are commonly built with the suffix *ha* (action) such as in:
	- *ikapahahamaniki'i* (HB_3.55) where the noun *paha* (water) is turned into a verb and translated as 'fetch water' (another example with the same pattern can be found in sentence HB_3.56). Similary, *vaakairaha'aha* (HB_1.4), including the noun *kaira* (guava), means 'fetch guava'.
	- *o-ka-va-pavakari-ha-vini* (HB_4.61) where the noun *pavakari* (an article that is on sale) is verbalised and translated as 'buy'.
	- *vakanahahaniha'aha* (HB_4.63) where the noun *hahani* (laugh) is used as a verb meaning '(to) laugh'.

---

### Features

- At its current state, this treebank does not have any annotation of morphological features other than indicated via the information provided in the lines 'text_seg' and 'hb_glosses' in the comment section of each conllu representation.

---

## Syntax

- Core arguments, such as subjects and objects, were mainly identified via the provided glosses from [Chapman and Derbyshire (1991)](#chapman_derbyshire).
	- Paumari is a pro-drop language, thus, there are many sentenecs without an overtly expressed subject.
 - The following subtypes are used in Paumari:
	- [acl:relcl](https://universaldependencies.org/u/dep/acl-relcl.html) for a relative clause modifier of a nominal
	- [advmod:emph](https://universaldependencies.org/u/dep/advmod-emph.html) for the particle 'vani' that expresses a contrast
   	- [advmod:lmod](https://universaldependencies.org/u/dep/advmod-lmod.html) for an adverbial modifier specifying a location
   	- [aux:pass](https://universaldependencies.org/u/dep/aux-pass.html) for the auxiliary in passive constructions
   	- [nmod:poss](https://universaldependencies.org/u/dep/nmod-poss.html) for a possessive nominal modifier
   	- [nsubj:pass](https://universaldependencies.org/u/dep/nsubj-pass.html) for a passive nominal subject
   	- [obl:agent](https://universaldependencies.org/u/dep/obl-agent.html) for the agent of a passive verb
   	
 - copula in nonverbal clauses?!

---

## Treebanks

There are [N](../treebanks/pad-comparison.html) Paumari UD treebanks:

  * [Paumari-A](../treebanks/pad_a/index.html)
  * [Paumari-B](../treebanks/pad_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
