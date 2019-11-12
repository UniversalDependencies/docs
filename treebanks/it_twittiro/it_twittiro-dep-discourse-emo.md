---
layout: base
title:  'Statistics of discourse:emo in UD_Italian-TWITTIRO'
udver: '2'
---

## Treebank Statistics: UD_Italian-TWITTIRO: Relations: `discourse:emo`

This relation is a language-specific subtype of <tt><a href="it_twittiro-dep-discourse.html">discourse</a></tt>.

43 nodes (0%) are attached to their parents as `discourse:emo`.

41 instances of `discourse:emo` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.1395348837209.

The following 5 pairs of parts of speech are connected with `discourse:emo`: <tt><a href="it_twittiro-pos-VERB.html">VERB</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (27; 63% instances), <tt><a href="it_twittiro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (8; 19% instances), <tt><a href="it_twittiro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (6; 14% instances), <tt><a href="it_twittiro-pos-ADV.html">ADV</a></tt>-<tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt> (1; 2% instances), <tt><a href="it_twittiro-pos-SYM.html">SYM</a></tt>-<tt><a href="it_twittiro-pos-INTJ.html">INTJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 discourse:emo	color:blue
1	@user	@user	SYM	SYM	_	6	vocative:mention	_	SpaceAfter=No
2	:	:	PUNCT	FC	_	1	punct	_	_
3	Mario	mario	PROPN	SP	_	6	nsubj	_	_
4	Monti	Monti	PROPN	SP	_	3	flat:name	_	_
5	non	non	ADV	BN	PronType=Neg	6	advmod	_	_
6	sa	sapere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	impennare	impennare	VERB	V	VerbForm=Inf	6	xcomp	_	_
8	hahaha	hahaha	INTJ	I	_	6	discourse	_	_
9	:D	:D	SYM	SYM	_	6	discourse:emo	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 13 discourse:emo	color:blue
1	#specialecamera	#specialecamera	SYM	SYM	_	4	parataxis:hashtag	_	_
2	ma	ma	CCONJ	CC	_	4	cc	_	_
3	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	4	det	_	SpaceAfter=No
4	età	età	NOUN	S	Gender=Fem	0	root	_	_
5	media	medio	ADJ	A	Gender=Fem|Number=Sing	4	amod	_	_
6	di	di	ADP	E	_	8	case	_	_
7	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	governo	governo	NOUN	S	Gender=Masc|Number=Sing	4	nmod	_	_
9	Monti	Monti	PROPN	SP	_	8	nmod	_	_
10	qual	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
11	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	SpaceAfter=No
12	?	?	PUNCT	FS	_	4	punct	_	_
13	;)	;)	SYM	SYM	_	4	discourse:emo	_	_
14	#spazioaigiovani	#spazioaigiovani	SYM	SYM	_	4	parataxis:hashtag	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 22 discourse:emo	color:blue
1	*	*	SYM	SYM	_	2	dep	_	_
2	FLASH	flash	NOUN	S	Gender=Masc	8	parataxis	_	_
3	-	-	PUNCT	FB	_	2	punct	_	_
4	GOVERNO	governo	NOUN	S	Gender=Masc|Number=Sing	8	parataxis	_	SpaceAfter=No
5	:	:	PUNCT	FC	_	4	punct	_	_
6	MONTI	MONTI	PROPN	SP	_	8	parataxis	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	6	punct	_	_
8	VISTO	vedere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
9	CHE	che	DET	DQ	PronType=Int	11	det	_	_
10	SPLENDIDA	splendido	ADJ	A	Gender=Fem|Number=Sing	11	amod	_	_
11	GIORNATA	giornata	NOUN	S	Gender=Fem|Number=Sing	8	obj	_	SpaceAfter=No
12	?	?	PUNCT	FS	_	11	punct	_	_
13	-	-	PUNCT	FB	_	15	punct	_	_
14	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	prossima	prossimo	ADJ	A	Gender=Fem|Number=Sing	8	parataxis	_	_
16	sarà	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	15	cop	_	_
17	avete	avere	AUX	VA	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	18	aux	_	_
18	visto	vedere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	15	csubj	_	_
19	che	che	DET	DQ	PronType=Int	20	det	_	_
20	stronzi	stronzo	NOUN	S	Gender=Masc|Number=Plur	18	obj	_	SpaceAfter=No
21	?	?	PUNCT	FS	_	18	punct	_	_
22	:(	:(	SYM	SYM	_	15	discourse:emo	_	_

~~~


