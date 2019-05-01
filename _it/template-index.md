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

<!--SM: the part on features needs to be revised and expanded-->
<!--For more information, see the list of [Italian features](feat-index.md).-->

## Syntax

In Italian, the UD relations that can designate core arguments are nsubj, obj and iobj for nominal arguments, and ccomp, xcomp and csubj for clausal arguments. There are specific subtypes for marking subjects in passive clauses (see below).

Italian core arguments are the following:
*	in Italian, core arguments always appear as bare nominals with no adposition; 
*	order of core arguments: although the linear order of elements in a sentence is not rigidly defined, Italian *nsubj* and *obj* relations show preferences about their position with respect to the verb. Italian is a SVO language, which means that *nsubj* typically occurs in pre-verbal position, while *obj* canonical position is usually post-verbal. 
* _<b>nsubj</b>_ agrees in number and person with the governing verb. Consider as an example the sentence _Al balcone si affacciano donne anziane_ where the nominal subject is represented as *nsubj(affacciano, donne)*. Note that the *nsubj* role is only applied to semantic arguments of a predicate. When there is an empty argument in a grammatical subject position (sometimes called a pleonastic or expletive), it is labeled as an *expl* subtype, *expl:impers* which is specific for the impersonal use of clitic pronouns (used as an undefined subject); e.g. _Si può procedere_ expl:impers(procedere, si). 
Consider also that Italian is a pro-drop language, thus subjects can be omitted: the features of the subject can be inferred from the inflectional morphological features associated with the verb. 

* Clitic vs Tonic Pronouns
Clitics are generally classified as a subtype of personal pronouns, but as a special case that differs from tonic pronouns of the same class for many aspects. In fact, while personal and clitic pronouns are rather uniform in their functional and referential characteristics, they are clearly differentiated on the morphological and syntactic levels. For this reason we provide language specific guidelines for the annotation of clitic pronouns  in Italian. 
The dependency relations used in IUDT to annotate clitics are iobj, expl, expl:impers and expl:pass.

•	iobj: for reflexive pronouns when the personal pronouns plays the role of indirect object
es: “dovranno cercarsi un lavoro"
iobj(cercar,si)

•	expl: for expletive or pleonastic nominals (nominal core arguments of a predicate but which do not themselves satisfy any of the semantic roles of the predicate). 
es: “Il proprietario non può opporsi...”, “sedersi per terra...”
expl(oppor,si)
expl(seder,si)

In Italian clitics also appears in passive and impersonal constructions. For that, subclasses expl:pass and expl:impers are used.

Copula
The only copula verb for Italian is the verb “essere” and the cop relation is used between the complement of a copular verb and the copula verb. The cop relation is used in all cases of: 

•	Equation
es: Loro sono amici
cop(amici,sono)
nsubj(amici,Loro)

•	Attribution 
es: I cinque sarebbero tutti immigrati clandestini
cop(immigrati,sarebbero)
nsubj(immigrati,cinque)

•	Location
es: Anna è a Roma
cop(Roma,è)
nsubj(Roma,Anna)

•	Possession
es: ROOT La scultura è di il pachistano Hamad Butt
cop(pachistano,è)
nsubj(pachistano,scultura)

•	Benefaction 
es: Il libro è per Anna
cop(Anna,è)
nsubj(Anna,libro)

There are cases when the verb essere is not marked as copula, thus becoming the main verb of the clause. This analysis is generally adopted when:

•	Presentational or existential constructions
	es: ROOT Vi sono migliaia di casi di questo genere
	expl(sono,Vi)
	nsubj(sono,migliaia)
	root(ROOT,sono)
  
•	the argument of the verb essere is a subordinate clause
	es: ROOT La verità è che la spesa sanitaria sta esplodendo
	nsubj(è,verità)
	root(ROOT,è)
	ccomp(è,esplodendo)


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

<!-----
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

----->

## Treebanks

There are [five](../treebanks/it-comparison.html) Italian UD treebanks:

  * [IUDT](../treebanks/it_isdt/index.html)
  * [PARTUT](../treebanks/it_partut/index.html)
  * [POSTWITA](../treebanks/it_postwita/index.html)
  * [PUD](../treebanks/it_pud/index.html)
  * [VIT](../treebanks/it_vit/index.html)

<!-----
**Instruction**: Treebank-specific pages are generated automatically from the README file in the treebank repository and
from the data in the latest release. Link to the respective `*-index.html` page in the `treebanks` folder, using the language code
and the treebank code in the file name.

--->
