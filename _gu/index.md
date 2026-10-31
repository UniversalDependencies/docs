---
layout: base
title:  'Gujarati UD'
udver: '2'
---

# UD for Gujarati <span class="flagspan"><img class="flag" src="../../flags/svg/IN.svg" /></span>

Gujarati is an Indo-Aryan language originating from the western Indian state of Gujarat. The language is widely spoken
by over 56 million speakers and is one of the 22 languages with official status in India. Yet, the Gujarati
Computational Linguistics community is still in its infancy. Earlier literature classifies Gujarati in the
"Scraping-Bys" category (category 1) in their taxonomy indicating a scant availability of labeled datasets.


## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* Punctuation marks are tokenized as separate tokens (words), even when typographically attached to a neighboring word.
* Postpositions and case markers that are written fused to their host are split off as separate syntactic words using multiword tokens (MWT), e.g. સભ્યતાથી → સભ્યતા (NOUN) + થી (ADP), મારાથી → મારા (PRON) + થી (ADP), and દેશને → દેશ + ને.
* Compounds written as one orthographic word may also be split into multiple words, e.g. વૈવિધ્યપૂર્ણ → વૈવિધ્ય + પૂર્ણ.
* Postpositions written separately (e.g. સાથે, પ્રત્યે, વિષે, હેઠળ) are separate tokens from the start.


## Morphology

Gujarati morphology is agglutinative and has a rich system of inflectional and derivational morphology. The language
has a complex system of verb conjugation, noun declension, and postpositions.


### Tags

* Gujarati uses all 17 universal POS categories, including particles ([PART]()).
* [PART]() is used for emphatic and discourse particles such as જ, પણ ("also"), ભલે (concessive), and the negators ન and નહિ.
* [CCONJ]() covers coordinators such as અને, અથવા, પણ ("but"), and છતાંપણ.
* [SCONJ]() covers subordinators and complementizers such as કે, કારણકે, and the correlative તો in conditionals.
* Gujarati has the following auxiliary verbs ([AUX]()):
  * છે _che_ and થવું _thavuṁ_ are present and past equivalents of “to be”.
  * ન _na_ is the negative auxiliary.
  * રહેવું  _rahevuṁ_ “to remain” expresses progressive aspect.
  * આવવું _āvavuṁ_ “to come” expresses perfect aspect.
  * ગયું _gayuṁ_ “to go” expresses perfect aspect.
  * દેવું _devuṁ_ “to give” expresses perfect aspect.
  * હતું _hatuṁ_ expresses past tense.
  * જોઈતું _joītuṁ_ “to want” expresses modality (wish or necessity).
  * પડવું _paḍavuṁ_ “to fall” expresses necessity.
  * હોવું _hovuṁ_ “to be” expresses necessity; its conditional forms (e.g. હોત) are also analysed with this lemma.
  * શકવું _śakavuṁ_ “can” expresses possibility, ability.
  * શું _śuṁ_ is used in interrogative clauses.
* Vector verbs in compound verbs (e.g. નાખવું in કચડી નાખું) that are not on the auxiliary list are tagged [VERB]() and attached with `compound:svc`.


### Features

The treebank annotates the following morphological features, all of which are enabled for Gujarati in the UD validator.

| Feature | Values | Used on |
|---|---|---|
| [Case]() | Nom, Acc, Dat, Erg, Gen, Ins, Loc, Voc | NOUN, PROPN, PRON |
| [Gender]() | Masc, Fem, Neut | NOUN, PRON, DET, VERB, AUX |
| [Number]() | Sing, Plur | NOUN, PRON, DET, VERB |
| [Person]() | 1, 2, 3 | PRON, VERB |
| [PronType]() | Prs, Dem, Rel, Int, Ind, Tot | PRON, DET |
| [Poss]() | Yes | possessive PRON |
| [Tense]() | Past, Pres, Fut | VERB |
| [Mood]() | Ind, Imp, Sub | VERB, AUX |
| [Aspect]() | Perf, Hab | VERB |
| [VerbForm]() | Fin, Inf, Part, Conv | VERB |
| [ExtPos]() | ADP | fixed multiword expressions |
| [Typo]() | Yes | heads of [goeswith]() relations |

Notes on feature use:

* Conditional (counterfactual) forms such as કરત, થાત, and હોત are annotated as `Mood=Sub`.
* Conjunctive participles (ઈને forms) are `VerbForm=Conv` and carry no Mood.
* Infinitives, including ablative infinitives such as જોવાથી, are `VerbForm=Inf`.
* Postpositions ([ADP]()) carry no features; case is marked on the host noun or pronoun.
* [AUX]() tokens carry no VerbForm; [PROPN]() tokens carry only Case and Gender is not annotated.
* Perfective transitive verbs take an ergative subject (`Case=Erg`) and agree in Gender and Number with the object.


## Syntax

Standard dependency relations are used, except for `clf` which is not used in Gujarati.

* Gujarati is a head-final, or left-branching language.
* Adjectives precede nouns, direct objects come before verbs, and there are postpositions.
* The word order of Gujarati is SOV, and there are three genders and two numbers.
* Subjects are frequently dropped (pro-drop) and no empty node is added for them.

### Constructions

* **Postpositional phrases**: the postposition is a `case` dependent of its noun; the noun is `obl` of a verb or `nmod` of a noun.
* **Conjunctive participles** (ઈને forms) are `advcl` of the main verb.
* **Ablative infinitives** (e.g. જોવાથી, હોવાથી) express cause and are `advcl`.
* **Conditionals** (e.g. તું આવ્યો હોત, તો ...): the protasis is `advcl` of the apodosis, and તો is a `mark` on the protasis.
* **Correlative and relative clauses** (જે...તે, જ્યાં...ત્યાં, જ્યારે...ત્યારે): relative clauses are `acl:relcl` (or `advcl` for adverbial correlatives), and the correlative word is a `det`, `advmod`, or pronoun in the main clause.
* **Light verb and compound verb constructions** (e.g. પ્રયત્ન કરવું, સહન થવું): the nominal is `obj` or `compound` of the verb; vector verbs are `aux` or `compound:svc`.
* **Direct speech** introduced by a verb of saying is attached with `parataxis`.
* **Vocatives** (e.g. ભાઈ) are `vocative`; discourse particles such as કેમ are `discourse`.
* **Genitives** (મારો, તેની, વારસાનો) are `nmod:poss` and agree in Gender and Number with the possessed noun.


## Treebanks

There are 2 Gujarati UD treebanks:

  * [GujTB](../treebanks/gu_gujtb/index.html)
  * [ShabdaSetu](../treebanks/gu_shabdasetu/index.html)
