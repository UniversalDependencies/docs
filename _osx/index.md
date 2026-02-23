---
layout: base
title:  'Old Saxon (Old Low Geman) UD'
udver: '2'
---

# UD for Old Saxon German <!--span class="flagspan"><img class="flag" src="../../flags/svg/DE.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/AT.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/LI.svg" /></span> <span class="flagspan" style="padding-left:1em"><img class="flag" src="../../flags/svg/CH.svg" /></span-->

Old Saxon (Old Low German, `osx`) is a historical language spoken between the 6th and 12th c. C.E. in Northern Germany and neighboring territories. It is the linguistic predecessor of Low German (Low Saxon, `nds`) and closely related to Old English, Old Low Franconian (Old Dutch) and Old High German. Its grammar shares the characteristics of these older West Germanic languages and its syntax should be represented in a similar way. Updates to these guidelines should be synchronized with [the existing guidelines for the Old English UD stub](https://universaldependencies.org/ang/index.html) and possible future guidelines for Old High German.

## Tokenization and Word Segmentation


<html>
<!--
Instruction: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.
-->
</html>

* As Old Saxon is attested in manuscripts from an era before the invention of modern punctuation, the texts differ with respect to word segmentation principles and typographical rules. In older editions, modern punctuation (and thus tokenization) rules apply, and then, tokenization rules correspond to those of modern German or English, i.e.:
  * In general, words are delimited by whitespace characters. Description of exceptions follows.
  * According to typographical rules, many punctuation marks are attached to a neighboring word. We usually tokenize them as separate tokens (words).
* In manuscripts, (white)spaces between words can sometimes not be identified reliably or do not seem to be accordance with modern spacing rules. In some manuscripts (esp., [Heliand Ms. M](https://www.lwl.org/331-download/niw/html/40001B.html)), we thus observe fusion between independent words and splits between parts of the same morphological word. **The handling of such data is yet to be clarified.**
  * These may be treated as multi-token words in the future.
  * Example

         Ms. M:   that inatorht lico  tidi  gimanodun
         Ms. C:   that ina torohtlico tidi  gimanodun (HeliPaD corpus)
         edition: that ina torhtlîco  tîdi  gimanodun (DDD corpus)
                  that him brilliant  times remembered
                  "that he was remembered of great times"

## Morphology

### Tags

<html>
<!-- Instruction: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.
-->
</html>

* Old Saxon morphological annotation currently follows a mapping two source corpora [HeliPaD](https://zenodo.org/records/4395040) and [DDD](https://www.laudatio-repository.org/browse/corpus/MiXVDnMB7CArCQ9CABmW/corpora). These apply diverging practices that need to be consolidated.
* Old Saxon uses all 17 universal POS categories. The tag ([SYM]()) is currently not used in any annotated data.
* The only element annotated as particle ([PART]()) is _ni_ (_ne_) “not”. 
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is to be checked. 
* Old Saxon auxiliary verbs ([AUX]()) are:
  * _wesan_ and _sin_ `to be'
  * _hebbian_ `to have`
  * _werđan_ `to become' 
  * modal verbs _durvan_ “may”, _kunnan_ “can”, _magan_ “may”, _motan_ “must”, _skulan_ “shall”, _willian_ “want”
  * The verbs _wesan/sin_, _hebbian_ and _werđan_ can also occur as normal verbs ([VERB]()), meaning “be, have, become”.
* We treat verse boundaries or line breaks as punctuation ([PUNCT]()) if they are provided in the source text edition. Depending on characteristics of the underlying edition, either of these may be indicated as `//` or `/`. 

### Features
<!-- should be split as below -->

As an older West Germanic language, Old Saxon provides same morphological features as [Old English UD](https://universaldependencies.org/ang/index.html). 
This includes all morphological features that have also been preserved in Modern German (the morphologically most archaic modern West Germanic language), but in addition, Old Saxon provides Instrumental case and Dual number.

<!--
Old English-Cairo contains case, gender, number, person, verb form, mood, tense, degree, and possessive features.

There are some features that are possible in UD Old English but do not appear in it.
* The instrumental case is not attested in UD Old English but is possible.
* Dual number is possible in pronouns, but is not attested in UD Old English.
-->

Features are currently only provided as `XPOS`, not in direct annotation.

<!--
The complete feature space is as follows:
* `Case`: `Nom`, `Acc`, `Gen`, `Dat`, `Inst`
* `Gender`: `Masc`, `Fem`, `Neut`
* `Number`: `Sing`, `Dual`, `Plur`
* `Person`: `1`, `2`, `3`
* `VerbForm`: `Fin`, `Inf`, `Part`, `Ger`
* `Mood`: `Ind`, `Imp`, `Sub`
* `Tense`: `Pres`, `Past`
* `Degree`: `Pos`, `Comp`, `Sup`
* `Poss`: `Yes`
-->
<!-- this is from old english, Ger may need to be confirmed -->

<!--
### Nominal Features



### Degree and Polarity

Currently only provided as `XPOS`.

### Verbal Features

Currently only provided as `XPOS`.

### Pronouns, Determiners, Quantifiers

Currently only provided as `XPOS`.

### Other Features

Currently only provided as `XPOS`.
-->
<!--
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.
-->

## Syntax

<!-- This is an overview only. For more detailed discussion and examples, see the list of [German relations](dep/index.html). -->


<!--
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.
-->

### Adnominal relations ###

<!-- not in template, should be logically first --> 

- We annotate attributive deictic pronouns (that correspond to the later definite article) as `det`
- It is unlikely that the numeral _en_ "one" was already grammaticalized into an indefinite article. It is thus annotated as `nummod` rather than `det`.


### Core Arguments, Oblique Arguments and Adjuncts

* As for the labelling of argument structure, we largely follow the conventions for Modern High German.
* The annotation of nominal argument roles within the clause is stricly guided by morphology:
  
  | morphology | grammatical role | dependency |
  | ----------- | --------------- | ----------- |
  | nominative NP | argument | `nsubj` |
  | genitive NP  | argument or complement | `obl` |
  | accusative NP | argument | `obj` |
  | dative NP    | argument or complement | `obl` |
  | instrumental NP | complement | `obl` |
  | PPs        | complement  | `obl` |

    * In the earlier conversion, bare dative NPs were annotated `iobj` as these represent classical indirect objects in West Germanic languages, but the manual annotation followed the modern High German UD guidelines to replace this with `obl`.

  * This means that verbs of giving are not ditransitive predicates in Old Saxon UD, as they have one oblique dative argument and only one core object.
  * This also includes cases in which morphological genitives seem to serve adverbial functions (and correspond to later pronominal adverbs), e.g., _thes ... thuo_ "because of this", literally "(of) this ... then":

        Thes    im   thuo bêôiun uuarđ  , sinhîun tuêm sêr  umbi   herta .
        of.this them then both   became , spouses two  pain around heart
        "Therefore they both, the spouses two, felt pain in their heart" (Old Saxon Genesis, DDD corpus)

* A finite subordinate clause may serve as the subject and is labeled `csubj`.
* Accusative objects of some verbs alternate with finite clausal complements, which are labeled [ccomp]().
* If a verb subcategorizes for the infinitive (e.g. phasal verbs or verbs of control), the infinitival complement is labeled [xcomp]().
* Predicative adjectives in non-copular clauses are labelled [xcomp]().

### Non-verbal Clauses

* The copula verb _wesan_, resp. _sin_ "be" is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
* **The treatment of _werđan_ "to become" is to be confirmed.**

        thuo warđ   iro hugi sêrag
        then became her mind sorrowful
        "Then, he mind became sorrowful" (Old Saxon Genesis, DDD corpus)

### Clause juncture, ellipsis and apposition

<!-- not in template, should be after non-verbal clauses -->

* Some complementizers can also be analyzed as adverbs. For dependency annotation, we follow the original POS analysis for disambiguating between `mark` and `advmod`:

       Thuo  siu bluodag uuuosk hrêugiuuâdi    , thuo warđ   iro hugi sêrag .
       when  she bloody  washed burial.robe      then became her mind sorrowful
        SCONJ                                     ADV
        "When she washed the bloody burial robe, she was sorry" (Old Saxon Genesis, DDD corpus)

* For the annotation of relations between independent main clauses as either `conj` or `parataxis`, see [issue #1201](https://github.com/UniversalDependencies/docs/issues/1201).

* The author of Heliand and Genesis, the two primary texts for Old Saxon, seems to actually take a specific delight in his capability of disrupting constituency structure. This may actually reflect an artistic style at the time that we also found on items of metal, in particular, which is defined by abstract depictions of animals posited in a convoluted way (animal style). In the manually annotated data, thus, there are many cases of non-projective relations unexpected in the context of Germanic languages.

        Thuo siu bluodag uuuosk hrêugiuuâdi
        when she bloody  washed burial.rope
        "when she washed the bloody burial rope" (Old Saxon Genesis, DDD corpus)

- We normally annotate cases in which postposed nominal descriptions that are semantically identical, coreferent with or variants of non-displaced noun phrases (or pronouns) after the clause boundary as `appos`. However, sometimes not only the duplicated nominal is postposed, but also other clausal modifiers such as adverbs, so that syntactically, these actually seem to be elliptical constructions. However, then, every apposition could also be interpreted as a elliptical clause (of which only one argument prevailed). In order to provide a consistens analysis for both cases, we annotate normal `appos` between the nominals (if the postposed nominal seems to provide most of the semantic information of the postposed elements), and attach the then-orphaned clausal modifiers as `orphan`. This is our interpretation of https://universaldependencies.org/u/overview/specific-syntax.html#ellipsis-in-clauses and https://universaldependencies.org/v2/ellipsis.html#predicate-ellipis-2-orphan-instead-of-remnant-approved-variant

        that ik scal  an  thînum heti libbian , forđ    an  thînun fîundscepi
        that I  shall in  your   hate live    , further in  your   enmity
                      ADP DET    NOUN           ADV     ADP DET    NOUN
                                                 \-------orphan----> |
                                   <-----------------appos-----------/

### Relations Overview

* No relation subtypes are used in Old Saxon, so far.
* Test data was created by 
(a) manual annotation (2.000 tokens) over excerpts from DDD Heliand and DDD Genesis, 
(b) automatically converting HeliPaD (46,000 tokens), and 
(c) automatically converting the tier-based corpora with partial syntax annotation (Heliand B4, 3.500 tokens; DDD Heliand, 55.000 tokens).
The following relations have not been used: `clf`, `expl`, `fixed`, `goeswith`, and `list`. Of these, only `clf` and `expl` are of linguistic significance. The label `iobj` was used for dative objects (indirect objects) in the conversion, but has been replaced by `obl` in manual annotation.

## Treebanks

There is one Old Saxon UD treebank under development, based on a consolidation between [HeliPaD](https://zenodo.org/records/4395040) and [DDD](https://www.laudatio-repository.org/browse/corpus/MiXVDnMB7CArCQ9CABmW/corpora).

<!--
  * [German-GSD](../../treebanks/de_gsd/index.html)
  * [German-HDT](../../treebanks/de_hdt/index.html)
  * [German-PUD](../../treebanks/de_pud/index.html)
  * [German-LIT](../../treebanks/de_lit/index.html)
-->
