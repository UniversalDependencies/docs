---
layout: base
title:  'Statistics of xcomp in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `xcomp`

This relation is universal.

381 nodes (2%) are attached to their parents as `xcomp`.

380 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.92913385826772.

The following 11 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (198; 52% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (101; 27% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (43; 11% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (14; 4% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (9; 2% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (7; 2% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 xcomp	color:blue
1	Eşi	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	2	compound	_	_
2	Alice	_	PROPN	PROPN	_	12	nsubj	_	Proper=True|SpaceAfter=No
3	,	_	PUNCT	,	_	2	punct	_	_
4	"	_	PUNCT	``	_	8	punct	_	SpaceAfter=No
5	Kendi	_	PRON	PRR	Number=Sing|Reflex=Yes	6	amod	_	_
6	sağlığını	_	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	_
7	tamamen	_	ADV	RB	_	8	advmod	_	_
8	ihmal	_	NOUN	NN	Number=Sing	12	xcomp	_	_
9	etmesi	_	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	8	fixed	_	SpaceAfter=No
10	.	_	PUNCT	.	_	8	punct	_	SpaceAfter=No
11	"	_	PUNCT	''	_	8	punct	_	_
12	dedi	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
13	.	_	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 xcomp	color:blue
1	Ama	_	ADV	RB	_	7	advmod	_	_
2	Frank'in	_	PROPN	PROPN	Case=Gen|Number=Sing	5	nmod:poss	_	Proper=True
3	ona	_	PRON	PRP	Case=Dat|Number=Sing|Polarity=Pos	5	iobj	_	_
4	modellik	_	NOUN	NN	Number=Sing	5	obj	_	_
5	yapmasını	_	NOUN	VN	Aspect=Perf|Case=Acc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	6	xcomp	_	_
6	önerdiğimde	_	NOUN	VN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Polarity=Pos	7	advmod	_	_
7	güldü	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
8	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	Bunlar	_	PRON	PRP	Case=Nom|Number=Plur|Polarity=Pos	8	nsubj	_	_
2	genellikle	_	ADV	RB	_	8	advmod	_	_
3	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	4	det	_	_
4	sürü	_	NOUN	NN	Number=Sing	5	compound	_	_
5	şey	_	NOUN	NN	Number=Sing	6	obj	_	_
6	yapmak	_	NOUN	VN	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	7	xcomp	_	_
7	isteyen	_	ADJ	VJ	Number=Sing|Polarity=Pos	8	acl:relcl	_	_
8	sanatçılar	_	NOUN	NN	Number=Plur	0	root	_	SpaceAfter=No
9	.	_	PUNCT	.	_	8	punct	_	_

~~~


