---
layout: base
title:  'Statistics of det in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="tr_pud-dep-det-predet.html">det:predet</a></tt>.

679 nodes (4%) are attached to their parents as `det`.

679 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25773195876289.

The following 6 pairs of parts of speech are connected with `det`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (663; 98% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Ben	ben	PRON	PRP	Case=Nom|Number=Sing|Person=1|Polarity=Pos	5	nsubj	_	_
2	zaten	zaten	ADV	RB	_	5	advmod	_	_
3	her	her	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	4	det	_	_
4	şekilde	şekil	NOUN	NN	Case=Loc|Number=Sing	5	obl	_	_
5	hapse	haps	NOUN	NN	Case=Dat|Number=Sing	0	root	_	_
6	gireceğim	gir	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut	5	compound	_	SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	_	_
8	umarım	um	VERB	VB	Number=Sing|Person=1|Tense=Aor	5	conj	_	_
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
1	Ortaçağ'da	Ortaçağ	NOUN	NN	Case=Loc|Number=Sing	10	obl	_	Proper=True
2	ise	i	AUX	VB	Mood=Cnd|Number=Sing|Person=3|Polarity=Pos	1	cop	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	çoğu	çoğu	DET	DT	Number=Sing	5	det	_	_
5	Hıristiyan	hıristiyan	PROPN	PROPN	Case=Nom|Number=Sing	10	nsubj	_	Proper=True
6	Kutsal	Kutsal	ADJ	JJ	Number=Sing	7	amod	_	Proper=True
7	Kitap'a	Kitap	NOUN	NN	Case=Dat|Number=Sing	10	obj	_	Proper=True
8	ana	ana	NOUN	NN	Number=Sing	9	nmod:poss	_	_
9	dillerinde	dil	NOUN	NN	Case=Loc|Number=Plur|Number[psor]=Plur|Person[psor]=3	10	obl	_	_
10	erişemiyordu	erişem	VERB	VB	Aspect=Prog|Mood=Pot|Number=Sing|Person=3|Polarity=Neg|Tense=Past	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Bu	bu	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	2	det	_	_
2	noktada	nokta	ADV	NN	Case=Loc|Number=Sing	11	advmod	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	oyunlar	oyun	NOUN	NN	Number=Plur	8	nmod:poss	_	_
5	ile	ile	CCONJ	CCONJ	_	7	cc	_	_
6	günlük	günlük	ADJ	JJ	Number=Sing	7	amod	_	_
7	yaşamımız	yaşam	NOUN	NN	Number=Sing|Number[psor]=Plur|Person[psor]=1	4	conj	_	_
8	arasında	ara	ADV	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	advmod	_	_
9	bazı	bazı	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	10	det	_	_
10	benzerlikler	benzerlik	NOUN	VN	Case=Nom|Number=Plur	11	nsubj	_	_
11	kurulabilir	kurulab	VERB	VB	Aspect=Hab|Mood=GenPot|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


