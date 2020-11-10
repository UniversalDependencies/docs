---
layout: base
title:  'Akkadian UD'
udver: '2'
---

# UD for Akkadian <span class="flagspan"><img class="flag" src="../../flags/svg/IQ.svg" /></span>

## Tokenization and Word Segmentation

* In [RIAO](../treebanks/akk_RIAO/index.html), sentence boundaries were arrived at by syntactically annotating the unsegmented corpus, and identifying words that are head words but are not themselves dependents of other words. The separate trees produced this way were considered to be separate sentences.
* Words are only exceptionally delimited by whitespace or punctuation in the original cuneiform texts. Thus, [RIAO](../treebanks/akk_RIAO/index.html) is based on the bound transcription (normalized text).
* Enclitic pronouns and clitics are separated during tokenization and marked as multi-word tokens with a syntactic relation.

## Morphology

### Tags

* In [RIAO](../treebanks/akk_RIAO/index.html), 13 universal tags have been used. 
* The tags AUX, INTJ, PUNCT and SYM were not used.
* The words tagged PART are the emphatic *lū*, the quotation paricle *mā*, the clitics *ma* and *ni*, and the negation particles *lā* and *ul*.
* The tag DET is used for the personal pronouns *šī*, *šū*, *šâtu*, *šuāti/u*, *šâtunu*, *šuātunu* when they modify the meaning of a noun; for the quantifiers *gabbu*, *kalāma* and *kalû*; for the demonstratives *ammiu* "that" and *annû* "this" and for the indefinite pronoun *mimma* "anything". The tag PRON is reserved for independent personal pronouns, including oblique forms (*yâši*, *šuāšu*) and possessives, as well as pronominal suffixes; for the relative pronoun *ša* "which, who"; for *ammar* in its function as a relative pronoun; for the indefinite pronoun *mamma(n)* "somebody" and the interrogatives *mannu* "who?" and *mīnu* "what?"

### Nominal Features

* Nominal words (NOUN, PROPN and PRON), adjectives (ADJ) and non-finite verbal forms have the subcategories:

* [Case](https://universaldependencies.org/u/feat/Case.html) with 3 possible values (nominative, accusative, genitive).
* [Number](https://universaldependencies.org/u/feat/Number.html) with 2 possible values (singular, plural).
* [Gender](https://universaldependencies.org/u/feat/Gender.html) with 2 possible values (masculine, feminine).
* Base, which can have four different values:
  * free (status rectus),
  * bound (status constructus),
  * suffixal (followed by pronominal suffixes) and
  * terminal (status absolutus). 


### Verbal Features

In [RIAO](../treebanks/akk_RIAO/index.html), the following subcategories of verbs are annotated:
* Finiteness (Finite, Infinitive, Stative),
* Stem (G, D, Š, N, etc.),
* Mood (Indicative, Imperative, Precative, Prohibitive),
* Tense (Present, Past, Pgp), person (1, 2, 3),
* Number (Singular, Plural) and
* Gender (Masculine, Feminine).

We consider subordinative and ventive as subcategories of their own, which we tag as boolean values. 
* The tags AUX, INTJ, PUNCT, SYM were not used.
* The words tagged PART are the emphatic *lū*, the quotation particle *mā*, the clitics *ma* and *ni*, and the negation particles *lā* and *ul*.

### Nominal Features

* Nominal words (NOUN, PROPN and PRON) and adjectives (ADJ) have an inherent Gender feature with values Masc or Fem.
* Number has 2 possible values: Sing and Plur.
* Case has 3 possible values: Nom, Gen, Acc.

For nouns, adjectives and non-finite verbal forms the subcategories are:
* case (nominative, accusative, genitive),
* number (as above),
* gender (as above) and
* base, which can have four different values:
a) free (status rectus),
b) bound (status constructus),
c) suffixal (followed by pronominal suffixes) and
d) terminal (status absolutus). 

### Verbal Features

In [RIAO](../treebanks/akk_RIAO/index.html), the following subcategories of verbs are annotated:
* finiteness (finite, infinitive, stative),
* stem (G, D, Š, N etc.),
* mood (indicative, imperative, precative, prohibitive),
* tense (present, past), person (1, 2, 3),
* number (singular, plural) and
* gender (masculine, feminine).
Following Streck (2011: 363), we consider subordinative and ventive as subcategories of their own, which we tag as boolean values.

## Syntax

### Word order
For the most part, Akkadian word order is SOV.

### Core Arguments, Oblique Arguments and Adjuncts
* Nominal subjects are in the nominative case without an adposition.
* Usually objects occur in accusative case, but if not, their position after the subject is decisive. Due to emphasis, an object may also be fronted with the adposition *ana* but be then tagged as obl.
* Prepositional objects are considered oblique.

### Relations Overview

* The following relation main types are not used in [RIAO](../treebanks/akk_RIAO/index.html): aux, clf, compound, dislocated, expl, flat, orphan, punct, reparandum.
* The following relation subtypes are used in Akkadian:
  * acl:relcl for relative clauses
  * advmod:emph for the particle *lū* in its asseverative function
  * advmod:neg for the negation particles *lā* and *ul*
  * det:poss for possessive determiners
  * nmod:poss for the construct state

## Treebanks

There are [2](../treebanks/akk-comparison.html) Akkadian UD treebanks:

  * [PISANDUB](../treebanks/akk_PISANDUB/index.html)
  * [RIAO](../treebanks/akk_RIAO/index.html)
