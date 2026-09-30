---
layout: base
title: 'Ligurian UD'
udver: '2'
---

# UD for Ligurian <span class="flagspan"><img class="flag" src="../../flags/svg/IT-LIG.svg" /></span>

## Tokenisation and Word Segmentation

* Whitespace normally delimits tokens, and punctuation is separated from neighbouring words.
* Ordinary apostrophe elisions are split, with the apostrophe kept on the elided form: _l’erbo_ “the tree” is _l’_ + _erbo_, and _unn’atra_ “another” is _unn’_ + _atra_. Abbreviations and lexical hyphenated compounds remain single tokens.
* Multiword tokens are used for contractions of prepositions and definite articles: _inta_ = _inte_ + _a_ “in the”, _pe-o_ = _pe_ + _o_ “for the”, and _scê_ = _sce_ + _e_ “on the” (note that in _in scê_, the preceding _in_ is a separate word and only _scê_ is a multiword token).
* Verbs with one or more enclitics are also multiword tokens: _fâlo_ = _fâ_ + _lo_ “to do it” and _anâsene_ = _anâ_ + _se_ + _ne_ “to go away”.

## Morphology

### Tags

* Common auxiliaries ([AUX]()) are _ëse_ “to be”, _avei_ “to have”, _dovei_ “must”, _poei_ “can”, _savei_ “to know”, and _voei_ “to want”. _Vegnî_ and _an(d)â_ are also `AUX` when they form part of a passive. Independent lexical uses of these verbs are [VERB]().
* The euphonic _l’_ before a vowel-initial finite verb form is [PART](), as in _a l’ammia_ “she looks”. Article _l’_ is [DET](), while object-pronoun _l’_ is [PRON]().
* [DET]() includes articles, demonstratives, possessives and quantifiers used with nouns. Ligurian partitive articles are single determiners rather than preposition-article multiword tokens; see the [DET]() for more details.

### Features

* Nouns have [Gender]() (`Masc` or `Fem`) and [Number]() (`Sing` or `Plur`). Adjectives, articles, and many pronouns show the same agreement features.
* Finite verbs bear `VerbForm=Fin`, [Mood](), [Person](), and [Number](). Indicative and subjunctive forms also bear [Tense](); conditionals (`Mood=Cnd`) and imperatives (`Mood=Imp`) do not.
* Infinitives carry `Tense=Pres|VerbForm=Inf`; gerunds carry `Tense=Pres|VerbForm=Ger`; and verbal past participles carry `Tense=Past|VerbForm=Part`.
* Positive degree is unmarked; see [Degree]() for the other values.
* [Style]() marks expressive spellings (`Expr`) and vernacular forms (`Vrnc`).

## Syntax

Ligurian is pro-drop and has relatively flexible word order, although subjects commonly precede the predicate and objects follow it.

* Nominal subjects ([nsubj]()) and direct objects ([obj]()) normally occur without an adposition. [iobj]() is reserved for dative clitics.
* The agent of a passive takes [obl:agent](). Other prepositional arguments selected by a verb or adjective take [obl:arg]().
* Subject-clitic doubling and other clitics with no separate syntactic role are described under [expl]() and its subtypes.
* With copular _ëse_ “to be”, including in locative clauses, the predicate is the clause head and _ëse_ is [cop](). In existential constructions such as _gh’é_ “there is”, _ëse_ is the verbal head, the entity introduced is [nsubj](), and _ghe_ takes [expl]().

### Relations Overview

The following relation subtypes are used: [acl:relcl](), [advcl:relcl](), [aux:pass](), [csubj:pass](), [expl:impers](), [expl:pass](), [expl:pv](), [nsubj:outer](), [nsubj:pass](), [obl:agent](), and [obl:arg]().

## Treebanks

* [Ligurian-GLT](../treebanks/lij_glt/index.html)
