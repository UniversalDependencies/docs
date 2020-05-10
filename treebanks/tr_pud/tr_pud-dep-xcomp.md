---
layout: base
title:  'Statistics of xcomp in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `xcomp`

This relation is universal.

128 nodes (1%) are attached to their parents as `xcomp`.

128 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.953125.

The following 12 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (45; 35% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (40; 31% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (22; 17% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (7; 5% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	Ama	ama	ADV	RB	_	7	advmod	_	_
2	Frank'in	Frank	PROPN	PROPN	Case=Gen|Number=Sing	5	nsubj	_	Proper=True
3	ona	o	PRON	PRP	Case=Dat|Number=Sing|Polarity=Pos	5	iobj	_	_
4	modellik	modellik	NOUN	NN	Number=Sing	5	obj	_	_
5	yapmasını	yap	NOUN	VN	Aspect=Perf|Case=Acc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	6	xcomp	_	_
6	önerdiğimde	öner	NOUN	VN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Polarity=Pos	7	advcl	_	_
7	güldü	gül	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	Woods	Woods	PROPN	PROPN	Number=Sing	3	obl	_	Proper=True
2	ile	ile	ADP	IN	_	1	case	_	_
3	yazışarak	yazış	ADV	CRB	Polarity=Pos	9	advcl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	6	det	_	_
6	etimoloji	etimoloji	NOUN	NN	Number=Sing	8	obj	_	_
7	ortaya	orta	NOUN	NN	Case=Dat|Number=Sing	8	obl	_	_
8	çıkarmaya	çıkar	NOUN	VN	Aspect=Perf|Case=Dat|Mood=Ind|Tense=Pres|VerbForm=Ger	9	xcomp	_	_
9	çalıştım	çalış	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	Bunlar	bu	PRON	PRP	Case=Nom|Number=Plur|Polarity=Pos	8	nsubj	_	_
2	genellikle	genellikle	ADV	RB	_	8	advmod	_	_
3	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	4	det	_	_
4	sürü	sür	NOUN	NN	Number=Sing	5	amod	_	_
5	şey	şey	NOUN	NN	Number=Sing	6	obj	_	_
6	yapmak	yap	NOUN	VN	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	7	xcomp	_	_
7	isteyen	iste	ADJ	VJ	Number=Sing|Polarity=Pos	8	acl	_	_
8	sanatçılar	sanatçı	NOUN	NN	Number=Plur	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


