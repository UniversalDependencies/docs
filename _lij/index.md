---
layout: base
title:  'Ligurian UD'
udver: '2'
---

# UD for Ligurian <span class="flagspan"><img class="flag" src="../../flags/svg/IT-LIG.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace.
* Punctuation marks are treated as separate tokens, with few expections:
  * Apostrophes indicate elision, and are attached to the neighbouring word that underwent elision. Most commonly, this occurs with determiners: _l’erboo_ = _l’ erboo_, _‘n’atra = ‘n’ atra_.
  * Numerical expressions are treated as single words, e.g. _12:45_, _2.5%_.
  * Abbreviations are treated as single words and may include punctuation, e.g. _ecc._, _s.r.l._
* Multi-word tokens occur for the following two cases:
  * Contractions of prepositions and definite articles: _inta_ = _inte a_, _in scê_ = _in sce e_, _pe-o_ = _pe o_, _do = de o_.
  * Contractions of verbs with clitics: _veddilo_ = _vedde lo_, _dâghela_ = _dâ ghe la_, _aveine_ = _avei ne_.

## Morphology

### Tags

* Ligurian uses all 17 universal POS tags.
* The only word tagged as [PART]() is the euphonic particle _l’_, used in the case of clitic doubling when the verb starts with a vowel: _a l’ammia_, _o l’existe_.
* Ligurian auxiliary verbs, tagged [AUX](), are as follows:
  * _Ëse_ and _stâ_, functioning as copulas: _stanni ben!_, _Zena a l'é unna çittæ_.
  * _Stâ_ and _vegnî_, the passive auxiliaries: _i libbri en stæti traduti_, _a vegnià castigâ_.
  * _Ëse_ and _avei_, the tense auxiliaries: _l’ò scrito_, _emmo cantou_.
  * The modals _dovei_ (necessitative), _poei_ and _savei_ (potential), _voei_ (desiderative).
* The tag [DET]() is used for articles (_un amigo_, _unn’amiga_, _i amixi_, _tutti i amixi_) as well as for adjectives playing the role of a determiner: demonstrative (_sto libbro_), exclamatives (_che mâ de pê!_), indefinites (_un atro pâ de maneghe_), interrogative (_che tipo de persoña a l’é?_), negatives (_nisciun aggiutto_), possessives (_mæ moæ_), total (_tutto o mondo_).

### Features

* [NOUN]()s inflect for [Gender]() (`Masc` or `Fem`) and [Number]() (`Sing` or `Plur`).
* [VERB]()s can inflect for [Mood](), [Tense](), [Person]() and [Gender]():
  * Finite verbs always inflect for [Mood]() (`Ind`, `Imp`, `Sub` and `Cnd`).
  * Verbs in the indicative and subjunctive moods, as well as participles, specify a value for [Tense]() (`Past`, `Imp`, `Pres`, `Fut`).

## Syntax

* Ligurian is an SVO language, meaning that subjects ([nsubj]()) are typically pre-verbal, while objects ([obj]()) are usually post-verbal.
* Nominal subjects ([nsubj]()) and direct nominal objects ([obj]()) are bare noun phrases without adpositions.
* The [iobj]() relation is only used for dative pronominal clitic complements: _o ghe dixe_, _o me piaxe_, etc. When the indirect object is realized as a prepositional phrase, it is labeled as [obl]().
* The following subtype relations are used:
  * [expl:pv](), for expletive or pleonastic nominals used in pronominal verb: _anâsene_, _ësighe_, etc.
  * [expl:impers](), for impersonal verbs: _se capisce_, _se sente unna voxe_.
  * [acl:relcl](), for relative clauses.

## Treebanks

There is [1](../treebanks/lij-comparison.html) Ligurian UD treebank:

  * [Ligurian-GLT](../treebanks/lij_glt/index.html)
