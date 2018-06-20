---
layout: base
title:  'Statistics of cc:preconj in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-cc.html">cc</a></tt>.

8 nodes (0%) are attached to their parents as `cc:preconj`.

8 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.

The following 3 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (6; 75% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 cc:preconj	color:blue
1	Avrupa'da	Avrupa	PROPN	PROPN	Case=Loc|Number=Sing	13	advmod	_	Proper=True
2	savaş	savaş	NOUN	NN	Number=Sing	3	compound	_	_
3	öncesi	önce	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	13	obl:tmod	_	_
4	Müttefikler	Müttefik	NOUN	NN	Case=Nom|Number=Plur	13	nsubj	_	Proper=True
5	hem	hem	CCONJ	CCONJ	_	9	cc:preconj	_	_
6	nüfus	nüfus	NOUN	NN	Number=Sing	10	compound	_	_
7	hem	hem	CCONJ	CCONJ	_	9	cc	_	_
8	de	de	ADV	RB	_	7	advmod:emph	_	_
9	ekonomi	ekonomi	NOUN	NN	Number=Sing	6	conj	_	_
10	açısından	açı	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	nmod:arg	_	ToDo=nmod
11	önemli	_	ADJ	JJ	Number=Sing	12	amod	_	_
12	avantajlara	avantaj	NOUN	NN	Case=Dat|Number=Plur	13	obj	_	_
13	sahip	_	ADJ	JJ	Number=Sing	0	root	_	_
14	tiler	_	AUX	AUX	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past	13	cop	_	_
15	.	.	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 cc:preconj	color:blue
1	Springer	Springer	PROPN	PROPN	Case=Nom|Number=Sing	20	nsubj	_	Proper=True
2	Yahudi	yahudi	PROPN	PROPN	Number=Sing	3	compound	_	Proper=True
3	halkıyla	halk	NOUN	NN	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nmod:arg	_	_
4	uzlaşma	uzlaş	NOUN	VN	Aspect=Perf|Mood=Ind|Tense=Pres|VerbForm=Ger	5	xcomp	_	_
5	sağlamak	sağla	NOUN	VN	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	14	xcomp	_	_
6	için	için	ADP	IN	_	5	case	_	_
7	hem	hem	CCONJ	CCONJ	_	11	cc:preconj	_	_
8	gizli	gizli	ADJ	JJ	Number=Sing	12	amod	_	_
9	hem	hem	CCONJ	CCONJ	_	11	cc	_	_
10	kamuya	kamu	NOUN	NN	Case=Dat|Number=Sing	11	nmod:arg	_	ToDo=nmod
11	açık	açık	ADJ	JJ	Number=Sing	8	conj	_	_
12	şekilde	şekil	NOUN	NN	Case=Loc|Number=Sing	14	advmod	_	_
13	gayretle	gayretle	NOUN	NN	Case=Ins|Number=Sing	14	advmod	_	_
14	çalıştı	çalış	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
15	ve	ve	CCONJ	CCONJ	_	20	cc	_	_
16	İsrail'i	İsrail	PROPN	PROPN	Case=Acc|Number=Sing	20	obj	_	Proper=True
17	pek	pek	ADV	RB	_	18	advmod	_	_
18	çok	çok	ADV	RB	_	19	advmod	_	_
19	kez	kez	NOUN	NN	Number=Sing	20	advmod	_	_
20	ziyaret	ziyaret	NOUN	NN	Number=Sing	14	conj	_	_
21	etti	et	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	20	fixed	_	SpaceAfter=No
22	.	.	PUNCT	.	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 cc:preconj	color:blue
1	Bogd	Bogd	PROPN	PROPN	Number=Sing	2	compound	_	Proper=True
2	Han	han	NOUN	NN	Case=Nom|Number=Sing	29	nsubj	_	Proper=True|SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	hem	hem	CCONJ	CCONJ	_	8	cc:preconj	_	_
5	Moğolistan'ın	Moğolistan	PROPN	PROPN	Case=Gen|Number=Sing	10	nmod:poss	_	Proper=True
6	hem	hem	CCONJ	CCONJ	_	8	cc	_	_
7	de	de	ADV	RB	_	6	advmod:emph	_	_
8	Çin'in	Çin	PROPN	PROPN	Case=Gen|Number=Sing	5	conj	_	Proper=True
9	Çing	Çing	PROPN	PROPN	Number=Sing	10	compound	_	Proper=True
10	döneminde	dönem	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	advmod	_	_
11	Mançu	Mançu	PROPN	PROPN	Number=Sing	12	compound	_	Proper=True
12	tarafından	taraf	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	advmod	_	_
13	yönetildiğini	yönetil	NOUN	VN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	29	xcomp	_	_
14	ve	ve	CCONJ	CCONJ	_	28	cc	_	_
15	de	de	ADV	RB	_	14	advmod:emph	_	_
16	Çing	Çing	PROPN	PROPN	Number=Sing	17	compound	_	Proper=True
17	hanedanının	hanedan	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	19	nmod:poss	_	Proper=True
18	1911'de	1911	NOUN	NN	Case=Loc|Number=Sing	19	obl:tmod	_	_
19	yıkılmasının	yıkılmas	NOUN	VN	Aspect=Perf|Case=Gen|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger|Voice=Pass	28	xcomp	_	_
20	ardından	ardından	ADP	IN	_	19	case	_	SpaceAfter=No
21	,	,	PUNCT	,	_	19	punct	_	_
22	Moğolistan'ın	Moğolistan	PROPN	PROPN	Case=Gen|Number=Sing	25	nmod:poss	_	Proper=True
23	Mançu'ya	Mançu	PROPN	PROPN	Case=Dat|Number=Sing	24	nmod:arg	_	Proper=True
24	teslim	teslim	NOUN	NN	Number=Sing	25	compound	_	_
25	sözleşmesinin	sözleşme	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	28	nmod:poss	_	_
26	geçersiz	geçersiz	ADJ	JJ	Number=Sing	28	advmod	_	_
27	hale	hal	AUX	NN	Case=Dat|Number=Sing	26	cop	_	_
28	geldiğini	gel	NOUN	VN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	13	conj	_	_
29	söyledi	söyle	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
30	.	.	PUNCT	.	_	29	punct	_	_

~~~


