---
layout: base
title:  'Statistics of parataxis in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `parataxis`

This relation is universal.

74 nodes (0%) are attached to their parents as `parataxis`.

69 instances of `parataxis` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 11.9189189189189.

The following 15 pairs of parts of speech are connected with `parataxis`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (21; 28% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (15; 20% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (7; 9% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (7; 9% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (6; 8% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 parataxis	color:blue
1	Ben	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|Polarity=Pos	6	nsubj	_	_
2	zaten	_	ADV	RB	_	6	advmod	_	_
3	her	_	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	4	det	_	_
4	şekilde	_	NOUN	NN	Case=Loc|Number=Sing	6	advmod	_	_
5	hapse	_	NOUN	NN	Case=Dat|Number=Sing	6	advmod	_	_
6	gireceğim	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut	8	parataxis	_	SpaceAfter=No
7	,	_	PUNCT	,	_	6	punct	_	_
8	umarım	_	VERB	VB	Number=Sing|Person=1|Tense=Aor	0	root	_	_
9	buna	_	PRON	PRD	Case=Dat|Number=Sing|Polarity=Pos	10	advmod	_	_
10	değmiştir	_	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	8	ccomp	_	SpaceAfter=No
11	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 parataxis	color:blue
1	Birleşik	_	ADJ	JJ	Number=Sing	2	amod	_	Proper=True
2	Devletler	_	NOUN	NN	Case=Nom|Number=Plur	5	nsubj	_	Proper=True|SpaceAfter=No
3	,	_	PUNCT	,	_	2	punct	_	_
4	Küba'yı	_	PROPN	PROPN	Case=Acc|Number=Sing	5	obj	_	Proper=True
5	özgürleştirdi	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Cau	10	parataxis	_	_
6	(	_	PUNCT	(	_	10	punct	_	SpaceAfter=No
7	ABD	_	PROPN	PROPN	Number=Sing	8	compound	_	Proper=True
8	Ordusu'nun	_	NOUN	NN	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	nmod:poss	_	_
9	işgali	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	10	compound	_	_
10	sonrasında	_	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	SpaceAfter=No
11	)	_	PUNCT	)	_	10	punct	_	SpaceAfter=No
12	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 4 parataxis	color:blue
1	Harika	_	ADJ	JJ	Number=Sing	3	amod	_	_
2	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	3	det	_	_
3	ekibimiz	_	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=1	4	nsubj	_	_
4	var	_	ADJ	JJ	Polarity=Pos	12	parataxis	_	_
5	ve	_	CCONJ	CCONJ	_	12	cc	_	_
6	bu	_	PRON	PRD	Case=Nom|Definite=Def|Number=Sing|Polarity=Pos	12	nsubj	_	_
7	daha	_	ADV	RB	_	8	advmod	_	_
8	ileriye	_	NOUN	NN	Case=Dat|Number=Sing	9	advmod	_	_
9	gidebilmemiz	_	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Abil|Number[psor]=Plur|Person[psor]=1|Tense=Pres|VerbForm=Ger	12	xcomp	_	_
10	için	_	ADP	IN	_	9	case	_	_
11	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	12	det	_	_
12	fırsat	_	NOUN	NN	Number=Sing	0	root	_	SpaceAfter=No
13	.	_	PUNCT	.	_	12	punct	_	_

~~~


