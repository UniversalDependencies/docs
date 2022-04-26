---
layout: base
title:  'Umbrian UD'
udver: '2'
---

# UD for Umbrian <span class="flagspan"><img class="flag" src="../../flags/svg/IT-UMB.svg" /></span>

## Tokenization and Word Segmentation

The Iguvine tablets use a word separator to (: in the Umbrian script and ⋅ in the Latin script).
We thus follow native word segmentation as much as possible.
The main exceptions are :
* when the original segmentation itself is erroneous (pesni:mu for pesnimu);
* cliticised adpositions that we decided to separate from their host.

## Morphology

### Tags

* `PUNCT` is not used in Umbrian (note that there are word boundaries in the original text but no sentence boundaries).

<!--
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.
-->

### Features

* `NOUN` is marked with `Case` and `Number`, and `Gender` when the gender is known.
* `VERB` is marked with `VerbForm`, and `Tense`, `Mood`, `Person`, `Number` or `Case`, `Gender`, `Number` depending on the finiteness of the form.
** Note that verbs have a future perfect form which comes from a very reduced periphrastic construction. Until we find a better solution, we decided to use `Aspect=Per` in conjunction with `Tense=Fut` for these cases. 

<!--
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.
-->

## Syntax

* Core arguments are identified with case (`Nom` and `Acc`) and in absence of case triggering adposition ("rupinam-e" is `obl` even if "rupinam" is `Acc`).

<!--
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.
-->

## Treebanks

There are [1](../treebanks/xum-comparison.html) Umbrian UD treebanks:

  * [IKUVINA](../treebanks/xum_ikuvina/index.html)

