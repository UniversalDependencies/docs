---
layout: base
title:  'Statistics of root in UD_Estonian-EDT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EDT: Relations: `root`

This relation is universal.

26197 nodes (7%) are attached to their parents as `root`.

26197 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.4964308890331.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="et_edt-pos-VERB.html">VERB</a></tt> (18263; 70% instances), -<tt><a href="et_edt-pos-NOUN.html">NOUN</a></tt> (4010; 15% instances), -<tt><a href="et_edt-pos-ADJ.html">ADJ</a></tt> (2079; 8% instances), -<tt><a href="et_edt-pos-ADV.html">ADV</a></tt> (669; 3% instances), -<tt><a href="et_edt-pos-PRON.html">PRON</a></tt> (536; 2% instances), -<tt><a href="et_edt-pos-PROPN.html">PROPN</a></tt> (409; 2% instances), -<tt><a href="et_edt-pos-NUM.html">NUM</a></tt> (157; 1% instances), -<tt><a href="et_edt-pos-INTJ.html">INTJ</a></tt> (30; 0% instances), -<tt><a href="et_edt-pos-X.html">X</a></tt> (21; 0% instances), -<tt><a href="et_edt-pos-SYM.html">SYM</a></tt> (18; 0% instances), -<tt><a href="et_edt-pos-AUX.html">AUX</a></tt> (2; 0% instances), -<tt><a href="et_edt-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), -<tt><a href="et_edt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Foto	foto	NOUN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	Z	_	3	punct	_	_
3	Reuters	Reuters	PROPN	S	Case=Nom|Number=Sing	1	parataxis	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	1.	1.	ADJ	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Ord	0	root	_	_
2	Janis	Janis	PROPN	S	Case=Nom|Number=Sing	1	nsubj	_	_
3	Preiss	Preiss	PROPN	S	Case=Nom|Number=Sing	2	flat	_	_
4	(	(	PUNCT	Z	_	5	punct	_	SpaceAfter=No
5	LAT-23	LAT-23	NUM	N	Case=Nom|Number=Sing|NumType=Card	2	parataxis	_	SpaceAfter=No
6	)	)	PUNCT	Z	_	5	punct	_	_

~~~


