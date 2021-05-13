---
layout: base
title:  'Statistics of compound in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `compound`

This relation is universal.

214 nodes (0%) are attached to their parents as `compound`.

214 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.09345794392523.

The following 18 pairs of parts of speech are connected with `compound`: <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (167; 78% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (12; 6% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (6; 3% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (5; 2% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	L'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	CorrectSpaceAfter=No
2	addetto	addetto	NOUN	S	Gender=Masc|Number=Sing	9	nsubj	_	_
3	stampa	stampa	NOUN	S	Gender=Fem|Number=Sing	2	compound	_	_
4	di	di	ADP	E	_	5	case	_	_
5	Mario	mario	PROPN	SP	_	2	nmod	_	_
6	Monti	Monti	PROPN	SP	_	5	flat:name	_	_
7	e'	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	idolo	idolo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	9	punct	_	_
11	Buongiorno	buongiorno	INTJ	I	_	12	discourse	_	_
12	Mondo	mondo	NOUN	S	Gender=Masc|Number=Sing	9	parataxis	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 compound	color:blue
1	#PROFUMO	#PROFUMO	SYM	SYM	_	3	nsubj	_	_
2	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	3	expl	_	_
3	dimette	dimettere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	da	da	ADP	E	_	6	case	_	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	#CNR	#CNR	SYM	SYM	_	3	obl	_	_
7	..	..	PUNCT	FS	_	3	punct	_	_
8	Il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	11	nsubj	_	_
10	#Monti	#Monti	SYM	SYM	_	9	compound	_	_
11	terminerà	terminare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	3	parataxis	_	_
12	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	legislatura	legislatura	NOUN	S	Gender=Fem|Number=Sing	11	obj	_	_
14	..	..	PUNCT	FS	_	11	punct	_	_
15	Secondo	secondo	ADP	E	_	16	case	_	_
16	ME	me	PRON	PE	Number=Sing|Person=1|PronType=Prs	11	obl	_	_
17	..	..	PUNCT	FS	_	16	punct	_	_
18	Notte	Notte	INTJ	I	_	3	discourse	_	_
19	a	a	ADP	E	_	20	case	_	_
20	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	18	obl	_	SpaceAfter=No
21	!	!	PUNCT	FS	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	#Frequenze	#Frequenze	SYM	SYM	_	7	obl	_	_
2	TV	tv	NOUN	S	Gender=Fem	1	compound	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	1	punct	_	_
4	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	governo	governo	NOUN	S	Gender=Masc|Number=Sing	7	nsubj	_	_
6	#Monti	#Monti	SYM	SYM	_	5	nmod	_	_
7	pensa	pensare	VERB	V	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
8	solo	solo	ADV	B	_	10	advmod	_	_
9	a	a	ADP	E	_	10	case	_	_
10	#Rai	#Rai	SYM	SYM	_	7	obl	_	_
11	e	e	CCONJ	CC	_	12	cc	_	_
12	#Mediaset	#Mediaset	SYM	SYM	_	10	conj	_	_
13	http://t.co/gcXxcsLM	http://t.co/gcXxcsLM	SYM	X	_	7	dep	_	_
14	via	via	ADP	E	_	15	case	_	_
15	@user	@user	SYM	SYM	_	7	vocative:mention	_	_

~~~


