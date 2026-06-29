---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependents of another noun or noun phrase. We use the following language-specific subtypes:

* `nmod`: noun modifier functionally corresponds to an attribute,
* [nmod:poss](): noun modifier functionally corresponds to possessive complement,
* [nmod:npmod](): noun phrase as nominal modifier.

In Middle Armenian `nmod` is used:

* for noun-noun modification with an attributive or associative relations between them: `nmod` nouns attached to nouns are usually in the nominative [Case]() and may precede
or follow the modified noun. 

~~~ conllu
# visual-style 2 1 nmod color:blue
1	կաղնի	կաղնի	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	2	nmod	_	_
2	ծառ	ծառ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	_
~~~

The `nmod` relation is further specified by the [case]() relation (associative modfication).

~~~ conllu
# visual-style 2 1 nmod color:blue
1	արիւն	արիւն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Coll	0	root	_	_
2	ջուրի	ջուր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	1	nmod	_	_
3	նման	նման	ADP	_	AdpType=Post	2	case	_	_
~~~

Note, that so-called “bare noun compounds” (e.g. _թղթակից անդամ_ “corresponding member”) are marked using the [compound]() relation.
<!-- Interlanguage links updated Po 29. června 2026, 17:44:18 CEST -->
