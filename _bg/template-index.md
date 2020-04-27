---
layout: base
title:  'Bulgarian UD'
udver: '2'
---

# UD for Bulgarian <span class="flagspan"><img class="flag" src="../../flags/svg/BG.svg" /></span>

## Tokenization and Word Segmentation


* In general, words are delimited by whitespace characters. In our original treebank we use MWEs, such as compound subordinators, adverbs or composite pronouns. However, in UD every single token is segmented separately. For example: _за да_ / za da"in order to", _може би_ / mozhe bi"maybe", _се забавям_ / se zavavyam"slow myself". For indicating the common POS meaning, we use the relation `fixed`.
* The numbers are analyzed as one token when used as expression without spaces (20000) or with an internal comma as indicator (10,434).
* The hyphenated complex words are treated as one token: _външно-политически_ / vanshno-politicheski "foreign-political", _министър-председателят_ / ministar-predsedateleyat "the prime minister", _по-малко_ / po-malko "less".
* Depending on the intervals, there might be cases in which the complex word is analyzed as three tokens. For example _ДПС - депутати_ / DPS - members-of-parliament "MPs from the DPS party".

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags

This is an overview only. For more detailed discussion and examples, see the list of [Bulgarian POS tags](pos/index.html)
and [Bulgarian features](feat/index.html).

* Bulgarian uses 15 universal POS categories. It does not make use of ([SYM]()) and ([X]()).
* Affirmative, negative, interrogative, modal particles are analyzed as ([PART]()). 
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is handled as follows:
  * as pronouns - personal and reflexive pronouns, and all entity-pointing other pronouns (demonstrative, interrogative, relative, indefinite, collective, negative).
  * as determiners - the attributive and possessive atributive forms of the demonstrative, interrogative, relative, indefinite, collective, negative pronouns; the long forms of the possessive pronouns.
  * Disclamer 1: entity-denoting demonstrative, interrogative, relative, indefinite, collective, negative pronouns can be either ([PRON]()) or ([DET]()) depending on the usage of the homonymic form. If it is used as a pro-noun, it is pronoun. If it is used attributively, it is determiner.
  * Disclaimer 2: Bulgarian has a post-positined definite article which is part of the word and a phrasal affix within a phrase. Thus, it does not have a distinct analysis.
* Bulgarian has just one auxiliary verb ([AUX]()), _съм_ / сам (“to be”), but lemmas _бъда_ / bada, _бивам_ / bivam, _би_ / bi ("would") are also possible.
* Auxiliary particles _ще_ / shte ("will, shall") and _да_ / da ("to") are analyzed as ([AUX]()).
* Modal verbs are analyzed as ([VERB]()).
* The following POS are tagged as ([ADJ]()): adjectives; ordinal numerals; partciples in adjectival usage adjectives derived from family names.
* The following POS are tagged as ([VERB]()): personal and impersonal verbs; participles when used as verbal forms - indicators of evidentiality; and converbs.


---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features

* Features Not used:`Abbr`, `Typo`, `NounClass`, `Evident`, `Polite`, `Clusivity`. Although `Evident` and `Polite` are relevant for Bulgarian, their annotation requires additional manual intervention and thus - for the moment they are not reflected.

#### Nominal Features

* Nouns [NOUN]() and PROPN]() have an inherent [Gender]() feature with one of the three values: `Masc`, `Fem` or `Neut`.
* [Animacy]() is a semantic feature. It is gramatically incorporated only in some pronouns and numerals. The distinction `Human - Non-human` is more explicit in the `Count` form of `Masculine`. `Count` form is applicable only for masculine nouns (`Masc`) that denote Non-human.
* [ADJ](), [DET](), [NUM](), [PART]() inflect for `Gender` and `Number`, and agree with nouns.
* Bulgarian lacks declension, so only some vocative forms have vocative case, while personal pronouns have nominative, accusative and dative cases. Masculine forms of `Int`, `Rel`, `Neg`, `Ind` and very rarely `Tot` have accusative and dative forms.
* Bulgarian nominals (nouns, adjectives, ordinal numerals, attributively used participles) make use of the `Definite` feature. When the form has a definite article, it is marked as `Def`. When no definite article is attached after the ending, it is marked as `Ind`.

#### Degree and Polarity

* [Degree]() is an inherent feature for adjectives ([ADJ]()) and adverbs ([ADV]()). It has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() has two values, `Pos` and `Neg`, and applies primarily to negative and affirmative particles [PART]().
 
#### Verbal Features

* Similarly to other Slavic languages, Bulgarian verbs have as a lexically classifying feature [Aspect](), either imperfective (`Imp`) or perfective (`Perf`). 
* Finite verbs always have one of three values of [Mood](): `Ind`, `Imp` or `Cnd`. The conditional mood is only used with the special conditional auxiliaries _(бих / bih, би / bi, бихме / bihme, бихте / bihte, биха / biha)_. The l-participle of the main verb, that is needed to form the analytic conditional, is not marked with this feature.
* Verbs in the indicative mood always have one of three values of [Tense](): `Past`, `Imp` and `Pres`. `Fut` is not used because this tense is always analytic and formed with a special particle.
* There are two values of the [Voice]() feature: `Act` and `Pass`. Only the passive participle has `Voice=Pass`. All other verb forms have `Voice=Act`.

#### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()), determiners ([DET]()) and adverbs ([ADV]()).
* The [Poss]() feature marks possessive personal determiners (e.g. _мой_ / moy “my”),
  possessive interrogative, indefinite or negative determiners (e.g. _чий_ / chiy “whose”),
  possessive relative determiners (e.g. _чийто_ / chiyto “whose”)
  and possessive adjectives (e.g. _майчин_ / maychin “mother's”). It also marks the clitic personal pronouns `Prs` and reflexive pronouns.
* The [Reflex]() feature marks reflexive pronouns _(себе си, се, си)_ / sebe si, se, si and determiners _(свой)_ / svoy "one's own" and possesive clitic pronoun _си_ / si.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  


---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

This is an overview only. For more detailed discussion and examples, see the list of [Bulgarian relations](dep/index.html).

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is a noun phrase in nominative case, without preposition.
* An finite subordinate clause can serve the role of a subject. In such a case it is labeled as clausal subject, [csubj](). There is no infinitive in Bulgarian.
* Objects can be bare noun phrases in the position of an accusative pronoun.
* Bare accusative, dative and prepositinal dative are considered core (with the preposition _на_ / na).
* All other prepositional objects are considered oblique.
* Accusative objects of some verbs alternate with finite clausal complements, which are labeled [ccomp]().
* If a verb subcategorizes for modal verbs or verbs of control, the infinitival complement is labeled [xcomp]().
* Adjuncts are usually prepositional phrases, but they can be bare noun phrases as well. They are labeled [obl]().
* In Bulgarian there is the phenomenon of clitic doubling. Thus, when the short pronoun appears alone, it takes the role of [obj]() or [iobj](). However, when the full-fledged pronoun or phrase is present, it is marked [expl](). Expletive [expl]() is used also for the reflexive short pronouns when they are semantically empty and part of the lexical verb. For example: _смея се_ / smeya se "I am laughing"
* In Bulgarian copula [cop]() is expressed by the auxiliary verb _съм_ / sam "to be" and its synonyms.
* In passive clauses (both reflexive and periphrastic passive), the subject is labeled with [nsubj:pass]() or [csubj:pass](), respectively.
* The auxiliary verb in periphrastic passive is labeled [aux:pass]().

### Other relations:

* In Bulgarian the Yes-No questions are formed with the question particle ли (li). At the moment this particle is annotated with the [discourse]() relation.

### No used relations:

* `dislocated`, `clf`, `list`, `reparandum`, `orphan`, `dep`



---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There is [1](../treebanks/LCODE-comparison.html) Bulgarian UD treebank:

  * [Bulgarian-BTB](../treebanks/LCODE_a/index.html)


---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
