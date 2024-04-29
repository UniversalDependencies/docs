---
layout: base
title:  'Abkhaz UD'
udver: '2'
---

# UD for Abkhaz <span class="flagspan"><img class="flag" src="../../flags/svg/GE-AB.svg" /></span>

## Tokenization and Word Segmentation

* All punctuation from the original text is kept.

* Tokenization is based on whitespace and punctuation.

* No words with spaces or multiword tokens do occur.

* No clitics are split off.

## Morphology

### Lemmatisation

* The lemma forms are the tranditional dictionary entry forms for Abkhaz, viz. the form with the generic article *а-* for nouns and adjectives, and the verbal noun (masdar, with generic article) for verbs. The lemma form of a predicate derived from a noun or an adjective is the underlying noun or adjective. As is customary in Abkhaz dictionaries, the generic article is set off by a hyphen.
* All lemmas are marked by stress, which is a distinctive feature in Abkhaz (with many minimal pairs that differ only in stress position).
* For verb lemmas, limited morpheme segmentation is available in the MISC column, marked with the feature LMSeg. Verb lemmas are segmented into generic article, preverb(s), causative prefix (*р:*), stem, static suffix (*-заа-*), and masdar ending (*-ра*), as: *а-(PV·)(р:)STEM-(заа-)ра*. (Example: *а-ҽ·а·зы́·ҟа·ҵа-ра*, *а-р:ба-ра́*).

### Tags

* The Abkhaz treebank uses all universal POS tags except `X`.

* The POS tag `VERB` is used for genuine verbs including verbal nouns (masdars), and for predicates derived from other word classes (adjectives, nouns).

* The POS tag `PART` is used for the words *ҳәа*, *уҳәа* (direct speech/quote particles).

* The copula verb *а́кә-заа-ра* is tagged as `AUX`. There are no (other) auxiliary verbs in Abkhaz.

### Features

The morphological features are automatically derived from the feature set used in the AbNC, which is a proprietary feature set containing some features that are difficult to translate to UD features and thus are omitted as yet.

### Nominal Features

* Definite: `Def`, `Ind`.
* Number: `Sing`, `Plur`.
* Gender: `Masc`, `Fem`, used for PRON and PROPN.
* Gender[psor]: `Fem`, `Masc`, `Neut`, used for ADV, ADP, PRON, NOUN and VERB. The value `Neut` is used for affixes that agree with non-human possessors, which traditionally are not called Neuter.
* Number[psor]: `Sing`, `Plur`.
* Person[psor]: `1`, `2`, `3`, `Rel`. The relative marker behaves in many respects (both morphologically and syntactically) like a person marker, so it is included here.
* Animacy: `Hum`, `Nhum`.
* Case: `Abe`, `Ben`, `Ess`, `Ine`, `Ins`, `Lat`, `Loc`, `Ter`. All cases except `Ess` are fused postpositions that could alternatively be analyzed as clitics. This would however make it necessary to split them off.

### Verbal Features

Person, Number and Gender are marked in the verb for a variety of syntactic functions. Since Abkhaz has no case marking the features are qualified by those syntactic functions, which are:

* `subj`: subject, Column-I marker in intransitive verbs, and Column-III marker in transitive verbs.
* `obj`: direct object, Column-I marker in transitive verbs.
* `io`: indirect object, Column-II marker. Also used for the Column-II marker of the copula verb cross-indexing the predicative.
* `lo`: local object, whose marker is attached to a local preverb in the verbal complex.
* `ro`: relational object, whose marker is attached to a relational marker in the verbal complex.
* `po`: potential(is) object, whose marker is attached to the potential or the unvoluntary marker in the verbal complex.
* `refl`: inner reflexive.
* `cs`: causee.

The following verbal features are used:

* Gender[subj], Gender[obj], Gender[io], Gender[lo], Gender[ro], Gender[po], Gender[refl], Gender[cs]: `Fem`, `Masc`, `Neut`.
* Number[subj], Number[obj], Number[io], Number[lo], Number[ro], Number[po], Number[refl], Number[cs]: `Sing`, `Plur`.
* Person[subj], Person[obj], Person[io], Person[lo], Person[ro], Person[po], Person[refl], Person[cs]: `1`, `2`, `3`, `Rel`, `Rec`.
* VerbForm: `Fin`, `NonFin`, `Conv`, `Vnoun`.
* VerbType: `Cop`.
* Dyn: `Yes`, `No`.
* Voice: `Cau`, `Inv`, `Pass`.
* Aspect: `Iter`, `Perf`.
* Tense: `Pres`, `Aor`, `Imp`, `Past`, `Fut`, `Fut2`, `Pqp`.
* Mood: `Imp`, `Int`, `Opt`, `Prp`, `Sub`, `Cnd1`, `Cnd2`, `Conj1`, `Conj2`.
* Polarity: `Neg`.
* Evident: `Nfh`.
* Animacy: `Hum`, `Nhum`. Animacy is a verbal feature when the verb is a predicate derived from a noun.

### Numbers

Cardinal numbers in Abkhaz can optionally be prefixed to a noun. In such cases, the noun has the feature Number: `Card`.

### Pronouns, Determiners, Quantifiers

### Other Features

* The features `Clusivity,`, `Degree,`, `Foreign,`, `NounClass,`, `Polite,`, `Reflex,`, `Typo` are not in use.

## Syntax

Abkhaz is a polysynthetic, head-marking language; all core arguments (subject, direct, indirect, locational, relational objects, causee), in addition to inner reflexives and reciprocals, are cross-referenced in the verb by prefixes. The language is morphologically ergative, which is apparent from the function of the argument prefixes (e.g., the column-I prefix marks the subject in intransitive verbs, but the direct object in transitive verbs). Case-marking is lacking, but the prefixes agree in person, number, gender and animacy with their arguments.

There are four argument-changing alterations a verb can undergo: passive, causative, potentialis and involuntative.

Passive and causative behave as expected. The potentialis alteration, introduced by the potential marker *-з-*, changes the subject of a transitive verb into a potential object (`po`), whereas the direct object becomes the subject. Example: *и-ҟа-сы-м-ҵе-ит* (do:3-PV-subj:1sg-Neg-ROOT-Aor) `I did not do it` vs. *и-с-зы-ҟа-м-ҵе-ит* (subj:3-po:1sg-POT-PV-Neg-ROOT-Aor) `I could not do it`. In intransitive verbs, no arguments are changed.

The involuntative, marked by *-амха-*, behaves in the same way. It describes an action that happens inadvertently, unintentionally: *и-с-амха-фе-ит* (subj:3-po:1sg-INVOL-ROOT-Aor) `I ate it by accident/mistake`.

### Relations Overview

* The following relation subtypes are used:
  * [obj:lo]() local object. 
  * [obj:ro]() relational object.
  * [obj:po]() potential object.
  * [obj:poss]() possessive object, cross-referenced by a possessive marker.
  * [ccomp:obj]() clausal complement cross-referenced by a direct object marker.
  * [ccomp:quote]() direct speech clause introduced by *ҳәа* and cross-referenced by the direct object marker of a speech verb
  * [ccomp:purp]() purposive clausal complement.
  * [xcomp:obj]() open clausal complement cross-referenced by a direct object marker.
  * [xcomp:lo]() open clausal complement cross-referenced by a local object marker.
  * [advcl:cond]() conditional adverbial clause.
  * [advcl:purp]() purposive adverbial clause.
  * [advcl:conv]() dependent clause headed by a converb.
  * [advcl:compar]() dependent clause headed by a nonfinite verb with the AsIf marker.
  * [advcl:compar]() dependent purposive clause.
  * [advcl:quote]() dependent direct speech clause introduced by *ҳәа* but not cross-referenced in the verb.
  * [advcl:seq]() sequential construction with a dependent clause headed by a verb in the past indefinite (`Past`) attached to a finite aorist.
  * [acl:relcl]() relative clause complement.
  * [compound:prt]() particle compound.
  * [compound:pred]() connects two (or more) parts of a multi-word predicate.

## Treebanks

There is one Abkhaz UD treebank:

  * [Abkhaz](../treebanks/ab/index.html)
