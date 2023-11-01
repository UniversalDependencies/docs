---
layout: base
title:  'Haitian Creole UD'
udver: '2'
---

# UD for Haitian Creole <span class="flagspan"><img class="flag" src="../../flags/svg/HT.svg" /></span>
Kreyòl (Kreyòl Ayisyen, Haitian Creole, iso-639-1: ht) is the main language of Haïti. It is spoken by more than 10M speakers both in Haïti and in the diaspora (Canada and USA mainly). It is an official language of Haïti. The dialect spoken in the Cap Haïtien dialect differs slightly in its lexicon from the Center and South varieties.


## Tokenization and Word Segmentation

* Words are delimited by whitespace characters.
* Some sequences of grammatical word are often written in one othographic word:
  * PRON-AUX: _lap_ = li + ap, _yap_ = yo + ap, _kap_ = ki + ap, _nap_ = nou + ap;
  * _sakap_ = sa + ki + ap;
  * ADV-AUX: _pat_ = pa + te, _pata_ = pa + ta, _pap_ = pa + ap;
  * AUX-AUX: _tap_ = t + ap, _taka_ = ta + ka; _sete_ = se + te.

## Morphology

Haitian Creole is an isolating language.

### Tags

* `PART` has not been used.
* Haïtian has four preverbal particules that have been tagged `AUX`: _te_, _ap_, _ta_, _pral_. Potential `AUX` (not tagged `AUX`): _ka_ 'can', _pa_ 'not'.
* The `DET`-`PRON` is unclear and still under studies. We decided to tag `DET` the pronominal words depending on a `NOUN`, but their forms are similar to `PRON`s.

### Features

* `PRON` have `Person` and `Number` features. Pronominal `DET` also. Some `DET` have a `Definite` feature.
*  `AUX` have a feature:
   * _te_: `Tense=Past`;
   * _ap_: `Aspect=Prog`;
   * _ta_: `Mood=Cnd`;
   * _pral_: `Tense=Fut`;
   * _se_: copula.
* Other POS have no morphosyntactic features.
* The treebank is glossed (`Gloss` feature) and translated (`text_fr`) in French, the lexifier language of this creole.


## Syntax

* Haïtian is an SVO language.
* It has double object constructions, with the Recipient before the Theme. The recipient has been tagged `iobj` and the Theme `obj`. We do not know any property to distinguish them except their resepective order and their semantic roles.
* Some ADJs, NOUNs, ADJs, and ADVs can root a clause. There is a copula, _se_, which is used in existential constructions.
* It has `nmod`s without markers.
* It has `DET`s before and after the `NOUN`. `DET`s after the `NOUN` could be `nmod`. A further study is needed.
* Some `ADJ`s must be before the `NOUN`, while others must be after the `NOUN`. The repartition is similar to French.
* It has some Serial Verb Constructions, annotated `compound:svc`.
* We have one cleft construction in our corpus, annotated [advcl:cleft](advcl-cleft.md).
* The [parataxis:insert](parataxis-insert.md) relation is used for parenthetical clauses which could not be considered as independent sentences, since they are not saturated.
* Oblique modifiers have been distinguished by the [obl:mod](obl-mod.md) sub-relation.


## Treebanks

There is [1](../treebanks/ht-comparison.html) Haitian Creole UD treebank:

  * [Haitian Creole Autogramm](../treebanks/ht_a/index.html)
