---
layout: base
title:  'Statistics of expl:impers in UD_Sicilian-STB'
udver: '2'
---

## Treebank Statistics: UD_Sicilian-STB: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="scn_stb-dep-expl.html">expl</a></tt>.
There are also 2 other language-specific subtypes of `expl`: <tt><a href="scn_stb-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="scn_stb-dep-expl-pv.html">expl:pv</a></tt>.

11 nodes (0%) are attached to their parents as `expl:impers`.

11 instances of `expl:impers` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36363636363636.

The following 1 pairs of parts of speech are connected with `expl:impers`: <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-PRON.html">PRON</a></tt> (11; 100% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 expl:impers	color:blue
1	Ḍḍa	chiddu	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	TokenRange=0:4
2	picca	picca	NOUN	S	Gender=Masc|Number=Sing	14	nsubj:pass	_	TokenRange=1155:1159
3	di	di	ADP	E	_	4	case	_	TokenRange=1160:1162
4	celu	celu	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	TokenRange=1163:1168
5	ca	ca	PRON	PR	PronType=Rel	8	nsubj:pass	_	TokenRange=1169:1172
6	nun	nun	ADV	BN	PronType=Neg	8	advmod	_	TokenRange=1173:1176
7	era	essiri	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux:pass	_	TokenRange=1177:1180
8	uccupata	uccupari	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl:relcl	_	TokenRange=1181:1189
9	di	di	ADP	E	_	11	case	_	_
10	li	lu	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	11	det	_	_
11	nèvuli	nèvula	NOUN	S	Gender=Fem|Number=Plur	8	obl:agent	_	SpaceAfter=No|TokenRange=1196:1202
12	,	,	PUNCT	FF	_	2	punct	_	TokenRange=1202:1203
13	si	si	PRON	PC	Person=3|PronType=Prs	14	expl:impers	_	Clitic=Yes|TokenRange=1204:1206
14	ntenni	intenniri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|TokenRange=1207:1214
15	.	.	PUNCT	FS	_	14	punct	_	TokenRange=1214:1215

~~~


