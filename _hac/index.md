---
layout: base
title:  'Gorani UD'
udver: '2'
---

# UD for Gorani <span class="flagspan"><img class="flag" src="../../flags/svg/IQ-KRD.svg" /></span>

Gorani (ISO 639-3: `hac`) is a Northwestern Iranian language. In Universal Dependencies the first treebank documents the Hawrami (Hewramî) variety. The description below records the annotation decisions used for that treebank. They follow the published interlinear analysis of the source text and the universal guidelines. Where a Hewramî category does not yet have a settled UD analysis, the treebank keeps the universal label that the guidelines already define instead of inventing a language-specific one.

## Tokenization and Word Segmentation

Tokens are orthographic words as printed in the source transcription. Punctuation is split off as a separate `PUNCT` token. There are no multiword tokens and no words with internal spaces. Clitics and other bound elements that the published interlinear gloss writes with `=` or `-` are still kept inside the orthographic word. The source gloss is preserved in `MISC` as `Gloss`. A later revision may split some of these clitics into syntactic words; until that review, person indexes, possessive clitics, additive particles, and copular material can remain attached to the host.

Sentence boundaries follow the numbered annotation units of the source recording. Those units are intonation units, so one UD sentence may contain more than one clause. The original unit id is kept in `MISC` as `SourceUnit` and in the sentence id (`hwr-rec-zb-001` corresponds to ZB.1). If a token is not followed by a space in the sentence text, its `MISC` contains `SpaceAfter=No`.

## Morphology

### Tags

The treebank uses universal POS tags only. There is no language-specific XPOS tagset (`XPOS` is `_`).

* `NOUN`, `PROPN`, `ADJ`, `ADV`, `NUM`, `PRON`, `DET`, `ADP`, `CCONJ`, `PART`, `INTJ`, `VERB`, `AUX`, `PUNCT`, and `X` occur in the data.
* `AUX` is reserved for forms of the verb “to be” (lemmas `bî` and `bîyê`). Other verbs, including lexical “come” and “take”, are `VERB`.
* `DET` is used for demonstratives and for `herçê` “whatever” when it determines a nominal or a clause. Independent personal pronouns are `PRON`.
* `PART` is used for the emphatic particle `her`.
* `X` is used only when the conversion cannot assign a defensible universal tag. It should not be resolved by analogy with another Iranian language.
* `ADP` covers both prepositions and elements that the source treats as postpositions when they are written as separate words.

### Features

Only universal features are used. Every value below is the UD value, not the label of the source gloss.

* `Gender` is `Masc` or `Fem`. It is marked on nouns, adjectives, pronouns, and on verbs or auxiliaries when the source glosses a gender agreement marker.
* `Number` is `Sing` or `Plur`. `Person` is `1`, `2`, or `3` on finite verbs and on auxiliaries that index a person.
* `Case` has two values. The Hewramî direct case is `Case=Nom` and the oblique case is `Case=Acc`, which is the universal mapping for a two-case direct/oblique system. These values occur on nouns, pronouns, proper names, and on some adverbs and adpositions whose source form is an oblique pronoun or noun.
* `Definite` is `Def` or `Ind` on nouns, and `Ind` also occurs on a few adjectives and adverbs whose source gloss marks an indefinite ending.
* `Degree=Cmp` marks the comparative.
* `PronType` is `Dem` for demonstratives and `Int` for interrogative or “whatever” forms.
* Verbal features are `VerbForm=Fin` or `VerbForm=Part`, `Mood=Ind` or `Mood=Sub`, `Tense=Pres` or `Tense=Past`, `Voice=Pass`, and `Polarity=Neg`. A participle that also contains an unsplit present auxiliary keeps a single `Tense` value, `Past`, because a token cannot carry two tenses. The present piece remains visible in `Gloss`.

## Syntax

The dependency trees are a first conversion and are not yet a full manual review. Core arguments use `nsubj` and `obj`. Other nominal dependents of a predicate use `obl`, with the adposition attached by `case`. Coordination uses `conj` and `cc`. Discourse particles use `discourse`. Punctuation is attached with `punct`.

The verb “to be” is tagged `AUX` and, in this first conversion, is usually attached with `aux`. Where the source unit is a nonverbal clause and no lexical verb is present, the auxiliary may be the root and the nonverbal predicate may be attached with `dep`. The relation `dep` is also used where the automatic conversion did not yet choose a more specific label, especially for ezafe or linker constructions, complex predicates, and reported speech. Those `dep` edges are placeholders for later review, not a proposed Hawrami relation subtype. No language-specific relation subtypes are used.

## Treebanks

There is one Gorani UD treebank:

  * [Gorani-Hawrami](../treebanks/hac_hawrami/index.html)

