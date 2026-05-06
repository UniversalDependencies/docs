---
layout: base
title:  'Statistics of reparandum in UD_Turkish-Kenet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Kenet: Relations: `reparandum`

This relation is universal.

7 nodes (0%) are attached to their parents as `reparandum`.

5 instances of `reparandum` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.57142857142857.

The following 3 pairs of parts of speech are connected with `reparandum`: <tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (5; 71% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_kenet-pos-VERB.html">VERB</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 reparandum	color:blue
1	Bu	bu	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	8	nsubj	_	_
2	onun	o	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	nmod	_	_
3	ilacı	ilaç	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obl	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	tılsımı	tılsım	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	reparandum	_	_
6	gibi	gibi	ADP	_	_	5	case	_	_
7	bir	bir	DET	_	Definite=Ind|PronType=Art	8	det	_	_
8	şey	şey	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 7 reparandum	color:blue
1	Bütün	bütün	ADJ	_	_	2	nmod	_	_
2	günlerimiz	günle	VERB	_	Case=Nom|Evident=Fh|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	7	obl	_	_
3	için	için	ADP	_	_	2	case	_	_
4	kendimize	kendi	PRON	_	Case=Dat|Number=Plur|Number[psor]=Plur|Person=1|Person[psor]=1|PronType=Prs|Reflex=Yes	7	obl	_	_
5	bir	bir	DET	_	Definite=Ind|PronType=Art	6	det	_	_
6	yol	yol	NOUN	_	Case=Nom|Number=Sing	7	obj	_	_
7	çizer	çizer	NOUN	_	Case=Nom|Number=Sing	15	reparandum	_	_
8	,	,	PUNCT	_	_	15	punct	_	_
9	sonra	sonra	ADV	_	_	15	advmod	_	_
10	her	her	DET	_	Definite=Def|PronType=Ind	11	det	_	_
11	gün	gün	NOUN	_	Case=Nom|Number=Sing	15	obl	_	_
12	bunun	bu	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Dem	13	nmod	_	_
13	aksine	aksine	ADV	_	_	15	obj	_	_
14	hareket	hareket	NOUN	_	Case=Nom|Number=Sing	15	compound	_	_
15	ederiz	et	VERB	_	Evident=Fh|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
16	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 reparandum	color:blue
1	Soruşum	sor	VERB	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1|Polarity=Pos|VerbForm=Vnoun	4	nsubj	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	soruşlarım	sor	VERB	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=1|Polarity=Pos|VerbForm=Vnoun	1	reparandum	_	_
4	kendim	kendi	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=1|Person[psor]=1|PronType=Prs|Reflex=Yes	9	parataxis	_	_
5	için	için	ADP	_	_	4	case	_	_
6	değil	değil	AUX	_	Polarity=Neg	4	aux	_	_
7	,	,	PUNCT	_	_	4	punct	_	_
8	vallah	vallahi	NOUN	_	Case=Nom|Number=Sing	9	amod	_	_
9	kendim	kendi	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=1|Person[psor]=1|PronType=Prs|Reflex=Yes	0	root	_	_
10	için	için	ADP	_	_	9	case	_	_
11	değil	değil	AUX	_	Polarity=Neg	9	aux	_	_
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


