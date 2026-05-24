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
* IAST is case insensitive. Here, we use lowercase, with the first letter of each sentence capitalized by convention.

## Sentence Segmentation

While we strip out punctuation in our `# text` rows, we do recommend using any punctuation in your source to help segment into sentences.  In the Pāli Text Society and Mahāsaṅgīti editions, you should generally use both semicolons (`;`) and periods (`.`) to split sentences.  However, be aware that Pāli verses may sometimes use semicolons to mark *pāda* "line" boundaries which are not semantic.  Always segment sentences by syntax.

## Tokenization and Word Segmentation

* Words are generally delimited by spaces.
* Compounds are split and sandhi undone as it is the custom in Sanskritic linguistics.
* Compounds receive token ranges (e.g. `10-12`) and should get the appropriate [compound]() relation subtype.
* Sandhi should be marked with a `SpaceAfter=No` in the earlier token's `MISC` and should not get a range id.
* Multi-word tokens are generally not used. Parts of a multi-word name (e.g. "Saccaka Nigaṇṭhāputta") should get the [flat:name]() dependency relation.

## Morphology

### Lemmatization

The `LEMMA` for all verb forms is the 3rd-person singular present indicative of the underlying verb.
For example, the past participle *gata* "gone" gets the `LEMMA` *gacchati*.

#### Noun Lemmas

Lemmas are always lowercase, even for proper nouns.

For personal pronouns, collapse the cases down to the nominative. For example, *amhākaṃ* gets *mayaṃ* and *te* gets *tvaṃ*. Keep first and second, singular and plural separate.

For demonstrative pronouns, collapse the cases, gender, and number to the nominative, singular, neuter form:

* Use *tad* for all *ta-* forms: *sā*, *sa*, *taṃ*, *tena*, etc.
* Use *yad* for all *ya-* forms: *yo*, *yā*, *yaṃ*, *yamhi*, etc.
* Use *idaṃ* for its various forms: *ayaṃ*, *imaṃ*, *imāni*, *imehi*, *anena*, etc.

Substantives and adjectives should get the stem form as their lemma. For example, *itthiyo* has the lemma `itthi`, *bhikkhave* gets the lemma `bhikkhu`, *rasso* the lemma `rassa`, *rāja* the lemma `rājan`, *bhagavato* `bhagavant`, etc. 

### Part of Speech Tags

Participles are tagged as `VERB`s and not `ADJ`s or `ADV`s.
This means that they cannot get the `amod` dependency relation when used to modify a noun, so we use `acl` instead to attach it to its target noun.

Because Pāli is originally an oral language, we are stripping out symbols and punctuation, meaning we do not use the `SYM` or `PUNCT` tags.

#### Determiners

If a pronoun such as *imaṃ* is used as a determiner (i.e. it gets deprel `det` pointing to a substantive) then it should get the UPOS `DET` instead of `PRON`.

#### Particles

The following particles get the `PART` `UPOS`:

* The quote-ending particle *ti*
  * `LEMMA`: *iti*
  * `DEPREL`: `mark` to the head of the quoted clause
  * The preceding token should usually get `SpaceAfter=No` (as appropriate)
* The negation particle *na* / *n'*
  * The lemma is *na*
  * Mark it as `Polarity=Neg` in `FEATS`
  * Give it the [advmod]() relation to the negated head.
* *api* / *pi*
  * The lemma is *api*
  * It should normally get the [discourse]() dependency relation when used rhetorically, but can get `advmod` if used conjunctively.
* *eva* and *kho*
  * Normally get the `discourse` dependency, except in `fixed` phrases
* *kira*
  * When used as "apparently" it should also get the `discourse` relation.
  * Note that "*kira*" is not a particle but a `VERB` if it is the imperative 2nd sg or the reflexive aorist 1st sg of *kirati*.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

Some forms in Pāli are ambiguous. For example, a feminine noun of the `-ā` class with a `-āya` suffix might be Singular Instrumental, Ablative, Genitive, Dative, or Locative! When `Case` can be inferred from context, feel free to mark just the semantically correct case.  If multiple parses are reasonable in a given context, list all the semantically plausible values in alphabetical order, separated by commas (e.g. if you have an *-āya* noun, and all but instrumental are reasonable parses, mark it `Case=Abl,Dat,Gen,Loc|Gender=Fem|Number=Sing`).

#### Verbs

All verb forms in Pāli should get the `VERB` `UPOS`.

##### Finite Verbs

Should have the `VerbForm=Fin` along with `Mood`, `Tense`, `Person`, `Number`, and `Voice`.

##### Absolutives

Absolutives (sometimes called "gerunds") formed in Pāli with *-tvā* / *-ya* get the `VerbForm=Conv` feature and are attached to the main verb via `advcl`.

##### Infinitives

Infinitives in Pāli end in *-tuṃ*, have the `VerbForm=Inf` and are typically `xcomp`.

##### Participles

Participles have the following `FEATS`: 
* `VerbForm=Part`
* `Voice=Act` or `Voice=Pass`
* Full nominal agreement features (Case, Gender, Number)

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
