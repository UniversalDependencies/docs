---
layout: base
title:  'French UD'
udver: '2'
---

# UD for French <span class="flagspan"><img class="flag" src="../../flags/svg/FR.svg" /></span>

In version 2.17, the French language is composed of nine treebanks but two of them don't contain modern French:

 - [UD_French-ALTS](../treebanks/fr_alts) contains data from the 16th century which is quite different from modern French.
 - [UD_French-PoitevinDIVITAL](../treebanks/fr_poitevindivital) contains data in Poitevin-Saintongeais ([Glottocode: poit1241](https://glottolog.org/resource/languoid/id/poit1241))

The description below is relative to the seven modern French corpora.

## Tokenization and Word Segmentation

 * In general, words are delimited by whitespace characters and punctuations are considered as separated words.
 * Only numbers can contain spaces (following the regexp `[0-9 ,]+`).
 * There are several closed classes of contractions that are treated as multi-word tokens and segmented to individual syntactic words.
For instance, *au* -> *à* + *le*, *auquel* -> *de* + *lequel*.
Note that *du* and *des* are ambiguous and can be split or not depending of their usage.

For more details, see [tokenization](tokenization.html).

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [French POS tags](pos/index.html)
and [French features](feat/index.html).

French uses all 17 universal POS categories:
  - ([PART]()) is used only in **UD_French-ParTUT** for the negation particle *ne* (which is annotated `ADV` in other treebanks) [Grew-match](https://universal.grew.fr/?corpus_list=UD_French-GSD%402.17%2CUD_French-ParisStories%402.17%2CUD_French-ParTUT%402.17%2CUD_French-PUD%402.17%2CUD_French-Rhapsodie%402.17%2CUD_French-Sequoia%402.17%2CUD_French-FQB%402.17&request=pattern { X [form="ne"] }&clust1_key=X.upos)
  - All French corpora only have five auxiliary verbs ([AUX]()) ([Grew-match](https://universal.grew.fr/?corpus_list=UD_French-GSD%402.17%2CUD_French-ParisStories%402.17%2CUD_French-ParTUT%402.17%2CUD_French-PUD%402.17%2CUD_French-Rhapsodie%402.17%2CUD_French-Sequoia%402.17%2CUD_French-FQB%402.17&request=pattern { X [upos=AUX] }&clust1_key=X.lemma))
    - *être* (to be) is used as copula, as tense auxiliary and as passive auxiliary
    - *avoir* (to have) is used as tense auxiliary
    - *faire* (to make) and *refaire* (to make again) are used in causative constructions
    - *voir* (to see) in the specific construction *se voir*


### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of two values: `Masc` or `Fem`.
* The two values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (finite and participles).
* [Case]() has 4 possible values: `Nom`, `Dat`, `Acc`, `Com`.
  It occurs only with personal pronouns ([PRON]()).
  The “case” (i.e., role w.r.t. predicates or other phrases) of other nominals is expressed using prepositions, not morphologically.
* [Definite]() has 2 values: `Ind`, `Def`. It is used to distinguish the indefinite and definite articles ([DET]()).

### Polarity

- [Polarity]() is used only with the `Neg` value to mark the negative adverbs _ne_, _pas_, _plus_, _jamais_.

### Verbal Features

- Infinitives only have the `VerbForm=Inf` feature.
- Finite verbs always have one of the four values of [Mood](): `Ind`, `Imp`, `Sub` and `Cnd`.
- Finite verbs can have one of four values of [Tense](): `Past`, `Imp`, `Pres`, `Fut`.
- Past participles have `VerbForm=Part`, `Tense=Past`, [Gender]() (`Masc` or `Fem`), and [Number]() (`Sing` or `Plur`).

### Pronouns, Determiners, Quantifiers

- [PronType]() is used with pronouns ([PRON]()) and determiners ([DET]()).
- [NumType]() is used with numerals ([NUM]()) and adjectives ([ADJ]()).
- The `Poss=Yes` feature marks possessive personal determiners (e.g. _mon_ “my”),
- The `Reflex=Yes` feature is always used on [PRON]() together with `PronType=Prs` and it marks reflexive pronouns (_me_, _te_, _se_, _nous_, _vous_).
- [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  - As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
- [layered features](../../u/overview/feat-layers.html) [Number[psor]]() and [Person[psor]]() are used on possessive personal determiners to indicate possessor related features.

Note that since version 2.17, the four treebanks built from SUD (GSD, Sequoia, ParisStories and Rhapsodie) use a more detailed feature system: 
 - `Number[cxtx]` and `Gender[cxtx]` when the corresponding feature is not morphologically marked but can be inferred from the context.
 - `Number[lex]` and `Gender[lex]` when the corresponding feature is lexical and not morphological , such as the [Gender]() of nouns
 - `Tense[denom]`, which is used for denominative features (associated with `VerbForm=Part`).
See the following paper for more details:
> Sylvain Kahane, Bruno Guillaume, Léna Brun, and Simeng Song. 2025. [Status of morphosyntactic features Illustration with written and spoken French UD treebanks](https://aclanthology.org/2025.tlt-1.18/). In Proceedings of the 23rd International Workshop on Treebanks and Linguistic Theories (TLT, SyntaxFest 2025), pages 154–159, Ljubljana, Slovenia. Association for Computational Linguistics.

See [French features](feat/index.html)) for links.

## Syntax

This is an overview only. For more detailed discussion and examples, see the list of [French relations](dep/index.html).

### Core Arguments, Oblique Arguments and Adjuncts

- The dominant word order in French is SVO, but other word orders are also possible.
- Nominal subject ([nsubj]()) is a bare noun phrase without preposition.
  If it is a personal pronoun, it must be in the nominative form
  The morphology of a finite verb (or auxiliary) cross-references the person and number of its subject.
- Direct nominal object ([obj]()) is a bare noun phrase or a pronoun with accusative case.
  The accusative pronoun is a clitic and its position in the word order is fixed, the pronoun is before the verb (exept when `Mood=Imp`).
- The relation [iobj]() is used for indirect object when they are pronoun and they come with no preposition.
- The relation [obl]() for oblique argument is given with subtype `arg` or `mod` in most treebanks (see table below).

### Relations Overview
The following relation subtypes are used in French:

| Corpus | FQB | GSD | ParisStories | ParTUT | PUD | Rhapsodie | Sequoia |
|---|---|---|---|---|---|---|---|
| acl:relcl | 77 | 3240 | 310 | 301 | 227 | 507 | 520 |
| advcl:cleft | 17 | 212 | 40 |  |  | 78 | 20 |
| aux:caus | 3 | 250 | 16 | 13 | 9 | 27 | 34 |
| aux:pass | 247 | 3401 | 105 | 241 | 226 | 134 | 759 |
| aux:tense | 503 | 3837 | 1012 |  | 568 | 492 | 948 |
| csubj:pass |  | 26 |  | 1 | 2 | 1 | 4 |
| dep:comp |  | 15 | 27 |  |  | 40 | 5 |
| expl:comp | 176 | 211 | 298 |  | 28 | 293 | 44 |
| expl:pass |  | 687 | 23 |  |  | 33 | 57 |
| expl:pv |  | 1017 | 49 |  | 2 |  | 242 |
| expl:subj | 333 | 931 | 314 |  | 83 | 425 | 237 |
| flat:foreign | 131 | 1075 |  | 3 | 113 | 6 | 136 |
| flat:name | 581 | 7005 | 31 | 61 | 252 | 161 | 807 |
| iobj:agent |  | 24 | 1 | 1 |  |  | 1 |
| nmod:appos |  |  | 4 |  |  | 121 |  |
| nsubj:caus | 1 | 132 | 4 | 4 | 4 | 14 | 16 |
| nsubj:outer |  | 23 | 23 |  |  | 14 | 3 |
| nsubj:pass | 240 | 3666 | 41 | 224 | 200 | 123 | 620 |
| obj:agent |  | 111 | 3 | 9 | 4 |  | 12 |
| obj:lvc |  | 554 | 84 |  |  | 68 | 2 |
| obl:agent | 30 | 1554 | 2 | 69 | 1 | 3 | 281 |
| obl:arg | 570 | 8670 | 508 |  | 80 | 812 | 1608 |
| obl:mod | 611 | 15927 | 1057 |  | 81 | 1118 | 2392 |
| parataxis:insert |  | 183 |  |  |  | 15 | 126 |
| parataxis:parenth |  |  | 27 |  |  | 39 |  |

## Treebanks

There are [nine](../treebanks/fr-comparison.html) French UD treebanks:

  - [UD_French-ALTS](../treebanks/fr_alts)
  - [UD_French-FQB](../treebanks/fr_fqb)
  - [UD_French-GSD](../treebanks/fr_gsd)
  - [UD_French-ParisStories](../treebanks/fr_parisstories)
  - [UD_French-ParTUT](../treebanks/fr_partut)
  - [UD_French-PoitevinDIVITAL](../treebanks/fr_poitevindivital)
  - [UD_French-PUD](../treebanks/fr_pud)
  - [UD_French-Rhapsodie](../treebanks/fr_rhapsodie)
  - [UD_French-Sequoia](../treebanks/fr_sequoia)

Note that the [UD_French-FTB](../treebanks/fr_ftb) was now retired because it was not updated to follow the latest validation contraints.
