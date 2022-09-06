---
layout: base
title:  'Gheg UD'
udver: '2'
---

# UD for Gheg <span class="flagspan"><img class="flag" src="../../flags/svg/AL.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespace. Since the input is spoken language, no punctuation was used apart from a sentence-final dot to indicate turn ends.
* Different types of multi-word tokens occur:
  * discourse marker *do me thënë* (that is, namely; see *domethënë* in Standard Albanian)
  * complex prepositions like *në vend që* (instead of), *për shkak se:* (because of), and *para se* (before)
  * subjunctions like *edhe pse* (even though)
  * idiomatic expressions like *antej kentej* (here and there) and *kadal kadale* (slowly but surely)


## Morphology

### Tags

* 15 out of 17 tags were used. `SYM` and `PROPN` did not occur.
* The following words were tagged as [PART]():
  * negation particles *as*, *s*, *nuk*, *mos*
  * infinitive particle *me*
  * affirmative particle *de*
  * comparative/superlative particle *ma*
  * question particle *a*
  * discourse particles *ani* (okay), *okej* (okay), *faleminderit* (thank you), *jo* (no)
* Gheg has 7 auxiliaries ([AUX]()), 2 verbs and 5 particles:
  * copula verb *jam* (be)
  * auxiliary verb *kam* (have), which is used in combination with the non-finite form of the main verb to form periphrastic tenses. *jam* (be) is used in the same function in combination with verbs of movement.
  * future particle *do*
  * progressive particles *po*, *tu*, *duke*
  * reflexive and passive particle *u*
* The tag [DET]() is used for articles which cannot occur independently. They always occur in combination with a noun or adjective (*e*, *i*, *një*, *së*, *të*). The tag [PRON]() is used for pronouns that can occur as the head of a noun phrase.
* Participles are tagged as [ADJ]() when used adjectivally.



### Features

* Nouns have inherent [Gender]() (`Masc` or `Fem`) and inflect for [Number]() (`Sing` or `Plur`), [Case]() (`Nom`, `Acc`, `Dat`, `Gen`, `Abl`) and [Definite]() (`Def` or `Ind`).
* Verbs inflect for [Mood]() (`Ind`, `Adm`, `Sub`), [Tense]() (`Imp`, `Past`, `Pres`), [Person]() (`1`, `2`, `3`), [Number]() (`Plur`, `Sing`) and [Voice]() (`Act`, `Pass`). There is one non-finite verb form, i.e. a participle, which is used to form perfect tenses with auxiliary *kam*/*jam* (`VerbForm=Part`), and a distinct infinitive construction with the particle *me* (`VerbForm=Inf`), e.g. *me pas* (to have).
* Adjectives agree with nouns in [Case](), [Gender](), [Number]() and [Definite](). [Degree]() (`Cmp` or `Sup`) is marked with the preceding particle *ma*.
* Adverbs only inflect for [Degree]().
* Pronouns inflect for [Case](), [Gender](), [Number](); they are marked for [PronType]() (`Int`, `Rel`, `Dem`, `Neg`, `Prs`). Personal pronouns inflect for [Person]() (`1`, `2`, `3`). Reflexive pronouns are marked with [Reflex]() (`Yes`).
* Determiners inflect for [Case](), [Gender]() and [Number](). The indefinite article is marked with [Definite]() (`Ind`).
* Numerals have [NumType]() (`Card`,`Ord`) and inflect for [Case]() and [Gender](). Ordinal numbers also inflect for [Number]().

## Syntax

* Core arguments are nouns and pronouns that connect with the verb without adpositions. 
* Subjects occur in nominative and (rarely) dative case, e.g. *m doket* (it seems to me). 
* Objects occur in accusative and dative case.
* Pronominal arguments can be omitted.
* Word order is relatively free.
* The copula *jam* (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses. Existential clauses are expressed with *kam* (have) and other verbs expressing existence, e.g. *ndodh* (happen, occur).
* Two subtype relations are used:
  * [nsubj:outer]() for subjects of copula sentences with a clausal predicate
  * [aux:part]() for TAM modulating particles that modify a verb


## Treebanks

There is one Gheg UD treebank.

  * [Gheg-GPS](../treebanks/aln_gps/index.html)

