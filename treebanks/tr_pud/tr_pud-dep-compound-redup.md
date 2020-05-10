---
layout: base
title:  'Statistics of compound:redup in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="tr_pud-dep-compound-lvc.html">compound:lvc</a></tt>.

9 nodes (0%) are attached to their parents as `compound:redup`.

9 instances of `compound:redup` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `compound:redup`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt> (3; 33% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (2; 22% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (2; 22% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 compound:redup	color:blue
1	Hakim	hak	ADJ	JJ	Number=Sing	4	acl	_	_
2	olduğunuz	ol	AUX	VJ	Number=Sing|Number[psor]=Plur|Person[psor]=2|Polarity=Pos	1	cop	_	_
3	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	4	det	_	_
4	oyunda	oyun	NOUN	NN	Case=Loc|Number=Sing	7	obl	_	_
5	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	6	det	_	_
6	kez	kez	NOUN	NN	Number=Sing	7	obl	_	_
7	berabere	beraber	NOUN	NN	Case=Dat|Number=Sing	9	csubj	_	_
8	kalmak	kal	VERB	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number=Sing|Person=3|Tense=Fut	7	compound:lvc	_	_
9	kolay	kolay	ADJ	JJ	Number=Sing	0	root	_	_
10	dır	i	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	9	cop	_	_
11	,	,	PUNCT	,	_	20	punct	_	_
12	ancak	ancak	ADV	RB	_	20	cc	_	_
13	arka	arka	NOUN	NN	Number=Sing	17	obl	_	_
14	arkaya	arka	NOUN	NN	Case=Dat|Number=Sing	13	compound:redup	_	_
15	üç	üç	NUM	CD	Number=Sing	16	nummod	_	_
16	kez	kez	NOUN	NN	Number=Sing	17	obl	_	_
17	berabere	beraber	NOUN	NN	Case=Dat|Number=Sing	20	csubj	_	_
18	kalmak	kal	VERB	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number=Sing|Person=3|Tense=Fut	17	compound:lvc	_	_
19	zayıflık	zayıflık	NOUN	NN	Number=Sing	20	nmod:poss	_	_
20	göstergesi	gösterge	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	9	conj	_	_
21	dir	i	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	20	cop	_	_
22	.	.	PUNCT	.	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 compound:redup	color:blue
1	Japonya	Japonya	PROPN	PROPN	Number=Sing	2	nmod:poss	_	Proper=True
2	dışında	dış	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	19	obl	_	SpaceAfter=No
3	,	,	PUNCT	,	_	2	punct	_	_
4	İmparatorlar	İmparator	NOUN	NN	Number=Plur	19	nsubj	_	_
5	Shōwa'dan	Shōwa	PROPN	PROPN	Case=Abl|Number=Sing	6	obl	_	Proper=True
6	başlayarak	başla	ADV	CRB	Polarity=Pos	19	advcl	_	_
7	imparatorlara	imparator	NOUN	NN	Case=Dat|Number=Plur	15	obj	_	SpaceAfter=No
8	,	,	PUNCT	,	_	7	punct	_	_
9	hem	hem	CCONJ	CCONJ	_	10	cc:preconj	_	ToDo=ex-adp-child
10	yaşarken	yaşa	ADV	CRB	Polarity=Pos	15	advcl	_	_
11	hem	hem	CCONJ	CCONJ	_	13	cc	_	ToDo=ex-adp-child
12	de	de	ADV	RB	_	11	fixed	_	_
13	ölümlerinden	ölüm	NOUN	NN	Case=Abl|Number=Plur|Number[psor]=Sing|Person[psor]=3	10	conj	_	_
14	sonra	sonra	ADP	IN	_	13	case	_	_
15	verilen	ver	ADJ	VJ	Number=Sing|Polarity=Pos	16	acl	_	_
16	adlara	ad	NOUN	NN	Case=Dat|Number=Plur	19	obj	_	_
17	sık	sık	ADV	RB	_	19	advmod	_	_
18	sık	sık	ADV	RB	_	17	compound:redup	_	_
19	atıfta	atıf	NOUN	NN	Case=Loc|Number=Sing	0	root	_	_
20	bulunur	bulun	VERB	VB	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Tense=Pres	19	compound	_	SpaceAfter=No
21	.	.	PUNCT	.	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 compound:redup	color:blue
1	M.Ö.	M.ö.	NOUN	NN	Number=Sing	3	compound	_	_
2	8.	_	NUM	CD	Number=Sing|NumType=Ord	3	amod	_	_
3	yüzyıldan	yüzyıl	NOUN	NN	Case=Abl|Number=Sing	9	obl	_	_
4	itibaren	itibaren	ADP	IN	_	3	case	_	_
5	şehir	şehir	NOUN	NN	Number=Sing	6	nmod:poss	_	_
6	devletleri	devlet	NOUN	NN	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=3	9	nsubj	_	_
7	ortaya	orta	NOUN	NN	Case=Dat|Number=Sing	8	obl	_	_
8	çıkmaya	çık	NOUN	VN	Aspect=Perf|Case=Dat|Mood=Ind|Tense=Pres|VerbForm=Ger	9	ccomp	_	_
9	başlamıştır	başla	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Gen|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
10	:	:	PUNCT	:	_	9	punct	_	_
11	siyasi	siyasi	ADJ	JJ	Number=Sing	12	amod	_	_
12	sistemleri	sistem	NOUN	NN	Case=Nom|Number=Plur|Number[psor]=Plur|Person[psor]=3	13	nsubj	_	_
13	olan	ol	ADJ	VJ	Number=Sing|Polarity=Pos	19	acl	_	_
14	küçük	küçük	ADJ	JJ	Number=Sing	19	acl	_	_
15	ve	ve	CCONJ	CCONJ	_	18	cc	_	_
16	kendi	kendi	PRON	PRR	Number=Sing|Reflex=Yes	18	obj	_	_
17	kendisini	kendi	PRON	PRR	Case=Acc|Number=Sing|Person=3|Reflex=Yes	16	compound:redup	_	_
18	yöneten	yönet	ADJ	VJ	Number=Sing|Polarity=Pos	14	conj	_	_
19	bölgeler	bölge	NOUN	NN	Number=Plur	9	conj	_	SpaceAfter=No
20	.	.	PUNCT	.	_	19	punct	_	_

~~~


