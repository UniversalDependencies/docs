---
layout: base
title:  'Southern Kurdish UD'
udver: '2'
---

# UD for Southern Kurdish <span class="flagspan"><img class="flag" src="../../flags/svg/IQ-KRD.svg" /></span>

## Tokenization and Word Segmentation

Whitespace and punctuation: Words are generally delimited by whitespace and punctuation marks following standard conventions.
Multiword tokens: The treebank contains multiword tokens that are split into multiple syntactic words. Common patterns include:

Contracted forms like meseleyēkit → meseleyēk + it (noun + pronoun)
Prepositional contractions like Lew → L + ew (preposition + determiner)
Possessive constructions like xoy → xo + y (reflexive particle + pronoun)
Compound forms like yēkmān → yēk + mān (numeral + pronoun)


Clitics: Various clitics are segmented as separate tokens, including pronominal clitics, reflexive markers, and case markers.
Special characters: Curly braces {} and hash symbols # appear to mark editorial or corrective annotations in the text.


## Morphology

### Tags

Unused tags: All major POS tags appear to be used in the treebank.
PART: The PART tag is used for:

Discourse particles like Yānī (meaning), Dā (vocative particle)
Reflexive particles like xo (self)
Coordinative particles like ū (and), w (and)
Modal particles like bā (let's)
Negation particles like ne (not)


AUX vs VERB:

AUX is used for copular constructions and auxiliary verbs like e (is/are), te (you are)
VERB covers all other verbal predicates including main verbs and complex predicates


DET vs PRON:

DET is used for definite articles like ew/ewe (the) and demonstratives in determiner function
PRON covers personal pronouns, demonstrative pronouns, and interrogative pronouns


Deverbal forms: Some participles and verbal nouns may be tagged as ADJ, ADV, or NOUN depending on their syntactic function.


### Features

NOUN features:

Number: Sing, Plur
Definite: Def (definite), Ind (indefinite), Spec (specific)
Person: Used for some nouns in possessive constructions


VERB features:

VerbForm: Fin (finite), Inf (infinitive)
Mood: Ind (indicative), Sub (subjunctive), Imp (imperative)
Tense: Pres (present), Past (past)
Person: 1, 2, 3
Number: Sing, Plur
Voice: Act (active), Pass (passive)
Aspect: Imp (imperfective) for some past forms


Pronoun features:

Person: 1, 2, 3
Number: Sing, Plur
Reflex: Yes (for reflexive pronouns)


Other notable features:

ExtPos: Used to mark extended parts of speech, particularly for adpositions
Definite: Widely used across multiple word classes
Various case and agreement features are marked


## Syntax

Core arguments:

Subjects are identified with the nsubj relation
Direct objects use the obj relation
Indirect objects and oblique arguments use iobj and obl relations
Southern Kurdish shows ergative alignment patterns in past tenses


Copula constructions:

Simple copular clauses use the copula e (is/are) as the root with nsubj and complement
The copula can appear as both AUX and VERB depending on construction type
Zero copula constructions occur in present tense


Subtype relations used:

nmod:poss for possessive modification
compound:lvc for light verb constructions (very common in Southern Kurdish)
acl:relcl for relative clauses


Other syntactic features:

Extensive use of light verb constructions marked with compound:lvc
Complex predicate formations are common
SOV word order predominates
Rich case marking system reflected in dependency relations


## Treebanks

There is 1 (../treebanks/sdh-comparison.html) Southern Kurdish UD treebanks:

  * [Southern Kurdish-Garrusi](../treebanks/sdh_garrusi/index.html)
