---
layout: base
title:  'Statistics of nummod in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `nummod`

This relation is universal.

207 nodes (1%) are attached to their parents as `nummod`.

207 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16908212560386.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (161; 78% instances), <tt><a href="tr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (20; 10% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (16; 8% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="tr_pud-pos-X.html">X</a></tt>-<tt><a href="tr_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Maksimum	Maksimum	ADJ	JJ	Number=Sing	2	amod	_	_
2	miktar	miktar	NOUN	NN	Case=Nom|Number=Sing	6	nsubj	_	_
3	kişi	kişi	NOUN	NN	Number=Sing	4	compound	_	_
4	başı	baş	NOUN	NN	Number=Sing|Number[psor]=Sing|Person[psor]=3	6	compound	_	_
5	5.000	5.000	NUM	CD	Number=Sing	6	nummod	_	_
6	dolar	do	NOUN	NN	Number=Sing	0	root	_	_
7	dır	i	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
8	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nummod	color:blue
1	Lahor'da	Lahor	PROPN	PROPN	Case=Loc|Number=Sing	14	advmod	_	Proper=True|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	Kasım	kasım	NOUN	NN	Number=Sing	4	compound	_	_
4	1886	1886	NUM	CD	Number=Sing	8	compound	_	_
5	ile	ile	CCONJ	CCONJ	_	7	cc	_	_
6	Haziran	Haziran	NOUN	NN	Number=Sing	7	compound	_	_
7	1887	1887	NUM	CD	Number=Sing	4	conj	_	_
8	tarihleri	tarih	NOUN	NN	Number=Plur|Number[psor]=Plur|Person[psor]=3	9	compound	_	_
9	arasında	ara	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	14	obl:tmod	_	_
10	Gazette'de	Gazette	PROPN	PROPN	Case=Loc|Number=Sing	14	advmod	_	Proper=True
11	otuz	otuz	NUM	CD	Number=Sing	12	nummod	_	_
12	dokuz	dokuz	NUM	CD	Number=Sing	13	nummod	_	_
13	hikaye	hikaye	NOUN	NN	Case=Nom|Number=Sing	14	nsubj	_	_
14	çıktı	çık	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
15	.	.	PUNCT	.	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	İki	iki	NUM	CD	Number=Sing|NumType=Ord	2	nummod	_	_
2	minareli	_	ADJ	JJ	Number=Sing	5	amod	_	_
3	küçük	küçük	ADJ	JJ	Number=Sing	5	amod	_	_
4	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	5	det	_	_
5	kasaba	kasaba	NOUN	NN	Number=Sing	8	nsubj	_	_
6	yanımızdan	yanı	NOUN	NN	Case=Abl|Number=Sing	8	advmod	_	_
7	geçip	geç	ADV	CRB	Polarity=Pos	8	advcl	_	_
8	gidiyor	git	VERB	VB	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


