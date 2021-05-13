---
layout: base
title:  'Statistics of flat:foreign in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it_postwita-dep-flat-name.html">flat:name</a></tt>.

350 nodes (0%) are attached to their parents as `flat:foreign`.

350 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.15714285714286.

The following 16 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (237; 68% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (37; 11% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (29; 8% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (21; 6% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (7; 2% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NUM.html">NUM</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:foreign	color:blue
1	In	in	ADP	E	_	2	case	_	_
2	Mario	mario	PROPN	SP	_	4	obl	_	_
3	Monti	Monti	PROPN	SP	_	2	flat:name	_	_
4	we	we	X	SW	_	0	root	_	_
5	trust	trust	X	SW	_	4	flat:foreign	_	SpaceAfter=No
6	!	!	PUNCT	FS	_	4	punct	_	_
7	#acasa	#acasa	SYM	SYM	_	4	parataxis:hashtag	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 flat:foreign	color:blue
1	mario	mario	PROPN	SP	_	3	nsubj	_	_
2	#monti	#monti	SYM	SYM	_	1	flat:name	_	_
3	ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	7	7	NUM	N	NumType=Card	5	nummod	_	_
5	anni	anno	NOUN	S	Gender=Masc|Number=Plur	3	obj	_	_
6	in	in	ADP	E	_	7	case	_	_
7	meno	meno	ADV	B	_	5	advmod	_	_
8	di	di	ADP	E	_	9	case	_	_
9	#silvio	#silvio	SYM	SYM	_	5	nmod	_	_
10	#berlusconi	#berlusconi	SYM	SYM	_	9	flat:foreign	_	SpaceAfter=No
11	,	,	PUNCT	FF	_	14	punct	_	_
12	ma	ma	CCONJ	CC	_	14	cc	_	_
13	li	li	PRON	PC	Clitic=Yes|Gender=Masc|Number=Plur|Person=3|PronType=Prs	14	obj	_	_
14	porta	portare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
15	peggio	peggio	ADV	B	_	14	advmod	_	SpaceAfter=No
16	!	!	PUNCT	FS	_	3	punct	_	_
17	lol	lol	INTJ	I	_	3	discourse	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:foreign	color:blue
1	Tonino	Tonino	PROPN	SP	_	5	nsubj	_	_
2	'	'	PUNCT	FB	_	1	punct	_	SpaceAfter=No
3	o	'o	X	SW	_	1	flat:foreign	_	_
4	sdentato	sdentato	PROPN	SP	_	1	flat:name	_	_
5	manda	mandare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	messaggio	messaggio	NOUN	S	Gender=Masc|Number=Sing	5	obj	_	_
8	a	a	ADP	E	_	9	case	_	_
9	Mario	mario	PROPN	SP	_	5	obl	_	_
10	Monti	Monti	PROPN	SP	_	9	flat:name	_	_
11	http://t.co/uIUdKhJT	http://t.co/uIUdKhJT	SYM	X	_	5	dep	_	_

~~~


