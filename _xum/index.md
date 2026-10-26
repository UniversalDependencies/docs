---
layout: base
title:  'Umbrian UD'
udver: '2'
---

# UD for Umbrian <span class="flagspan"><img class="flag" src="../../flags/svg/IT-UMB.svg" /></span>

## Introduction

Umbrian is an Indo-European language of the Italic branch.
As such it shares a number of characteristics with classical IE languages and especially with Latin.
The main similarities between Umbrian and Latin are their declension and conjugation systems.
The main difference, beside phonology, is the extenvive use of cliticised postpositions in Umbrian where Latin has plain prepositions.

## Tokenization and Word Segmentation

The Iguvine tablets use a word separator to (: in the Umbrian script and ⋅ in the Latin script).
We thus follow native word segmentation as much as possible.
The main exceptions are :
* when the original segmentation itself is erroneous (e.g. __pesni:mu__ for __pesnimu__ on tablet II face b);
* cliticised adpositions that we decided to separate from their host (e.g. the ubiquitous __tutaper__ is analysed as __tuta__ __per__).

Since there is no sentence boundary marker, we decided to have one finite verb per sentence unless there are clear signs of subordination (subordinators, relativisers...).
We follow this principle as much as possible while maintaining parallel structures in the original texte.

## Morphology

### Tags

* `PUNCT` is not used in Umbrian (note that there are word boundary markers in the original text but no sentence boundary ones).

### Features

* `NOUN`, `PRON`, `PROPN`, `ADJ`, and `DET` are marked with `Case` and `Number`, and `Gender` when it is known.
* `VERB` is marked with `VerbForm`, and `Tense`, `Mood`, `Person`, `Number` or `Case`, `Gender`, `Number` depending on the finiteness of the form.
** Note that verbs have a future perfect form which comes from a very reduced periphrastic construction. Until we find a better solution, we decided to use `Aspect=Per` in conjunction with `Tense=Fut` 
Excusefor these cases.

## Syntax

* Word order is rather free. The subject, when it is expressed, tends to appear before the verb, and the direct object too, but the indirect object and the beneficiary can appear both before and after the main verb of a proposition. 
* Core arguments are identified with case (`Nom`, `Acc` and `Dat`) and in absence of case triggering adposition (__rupinam-e__ is `obl` even if __rupinam__ is `Acc` because of the adposition __e__).
* Due to the textual genre, describing rituals, many verbs have both an indirect object in the dative for the reciever of the offering (usually a god) and one or more beneficiaries marked with the postposition __per__, often the city state of Iguvium or the atedian brotherhood.

## Treebanks

There is 1 Umbrian UD treebank:

  * [IKUVINA](../treebanks/xum_ikuvina/index.html)
