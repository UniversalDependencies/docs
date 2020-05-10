---
layout: base
title:  'Statistics of case in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `case`

This relation is universal.

692 nodes (4%) are attached to their parents as `case`.

691 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.40173410404624.

The following 15 pairs of parts of speech are connected with `case`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (519; 75% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (99; 14% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (32; 5% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (13; 2% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (7; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="tr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-DET.html">DET</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	Vergi	vergi	NOUN	NN	Number=Sing	2	nmod:poss	_	_
2	mükellefleri	mükellef	NOUN	NN	Number=Plur	5	nmod	_	_
3	için	için	ADP	IN	_	2	case	_	_
4	cevap	cevap	NOUN	NN	Number=Sing	5	obj	_	_
5	alma	al	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Ger	6	nmod:poss	_	_
6	becerisi	becer	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	_
7	çok	çok	ADV	RB	_	8	advmod	_	_
8	özlenecek	özle	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|Voice=Pass	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Woods	Woods	PROPN	PROPN	Number=Sing	3	obl	_	Proper=True
2	ile	ile	ADP	IN	_	1	case	_	_
3	yazışarak	yazış	ADV	CRB	Polarity=Pos	9	advcl	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	6	det	_	_
6	etimoloji	etimoloji	NOUN	NN	Number=Sing	8	obj	_	_
7	ortaya	orta	NOUN	NN	Case=Dat|Number=Sing	8	obl	_	_
8	çıkarmaya	çıkar	NOUN	VN	Aspect=Perf|Case=Dat|Mood=Ind|Tense=Pres|VerbForm=Ger	9	xcomp	_	_
9	çalıştım	çalış	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	Hayali	hayal	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	nsubj	_	_
2	burada	bura	PRON	PRD	Case=Loc|Number=Sing|Polarity=Pos	4	amod	_	_
3	ki	ki	ADP	JJ	_	2	case	_	_
4	kariyerini	kariyer	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	5	obj	_	_
5	sonlandırmak	sonlandır	NOUN	VN	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut	0	root	_	SpaceAfter=No
6	.	.	PUNCT	.	_	5	punct	_	_

~~~


