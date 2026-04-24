---
layout: base
title:  'Nepali UD'
udver: '2'
---

# UD for Nepali <span class="flagspan"><img class="flag" src="../../flags/svg/NP.svg" /></span>

## Tokenization and Word Segmentation

* Nepali words are generally delimited by whitespace. Each orthographic word written in Devanagari is normally treated as one token.
* Punctuation marks such as `।`, `,`, `?`, `!`, quotation marks, ellipses and dashes are tokenized separately and annotated as `PUNCT`.
  * Example: `जंगलमा जाने , चराउने ।`
* Quotation marks and paired punctuation are treated as separate tokens on each side of the quoted span.
  * Example: `" मलाई एकदम थकाई ला छ , जिउ दुखि रहेछ । "`
* Reduplicated or hyphenated forms written as one orthographic unit are kept as one token.
  * Example: `ह्वार-ह्वार` in `अनि ह्वार-ह्वार बलेछ रे ।`
* Case and postpositional morphology may be written in two ways in the current data:
  * When case/postpositional material is fused with the nominal stem, it is kept inside the same token and represented with morphological features such as `Case=Loc`, `Case=Gen`, `Case=Abl`, `Case=Ins`, or `Case=Erg`.
    * Examples: `जंगलमा`, `कर्तव्यको`, `धनबाट`, `विचारले`, `मान्छेले`.
  * When postposition-like elements are written as separate orthographic tokens, they are tokenized separately and annotated as `ADP`, normally with the relation `case`.
    * Examples: `ले`, `लाई`/`लाइ`, `सम्म`.
       
* Discourse and focus particles such as `रे`, `त`, `नै`, `पनि`, `केरे`, and `चाहिँ` appear as independent tokens. They are normally tagged as `PART` and attached with `discourse`.
* Foreign or Sanskrit quotation material written in Devanagari is segmented word by word. Such tokens are tagged as `X` and receive `Foreign=Yes` when appropriate.
  * Example: `न्याययतेन द्रव्यम् कर्तव्यम् पारलौकिकम् ।`
* There are no multiword-token ranges in the current treebank data.

## Morphology

### Tags

The Nepali UD treebank uses the following universal POS tags:

* `ADJ`, `ADP`, `ADV`, `AUX`, `CCONJ`, `DET`, `INTJ`, `NOUN`, `NUM`, `PART`, `PRON`, `PROPN`, `PUNCT`, `VERB`, `X`

The tags `SCONJ` and `SYM` do not occur in the current data.

#### Tag usage

* `ADJ` is used for adjectives that modify nouns or occur as nonverbal predicates.
  * Examples: `महान्`, `पूर्वीय`, `गहन`, `प्राकृतिक`, `न्यायपूर्ण`.
* `ADP` is used for separate postposition-like tokens.
  * Examples: `ले`, `लाई`, `लाइ`, `सम्म`.
* `ADV` is used for lexical adverbs expressing manner, degree, time, or discourse connection.
  * Examples: `समेत`, `सधैं`, `एकदम`, `त्यसपछि`, `अर्थात`, `यसर्थ`.
* `AUX` is used for auxiliaries and copular forms when they have a grammatical function.
  * Examples: `छ`, `छन्`, `हो`, `रहेछ`, `भएका`.
* `CCONJ` is used for coordinating conjunctions.
  * Examples: `र`, `वा`, `अनि`.
* `DET` is used for determiners modifying a following noun.
  * Examples: `त्यो गोठ`, `एउटा मान्छे`, `यस कुरा`.
* `INTJ` is used for interjections, especially in the spoken narrative data.
  * Examples: `ए`, `ल`.
* `NOUN` is used for common nouns, including nouns with fused case/postpositional morphology.
  * Examples: `कर्तव्य`, `अधिकारभन्दा`, `ग्रन्थमा`, `कुरालाई`, `जंगलमा`, `मान्छेले`.
* `NUM` is used for cardinal numerals.
  * Example: `एक`.
* `PART` is used for discourse, focus, emphasis, evidential, and reportative particles.
  * Examples: `रे`, `त`, `नै`, `पनि`, `केरे`, `चाहिँ`.
* `PRON` is used for independent pronouns and pronominal forms.
  * Examples: `मलाई`, `हाम्रो`, `जुन`, `त्यसलाई`, `के`, `आफ्ना`.
* `PROPN` is used for proper names.
  * Examples: `खड्केरिरहा`, `विवेकान्नंद`, `जर्ज`, `इलियट`.
* `PUNCT` is used for punctuation, including Nepali danda `।`, commas, quotation marks, ellipses and dashes.
* `VERB` is used for lexical verbs, participles, converbs, infinitives, and verbal predicates.
  * Examples: `गर्छन्`, `भनिएको`, `गर्नुपर्छ`, `फर्केर`, `आएको`, `घस्दिएछ`.
* `X` is used for foreign or Sanskrit quotation material that is not analyzed internally.
  * Examples: `न्याययतेन`, `द्रव्यम्`, `कर्तव्यम्`, `पारलौकिकम्`.

#### AUX vs. VERB

The distinction between `AUX` and `VERB` is based on grammatical function.

* `AUX` is used when a form of `हुनु` or another auxiliary-like form contributes tense, aspect, mood, evidentiality, or copular meaning rather than introducing the main lexical predicate.
  * Examples: `छ`, `छन्`, `हो`, `रहेछ`, `भएका`.
* `VERB` is used for the lexical predicate that carries the main event or state meaning.
  * Examples: `गर्छन्`, `भनिएको`, `आएको`, `गर्नुपर्छ`, `घस्दिएछ`.
* In verbal complexes, the lexical verb is the head and the auxiliary attaches with `aux`.
  * Example: in `भनिएको छ`, `भनिएको` is `VERB` and `छ` is `AUX`.
* In nonverbal clauses, copular forms such as `छ` and `हो` are tagged `AUX` and attached with `cop` to the nominal or adjectival predicate.
  * Example: in `कर्तव्य अधिकारभन्दा महान् छ ।`, `महान्` is the predicate and `छ` is `cop`.

#### DET vs. PRON

The distinction between `DET` and `PRON` is syntactic.

* A form is tagged `DET` when it modifies a noun.
  * Examples: `त्यो गोठ`, `एउटा मान्छे`, `यस कुरा`.
* The same or similar form is tagged `PRON` when it functions independently as a nominal argument.
  * Examples: `त्यसलाई`, `जुन`, `मलाई`, `के`.

#### Deverbal forms

Participial and converbal forms are normally tagged as `VERB` when they preserve verbal syntax.

* Participial modifiers are tagged `VERB` and attached with `acl` .
  * Examples: `भनिएको`, `गरिएको`, `गर्ने`.
* Converbs are tagged `VERB` and attached with `advcl`.
  * Examples: `फर्केर`, `आएर`, `खर्चेर`.
* Deverbal lexicalized nominal or adjectival forms may be tagged according to their syntactic distribution when they behave like ordinary nouns or adjectives.

### Features

The current Nepali treebank uses the following morphological features:

* `Aspect`, `Case`, `Evident`, `Foreign`, `Gender`, `Mood`, `NumType`, `Number`, `Person`, `Polarity`, `PronType`, `Reflex`, `Tense`, `VerbForm`, `Voice`.

Only features attested in the current data are listed here.

#### Nominal and pronominal features

* `Case` is one of the central features in the Nepali data. It is used both for unmarked nominative forms and for forms with fused case/postpositional morphology.

| Value | Meaning | Examples |
|---|---|---|
| `Nom` | nominative | `कर्तव्य`, `खुशी` |
| `Acc` | accusative/direct object, often morphologically unmarked  |`काम`, `घ्यू`, `कर्तव्य`, `कर्म`, `सोच` (could be marked with `लाई` in certain situations)|
| `Dat` | dative | `मानिसलाई`, `कसैलाई` |
| `Gen` | genitive | `कर्तव्यको`, `हाम्रो`, `उसको` |
| `Loc` | locative | `ग्रन्थमा`, `जंगलमा`, `गोठमा` |
| `Abl` | ablative/source/comparative | `अधिकारभन्दा`, `धनबाट` |
| `Ins` | instrumental | `विचारले`, `तरिकाले` |
| `Erg` | ergative/instrumental subject marking | `मान्छेले`, `चिन्तकले` |

* `Number` is used for singular and plural nominal and verbal forms.
  * `Number=Sing`: `कर्म`, `पैसा`, `कथा`.
  * `Number=Plur`: `विचारहरू`, `उपनिषद्हरू`.
* `Gender` occurs only where it is morphologically or lexically relevant.
  * Attested values include `Masc`, `Fem`, and `Neut`.
* `PronType` is used for pronouns and determiners.
  * `PronType=Dem`: demonstratives such as `यो`, `त्यो`, `यस`.
  * `PronType=Prs`: personal pronouns and possessive pronouns such as `हाम्रो`, `उसको`.
  * `PronType=Int`: interrogative forms such as `के`.
  * `PronType=Rel`: relative forms such as `जुन`.
* `Reflex=Yes` is used for reflexive forms such as `आआफ्नो`.
* `NumType=Card` is used for cardinal numerals such as `एक`.

#### Verbal features

* `VerbForm` is used to distinguish finite, participial, converbal and infinitival forms.

| Value | Meaning | Examples |
|---|---|---|
| `Fin` | finite verb | `गर्छन्`, `हुन्छ`, `छ` |
| `Part` | participle | `गरेको`, `गरिएको`, `भएको` |
| `Conv` | converb | `फर्केर`, `आएर`, `खर्चेर` |
| `Inf` | infinitive | `गर्न`, `चराउन` |

* `Tense` is used for present, past and future forms.
  * `Tense=Pres`: `छ`, `गर्छन्`, `हुन्छ`.
  * `Tense=Past`: `भएको`, `गरिएको`, `रहेछ`.
  * `Tense=Fut`: future forms attested in the narrative data.
* `Aspect` is used for imperfective, perfective and progressive meanings.
  * Attested values: `Imp`, `Perf`, `Prog`.
* `Mood` is used for indicative, imperative and necessity forms.
  * `Mood=Ind`: ordinary statements.
  * `Mood=Imp`: imperatives such as `हेर्नुहोस्`.
  * `Mood=Nec`: necessity forms such as `गर्नुपर्छ`.
* `Person` and `Number` are used mainly on finite verbs and auxiliaries.
  * Example: `गर्छन्` has third person plural agreement.
* `Polarity=Neg` is used for negative forms such as `हुदैन` and `नहुने`.
* `Voice=Pass` is used where passive morphology is present.
* `Evident=Nfh` occurs in the narrative data, especially with reportative or non-firsthand forms.

#### Other features

* `Foreign=Yes` is used for foreign or Sanskrit material in quotations.
* Nepali has honorific and politeness distinctions in the language, especially in pronouns and verb agreement. These distinctions are visible linguistically, but no separate `Polite` feature is used in the current data.

## Syntax

### Basic clause structure

Nepali is a head-final language. The normal constituent order is SOV, and the finite verbal predicate or verbal complex normally occurs at the end of the clause.

* Example: `यस्तो पस्चात्य चिन्तकले पनि कर्तव्यको महानतालाई उदघाटित गरेका छन् ।`

### Core arguments

#### Subjects (`nsubj`)

Canonical subjects are annotated as `nsubj`. They may be unmarked nominative NPs or case-marked NPs.

* Example: `कर्तव्य अधिकारभन्दा महान् छ ।`
  * `कर्तव्य` is `nsubj`.
* Nepali also shows ergative/instrumental subject marking with `-ले`, especially with perfective or agentive predicates. Such subjects are still annotated as `nsubj`.
  * Examples: `मान्छेले`, `चिन्तकले`, `विचारले`.

#### Direct objects (`obj`)

Direct objects are annotated as `obj` when they are the core patient/theme argument of a lexical verb.

* Example: in `त्यो घ्यू घस्दिएछ`, `घ्यू` is `obj`.
* Bare objects and case-marked object-like nominals are treated according to their syntactic role in the clause.

#### Indirect objects (`iobj`)

Dative or recipient-like arguments are annotated as `iobj` when they are core arguments of the predicate.

* Example: `कसैलाई पनि धारा पानीको भुत लाग्दैन ।`
  * `कसैलाई` is `iobj`.
* Dative-marked or `लाई`-marked arguments that behave like recipients, experiencers, or affected participants are often annotated as `iobj`.

#### Obliques (`obl`)

Non-core arguments are annotated as `obl`. These include locative, ablative, instrumental, temporal, source, manner and other adverbial nominals.

* Examples: `जंगलमा`, `गोठमा`, `धनबाट`, `अधिकारभन्दा`, `रूपमा`, `तरिकाले`.
* The current data uses plain `obl` rather than language-specific oblique subtypes such as `obl:loc` or `obl:tmod`.

### Copula and nonverbal clauses

In nonverbal clauses with nominal or adjectival predicates, the lexical predicate is the syntactic head and the copular auxiliary is attached with `cop`.

* Example: `कर्तव्य अधिकारभन्दा महान् छ ।`
  * `महान्` is the root predicate.
  * `छ` is attached as `cop`.
  * `कर्तव्य` is `nsubj`.
  * `अधिकारभन्दा` is `obl`.
* Example: `कर्तव्यप्रतीको निष्ठा वा भक्ति उपासनाको सर्वोच्च रूप हो ...`
  * `रूप` is the nominal predicate.
  * `हो` is attached as `cop`.

In verbal predicates, auxiliary forms such as `छ` and `छन्` attach to the lexical verb with `aux`.

* Example: in `भनिएको छ`, `भनिएको` is the verbal head and `छ` is `aux`.

### Relational constructions

#### Participial and relative clause modifiers

Participial clauses modifying a noun are attached with `acl`. 

* Examples: `भनिएको`, `गरिएको`, `गर्ने`.

#### Converbs and clause chaining

Converb forms are annotated as adverbial clauses with `advcl`.

* Examples: `फर्केर`, `आएर`, `लागेर`, `खर्चेर`.

#### Coordination and parataxis

Coordinating conjunctions such as `र`, `वा`, and `अनि` are annotated as `cc`, and the non-initial conjunct is attached with `conj`.

Loosely sequenced main clauses, especially in narrative passages, may be connected with `parataxis` when they are not clear cases of coordination or subordination.

### Discourse and special relations

Discourse particles such as `त`, `नै`, `रे`, `केरे`, `चाहिँ`, and `पनि` are attached with `discourse`.

* Example: in `भन्छ रे`, `रे` is attached with `discourse`.

The following subtyped relations occur in the current Nepali data:

* `acl:relcl` – relative clauses.
* `compound:redup` – reduplicated compounds, e.g. repeated or echo-like expressions.
* `flat:name` – multi-token proper names.
* `nmod:poss` – possessive nominal modifiers.

Other important relations used in the data include `advcl`, `advmod`, `amod`, `appos`, `aux`, `case`, `cc`, `ccomp`, `compound`, `conj`, `cop`, `dep`, `det`, `discourse`, `dislocated`, `iobj`, `nmod`, `nsubj`, `nummod`, `obj`, `obl`, `parataxis`, `punct`, `reparandum`, `root`, and `xcomp`.


## Treebanks

There is [1](../treebanks/ne-comparison.html) Nepali UD treebank:

* [Nepali-BK](../treebanks/ne_bk/index.html)
