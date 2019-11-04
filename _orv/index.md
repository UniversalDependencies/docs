---
layout: base
title:  'Old Russian UD'
udver: '2'
---

# UD for Old Russian <span class="flagspan"><img class="flag" src="../../flags/svg/RU-IVAN.svg" /></span>

## Tokenization and Word Segmentation
This is an overview of tokenisation in UD_Old_Russian-TOROT:

* In general tokens are delimited by spaces.
* It should be noted that many of the texts are based on manuscripts in scripta continua, i.e. words are not separated by spaces. The spaces are therefore editorial. When texts are based on independent editions, the spacing may differ from our general tokenisation policy. This sometimes causes tokens with spaces.
* Punctuation is not included in UD_Old_Russian-TOROT.

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags
This is a brief overview of the use of POS tags in UD_Old_Russian-TOROT:

* The POS category PART is not in use, instead we use ADV for particle-like items.
* DET is used for traditional demonstrative and indefinite pronouns. Possessive pronouns are tagged ADJ. All other pronouns are tagged PRON.
* Verbal forms, including participles, are tagged VERB or AUX. Only deverbal nouns with clearly nominal properties are tagged NOUN.
* Only быти and не быти (with incorporated negation) are analysed as auxiliaries and have the AUX tag.
* TOROT was originally tagged in the PROIEL dependency format, an overview of the tagset can be found here: https://proiel.github.io/handbook/developer/#the-proiel-xml-format


---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features
This is a brief overview of the features used in UD_Old_Russian-TOROT:

* VERB can have the following features: Person (1, 2, 3), Number (Sing, Dual, Plur), Tense (Pres, Past, Fut), Aspect (Perf, Imp, Res), Mood (Ind, Imp), VerbForm (Fin, Inf, Part, Sup), Voice (Act, Pass). It should be noted that the Aspect feature is only used to distinguish the aorist (Tense=Past|Aspect=Perf) from the imperfect (Tense=Past|Aspect=Imp), and to distinguish the resultative l-participle from other participles (VerbForm=Part|Aspect=Res). Participles also have the features Gender (Fem, Masc, Neut), Case (Nom, Acc, Gen, Dat, Ins, Loc, Voc) and Strength (Strong, Weak). The latter feature separates short (nominal) forms (Strong) from long (pronominal) forms (Weak). Note that we do not recognise gerunds even for the latest texts, they are conservatively tagged at face value as short-form participles (VerbForm=Part|Strength=Strong).

* NOUN and PROPN can have the following features: Case, Gender, Number (with the specifications above). Note that animate genitive-accusatives are annotated with Case=Gen. There is no Animacy feature.

* ADJ can have the following features: Case, Gender, Number, Strength (with the specifications above), Degree (Pos, Cmp, Sup)

---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax
This is a brief overview of the use of syntactic tags in UD_Old_Russian-TOROT:

* We accept nominative subjects (nsubj), as well as genitive subjects under negation. Clausal subjects are tagged csubj. Potential subjects in other cases (such as the dative) are tagged iobj.
* Objects of transitive verbs are tagged obj. Normally such objects are in the accusative, but they can also be in the genitive due to negation, partitive semantics or animacy. Supines also obligatorily take genitive objects, which are tagged obj if the verb is normally transitive. Arguments in other cases are tagged iobj. Prepositional arguments are tagged obl.
* The copula verb is быти. It is increasingly omitted in the present tense in the later texts.
* We use the following subtype relations: aux:pass, csubj:pass, flat:foreign, flat:name, nsubj:pass, obl:agent.

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [2](../treebanks/orv-comparison.html) Old Russian UD treebanks:

  * [Old Russian RNC](../treebanks/orv_rnc/index.html)
  * [Old Russian TOROT](../treebanks/orv_torot/index.html)
