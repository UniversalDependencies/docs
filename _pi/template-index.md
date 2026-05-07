---
layout: base
title:  'Pali UD'
udver: '2'
---

# UD for Pali <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

Pāli is an Indo-Aryan language, widely studied as the liturgical language of Theravāda Buddhism.

## Orthography

* While Pāli can traditionally be written with a variety of scripts, for UD we use [the IAST Romanization standard](https://en.wikipedia.org/wiki/International_Alphabet_of_Sanskrit_Transliteration).
* If your corpus or text is in another script or alternate Romanization, you can use a tool like [aksharamukha](https://aksharamukha.com/python) to automatically convert it to IAST.
* As different scripts use different, and sometimes no, punctuation, we further standardize our orthography by **removing all punctuation** from our texts.
* IAST is case insensitive. Here, we use lowercase with the first letter each sentence capitalized by convention.

## Sentence Segmentation

While we strip out punctuation in our `# text` rows, we do recommend using any punctuation in your source to help segment into sentences.  In the Pāli Text Society and Mahāsaṅgīti editions, you should generally use both semicolons (`;`) and periods (`.`) to split sentences.  However, be aware that Pāli verses may sometimes use semicolons to mark *pāda* "line" boundaries which are not semantic.  Always segment sentences by syntax.

## Tokenization and Word Segmentation

* Words are generally delimited by spaces.
* Compounds are split and sandhi undone as it is the custom in Sanskritic linguistics.
* Compounds receive token ranges (e.g. `10-12`) and should get the appropriate [compound]() relation subtype.
* Sandhi should be marked with a `SpaceAfter=No` in the earlier token's `MISC`.
* Multi-word tokens are generally not used. Parts of a multi-word name (e.g. "Saccaka Nigaṇṭhāputta") should get the [flat:name]() dependency relation.

## Morphology

### Tags

Participles are tagged as `VERB`s and not `ADJ`s or `ADV`s.

#### Particles

The following particles get the `PART` `UPOS`:

* The quote-ending particle *ti*
  * `LEMMA`: *iti*
  * `DEPREL`: `mark` to the head of the quoted clause
  * The preceding token should usually get `SpaceAfter=No` (as appropriate)
* The negation particle *na* (and its sandhi variants)
  * The lemma is *na*
  * Mark it as `Polarity=Neg` in `FEATS`
  * Give it the [advmod]() relation to the negated head.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

#### Verbs

All verb forms in Pāli should get the `VERB` `UPOS`
and their `LEMMA` is the 3rd-person singular present indicative of the underlying verb.

For example, the past participle *gata* "gone" has the `LEMMA` *gacchati* "goes".

##### Finite Verbs

Should have the `VerbForm=Fin` along with `Mood`, `Tense`, `Person`, `Number`, and `Voice` as appropriate.

##### Absolutives

Absolutives formed in Pāli with *-tvā* / *-ya* get the `FEATS` `VerbForm=Conv` and are attached to the main verb via `advcl`.

##### Infinitives

Infinitives in Pāli end in *-tuṃ*, have the `VerbForm=Inf` and are typically `xcomp`.

##### Participles

Participles have the following `FEATS`: 
* `VerbForm=Part`
* `Voice=Act` or `Voice=Pass`
* Full nominal agreement (Case, Gender, Number)

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/pi-comparison.html) Pali UD treebanks:

  * [Pali-A](../treebanks/pi_a/index.html)
  * [Pali-B](../treebanks/pi_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
