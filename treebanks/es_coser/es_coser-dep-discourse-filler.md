---
layout: base
title:  'Statistics of discourse:filler in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `discourse:filler`

This relation is a language-specific subtype of <tt><a href="es_coser-dep-discourse.html">discourse</a></tt>.

26 nodes (0%) are attached to their parents as `discourse:filler`.

16 instances of `discourse:filler` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.07692307692308.

The following 9 pairs of parts of speech are connected with `discourse:filler`: <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-INTJ.html">INTJ</a></tt> (12; 46% instances), <tt><a href="es_coser-pos-AUX.html">AUX</a></tt>-<tt><a href="es_coser-pos-INTJ.html">INTJ</a></tt> (3; 12% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-INTJ.html">INTJ</a></tt> (3; 12% instances), <tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_coser-pos-INTJ.html">INTJ</a></tt> (2; 8% instances), <tt><a href="es_coser-pos-PRON.html">PRON</a></tt>-<tt><a href="es_coser-pos-INTJ.html">INTJ</a></tt> (2; 8% instances), <tt><a href="es_coser-pos-ADP.html">ADP</a></tt>-<tt><a href="es_coser-pos-INTJ.html">INTJ</a></tt> (1; 4% instances), <tt><a href="es_coser-pos-ADV.html">ADV</a></tt>-<tt><a href="es_coser-pos-INTJ.html">INTJ</a></tt> (1; 4% instances), <tt><a href="es_coser-pos-NUM.html">NUM</a></tt>-<tt><a href="es_coser-pos-INTJ.html">INTJ</a></tt> (1; 4% instances), <tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_coser-pos-INTJ.html">INTJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 discourse:filler	color:blue
1	Sí	sí	INTJ	rg	_	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	fc	PunctType=Comm	1	punct	_	_
3	sí	sí	INTJ	rg	_	6	discourse	_	SpaceAfter=No
4	,	,	PUNCT	fc	PunctType=Comm	3	punct	_	_
5	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	así	así	ADV	rg	_	11	advcl	_	SpaceAfter=No
7	,	,	PUNCT	fc	PunctType=Comm	8	punct	_	_
8	eh	eh	INTJ	i	_	11	discourse:filler	_	SpaceAfter=No
9	,	,	PUNCT	fc	PunctType=Comm	8	punct	_	_
10	lo	él	PRON	pc3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	11	obj	_	_
11	recogíamos	recoger	VERB	vmii1p0	Mood=Ind|Number=Plur|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
12	.	.	PUNCT	fp	PunctType=Peri	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 discourse:filler	color:blue
1	Eh	eh	INTJ	i	_	7	discourse:filler	_	SpaceAfter=No
2	,	,	PUNCT	fc	PunctType=Comm	1	punct	_	_
3	poquillo	poco	ADV	_	_	7	advmod	_	_
4	¿	¿	PUNCT	fia	PunctSide=Ini|PunctType=Qest	7	punct	_	SpaceAfter=No
5	o	o	CCONJ	cc	_	7	cc	_	_
6	cómo	cómo	PRON	pt000000	PronType=Int	7	obj	_	_
7	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	7	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 discourse:filler	color:blue
1	Yo	yo	PRON	pp1csn00	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	le	él	PRON	pc3csd00	Case=Dat|Number=Sing|Person=3|PronType=Prs	4	obl:arg	_	_
3	suelo	soler	AUX	vmip1s0	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	decir	decir	VERB	vmn0000	VerbForm=Inf	0	root	_	_
5	a	a	ADP	fs	_	7	case	_	_
6	mi	mi	DET	dp1css	Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det	_	_
7	hermano	hermano	NOUN	ncms000	Gender=Masc|Number=Sing	4	obl:arg	_	SpaceAfter=No
8	:	:	PUNCT	fd	PunctType=Colo	7	punct	_	_
9	Joe	Joe	PROPN	_	_	7	appos	_	SpaceAfter=No
10	,	,	PUNCT	fc	PunctType=Comm	11	punct	_	_
11	cuidao	cuidado	NOUN	i	Gender=Masc|Number=Sing	4	obj	_	Ortho=cuidado|SpaceAfter=No
12	,	,	PUNCT	fc	PunctType=Comm	13	punct	_	_
13	eh	eh	INTJ	i	_	11	discourse:filler	_	SpaceAfter=No
14	.	.	PUNCT	fp	PunctType=Peri	4	punct	_	_

~~~


