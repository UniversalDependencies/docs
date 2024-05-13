---
layout: base
title:  'Statistics of flat:foreign in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="it_twittiro-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="it_twittiro-dep-flat-name.html">flat:name</a></tt>.

36 nodes (0%) are attached to their parents as `flat:foreign`.

36 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.41666666666667.

The following 9 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-X.html">X</a></tt> (24; 67% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-X.html">X</a></tt> (4; 11% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (2; 6% instances), <tt><a href="it_twittiro-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_twittiro-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="it_twittiro-pos-X.html">X</a></tt>-<tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:foreign	color:blue
1	@user	@user	SYM	SYM	_	2	vocative:mention	_	_
2	Mario	mario	PROPN	SP	_	0	root	_	_
3	Monti	Monti	PROPN	SP	_	2	flat:name	_	_
4	super	super	X	SW	_	2	appos	_	_
5	partes	partes	X	SW	_	4	flat:foreign	_	_
6	=	=	PUNCT	FF	_	7	punct	_	_
7	martirio	martirio	NOUN	S	Gender=Masc|Number=Sing	2	appos	_	_
8	o	o	CCONJ	CC	_	10	cc	_	_
9	superman	superman	PROPN	SP	_	10	nsubj	_	_
10	pesta	pestare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	conj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:foreign	color:blue
1	RT	retweet	NOUN	S	_	4	dep	_	_
2	@user1	@user1	SYM	SYM	_	4	vocative:mention	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	2	punct	_	_
4	@user2	@user2	SYM	SYM	_	0	root	_	_
5	number	number	X	SW	_	4	flat:foreign	_	_
6	one	one	X	SW	_	4	flat:foreign	_	_
7	da	da	ADP	E	_	8	case	_	_
8	Rocco	rocco	PROPN	SP	_	4	nmod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	4	punct	_	_
10	Puoi	potere	AUX	VM	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	morire	morire	VERB	V	VerbForm=Inf	4	parataxis	_	_
12	felice	felice	ADJ	A	Number=Sing	11	xcomp	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	11	punct	_	_

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


