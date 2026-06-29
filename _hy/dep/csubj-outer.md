---
layout: relation
title: 'csubj:outer'
shortdef: 'outer clause clausal subject'
udver: '2'
---

This relation specifies a clausal subject of a copular clause whose predicate is itself a clause, 
to signal that it is not the subject of the nested clause.
See discussion of [Predicate Clauses](../overview/complex-syntax.html#predicate-clauses).

~~~ conllu
# visual-style 11 6 csubj:outer color:blue
1	Այն	այն	PRON	_	Deixis=Remt|PronType=Dem	11	nsubj	_	Translit=Ayn|LTranslit=ayn|SpaceAfter=No
2	,	,	PUNCT	_	_	6	punct	_	Translit=,|LTranslit=,
3	որ	որ	SCONJ	_	_	6	mark	_	Translit=or|LTranslit=or
4	նախկին	նախկին	ADJ	_	_	5	amod	_	Translit=naxkin|LTranslit=naxkin
5	սեփականատերը	սեփականատեր	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	Translit=sep’akanaterë|LTranslit=sep’akanater
6	թաքնվում	թաքնվել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	11	csubj:outer	_	Translit=t’ak’nvowm|LTranslit=t’ak’nvel
7	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	_	Translit=ē|LTranslit=em|SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
9	հարցեր	հարց	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	11	obj	_	Translit=harc’er|LTranslit=harc’
10	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	aux	_	Translit=ē|LTranslit=em
11	առաջացնում	առաջացնել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=aṙaǰac’nowm|LTranslit=aṙaǰac’nel|SpaceAfter=No
12	:	:	PUNCT	_	Foreign=Yes	11	punct	_	Translit=.|LTranslit=.

~~~


The nominal counterpart of this relation is [nsubj:outer]().

The `:outer` subtype is *not* intended for most clausal subjects of copular clauses—only those where the predicate is itself a clause. 
Plain [csubj]() (or another subtype) will be appropriate if the copular clause predicate is a nominal, adjective, etc.:

~~~ conllu
# visual-style 1 3 csubj color:blue
1	Կարելի	կարելի	ADJ	_	_	0	root	_	Translit=Kareli|LTranslit=kareli
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	Translit=ē|LTranslit=em
3	բերել	բերել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	1	csubj	_	Translit=berel|LTranslit=berel
4	նաև	նաև	CCONJ	_	ConjType=Comp	6	cc	_	Translit=naew|LTranslit=naew
5	ետադարձ	ետադարձ	ADJ	_	_	6	amod	_	Translit=etadarj|LTranslit=etadarj
6	կապի	կապ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	7	nmod:poss	_	Translit=kapi|LTranslit=kap
7	օրինակ	օրինակ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	obj	_	Translit=òrinak|LTranslit=òrinak|SpaceAfter=No
8	։	։	PUNCT	_	_	1	punct	_	Translit=.|LTranslit=.

~~~
<!-- Interlanguage links updated Po 29. června 2026, 18:12:11 CEST -->
