---
layout: base
title:  'Coptic UD'
udver: '2'
---

# UD for Coptic <span class="flagspan"><img class="flag" src="../../flags/svg/COP.svg" style="height:100px"/></span>


## Introduction

These guidelines describe the application of the Stanford Universal Dependency scheme (de Marneffe et al. 2014) to Sahidic Coptic sentences. Where cases are left unspecified, the principles governing the Universal Dependency guidelines for languages other than Coptic may be consulted (see http://universaldependencies.org/).

In general, the attempt has been made to remain ‘lexico-centric’ in preferring lexical items as the heads of sub-trees, i.e. Coptic prepositions are analyzed as ‘case markers’, and the lexical infinitive is seen as the verbal root, with conjugation bases forming auxiliaries.

Some functions from the Universal Dependencies are not used, most notably labels for passives. Although Coptic has some form of passive constructions, they are not easily distinguishable and often ambiguous (actional passive identical with third person active sentence in the absence of a singular agent phrase; stative passive depending on transitivity of the verb for interpretation; see the nsubj label below). In these, and other cases, the realistic demands that accurate automatic parsing must satisfy have played a role in the decision in favor of a simpler analysis.

The dependency guidelines assume part of speech tagging based on the Coptic Scriptorium Guidelines (Zeldes & Schroeder 2016), but a mapping to UPOS is also provided. Please consult the tagging guidelines for background on tagging, as well as tokenization decisions (e.g. portmanteau tokens and tags, such as fused ⲉⲣⲉ for 2nd person feminine singular, etc.). In general, these guidelines have been formed to complement the POS tags' expressivity, e.g. favoring distinctions that cannot be easily obtained from the POS tags (for example the label `amod` for the archaic attributive adjectives, which have no distinct POS tag).

## Individual topics
  * [Tokenization](tokenization.html)
  * [Morphology](morphology.html)
  * [Auxiliaries](auxiliaries.html)
  * [Dependency relations in depth](dep/index.html)
  * [Specific Constructions](specific-syntax.html)


## Overview list of dependency labels

| Label        | Example        |
| ------------- |:-------------|
| acl – adjunct clause      | ⲡⲣⲱⲙⲉ ⲉⲧⲥⲱⲧⲙ |
| advcl – adverbial clause  | ⲉϥϫⲱ, ϫⲉⲕⲁⲁⲥ ϥⲟⲩⲱϣ  |
| advmod – adverbial modifier | ⲟⲛ, ⲕⲁⲗⲱⲥ, ⲁⲛ|
| amod – adjective modifier		| ϣⲏⲣⲉ ϣⲏⲙ |
| appos – appositions 	| 		ⲡⲉⲕⲉⲓⲱⲧ ⲙⲁⲙⲙⲱⲛⲁⲥ|
| aux – auxiliary 		| 	ⲁ, ⲙⲡⲁⲧ, ϣⲁⲣⲉ|
| case – case marking/preposition	| ⲥⲱⲧⲡ ⲙⲡⲣⲱⲙⲉ, ⲙⲙⲟϥ, ϩⲙⲡⲏⲓ|
| cc – coordination 		| 	ⲁⲩⲱ, ⲙⲛ, ϩⲓ, ⲏ|
| ccomp – complement clause	| 	ⲡⲉϫⲁ ϥ ϫⲉ ⲁ ⲓ ⲥⲱⲧⲙ|
| compound – nominal or verbal| 	ϣⲃⲣ ⲣϩⲱⲃ|
| conj – conjunct in coordination| 	ϣⲏⲣⲉ ⲙⲛϣⲉⲉⲣⲉ, ⲁϥⲛⲁⲩ ⲁⲩⲱ ⲁϥⲥⲱⲧⲙ|
| cop – the copula	| 		ⲡⲉ, ⲧⲉ, ⲛⲉ|
| csubj – clausal subject (fin./inf.)	| ⲡ ⲉⲧ ϣϣⲉ ⲉ ⲁⲛⲉⲭⲉ ⲙⲙⲟ ⲕ|
| det – article or other determiner	| ⲡⲣⲱⲙⲉ, ⲕⲉⲥⲟⲡ, ⲥⲟⲛ ⲛⲓⲙ|
| discourse – interjections etc.	| 	ⲉϩⲉ, ⲟⲩⲟⲉⲓ!|
| dislocated – extraposed argument	| ϥ ... ⲛϭⲓⲡϩⲗⲗⲟ, ⲡⲣⲱⲙⲉ ⲁϥⲥⲱⲧⲙ|
| obj – direct object		| 	ⲥⲱⲧⲡ ⲙⲡⲣⲱⲙⲉ, ϯⲛⲁϩⲟⲧⲃⲉⲕ|
| obl - oblique verb modifier |  ⲟⲩⲏϩ ϩⲙⲡⲏⲓ|
| iobj – indirect object (possessor)| 	ⲟⲩⲛⲧⲁⲩ ⲁⲡⲟⲧ|
| mark – clause marker or converter	| ⲡⲉϫⲁ ϥ ϫⲉ ⲉⲧⲃⲉ ⲟⲩ, ⲉ ⲓ ⲥⲱⲧⲙ ⲉⲣⲟ ⲕ|
| fixed – multiword expression	| 	ⲉⲃⲟⲗ ϩⲛ|
| flat – multi-word name	| 	ⲁⲡⲁ ⲡⲁⲡⲛⲟⲩⲧⲉ|
| nmod – nominal modifier	| 	ⲟⲩ ⲣⲱⲙⲉ ⲛ ⲁⲡⲓⲥⲧⲟⲥ|
| nummod – number modifier	| 	ϩⲙⲉ ⲛ ϩⲟⲟⲩ|
| nsubj – nominal subject	| 	ⲡⲣⲱⲙⲉ ⲥⲱⲧⲙ, ⲁⲓⲣⲛⲟⲃⲉ|
| parataxis – loose clausal joint	| 	ⲛⲁ ⲉⲡⲓⲥⲧⲟⲗⲏ ⲛⲉ ⲏ ϯ ⲥⲟⲟⲩⲛ ⲁⲛ ϫⲉ ⲕ ⲛⲁ ⲡⲁϩ ⲟⲩ|
| punct – punctuation 		| 	· . ,|
| orphan – dependent of elliptical word	| ⲙⲡⲓⲥⲱⲧⲙ, ⲁⲗⲗⲁ ⲛⲧⲟϥ|
| root – root/predicate of utterance	| ⲥⲱⲧⲙ, ⲛⲁⲛⲟⲩ ϥ, ⲡ ⲣⲣⲟ ⲡⲉ|
| vocative – appellation		| 	 ⲡ ⲡⲟⲛⲏⲣⲟⲥ!|
| xcomp – subjectless clause	| 	ⲙⲡ ϥ ⲟⲩⲱϣ ⲉ ⲱⲛϩ|

dep – undefined dependency – used when no other definition applies
