---
layout: base
title:  'Statistics of flat:name in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it_postwita-dep-flat-foreign.html">flat:foreign</a></tt>.

2686 nodes (2%) are attached to their parents as `flat:name`.

2686 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17200297840655.

The following 21 pairs of parts of speech are connected with `flat:name`: <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (2347; 87% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (147; 5% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (61; 2% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (59; 2% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (23; 1% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (11; 0% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (7; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (6; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="it_postwita-pos-NUM.html">NUM</a></tt>-<tt><a href="it_postwita-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="it_postwita-pos-DET.html">DET</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat:name	color:blue
1	In	in	ADP	E	_	2	case	_	_
2	Mario	mario	PROPN	SP	_	4	obl	_	_
3	Monti	Monti	PROPN	SP	_	2	flat:name	_	_
4	we	we	X	SW	Foreign=Yes	0	root	_	_
5	trust	trust	X	SW	Foreign=Yes	4	flat:foreign	_	SpaceAfter=No
6	!	!	PUNCT	FS	_	4	punct	_	_
7	#acasa	#acasa	SYM	SYM	_	4	parataxis:hashtag	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Vai	andare	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
2	così	così	ADV	B	_	1	advmod	_	_
3	super	super	ADJ	A	_	4	amod	_	_
4	Mario	mario	PROPN	SP	_	1	vocative	_	_
5	#Monti	#Monti	SYM	SYM	_	4	flat:name	_	SpaceAfter=No
6	!	!	PUNCT	FS	_	1	punct	_	_
7	Non	non	ADV	BN	PronType=Neg	8	advmod	_	_
8	mollare	mollare	VERB	V	VerbForm=Inf	1	parataxis	_	SpaceAfter=No
9	!	!	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	#Mario	#Mario	SYM	SYM	_	4	nsubj	_	_
2	#Monti	#Monti	SYM	SYM	_	1	flat:name	_	_
3	in	in	ADP	E	_	4	case	_	_
4	diretta	diretta	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
5	su	su	ADP	E	_	6	case	_	_
6	http://t.co/BMo5H0xV	http://t.co/BMo5H0xV	SYM	X	_	4	obl	_	_
7	e	e	CCONJ	CC	_	8	cc	_	_
8	#nevearoma	#nevearoma	SYM	SYM	_	4	conj	_	_

~~~


