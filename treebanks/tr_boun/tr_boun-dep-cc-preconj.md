---
layout: base
title:  'Statistics of cc:preconj in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="tr_boun-dep-cc.html">cc</a></tt>.

153 nodes (0%) are attached to their parents as `cc:preconj`.

151 instances of `cc:preconj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.40522875816993.

The following 10 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (75; 49% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (45; 29% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (14; 9% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (7; 5% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (4; 3% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-DET.html">DET</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cc:preconj	color:blue
1	Her	her	DET	Det	_	3	det	_	_
2	yarım	yarım	ADJ	Adj	_	3	compound	_	_
3	dakikada	dakika	NOUN	_	Case=Loc|Number=Sing|Person=3	4	obl	_	_
4	bir	bir	DET	Indef	_	5	obl	_	_
5	dilenci	dilenci	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
6	ya	ya	CCONJ	Conj	_	9	cc:preconj	_	_
7	da	da	CCONJ	Conj	_	6	fixed	_	_
8	seyyar	seyyar	NOUN	_	Case=Nom|Number=Sing|Person=3	9	amod	_	_
9	satıcı	satıcı	NOUN	_	Case=Nom|Number=Sing|Person=3	5	conj	_	SpaceAfter=No
10	...	...	PUNCT	TDots	_	9	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Ne	ne	CCONJ	Conj	_	3	cc:preconj	_	_
2	yol	yol	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
3	bitiyor	bit	VERB	_	Aspect=Prog|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_
4	ne	ne	CCONJ	Conj	_	5	cc:preconj	_	_
5	yeşil	yeşil	ADJ	Adj	_	3	orphan	_	_
6	ne	ne	CCONJ	Conj	_	8	cc:preconj	_	_
7	de	de	CCONJ	Conj	_	6	fixed	_	_
8	mavi	mavi	ADJ	Adj	_	5	conj	_	SpaceAfter=No
9	.	.	PUNCT	Stop	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	Bu	bu	PRON	Demons	Case=Nom|Number=Sing|Person=3|PronType=Dem	9	nsubj	_	SpaceAfter=No
2	,	,	PUNCT	Comma	_	9	punct	_	_
3	hem	hem	CCONJ	_	_	4	cc:preconj	_	_
4	Facebook'ta	Facebook	PROPN	_	Case=Loc|Number=Sing|Person=3	9	obl	_	SpaceAfter=No
5	,	,	PUNCT	Comma	_	8	punct	_	_
6	hem	hem	CCONJ	_	_	8	cc:preconj	_	_
7	de	de	CCONJ	_	_	8	cc	_	_
8	MSM'de	MSM	PROPN	Abr	Case=Loc|Number=Sing|Person=3	4	conj	_	_
9	yaşanabiliyor	yaşa	VERB	_	Aspect=Imp|Mood=Pot|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|Voice=Pass	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Stop	_	9	punct	_	SpacesAfter=\n

~~~


