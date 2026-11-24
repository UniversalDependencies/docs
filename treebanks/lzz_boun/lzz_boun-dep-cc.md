---
layout: base
title:  'Statistics of cc in UD_Laz-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Laz-BOUN: Relations: `cc`

This relation is universal.

4 nodes (0%) are attached to their parents as `cc`.

3 instances of `cc` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `cc`: <tt><a href="lzz_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lzz_boun-pos-SCONJ.html">SCONJ</a></tt> (3; 75% instances), <tt><a href="lzz_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="lzz_boun-pos-CCONJ.html">CCONJ</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Şana	Şana	PROPN	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	do	do	SCONJ	_	_	3	cc	_	_
3	Artek	Artek	PROPN	_	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
4	ok'icoxamanan	ok'icoxama	VERB	_	Aspect=Perf|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc	color:blue
1	Berek	Bere	NOUN	NOUN	Animacy=Hum|Case=Erg|Number=Sing|Person=3	4	nsubj	_	_
2	layç'epe	layç'	NOUN	NOUN	Animacy=Anim|Case=Nom|Number=Plur|Person=3	3	obj	_	_
3	olimbu	limb	VERB	VERB	_	4	xcomp	_	_
4	gorums	gor	VERB	VERB	Aspect=Imp	0	root	_	_
5	ama	ama	CCONJ	CCONJ	_	6	cc	_	_
6	aşk'urinen	şk'ur	VERB	VERB	Aspect=Imp	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	4	punct	_	SpacesAfter=\n

~~~


