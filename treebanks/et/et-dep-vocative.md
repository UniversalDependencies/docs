---
layout: base
title:  'Statistics of vocative in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `vocative`

This relation is universal.

103 nodes (0%) are attached to their parents as `vocative`.

56 instances of `vocative` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.19417475728155.

The following 9 pairs of parts of speech are connected with `vocative`: <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (48; 47% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (26; 25% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (9; 9% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (8; 8% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="et-pos-ADV.html">ADV</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 vocative	color:blue
1	(	(	PUNCT	Z	_	3	punct	_	SpaceAfter=No
2	"	"	PUNCT	Z	_	3	punct	_	SpaceAfter=No
3	Palun	paluma	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	5	punct	_	_
5	maestro	maestro	NOUN	S	Case=Nom|Number=Sing	3	vocative	_	SpaceAfter=No
6	,	,	PUNCT	Z	_	8	punct	_	_
7	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
8	jätsin	jätma	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	_
9	maiuse	maius	NOUN	S	Case=Gen|Number=Sing	8	obj	_	_
10	teile	sina	PRON	P	Case=All|Number=Plur|Person=2|PronType=Prs	8	obl	_	SpaceAfter=No
11	!	!	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 vocative	color:blue
1	"	"	PUNCT	Z	_	6	punct	_	SpaceAfter=No
2	Hei	hei	INTJ	I	_	6	discourse	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	6	punct	_	_
4	Kristi	Kristi	PROPN	S	Case=Nom|Number=Sing	6	vocative	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	6	punct	_	_
6	kuule	kuulma	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	11	punct	_	_
8	et	et	SCONJ	J	_	11	mark	_	_
9	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
10	ei	ei	AUX	V	Mood=Ind|Polarity=Neg|VerbForm=Fin	11	aux	_	_
11	tea	teadma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	_	SpaceAfter=No
12	,	,	PUNCT	Z	_	15	punct	_	_
13	et	et	SCONJ	J	_	15	mark	_	_
14	sa	sina	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	15	nsubj	_	_
15	magad	magama	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	11	ccomp	_	_
16	vist	vist	ADV	D	_	15	advmod	_	_
17	autos	auto	NOUN	S	Case=Ine|Number=Sing	15	obl	_	SpaceAfter=No
18	"	"	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 vocative	color:blue
1	"	"	PUNCT	Z	_	5	punct	_	SpaceAfter=No
2	Mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	3	det	_	_
3	maakonnast	maakond	NOUN	S	Case=Ela|Number=Sing	0	root	_	_
4	sa	sina	PRON	P	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj:cop	_	_
5	oled	olema	AUX	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	SpaceAfter=No
6	,	,	PUNCT	Z	_	7	punct	_	_
7	laulupeoline	laulu_peo=line	NOUN	S	Case=Nom|Number=Sing	4	vocative	_	SpaceAfter=No
8	?	?	PUNCT	Z	_	5	punct	_	SpaceAfter=No
9	"	"	PUNCT	Z	_	5	punct	_	_
10	küsis	küsima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis	_	_
11	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	3	punct	_	_

~~~


