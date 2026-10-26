---
layout: base
title:  'Peripheral Mongolian UD'
udver: '2'
---

# UD for Peripheral Mongolian <span class="flagspan"><img class="flag" src="../../flags/svg/CN.svg" /></span>

Peripheral Mongolian (ISO 639-3: `mvf`) is a group of Mongolic varieties spoken
mainly in the Inner Mongolia Autonomous Region of China. The variety documented
in the current Universal Dependencies data is **Ordos**, spoken in the Ordos
region of Inner Mongolia. Like other Mongolic languages, Ordos is an
agglutinative language with predominantly suffixing morphology and basic
subject–object–verb (SOV) word order.

The current UD data for Ordos is presented in Latin transliteration and
accompanied by English translations.

## Tokenization and Word Segmentation

* Words are delimited by whitespace characters in the transliteration.
* Punctuation marks are tokenized as separate tokens.
* There are currently no fused multi-word tokens and no words with spaces.

## Morphology

### Tags

* The annotation uses the universal POS tags. Open classes such as [NOUN](),
  [VERB](), [ADJ]() and [ADV]() are well attested, as are closed classes such
  as [PRON](), [DET](), [ADP](), [NUM]() and [PUNCT]().
* The copula _bai_ “to be” is annotated as [AUX]() when used as a copula or in
  periphrastic verb forms.

### Features

The annotation prioritizes the universal morphological features, which account
for the large majority of feature annotations. A small number of
language-specific features are used to capture distinctions that are
morphologically overt in Ordos:

* `Derivation=Collective`, `Derivation=Iterative`, `Derivation=Multiplicative`
  are used to mark derivational morphology on verbs.
* `Focus=Only` marks focus particles at the clausal level.
* Possessive agreement on nominal heads is marked with `Person[psor]`
  (`Person[psor]=1`, `Person[psor]=2`, `Person[psor]=3`) and `Number[psor]`
  (`Number[psor]=Sing`, `Number[psor]=Plur`), encoding possessive suffixes on
  nouns.
* Nominal case is marked with the [Case]() feature, including nominative,
  accusative, genitive, dative and other values.
* Verbal categories are marked with [Mood](), [Tense]() and [VerbForm]().
  Finite verbs use `VerbForm=Fin`; converbs (verbal adverbs) functioning as
  predicates of dependent adverbial clauses use `VerbForm=Conv`.

## Syntax

### Core arguments

* Subjects are typically in the nominative case and are annotated with
  [nsubj]() for nominal subjects.
* Direct objects are typically in the accusative case and are annotated with
  [obj]().
* Indirect objects are annotated with [iobj]().

### Copula constructions

* Nonverbal predicates (nominal and adjectival) may be combined with the copula
  _bai_, which is attached to the nonverbal predicate with the [cop]() relation.

### Language-specific relations

The following language-specific subtypes of dependency relations are used in
the Ordos data:

* [det:poss]() — possessive determiner
* [nmod:tmod]() — temporal nominal modifier
* [obl:agent]() — oblique agent
* [obl:comit]() — comitative oblique
* [obl:instr]() — instrumental oblique
* [obl:than]() — oblique standard of comparison
* [obl:time]() — temporal oblique
* [obl:tmod]() — temporal oblique modifier
* [subj]() — subject (used where a finer subject subtype is needed)

## References

* Georg, Stefan. 2003. Ordos. In Juha Janhunen (ed.), *The Mongolic
  Languages*, 193–209. London: Routledge.

## Treebanks

There is one Peripheral Mongolian UD treebank:

* [Peripheral Mongolian-Ordos](../treebanks/mvf_ordos/index.html)