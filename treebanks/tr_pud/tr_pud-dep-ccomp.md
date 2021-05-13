---
layout: base
title:  'Statistics of ccomp in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `ccomp`

This relation is universal.

173 nodes (1%) are attached to their parents as `ccomp`.

172 instances of `ccomp` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08092485549133.

The following 13 pairs of parts of speech are connected with `ccomp`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (55; 32% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (54; 31% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (21; 12% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (14; 8% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (8; 5% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (7; 4% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 ccomp	color:blue
1	Ben	ben	PRON	PRP	Case=Nom|Number=Sing|Person=1|Polarity=Pos	5	nsubj	_	_
2	zaten	zaten	ADV	RB	_	5	advmod	_	_
3	her	her	DET	DT	Definite=Def|Polarity=Pos	4	det	_	_
4	şekilde	şekil	NOUN	NN	Case=Loc|Number=Sing	5	obl	_	_
5	hapse	haps	NOUN	NN	Case=Dat|Number=Sing	0	root	_	_
6	gireceğim	gir	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut	5	compound	_	SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	_
8	umarım	um	VERB	VB	Aspect=Hab|Number=Sing|Person=1|Tense=Pres	5	conj	_	_
9	buna	bu	PRON	PRD	Case=Dat|Number=Sing|Polarity=Pos	10	obl	_	_
10	değmiştir	değmiş	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	8	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 ccomp	color:blue
1	Neden	ne	ADV	WRB	_	3	advmod	_	_
2	onu	o	PRON	PRP	Case=Acc|Number=Sing|Polarity=Pos	3	obj	_	_
3	seçtiğimi	seç	NOUN	VN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Polarity=Pos	4	ccomp	_	_
4	bilmiyorum	bil	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres	0	root	_	SpaceAfter=No
5	...	...	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 ccomp	color:blue
1	Telefonum	Telefonum	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj	_	_
2	çalmaya	çal	VERB	VN	Aspect=Perf|Case=Dat|Mood=Ind|Tense=Pres|VerbForm=Vnoun	3	ccomp	_	_
3	başladığında	başladığ	NOUN	VN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	8	advcl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	henüz	henüz	ADV	RB	_	8	advmod	_	_
6	bölümlerin	bölüm	NOUN	NN	Case=Gen|Number=Plur	7	nmod:poss	_	_
7	çoğunu	çoğ	PRON	PRI	Case=Acc|Number=Sing|Person[psor]=3|Polarity=Pos	8	obj	_	_
8	izlememiştim	izleme	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pqp	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


