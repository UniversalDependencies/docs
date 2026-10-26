---
layout: base
title:  'Statistics of flat:foreign in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it_postwita-dep-flat-name.html">flat:name</a></tt>.

294 nodes (0%) are attached to their parents as `flat:foreign`.

294 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.90816326530612.

The following 12 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (247; 84% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (19; 6% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (14; 5% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (3; 1% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-X.html">X</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-NUM.html">NUM</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:foreign	color:blue
1	In	in	ADP	E	_	2	case	_	_
2	Mario	mario	PROPN	SP	_	4	obl	_	_
3	Monti	Monti	PROPN	SP	_	2	flat:name	_	_
4	we	we	X	SW	Foreign=Yes	0	root	_	_
5	trust	trust	X	SW	Foreign=Yes	4	flat:foreign	_	SpaceAfter=No
6	!	!	PUNCT	FS	_	4	punct	_	_
7	#acasa	#acasa	SYM	SYM	_	4	parataxis:hashtag	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat:foreign	color:blue
1	Tonino	Tonino	PROPN	SP	_	5	nsubj	_	_
2	'	'	PUNCT	FB	_	1	punct	_	SpaceAfter=No
3	o	'o	X	SW	Foreign=Yes	1	flat:foreign	_	_
4	sdentato	sdentato	PROPN	SP	_	1	flat:name	_	_
5	manda	mandare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	messaggio	messaggio	NOUN	S	Gender=Masc|Number=Sing	5	obj	_	_
8	a	a	ADP	E	_	9	case	_	_
9	Mario	mario	PROPN	SP	_	5	obl	_	_
10	Monti	Monti	PROPN	SP	_	9	flat:name	_	_
11	http://t.co/uIUdKhJT	http://t.co/uIUdKhJT	SYM	X	_	5	parataxis	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 flat:foreign	color:blue
1	Ok	ok	INTJ	I	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	ti	ti	PRON	PC	Clitic=Yes|Number=Sing|Person=2|PronType=Prs	5	iobj	_	_
4	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	fatto	fare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	pubblicità	pubblicità	NOUN	S	Gender=Fem	5	obj	_	_
7	u.u	u.u	SYM	SYM	_	5	discourse	_	_
8	(	(	PUNCT	FB	_	9	punct	_	SpaceAfter=No
9	@user	@user	SYM	SYM	_	5	vocative	_	_
10	live	live	X	SW	Foreign=Yes	9	flat:foreign	_	_
11	on	on	X	SW	Foreign=Yes	9	flat:foreign	_	_
12	http://t.co/DwxwgDwI	http://t.co/DwxwgDwI	SYM	X	_	9	parataxis	_	SpaceAfter=No
13	)	)	PUNCT	FB	_	9	punct	_	_

~~~


