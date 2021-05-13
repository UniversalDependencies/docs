---
layout: base
title:  'Statistics of csubj in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `csubj`

This relation is universal.

209 nodes (0%) are attached to their parents as `csubj`.

135 instances of `csubj` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.90430622009569.

The following 14 pairs of parts of speech are connected with `csubj`: <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (82; 39% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (60; 29% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (47; 22% instances), <tt><a href="it_postwita-pos-ADV.html">ADV</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="it_postwita-pos-PRON.html">PRON</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-SYM.html">SYM</a></tt>-<tt><a href="it_postwita-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 15 csubj	color:blue
1	'	'	PUNCT	FB	_	2	punct	_	_
2	dicono	dire	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	che	che	SCONJ	CS	_	5	mark	_	_
4	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	vero	vero	ADJ	A	Gender=Masc|Number=Sing	2	ccomp	_	_
6	che	che	SCONJ	CS	_	15	mark	_	_
7	quando	quando	SCONJ	CS	_	9	mark	_	_
8	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	9	expl:impers	_	_
9	muore	morire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	advcl	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	9	punct	_	_
11	poi	poi	ADV	B	_	15	advmod	_	_
12	non	non	ADV	BN	PronType=Neg	15	advmod	_	_
13	ci	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	15	expl	_	_
14	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	15	expl:impers	_	_
15	vede	vedere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	csubj	_	_
16	più'	più'	ADV	B	_	15	advmod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 csubj	color:blue
1	@user	@user	SYM	SYM	_	4	vocative:mention	_	_
2	Non	non	ADV	BN	PronType=Neg	4	advmod	_	_
3	e	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	CorrectForm=è
4	morto	morire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	nessuno	nessuno	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	4	nsubj	_	_
6	capita	capitare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
7	a	a	ADP	E	_	8	case	_	_
8	tutti	tutto	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	6	obl	_	_
9	fare	fare	VERB	V	VerbForm=Inf	6	csubj	_	_
10	sbagli	sbaglio	NOUN	S	Gender=Masc|Number=Plur	9	obj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 csubj	color:blue
1	MARIO	mario	PROPN	SP	_	10	vocative	_	_
2	MONTI	Monti	PROPN	SP	_	1	flat:name	_	_
3	MASSONE	massone	NOUN	S	Gender=Masc|Number=Sing	1	nmod	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	SERVIRE	servire	VERB	V	VerbForm=Inf	10	csubj	_	_
6	LE	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	7	det	_	_
7	BANCHE	banca	NOUN	S	Gender=Fem|Number=Plur	5	obj	_	_
8	LA	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
9	TUA	tuo	DET	AP	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	10	det:poss	_	_
10	PROFESSIONE	professione	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
11	NTA	NTA	X	X	_	10	dep	_	_

~~~


