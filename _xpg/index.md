---
layout: base
title:  'Phrygian UD'
udver: '2'
---

# UD for Phrygian <span class="flagspan"><img class="flag" src="../../flags/svg/TR.svg" /></span>

## Tokenization and Word Segmentation

In general, words are delimited by whitespace characters. Punctuation is assigned a token of its own. Description of exceptions follows.

There are neither multi-word tokens nor words with spaces.

Clitics are already split from their phonological hosts in the original edited text.

The text preserves the Leiden Conventions to show that Phrygian is attested epigraphically. These are tagged as symbols.

## Sentence split
Sentence split is based on the punctuation found in the original edited text. Sometimes, the last sentence of an inscription lacks a final period, but this does not pose a problem as it is evident the inscription has ended.

In inscriptions where sentence boundaries are unclear, there is no punctuation. As a result, the inscription is read as one sentence.

Epigraphical symbols, such as hederae, dots, or illegible text, do not break off sentences and are considered individual tokens or part of tokens.

---

## Morphology

### Tags

In theory, all 17 UPOS tags are applicable to Phrygian. However, INTJ and SCONJ remain unused.

Phrygian has only 1 AUX (_ituv_), which is also the only copula (see below). It commonly occurs with τιττετικμενος, as in the phrase τιττετικμενος ειτου ‘let him become accursed’.

DET is used when the token agrees with and is dependent on a head noun. PRON is used when the token stands on its own.

There are 3 VerbForms:
* Finite verb forms (Fin), tagged VERB of AUX;
* Infinitives (Inf), tagged VERB of AUX, though unattested;
* Participles (Part), tagged VERB of AUX.

---

### Features

NOUN is inflected for case, gender and number, so are ADJ, DET PRON and PROPN. The cases are nominative, accusative, genitive and dative. The genders are masculine, feminine and neuter. The numbers are singular and plural.

VERB is inflected for mood, number, person, tense, VerbForm and voice. The moods are indicative, subjunctive and imperative. The persons are 1st, 2nd and 3rd. The tenses are present and past. The voices are active and middle.
* If the verb is an imperfect or perfect, aspect is specified. The aspects are respectively imperfect and perfect.
* If the VerbForm is Part, case and gender are also added.

---

## Syntax

Standard deprels are used.

Subjects are easily identified as nominatives. Direct objects are in the accusative. Indirect objects are mostly in the dative: there is only 1 attestation of the genitive used as an indirect object.

There is only 1 copula attested (_ituv_), which is also the only AUX (see above).

The syntax of a word or even an entire sentence is often unclear. This can result from the partial preservation of a sentence, but also from a lack of knowledge of Phrygian. To honestly show lack of clarity, a dep relation is used which connects to the root of the sentence.

---

## Treebanks

There is [1](../treebanks/xpg-comparison.html) Phrygian UD treebank:

  * [Phrygian-KUL](../treebanks/xpg_kul/index.html)

---
