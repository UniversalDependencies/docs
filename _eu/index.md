---
layout: base
title:  'Basque UD'
udver: '2'
---

# UD for Basque <span class="flagspan"><img class="flag" src="../../flags/svg/ES-PV.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. We normally tokenize them as separate tokens (words);
  exceptions include hyphenated compounds such as _bat-batean_ “suddenly”, which are kept as a single token.
* There are no multiword tokens and no words with spaces.
  For more details, see [tokenization](tokenization.html).

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Basque POS tags](pos/index.html)
and [Basque features](feat/index.html).

* All 17 universal POS categories, including particles ([PART]()), are relevant for Basque.
  However, the current data does not distinguish coordinating and subordinating conjunctions.
  All conjunctions are tagged [CCONJ]() and the [SCONJ]() tag is not used at present.
* Only a relatively small subset of Basque verbs have the full morphological paradigm.
  Some of them can be used as auxiliaries ([AUX]()) to provide finite features to the other verbs.
  A typical sentence thus contains a lexical verb in a non-finite form (participle),
  accompanied by one or more auxiliaries. With non-verbal predicates, one of the auxiliaries
  acts as a copula.
  * _izan_ (“to be”) (example forms _da, zen, izan, dira, ziren, izango, dela, den_)
  * _egon_ (“to be, to stay”) (example forms _dago, zegoen, daude, egon, dagoela, zeuden, egongo, dagoen_)
  * _ukan_ (example forms _du, dute, dugu, zuen, dut, ditu, duen, duela_)
  * _edun_ (example forms _zuen, du, dute, zuten, ditu, zituen, zion, dituzte_)
  * _edin_ (example forms _daiteke, dadin, daitezke, daitezkeen, daitekeela, liteke, baliteke, litekeena_)
  * _ezan_ (example forms _dezake, dezagun, dezan, itzazu, ezazu, ditzakete, dezakete, dezakeen_)
  * _ari_ (uninflected)
* There are three main (de)verbal forms, distinguished by the value of the [VerbForm]() feature:
  * Participle `Part`, tagged [VERB]() or [AUX](), is also the citation form (lemma) of the verb.
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().

### Features

*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is 1 Basque UD treebank:

  * [Basque-BDT](../treebanks/eu_bdt/index.html)
