---
layout: base
title:  'Huave UD'
udver: '2'
---

# UD for Huave <span class="flagspan"><img class="flag" src="../../flags/svg/MX.svg" /></span>

<!--
DRAFT written from the annotation files diccionario-huv.*.conllu (13 files, 7 annotators, 696 distinct sentences, 249 marked finished)
and from Herrera Castro (2016), the thesis on the noun phrase of San Mateo del Mar Huave ("Herrera 2016" below).
Comments like this one, "CHECK:", mark decisions where the annotators disagree or where the thesis analyses something differently.
Remove all comments before submitting. Counts are from the most complete version of each sentence unless stated otherwise.
-->

The variety documented here is the Huave of San Mateo del Mar. The first treebank consists of Huave sentences (and
their Spanish translations) from the SIL-produced *Diccionario Huave de San Mateo del Mar*, compiled by Glenn Albert Stairs Kreger and Emily Florence Scharfe de Stairs. The text is written in the newer orthography typical of younger speakers (k, kw, g; see the note on spelling below). The original SIL spelling of the source text is kept in the `text[orig]` comment.

## Tokenisation and Word Segmentation

* Words are delimited by whitespace. Punctuation marks, including the inverted question and exclamation marks (¿ ¡), are separate tokens
  and are marked `SpaceAfter=No` when no space follows.
* Several short function words are written together with the following/preceding word. These are split into multiword tokens
  (the surface form is kept on the range line, and the parts are numbered separately). These include:
  * **The preposition _tiül_ + a noun**, written as one word with the preposition reduced to _ti-_:
    _tikambaj_ = _ti_ (lemma _tiül_, ADP) + _kambaj_ (NOUN) "in the town"; also _tikorrül_, _timanchiük_, _timüx_, _tixiül_, _titiiüd_, _tindek_.
  * **The locative copula _al_ + _tiül_**: _altiül_ = _al_ (AUX) + _tiül_ (ADP), "there is / has"; also _altikambaj_ = _al_ + _ti_ + _kambaj_.
  * **The aspectual proclitic _la_** (punctual, "already") + the next word: _landoj_ = _la_ + _ndoj_, _lango_ = _la_ + _ngo_.
  * **Final clitics _-e_ and _-a_**, tagged PART: _ngome_ = _ngom_ + _e_, _ngana_ = _ngan_ + _a_, _leawa_ = _leaw_ + _a_.
* <!-- CHECK: --> The annotation files also carry `Error=TokenLevel` in MISC on many of these tokens.
* Spanish loanwords are tokenised like native words. See the note on spelling below.

**Spelling.** The texts use the orthography of the recent Huave materials (k and kw instead of c, qu and cu; g instead of gu before e and i). Unadapted Spanish words may keep Spanish spelling (e.g., _pomada_ and _calle_).


## Morphology

### Tags

* **Unused tag:** SYM. All other universal tags occur. X and INTJ are relatively rare.
* **NOUN, PROPN.** Possessed nouns are tagged NOUN and lemmatised as the bare root (_xekit_ → _kit_, _xemüm_ → _müm_).
  Deverbal nouns such as _nendok_ "fisherman" are NOUN with `VerbForm=Vnoun`. Personal names are PROPN (with `Gender`).
* **VERB.** Verbs inflect by prefixes and suffixes for person, number, tense, aspect and mood. The lemma is the bare root without those
  (_ajlüy_ → _jlüy_, _akwiür_ → _kwiür_).
* **AUX.** The locative copula _al_ ("be located, there is"; Herrera 2016 glosses it COP.LOC) is AUX, as is the aspectual proclitic _la_.
  <!-- CHECK: _ndom_ ("can, know how to") is tagged PART, AUX and VERB by different annotators; _ngo_ "not" is ADV in 142 cases but AUX in 6. No decision yet. -->
* **PART.** Interrogative clitics _-e_ and _-a_ (_ngome_, _ngana_), with `PronType=Int`, and the evidential _chük_ (`Evident=Nfh`, one token in these data;
  it is very frequent in the story collections). <!-- CHECK: the story corpus has not been annotated yet. -->
* **DET and PRON.** The definite article _a_ (variants _aaga_, _aag_) is DET and precedes the noun. Herrera 2016 analyses it as the base of the demonstratives
  (pronoun, adnominal, locative adverb and manner adverb are all built on it plus a deictic element). When _aag_ stands alone it is PRON.
  Personal pronouns (_nej_ 3rd person, _xik_ 1st person singular, _ik_ 2nd person singular, _xikon_ / _xikona_ 1st person plural exclusive) are PRON with `PronType=Prs`.
  Possessive pronouns (_saneay_ "mine", _okweaj_) are PRON.
* **NUM.** The numeral _no-_ "one" with a classifier suffix (_nop_, _noik_) is NUM with `NumType=Clf`, and depends on the noun as `nummod`.
  Herrera 2016 (ch. 6) argues that it also works as an indefinite article, but it seems not to have been tagged as DET.
* **ADP.** _tiül_ "in, to, with" and similar words are ADP. They precede their noun and depend on it as `case`.
  <!-- CHECK: _wüx_ is ADV (61), SCONJ (53) and ADP (22). The relations are mark (56), case (18), advmod (13). _kos_ "because" is SCONJ (58) or CCONJ (19). -->
* **SCONJ and CCONJ.** _pero_ / _pere_ is CCONJ. Subordinators are SCONJ (_wüx_ "when", _kos_ "because", _sitiül_ "if").
* **ADJ and ADV.** Words that modify nouns are ADJ and precede them (_nine nench_ "the small child"). Manner and degree words are ADV.
  <!-- CHECK: _xowüy_ "very, much" is ADV (40) or ADJ (13), _xeyay_ ADJ (20) or ADV (11), _nine_ ADJ (36) or NOUN (15). -->


### Features

* **Nouns.** Possession is marked by a prefix on the noun. Person and number of the possessor are `Person[psor]` and `Number[psor]`
  (_xe-_ and _xi-_ for first person singular; _ow-_ and _ap-_ for third person). The prefix _mi-_ occurs on nouns whose possessor is a separate
  noun or pronoun (_mikwal nej_ "his/her child"); it carries no feature. <!-- CHECK: the meaning of _mi-_ is not settled. -->
  Plural is rarely marked on nouns in the data (3 tokens). `Number` (mostly `Sing`, also `Plur` and `Dual`) is used on verbs and pronouns.
* **Verbs.** Subject person and number: `Person`, `Number` (also `Number=Dual`, and `Clusivity=Ex|In` for first person plural and dual).
  `Tense=Pres|Past`, `Aspect=Prog` (the progressive _te(a)-_) and `Aspect=Punt` (_la_ "already"), `Mood=Sub` and `Mood=Irr`.
  `VerbForm=Fin|Vnoun`. `Voice=Caus` for causatives (3 tokens). `Subcat=Tran|Intr` marks transitivity.
  <!-- CHECK: Subcat is not a standard UD feature; consider Valency or the lexicon. Reflexive and possessive are written Reflexive=Yes and Possessive=Yes in MISC; the UD features are Reflex=Yes and Poss=Yes in FEATS. -->
* **Pronouns.** `PronType=Prs|Dem|Int`, `Person`, `Number`, `Clusivity`.
* **Numerals.** `NumType=Clf` for classifier numerals.
* **Definiteness.** The feature `Definite` is not used. Indefinite and free-choice pronouns (the _al-_ series: _aleaik_, _aljane_; the _nej_ series: _jangantanej_, _kwajantanej_) are marked `PronType=Ind`, and negative pronouns (the _ni…ind_ series: _nikwajind_) `PronType=Neg` (Herrera 2016, ch. 6).
  <!-- CHECK: verbs in _-aran_ / _-eran_ (e.g. _manguiayaran_, _alaran_) have an unspecified subject but no UD feature fits; currently unmarked. -->

## Syntax

* **Core arguments.** `nsubj`, `obj` and `iobj` are used. Word order is relatively free (Herrera 2016: ch. 1). In the annotated clauses that have both a subject and an object,
  SVO is the most common order, VOS the next. Objects follow the verb in most clauses; subjects are about equally often before and after it.
* **Within the noun phrase.** Determiners, numerals, adjectives, prepositions and subordinators precede their head (`det`, `nummod`, `amod`, `case`, `mark`).
  Possessors and noun modifiers follow it (`nmod`, 101 of 105). A pronominal possessor after a possessed noun (_mikwal nej_) is `nmod`.
  <!-- CHECK: `nmod:poss` (10 tokens) is used inconsistently with nmod for the same construction. -->
* **Predicates.** Most roots are verbs. Nonverbal predicates (nouns, adjectives, pronouns, adverbs) are roots with no copula,
  as in _Aag agüy saneay_ "this is mine". The locative copula _al_ is `cop` when it takes a nominal complement (_altiül_ "have, there is"). <!-- CHECK: `cop` occurs only 4 times, all with _al_. -->
* **Subordinate and complement clauses.** Clauses introduced by _wüx_ and _kos_ are `advcl` with a `mark` dependent. The modal _ndom_ "can" and the negator _ngo_ are `aux` of the following verb when they are tagged AUX
  (21 `aux` relations, mostly _ndom_, _ngo_ and _ombas_); that verb is then often an `xcomp` of the main verb. Other verbs also take an `xcomp`. Clausal arguments are `ccomp` and `csubj`. A clause modifying a noun is `acl`.
* **Parataxis.** Juxtaposed clauses are `parataxis`, including clauses with a subjunctive verb (`Mood=Sub`) after a comma.
* **Other relations.** `dislocated` (a topicalised noun before the clause), `compound` (mostly noun + noun, e.g. _vida_ + _müm_; also reduplicated numerals: _nop nop_ "one by one"), `fixed`, `flat`, `goeswith` and `discourse` are rare.
* **Subtype relations.** `nmod:poss` is the only subtype used.

## Treebanks

There is [1](../treebanks/huv-comparison.html) Huave UD treebank:

  * [Huave-Mesotree](../treebanks/huv_mesotree/index.html)

<!-- TODO: replace with the real treebank names. -->
