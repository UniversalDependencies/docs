---
layout: base
title:  'Cappadocian UD'
udver: '2'
---

# UD for Cappadocian <span class="flagspan"><img class="flag" src="../../flags/svg/GR-ORTHODOX.svg" /></span>

**Current version of the documentation is mainly a draft based only on one specific treebank. It should not be considered the definitive guidelines.**

[Cappadocian Greek](https://en.wikipedia.org/wiki/Cappadocian_Greek)
is used to refer to a number of modern dialects 
of Greek that were originally spoken in Cappadocia. 
As a result of the population exchange between Greece and Turkey in 1923,
all speakers were forced to emigrate to Greece, most adopting Modern Greek
as part of their integration. As a result these language varieties are
critically endangered and severely under resourced.

Asia-Minor Greek dialects show a number of interesting phonological, lexical and
morphosyntactic properties mainly due to long-term language contact.

We also include Pharasiot, a dialect originally spoken nearby
Cappadocia as a Cappadocian dialect, even though it is claimed that it
may be closer to Pontic, the Greek spoken in northern Anatolia.

The documentation below is mainly based on [hUD_Cappadocian-TueC](https://github.com/UniversalDependencies/UD_Cappadocian-TueCL),
which annotates sentences from Pharasiot.

## Tokenization and Word Segmentation

The tokenization and segmentation mostly follows [Modern Greek](https://universaldependencies.org/el/#tokenization-and-word-segmentation-gdtgud).
Since most material available is transcribed text from field studies, 
words are consistently delimited by whitespace or punctuation.

Like in Modern Greek, combination of adpositions and articles are
treated as multi-word tokens. For example *σο* is segmented as *σ* and *ο*.

---

## Morphology

### Tags

All 17 UD POS tags are used, including [PART](), which is used for the
negative particle.
[AUX]() is used auxiliaries including

* α
* αν
* γίνομαι
* είμαι
* είµαι
* εν
* ένι
* θα
* να
* νά
* πρέπει
* χα


### Features

The feature definitions used (currently) follows Modern Greek.

* Nouns have inherent [Gender]() and inflect for [Number]() (singular or plural), and [Case]() (nominative, genitive, accusative and vocative). Remnants of the dative case also exist in set phrases.
* Finite verbs of the [Ind]() mood have one of two values of [Voice](): `Act` and `Pass`; one of two values of [Tense](): `Past` and `Pres`; one of two values of [Number](): `Sing` and `Plur`; and one of three values of [Person](): `1`, `2` and `3`.   Finite verbs of the [Imp]() mood have only `2`nd [Person]().  The [Aspect]() feature has `Imp` and `Perf` values. There are three types of nonfinite forms: infinitives used to form perfect tenses, passive voice `-μένος` participles, and active voice `-[ώο]ντας` converbs.


## Syntax

Coming soon.


## Treebanks

There is [one](../treebanks/cpg-comparison.html) Cappadocian UD treebanks:

  * [Cappadocian-TueCL](../treebanks/Cappadocian_TueCL/index.html)

The is also an upcoming treebank

  * [Cappadocian-AMGiC](../treebanks/Cappadocian_AMGiC/index.html)
