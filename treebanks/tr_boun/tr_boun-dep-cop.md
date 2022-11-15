---
layout: base
title:  'Statistics of cop in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `cop`

This relation is universal.

2909 nodes (2%) are attached to their parents as `cop`.

2907 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.1718803712616.

The following 11 pairs of parts of speech are connected with `cop`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (1787; 61% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (726; 25% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (252; 9% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (63; 2% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (41; 1% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (23; 1% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="tr_boun-pos-DET.html">DET</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="tr_boun-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="tr_boun-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_boun-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cop	color:blue
1	Fakülteyi	fakülte	NOUN	_	Case=Acc|Number=Sing|Person=3	2	obj	_	_
2	bitirenler	bitir	VERB	Ptcp	Polarity=Pos|VerbForm=Part	6	csubj	_	_
3	en	en	ADV	_	_	4	advmod	_	_
4	uçtan	uç	NOUN	_	Case=Abl|Number=Sing|Person=3	6	obl	_	_
5	göreve	görev	NOUN	_	Case=Dat|Number=Sing|Person=3	6	obj	_	_
6	başlıyorlar	başla	VERB	Ptcp	Aspect=Prog|Evident=Nfh|Number=Plur|Person=3|Polarity=Pos|VerbForm=Part	0	root	_	_
7	mış	y	AUX	Zero	Evident=Nfh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	6	cop	_	_
8	.	.	PUNCT	Stop	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 cop	color:blue
1	Ama	ama	CCONJ	Conj	_	9	cc	_	_
2	Ada	ada	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nmod:poss	_	_
3	vapuruna	vapur	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	obl	_	SpaceAfter=No
4	,	,	PUNCT	Comma	_	9	punct	_	_
5	üç	üç	NUM	ANum	NumType=Card	9	nummod	_	SpaceAfter=No
6	,	,	PUNCT	Comma	_	7	punct	_	_
7	dört	dört	NUM	ANum	NumType=Card	5	conj	_	_
8	saat	saat	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
9	vardı	var	NOUN	Exist	Case=Nom|Number=Sing|Person=3|Polarity=Pos	0	root	_	_
10	dı	y	AUX	Zero	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Tense=Past	9	cop	_	_
11	.	.	PUNCT	Stop	_	9	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cop	color:blue
1	Saddam	Saddam	PROPN	_	Case=Nom|Number=Sing|Person=3	10	nsubj	_	_
2	Hüseyin	Hüseyin	PROPN	_	Case=Nom|Number=Sing|Person=3	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	Comma	_	10	punct	_	_
4	42	42	NUM	ANum	NumType=Card	5	nummod	_	_
5	yaşında	yaş	ADJ	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	10	advcl	_	_
6	iken	i	AUX	_	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part	5	cop	_	_
7	bir	bir	DET	Indef	_	8	det	_	_
8	darbeyle	darbe	NOUN	_	Case=Ins|Number=Sing|Person=3	10	obl	_	_
9	iktidara	iktidar	NOUN	_	Case=Dat|Number=Sing|Person=3	10	obj	_	_
10	el	el	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
11	koydu	koy	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	10	compound	_	SpaceAfter=No
12	.	.	PUNCT	Stop	_	10	punct	_	SpacesAfter=\n

~~~


