---
layout: base
title:  'Statistics of dislocated in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `dislocated`

This relation is universal.

32 nodes (0%) are attached to their parents as `dislocated`.

25 instances of `dislocated` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.84375.

The following 3 pairs of parts of speech are connected with `dislocated`: <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (20; 63% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (7; 22% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt> (5; 16% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 dislocated	color:blue
1	NAPOLI	Napoli	PROPN	SP	_	10	obl	10:obl	_
2	-	-	PUNCT	FF	_	1	punct	1:punct	_
3	"	"	PUNCT	FB	_	10	punct	10:punct	SpaceAfter=No
4	Tu	tu	PRON	PE	Number=Sing|Person=2|PronType=Prs	10	nsubj	10:nsubj	_
5	mia	mio	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	6:det:poss	_
6	figlia	figlia	NOUN	S	Gender=Fem|Number=Sing	10	dislocated	10:dislocated	_
7	non	non	ADV	BN	PronType=Neg	10	advmod	10:advmod	_
8	la	la	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	obj	10:obj	_
9	devi	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	10	aux	10:aux	_
10	toccare	toccare	VERB	V	VerbForm=Inf	0	root	0:root	SpaceAfter=No
11	"	"	PUNCT	FB	_	10	punct	10:punct	SpaceAfter=No
12	.	.	PUNCT	FS	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dislocated	color:blue
1	Uno	uno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	4	dislocated	4:dislocated	_
2	l'	lo	PRON	PC	Clitic=Yes|Number=Sing|Person=3|PronType=Prs	4	obj	4:obj	SpaceAfter=No
3	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
4	messo	mettere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
5	giù	giù	ADV	B	_	4	advmod	4:advmod	SpaceAfter=No
6	,	,	PUNCT	FF	_	11	punct	11:punct	_
7	ma	ma	CCONJ	CC	_	11	cc	11:cc	_
8	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	9:det	SpaceAfter=No
9	altro	altro	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	11	nsubj	11:nsubj	_
10	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	11:aux	_
11	tirato	tirare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	conj	4:conj:ma	_
12	fuori	fuori	ADV	B	_	11	advmod	11:advmod	_
13	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	14:det	_
14	pistola	pistola	NOUN	S	Gender=Fem|Number=Sing	11	obj	11:obj	SpaceAfter=No
15	.	.	PUNCT	FS	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dislocated	color:blue
1	Assatis	Assatis	PROPN	SP	_	4	dislocated	4:dislocated	_
2	e	e	CCONJ	CC	_	3	cc	3:cc	_
3	Alydaress	Alydaress	PROPN	SP	_	1	conj	1:conj:e	_
4	Chiamate	chiamare	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	li	li	PRON	PC	Clitic=Yes|Gender=Masc|Number=Plur|Person=3|PronType=Prs	4	obj	4:obj|6:nsubj	_
6	Invaders	Invaders	PROPN	SP	_	4	xcomp	4:xcomp	SpaceAfter=No
7	.	.	PUNCT	FS	_	4	punct	4:punct	_

~~~


