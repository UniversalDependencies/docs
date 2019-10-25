---
layout: base
title:  'Maltese UD'
udver: '2'
---

# UD for Maltese <span class="flagspan"><img class="flag" src="http://universaldependencies.org/flags/svg/MT.svg" height="20"/></span>

## Tokenization and Word Segmentation

* Tokens are delimited by a) whitespace, b) apostrophe and c) hyphen as follows:
  * Whitespace is the default token delimiter
  * Apostrophe is a delimiter for proclitic variants of prepositions/case markers *b'*, *f'*, *m'*, *s'* and *t'*
  * Hyphens is a delimiter for the definite article *il-* and its assimilated forms which include prepositions/case markers with fused definite definite article; these are - for the moment - treated as single tokens.
* A comma is treated as a token separator in numbers, e.g. *1,500* is three tokens: 1 - , - 500.
* Words with spaces or multi-word tokens do not occur in MUDT.


## Morphology

### Tags
* For the native tagset (XPOS), see the table below. The tagging decisions are made based on three criteria in the following hierarchy:
  * Semantics (e.g. words designating beings, things and concepts = NOUN; words designating properties = ADJ, words designating actions, processes and states = VERB)
  * Morphology (e.g. words that can take feminine suffix *-a* or plural suffix *-i-* = ADJ, VERBs that can appear in both prefixal and suffixal conjugations = VERB, VERBS that are conjugated with only one affix set = VERB_PSEU)
  * Syntax (e.g. GEN and LIL could very well fit under PREP, but their syntactic role is quite different from PREP; same goes for FOC which are normally classified under ADV, but their syntactic behavior is quite different; HEMM is normally classified as a VERB_PSEU, but it behaves idiosyncratically)


| ID | TAG       | Description                    | ID | TAG           | Description                           |
|----|-----------|--------------------------------|----|---------------|---------------------------------------|
| 1  | ADJ       | adjective                      | 25 | PART_ACT      | active participle                     |
| 2  | ADV       | adverb                         | 26 | PART_PASS     | passive participle                    |
| 3  | COMP      | complementizer                 | 27 | PREP          | preposition                           |
| 4  | CONJ_CORD | coordinating conjunction       | 28 | PREP_DEF      | preposition with article              |
| 5  | CONJ_SUB  | subordinating conjunction      | 29 | PREP_PRON     | preposition with pronoun              |
| 6  | DEF       | article                        | 30 | PROG          | progressive particle                  |
| 7  | FOC       | focus particle                 | 31 | PRON_DEM      | demonstrative pronoun                 |
| 8  | FUT       | future particle                | 32 | PRON_DEM_DEF  | demonstrative pronoun with article    |
| 9  | GEN       | genitive particle              | 33 | PRON_INDEF    | indefinite pronoun                    |
| 10 | GEN_DEF   | genitive particle with article | 34 | PRON_INT      | interrogative pronoun                 |
| 11 | GEN_PRON  | genitive particle with pronoun | 35 | PRON_PERS     | personal pronoun                      |
| 12 | HEMM      | existential verb               | 36 | PRON_PERS_NEG | personal pronoun with negative suffix |
| 13 | INT       | interjection                   | 37 | PRON_REC      | reciprocal pronoun                    |
| 14 | KIEN      | the copular/auxiliary verb *kien*   | 38 | PRON_REF      | reflexive pronoun                     |
| 15 | LIL       | oblique particle               | 39 | QUAN          | quantifier                            |
| 16 | LIL_DEF   | oblique particle with article  | 40 | VERB          | verb                                  |
| 17 | LIL_PRON  | oblique particle with pronoun  | 41 | VERB_PSEU     | pseudoverb                            |
| 18 | NEG       | verbal negator                 | 42 | X_ABV         | abbreviation                          |
| 19 | NOUN      | noun                           | 43 | X_BOR         | bordel                                |
| 20 | NOUN_PROP | proper noun                    | 44 | X_DIG         | digits                                |
| 21 | NUM_CRD   | cardinal numeral               | 45 | X_ENG         | English words                         |
| 22 | NUM_FRC   | fractions                      | 46 | X_FOR         | other foreign words                   |
| 23 | NUM_ORD   | ordinal numeral                | 47 | X_PUN         | punctuation                           |
| 24 | NUM_WHD   | number one                     |    |               |                                       |

* Some forms can appear in two different syntactic roles - *Maltin* can be both and ADJ and a NOUN, *qabel* can function both as a PREP and an ADV. In such cases, they are tagged based on their syntactic role.
* MUDT uses all 17 UPOS. The XPOS > UPOS matching is straightforward (see table below), except where UD guidelines regarding the matching of UPOS and `relation` mandate otherwise.


| UPOS  | XPOS                                                                                                       | Comments                                                                   |
|-------|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| ADJ   | ADJ                                                                                                        |                                                                            |
| ADV   | ADV, FOC                                                                                                   |                                                                            |
| INTJ  | INT                                                                                                        |                                                                            |
| NOUN  | NOUN, X_ABV                                                                                                |                                                                            |
| PROPN | NOUN_PROP                                                                                                  |                                                                            |
| VERB  | HEMM, PART_ACT, PART_PASS, VERB, VERB_PSEU                                                                 |                                                                            |
| ADP   | PREP, PREP_DEF, GEN, GEN_DEF, LIL, LIL_DEF                                                                 |                                                                            |
| AUX   | KIEN, FUT, PROG, PRON_PERS_NEG                                                                             | see the note below the table                                               |
| CCONJ | CONJ_CORD                                                                                                  |                                                                            |
| DET   | DEF, QUAN                                                                                                  |                                                                            |
| NUM   | NUM_CRD, NUM_FRC, NUM_ORD, NUM_WHD                                                                         | including higher-order numbers normally declined as nouns such as *miljun* |
| PART  | NEG                                                                                                        |                                                                            |
| PRON  | GEN_PRON, LIL_PRON, PREP_PRON, PRON_DEM, PRON_DEM_DEF, PRON_INDEF, PRON_INT, PRON_PERS, PRON_REC, PRON_REF |                                                                            |
| SCONJ | CONJ_SUB                                                                                                   |                                                                            |
| PUNCT | X_PUN                                                                                                      | but see SYM below                                                          |
| SYM   | X_PUN                                                                                                      | with the exception of mathematical symbols and currency symbols            |
| X     | X_BOR                                                                                                      |                                                                            |
* The following are considered UPOS AUX in MUDT:
  * XPOS KIEN (the verb *kien*) in all its forms
  * XPOS VERB_PSEU *għad* and its negative form *għadx*
  * XPOS VERB_PSEU *tantx* (this one only provisionally so pending further study)
  * XPOS PRON_PERS *hux*, *hix* etc. which function as interrogative pronouns
  * XPOS PRON_PERS_NEG and XPOS PRON_PERS when preceded by XPOS NEG
  * XPOS VERB *ġa* used as the passive auxiliary
  * XPOS FUT (*se*, *ħa*, *għad*) and XPOS PROG (*qed* and its variants)
* Modal verbs are not considered AUX in MUDT
* UPOS PART is only used for *ma* (XPOS NEG)  
* The distinction between PRON and DET is primarily semantic; consequently, only XPOS DEF and XPOS QUAN are considered DET in the UPOS sense.


### Features

* Morphological features are not employed in MUDT.
* PRON types are encoded in the native tagset (see above).

## Syntax
### General

* Five types of clauses are defined in MUDT:
  * Verbal clauses (those with XPOS VERB or VERB_PSEU as the root)
  * Copular clauses
  * Non-copular verbless clauses
  * Existential clauses (those with XPOS HEMM as the root)
  * Non-expletive subjectless clauses (all the rest)
* There are four types of copular clauses
  * No copula (Type i)
  * Personal pronoun (XPOS PRON_PERS) as the copula (Type ii)
  * XPOS PART_ACT *qiegħed* and its forms as the copula (Type iii)
  * XPOS KIEN as the copula (Type iv)
* The relation `cop` is used for XPOS PRON_PERS, XPOS PART_ACT and XPOS KIEN in copular clauses of Types ii-iv. The negated form of personal pronouns (XPOS PRON_PERS_NEG) when functioning as a negative copula is provisionally tagged `aux:neg` throughout.

### Core and oblique arguments
* Core arguments in MUDT are defined based on verbal valency, largely as conceptualized by [VALLEX 3.0](http://ufal.mff.cuni.cz/vallex/3.0/theory.html), especially its notion of obligatoriness
* A nominal subject (`nsubj`) is primarily defined as the obligatory nominal dependent of verbal, copular and existential clauses that
  * agrees with the predicate in gender, number and person  (most verbal and all type (iv) copular clauses)
  * agrees with the predicate in gender and number (type (ii) and type (iii) copular clauses)
  * is the only mandatory nominal dependent of the predicate for type (i) copular
clauses and main existential clauses
* An object (`obj` or `iobj`) is primarily defined as
  * a verbal dependent that bears the XPOS LIL/LIL_DEF case markers
  * a verbal dependent not bearing the case markers cited above (or any preposition) that is replaceable or can be co-referential with the respective member of either of the verbal clitic sets
* Additionally, MUDT recognizes another type of core argument, the non-canonical object, which is for the purposes of UD designated `obl:arg`. This relation is used for the following verbal dependents:
  * obligatory arguments realized by means of prepositional phrases, regardless of how many and what other arguments the verb has
  * obligatory arguments realized by means of prepositional phrases that alternate with noun phrases (including clitics) normally annotated as `obj`
  * obligatory arguments indicating the outcome, effect or origin, regardless of whether they are realized as noun phrases or prepositional phrases and regardless of how many and what other arguments the verb has
* All non-obligatory prepositional phrases with adverbial function are attached as `obl`

### Relations overview
* The following relation subtypes are used in MUDT:
  * `advmod:neg` for verbal negators *ma* and *lanqas*
  * `aux:neg` for verbal and copular negators with XPOS PRON_PERS_NEG
  * `aux:part` for verbal particles
  * `aux:pass` for the passive auxiliary *ġa*
  * `case:det` for prepositions and case markers with fused definite article
  * `cop:expl` for XPOS KIEN in non-copular verbless clauses
  * `flat:name` for personal and place names
  * `nmod:poss` for possessive constructions, whether the status constructus or those mediated by XPOS GEN
  * `nsubj:pass` for the nominal subject of passive verbal clauses
  * `obl:arg` for the non-canonical object
  * `obl:agent` for the agent in passive verbal clauses
