---
layout: base
title:  'Icelandic UD'
udver: '2'
---

# UD for Icelandic <span class="flagspan"><img class="flag" src="../../flags/svg/IS.svg" /></span>

## Tokenization and Word Segmentation

* Words are generally delimited by whitespace or punctuation. Exceptions:
  * Numerical expressions (including dates) are treated as single words and may contain punctuation or whitespace. Dot following the last digit of a number indicates an ordinal numeral in Icelandic: *5.*, *1.1.1970*, *11:00*, *2.000*
  * Abbreviations are treated as single words: *e.t.v.*, *t.d.*
* Words with spaces are not used.
* Imperative verbal form and cliticized verbal question form are treated as multi-word tokens and segmented to individual syntactic words.


## Morphology

The PoS-tags follow the universal tag set and do not add any language-specific PoS-tags. The morphological features follow the Icelandic tagging scheme described in (Helgadóttir et. al., 2012). PoS-tags and morphological features were converted automatically to the UD scheme, see details in (Jónsdóttir, 2020).

Sigrún Helgadóttir, Ásta Svavarsdóttir, Eiríkur Rögnvaldsson, Kristín Bjarnadóttir and Hrafn Loftsson. 2012. The Tagged Icelandic Corpus (MÍM). Proceedings of the Workshop on Language Technology for Normalisation of Less-Resourced Languages -SaLTMiL 8 – AfLaT2012, s. 67-72. Istanbul, Turkey. Available online at malheildir.arnastofnun.is/mim
Hildur Jónsdóttir. 2020. A Parallel Icelandic Dependency Treebank: Creation, Annotation and Evaluation. MA thesis, University of Iceland. [https://skemman.is/handle/1946/34784](https://skemman.is/handle/1946/34784).

### Tags

* Icelandic uses all 17 universal tags.
* The only word tagged with [PART]() is the infinitive marker *að*.
* Auxiliaries ([AUX]()) are all verbal in Icelandic and can be grouped into four types:
  * The copulas *vera* (be) and *blífa* (be).
  * The auxiliary *hafa* (have), selects the supine form of the main verb.
  * The passive auxiliary verða (become), geta (can), fá (can), which select a verbal past participle.
  * Modal and aspectual verbs that combine with the bare infinitive of the main verb, such as mega (may), vilja (want), munu (will), skulu (shall) and kunna (be able to).
* The tag [DET]() is used for articles and pronominal words used with a determiner function, including possessives. The tag [PRON]() is reserved for pronouns occurring as the head of a noun phrase.
* Participles (both present and past) are tagged with [ADJ]().
* Foreign proper names are tagged [PROPN]().

### Features

* Nouns have inherent gender (masc, fem or neutral), inflect for number (singular or plural), case (nominative, accusative, dative or genitive) and can take indefinite or definite article.
* Verbs can be used in the passive and the active voice. Finite forms in indicative or subjunctive mood in addition inflect for Tense (present or past), person (1, 2 or 3) and number (singular or plural). The imperative mood inflects for number (singular or plural). There are three types of nonfinite forms: infinitives, participles (present and past), and supine (used to form perfect tenses together with the auxiliary have). The past participle additionally inflects for gender (masc, fem or neutral), number (singular or plural) and case (nom or acc).

## Syntax

Subjects have the following characteristics:
* Word order: Icelandic is an SVO language although other structures may occur, especially in older stages of the language.
* Case marking: Subjects usually occur in nominative case but quirky subjects take accusative, dative or genitive case (rare).

Objects have the following characteristics:
* Word order: Objects usually follow the main verb unless topicalized.
* Case marking: Objects occur in accusative, dative or genitive case.
* Passivization: Objects become (non-expletive) subjects when verbs are passivized.

The copula verb *vera* (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses. Existential clauses normally use the verb participle til (vera til) or finnast.

The following subtypes are used:
acl:relcl for relative clauses
compound:prt for verb particles
flat:name for exocentric complex names
flat:foreign for foreign names
nmod:poss for possessive/genitive modifiers
obl:arg for oblique arguments that are not adjuncts

## Treebanks

There are [two](../treebanks/is-comparison.html) Icelandic UD treebanks in preparation:

* [Icelandic-PUD](/treebanks/is_pud/index.html)
* [Icelandic-IcePaHC](/treebanks/is_icepahc/index.html)

