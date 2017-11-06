---
layout: base
title:  'Statistics of parataxis in UD_North_Sami'
udver: '2'
---

## Treebank Statistics: UD_North_Sami: Relations: `parataxis`

This relation is universal.

149 nodes (1%) are attached to their parents as `parataxis`.

144 instances of `parataxis` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.3489932885906.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="sme-pos-VERB.html">VERB</a></tt>-<tt><a href="sme-pos-VERB.html">VERB</a></tt> (116; 78% instances), <tt><a href="sme-pos-VERB.html">VERB</a></tt>-<tt><a href="sme-pos-NOUN.html">NOUN</a></tt> (9; 6% instances), <tt><a href="sme-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sme-pos-VERB.html">VERB</a></tt> (8; 5% instances), <tt><a href="sme-pos-VERB.html">VERB</a></tt>-<tt><a href="sme-pos-ADJ.html">ADJ</a></tt> (8; 5% instances), <tt><a href="sme-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="sme-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sme-pos-VERB.html">VERB</a></tt> (3; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	Stáhta	stáhta	NOUN	N	Case=Nom|Number=Sing	3	nsubj	_	_
2	lea	leat	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	dadjan	dadjat	VERB	V	Aspect=Perf|VerbForm=Part	0	root	_	_
4	don	don	PRON	Pron	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
5	galggat	galgat	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
6	duosa	duot	PRON	Pron	Case=Ill|Number=Sing|PronType=Dem	5	obl	_	SpaceAfter=No
7	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 parataxis	color:blue
1	Eŋgel	eŋgel	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	_
2	celkkii	cealkit	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	munnje	mun	PRON	Pron	Case=Ill|Number=Sing|Person=1|PronType=Prs	2	obl	_	SpaceAfter=No
4	:	:	PUNCT	CLB	_	2	punct	_	_
5	Dát	dát	PRON	Pron	Case=Nom|Number=Plur|PronType=Dem	10	nsubj	_	_
6	leat	leat	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
7	luohtehahtti	luohtehahtti	ADJ	A	_	10	amod	_	_
8	ja	ja	CCONJ	CC	_	7	cc	_	_
9	duohta	duohta	ADJ	A	_	7	conj	_	_
10	sánit	sátni	NOUN	N	Case=Nom|Number=Plur	2	parataxis	_	SpaceAfter=No
11	.	.	PUNCT	CLB	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 parataxis	color:blue
1	Liná	Liná	PROPN	N	Case=Nom|Number=Sing	3	nsubj	_	_
2	lei	leat	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	_
3	giitevaš	giitevaš	ADJ	A	Case=Nom|Number=Sing	0	root	_	_
4	go	go	SCONJ	CS	_	6	mark	_	_
5	Áilu	Áilu	PROPN	N	Case=Nom|Number=Sing	6	nsubj	_	_
6	bođii	boahtit	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	advcl	_	SpaceAfter=No
7	,	,	PUNCT	CLB	_	6	punct	_	_
8	son	son	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
9	beasai	beassat	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	aux	_	_
10	vázzát	vázzát	VERB	V	VerbForm=Inf	3	parataxis	_	_
11	eret	eret	ADV	Adv	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	CLB	_	3	punct	_	_

~~~


