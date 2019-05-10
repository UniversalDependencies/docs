---
layout: base
title:  'Statistics of xcomp in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `xcomp`

This relation is universal.

406 nodes (2%) are attached to their parents as `xcomp`.

405 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.7512315270936.

The following 16 pairs of parts of speech are connected with `xcomp`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (197; 49% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (97; 24% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (36; 9% instances), <tt><a href="tr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (23; 6% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (15; 4% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (10; 2% instances), <tt><a href="tr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (9; 2% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 xcomp	color:blue
1	Eşi	eş	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	2	compound	_	_
2	Alice	_	PROPN	PROPN	_	12	nsubj	_	Proper=True|SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	"	"	PUNCT	``	_	8	punct	_	SpaceAfter=No
5	Kendi	kendi	PRON	PRR	Number=Sing|Reflex=Yes	6	amod	_	_
6	sağlığını	sağlık	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obj	_	_
7	tamamen	tamamen	ADV	RB	_	8	advmod	_	_
8	ihmal	ihmal	NOUN	NN	Number=Sing	12	xcomp	_	_
9	etmesi	et	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	8	fixed	_	SpaceAfter=No
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
2	Frank'in	Frank	PROPN	PROPN	Case=Gen|Number=Sing	5	nmod:poss	_	Proper=True
3	ona	o	PRON	PRP	Case=Dat|Number=Sing|Polarity=Pos	5	iobj	_	_
4	modellik	modellik	NOUN	NN	Number=Sing	5	obj	_	_
5	yapmasını	yap	NOUN	VN	Aspect=Perf|Case=Acc|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	6	xcomp	_	_
6	önerdiğimde	öner	NOUN	VN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Polarity=Pos	7	obl	_	_
7	güldü	gül	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

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
4	sürü	sür	NOUN	NN	Number=Sing	5	compound	_	_
5	şey	şey	NOUN	NN	Number=Sing	6	obj	_	_
6	yapmak	yap	NOUN	VN	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	7	xcomp	_	_
7	isteyen	iste	ADJ	VJ	Number=Sing|Polarity=Pos	8	acl:relcl	_	_
8	sanatçılar	sanatçı	NOUN	NN	Number=Plur	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


