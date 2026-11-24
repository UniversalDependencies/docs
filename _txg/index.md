---
layout: base
title: 'Tangut UD'
udver: '2'
---

# UD for Tangut 

## Tokenization and Word Segmentation

Tangut manuscripts generally have no spaces between sentences and no punctuation between words. 

For annotation, sentence boundaries are determined by syntactic structure, while translations serve as a reference; punctuation marks are added for convenience. A poem written in a four-line, five- or seven-character meter is treated as a single sentence. Most words consist of a single character, except for some (proper) nouns. Word boundaries are determined according to grammatical criteria.

## Morphology

### Tags

Tangut is a predominantly head-final language, with nominal modifiers preceding their heads and grammatical particles occurring in both preverbal and postverbal positions. The distinction between lexical words and grammatical markers is determined by their syntactic function.

For POS-tagging of Tangut texts in UD, we use `VERB`, `AUX`, `ADV`, `ADJ`, `ADP`, and `SCONJ` for lexical predicates and their grammatical modifiers. We use `NOUN`, `PROPN`, `PRON`, `DET`, and `NUM` for nominal and pronominal expressions. We use `PART`, `CCONJ`, and `INTJ` for particles, conjunctions, and interjections, following the guidelines of UD v2. We also use `PUNCT`, but do not use `SYM` or `X`.

Auxiliary verbs and grammaticalized preverbs are distinguished from lexical verbs. Postverbal person markers are treated as auxiliaries when functioning as agreement clitics, while independent personal pronouns are annotated as `PRON`. Sentence-final particles are annotated as `PART`.

### Features

* `PronType=Prs`|`Dem`|`Ind`|`Tot` for `PRON`.
* `PronType=Dem`|`Ind`|`Int`|`Neg`|`Tot` for `DET`.
* `PronType=Dem`|`Ind`|`Tot` for `ADV`.
* `Person=1`|`2` or `Number=Plur` for agreement markers tagged `AUX`.
* `Polarity=Neg` for `ADV`, `AUX`, `PART`, and `VERB`.
* `Mood=Pot` for potential `AUX`.
* `Reflex=Yes` for reflexive `PRON`.
* `ExtPos=ADP`|`ADV`|`CCONJ`|`DET`|`PRON`|`SCONJ` for multiword expressions.
* `Typo=Yes` for confirmed errors in the original manuscripts, with the corrected form recorded in `MISC`.

## Syntax

* [`discourse:sp`](dep/discourse-sp.html) to annotate sentence-final and clause-final particles.
* [`nsubj:pass`](dep/nsubj-pass.html) to annotate passive nominal subjects.

## Treebanks

There is one Tangut UD treebank:

* [UD_Tangut-MiCA](https://github.com/UniversalDependencies/UD_Tangut-MiCA), containing annotated chapters from the Tangut Lotus Sutra and Avataṃsaka Sūtra.

## Source data

### Lotus Sutra (法華經)

* Transcription: We manually transcribed the images of the original manuscripts published by Chen Bingying (1985).
* Philological reference: Chen Bingying. 1985. 图解本西夏文《观音经》译释. 敦煌研究.
* Original [Universal Dependencies annotations](https://twwspes.github.io/annodoc/saddharmapundarika_sutra/24_tangut): Used with permission from the original annotator, Tak Wai Wong (spes@connect.hku.hk).
* Chinese translation: Publicly circulating edition.
* English translation: [500 Yojanas, Chapter 25](https://www.500yojanas.org/lotus-sutra/chapter25/), identified by the project as licensed under CC BY.

### Avataṃsaka Sūtra (華嚴經)

* Transcription: We manually transcribed the images of the original manuscripts published by Arakawa Shintarō (2011).
* Philological reference: 荒川慎太郎. 2011. 「プリンストン大学所蔵西夏文華厳経巻七十七訳注」『アジア・アフリカ言語文化研究』81:147–305.
* Chinese translation: Publicly circulating edition.
* English translation: Bhikshu Dharmamitra. *The Flower Adornment Sutra*. Kalavinka Press, 2022. Copyright © 2022 Bhikshu Dharmamitra. Partial use authorized by Kalavinka Press.

### Pronunciation

Reconstructions referenced derive from the [Tangut Pronunciation Database](https://github.com/semakosa/tangut-pronunciation-db) by Xun Gong, with its own Limited Public Use License.

### Glossary

Dictionary data is used as a reference for glosses in `MISC`. Dictionary files themselves are not redistributed as part of this treebank.

* Main dictionary: [TangutTranslator](https://github.com/C27Ezx/TangutTranslator/blob/main/tangut_learning_data.json), based on Alan Downes and [Tangut.info](https://tangut.info/).
* Minor corrections based on Xun Gong, *Tangut: An Introductory Reader* (Reichert Verlag, forthcoming), used with permission from Xun Gong.
