---
layout: base
title:  'Statistics of det in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `det`

This relation is universal.

686 nodes (4%) are attached to their parents as `det`.

686 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26822157434402.

The following 7 pairs of parts of speech are connected with `det`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (656; 96% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (17; 2% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Kentin	kentin	NOUN	NN	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	ekonomisi	ekonomi	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	_
3	1960'lardan	_	NOUN	NN	Case=Abl|Number=Plur	5	obl	_	_
4	bu	bu	DET	DT	Definite=Def|Polarity=Pos	5	det	_	_
5	yana	yan	VERB	NN	Mood=Opt|Number=Sing|Person=3|Tense=Pres|VerbForm=Vnoun	7	obl	_	_
6	hızla	hız	NOUN	NN	Case=Ins|Number=Sing	7	obl	_	_
7	gerilemekte	gerile	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polite=Form|Tense=Pres	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Ortaçağ'da	Ortaçağ	NOUN	NN	Case=Loc|Number=Sing	10	obl	_	Proper=True
2	ise	i	AUX	VB	Mood=Cnd|Number=Sing|Person=3|Polarity=Pos	1	cop	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	çoğu	çoğu	DET	DT	_	5	det	_	_
5	Hıristiyan	hıristiyan	PROPN	PROPN	Case=Nom|Number=Sing	10	nsubj	_	Proper=True
6	Kutsal	Kutsal	ADJ	JJ	Number=Sing	7	amod	_	Proper=True
7	Kitap'a	Kitap	NOUN	NN	Case=Dat|Number=Sing	10	obj	_	Proper=True
8	ana	ana	NOUN	NN	Number=Sing	9	nmod:poss	_	_
9	dillerinde	dil	NOUN	NN	Case=Loc|Number=Plur|Number[psor]=Plur|Person[psor]=3	10	obl	_	_
10	erişemiyordu	erişem	VERB	VB	Aspect=Prog|Mood=Pot|Number=Sing|Person=3|Polarity=Neg|Tense=Past	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


