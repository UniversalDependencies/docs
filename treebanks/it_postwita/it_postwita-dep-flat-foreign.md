---
layout: base
title:  'Statistics of flat:foreign in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it_postwita-dep-flat-name.html">flat:name</a></tt>.

353 nodes (0%) are attached to their parents as `flat:foreign`.

353 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.13314447592068.

The following 17 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (238; 67% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (39; 11% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (26; 7% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (22; 6% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (7; 2% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NUM.html">NUM</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances).


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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:foreign	color:blue
1	@user1	@user1	SYM	SYM	_	10	punct	_	_
2	@user2	@user2	SYM	SYM	_	1	flat:foreign	_	_
3	-	-	PUNCT	FB	_	10	punct	_	_
4	amica	amico	NOUN	S	Gender=Fem|Number=Sing	10	obl	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	4	punct	_	_
6	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
7	non	non	ADV	BN	PronType=Neg	10	advmod	_	_
8	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	10	expl	_	_
9	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	10	expl	_	_
10	cagherò	cagare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	0	root	_	_
11	di	di	ADP	E	_	12	case	_	_
12	pezza	pezza	NOUN	S	Gender=Fem|Number=Sing	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	10	punct	_	_
14	TANTO	tanto	DET	DI	PronType=Ind	18	det	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	18	punct	_	_
16	MA	ma	CCONJ	CC	_	18	cc	_	_
17	TANTO	tanto	DET	DI	PronType=Ind	18	det	_	_
18	AMORE	amore	NOUN	S	Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
19	!	!	PUNCT	FS	_	10	punct	_	_
20	<3	<3	SYM	SYM	_	10	punct	_	_

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


