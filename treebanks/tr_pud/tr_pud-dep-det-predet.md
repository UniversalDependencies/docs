---
layout: base
title:  'Statistics of det:predet in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-det.html">det</a></tt>.

10 nodes (0%) are attached to their parents as `det:predet`.

10 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.1.

The following 2 pairs of parts of speech are connected with `det:predet`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (9; 90% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 det:predet	color:blue
1	Sanayi	_	NOUN	NN	Number=Sing	2	compound	_	Proper=True
2	Devrimi	_	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	nsubj	_	Proper=True|SpaceAfter=No
3	,	_	PUNCT	,	_	2	punct	_	_
4	İngiltere'de	_	PROPN	PROPN	Case=Loc|Number=Sing	10	advmod	_	Proper=True
5	diğer	_	DET	PDT	Definite=Def|Number=Sing|Polarity=Pos	7	det:predet	_	_
6	tüm	_	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	7	det	_	_
7	ülkelerden	_	NOUN	NN	Case=Abl|Number=Plur	9	advmod	_	_
8	daha	_	ADV	RB	_	9	advmod	_	_
9	önce	_	ADV	RB	_	10	advmod	_	_
10	gerçekleşti	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
11	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 det:predet	color:blue
1	Dahası	_	ADV	RB	_	11	advmod	_	SpaceAfter=No
2	,	_	PUNCT	,	_	1	punct	_	_
3	Hükumet	_	NOUN	NN	Case=Nom|Number=Sing	11	nsubj	_	_
4	başka	_	ADJ	JJ	Number=Sing	6	det:predet	_	_
5	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	6	det	_	_
6	kriz	_	NOUN	NN	Number=Sing	9	nmod	_	_
7	ile	_	ADP	IN	_	6	case	_	_
8	daha	_	ADV	RB	_	6	advmod:emph	_	ToDo=ex-adp-child
9	baş	_	NOUN	NN	Number=Sing	11	compound	_	_
10	etmek	_	NOUN	VN	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	9	fixed	_	_
11	zorunda	_	NOUN	NN	Case=Loc|Number=Sing	0	root	_	_
12	kalacak	_	AUX	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	11	cop	_	SpaceAfter=No
13	.	_	PUNCT	.	_	11	punct	_	_

~~~


