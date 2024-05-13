---
layout: base
title:  'Statistics of iobj in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `iobj`

This relation is universal.

138 nodes (1%) are attached to their parents as `iobj`.

138 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.14492753623188.

The following 14 pairs of parts of speech are connected with `iobj`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (55; 40% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (17; 12% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (16; 12% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (14; 10% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (12; 9% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (5; 4% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (4; 3% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Sesini	ses	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	obj	_	_
2	gerçek	gerçek	NOUN	NN	Number=Sing	3	amod	_	_
3	anlamda	anlam	NOUN	NN	Case=Loc|Number=Sing	6	obl	_	_
4	tüm	tüm	DET	DT	Definite=Def|Polarity=Pos	5	det	_	_
5	dünyaya	dünya	NOUN	NN	Case=Dat|Number=Sing	6	iobj	_	_
6	duyurdu	duy	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	8	ccomp	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_
8	dedi	de	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	_
9	Leive	Leive	PROPN	PROPN	Number=Sing	8	nsubj	_	Proper=True|SpaceAfter=No
10	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 iobj	color:blue
1	Harabelerin	Harabe	NOUN	NN	Case=Gen|Number=Plur	2	nmod:poss	_	_
2	üzerine	üzer	NOUN	NN	Case=Dat|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	iobj	_	_
3	daha	daha	ADV	RB	_	4	advmod	_	_
4	sonra	sonra	ADV	RB	_	7	advmod	_	_
5	başka	başka	ADJ	JJ	Number=Sing	6	amod	_	_
6	yapılar	yapı	NOUN	NN	Case=Nom|Number=Plur	7	nsubj	_	_
7	inşa	inşa	NOUN	NN	Number=Sing	0	root	_	_
8	edildi	et	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	7	compound:lvc	_	SpaceAfter=No
9	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 iobj	color:blue
1	Bu	bu	PRON	PRI	Case=Nom|Definite=Def|Number=Sing|Polarity=Pos	4	nsubj	_	_
2	siyasi	siyasi	ADJ	JJ	Number=Sing	4	amod	_	_
3	bir	bir	DET	DT	Definite=Ind|Polarity=Pos	4	det	_	_
4	süreç	süreç	NOUN	NN	Number=Sing	11	ccomp	_	_
5	ve	ve	CCONJ	CCONJ	_	9	cc	_	_
6	ben	ben	PRON	PRP	Case=Nom|Number=Sing|Person=1|Polarity=Pos	9	nsubj	_	_
7	bulunmamaya	bulun	VERB	VN	Aspect=Perf|Case=Dat|Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Vnoun	9	iobj	_	_
8	kararı	karar	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obj	_	_
9	verdim	ver	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past	4	conj	_	SpaceAfter=No
10	,	,	PUNCT	,	_	9	punct	_	_
11	demişti	de	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Pqp	0	root	_	SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


