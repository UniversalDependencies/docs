---
layout: base
title:  'Gujarati UD'
udver: '2'
---

# UD for Gujarati <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

Gujarati is an Indo-Aryan language originating from the western Indian state of Gujarat. The language is widely spoken
by over 56 million speakers and is one of the 22 languages with official status in India. Yet, the Gujarati
Computational Linguistics community is still in its infancy. Earlier literature classifies Gujarati in the
"Scraping-Bys" category (category 1) in their taxonomy indicating a scant availability of labeled datasets.


## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, some punctuation marks (e.g., comma) are attached to a neighboring word,
  while others are not. We tokenize punctuation as separate tokens (words).


## Morphology

Gujarati morphology is agglutinative and has a rich system of inflectional and derivational morphology. The language
has a complex system of verb conjugation, noun declension, and postpositions.


### Tags

* Gujarati uses all 17 universal POS categories, including particles ([PART]()).
* Gujarati has the following auxiliary verbs ([AUX]()):
  * છે _che_ and થવું _thavuṁ_ are present and past equivalents of “to be”.
  * ન _na_ is the negative auxiliary.
  * રહેવું  _rahevuṁ_ “to remain” expresses progressive aspect.
  * આવવું _āvavuṁ_ “to come” expresses perfect aspect.
  * ગયું _gayuṁ_ “to go” expresses perfect aspect.
  * દેવું _devuṁ_ “to give” expresses perfect aspect.
  * હતું _hatuṁ_ expresses past tense.
  * જોઈતું _joītuṁ_ “to want” expresses modality (wish or necessity).
  * પડવું _paḍavuṁ_ “to fall” expresses necessity.
  * હોવું _hovuṁ_ “to be” expresses necessity.
  * શકવું _śakavuṁ_ “can” expresses possibility, ability.
  * શું _śuṁ_ is used in interrogative clauses.


### Features

* The current Gujarati treebank does not include morphological features except for two rather technical ones:
  * [ExtPos]() indicates the part of speech of fixed multiword expressions.
  * [Typo]() is used at heads of [goeswith]() relations (mistakenly split words in the underlying text).


## Syntax

Standard dependency relations are used, except for `clf` which is not used in Gujarati.

* Gujarati is a head-final, or left-branching language.
* Adjectives precede nouns, direct objects come before verbs, and there are postpositions.
* The word order of Gujarati is SOV, and there are three genders and two numbers.


## Treebanks

There is 1 Gujarati UD treebank:

  * [GujTB](../treebanks/gu_gujtb/index.html)
