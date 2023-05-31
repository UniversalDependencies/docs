---
layout: base
title:  'Russian UD'
udver: '2'
---

# UD for Russian <span class="flagspan"><img class="flag" src="../../flags/svg/RU.svg" /></span>

## Tokenization and Word Segmentation

* In general, words are delimited by whitespace characters.
* According to typographical rules, many punctuation marks and special symbols (_$_, _%_) are attached to a neighboring word. We tokenize them as separate tokens (words) in most cases.
Description of exceptions follows:

  * conventional multi-character punctuation marks: -- , ... , ?! and emojis and smileys: :) , ^_^;
  * abbreviations such as _т.д._ “etc.” (two tokens instead of four).
If the period overlaps with the end of sentence period then it is written only once as a separate token (denoting end-of-sentence);
  * hyphenated compounds such as _премьер-министр_ “prime minister” (one token instead of three) (if the first part of the compound is not inflected);
  * prepositions such as _из-за_  “because of” (one token instead of two);
  * alphanumeric compounds with hyphen such as _5-летняя девочка_ “5-years-old girl” (two tokens instead of four);
  * numerical expressions including decimal numbers, such as 245000, 3,14, are treated as single tokens;
  * time expressions such as 20:55 are treated as a single token;
  * dates such as 20.04.2012 are treated as a single token;
  * email addresses, URLs, and tweet-style names are treated as a single token: {no@mail.ru}, {https://github.com}, {@anna_li};
  * discoursive particles such as _-то_ and _-с_ are tokenised as separate tokens, e.g. _Вася-то_ is tokenized as 3 tokens. Exceptions: indefinite pronouns and adverbs, see below.

* **Pronouns and adverbs**
  * Indefinite pronouns and adverbs like _кто-нибудь_, _кто-либо_, _кто-то_, _кое-кто_ “someone, somebody”, etc. are treated as a single token;
  * In prepositional phrases, the pronouns with _кое-_ are treated as separate tokens: e.g. _кое к кому_ “to someone” is tokenized as 3 tokens;
  * Negative pronouns, adverbs and adverbial predicatives are treated as a single token, e.g. _никто_ “no one”, _никакой_ “no, neither”, _нигде_ “nowhere”, _негде_ “there is no place”. 
    However, in prepositional phrases, negative pronouns and predicatives are splitted into 3 tokens: e.g. _ни к кому_ “to no one”, _не от кого_ “from no one”.

* **Verb forms, analytical grammatical forms, negation**
  * reflexive verbs are treated as a single token (orthographic rule): _моется_ “wash oneself”;
  * _не_ and _ни_ used as negation markers are tokenized according to the orthographic rules: e.g. _не реагируя_ “not reacting”, _ни в какую_ “in no way”, but _непоправимый_ “irrecoverable”, _назавершенный_ “unfinished”;
  * _пол-_ and _полу-_ “half” are treated as single tokens: _поллитра_ “half a liter”, _пол-яблока_ “half an apple”.

Russian UD treebanks do not contain multiword tokens.

## Morphology

### Tags

All corpora use the full range of UPOS tags. The XPOS column uses a version of the Penn Treebank tagset in GSD and Taiga treebanks, see [https://github.com/olesar/ruUD/blob/master/conversion/RussianUD_XPOSlist.md](https://github.com/olesar/ruUD/blob/master/conversion/RussianUD_XPOSlist.md).

### Features

Morphological features are included in all corpora. In GSD and Taiga, they are tagged manually, in Syntagrus, they are converted from the features manually tagged in the source treebank. In PUD, they are added automatically and then manually checked.  

The following feature subtypes are used in Russian:  

* [Variant]() distinguishes short and long forms of adjectives.

The following universal features are not used in Russian: [Clusivity](), [Definite](), [Evident](), [NounClass](), [Polite]().

## Syntax

### Core Arguments, Oblique Arguments and Adjuncts

* Nominal subject ([nsubj]()) is prototypically a noun phrase in the nominative case, without a preposition.
  * If the noun phrase is quantified, it may be in the genitive, which is required by the quantifier. 
    If this is the case, then the quantifier is attached using a special relation, either [nummod]() or [nummod:gov]().
  * In distributive constructions, the nominal subject is used in the dative case, to which the preposition _po_ is attached.   
  * Under negation, the noun phrase is used in the genitive case.  
* Clausal subjects ([csubj]()) are typically infinitival verbs or the heads of subordinate clauses. This is mostly the case of predicative constructions or nominative copular constructions.  
  * Note that verbal nouns as subjects are labeled `nsubj`.  
* In passive clauses, the subject is labelled with [nsubj:pass]() or [csubj:pass](). Auxiliary verbs in periphrastic passive are labelled [aux:pass]().
  * If a semantic agent is present, it has the form of the instrumental case, and its relation is labelled [obl:agent]().  
* Nominal direct objects are labeled [obj](). They usually occur in the accusative case (but not all bare accusative nominals are objects), but in some cases, instrumental and genitive nominals can be direct objects as well.  
* All other required dependents of verbs in the dative and instrumental cases are indirect objects (iobj).
* Required clausal dependents of verbs are marked as [ccomp](), unless they are subjects ([csubj]()).
* Open (“controlled”) clausal dependents are labeled [xcomp](); they are mostly infinitival complements of verbs such as _начать_ “begin”.  
  * Instrumental/nominative nominal dependents of verbs such as _быть_ “be”, _стать_ “become”, _работать_ “work (as)”, _считать_ “consider (as)” are also labeled [xcomp]().  
* Prepositional phrases are labeled [obl](). These include:  
  * core arguments of verbs, adjectives and other predicates;  
  * adjuncts (or, following the Russian grammar, adverbial modifiers realized as prepositional noun phrases).  
* Temporal and other circumstantial modifiers as well as benefactives realized as bare noun phrases: _подумал минуту_ “he thought for a minute”, _сварила ему обед_ “she cooked him a lunch” are also labeled [obl]().
* In comparative constructions, the genitive noun phrase that refers to the standard of comparison is labeled [obl]().  
* The [vocative]() relation is used to attach a participant addressed in the dialogue. 

### Copula Clauses

* The copula verb _быть_ “be” is used in equational, attributional, locative, and benefactive nonverbal clauses.
  Purely existential clauses use _быть_ as well but it is treated as the head of the clause and tagged [VERB]().
  In possessive clauses, _быть_ is treated differently in different treebanks.  
  Note that the copula verb is rarely used in the present tense in Russian.  

### Expletives  

* The particle _это_ “this” used in equational clauses with meaningful subject is labeled [expl](): _Государство - это я_ “The state is Me.” Pleonastic _это_ in clauses with overt nominative subject is also labeled [expl](): _Это Лена пришла_ “This (is) Lena came.”  
  * If there is no other subject, _это_ “this” is treated as a subject and tagged [PRON]():
    _Это Лена_ “This (is) Lena”, _Это еще к чему?_ “What purpose is it for?”
    
### Adjectival Clauses 

* Relational clauses are labeled [acl:relcl]().  
* Participle phrases are labeled [acl]().  
  * Participles that do not have dependents are labeled [amod]().  
* Floating quantifiers _сам_ “oneself”, _один_ “alone”, _весь_ “all”, _оба_ "both" are labeled [acl]().  
* Secondary non-core arguments in depictive constructions are labeled [acl](): _Он пришел домой усталый_ “He came home tired.”     

### Nominal phrases  

* The following relations are used to attach elements to the head of the nominal phrase:
  * [nmod]() for regular nominal modifiers marked with case and, optionally, preposition  
  * [appos]() for appositives that go after the head and agree ot not in case with the head   
  * [compound]() for flat compound relations 
  * [amod]() for adjectival modifiers 
  * [det]() for determiners  

### Function words  

* The following relations are used to attach the function words:
  * [aux]() for the auxiliary 
  * [cop]() for the copula marker 
  * [case]() for prepositions and postpositions (case markers)  
  * [cc]() for coordinate conjunctions  
  * [mark]() for subordinate conjunctions (markers)  
  * [punct]() for punctuation marks  
  
### Other relations    
  * [root]() for the root of the sentence 
  * [orphan]() for orphan relations in ellipsis 
  * [list]() for chains of items in the list  
  * [fixed]() for tokens in the multiword expression   
  * [flat]() for other flat relations   
  * [goeswith]() for elements written separately in not well edited texts 
  * [dep]() for unspecified dependency 

### Relations Overview

* The following relation subtypes are used in Russian:
  * [nsubj:pass]() for nominal subjects of passive verbs
  * [csubj:pass]() for clausal subjects of passive verbs
  * [aux:pass]() for passive auxiliaries
  * [obl:agent]() for agents of passive verbs
  * [acl:relcl]() for the traditional class of relative clauses
  * [nummod:gov]() for cardinal numbers that are attached as children of the counted noun but govern its case
  * [nummod:entity]() numeric modifier governed by a noun
  * [flat:foreign]() for non-first words in quoted foreign phrases
  * [flat:name]() for non-first words in multiword proper names

* [clf]() is not used in Russian.
  

## Treebanks

There are [four](../treebanks/ru/index.html) Russian UD treebanks:

  * [Russian-SynTagRus](../treebanks/ru_syntagrus/index.html)
  * [Russian-GSD](../treebanks/ru_gsd/index.html)
  * [Russian-Taiga](../treebanks/ru_taiga/index.html)
  * [Russian-PUD](../treebanks/ru_pud/index.html)

