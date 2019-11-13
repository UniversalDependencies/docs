---
layout: base
title:  'Statistics of csubj:cop in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `csubj:cop`

This relation is a language-specific subtype of <tt><a href="et_edt-dep-csubj.html">csubj</a></tt>.

882 nodes (0%) are attached to their parents as `csubj:cop`.

823 instances of `csubj:cop` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.35827664399093.

The following 18 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (621; 70% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (169; 19% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (30; 3% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (15; 2% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (14; 2% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (7; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj:cop	color:blue
1	Kas	kas	ADV	D	_	4	advmod	_	_
2	pole	olema	AUX	V	Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	mitte	mitte	ADV	D	Polarity=Neg	4	advmod	_	_
4	olulisem	olulisem	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	7	punct	_	_
6	et	et	SCONJ	J	_	7	mark	_	_
7	näevad	nägema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj:cop	_	_
8	mind	mina	PRON	P	Case=Par|Number=Sing|Person=1|PronType=Prs	7	obj	_	_
9	praegu	praegu	ADV	D	_	7	advmod	_	_
10	elusast	elus	ADJ	A	Case=Ela|Degree=Pos|Number=Sing	11	amod	_	_
11	peast	pea	NOUN	S	Case=Ela|Number=Sing	7	obl	_	SpaceAfter=No
12	?	?	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj:cop	color:blue
1	Huvitav	huvitav	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	amod	_	_
2	küsimus	küsimus	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
3	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	8	punct	_	_
5	millest	mis	PRON	P	Case=Ela|Number=Sing|PronType=Int,Rel	8	obl	_	_
6	need	see	DET	P	Case=Nom|Number=Plur|PronType=Dem	7	det	_	_
7	kirjad	kiri	NOUN	S	Case=Nom|Number=Plur	8	nsubj	_	_
8	jutustavad	jutustama	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj:cop	_	SpaceAfter=No
9	?	?	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 csubj:cop	color:blue
1	“	“	PUNCT	Z	_	6	punct	_	_
2	Paari	paar	NUM	N	Case=Gen|Number=Sing|NumForm=Letter|NumType=Card	3	nummod	_	_
3	kuu	kuu	NOUN	S	Case=Gen|Number=Sing	6	obl	_	_
4	pärast	pärast	ADP	K	AdpType=Post	3	case	_	_
5	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	rohkem	rohkem	ADV	D	_	0	root	_	_
7	rääkida	rääkima	VERB	V	VerbForm=Inf	6	csubj:cop	_	SpaceAfter=No
8	,	,	PUNCT	Z	_	6	punct	_	_
9	”	”	PUNCT	Z	_	6	punct	_	_
10	lubas	lubama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	parataxis	_	_
11	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	6	punct	_	_

~~~


