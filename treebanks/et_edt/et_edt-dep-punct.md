---
layout: base
title:  'Statistics of punct in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `punct`

This relation is universal.

59925 nodes (16%) are attached to their parents as `punct`.

34050 instances of `punct` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.06711722987067.

The following 15 pairs of parts of speech are connected with `punct`: <tt><a href="et_edt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (35479; 59% instances), <tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (11872; 20% instances), <tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (4527; 8% instances), <tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (2666; 4% instances), <tt><a href="et_edt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (1843; 3% instances), <tt><a href="et_edt-pos-ADV.html">ADV</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (1674; 3% instances), <tt><a href="et_edt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (1426; 2% instances), <tt><a href="et_edt-pos-X.html">X</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (189; 0% instances), <tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (177; 0% instances), <tt><a href="et_edt-pos-SYM.html">SYM</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (39; 0% instances), <tt><a href="et_edt-pos-DET.html">DET</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (11; 0% instances), <tt><a href="et_edt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (9; 0% instances), <tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), <tt><a href="et_edt-pos-ADP.html">ADP</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances), <tt><a href="et_edt-pos-AUX.html">AUX</a></tt>-<tt><a href="et_edt-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 punct	color:blue
1	Üle	üle	ADP	K	AdpType=Prep	2	case	_	_
2	poole	pool	NUM	N	Case=Gen|Number=Sing|NumForm=Letter|NumType=Card	4	nummod	_	_
3	neist	tema	PRON	P	Case=Ela|Number=Plur|Person=3|PronType=Prs	2	nmod	_	_
4	lasti	laskma	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
5	maha	maha	ADV	D	_	4	compound:prt	_	_
6	pärast	pärast	ADP	K	AdpType=Prep	9	case	_	_
7	Berliini	Berliin	PROPN	S	Case=Gen|Number=Sing	8	nmod	_	_
8	müüri	müür	NOUN	S	Case=Gen|Number=Sing	9	nmod	_	_
9	püstitamist	püstitamine	NOUN	S	Case=Par|Number=Sing	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 punct	color:blue
1	Foto	foto	NOUN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	Z	_	3	punct	_	_
3	berlinermauer.se	berlinermauer.se	NOUN	S	Case=Nom|Number=Sing	1	parataxis	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 punct	color:blue
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


