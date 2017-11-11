---
layout: base
title:  'Statistics of dislocated in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `dislocated`

This relation is universal.

30 nodes (0%) are attached to their parents as `dislocated`.

25 instances of `dislocated` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.7.

The following 4 pairs of parts of speech are connected with `dislocated`: <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (18; 60% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (7; 23% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-PROPN.html">PROPN</a></tt> (4; 13% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 dislocated	color:blue
1	NAPOLI	Napoli	PROPN	SP	_	10	obl	_	_
2	-	-	PUNCT	FF	_	1	punct	_	_
3	"	"	PUNCT	FB	_	10	punct	_	SpaceAfter=No
4	Tu	tu	PRON	PE	Number=Sing|Person=2|PronType=Prs	10	nsubj	_	_
5	mia	mio	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det:poss	_	_
6	figlia	figlia	NOUN	S	Gender=Fem|Number=Sing	10	dislocated	_	_
7	non	non	ADV	BN	PronType=Neg	10	advmod	_	_
8	la	lo	PRON	PC	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	obj	_	_
9	devi	dovere	AUX	VM	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	toccare	toccare	VERB	V	VerbForm=Inf	0	root	_	SpaceAfter=No
11	"	"	PUNCT	FB	_	10	punct	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dislocated	color:blue
1	Uno	uno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	4	dislocated	_	_
2	l'	lo	PRON	PC	Clitic=Yes|Number=Sing|Person=3|PronType=Prs	4	obj	_	SpaceAfter=No
3	ho	avere	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	messo	mettere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	giù	giù	ADV	B	_	4	advmod	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	11	punct	_	_
7	ma	ma	CCONJ	CC	_	11	cc	_	_
8	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	9	det	_	SpaceAfter=No
9	altro	altro	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	11	nsubj	_	_
10	ha	avere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	tirato	tirare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	conj	_	_
12	fuori	fuori	ADV	B	_	11	advmod	_	_
13	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	pistola	pistola	NOUN	S	Gender=Fem|Number=Sing	11	obj	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dislocated	color:blue
1	Assatis	Assatis	PROPN	SP	_	4	dislocated	_	_
2	e	e	CCONJ	CC	_	3	cc	_	_
3	Alydaress	Alydaress	PROPN	SP	_	1	conj	_	_
4	Chiamate	chiamare	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
5	li	li	PRON	PC	Clitic=Yes|Gender=Masc|Number=Plur|Person=3|PronType=Prs	4	obj	_	_
6	Invaders	Invaders	PROPN	SP	_	4	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	4	punct	_	_

~~~


