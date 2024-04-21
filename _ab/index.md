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

* The lemma forms are the tranditional dictionary entry forms for Abkhaz, viz. the form with the generic article *а-* for nouns and adjectives, and the verbal noun (masdar, with generic article) for verbs. All lemmas are marked by stress, which is a distinctive feature in Abkhaz (with many minimal pairs that differ only in stress position).
There is limited morpheme segmentation, separating the generic article from the stem, and for verbs, segmentation into article, preverb(s), causative prefix (*р:*), stem, static suffix (*-заа-*), masdar ending (*-ра*), as: *а-(PV·)(р:)STEM-(заа-)ра*.

### Tags

* The Abkhaz treebank uses all universal POS tags except AUX and X.

* The POS tag VERB is used for genuine verbs including verbal nouns (masdars) and predicates derived from other word classes (adjectives, nouns).

* The POS tag PART is used for the words *ҳәа*, *уҳәа* (direct speech/quote particles).

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

The morphological features are automatically derived from the feature set used in the AbNC, which is a proprietary feature set containing some features that are difficult to translate to UD features and thus are omitted as yet.

### Nominal Features

* Definite: `Def`, `Ind`.
* Number: `Sing`, `Plur`.
* Gender: `Masc`, `Fem`, used for PRON and PROPN.
* Gender[psor]: `Fem`, `Masc`, `Neut`, used for ADV, ADP, PRON, NOUN and VERB. The value `Neut` is used for affixes that agree with non-human posessors, which traditionally are not called Neuter.
* Number[psor]: `Sing`, `Plur`.
* Person[psor]: `1`, `2`, `3`, `Rel`. The relative marker behaves in many respects (both morphologically and syntactically) like a person marker, so it is included here.
* Animacy: `Hum`, `Nhum`.

### Verbal Features

Person, Number and Gender are marked in the verb for a variety of syntactic functions. Since Abkhaz has no case marking the features are qualified by those syntactic functions, which are:

* `subj`: subject.
* `obj`: direct object.
* `io`: indirect object.
* `lo`: local object, whose marker is attached to a local preverb in the verbal complex.
* `ro`: relational object, whose marker is attached to a relational marker in the verbal complex.
* `po`: potential(is) object, whose marker is attached to the potential or the unvoluntary marker in the verbal complex.
* `refl`: inner reflexive.
* `cs`: causee.

* Gender[subj], Gender[obj], Gender[io], Gender[lo], Gender[ro], Gender[po], Gender[refl], Gender[cs]: `Fem`, `Masc`, `Neut`.
* Number[subj], Number[obj], Number[io], Number[lo], Number[ro], Number[po], Number[refl], Number[cs]: `Sing`, `Plur`.
* Person[subj], Person[obj], Person[io], Person[lo], Person[ro], Person[po], Person[refl], Person[cs]: `1`, `2`, `3`, `Rel`, `Rec`.
* VerbForm: `Fin`, `NonFin`, `Conv`, `Vnoun`.
* VerbType: `Aux`, `Cop` ??.
* Dyn: `Yes`, `No`.
* Voice: `Cau`, `Inv`, `Pass`.
* Aspect: `Iter`, `Perf`.
* Tense: `Pres`, `Aor`, `Imp`, `Past`, `Fut`, `Fut2`, `Pqp`.
* Mood: `Imp`, `Int`, `Opt`, `Prp`, `Sub`, `Cnd1`, `Cnd2`, `Conj1`, `Conj2`.
* Polarity: `Neg`.
* Evident: `Nfh`.
* Animacy: `Hum`, `Nhum`. Animacy is a verbal feature when the verb is a predicate derived from a noun.

### Numbers

Cardinal numbers in Abkhaz can optionally be prefixed to a noun. This is reflected by the nominal feature `NumType` with value `Prefix`.

### Pronouns, Determiners, Quantifiers

### Other Features


*

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

Abkhaz is a polysynthetic, head-marking language; all core arguments (subject, direct, indirect, locational, relational objects, causee), in addition to inner reflexives and reciprocals, are cross-referenced in the verb by prefixes. The language is morphologically ergative, which is apparent from the function of the argument prefixes (e.g., the column-I prefix marks the subject in intransitive verbs, but the direct object in transitive verbs). Case-marking is lacking, but the prefixes agree in person, number, gender and animacy with their arguments.

There are four argument-changing alterations a verb can undergo: passive, causative, potentialis and involuntative.

Passive and causative behave as expected. The potentialis alteration, introduced by the potential marker `-з-`, changes the subject of a transitive verb into a potential object (`po`), whereas the direct object becomes the subject. Example: *и-ҟа-сы-м-ҵе-ит* (do:3-PV-subj:1sg-Neg-ROOT-Aor) `I did not do it` vs. *и-с-зы-ҟа-м-ҵе-ит* (subj:3-po:1sg-POT-PV-Neg-ROOT-Aor) `I could not do it`. In intransitive verbs, no arguments are changed.

The involuntative behaves in the same way, it describes an action that happens inadvertently, unintentionally: *и-с-амха-фе-ит* (subj:3-po:1sg-INVOL-ROOT-Aor) `I ate it by accident/mistake`.

### Relations Overview

* The following relation subtypes are used:
  * [obj:lo]() local object. 
  * [obj:ro]() relational object.
  * [obj:po]() potential object.
  * [obj:poss]() possessive object, cross-referenced by a possessive marker.
  * [iobj:pred]() predicative cross-referenced by an indirect object marker.
  * [ccomp:obj]() clausal complement cross-referenced by a direct object marker.
  * [ccomp:lo]()  clausal complement cross-referenced by a local object marker.
  * [ccomp:ro]() clausal complement cross-referenced by a relational object marker.
  * [ccomp:quote]() direct speech clause introduced by *ҳәа* and cross-referenced by the direct object marker of a speech verb
  * [ccomp:purp]() purposive clausal complement.
  * [ccomp:pred]() clausal predicative.
  * [advcl:cond]() conditional adverbial clause.
  * [advcl:conv]() dependent clause headed by a converb.
  * [advcl:compar]() dependent clause headed by a nonfinite verb with the AsIf-marker.
  * [advcl:quote]() dependent direct speech clause introduced by *ҳәа* but not cross-referenced in the verb.
  * [advcl:seq]() sequential construction with a dependent clause headed by a verb in the past indefinite (`Past`) attached to a finite aorist.
  * [acl:relcl]() relative clause complement.
  * [compound:prt]() particle compound.
  * [compound:pred]() connects two (or more) parts of a multi-word predicate.

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is one Abkhaz UD treebank:

  * [Abkhaz](../treebanks/ab/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
