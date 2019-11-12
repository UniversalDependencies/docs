---
layout: base
title:  'Statistics of det in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `det`

This relation is universal.

6878 nodes (2%) are attached to their parents as `det`.

6732 instances of `det` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37583599883687.

The following 11 pairs of parts of speech are connected with `det`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (6355; 92% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (207; 3% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (99; 1% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (79; 1% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (68; 1% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (36; 1% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (25; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 det	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 det	color:blue
1	Ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	pole	olema	AUX	V	Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	ammu	ammu	ADV	D	_	4	advmod	_	_
4	lugenud	lugema	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	nii	nii	ADV	D	_	6	advmod	_	_
6	vihkavat	vihkav	ADJ	A	Case=Par|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	7	acl	_	_
7	esseed	essee	NOUN	S	Case=Par|Number=Sing	4	obj	_	_
8	kui	kui	SCONJ	J	_	11	mark	_	_
9	see	see	DET	P	Case=Nom|Number=Sing|PronType=Dem	11	det	_	_
10	Kaplinski	Kaplinski	PROPN	S	Case=Gen|Number=Sing	11	nmod	_	_
11	oma	oma	PRON	P	Case=Nom|Number=Sing|Poss=Yes|PronType=Prs	7	advcl	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 det	color:blue
1	Näiteks	näiteks	ADV	D	_	2	advmod	_	_
2	minul	mina	PRON	P	Case=Ade|Number=Sing|Person=1|PronType=Prs	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z	_	7	punct	_	_
4	ja	ja	CCONJ	J	_	7	cc	_	_
5	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
6	ei	ei	AUX	V	Polarity=Neg	7	aux	_	_
7	rahunenudki	rahunema	VERB	V	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
8	enne	enne	ADV	D	_	7	advmod	_	SpaceAfter=No
9	,	,	PUNCT	Z	_	13	punct	_	_
10	kui	kui	SCONJ	J	_	13	mark	_	_
11	ühe	üks	NUM	N	Case=Gen|Number=Sing|NumForm=Letter|NumType=Card	13	obj	_	_
12	sellise	selline	DET	P	Case=Gen|Number=Sing|PronType=Dem	11	det	_	_
13	sain	saama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	7	advcl	_	SpaceAfter=No
14	.	.	PUNCT	Z	_	2	punct	_	_

~~~


