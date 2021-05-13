---
layout: base
title:  'Statistics of xcomp in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `xcomp`

This relation is universal.

127 nodes (1%) are attached to their parents as `xcomp`.

127 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.95275590551181.

The following 11 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (31; 24% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (26; 20% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (18; 14% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (16; 13% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (12; 9% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (10; 8% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (7; 6% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	Woods	Woods	PROPN	PROPN	Number=Sing	3	obl	_	Proper=True
2	ile	ile	ADP	IN	_	1	case	_	_
3	yazışarak	yazış	ADV	CRB	_	9	advcl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	bir	bir	DET	DT	Definite=Ind|Polarity=Pos	6	det	_	_
6	etimoloji	etimoloji	NOUN	NN	Number=Sing	8	obj	_	_
7	ortaya	orta	NOUN	NN	Case=Dat|Number=Sing	8	obl	_	_
8	çıkarmaya	çıkar	VERB	VN	Aspect=Perf|Case=Dat|Mood=Ind|Tense=Pres|VerbForm=Vnoun	9	xcomp	_	_
9	çalıştım	çalış	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 xcomp	color:blue
1	Eşi	eş	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	_
2	Alice	_	PROPN	PROPN	_	1	appos	_	Proper=True|SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	"	"	PUNCT	``	_	8	punct	_	SpaceAfter=No
5	Kendi	kendi	PRON	PRR	Number=Sing|Reflex=Yes	6	amod	_	_
6	sağlığını	sağlık	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	_
7	tamamen	tamamen	ADV	RB	_	8	advmod	_	_
8	ihmal	ihmal	NOUN	NN	Number=Sing	12	xcomp	_	_
9	etmesi	et	VERB	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Vnoun	8	compound:lvc	_	SpaceAfter=No
10	.	_	PUNCT	.	_	8	punct	_	SpaceAfter=No
11	"	_	PUNCT	''	_	8	punct	_	_
12	dedi	de	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


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
5	yapmasını	yap	VERB	VN	Aspect=Perf|Case=Acc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Vnoun	6	xcomp	_	_
6	önerdiğimde	öner	NOUN	VN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Polarity=Pos	7	advcl	_	_
7	güldü	gül	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


