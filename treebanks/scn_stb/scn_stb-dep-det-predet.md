---
layout: base
title:  'Statistics of det:predet in UD_Sicilian-STB'
udver: '2'
---

## Treebank Statistics: UD_Sicilian-STB: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="scn_stb-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="scn_stb-dep-det-poss.html">det:poss</a></tt>.

24 nodes (0%) are attached to their parents as `det:predet`.

24 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08333333333333.

The following 4 pairs of parts of speech are connected with `det:predet`: <tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="scn_stb-pos-DET.html">DET</a></tt> (20; 83% instances), <tt><a href="scn_stb-pos-PRON.html">PRON</a></tt>-<tt><a href="scn_stb-pos-DET.html">DET</a></tt> (2; 8% instances), <tt><a href="scn_stb-pos-ADV.html">ADV</a></tt>-<tt><a href="scn_stb-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-DET.html">DET</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 det:predet	color:blue
1	A	u	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	matina	matina	NOUN	S	Gender=Fem|Number=Sing	5	obl	_	_
3	doppu	doppu	ADV	B	_	2	advmod	_	_
4	ci	ci	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	iobj	_	_
5	cuntavu	cuntari	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
6	sta	chistu	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	storia	storia	NOUN	S	Gender=Fem|Number=Sing	5	obj	_	_
8	a	a	ADP	E	_	11	case	_	_
9	tutti	tuttu	DET	T	Gender=Masc|Number=Plur|PronType=Tot	11	det:predet	_	_
10	l'	lu	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	11	det	_	SpaceAfter=No
11	amici	amicu	NOUN	S	Gender=Masc|Number=Plur	5	obl	_	_
12	me	me	DET	AP	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	11	det:poss	_	SpaceAfter=No
13	,	,	PUNCT	FF	_	20	punct	_	_
14	ma	ma	CCONJ	CC	_	20	cc	_	_
15	comu	comu	ADP	E	_	16	case	_	_
16	sempri	sempri	ADV	B	_	20	advmod	_	SpaceAfter=No
17	,	,	PUNCT	FF	_	16	punct	_	_
18	nuḍḍu	nuddu	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	20	nsubj	_	_
19	mi	mi	PRON	PC	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	20	iobj	_	_
20	cridiva	cridiri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	conj	_	SpaceAfter=No
21	.	.	PUNCT	FS	_	5	punct	_	SpacesAfter=\s\r\n\r\n

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 det:predet	color:blue
1	Un	unu	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	jornu	jornu	NOUN	S	Gender=Masc|Number=Sing	10	obl	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	comu	comu	ADP	E	_	7	case	_	_
5	tutti	tuttu	DET	T	Gender=Masc|Number=Plur|PronType=Tot	7	det:predet	_	_
6	l'	lu	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	SpaceAfter=No
7	autri	autru	PRON	PI	Gender=Masc|Number=Plur|PronType=Ind	10	obl	_	SpaceAfter=No
8	,	,	PUNCT	FF	_	7	punct	_	_
9	èramu	essiri	AUX	VA	Mood=Ind|Number=Plur|Person=1|Tense=Imp|VerbForm=Fin	10	cop	_	_
10	fora	fora	ADV	B	_	0	root	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	10	punct	_	SpacesAfter=\s\r\n\r\n

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 det:predet	color:blue
1	«	«	PUNCT	FB	_	5	punct	_	SpaceAfter=No|TokenRange=3952:3953
2	E	e	CCONJ	CC	_	5	cc	_	TokenRange=3953:3954
3	allura	allura	ADV	B	_	5	advmod	_	TokenRange=3955:3961
4	comu	comu	ADV	B	_	5	advmod	_	TokenRange=3962:3966
5	penzi	pinzari	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=3967:3972
6	ca	ca	SCONJ	CS	_	9	mark	_	TokenRange=3973:3976
7	ti	ti	PRON	PC	Number=Sing|Person=2|PronType=Prs	9	expl	_	Clitic=Yes|TokenRange=27:29
8	la	la	PRON	PC	Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	obj	_	Clitic=Yes|TokenRange=30:32
9	fidi	fidari	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	ccomp	_	TokenRange=33:37
10	a	a	ADP	E	_	11	mark	_	TokenRange=38:39
11	fari	fari	VERB	V	VerbForm=Inf	9	xcomp	_	TokenRange=40:44
12	tutti	tuttu	DET	T	Gender=Fem|Number=Plur|PronType=Tot	14	det:predet	_	TokenRange=45:50
13	cosi	cosa	NOUN	S	Gender=Fem|Number=Plur	11	obj	_	TokenRange=52:56
14	sulu	sulu	ADV	B	_	13	advmod	_	SpaceAfter=No|TokenRange=57:61
15	,	,	PUNCT	FF	_	11	punct	_	TokenRange=61:62
16	tu	tu	PRON	PE	Number=Sing|Person=2|PronType=Prs	5	nsubj	_	SpaceAfter=No|TokenRange=63:65
17	?	?	PUNCT	FS	_	5	punct	_	SpaceAfter=No|TokenRange=65:66
18	»	»	PUNCT	FB	_	5	punct	_	TokenRange=66:67

~~~


