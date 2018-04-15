---
layout: base
title:  'Statistics of cop in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `cop`

This relation is universal.

8836 nodes (2%) are attached to their parents as `cop`.

6544 instances of `cop` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.28757356269805.

The following 11 pairs of parts of speech are connected with `cop`: <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (3675; 42% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (3319; 38% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (790; 9% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (689; 8% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (197; 2% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (116; 1% instances), <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (41; 0% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 cop	color:blue
1	Nende	see	DET	P	Case=Gen|Number=Plur|PronType=Dem	2	det	_	_
2	puude	puu	NOUN	S	Case=Gen|Number=Plur	3	nmod	_	_
3	eluiga	elu_iga	NOUN	S	Case=Nom|Number=Sing	7	nsubj:cop	_	_
4	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
5	tavaliselt	tavaliselt	ADV	D	_	7	advmod	_	_
6	200-300	200-300	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	7	nummod	_	_
7	aastat	aasta	NOUN	S	Case=Par|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cop	color:blue
1	“	“	PUNCT	Z	_	6	punct	_	_
2	Kari	kari	NOUN	S	Case=Nom|Number=Sing	6	nsubj:cop	_	_
3	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
4	ka	ka	ADV	D	_	6	advmod	_	_
5	vägade	vägade	NOUN	S	Case=Gen|Number=Sing	6	obl	_	_
6	hea	hea	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	11	punct	_	_
8	see	see	DET	P	Case=Nom|Number=Sing|PronType=Dem	11	det	_	_
9	tumepunane	tume_punane	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	11	amod	_	_
10	Eesti	Eesti	PROPN	S	Case=Gen|Number=Sing	11	nmod	_	_
11	kari	kari	NOUN	S	Case=Nom|Number=Sing	2	appos	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	6	punct	_	_
13	”	”	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	“	“	PUNCT	Z	_	2	punct	_	_
2	Minul	mina	PRON	P	Case=Ade|Number=Sing|Person=1|PronType=Prs	0	root	_	_
3	pole	olema	AUX	V	Mood=Ind|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
4	häda	häda	NOUN	S	Case=Par|Number=Sing	2	nsubj:cop	_	_
5	midägit	midägi	NOUN	S	Case=Par|Number=Sing	4	nmod	_	SpaceAfter=No
6	.	.	PUNCT	Z	_	2	punct	_	_

~~~


