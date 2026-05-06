---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause modifier'
udver: '2'
---

A relative clause modifier of an noun is a relative clause modifying the noun. The relation points from the noun that is modified to the head of the relative clause.

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
7	որ	որ	PRON	_	Case=Acc|Definite=Ind|Number=Sing|PronType=Rel	8	obj	_	_
8	արկ	արկանել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
9	վասն	վասն	ADP	_	_	10	case	_	_
10	սագուցն	սագ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	8	obl	_	SpaceAfter=No
11	։	։	PUNCT	_	_	1	punct	_	SpaceAfter=No
~~~

~~~ conllu
# visual-style 5 12 acl:relcl color:blue
1	հայնց	հայնց	DET	_	PronType=Dem	2	det	_	_
2	մարդիք	մարդ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Plur	3	nsubj	_	_
3	լինին	լինիլ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0 root	_	_
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
<!-- Interlanguage links updated St 12. listopadu 2025, 09:20:59 CET -->
