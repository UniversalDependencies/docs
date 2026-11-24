---
layout: base
title:  'Laz UD'
udver: '2'
---

# UD for Laz <span class="flagspan"><img class="flag" src="../../flags/svg/TR.svg" /></span>

Laz is a South Caucasian (Kartvelian) language that shares core structural features with Georgian—such as polypersonal verbal agreement, agglutination, and split-ergativity.

## Tokenization and Word Segmentation

* Word Delimitation: In modern orthographies (both Latin-based and Georgian-based), words are regularly delimited by whitespaces and punctuation marks.
* Multi-word Tokens: Due to the highly agglutinative nature of Laz, certain grammatical clitics are attached directly to nominal or verbal bases and must be segmented into individual syntactic words:
  * Auxiliaries / Copulas (AUX): Present-tense copula forms attach directly to nouns or adjectives. Example: noseri-on (she is smart) \(\rightarrow \) noseri (ADJ) + on (AUX).
  * Logophoric Particles (PART): The quotation particle -ya (that / they said) cliticizes to the very end of a cited clause. Example: on-ya \(\rightarrow \) on (AUX) + ya (PART).
  * Negative Particles (PART): The negative marker va- (not) frequently fuses with a following verb or copula. Example: va-it'urs \(\rightarrow \) va (PART) + it'urs (VERB).


## Morphology

### Tags

* AUX (Auxiliary): Assigned to both independent past-tense copula stems (ort'u, t'u) and bound enklitic present-tense forms (on, yen, -re).
* PART (Particle): Used for negative particles (var, va) and the unique indirect/reported speech clitic ya (the Laz equivalent to Georgian -o).
* VERB: Assigned to content-bearing verbs. Masdars (verbal nouns) receive the VERB tag modified by the specific feature VerbForm=Vnoun.

### Features

#### Nominal Features

* Laz completely lacks grammatical gender (Gender) and noun classes (NounClass).
* Nouns inflect for Number (singular vs. plural via the -pe/-ere suffixes) and Case.
* The case inventory includes: Nominative (typically unmarked), Ergative (-k), Dative (-s), Genitive (-iši), Instrumental (-ten), Allative (-ša), and Ablative (-din).

#### Verbal Features

* Verbs inflect for Tense, Aspect, and Mood.
* Polypersonal Agreement: A single Laz verb cross-references Person and Number not just for the subject (Person[subj]), but simultaneously for objects (Person[obj]) using a highly complex system of slot-based prefixes and suffixes.

## Syntax

* Word Order: The default word order strongly leans toward SOV (Subject-Object-Verb), though it remains structurally flexible and pragmatically driven by topic and focus.
* Split-Ergativity: Case marking for core arguments (Subject [nsubj]() and Direct Object [obj]()) changes systematically depending on the tense layer (TAM Series):
  * Present/Incomplete Tenses (Series I): Follows a Nominative-Accusative alignment. The subject of both transitive and intransitive verbs triggers the Nominative case, while direct and indirect objects trigger the Dative case.
  * Past/Aorist Tenses (Series II): Follows an Ergative-Absolutive alignment. The subject of a transitive verb shifts to the Ergative case (-k), while the direct object shifts to the unmarked Nominative case.


## Treebanks

There is one Laz UD treebank:

  * [Laz-BOUN](../treebanks/lzz_boun/index.html)
