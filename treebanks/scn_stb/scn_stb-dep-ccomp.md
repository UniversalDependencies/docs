---
layout: base
title:  'Statistics of ccomp in UD_Sicilian-STB'
udver: '2'
---

## Treebank Statistics: UD_Sicilian-STB: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="scn_stb-dep-ccomp-reported.html">ccomp:reported</a></tt>.

176 nodes (2%) are attached to their parents as `ccomp`.

173 instances of `ccomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.25.

The following 12 pairs of parts of speech are connected with `ccomp`: <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-VERB.html">VERB</a></tt> (129; 73% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-ADJ.html">ADJ</a></tt> (19; 11% instances), <tt><a href="scn_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="scn_stb-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt> (6; 3% instances), <tt><a href="scn_stb-pos-ADV.html">ADV</a></tt>-<tt><a href="scn_stb-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="scn_stb-pos-AUX.html">AUX</a></tt>-<tt><a href="scn_stb-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="scn_stb-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="scn_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="scn_stb-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="scn_stb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="scn_stb-pos-PRON.html">PRON</a></tt>-<tt><a href="scn_stb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 ccomp	color:blue
1	«	«	PUNCT	FB	_	3	punct	_	SpaceAfter=No|TokenRange=4037:4038
2	Quantu	quantu	ADV	B	_	3	advmod	_	TokenRange=4038:4044
3	scinnu	scinniri	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=4045:4051
4	e	e	CCONJ	CC	_	6	cc	_	TokenRange=4052:4053
5	ti	ti	PRON	PC	Number=Sing|Person=2|PronType=Prs	6	obj	_	Clitic=Yes|TokenRange=4054:4056
6	vegnu	veniri	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	conj	_	TokenRange=4057:4062
7	a	a	ADP	E	_	8	mark	_	TokenRange=4063:4064
8	salutu	salutari	VERB	V	VerbForm=Inf	6	xcomp	_	TokenRange=4065:4073
9	comu	comu	SCONJ	CS	_	12	mark	_	TokenRange=4074:4078
10	u	lu	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	TokenRange=4079:4081
11	Signuri	Signuri	NOUN	SP	Gender=Masc|Number=Sing	12	nsubj	_	TokenRange=4082:4089
12	cumanna	cumannari	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	ccomp	_	SpaceAfter=No|TokenRange=4090:4097
13	!	!	PUNCT	FS	_	3	punct	_	SpaceAfter=No|TokenRange=4097:4098
14	»	»	PUNCT	FB	_	3	punct	_	TokenRange=4098:4099

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	«	«	PUNCT	FB	_	3	punct	_	SpaceAfter=No|TokenRange=47:48
2	Nun	nun	ADV	BN	PronType=Neg	3	advmod	_	TokenRange=48:51
3	è	essiri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=52:53
4	ca	ca	SCONJ	CS	_	6	mark	_	TokenRange=54:57
5	sì	essiri	AUX	VA	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	cop	_	TokenRange=58:61
6	bonu	bonu	ADJ	A	Gender=Masc|Number=Sing	3	ccomp	_	TokenRange=62:67
7	a	a	ADP	E	_	8	case	_	TokenRange=68:69
8	nenti	nenti	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	6	obl	_	SpaceAfter=No|TokenRange=70:76
9	;	;	PUNCT	FC	_	12	punct	_	TokenRange=76:77
10	tu	tu	PRON	PE	Number=Sing|Person=2|PronType=Prs	12	nsubj	_	TokenRange=78:80
11	sì	essiri	AUX	VA	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	12	cop	_	TokenRange=81:84
12	babbu	babbu	NOUN	S	Gender=Masc|Number=Sing	3	parataxis	_	SpaceAfter=No|TokenRange=85:90
13	,	,	PUNCT	FF	_	18	punct	_	TokenRange=90:91
14	ca	ca	SCONJ	CS	_	18	mark	_	TokenRange=92:95
15	è	essiri	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	_	TokenRange=96:97
16	n'	unu	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	18	det	_	SpaceAfter=No|TokenRange=98:101
17	autra	autru	ADJ	A	Gender=Fem|Number=Sing	18	amod	_	TokenRange=101:106
18	cosa	cosa	NOUN	S	Gender=Fem|Number=Sing	12	conj	_	SpaceAfter=No|TokenRange=107:111
19	.	.	PUNCT	FS	_	3	punct	_	SpaceAfter=No|TokenRange=111:112
20	»	»	PUNCT	FB	_	3	punct	_	TokenRange=112:113

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 ccomp	color:blue
1	-	-	PUNCT	FF	_	5	punct	_	SpaceAfter=No
2	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No
3	Ma	ma	CCONJ	CC	_	5	cc	_	_
4	è	essiri	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	nurmali	nurmali	ADJ	A	Number=Sing	13	ccomp:reported	_	_
6	ca	ca	SCONJ	CS	_	7	mark	_	_
7	feti	fetiri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
8	accussì	accussì	ADV	B	_	9	advmod	_	_
9	assà	assai	ADV	B	_	7	advmod	_	SpaceAfter=No
10	?	?	PUNCT	FS	_	5	punct	_	SpaceAfter=No
11	"	"	PUNCT	FB	_	5	punct	_	_
12	ni	ni	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	13	expl	_	_
13	spiau	spiari	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
14	‘Ntoniu	‘Ntoniu	PROPN	SP	_	13	nsubj	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	14	punct	_	_
16	schifijatu	schifijatu	ADJ	A	Gender=Masc|Number=Sing	14	amod	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	13	punct	_	SpacesAfter=\r\n\r\n

~~~


