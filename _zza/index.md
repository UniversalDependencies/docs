---
layout: base
title:  'Zazaki UD'
udver: '2'
---

# UD for Zazaki <span class="flagspan"><img class="flag" src="../../flags/svg/IQ-KRD.svg" /></span>

## Tokenization and Word Segmentation

The current Zazaki-ZSD treebank (200 sentences, 1440 syntactic words) contains 70 multiword tokens that are split into multiple syntactic words. Typical patterns are:

* Noun + Ezafe, e.g. **çarê** → *çar* `NOUN` + *ê* `ADP`, **dewa** → *dew* `NOUN` + *a* `ADP` with a following possessor (*dewa ma* “our village”), adjective (*miletê kanî* “the old people”), or `MARK` in relative constructions.
* Pronoun + directional particle in preverbs, e.g. **pi-ro** → *pi* `PRON` + *ro* `ADP`, with *ro* annotated as a verbal particle (`compound:prt`).

Clitics are segmented as separate tokens and marked with full morphological features (Person, Number, Gender). Morphological affixes for case remain attached to their hosts.

Adpositions remain host-attached but are written seperately.

## Morphology

### Tags

Out of the 17 universal POS tags, all except `SYM` occur in the Zazaki-ZSD treebank. The following tags are attested:

`ADJ`, `ADP`, `ADV`, `AUX`, `CCONJ`, `DET`, `INTJ`, `NOUN`, `NUM`, `PART`, `PRON`, `PROPN`, `PUNCT`, `SCONJ`, `VERB`, `X`.

The most frequent categories are `PUNCT` (312), `VERB` (241), `NOUN` (216), `PRON` (196), and `ADP` (186), reflecting the spoken, narrative nature of the corpus.

**AUX vs. VERB**

The tag `AUX` (40) is used exclusively for forms of the copular and auxiliary verb *bîyene* “to be”, both in copular clauses and in periphrastic constructions expressing existence (e.g., *est o*). All other verbal lexemes, including light verbs (*kerdene*, *vatene*, *kutene* etc.), are tagged as `VERB` (241).

**ADP**

`ADP` may refer to proper pre-, post- and circumpositions like *de*, *ra*, *bi* (adposition type is not distinguished in the data), or to Ezafe particles in possessive constructions that are attached to the head noun with the relation `Case`. In the latter case, there is a distinction of `Gender`, `Number`, and `Case`.

**PART**

The tag `PART` (49 instances) is used mainly for discourse and pragmatic particles typical of spoken data, including fillers, attention markers, and pragmatic modifiers such as *yanî*, *îşte*, *ya*, and *hanî*. These particles are normally attached via `discourse`.

Other uses include semantically devoid preverbal elements of complex verbs, such as *arê*  and *hes* (3 instances each). These particles are  attached via `compound:prt`. 

**INTJ**

`INTJ` (27 instances) is used for independent interjections, often occurring at clause boundaries or in repairs.

**X and foreign material**

`X` is used in only 2 instances. It is restricted to clearly foreign lexical items. Foreign material is indicated by the feature `Foreign=Yes`. Foreign sequences are occasionally structured using `flat:foreign`.

### Features

The following universal morphological features are attested in the Zazaki-ZSD treebank:

**Nominal domain**

* `Gender`: `Masc`, `Fem`
* `Number`: `Sing`, `Plur`
* `Case`: `Nom`, `Acc`  
  Since Zazakî has a bicasual system, `Nom` (24) stands for the direct case, whereas `Acc` (77) describes the oblique case. Case is only annotated if it is morphologically marked.
  
  Case marking is mostly restricted to pronouns and a small number of nouns, determiners, and proper names.
* `Definite`: `Ind` 

**Pronominal features**

* `Person`: `1`, `2`, `3`
* `Number`: `Sing`, `Plur`
* `Gender`: `Masc`, `Fem`
* `PronType`: `Prs`, `Dem`, `Int`, `Ind`, `Rcp`
* `Reflex`: `Yes` (for the reflexive pronouns *xo*)
* `Animacy`: `Anim` 
`Anim` (2 instances) is restricted to the d-form pronouns of Northern Zazakî.

**Verbal domain**

* `Tense`: `Pres`, `Past`
* `Mood`: `Ind`, `Sub`, `Imp`
* `Aspect`: `Imp`, `Perf`
* `Polarity`: `Neg`
* `VerbForm`: `Fin`, `Part`
* `Voice`: `Pass` (only in one instance)

**Other features**

* `NumType`: `Card` (for numerals)
* `Foreign`: `Yes` (for foreign or code-switched material)

No language-specific features are introduced. Several features occur only marginally and should not be interpreted as fully systematic morphological categories in this version of the treebank.

## Syntax

### Core arguments

Subjects of finite clauses are annotated with `nsubj`, regardless of morphological case marking. Zazakî exhibits predominantly SOV word order. However, as is expected, goals and recipients typically appear post-verbally. In addition, the spoken data shows some instances of afterthought or discourse particles that appear after the verb.

Direct objects are annotated with `obj`, while indirect objects (`iobj`) occur only rarely with recipients. Oblique arguments and adjuncts are annotated with `obl`, often accompanied by an adposition marked with the relation `case`.

### Nominal modification and possession

Possessive constructions are annotated with the relation `nmod:poss`. These constructions commonly correspond to Ezafe structures, where the Ezafe marker is annotated as `ADP` with the relation `case` attaching it to the head noun.

Other nominal dependents are annotated using standard relations such as `amod`, `det`, `nummod`, `nmod`, and `appos`.

Reduplicated forms are annotated with `compound:redup`.

### Light verb and particle constructions

Light verb constructions are a productive syntactic pattern and are annotated using `compound:lvc`, linking a nominal element to a verbal head.

Verbal particles and preverbs (e.g. *pi-ro*) are annotated with `compound:prt`.

Asyndetic forms are annoted with `conj`.

### Clause structure

Copular clauses use the relation `cop`, with the non-verbal predicate as the clause head and the copular auxiliary (*bîyene*) attached as a dependent.

Finite clausal complements are annotated with `ccomp`, while non-finite or subject-controlled complements are annotated with `xcomp`.

Adverbial clauses are annotated with `advcl` and are typically introduced by subordinators (*ke*) marked with the relation `mark`.

Relative clauses are annotated with `acl:relcl`.

### Discourse and spoken-language phenomena

Given the conversational nature of the data, the treebank contains a rich set of discourse-related constructions. Discourse particles and fillers are attached with the relation `discourse` (74 instances).

Repairs and false starts are annotated using `reparandum` (4 instances). Independent or loosely connected clauses are linked via `parataxis` (7).

Left- and right-dislocated constituents are annotated with `dislocated` (6 instnaces), and direct forms of address use the relation `vocative` (5).

### Coordination

Coordination is annotated using `conj` for conjuncts and asyndetic verbs, and `cc` for coordinating conjunctions. Punctuation is attached using `punct` to the most relevant syntactic head.

## Treebanks

There is 1 Zazaki UD treebank:

  * [Zazaki-ZSD](../treebanks/zza_zsd/index.html)
