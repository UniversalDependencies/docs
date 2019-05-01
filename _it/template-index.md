---
layout: base
title:  'Italian UD'
udver: '2'
---

# UD for Italian <span class="flagspan"><img class="flag" src="../../flags/svg/IT.svg" /></span>

## Tokenization and Word Segmentation

* Words are delimited by whitespaces, with some exceptions reported below:
  * in Italian orthography, punctuation marks are usually attached to a neighboring word (typically the preceding one). They are tokenized as separate tokens with the only exception of abbreviations and numerical expressions (see below);
  * numerical expressions (including dates) are treated as single words and may contain punctuation: *1.1.1970*, or *1/1/1970*, *11:00*, *2,5%*, *2-3*;
  * abbreviations are treated as single words and may contain punctuation, both word-internal (e.g. *U.S.A.*) and word-final (*etc.*);
  * multi-word tokens are used for the following cases: 1) prepositions combined with the definite article, e.g. *nella* “in the” (feminine), *del* “of the” (masculine); 2) clitic pronouns (both accusative and dative) appear as enclitics attached to the verb when used in imperative or non-finite moods, e.g. *dammelo* “give-to me-it”, *fallo* “do-it”, *mangiandolo* “eating-it”, *leggerlo* “to read-it”.


 

## Morphology

### Tags

* Italian uses all 17 universal tags.
* The use of [PART](pos/PART.md) is limited to possessive markers in English names: [en] ‘s. Examples: *Wendy 's*, *McDonald 's*.
* The tag [AUX](pos/AUX_.md) is used to mark the following cases:
  * the copular verb *essere* "be", which in Italian is the only verb that can be a copula;
  * tense auxiliaries, used to form compound tenses represented by _avere_ "to have" and _essere_ "to be";
  * passive auxiliaries, used to form passive verb forms represented by _essere_ "to be" and _venire_ lit. "to come";
  * auxiliaries used for the progressive form, represented by _stare_ followed by a gerund, e.g. _sto arrivando_ "I am coming";
  * modal verbs, e.g. _potere_ "can", _dovere_ "must", _volere_ "want". 
  
  The language-specific part-of-speech tag is VM for modal verbs, VA for the auxiliary verbs and V for copulas.

* The tag [DET](pos/DET.md) is used for determiners that modify nouns or noun phrases and express the reference of the noun phrase in context. In Italian this tag is used for: articles, predeterminers (e.g. _<b>Tutti</b> gli amici_ "<b>All</b> the friends") and different types of adjectives playing the determiner function (i.e. possessive _mio padre_ "my father", demonstrative _questo libro_ "this book", interrogative , indefinite, exclamative, relative _che libro_ "which book"). Like adjectives, Italian determiners typically agree with the noun they modify for gender and number, e.g. _questo libro_ “this book” (masculin singular), _i libri_ “the books” (masculin plural), _la carta_ “the paper” (feminine singular). 

  In Italian, usually a nominal allows for one DET modifier only, with the following exceptions:
  * predeterminers;
  * possessive adjectives, as in _la mia macchina_ lit. “the my car”, _la figlia mia_ lit. “the daughter my”.

* The tag [PRON](pos/PRON.md) is used for words that substitute nouns or noun phrases, whose meaning is recoverable from the linguistic or extralinguistic context. Specializations of pronouns, corresponding to different language specific PoS, can be recovered by combining  PoS information with the values of the [PronType](feat/PronType.md) feature (see below). 
* Verbal participles (both present and past) when used attributively are generally tagged as [ADJ](pos/ADJ.md).


<!--For more information, see the list of [Italian POS tags](pos-index.md).-->


### Features

* Nouns have inherent [Gender](feat/Gender.md) (Masc or Fem) and inflect for [Number](feat/Number.md) (Sing or Plur).
* Verbs inflect for [Mood](feat/Mood.md) (indicative, imperative, conditional, subjunctive); for [Tense](feat/Tense.md) (past, present, future or imperfect). There are three types of nonfinite forms: infinitives, participles (present and past), and gerund [VerbForm](feat/VerbForm.md).
* Adjectives agree with nouns (in both attributive and predicate position) with respect to the features [Gender](feat/Gender.md) and [Number](feat/Number.md). In addition, many adjectives inflect for [Degree](feat/Degree.md) (comparative and superlative).
* Adverbs inflect only for [Degree](feat/Degree.md).
* Pronouns, determiners, pronominal numerals (quantifiers) and pronominal adverbs may be further specified by the [PronType](feat/PronType.md) feature. The boolean feature [Reflex](feat/Reflex.md) applies to reflexive pronouns. The value [Clitic](feat/Clitic.md) is used for marking clitic pronouns; 
* Determiners agree with nouns in the same way as adjectives. They can be definite or indefinite [Definite](feat/Definite.md).

<!--For more information, see the list of [Italian features](feat-index.md).-->

## Syntax

* Criteria for identifying core arguments ...
* The copula verb *essere* (be) is used in equational, attributional, locative, possessive and benefactory nonverbal clauses.
* The following subtypes are used in Italian:
  * [acl:relcl](dep/acl-relcl.md) for relative clauses
  * [aux:pass](dep/auxpass.md) for passive auxiliaries
  * [csubj:pass](dep/csubjpass.md) for clausal subjects of passive verbs
  * [det:poss](dep/det-poss.md) possessive determiner
  * [det:predet](dep/det-predet.md) appears in front of another determiner
  * [discourse:emo](dep/discourse-emo.md) emoticons/emojis and other pictographic elements
  * [expl:impers](dep/expl-impers.md) for impersonal clitics
  * [expl:pass](dep/expl-pass.md) for reflexive clitics in reflexive passives
  * [flat:foreign](dep/flat-foreign.md) for non-first words in quoted foreign phrases
  * [flat:name](dep/flat-name.md) for proper names
  * [nsubj:pass](dep/nsubjpass.md) for nominal subjects of passive verbs
  * [obl:agent](dep/obl-agent.md) for agents of passive verbs
  * [parataxis:appos](dep/parataxis-appos.md) appositive sentences
  * [parataxis:discourse](dep/parataxis-discourse.md) semantically-void sentences used as discourse markers
  * [parataxis:hashtag](dep/parataxis-hashtag.md) hashtags that are not syntactically integrated into the sentence
  * [parataxis:insert](dep/parataxis-insert.md) parenthetical clauses that cannot be considered independent from the governing predicate
  * [parataxis:nsubj](dep/parataxis-nsubj.md) paratactic sentences with an implicit nsubj role with respect to the governing predicate
  * [parataxis:obj](dep/parataxis-obj.md) the paratactic sentence is an object (often used with direct speech)
  * [vocative:mention](dep/vocative-mention.md) Twitter @-mentions, when they are not syntactically integrated into the sentence

<!--For more information, see the list of [Italian relations](dep-index.md).-->

---
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

---

## Treebanks

There are [five](../treebanks/it-comparison.html) Italian UD treebanks:

  * [ISDT](../treebanks/it_isdt/index.html)
  * [PARTUT](../treebanks/it_partut/index.html)
  * [POSTWITA](../treebanks/it_postwita/index.html)
  * [PUD](../treebanks/it_pud/index.html)
  * [VIT](../treebanks/it_vit/index.html)

<!-----
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

--->
