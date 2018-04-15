---
layout: base
title:  'Statistics of det in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `det`

This relation is universal.

5758 nodes (2%) are attached to their parents as `det`.

5616 instances of `det` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3723515109413.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (5295; 92% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (183; 3% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (91; 2% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (69; 1% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (56; 1% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (35; 1% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (27; 0% instances), <tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="et_edt-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Ilma	ilma	ADP	K	AdpType=Prep	3	case	_	_
2	selle	see	DET	P	Case=Gen|Number=Sing|PronType=Dem	3	det	_	_
3	kaitsekihita	kaitse_kiht	NOUN	S	Case=Abe|Number=Sing	7	obl	_	_
4	oleks	olema	AUX	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
5	puutüved	puu_tüvi	NOUN	S	Case=Nom|Number=Plur	7	nsubj	_	_
6	kivisöeks	kivi_süsi	NOUN	S	Case=Tra|Number=Sing	7	xcomp	_	_
7	muutunud	muutuma	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 det	color:blue
1	Meie	mina	PRON	P	Case=Gen|Number=Plur|Person=1|PronType=Prs	3	nmod	_	_
2	viimased	viimane	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	3	amod	_	_
3	kolm	kolm	NUM	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Card	4	nummod	_	_
4	peaministrit	pea_minister	NOUN	S	Case=Par|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	9	punct	_	_
6	kes	kes	PRON	P	Case=Nom|Number=Plur|PronType=Int,Rel	9	nsubj:cop	_	_
7	on	olema	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
8	kõik	kõik	DET	P	Case=Nom|Number=Plur|PronType=Tot	6	det	_	_
9	eriteenistustest	eri_teenistus	NOUN	S	Case=Ela|Number=Plur	4	acl:relcl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	"	"	PUNCT	Z	_	4	punct	_	_
2	Mina	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	ei	ei	AUX	V	Polarity=Neg	4	aux	_	_
4	tea	teadma	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Z	_	10	punct	_	_
6	kuhu	kuhu	ADV	D	_	10	mark	_	_
7	need	see	DET	P	Case=Nom|Number=Plur|PronType=Dem	8	det	_	_
8	50	50	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	9	nummod	_	_
9	ruutu	ruut	NOUN	S	Case=Par|Number=Sing	10	nsubj	_	_
10	kadusid	kaduma	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	Z	_	4	punct	_	_

~~~


