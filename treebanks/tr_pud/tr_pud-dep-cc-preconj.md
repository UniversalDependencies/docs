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

The following 5 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 25% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 25% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 25% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances).


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
2	tonlama	tonla	VERB	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Vnoun	13	nsubj	_	_
3	hem	hem	CCONJ	CCONJ	_	4	cc:preconj	_	_
4	Fince	Fince	PROPN	PROPN	Number=Sing	11	obl	_	Proper=True|SpaceAfter=No
5	,	,	PUNCT	,	_	10	punct	_	_
6	hem	hem	CCONJ	CCONJ	_	10	cc	_	_
7	de	de	ADV	RB	_	6	fixed	_	_
8	Kuzey	kuzey	NOUN	NN	Number=Sing	10	nmod:poss	_	_
9	Sami	Sami	PROPN	PROPN	Number=Sing	8	flat	_	Proper=True
10	lehçelerinde	lehçe	NOUN	NN	Case=Loc|Number=Plur|Number[psor]=Sing|Person[psor]=3	4	conj	_	_
11	bulunan	bul	ADJ	VJ	Number=Sing|Polarity=Pos	13	acl	_	_
12	bir	bir	DET	DT	Definite=Ind|Polarity=Pos	13	det	_	_
13	özellik	özellik	NOUN	NN	Number=Sing	0	root	_	_
14	tir	i	AUX	AUX	_	13	cop	_	_
15	,	,	PUNCT	,	_	26	punct	_	_
16	ancak	ancak	ADV	RB	_	26	cc	_	_
17	farklı	farklı	ADJ	JJ	Number=Sing	20	amod	_	_
18	bir	bir	DET	DT	Definite=Ind|Polarity=Pos	20	det	_	_
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 5 cc:preconj	color:blue
1	Olaysız	Olaysız	ADJ	JJ	Number=Sing	3	amod	_	_
2	bir	bir	DET	DT	Definite=Ind|Polarity=Pos	3	det	_	_
3	yaşamın	yaşam	NOUN	NN	Case=Gen|Number=Sing	8	obl	_	_
4	ardından	ardından	ADP	IN	_	3	case	_	_
5	ya	ya	CCONJ	CCONJ	_	18	cc:preconj	_	_
6	yaşlı	yaşlı	ADJ	JJ	_	8	advcl	_	_
7	yken	i	AUX	AUX	Aspect=Perf|Mood=Ind|Tense=Pres|VerbForm=Conv	6	cop	_	_
8	öleceği	öl	NOUN	VN	Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	19	csubj	_	_
9	ya	ya	CCONJ	CCONJ	_	18	cc	_	_
10	da	da	ADV	RB	_	9	fixed	_	_
11	bir	bir	DET	DT	Definite=Ind|Polarity=Pos	13	det	_	_
12	savaş	savaş	NOUN	NN	Number=Sing	13	nmod:poss	_	_
13	meydanında	meydan	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	16	obl	_	_
14	genç	_	ADJ	JJ	Number=Sing	16	advcl	_	_
15	ken	_	AUX	AUX	Aspect=Perf|Mood=Ind|Tense=Pres|VerbForm=Conv	14	cop	_	_
16	ölüp	öl	ADV	CRB	_	18	advcl	_	_
17	şiirle	şiir	NOUN	NN	Case=Ins|Number=Sing	18	obl	_	_
18	ölümsüzleşeceği	ölümsüzleş	VERB	VN	Aspect=Perf|Case=Nom|Mood=Pot|Number=Sing|Number[psor]=Sing|Person[psor]=3|Tense=Fut|VerbForm=Vnoun	8	conj	_	_
19	söylenmişti	söyle	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Pqp|Voice=Pass	0	root	_	SpaceAfter=No
20	.	.	PUNCT	.	_	19	punct	_	_

~~~


