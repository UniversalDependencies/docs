---
layout: base
title:  'Statistics of aux:pass in UD_Sicilian-STB'
udver: '2'
---

## Treebank Statistics: UD_Sicilian-STB: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="scn_stb-dep-aux.html">aux</a></tt>.

11 nodes (0%) are attached to their parents as `aux:pass`.

11 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-AUX.html">AUX</a></tt> (7; 64% instances), <tt><a href="scn_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="scn_stb-pos-AUX.html">AUX</a></tt> (4; 36% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux:pass	color:blue
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


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 aux:pass	color:blue
1	Comu	comu	ADV	B	_	6	advmod	_	TokenRange=2615:2619
2	siḍḍu	siddu	SCONJ	CS	_	6	mark	_	TokenRange=2620:2622
3	tuttu	tuttu	DET	T	Gender=Masc|Number=Sing|PronType=Tot	5	det:predet	_	TokenRange=2623:2628
4	ḍḍu	chiddu	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	5	det	_	TokenRange=2629:2633
5	travagghiu	travagghiu	NOUN	S	Gender=Masc|Number=Sing	6	nsubj	_	TokenRange=2634:2640
6	duru	durari	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	17	advcl	_	SpaceAfter=No|TokenRange=2641:2645
7	,	,	PUNCT	FF	_	6	punct	_	TokenRange=2645:2646
8	ḍḍu	chiddu	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	9	det	_	TokenRange=2647:2651
9	tempu	tempu	NOUN	S	Gender=Masc|Number=Sing	6	obl	_	TokenRange=2652:2657
10	jittatu	jittari	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	acl	_	TokenRange=2658:2663
11	pi	pi	ADP	E	_	12	mark	_	TokenRange=2664:2667
12	scrìviri	scriviri	VERB	V	VerbForm=Inf	10	advcl	_	TokenRange=2668:2676
13	canzuni	canzuna	NOUN	S	Gender=Fem|Number=Plur	12	obj	_	SpaceAfter=No|TokenRange=2677:2684
14	,	,	PUNCT	FF	_	6	punct	_	TokenRange=2684:2685
15	avìssiru	aviri	AUX	VA	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	17	aux	_	TokenRange=2686:2691
16	statu	essiri	AUX	VA	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	17	aux:pass	_	TokenRange=2692:2697
17	ammàtula	ammàtula	ADJ	A	Number=Sing	0	root	_	SpaceAfter=No|TokenRange=86:93
18	.	.	PUNCT	FS	_	17	punct	_	TokenRange=2706:2707

~~~


