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
* The use of [PART]() is limited to possessive markers in English names: [en] ‘s. Examples: *Wendy 's*, *McDonald 's*.
* The tag [AUX]() is used to mark the following cases:
  * the copular verb *essere* "be", which in Italian is the only verb that can be a copula;
  * tense auxiliaries, used to form compound tenses represented by _avere_ "to have" and _essere_ "to be";
  * passive auxiliaries, used to form passive verb forms represented by _essere_ "to be" and _venire_ lit. "to come";
  * auxiliaries used for the progressive form, represented by _stare_ followed by a gerund, e.g. _sto arrivando_ "I am coming";
  * modal verbs, e.g. _potere_ "can", _dovere_ "must", _volere_ "want". 
  
  The language-specific part-of-speech tag is VM for modal verbs, VA for the auxiliary verbs and V for copulas.

* The tag [DET]() is used for determiners that modify nouns or noun phrases and express the reference of the noun phrase in context. In Italian this tag is used for: articles, predeterminers (e.g. _<b>Tutti</b> gli amici_ "<b>All</b> the friends") and different types of adjectives playing the determiner function (i.e. possessive _mio padre_ "my father", demonstrative _questo libro_ "this book", interrogative , indefinite, exclamative, relative _che libro_ "which book"). Like adjectives, Italian determiners typically agree with the noun they modify for gender and number, e.g. _questo libro_ “this book” (masculin singular), _i libri_ “the books” (masculin plural), _la carta_ “the paper” (feminine singular). 

  In Italian, usually a nominal allows for one DET modifier only, with the following exceptions:
  * predeterminers;
  * possessive adjectives, as in _la mia macchina_ lit. “the my car”, _la figlia mia_ lit. “the daughter my”.

* The tag [PRON]() is used for words that substitute nouns or noun phrases, whose meaning is recoverable from the linguistic or extralinguistic context. Specializations of pronouns, corresponding to different language specific PoS, can be recovered by combining  PoS information with the values of the [PronType]() feature (see below). 
* Verbal participles (both present and past) when used attributively are generally tagged as [ADJ](pos/ADJ.md).


<!--For more information, see the list of [Italian POS tags](pos-index.md).-->


### Features

* Nouns have inherent [Gender]() (Masc or Fem) and inflect for [Number]() (Sing or Plur).
* Verbs inflect for [Mood]() (indicative, imperative, conditional, subjunctive); for [Tense]() (past, present, future or imperfect). There are three types of nonfinite forms: infinitives, participles (present and past), and gerund [VerbForm]().
* Adjectives agree with nouns (in both attributive and predicate position) with respect to the features [Gender]() and [Number](). In addition, many adjectives inflect for [Degree]() (comparative and superlative).
* Adverbs inflect only for [Degree]().
* Pronouns, determiners, pronominal numerals (quantifiers) and pronominal adverbs may be further specified by the [PronType]() feature. The boolean feature [Reflex]() applies to reflexive pronouns. The value [Clitic]() is used for marking clitic pronouns; 
* Determiners agree with nouns in the same way as adjectives. They can be definite or indefinite [Definite]().

<!--SM: the part on features needs to be revised and expanded-->
<!--For more information, see the list of [Italian features](feat-index.md).-->

## Syntax

In Italian, UD relations that can designate core arguments are nsubj, obj and iobj for nominal arguments, and ccomp, xcomp and csubj for clausal arguments. In particular:
* in Italian, core arguments always appear as bare nominals with no adposition; 
* relative order of core arguments: although the linear order of elements in a sentence is not rigidly defined, Italian *nsubj* and *obj* relations show preferences about their position with respect to the governing verb. Italian is a SVO language, which means that *nsubj* typically occurs in pre-verbal position, while *obj*'s canonical position is usually post-verbal; 
* _nsubj_ agrees in number and person with the governing verb. Consider as an example the sentence _Al balcone si affacciano donne anziane_ "old women overlook the balcony" where the nominal subject is represented as *nsubj(affacciano, donne)*. 
* the *nsubj* role is only applied to semantic arguments of a predicate. When there is an empty argument in a grammatical subject position (sometimes called a pleonastic or expletive), it is labeled as an *expl* subtype, i.e.: 
  * *expl:impers*, marking the impersonal use of clitic pronouns (used as an undefined subject), e.g. _Si può procedere_ "we can proceed"  expl:impers(procedere, si); 
  * *expl:pass*, marking passive constructions, e.g. _domani si apre la mostra_ "tomorrow the exhibition opens" expl:pass(aprire,si); 
* Italian is a pro-drop language, thus subjects can be omitted: the features of the subject can be inferred from the inflectional morphological features associated with the verb;  
* _iobj_ refers to the indirect object of a verb only when realized as a dative pronominal clitic complement. In Italian *iobj* only appears in the form of a clitic pronoun, as in *dovranno cercarsi un lavoro* "(they) will have to look for a job" with iobj(cercare,si). When the indirect object is realized as a prepositional phrase, it is labeled as *obl* (e.g.  *Dare a qualcuno qualcosa*, "give something to someone", obl(dare,qualcuno)).

Dependency analysis of clitic pronouns
* Clitics are a subtype of the class of personal pronouns, differing from tonic personal pronouns in many respects. While tonic personal and clitic pronouns are rather uniform in their functional and referential characteristics, they are clearly differentiated on the morphological and syntactic levels. In Italian, the dependency relations used to annotate clitics are *obj*, *iobj* (see above), *expl*, *expl:impers* (see above) and *expl:pass*. In particular:
  * Whenever possible, clitic pronouns are assigned a label that reflects their grammatical function. For this reason, if the pronoun appears in a reflexive construction of a transitive or intransitive active verb, then it’s treated as *dobj* or *iobj* (see above). The *dobj* relation is used to mark real reflexive constructions where the clitic pronoun is a direct object of the verb, e.g. *la bambina si lava* "the girl washes herself" dobj(lavare,si);
  * clitics can also be used to mark passive and impersonal constructions: see the relation subtypes *expl:pass* and *expl:impers*, exemplified above;
  * *expl* is used for expletive or pleonastic nominals (nominal core arguments of a predicate but which do not themselves satisfy any of the semantic roles of the predicate), as in pronominal verbs where clitics do not have a semantic role, such as *rompersi* "break" or *vergognarsi* "feel ashamed".
<!--SM: what about presentative constructions? they should be added here? -->

Copula
* The only copular verb for Italian is the verb *essere* "to be". It is used in equational, attributional, locative, possessive and benefactory nonverbal clauses, as detailed below.

  * Equation  
*Loro sono amici* "they are friends"  
cop(amici,sono)  
nsubj(amici,loro)
  * Attribution   
*I cinque sarebbero tutti immigrati clandestini*  "The five would all be illegal immigrants"  
cop(immigrati,sarebbero)  
nsubj(immigrati,cinque)
  * Location  
*Anna è a Roma* "Anna is in Rome"  
cop(Roma,è)  
nsubj(Roma,Anna)  
case(Roma,in)
  * Possession  
  *La scultura è del pachistano Hamad Butt*  "The sculpture is by the Pakistani Hamad Butt"  
cop(pachistano,è)  
nsubj(pachistano,scultura)  
case(pachistano,di)
  * Benefactory  
  *Il libro è per Anna* "The book is for Anna"  
cop(Anna,è)  
nsubj(Anna,libro)  
case(Anna,per)
* There are cases where the verb *essere* is not marked as copula, thus becoming the main verb of the clause. This analysis is generally adopted in the following cases:
  * presentational or existential constructions
	E.g. *Vi sono migliaia di casi di questo genere* "there are thousands of cases of this type"  
	expl(sono,Vi)  
	nsubj(sono,migliaia)  
	root(ROOT,sono)
  * when the argument of the verb essere is a subordinate clause
	E.g. *La verità è che la spesa sanitaria sta esplodendo* "the truth is that that health spending is exploding"  
	nsubj(è,verità)  
	root(ROOT,è)  
	ccomp(è,esplodendo)


* The following subtypes are used in Italian:
  * [acl:relcl]() for relative clauses
  * [aux:pass]() for passive auxiliaries
  * [csubj:pass]() for clausal subjects of passive verbs
  * [det:poss]() possessive determiner
  * [det:predet]() appears in front of another determiner
  * [discourse:emo]() emoticons/emojis and other pictographic elements
  * [expl:impers]() for impersonal clitics
  * [expl:pass]() for reflexive clitics in reflexive passives
  * [flat:foreign]() for non-first words in quoted foreign phrases
  * [flat:name]() for proper names
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [obl:agent]() for agents of passive verbs
  * [parataxis:appos]() appositive sentences
  * [parataxis:discourse]() semantically-void sentences used as discourse markers
  * [parataxis:hashtag]() hashtags that are not syntactically integrated into the sentence
  * [parataxis:insert]() parenthetical clauses that cannot be considered independent from the governing predicate
  * [parataxis:nsubj]() paratactic sentences with an implicit nsubj role with respect to the governing predicate
  * [parataxis:obj]() the paratactic sentence is an object (often used with direct speech)
  * [vocative:mention]() Twitter @-mentions, when they are not syntactically integrated into the sentence

<!--SM: the part on syntax needs to be revised and expanded-->
<!--For more information, see the list of [Italian relations](dep-index.md).-->

<!-----
**Instruction**: Give criteria for identifying core arguments (subjects and objects), and describe the range of copula constructions in nonverbal clauses. List all subtype relations used. Include links to language-specific relations definitions if any.

----->

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
