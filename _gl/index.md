---
layout: base
title: 'Galician UD'
udver: '2'
---

# UD for Galician <span class="flagspan"><img class="flag" src="../../flags/svg/ES-GA.svg" /></span>

Galician is an Indo-European language and a part of the Western Ibero-Romance group evolved from Vulgar Latin. It derives from medieval Galician-Portuguese.

Modern Galician is spoken in the Spanish Autonomous Region of Galicia (and in some border regions) by about 2.5 million people, and it is the official language together with Spanish.

Due to its common origin and present similarity, some linguists still consider Galician as a variety of (Galician-)Portuguese. However, it is important to note that the current orthography of Galician is based on the Spanish one (thus being different from the Portuguese spelling).


## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation. Exceptions:
  * Few numerical expressions (e.g., telephone numbers) are treated as single words and may contain punctuation or whitespace: *687 614 874*.
  * URLs, email addresses and other related expressions are treated as single words and may contain punctuation: *manuelmaria@as-pg.com*.
  * Abbreviations are also treated as single words and may contain punctuation: *etc.*.
* Galician has two main types of multiword tokens:
  * Verb forms with enclitic pronouns are written together: *cómeos=come+os*, *dixérono=dixeron+o*.
  * Contractions of prepositions and determiners or pronouns: e.g., *ao=a+o*, *polo=por+o*, *co=con+o*, *daquel=de+aquel*, *nese=en+ese*. Other (less frequent) contractions include demonstratives and pronouns: e.g., *aqueloutros=aquel+outros*.
  * Note that some of the above mentioned contracted forms may be ambiguous with single tokens (e.g., *dese* can be a form of the verb *dar* of a contraction of *de+ese*).
  

## Morphology

### Tags

* Galician uses all 17 universal tags. However, note that [PART]() is only used in the Galician treebank.
* Auxiliar verbs ([AUX]()) are tagged when they behave as copula (e.g., *ser* and *estar*) as well as in verbal periphrases and other constructions where they depend on the main verb (e.g., "*poderían* chegar").
* The tag [DET]() is used for articles and pronominal words used with a determiner function, including possessives. The tag [PRON]() is reserved for pronouns occurring as the head of a noun phrase.

For more information, see the README file of each Galician UD treebank.

### Features
* In Galician, nouns and adjectives inflect for gender and number, and they agree with respect to these features. Determiners also agree with numbers in gender and number.
* Verb forms may be finite, gerund, participle or infinitive.
  * Both finite and infinitive verbs may inflect for number and for person.
  * Participles inflect for gender and number.
  * Finite forms also inflect for tense and mood.
* Morphological information is currently encoded as follows:
  * Galician-CTG treebank contains morphological information in the XPOS field provided by [FreeLing](http://universaldependencies.org/tagset-conversion/pt-freeling-uposf.html).
  * Galician-TreeGal includes the morphological features following the UD guidelines.
* Besides universal features, Galician-TreeGal uses a language-specific feature:
  * [Clitic](https://github.com/UniversalDependencies/docs/blob/pages-source/_gl/feat/Clitic.md): `Clitic=Yes` refers to clitic pronouns that depend phonologically on a verb. They may be enclitic (_Quéro<b>te</b>_) or proclitic (_Non <b>te</b> quero_).

For more information, see the README file of each Galician UD treebank.

## Syntax
* Galician uses 33 universal relations and 4 subtypes.
* Although Galician is a SVO language, word order is relatively free, so one can find sentences following VSO, SOV, etc.
* Galician is a pro-drop language, so subjects are frequently elided.
* The verbs *ser*, *estar*, and *parecer* are copulative.
* The following subtypes are used in Galician (currently only in the Galician-TreeGal treebank):
  * [aux:pass]() for passive auxiliaries.
  * [flat:name]() for exocentric complex names.
  * [flat:foreign]() for foreign complex names with different structures.
  * [nsubj:pass]() for nominal subjects of passive verbs.

For more information, see the README file of each Galician UD treebank.

## Treebanks

There are [two](../treebanks/gl-comparison.html) Galician UD treebanks:

  * [Galician-CTG](../treebanks/gl_ctg/index.html)
  * [Galician-TreeGal](../treebanks/gl_treegal/index.html)

