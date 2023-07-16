---
layout: base
title:  'Akkadian UD'
udver: '2'
---

# UD for Akkadian <span class="flagspan"><img class="flag" src="../../flags/svg/IQ.svg" /></span>

Note that there are multiple treebanks discussed in this documentation. Information specific to a given treebank will be labeled as such. Otherwise it holds for all treebanks.

## Tokenization and Word Segmentation

* In [RIAO](../treebanks/akk_RIAO/index.html), sentence boundaries were arrived at by syntactically annotating the unsegmented corpus, and identifying words that are head words but are not themselves dependents of other words. The separate trees produced this way were considered to be separate sentences.
* In [MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev), letters are largely parsed without explicit sentence boundaries (although there are a few exceptions where sentence breaks were introduced manually). For verse texts where line breaks on the cuneiform tablet coincide with sentence breaks, sentence breaking was done automatically. Certain large texts use horizontal rulings that also signal section breaks. Automatic sentence breaks were made at these points as well.
* Words are only exceptionally delimited by whitespace or punctuation in the original cuneiform texts. Thus, [RIAO](../treebanks/akk_RIAO/index.html) and [MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev) are based on the bound transcription (normalized text).
* For RIAO, enclitic pronouns and clitics are separated during tokenization and marked as multi-word tokens with a syntactic relation. For [MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev), such pronouns and clitics are regarded as part of the word they attach to and label as morphological features on that word.

## Morphology

### Tags

* In [RIAO](../treebanks/akk_RIAO/index.html) and [MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev), 13 universal tags have been used. 
* The tags AUX, INTJ, PUNCT and SYM were not used.
* The words tagged PART are the emphatic *lū*, the quotation paricle *mā*, the clitics *ma* and *ni*, and the negation particles *lā* and *ul*.
* For RIAO and [MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev), the tag DET is used for the personal pronouns *šī*, *šū*, *šâtu*, *šuāti/u*, *šâtunu*, *šuātunu* when they modify the meaning of a noun; for the quantifiers *gabbu*, *kalāma* and *kalû*; for the demonstratives *ammiu* "that" and *annû* "this" and for the indefinite pronoun *mimma* "anything". The tag PRON is reserved for independent personal pronouns, including oblique forms (*yâši*, *šuāšu*) and possessives, as well as pronominal suffixes; for the relative pronoun *ša* "which, who"; for *ammar* in its function as a relative pronoun; for the indefinite pronoun *mamma(n)* "somebody" and the interrogatives *mannu* "who?" and *mīnu* "what?" 

### Nominal Features

* Nominal words (NOUN, PROPN and PRON), adjectives (ADJ) and non-finite verbal forms have the subcategories:

* [Case](https://universaldependencies.org/u/feat/Case.html) with 5 possible values (nominative, accusative, genitive, locative, and terminative). The locative and terminative cases are used only in [MCONG]([MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev).
* [Number](https://universaldependencies.org/u/feat/Number.html) with 3 possible values (singular, plural, dual). Dual is used only in [MCONG]([MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev).
* [Gender](https://universaldependencies.org/u/feat/Gender.html) with 3 possible values (masculine, feminine, common). The common gender marks only first person pronouns.
* Base, which can have four different values:
  * free (status rectus), used in both RIAO and [MCONG]([MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev)
  * bound (status constructus), used in both RIAO and [MCONG]([MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev)
  * suffixal (followed by pronominal suffixes), used only in RIAO
  * terminal (status absolutus), used only in RIAO 


### Verbal Features

In [RIAO](../treebanks/akk_RIAO/index.html) and [MCONG]([MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev), the following subcategories of verbs are annotated:
* Finiteness (Finite, Infinitive, Stative),
* Stem (G, D, Š, N, etc.),
* Mood (Indicative, Imperative, Precative, Prohibitive),
* Tense (Present, Past, Pgp), person (1, 2, 3),
* Number (Singular, Plural) and
* Gender (Masculine, Feminine).

* In RIAO, subordinative and ventive are considered as subcategories of their own, which are tagged as boolean values.
* In [MCONG]([MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev), the subordinate -u and subordinate -ni markers are treated as separate morphemes. In addition, [MCONG]([MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev) also tags as a feature of the verb the -mā discourse particle and yes/no question (expressed as word-final vowel lengthening).
* Also note that in [MCONG]([MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev) stative forms based on verbal adjectives are regarded as finite verbs.

## Syntax

### Word order
For the most part, Akkadian word order is SOV.

### Core Arguments, Oblique Arguments and Adjuncts
* Nominal subjects are in the nominative case without an adposition.
* Usually objects occur in accusative case, but if not, their position after the subject is decisive. Due to emphasis, an object may also be fronted with the adposition *ana* but be then tagged as obl.
* Prepositional objects are considered oblique.

### Relations Overview

* In [RIAO](../treebanks/akk_RIAO/index.html) the following relation main types are not used in: aux, clf, compound, dislocated, expl, flat, orphan, punct, reparandum.
* In [MCONG]([MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev) the following relation main types are not used: aux, clf, compound, expl, flat, punch, reparandum.
* The following relation subtypes are used in RIAO:
  * acl:relcl for relative clauses
  * advmod:emph for the particle *lū* in its asseverative function
  * det:poss for possessive determiners
  * nmod:poss for the construct state
* In [MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev), these relation subtypes are infrequent and not consistently used.

## Treebanks

There are [3](../treebanks/akk-comparison.html) Akkadian UD treebanks:

  * [PISANDUB](../treebanks/akk_pisandub/index.html)
  * [RIAO](../treebanks/akk_riao/index.html)
  * [MCONG](https://github.com/UniversalDependencies/UD_Akkadian-MCONG/tree/dev)
