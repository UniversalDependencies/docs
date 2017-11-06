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
1	Vergi	_	NOUN	NN	Number=Sing	2	compound	_	_
2	mükellefleri	_	NOUN	NN	Number=Plur	5	nmod	_	_
3	için	_	ADP	IN	_	2	case	_	_
4	cevap	_	NOUN	NN	Number=Sing	5	obj	_	_
5	alma	_	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Ger	6	compound	_	_
6	becerisi	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	8	nsubj	_	_
7	çok	_	ADV	RB	_	8	advmod	_	_
8	özlenecek	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|Voice=Pass	0	root	_	SpaceAfter=No
9	.	_	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nmod	color:blue
1	Bu	_	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	3	det	_	_
2	şehir	_	NOUN	NN	Number=Sing	3	compound	_	_
3	devlet	_	NOUN	NN	Case=Nom|Number=Sing	10	nsubj	_	SpaceAfter=No
4	,	_	PUNCT	,	_	3	punct	_	_
5	Sukhothai	_	PROPN	PROPN	Number=Sing	8	nmod	_	Proper=True
6	ile	_	ADP	IN	_	5	case	_	_
7	aynı	_	ADJ	JJ	Number=Sing	8	amod	_	_
8	dönemde	_	NOUN	NN	Case=Loc|Number=Sing	10	advmod	_	_
9	ortaya	_	NOUN	NN	Case=Dat|Number=Sing	10	advmod	_	_
10	çıktı	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
11	.	_	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nmod	color:blue
1	1882	_	NUM	CD	Number=Sing	2	compound	_	_
2	yılında	_	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	obl:tmod	_	SpaceAfter=No
3	,	_	PUNCT	,	_	2	punct	_	_
4	34	_	NUM	CD	Number=Sing	7	nummod	_	_
5	yangın	_	NOUN	NN	Number=Sing	6	compound	_	_
6	alarm	_	NOUN	NN	Number=Sing	7	compound	_	_
7	sinyali	_	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	9	nmod	_	ToDo=nmod
8	ile	_	ADP	IN	_	7	case	_	_
9	donatılmış	_	ADJ	VJ	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Pass	11	acl:relcl	_	_
10	telgraf	_	NOUN	NN	Number=Sing	11	compound	_	_
11	sistemi	_	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	13	nsubj	_	_
12	faaliyete	_	NOUN	NN	Case=Dat|Number=Sing	13	advmod	_	_
13	geçti	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
14	.	_	PUNCT	.	_	13	punct	_	_

~~~


