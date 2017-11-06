---
layout: base
title:  'Statistics of discourse in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `discourse`

This relation is universal.

5 nodes (0%) are attached to their parents as `discourse`.

5 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.8.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (2; 40% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (1; 20% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-INTJ.html">INTJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 discourse	color:blue
1	Tabii	_	ADJ	JJ	Number=Sing	10	discourse	_	_
2	ki	_	SCONJ	SCONJ	_	1	advmod:emph	_	SpaceAfter=No
3	,	_	PUNCT	,	_	1	punct	_	_
4	modern	_	ADJ	JJ	Number=Sing	5	amod	_	_
5	Almanya'nın	_	PROPN	PROPN	Case=Gen|Number=Sing	8	nmod:poss	_	Proper=True
6	Nazi	_	PROPN	PROPN	Number=Sing	7	compound	_	Proper=True
7	rejiminden	_	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	advmod	_	_
8	ayrılması	_	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	9	nsubj	_	_
9	gerektiğini	_	NOUN	VN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	10	xcomp	_	_
10	anlıyorum	_	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	SpaceAfter=No
11	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 1 discourse	color:blue
1	Tabii	_	ADJ	JJ	Number=Sing	17	discourse	_	_
2	ki	_	SCONJ	SCONJ	_	1	advmod:emph	_	SpaceAfter=No
3	,	_	PUNCT	,	_	1	punct	_	_
4	dokunsal	_	ADJ	JJ	Number=Sing	5	amod	_	_
5	eğilim	_	NOUN	NN	Case=Nom|Number=Sing	17	nsubj	_	SpaceAfter=No
6	,	_	PUNCT	,	_	5	punct	_	_
7	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	8	det	_	_
8	şeyleri	_	NOUN	NN	Case=Acc|Number=Plur	10	obj	_	_
9	kendimiz	_	NOUN	NN	Number=Sing	10	advmod	_	_
10	yapma	_	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Ger	11	compound	_	_
11	konusunda	_	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	14	amod	_	_
12	ki	_	ADP	JJ	_	11	case	_	_
13	artan	_	ADJ	VJ	Number=Sing|Polarity=Pos	14	acl:relcl	_	_
14	saplantımız	_	NOUN	NN	Number=Sing|Number[psor]=Plur|Person[psor]=1	15	obj	_	ToDo=pobj
15	ile	_	ADP	IN	_	17	obj	_	ToDo=pobj
16	yakından	_	NOUN	NN	Case=Abl|Number=Sing	17	advmod	_	_
17	ilişkili	_	ADJ	JJ	Number=Sing	0	root	_	_
18	dir	_	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	17	cop	_	_
19	.	_	PUNCT	.	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
1	Peki	_	ADV	RB	_	7	cc	_	_
2	ya	_	ADV	RB	_	7	discourse	_	_
3	Avustralya'nın	_	PROPN	PROPN	Case=Gen|Number=Sing	7	nmod:poss	_	Proper=True
4	bu	_	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	5	det	_	_
5	konuda	_	NOUN	NN	Case=Loc|Number=Sing	7	amod	_	_
6	ki	_	ADP	JJ	_	5	case	_	_
7	duruşu	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	0	root	_	SpaceAfter=No
8	?	_	PUNCT	.	_	7	punct	_	_

~~~


