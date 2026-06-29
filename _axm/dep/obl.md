---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

The `obl` relation is used for a nominal (noun, pronoun, noun phrase) functioning as a non-core (oblique) argument or adjunct. This means that it functionally corresponds to an adverbial attaching to a verb, adjective or other adverb. In Middle Armenian, the `obl` relation is specified either by bare case forms or by case forms in conjunction with adposition(s). 

~~~ conllu
# visual-style 18 14 obl color:blue
# visual-style 22 24 obl color:blue
1	Եւ	եւ	CCONJ	_	_	15	cc	_	_
2	թէ	թէ	SCONJ	_	_	5	mark	_	_
3	քաղաք	քաղաք	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Sing	5	obj	_	_
4	լինի	լինիլ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	սղարել	սղարել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	15	advcl	_	_
6	եւ	եւ	CCONJ	_	_	10	cc	_	_
7	ի	ի	ADP	_	AdpType=Prep	9	case	_	_
8-9	յառ	_	_	_	_	_	_	_	_
8	յ	ի	ADP	_	AdpType=Prep	9	case	_	_
9	առ	առ	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Coll	10	compound:lvc	_	_
10	ածել	ածել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	5	conj	_	SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	_
12	նա	նա	SCONJ	_	_	15	mark	_	_
13	երեք	երեք	NUM	_	NumForm=Word|NumType=Card	14	nummod	_	_
14	հետ	հետ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	18	obl	_	_
15	պատեհ	պատեհ	ADJ	_	Degree=Pos	0	root	_	_
16	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	15	cop	_	_
17	որ	որ	SCONJ	_	_	18	mark	_	_
18	ձենել	ձենել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	15	csubj	_	_
19	տայ	տալ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Cau	18	aux:caus	_	SpaceAfter=No
20	՝	՝	PUNCT	_	_	22	punct	_	_
21	թէ	թէ	SCONJ	_	_	22	mark	_	_
22	եկէք	գալ	VERB	_	Aspect=Prosp|Mood=Imp|Number=Plur|Person=2|Subcat=Intr|VerbForm=Fin|Voice=Mid	18	ccomp	_	_
23	ի	ի	ADP	_	AdpType=Prep	24	case	_	_
24	հնազանդութիւն	հնազանդութիւն	NOUN	_	Animacy=Nhum|Case=Acc|Definite=Ind|Number=Coll	22	obl	_	SpaceAfter=No
25	.	.	PUNCT	_	_	15	punct	_	_
~~~


~~~ conllu
# visual-style 6 9 obl color:blue
1	Եւ	եւ	CCONJ	_	_	11	cc	_	_
2	թէ	թէ	SCONJ	_	_	6	mark	_	_
3	ոք	ոք	PRON	_	Case=Nom|Number=Sing|PronType=Ind	6	nsubj	_	_
4-5	զքրիստոնէ	_	_	_	_	_	_	_	_
4	զ	զ	ADP	_	AdpType=Prep	5	case	_	_
5	քրիստոնէ	քրիստոնէ	NOUN	_	Animacy=Hum|Case=Acc|Definite=Ind|Number=Sing	6	obj	_	_
6	տուրտվել	տուրտվել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	11	advcl	_	_
7	լինի	լինիլ	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	_	_
8	ի	ի	ADP	_	AdpType=Prep	9	case	_	_
9	թուրք	թուրք	NOUN	_	Animacy=Hum|Case=Acc|Definite=Ind|Number=Sing	6	obl	_	SpaceAfter=No
10	՝	՝	PUNCT	_	_	11	punct	_	_
11	մեռնի	մեռնիլ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Style=Arch|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_
~~~

We use [obl:agent]() for the agent of a passive verbs.
<!-- Interlanguage links updated Po 29. června 2026, 18:00:22 CEST -->
