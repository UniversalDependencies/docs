---
layout: base
title:  'Statistics of discourse in UD_Sicilian-STB'
udver: '2'
---

## Treebank Statistics: UD_Sicilian-STB: Relations: `discourse`

This relation is universal.

22 nodes (0%) are attached to their parents as `discourse`.

16 instances of `discourse` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.04545454545455.

The following 5 pairs of parts of speech are connected with `discourse`: <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-INTJ.html">INTJ</a></tt> (13; 59% instances), <tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="scn_stb-pos-INTJ.html">INTJ</a></tt> (6; 27% instances), <tt><a href="scn_stb-pos-PRON.html">PRON</a></tt>-<tt><a href="scn_stb-pos-INTJ.html">INTJ</a></tt> (1; 5% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-ADV.html">ADV</a></tt> (1; 5% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 discourse	color:blue
1	«	«	PUNCT	FB	_	3	punct	_	SpaceAfter=No|TokenRange=0:1
2	Bonu	bonu	ADV	B	_	3	advmod	_	TokenRange=1:5
3	staju	stari	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|TokenRange=6:9
4	,	,	PUNCT	FF	_	3	punct	_	TokenRange=9:10
5	avà	avà	INTJ	I	_	3	discourse	_	SpaceAfter=No|TokenRange=11:14
6	.	.	PUNCT	FS	_	3	punct	_	SpaceAfter=No|TokenRange=14:15
7	»	»	PUNCT	FB	_	3	punct	_	SpaceAfter=No|TokenRange=16:17

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse	color:blue
1	«	«	PUNCT	FB	_	5	punct	_	SpaceAfter=No|TokenRange=1023:1024
2	Mmh	mmh	INTJ	I	_	5	discourse	_	SpaceAfter=No|TokenRange=1024:1027
3	,	,	PUNCT	FF	_	2	punct	_	TokenRange=1027:1028
4	na	unu	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	TokenRange=1029:1031
5	para	para	NOUN	S	Gender=Masc|Number=Sing	0	root	_	TokenRange=1032:1036
6	d'	di	ADP	E	_	7	case	_	SpaceAfter=No|TokenRange=1037:1039
7	anni	annu	NOUN	S	Gender=Masc|Number=Plur	5	nmod	_	SpaceAfter=No|TokenRange=1039:1043
8	?	?	PUNCT	FS	_	5	punct	_	SpaceAfter=No|TokenRange=1043:1044
9	»	»	PUNCT	FB	_	5	punct	_	TokenRange=1044:1045

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Se	se	INTJ	I	Polarity=Pos	4	discourse	_	SpaceAfter=No|TokenRange=2025:2027
2	,	,	PUNCT	FF	_	1	punct	_	TokenRange=2027:2028
3	sempri	sempri	ADV	B	_	4	advmod	_	TokenRange=2029:2035
4	chiḍḍi	chiddu	PRON	PD	Gender=Masc|Number=Plur|PronType=Dem	0	root	_	TokenRange=2036:2042
5	ca	ca	PRON	PR	PronType=Rel	7	nsubj	_	TokenRange=2043:2046
6	avìanu	aviri	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	7	aux	_	TokenRange=2047:2052
7	scumparu	scumpariri	VERB	V	VerbForm=Inf	4	acl:relcl	_	_
8	tu	tu	PRON	PC	Person=3|PronType=Prs	7	expl	_	Clitic=Yes
9	nta	nta	ADP	E	_	11	case	_	_
10	la	lu	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	màchina	màchina	NOUN	S	Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No|TokenRange=2069:2077
12	.	.	PUNCT	FS	_	4	punct	_	TokenRange=2077:2078

~~~


