---
layout: base
title:  'Statistics of goeswith in UD_Danish'
udver: '2'
---

## Treebank Statistics: UD_Danish: Relations: `goeswith`

This relation is universal.

8 nodes (0%) are attached to their parents as `goeswith`.

8 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 2 pairs of parts of speech are connected with `goeswith`: <tt><a href="da-pos-NUM.html">NUM</a></tt>-<tt><a href="da-pos-SYM.html">SYM</a></tt> (7; 88% instances), <tt><a href="da-pos-SYM.html">SYM</a></tt>-<tt><a href="da-pos-SYM.html">SYM</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 goeswith	color:blue
1	Overstiger	overstige	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	ccomp	_	_
2	din	din	DET	_	Gender=Com|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	3	det	_	_
3	bolig	bolig	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	1	nsubj	_	_
4	de	den	DET	_	Number=Plur|PronType=Dem	6	det	_	_
5	85	85	NUM	_	NumType=Card	6	nummod	_	_
6	kvm.	kvadratmeter	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	1	obj	_	_
7	,	,	PUNCT	_	_	1	punct	_	_
8	reduceres	reducere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
9	din	din	DET	_	Gender=Com|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	10	det	_	_
10	boligydelse	boligydelse	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	8	nsubj	_	_
11	til	til	ADP	_	AdpType=Prep	12	case	_	_
12	50	50	NUM	_	NumType=Card	8	nummod	_	_
13	%	%	SYM	_	_	12	goeswith	_	_
14	af	af	ADP	_	AdpType=Prep	15	case	_	_
15	kvm-udgiften	kvadratmeter-udgift	NOUN	_	Definite=Def|Gender=Com|Number=Sing	13	nmod	_	_
16	for	for	ADP	_	AdpType=Prep	19	case	_	_
17	de	den	DET	_	Number=Plur|PronType=Dem	19	det	_	_
18	overstigende	overstige	VERB	_	Tense=Pres|VerbForm=Part	19	amod	_	_
19	kvm.	kvadratmeter	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	8	obl	_	_
20	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 goeswith	color:blue
1	UDSENDES	udsende	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
2	KL	klokke	NOUN	_	Definite=Def|Gender=Com|Number=Sing	1	obl	_	_
3	=	=	SYM	_	_	2	cc	_	_
4	1600	1600	NUM	_	NumType=Card	3	conj	_	_
5	OPLÆSER	oplæser	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	1	conj	_	_
6	=	=	SYM	_	_	5	cc	_	_
7	=	=	SYM	_	_	6	goeswith	_	_
8	ER	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_

~~~


