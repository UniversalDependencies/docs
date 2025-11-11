---
layout: base
title:  'Statistics of expl in UD_Sicilian-STB'
udver: '2'
---

## Treebank Statistics: UD_Sicilian-STB: Relations: `expl`

This relation is universal.
There are 3 language-specific subtypes of `expl`: <tt><a href="scn_stb-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="scn_stb-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="scn_stb-dep-expl-pv.html">expl:pv</a></tt>.

328 nodes (3%) are attached to their parents as `expl`.

317 instances of `expl` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30182926829268.

The following 2 pairs of parts of speech are connected with `expl`: <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-PRON.html">PRON</a></tt> (326; 99% instances), <tt><a href="scn_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="scn_stb-pos-PRON.html">PRON</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 expl	color:blue
1	Ci	ci	PRON	PC	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	iobj	_	Clitic=Yes|TokenRange=1:4
2	sautau	sautari	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	TokenRange=5:10
3	u	lu	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	TokenRange=11:13
4	cori	cori	NOUN	S	Gender=Masc|Number=Sing	2	obj	_	TokenRange=14:19
5	di	di	ADP	E	_	7	case	_	TokenRange=20:22
6	na	unu	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	TokenRange=23:26
7	manera	manera	NOUN	S	Gender=Fem|Number=Sing	2	obl	_	TokenRange=27:34
8	ca	ca	PRON	PR	PronType=Rel	11	nsubj	_	TokenRange=35:38
9	si	si	PRON	PC	Person=3|PronType=Prs	11	expl	_	Clitic=Yes
10	lu	lu	PRON	PC	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	obj	_	Clitic=Yes
11	sintìa	sintiri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	acl:relcl	_	TokenRange=45:52
12	nta	nta	ADP	E	_	14	case	_	_
13	la	lu	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	gula	gula	NOUN	S	Gender=Fem|Number=Sing	11	obl	_	SpaceAfter=No|TokenRange=59:63
15	.	.	PUNCT	FS	_	2	punct	_	TokenRange=63:64

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 expl	color:blue
1	L'	lu	DET	RD	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No|TokenRange=0:2
2	atmusfera	atmusfera	NOUN	S	Gender=Fem|Number=Sing	5	nsubj	_	TokenRange=2:11
3	s'	si	PRON	PC	Person=3|PronType=Prs	5	expl	_	Clitic=Yes|SpaceAfter=No|TokenRange=12:14
4	avìa	aviri	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	aux	_	TokenRange=15:18
5	alliggiatu	alliggiatu	ADJ	A	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No|TokenRange=19:24
6	.	.	PUNCT	FS	_	5	punct	_	SpaceAfter=No|TokenRange=24:25

~~~


