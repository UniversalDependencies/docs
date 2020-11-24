---
layout: base
title:  'Old East Slavic UD'
udver: '2'
---

# UD for Old East Slavic <span class="flagspan"><img class="flag" src="../../flags/svg/RU-IVAN.svg" /></span>

## Tokenization and Word Segmentation

* In general tokens are delimited by spaces.
* It should be noted that many of the texts are based on manuscripts in scripta continua, i.e. words are not separated by spaces. The spaces are therefore editorial. When texts are based on independent editions, the spacing may differ from our general tokenisation policy. This sometimes causes tokens with spaces.
* UD_Old_Russian_RNC, the manusctipt page boundary markers are preserved within the token just as they are marked in the publication, cf. _жень||{л._55}скую_ “feminime, page boundary, beginning of p. 55”. The normalized spelling (Norm=женьскую) is placed in the MISC field. Hyphen is considered either token separator or not depending the grammatical status of elements before and after the hyphen.
* Punctuation is not included in UD_Old_Russian-TOROT.
* Punctuation is included in UD_Old_Russian_RNC.

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags
This is a brief overview of the use of POS tags in UD_Old_Russian-TOROT:

* The POS category PART is not in use, instead we use ADV for particle-like items.
* DET is used for traditional demonstrative and indefinite pronouns. Possessive pronouns are tagged ADJ. All other pronouns are tagged PRON.
* Verbal forms, including participles, are tagged VERB or AUX. Only deverbal nouns with clearly nominal properties are tagged NOUN.
* Only _быти_ and _не быти_ (with incorporated negation) are analysed as auxiliaries and have the AUX tag.
* TOROT was originally tagged in the PROIEL dependency format, an overview of the tagset can be found here: https://proiel.github.io/handbook/developer/#the-proiel-xml-format

This is a brief overview of the use of POS tags in UD_Old_Russian-RNC:

* The treebank uses all 17 universal POS categories.
* The DET category includes possessive (including reflexive and relative possessive), demonstrative, interrogative/relative, indefinite, negative, and universal (total) determiners that inflect for gender. The relative pronoun _который_ is tagged either PRON or DET depending its syntactic role.
* The verb forms, including participles, are tagged VERB or AUX. Verbal nouns with clearly nominal properties are tagged NOUN.
* Only _быти_ and conditional markers _бы_, _бъ_ are tagged AUX.
* RNC is tagged in parallel in native UD and RNC format, an overview of the tagset and cross-mapping can be found here: https://github.com/olesar/UD_MidRussian.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features
This is a brief overview of the features used in UD_Old_Russian-TOROT:

* VERB can have the following features: Person (1, 2, 3), Number (Sing, Dual, Plur), Tense (Pres, Past, Fut), Aspect (Perf, Imp, Res), Mood (Ind, Imp), VerbForm (Fin, Inf, Part, Sup), Voice (Act, Pass). It should be noted that the Aspect feature is only used to distinguish the aorist (Tense=Past|Aspect=Perf) from the imperfect (Tense=Past|Aspect=Imp), and to distinguish the resultative l-participle from other participles (VerbForm=Part|Aspect=Res). Participles also have the features Gender (Fem, Masc, Neut), Case (Nom, Acc, Gen, Dat, Ins, Loc, Voc) and Strength (Strong, Weak). The latter feature separates short (nominal) forms (Strong) from long (pronominal) forms (Weak). Note that we do not recognise gerunds even for the latest texts, they are conservatively tagged at face value as short-form participles (VerbForm=Part|Strength=Strong).

* NOUN and PROPN can have the following features: Case, Gender, Number (with the specifications above). Note that animate genitive-accusatives are annotated with Case=Gen. There is no Animacy feature.

* ADJ can have the following features: Case, Gender, Number, Strength (with the specifications above), Degree (Pos, Cmp, Sup)


This is a brief overview of the features used in UD_Old_Russian-RNC:

* VERB and AUX can have the following features: Person (1, 2, 3), Number (Sing, Dual, Plur), Tense (Pres, Past, Fut), Aspect (Perf, Imp), Mood (Ind, Imp, Cnd), VerbForm (Fin, Inf, Sup, Conv, Part, PartRes), Voice (Act, Pass, Mid), Reflex (Yes), Polarity (Neg), Analyt (Yes).
Participles also have the features Gender (Fem, Masc, Neut), Case (Nom, Acc, Gen, Dat, Ins, Loc) and Variant (Short). The latter feature is applied to short forms; long forms are not marked explicitely. Variant=Short in UD-RNC corresponds directly to Strength=Weak in UD-TOROT.
Unlike in UD-Torot, l-participles are tagged VerbForm=PartRes and distinguish Aspect (Perf, Imp), converbs are tagged VerbForm=Conv in UD-RNC.
At the moment, the Aspect and Analyt features are tagged only in some parts of the treebank.

* NOUN and PROPN can have the following features: Number (Sing, Dual, Plur, Adnum), Gender (Fem, Masc, Neut), Case (Nom, Acc, Gen, Dat, Ins, Loc, Voc), Animacy (Anim, Inan). The latter feature is only used to distinguish animate and inanimate accusative forms.

* ADJ can have the following features: Case, Gender, Number, Variant (with the specifications above), Degree (Pos, Cmp, Sup), Poss (Yes), Reflex (Yes).

* DET can have the following features: Case, Gender, Number, Animacy, Variant, Poss, Reflex (with the specifications above).

* PRON can have the following features: Case, Gender, Number, Animacy, Person, PronType, Poss, Reflex, Analyt (with the specifications above).

* NUM can have the following features: Case, Animacy, NumForm; Gender, Number, and Degree (Cmp) are tagged on a few numerals.

* Other lexical features include:
  * Abbr (Yes)

* Language-specific features include:
  * Analyt (Yes)
  * Variant (Short)

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

* We accept nominative subjects (nsubj), as well as genitive subjects under negation. Clausal subjects are tagged csubj. Potential subjects in other cases (such as the dative) are tagged iobj.
* Objects of transitive verbs are tagged obj. Normally such objects are in the accusative, but they can also be in the genitive due to negation, partitive semantics or animacy. Supines also obligatorily take genitive objects, which are tagged obj if the verb is normally transitive. Arguments in other cases are tagged iobj. Prepositional arguments are tagged obl.
* The copula verb is _быти_. It is increasingly omitted in the present tense in the later texts.
* We use the following subtype relations: aux:pass, csubj:pass, flat:foreign, flat:name, nsubj:pass, obl:agent.

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [2](../treebanks/orv-comparison.html) Old Russian UD treebanks:

  * [Old Russian RNC](../treebanks/orv_rnc/index.html)
  * [Old Russian TOROT](../treebanks/orv_torot/index.html)
