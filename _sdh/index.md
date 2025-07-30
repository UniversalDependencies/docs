---
layout: base
title:  'Southern Kurdish UD'
udver: '2'
---

# UD for Southern Kurdish <span class="flagspan"><img class="flag" src="../../flags/svg/IQ-KRD.svg" /></span>

## Tokenization and Word Segmentation

Whitespace and punctuation: Words are generally delimited by whitespace and punctuation marks following standard conventions.
Multiword tokens: The treebank contains 48 multiword tokens that are split into multiple syntactic words. Common patterns include:

Possessive constructions like bawkî → bawk + î (noun + possessive pronoun)
Prepositional contractions like mîveganî → mîvegan + î (noun + pronoun)
Pronominal clitics systematically separated from their hosts

Clitics: Pronominal clitics are segmented as separate tokens and marked with full morphological features (Person, Number, Animacy). Morphological affixes for definiteness and case remain attached to their hosts.
Segmentation policy:

Pronominal clitics: Always separated
Prepositional clitics: Separated if grammatically distinct
Postpositional elements: Remain host-attached


## Morphology

### Tags

PART: The PART tag is used for:

Discourse particles like ewse (that's it), xodi (hey!)
Emphatic particles like he (just, really)
Distributive particles like erî (each, every)

AUX vs VERB:

AUX is used sparingly (4 instances) for auxiliary verbs from daştin (to be) and copular e (is/are)
VERB covers all main verbs including light verbs in compound constructions

Light Verb Constructions: Highly productive pattern of semantically heavy nouns combined with light verbs (primarily dan "give"), annotated with compound:lvc
Unused tags: All major POS tags are represented, with NUM (52 instances) and PUNCT (58 instances) being less frequent categories.


### Features

NOUN features:

Number: Sing, Plur
Definiteness marking when overt

VERB features:

Person: 1, 2, 3
Number: Sing, Plur
Tense: Past, Pres, Fut
Mood: Ind (indicative), Sub (subjunctive), Imp (imperative)
Voice: Act (active), Pass (passive), Cau (causative)
Aspect: Perf (perfective), Imp (imperfective)
VerbForm: Fin (only finite forms in current dataset)

Pronoun features:

Person: 1, 2, 3
Number: Sing, Plur
Animacy: Hum (human), Anim (animate), Inan (inanimate)
Definiteness: Def, Ind, Spec

Other notable features:

ExtPos: Used for multi-word adpositions
Systematic animacy marking on pronouns and some nouns


## Syntax

Core arguments:

Subjects identified with nsubj relation (68 instances)
Direct objects use obj relation (35 instances)
Oblique arguments frequently marked with obl (98 instances), often involving adpositions

Light verb constructions:

Most frequent syntactic pattern (88 instances of compound:lvc)
Structure: NOUN[compound:lvc] → VERB[root]
Example: řikab dey = "to pedal" (lit. "give pedal")

Possessive constructions:

Marked with nmod:poss relation (68 instances)
Structure: NOUN ← PRON[nmod:poss]
Possessive pronouns carry full pronominal features

Subtype relations used:

nmod:poss for possessive modification
compound:lvc for light verb constructions
advmod:emph for emphatic adverbs
fixed for multi-word expressions

Other syntactic features:

Rich inventory of discourse particles marked with discourse relation
Coordination frequently used (conj - 106 instances)
Parataxis common for independent clauses (32 instances)
SOV word order patterns evident in dependency structures

Coordination and subordination:

Extensive coordination without overt coordinators
Subordination marked with mark relation (11 instances)
Relative clauses introduced by ki


## Treebanks

There is 1 (../treebanks/sdh-comparison.html) Southern Kurdish UD treebanks:

  * [Southern Kurdish-Garrusi](../treebanks/sdh_garrusi/index.html)
