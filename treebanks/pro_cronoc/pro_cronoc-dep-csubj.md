---
layout: base
title:  'Statistics of csubj in UD_Old_Occitan-CronOc'
udver: '2'
---

## Treebank Statistics: UD_Old_Occitan-CronOc: Relations: `csubj`

This relation is universal.

20 nodes (0%) are attached to their parents as `csubj`.

18 instances of `csubj` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.65.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="pro_cronoc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pro_cronoc-pos-VERB.html">VERB</a></tt> (6; 30% instances), <tt><a href="pro_cronoc-pos-VERB.html">VERB</a></tt>-<tt><a href="pro_cronoc-pos-VERB.html">VERB</a></tt> (6; 30% instances), <tt><a href="pro_cronoc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pro_cronoc-pos-VERB.html">VERB</a></tt> (5; 25% instances), <tt><a href="pro_cronoc-pos-ADV.html">ADV</a></tt>-<tt><a href="pro_cronoc-pos-VERB.html">VERB</a></tt> (3; 15% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 csubj	color:blue
1	No	non	ADV	_	Polarity=Neg	4	advmod	_	Reported=Yes
2	es	eser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	Reported=Yes
3	cominabla	convenable	ADJ	_	_	4	amod	_	Reported=Yes
4	causa	cauza	NOUN	_	_	0	root	_	Reported=Yes
5	que	que	SCONJ	_	_	8	mark	_	Reported=Yes
6	huey	oi	ADV	_	_	8	advmod	_	Reported=Yes
7	mays	mais	ADV	_	Polarity=Neg	8	advmod	_	Reported=Yes
8	aia	aver	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	csubj	_	Reported=Yes
9	nom	nom	NOUN	_	_	8	obj	_	Reported=Yes
10	Magra	_	PROPN	_	_	9	flat	_	Reported=Yes
11	"	"	PUNCT	_	_	4	punct	_	Reported=Yes
12	.	.	PUNCT	_	_	4	punct	_	Reported=Yes

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	e	e	CCONJ	_	_	3	cc	_	_
2	lor	el	PRON	_	Number=Plur|Person=3|PronType=Prs	3	iobj	_	_
3	plac	plazer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	que	que	SCONJ	_	_	7	mark	_	_
5	aysxi	aissi	ADV	_	_	7	advmod	_	_
6	fos	eser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	fait	faire	VERB	_	Tense=Past|VerbForm=Part	3	csubj	_	_
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	"	"	PUNCT	_	_	6	punct	_	Reported=Yes
2	Senher	senhor	NOUN	_	_	6	vocative	_	Reported=Yes
3	,	,	PUNCT	_	_	6	punct	_	Reported=Yes
4	non	non	ADV	_	Polarity=Neg	6	advmod	_	Reported=Yes
5	es	eser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	Reported=Yes
6	bo	bon	ADJ	_	_	0	root	_	Reported=Yes
7	qu'	que	SCONJ	_	_	8	mark	_	Reported=Yes
8	estiam	estar	VERB	_	Mood=Sub|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	6	csubj	_	Reported=Yes
9	aysxi	aissi	ADV	_	_	8	advmod	_	Reported=Yes
10	totz	tot	PRON	_	Number=Plur|PronType=Ind	8	obl	_	Reported=Yes
11	,	,	PUNCT	_	_	6	punct	_	Reported=Yes
12	car	car	SCONJ	_	_	18	mark	_	Reported=Yes
13	l'	lo	DET	_	Definite=Def|Number=Sing|PronType=Art	14	det	_	Reported=Yes
14	obra	obra	NOUN	_	_	18	obj	_	Reported=Yes
15	e	e	CCONJ	_	_	17	cc	_	Reported=Yes
16	'ls	lo	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	17	det	_	Reported=Yes
17	maiestres	maestre	NOUN	_	_	14	conj	_	Reported=Yes
18	empacham	empachar	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	6	acl	_	Reported=Yes
19	per	per	ADP	_	_	21	case	_	Reported=Yes
20	la	lo	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	Reported=Yes
21	strechura	estrechura	NOUN	_	_	18	obl	_	Reported=Yes
22	de	de	ADP	_	_	24	case	_	Reported=Yes
23	la	lo	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	24	det	_	Reported=Yes
24	valh	val	NOUN	_	_	21	nmod	_	Reported=Yes
25	.	.	PUNCT	_	_	6	punct	_	Reported=Yes

~~~


