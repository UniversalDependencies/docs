---
layout: base
title:  'Statistics of nmod in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="tr_pud-dep-nmod-arg.html">nmod:arg</a></tt>, <tt><a href="tr_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

161 nodes (1%) are attached to their parents as `nmod`.

161 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.73291925465838.

The following 10 pairs of parts of speech are connected with `nmod`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (80; 50% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (28; 17% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (25; 16% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (10; 6% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (9; 6% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nmod	color:blue
1	Vergi	vergi	NOUN	NN	Number=Sing	2	compound	_	_
2	mükellefleri	mükellef	NOUN	NN	Number=Plur	5	nmod	_	_
3	için	için	ADP	IN	_	2	case	_	_
4	cevap	cevap	NOUN	NN	Number=Sing	5	obj	_	_
5	alma	al	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Ger	6	compound	_	_
6	becerisi	becer	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	_
7	çok	çok	ADV	RB	_	8	advmod	_	_
8	özlenecek	özle	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|Voice=Pass	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nmod	color:blue
1	Bu	bu	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	3	det	_	_
2	şehir	şehir	NOUN	NN	Number=Sing	3	compound	_	_
3	devlet	devlet	NOUN	NN	Case=Nom|Number=Sing	10	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	Sukhothai	Sukhothai	PROPN	PROPN	Number=Sing	8	nmod	_	Proper=True
6	ile	ile	ADP	IN	_	5	case	_	_
7	aynı	aynı	ADJ	JJ	Number=Sing	8	amod	_	_
8	dönemde	dönem	NOUN	NN	Case=Loc|Number=Sing	10	advmod	_	_
9	ortaya	orta	NOUN	NN	Case=Dat|Number=Sing	10	advmod	_	_
10	çıktı	çık	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nmod	color:blue
1	1882	1882	NUM	CD	Number=Sing	2	compound	_	_
2	yılında	yıl	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	obl:tmod	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	34	34	NUM	CD	Number=Sing	7	nummod	_	_
5	yangın	yangın	NOUN	NN	Number=Sing	6	compound	_	_
6	alarm	alarm	NOUN	NN	Number=Sing	7	compound	_	_
7	sinyali	sinyali	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	9	nmod	_	ToDo=nmod
8	ile	ile	ADP	IN	_	7	case	_	_
9	donatılmış	donat	ADJ	VJ	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	11	acl:relcl	_	_
10	telgraf	telgraf	NOUN	NN	Number=Sing	11	compound	_	_
11	sistemi	sistem	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	nsubj	_	_
12	faaliyete	faaliye	NOUN	NN	Case=Dat|Number=Sing	13	advmod	_	_
13	geçti	geç	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
14	.	.	PUNCT	.	_	13	punct	_	_

~~~


