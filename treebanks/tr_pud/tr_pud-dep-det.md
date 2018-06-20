---
layout: base
title:  'Statistics of det in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="tr_pud-dep-det-predet.html">det:predet</a></tt>.

671 nodes (4%) are attached to their parents as `det`.

671 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27272727272727.

The following 5 pairs of parts of speech are connected with `det`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (659; 98% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Ben	ben	PRON	PRP	Case=Nom|Number=Sing|Person=1|Polarity=Pos	6	nsubj	_	_
2	zaten	zaten	ADV	RB	_	6	advmod	_	_
3	her	her	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	4	det	_	_
4	şekilde	şekil	NOUN	NN	Case=Loc|Number=Sing	6	advmod	_	_
5	hapse	haps	NOUN	NN	Case=Dat|Number=Sing	6	advmod	_	_
6	gireceğim	gir	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut	8	parataxis	_	SpaceAfter=No
7	,	,	PUNCT	,	_	6	punct	_	_
8	umarım	um	VERB	VB	Number=Sing|Person=1|Tense=Aor	0	root	_	_
9	buna	bu	PRON	PRD	Case=Dat|Number=Sing|Polarity=Pos	10	advmod	_	_
10	değmiştir	değmiş	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	8	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Ortaçağ'da	Ortaçağ	NOUN	NN	Case=Loc|Number=Sing	2	advmod	_	Proper=True
2	ise	ise	VERB	VB	Mood=Cnd|Number=Sing|Person=3|Polarity=Pos	10	advcl	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	çoğu	çoğu	DET	DT	Number=Sing	5	det	_	_
5	Hıristiyan	hıristiyan	PROPN	PROPN	Case=Nom|Number=Sing	10	nsubj	_	Proper=True
6	Kutsal	Kutsal	ADJ	JJ	Number=Sing	7	amod	_	Proper=True
7	Kitap'a	Kitap	NOUN	NN	Case=Dat|Number=Sing	10	obj	_	Proper=True
8	ana	ana	NOUN	NN	Number=Sing	9	compound	_	_
9	dillerinde	dil	NOUN	NN	Case=Loc|Number=Plur|Number[psor]=Plur|Person[psor]=3	10	advmod	_	_
10	erişemiyordu	erişem	VERB	VB	Aspect=Prog|Mood=Abil|Number=Sing|Person=3|Polarity=Neg|Tense=Past	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	George	George	PROPN	PROPN	Case=Nom|Number=Sing	8	nsubj	_	Proper=True
2	koyu	koyu	ADJ	JJ	Number=Sing	4	amod	_	_
3	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	4	det	_	_
4	dindar	_	ADJ	JJ	Number=Sing	0	root	_	_
5	dı	_	AUX	AUX	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	4	cop	_	_
6	ve	ve	CCONJ	CCONJ	_	8	cc	_	_
7	saatlerce	saat	ADV	RB	_	8	advmod	_	_
8	ibadet	ibadet	NOUN	NN	Number=Sing	4	conj	_	_
9	ederdi	et	VERB	VB	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Tense=Past	8	fixed	_	_
10	ancak	ancak	ADV	RB	_	14	cc	_	_
11	kardeşleri	kardeş	NOUN	NN	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	14	nsubj	_	_
12	aynı	aynı	ADJ	JJ	Number=Sing	13	amod	_	_
13	dindarlığı	dindarlık	NOUN	NN	Case=Acc|Number=Sing	14	obj	_	_
14	göstermiyordu	göster	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	4	conj	_	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


