---
layout: base
title:  'Statistics of nmod in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="tr_pud-dep-nmod-poss.html">nmod:poss</a></tt>.

191 nodes (1%) are attached to their parents as `nmod`.

191 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.37696335078534.

The following 15 pairs of parts of speech are connected with `nmod`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (81; 42% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (31; 16% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (27; 14% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (18; 9% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (10; 5% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (9; 5% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	Daha	daha	ADV	RB	_	2	advmod	_	_
2	önceleri	önce	ADV	RB	_	8	advmod	_	_
3	jetler	jet	NOUN	NN	Case=Nom|Number=Plur	8	nsubj	_	_
4	sadece	sadece	ADV	RB	_	7	advmod	_	_
5	blog	blog	NOUN	NN	Number=Sing	6	nmod:poss	_	_
6	yazarları	yazar	NOUN	NN	Number=Plur|Number[psor]=Sing|Person[psor]=3	7	nmod	_	_
7	tarafından	taraf	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Plur|Person[psor]=3	8	obl	_	_
8	görülürdü	görülür	VERB	VB	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod	color:blue
1	Bu	bu	PRON	PRI	Case=Nom|Definite=Def|Number=Sing|Polarity=Pos	9	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	yerleşimcilerin	yerleşimci	NOUN	NN	Case=Gen|Number=Plur	5	nsubj	_	_
4	bağımsızlıklarını	bağımsızlık	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Plur|Person[psor]=3	5	obj	_	_
5	kazanmaları	kazan	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Plur|Person[psor]=3|Tense=Pres|VerbForm=Ger	7	nmod	_	_
6	için	için	ADP	IN	_	5	case	_	_
7	gerekli	gerekli	ADJ	JJ	Number=Sing	9	amod	_	_
8	son	son	ADJ	JJ	Number=Sing	9	amod	_	_
9	darbe	darb	NOUN	NN	Number=Sing	0	root	_	_
10	ydi	i	AUX	AUX	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	9	cop	_	_
11	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nmod	color:blue
1	Bu	bu	DET	DT	Definite=Def|Number=Sing|Polarity=Pos	3	det	_	_
2	şehir	şehir	NOUN	NN	Number=Sing	3	compound	_	_
3	devlet	devlet	NOUN	NN	Case=Nom|Number=Sing	9	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	_	_
5	Sukhothai	Sukhothai	PROPN	PROPN	Number=Sing	8	nmod	_	Proper=True
6	ile	ile	ADP	IN	_	5	case	_	_
7	aynı	aynı	ADJ	JJ	Number=Sing	8	amod	_	_
8	dönemde	dönem	NOUN	NN	Case=Loc|Number=Sing	9	obl	_	_
9	ortaya	orta	NOUN	NN	Case=Dat|Number=Sing	0	root	_	_
10	çıktı	çık	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	9	compound	_	SpaceAfter=No
11	.	.	PUNCT	.	_	9	punct	_	_

~~~


