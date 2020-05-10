---
layout: base
title:  'Statistics of cc:preconj in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-cc.html">cc</a></tt>.

8 nodes (0%) are attached to their parents as `cc:preconj`.

8 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75.

The following 4 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (4; 50% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 25% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc:preconj	color:blue
1	Avrupa'da	Avrupa	PROPN	PROPN	Case=Loc|Number=Sing	13	obl	_	Proper=True
2	savaş	savaş	NOUN	NN	Number=Sing	3	nmod:poss	_	_
3	öncesi	önce	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	13	obl	_	_
4	Müttefikler	Müttefik	NOUN	NN	Case=Nom|Number=Plur	13	nsubj	_	Proper=True
5	hem	hem	CCONJ	CCONJ	_	6	cc:preconj	_	_
6	nüfus	nüfus	NOUN	NN	Number=Sing	10	nmod:poss	_	_
7	hem	hem	CCONJ	CCONJ	_	9	cc	_	_
8	de	de	ADV	RB	_	7	fixed	_	_
9	ekonomi	ekonomi	NOUN	NN	Number=Sing	6	conj	_	_
10	açısından	açı	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	obl	_	ToDo=nmod
11	önemli	_	ADJ	JJ	Number=Sing	12	amod	_	_
12	avantajlara	avantaj	NOUN	NN	Case=Dat|Number=Plur	13	obj	_	_
13	sahip	_	ADJ	JJ	Number=Sing	0	root	_	_
14	tiler	_	AUX	AUX	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past	13	cop	_	_
15	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	Sessiz	_	ADJ	JJ	Number=Sing	2	amod	_	_
2	tonlama	tonla	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Ger	13	nsubj	_	_
3	hem	hem	CCONJ	CCONJ	_	4	cc:preconj	_	_
4	Fince	Fince	PROPN	PROPN	Number=Sing	11	obl	_	Proper=True|SpaceAfter=No
5	,	,	PUNCT	,	_	10	punct	_	_
6	hem	hem	CCONJ	CCONJ	_	10	cc	_	_
7	de	de	ADV	RB	_	6	fixed	_	_
8	Kuzey	kuzey	NOUN	NN	Number=Sing	10	nmod:poss	_	_
9	Sami	Sami	PROPN	PROPN	Number=Sing	8	flat	_	Proper=True
10	lehçelerinde	lehçe	NOUN	NN	Case=Loc|Number=Plur|Number[psor]=Sing|Person[psor]=3	4	conj	_	_
11	bulunan	bul	ADJ	VJ	Number=Sing|Polarity=Pos	13	acl	_	_
12	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	13	det	_	_
13	özellik	özellik	NOUN	NN	Number=Sing	0	root	_	_
14	tir	i	AUX	AUX	_	13	cop	_	_
15	,	,	PUNCT	,	_	26	punct	_	_
16	ancak	ancak	ADV	RB	_	26	cc	_	_
17	farklı	farklı	ADJ	JJ	Number=Sing	20	amod	_	_
18	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	20	det	_	_
19	dil	dil	NOUN	NN	Number=Sing	20	nmod:poss	_	_
20	tarihine	tarih	NOUN	NN	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	21	obj	_	_
21	sahip	sahip	ADJ	JJ	Number=Sing	23	csubj	_	_
22	olduğu	ol	AUX	VN	Aspect=Perf|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past	21	cop	_	_
23	düşünülen	düşün	ADJ	VJ	Number=Sing|Polarity=Pos	25	acl	_	_
24	güney	güney	NOUN	NN	Number=Sing	25	amod	_	_
25	Sami'de	Sami	PROPN	PROPN	Case=Loc|Number=Sing	26	obl	_	Proper=True
26	mevcut	mevcut	ADJ	JJ	Number=Sing	13	conj	_	_
27	değildir	değil	AUX	NOMP	Mood=Gen|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	26	aux	_	SpaceAfter=No
28	.	.	PUNCT	.	_	26	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc:preconj	color:blue
1	Springer	Springer	PROPN	PROPN	Case=Nom|Number=Sing	14	nsubj	_	Proper=True
2	Yahudi	yahudi	PROPN	PROPN	Number=Sing	3	nmod:poss	_	Proper=True
3	halkıyla	halk	NOUN	NN	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	obj	_	_
4	uzlaşma	uzlaş	NOUN	VN	Aspect=Perf|Mood=Ind|Tense=Pres|VerbForm=Ger	5	obj	_	_
5	sağlamak	sağla	NOUN	VN	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	14	advcl	_	_
6	için	için	ADP	IN	_	5	case	_	_
7	hem	hem	CCONJ	CCONJ	_	8	cc:preconj	_	_
8	gizli	gizli	ADJ	JJ	Number=Sing	12	amod	_	_
9	hem	hem	CCONJ	CCONJ	_	11	cc	_	_
10	kamuya	kamu	NOUN	NN	Case=Dat|Number=Sing	11	obj	_	ToDo=nmod
11	açık	açık	ADJ	JJ	Number=Sing	8	conj	_	_
12	şekilde	şekil	NOUN	NN	Case=Loc|Number=Sing	14	obl	_	_
13	gayretle	gayretle	NOUN	NN	Case=Ins|Number=Sing	14	obl	_	_
14	çalıştı	çalış	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
15	ve	ve	CCONJ	CCONJ	_	20	cc	_	_
16	İsrail'i	İsrail	PROPN	PROPN	Case=Acc|Number=Sing	20	obj	_	Proper=True
17	pek	pek	ADV	RB	_	18	advmod	_	_
18	çok	çok	ADV	RB	_	19	advmod	_	_
19	kez	kez	NOUN	NN	Number=Sing	20	obl	_	_
20	ziyaret	ziyaret	NOUN	NN	Number=Sing	14	conj	_	_
21	etti	et	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	20	compound:lvc	_	SpaceAfter=No
22	.	.	PUNCT	.	_	20	punct	_	_

~~~


