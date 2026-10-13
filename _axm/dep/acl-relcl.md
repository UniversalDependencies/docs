---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause modifier'
udver: '2'
---

A relative clause modifier of a noun is a relative clause modifying the noun. The relation points from the noun that is modified to the head of the relative clause.

~~~ conllu
# visual-style 4 8 acl:relcl color:blue
1	Գնաց	գնալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
2	տեսանել	տեսանել	VERB	_	Polarity=Pos|Subcat=Tran|Style=Arch|VerbForm=Inf|Voice=Act	1	xcomp	_	_
3-4	զակնատս	_	_	_	_	_	_	_	_
3	զ	զ	ADP	_	AdpType=Prep	4	case	_	_
4	ակնատս	ակնատ	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Plur	2	obj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6-7	զոր	_	_	_	_	_	_	_	_
6	զ	զ	ADP	_	AdpType=Prep	7	case	_	_
7	որ	որ	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Rel	8	obj	_	_
8	արկ	արկանել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
9	վասն	վասն	ADP	_	_	10	case	_	_
10	սագուցն	սագ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	8	obl	_	SpaceAfter=No
11	։	։	PUNCT	_	_	1	punct	_	SpaceAfter=No

~~~

~~~ conllu
# visual-style 5 12 acl:relcl color:blue
1	հայնց	հայնց	DET	_	PronType=Dem	2	det	_	_
2	մարդիք	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur	3	nsubj	_	_
3	լինին	լինիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
4-5 յայլազգեացն	_	_	_	_	_	_	_	SpaceAfter=No
4	յ	ի	ADP	_	AdpType=Prep	5	case	_	_
5	այլազգեացն	այլազգի	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	3	obl	_	_
6	,	,	PUNCT	_	_	12	punct	_	_
7	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	12	nsubj	_	_
8	այն	այն	DET	_	Deixis=Remt|PronType=Dem	9	det	_	_
9	շմորոյն	շմոր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	10	nmod:poss	_	_
10	պատճառք	պատճառ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Plur	12	xcomp	_	_
11	լինին	լինիլ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	լել	լինալ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	5	acl:relcl	_	_

~~~

In Armenian, a distinction is made between the subordinating conjunction _որ_/_or_ “that” and the relative pronoun _որ_/_or_ “who, which, that”, which is inflected for case and definiteness. Relative clauses are typically distinguished from other subordinate clauses by the use of the relative pronoun.

In Middle Armenian, however, the relative pronoun _որ_/_or_ frequently occurs in an uninflected form, thus becoming formally identical to the subordinating conjunction. In such constructions, the case relation is instead expressed by a following inflected pronoun. This creates difficulties for dependency annotation, as the resulting structure may prevent a consistent syntactic analysis of a clause that is clearly relative in function. Therefore, in such cases, we annotate _որ_/_or_ as a subordinating conjunction [SCONJ]() and attach it to the head of the relative clause with the mark relation, while retaining `acl:relcl` for the relation between the relative clause and the nominal it modifies.

~~~ conllu
# visual-style 3 7 acl:relcl color:blue
1	Առ	առնել	VERB	_	Aspect=Prosp|Mood=Imp|Number=Sing|Person=2|Subcat=Tran|VerbForm=Fin|Voice=Act	0	root	_	Translit=Aṙ|LTranslit=aṙnel
2	սպիտակ	սպիտակ	ADJ	_	_	3	amod	_	Translit=spitak|LTranslit=spitak
3	կղիմիտր	կղիմիտր	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	1	obj	_	SpaceAfter=No|Translit=kġimitr|LTranslit=kġimitr
4	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
5	որ	որ	SCONJ	_	_	7	mark	_	Translit=or|LTranslit=or
6	չլինի	լինիմ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	aux	_	Translit=č’lini|LTranslit=linim
7	հասել	հասել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	3	acl:relcl	_	Translit=hasel|LTranslit=hasel
8	յ	ի	ADP	_	AdpType=Prep	9	case	_	SpaceAfter=No|Translit=y|LTranslit=i
9	ինք	ինք	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	obl	_	Translit=ink’|LTranslit=ink’
10	ջուր	ջուր	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	7	nsubj	_	SpaceAfter=No|Translit=ǰowr|LTranslit=ǰowr

~~~

~~~ conllu
# visual-style 4 7 acl:relcl color:blue
1	կալնու	կալնուլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Translit=kalnow|LTranslit=kalnowl
2	զ	զ	ADP	_	AdpType=Prep	4	case	_	SpaceAfter=No|Translit=z|LTranslit=z
3	այն	այն	DET	_	Deixis=Remt|PronType=Dem	4	det	_	Translit=ayn|LTranslit=ayn
4	ցաւն	ցաւ	NOUN	_	Case=Nom|Deixis[psor]=Remt|Number=Sing	1	obj	_	SpaceAfter=No|Translit=c’awn|LTranslit=c’aw
5	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
6	որ	որ	SCONJ	_	_	7	mark	_	Translit=or|LTranslit=or
7	ասեն	ասել	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Style=Arch|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	Translit=asen|LTranslit=asel
8	իր	ինք	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	7	iobj	_	Translit=ir|LTranslit=ink’
9	ըռիաւլան	ըռիաւլան	NOUN	_	Case=Nom|Definite=Ind|Number=Sing	7	xcomp	_	SpaceAfter=No|Translit=ëṙiawlan|LTranslit=ëṙiawlan

~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:27 CEST -->
