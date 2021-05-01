---
layout: base
title:  'Low Saxon UD'
udver: '2'
---

# UD for Low Saxon <span class="flagspan"><img class="flag" src="../../flags/svg/DE-HANNOVER.svg" /></span>

## Introduction

A part of this documentation is copied from the current German documentation [UD for German](https://universaldependencies.org/de/index.html), which can mostly be applied to Low Saxon as well.

Since there is no official common standard spelling for Low Saxon, the examples provided here are given in the interregional spelling suggestion used e.g. by the Dutch Low Saxon Wikipedia (_Nysassiske Skryvwyse_, abbreviated "NSS", described in more detail here: https://skryvwyse.eu/ (only in Low Saxon)) and lemma forms are given in both the NSS and normalised Middle Low Saxon following the _Mittelniederdeutsches Handwörterbuch_ by Agathe Lasch et al. 

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters. Description of exceptions follows.
* According to typographical rules, many punctuation marks are attached to a neighboring word.
  We usually tokenize them as separate tokens (words)
* Low Saxon compounds are written as one word and we do not split them.
* There are classes of multi-word tokens such as contractions of prepositions and definite articles as well as contractions of verbs and a (clitic) pronoun.
  Examples: _hek = hev + ik_ "I have", _im = in + dem_ "in the"

---
**Instruction**: Describe the general rules for delimiting words (for example, based on whitespace and punctuation) and exceptions to these rules. Specify whether words with spaces and/or multiword tokens occur. Include links to further language-specific documentation if available.

---

## Morphology

### Tags

* Low Saxon uses all 17 universal POS categories, including particles ([PART]()).
* The following words are particles in Low Saxon: _nich_/_nicht¹_ “not”, and the infinitive marker _to_/_tô⁵_ “to”.
* The pronoun ([PRON]()) vs. determiner ([DET]()) distinction is based on word lists because the traditional grammar does not define determiners.
  In general, words that inflect for gender, to be able to agree with a modified noun, are tagged [DET](), even if they
  act independently in a given sentence; that includes possessives.
* Low Saxon auxiliary verbs ([AUX]()) are:
  * _weasen_/_wēsen²_ for perfect tenses of some verbs (_ik bün koamen_ “I have come”) and as copula (_hee is old_ “he is old”)
  * _hebben_ for perfect tenses of the remaining verbs (_ik hev eaten_ “I have eaten”)
  * _werden_/_wērden¹_ for the passive (_dat wardt eaten_ “it is (being) eaten”)
  * _sköälen_/_schȫlen¹_, _willen_/_willen¹_ and _werden_/_wērden¹_ for future tense (_ik skal binnenkört dår weasen_ “I will arrive soon”)
  * modal verbs _dörven_ “may”, _künnen_ “can”, _möägen_/_mȫgen_ “may, want”, _möten_/_mö̂ten²_ “must”, _sköälen_/_schȫlen¹_ “shall”, _willen_/_willen¹_ “want”
  * _doon_/_dôn¹_, _willen_/_willen¹_ and _werden_/_wērden¹_ for a periphrastic conditional (_see dea em lever besöken_ “she would prefer to visit him“)
  * The verbs _weasen_/_wēsen²_, _hebben_, _doon_/_dôn¹_ and _werden_/_wērden¹_ can also occur as normal verbs ([VERB]()), meaning “be, have, do, become”.
* There are four main (de)verbal forms, distinguished by the UPOS tag and the value of the [VerbForm]() feature:
  * Infinitive `Inf`, tagged [VERB]() or [AUX]().
  * Finite verb `Fin`, tagged [VERB]() or [AUX]().
  * Participle `Part`, tagged [VERB]() or [ADJ]().
  * Verbal noun `Vnoun`, tagged [NOUN](), looks like an infinitive or (especially in older language) like a present participle but has an article and may inflect.

---
**Instruction**: Specify any unused tags. Explain what words are tagged as PART. Describe how the AUX-VERB and DET-PRON distinctions are drawn, and specify whether there are (de)verbal forms tagged as ADJ, ADV or NOUN. Include links to language-specific tag definitions if any.

---

### Features
#### Nominal Features

* Nominal words ([NOUN](), [PROPN]() and [PRON]()) have an inherent [Gender]() feature with one of two or three values: `Masc`, `Fem` or `Neut`. Most dialects preserve three genders, while in some, `Masc` and `Fem` have merged. 
  * The following parts of speech inflect for `Gender` because they must agree with nouns: [ADJ](), [DET](),
    [VERB](), [AUX](). For verbs (including auxiliaries), only participles can inflect for gender. Finite verbs don't.
* The two main values of the [Number]() feature are `Sing` and `Plur`. The following parts of speech inflect for number:
  [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET](), [VERB](), [AUX]() (finite and participles).
* The number of values for [Case]() depends on the dialect. Few dialects have preserved four cases: `Nom`, `Gen`, `Dat`, `Acc`. Most dialects do not distinguish dative and accusative anymore and thus only know three cases:  `Nom`, `Gen`, `Acc`.  Some dialects have also merged the nominative and accusative and therefore only two cases remain: `Nom`, `Gen`.
  Case occurs with the nominal words, i.e., [NOUN](), [PROPN](), [PRON](), [ADJ](), [DET]().
  However, case forms of nouns are extremely ambiguous and most of the time the case is distinguished only by the form of the article.
* [Definite]() has 2 values: `Ind`, `Def`. It is used to distinguish the indefinite and definite articles ([DET]()).

#### Degree and Polarity

* [Degree]() applies to adjectives ([ADJ]()) and adverbs ([ADV]()) and has one of three possible values: `Pos`, `Cmp`, `Sup`.
* [Polarity]() is used to mark the negative particle _nich/_nicht¹_, i.e., only the `Neg` value is used.

#### Verbal Features

* Finite verbs always have one of two values of [Mood](): `Ind` or `Imp`. Some dialects have preserved separate forms for `Sub` (called _konjunktiv_ in Low Saxon).
* Indicative and subjunctive verbs always have one of two values of [Tense](): `Past`, `Pres`.
  * In the subjunctive mood, the tense feature is used to distinguish _konjunktiv I_ (`Pres`) and _konjunktiv II_ (`Past`).
  * Imperative forms do not have the `Tense` feature.
  * The `Tense` feature is also used to distinguish present and past participles (_singen(d)_ “singing” vs. _sungen_ “sung”).
* In the plural, verbs do not commonly distinguish person and consequently are only tagged for `Plur`. Some dialects may show occasional exceptions to this rule in particular verbs (maybe due to influence from German or Dutch?), in case of which the person should be tagged. 
* The features [Aspect]() and [Voice]() are not used in Low Saxon because
  both the perfect aspect and the passive voice are expressed periphrastically.
  

#### Pronouns, Determiners, Quantifiers

* [PronType]() is used with pronouns ([PRON]()), determiners ([DET]()) and adverbs ([ADV]()).
* [NumType]() is used with numerals ([NUM]()), adjectives ([ADJ]()) and determiners ([DET]()).
* The [Poss]() feature marks possessive personal determiners (e.g. _myn_/_mîn²_ “my”).
* The [Reflex]() feature is always used together with `PronType=Prs` and it marks reflexive pronouns _(my/mî, dy/dî, sik/sik¹, uns/uns², ju/iü²)._
  Note that their forms in the first and second person are ambiguous with irreflexive accusative forms, and the `Reflex` feature
  must be decided by context.
* [Person]() is a lexical feature of personal pronouns ([PRON]()) and has three values, `1`, `2` and `3`.
  With personal possessive determiners ([DET]()), the feature actually encodes the person of the possessor.
  Person is not marked on other types of pronouns and on nouns, although they can be almost always interpreted as the 3rd person.
  * As a cross-reference to subject, person is also marked on finite verbs ([VERB](), [AUX]()).
* The [Polite]() feature distinguishes informal second-person pronouns (_du_/_dû¹_, _jy_/_gî²_, `Polite=Infm`)
  from the formal _Jy_/_gî²_ and _See_/_sê²_ (`Polite=Form`).
  The formal pronoun _Jy_/_gî²_ is phonologically equivalent in all its case forms to the second-person plural _Jy_/_gî²_, 
  and the formal pronoun _See_/_sê²_ is phonologically equivalent in part of its case forms to the third-person plural _see_/_sê²_
  but they are distinguished in orthography by the capital letters _J_ and _S_.
  We tag the formal pronoun _See_/_sê²_ as second person (because that is its meaning) and we do not tag formal pronouns for number (because they are used both
  for singular and plural addressees) despite the fact that they combine with plural verbs.
  The parser must learn that `Person=2|Polite=Form` subject attaches to `Number=Plur` verbs,
  while `Number=Sing|Person=2|Polite=Infm` subject attaches to `Number=Sing|Person=2` verbs.

#### Other Features

* The following universal features are not used in German: [Animacy](), [Evident]().


---
**Instruction**: Describe inherent and inflectional features for major word classes (at least NOUN and VERB). Describe other noteworthy features. Include links to language-specific feature definitions if any.

---

## Syntax

*

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [N](../treebanks/nds-comparison.html) Low Saxon UD treebanks:

  * [Low Saxon-A](../treebanks/nds_a/index.html)
  * [Low Saxon-B](../treebanks/nds_b/index.html)

---
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

---
