---
layout: base
title: "Brahui UD"
udver: "2"
---

# UD for Brahui <span class="flagspan"><img class="flag" src="../../flags/svg/PK.svg" /></span>

## Tokenization and Word Segmentation

- In general, words are delimited by whitespace characters. Description of exceptions follows.
- According to typographical rules, many punctuation marks are attached to a neighboring word.

## Morphology

### Tags

- **Unused/Absent UD Tags**  
  The following universal POS tags did not occur in the provided data and are therefore not used:

  - `INTJ` (interjection)
  - `SYM` (symbol)
  - `X` (other / unclassifiable)

- **AUX vs VERB (how the distinction is drawn)**  
  The distinction follows UD guidelines with an English-oriented diagnostic:

  - `AUX` is used for verbs whose primary function is grammatical.
  - `VERB` is used for lexical verbs that provide the main predicate semantics.  
    In ambiguous cases, the test used is whether the verb can be replaced by a full lexical verb without loss of core lexical content (if not, label `AUX`; otherwise, `VERB`).

- **DET vs PRON (how the distinction is drawn)**  
  Following UD syntax-based diagnostics (English-style):

  - `DET` is assigned to words that serve to modify a noun and function as dependents inside a noun phrase (determiners, articles, demonstratives when they function as modifiers).
  - `PRON` is assigned to words that can act as the head of a noun phrase (personal pronouns, relative pronouns, reciprocals when they stand alone).  
    Feature values (`PronType`, `Person`, `Number`, `Case`) are used to refine classification.

### Features

- **Note:**  
  The feature inventory and distinctions largely follow English-style analyses, adapted where possible to Brahui data.

- **Nouns (NOUN)**  
  Nouns are annotated with features such as:

  - **Gender:** Not marked, as Brahui does not show grammatical gender in the available data.

  Features include:

  - `Number=Sing|Plur`
  - `Case=Nom|Acc|Gen`

- **Verbs (VERB)**  
  Verbal features rely on UD conventions and English-based analysis where Brahui-specific descriptions were unavailable.

  Features include:

  - `VerbForm=Fin|Inf|Conv`
  - `Tense=Past|Pres|Fut`
  - `Mood=Ind|Imp`
  - `Voice=Cau|Pass`
  - `Polarity=Neg`
  - `Person=1|2|3`
  - `Aspect=Imp|Perf`

- **Pronouns (PRON)**  
  Pronouns are annotated with features such as:

  - **Gender:** Not marked, as Brahui does not show grammatical gender in the available data.

  Features include:

  - `PronType=Art|Dem|Ind|Prs|Rel|Tot`
  - `Number=Sing|Plur`
  - `Case=Nom|Acc|Gen`
  - `Reflex=yes`
  - `Poss=yes`
  - `Person=1|2|3`

## Syntax

## Core Arguments (Subjects and Objects)

In this treebank, core arguments—subjects and objects—are annotated using rules largely based on English grammar.

### Subjects (`nsubj`)

A token is annotated as a subject when:

- it represents the main agent or participant of the action,
- it typically precedes the verb, following English word-order conventions,
- it would function as the subject if the sentence were translated into English.

Subjects are consistently annotated across both verbal and nonverbal clauses.

### Objects (`obj`, `iobj`)

Object relations follow straightforward principles:

- `obj` denotes the direct object, i.e., the entity directly acted upon by the verb.
- `iobj` denotes the indirect object, typically the recipient of an action.

In ambiguous cases, English grammar diagnostics were employed to assign the correct label.

## Copula and Nonverbal Predicates

Some clauses lack a prototypical verb such as “run” or “eat” and instead express states or properties, such as being, becoming, or possession.

- Copula verbs that only show tense or time (like “is” or “was”) are labeled as `aux`.
- When there is no copula verb, the noun or adjective acts as the main word, and the subject is linked to it with `nsubj`.

No Brahui-specific syntactic rules were introduced.

## Dependency Relations

The treebank employs the following Universal Dependencies (UD) relations:

`acl`, `acl`, `advcl`, `advmod`, `amod`, `appos`, `aux`,  
`case`, `cc`, `ccomp`, `compound`, `conj`, `det`,
`flat`, `iobj`, `mark`, `nmod`, `nmod:poss`, `nsubj`, `nummod`,  
`obj`, `obl`, `obl:tmod`, `parataxis`, `punct`, `root`, `xcomp`.

All relations are standard UD relations; no language-specific extensions were created.

## Treebanks

There are [N](../treebanks/LCODE-comparison.html) LANGUAGE UD treebanks:

- [LANGUAGE-A](../treebanks/LCODE_a/index.html)
- [LANGUAGE-B](../treebanks/LCODE_b/index.html)

---

**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
