---
layout: base
title:  'Kyrgyz UD'
udver: '2'
---

# UD for Kyrgyz <span class="flagspan"><img class="flag" src="../../flags/svg/KG.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word. These are normally tokenized as separate tokens (words), with the following exceptions:
  * The period that marks an abbreviation is part of the abbreviation token: _млн._ “million”
  * The hyphen that attaches a morphological suffix to a number is not a token separator: _100-ге_, _19,4°С-қа_
  * Hyphenated compounds are also kept as a single token: _Премьер-Министрге_ “Prime Minister”
* There are a few instances of multi-word tokens that are segmented to individual syntactic words.

## Morphology

### Tags

* Kyrgyz uses all 17 universal POS categories, including particles ([PART]()).
  <!-- (DZ: this is Kazakh) At present, only 6 word types are tagged [PART](): _ма, ау, шығар, шы, ғой, ше_. -->
* There is a large number of constructions where a semantically weak verb combines with a non-finite form (infinitive or converb)
  of a lexically prominent verb. Traditional grammatical descriptions of Kyrgyz would label them as auxiliary constructions.
  However, most of them do not fall under the [AUX]() category in UD. Instead, the non-finite form of the lexical verb is attached
  to the semantically weak verb via the [xcomp]() relation.
* Nevertheless, some verbs are tentatively categorized as [AUX]() even in UD:
  * The copula _бол_ or _е_ (two lemmas with deficient paradigms).
  * The verbs that, when combined with the _-ip_ infinitive, render the progressive aspect: _жат, жүр<!--, қал-->, отур, тур._
  * The durative _бер_.
<!-- (DZ: is this _кал_ in Kyrgyz?)  * The optative _кел_. -->
  * The potential modal auxiliary _ал_ “can”.
* There are five main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Finite verb `Fin`, tagged [VERB]() or [AUX]()<!-- (Kazakh), e.g., _болдым, болды_-->.
  * Infinitive `Inf`, tagged [VERB]() or [AUX]()<!-- (Kazakh), e.g., _бола, болып_-->.
  * Converb `Conv`, tagged [VERB]() or [AUX]()<!-- (Kazakh), e.g., _бола, болып_-->.
  * Gerund `Ger`, tagged [VERB]() or [AUX]()<!-- (Kazakh), e.g., _болғандықтан_-->.
  * Participle `Part`, tagged [VERB]() or [AUX]()<!-- (Kazakh), e.g., _болатын_-->.

### Nominal Features

* There is no grammatical gender in Kyrgyz; however, personal names ([PROPN]()) are annotated with the [Gender]() feature as either `Masc` or `Fem`.
* The two values of the [Number]() feature are `Sing` and `Plur`. For [NOUN](), [PROPN]() and [ADJ](), only the `Plur` value is used
  if the plural suffix is present; the singular is unmarked and unannotated. Pronouns ([PRON]()) have both values and they are treated
  as lexical, that is, the plural pronoun has its own lemma, distinct from the corresponding singular pronoun.
  Finite verbs ([VERB]() and [AUX]()) cross-reference the person and number of the subject. They annotate both singular and plural.
* [Case]() has 7 possible values: `Nom`, `Gen`, `Dat`, `Acc`, `Loc`, `Abl`, `Ins`.
  It occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [NUM](), as well as gerunds and participles ([VERB](), [AUX]()).

### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has only one value: `Cmp`. The basic (positive) form is unmarked and unannotated.
* [Polarity]() applies to verbs ([VERB](), [AUX]()) and has only one value: `Neg`. The basic (positive) form is unmarked and unannotated.

### Verbal Features

* Finite verbs are normally annotated as the habitual [Aspect]() (`Hab`). Other values (`Imp`, `Perf`) can be observed with infinitives and converbs.
* Finite verbs always have one of five values of [Mood](): `Ind`, `Imp`, `Opt`, `Pot` or `Des`. The conditional mood (`Cnd`) is only used with conditional
  converbs.
* Verbs in the indicative mood always have one of two values of [Tense](): `Past`, `Pres`.
  The future tense (`Fut`) may occur with participles.
* The [Evident]() feature (evidentiality) distinguishes first-hand past tense (`Fh`<!-- (Kazakh), e.g., _болыпты_-->) from evidentiality-neutral forms (unmarked<!-- (Kazakh), e.g., _болды_-->).
* There are two values of the [Voice]() feature: `Pass` and `Rcp`. The basic (active) form of the verb is unmarked and unannotated.

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in the nominative case, without adposition.
  * A subordinate clause may serve as the subject and is labeled `csubj`.
* Object ([obj]()) is a noun phrase without adposition and typically in the accusative case,
  although it can be also nominative or dative.

### Relations Overview

* The following relation subtypes are used in Kyrgyz:
  * [acl:relcl]() for relative clauses
  * [nmod:poss]() for possessive and genitive modifiers
  * [obl:own]() for locative nominals that denote owners in constructions with the _have_-meaning
  * [compound:lvc]() for light-verb constructions
  * [flat:name]() to connect parts of a person name
* The following main types are not used alone and must be subtyped:
  [flat]()
* The following relation types are not used in Kyrgyz at all:
  [expl](), [dislocated]()

## Treebanks

There are [N](../../treebanks/ky-comparison.html) Kyrgyz UD treebanks:

  * [Kyrgyz-A](../../treebanks/ky_a-index.html)
  * [Kyrgyz-B](../../treebanks/ky_b-index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
