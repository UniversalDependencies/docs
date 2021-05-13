---
layout: base
title:  'Statistics of mark in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `mark`

This relation is universal.

632 nodes (0%) are attached to their parents as `mark`.

587 instances of `mark` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.44620253164557.

The following 18 pairs of parts of speech are connected with `mark`: <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-SCONJ.html">SCONJ</a></tt> (245; 39% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-ADP.html">ADP</a></tt> (80; 13% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-ADP.html">ADP</a></tt> (72; 11% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-CCONJ.html">CCONJ</a></tt> (71; 11% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-ADP.html">ADP</a></tt> (48; 8% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-SCONJ.html">SCONJ</a></tt> (27; 4% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-SCONJ.html">SCONJ</a></tt> (26; 4% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-CCONJ.html">CCONJ</a></tt> (22; 3% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-SCONJ.html">SCONJ</a></tt> (9; 1% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-CCONJ.html">CCONJ</a></tt> (9; 1% instances), <tt><a href="tr_kenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_kenet-pos-CCONJ.html">CCONJ</a></tt> (8; 1% instances), <tt><a href="tr_kenet-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_kenet-pos-SCONJ.html">SCONJ</a></tt> (5; 1% instances), <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="tr_kenet-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr_kenet-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_kenet-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-DET.html">DET</a></tt>-<tt><a href="tr_kenet-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="tr_kenet-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_kenet-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 mark	color:blue
1	O	o	PRON	_	PronType=Dem	4	det	_	_
2	kadar	kadar	ADP	_	_	1	case	_	_
3	kaba	kap	NOUN	_	Case=Dat|Number=Sing|Person=3	4	compound	_	_
4	saba	saba	NOUN	_	Case=Nom|Number=Sing|Person=3	10	amod	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	öyle	öyle	ADJ	_	_	7	advmod	_	_
7	dev	dev	ADJ	_	_	10	nmod	_	_
8	gibi	gibi	ADP	_	_	7	case	_	_
9	bir	bir	DET	_	Definite=Ind	10	det	_	_
10	adamdı	adam	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
11	ki	ki	SCONJ	_	_	10	mark	_	_
12	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 mark	color:blue
1	Araba	araba	NOUN	_	Case=Nom|Number=Sing|Person=3	2	nsubj	_	_
2	yürürken	yürü	ADV	_	_	9	advcl	_	_
3	karşımda	karşı	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	9	obl	_	_
4	divan	divan	NOUN	_	Case=Nom|Number=Sing|Person=3	5	nsubj	_	_
5	durur	dur	VERB	_	Aspect=Hab|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	advcl	_	_
6	gibi	gibi	ADP	_	_	5	mark	_	_
7	el	el	NOUN	_	Case=Nom|Number=Sing|Person=3	8	compound	_	_
8	pençe	pençe	NOUN	_	Case=Nom|Number=Sing|Person=3	9	compound	_	_
9	duruyor	dur	VERB	_	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 mark	color:blue
1	Çocuk	çocuk	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	satıcıyı	satıcı	NOUN	_	Case=Acc|Number=Sing|Person=3	4	obj	_	_
4	görünce	görü	NOUN	_	Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	9	advcl	_	_
5	şeker	şeker	NOUN	_	Case=Nom|Number=Sing|Person=3	7	compound	_	_
6	de	de	CCONJ	_	_	5	mark	_	_
7	şeker	şeker	NOUN	_	Case=Nom|Number=Sing|Person=3	9	ccomp	_	_
8	diye	diye	ADP	_	_	7	mark	_	_
9	tutturdu	tuttur	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


