---
layout: base
title:  'Statistics of punct in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `punct`

This relation is universal.

1615 nodes (20%) are attached to their parents as `punct`.

1241 instances of `punct` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.61547987616099.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="es_coser-pos-VERB.html">VERB</a></tt>-<tt><a href="es_coser-pos-PUNCT.html">PUNCT</a></tt> (810; 50% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-PUNCT.html">PUNCT</a></tt> (268; 17% instances), <tt><a href="es_coser-pos-ADV.html">ADV</a></tt>-<tt><a href="es_coser-pos-PUNCT.html">PUNCT</a></tt> (109; 7% instances), <tt><a href="es_coser-pos-INTJ.html">INTJ</a></tt>-<tt><a href="es_coser-pos-PUNCT.html">PUNCT</a></tt> (105; 7% instances), <tt><a href="es_coser-pos-PRON.html">PRON</a></tt>-<tt><a href="es_coser-pos-PUNCT.html">PUNCT</a></tt> (89; 6% instances), <tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_coser-pos-PUNCT.html">PUNCT</a></tt> (62; 4% instances), <tt><a href="es_coser-pos-ADP.html">ADP</a></tt>-<tt><a href="es_coser-pos-PUNCT.html">PUNCT</a></tt> (34; 2% instances), <tt><a href="es_coser-pos-AUX.html">AUX</a></tt>-<tt><a href="es_coser-pos-PUNCT.html">PUNCT</a></tt> (32; 2% instances), <tt><a href="es_coser-pos-DET.html">DET</a></tt>-<tt><a href="es_coser-pos-PUNCT.html">PUNCT</a></tt> (22; 1% instances), <tt><a href="es_coser-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_coser-pos-PUNCT.html">PUNCT</a></tt> (20; 1% instances), <tt><a href="es_coser-pos-X.html">X</a></tt>-<tt><a href="es_coser-pos-PUNCT.html">PUNCT</a></tt> (20; 1% instances), <tt><a href="es_coser-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="es_coser-pos-PUNCT.html">PUNCT</a></tt> (19; 1% instances), <tt><a href="es_coser-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="es_coser-pos-PUNCT.html">PUNCT</a></tt> (17; 1% instances), <tt><a href="es_coser-pos-NUM.html">NUM</a></tt>-<tt><a href="es_coser-pos-PUNCT.html">PUNCT</a></tt> (8; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 punct	color:blue
1	¿	¿	PUNCT	fia	PunctSide=Ini|PunctType=Qest	5	punct	_	SpaceAfter=No
2	Olivo	olivo	NOUN	ncms000	Gender=Masc|Number=Sing	5	obj	_	_
3	por	por	ADP	sps00	_	4	case	_	_
4	aquí	aquí	ADV	rg	_	5	advmod	_	_
5	hay	haber	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 punct	color:blue
1	¿	¿	PUNCT	fia	PunctSide=Ini|PunctType=Qest	6	punct	_	SpaceAfter=No
2	Y	y	CCONJ	cc	_	6	cc	_	_
3	qué	qué	PRON	pt0cn000	PronType=Int	6	nsubj	_	_
4	son	ser	AUX	vsip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	amocafres	amocafre	NOUN	_	Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
7	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 punct	color:blue
1	No	no	ADV	rn	Polarity=Neg	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	fc	PunctType=Comm	1	punct	_	_
3	pero	pero	CCONJ	cc	_	4	cc	_	_
4	antes	antes	ADV	rg	_	7	advmod	_	SpaceAfter=No
5	,	,	PUNCT	fc	PunctType=Comm	7	punct	_	_
6	¿	¿	PUNCT	fia	PunctSide=Ini|PunctType=Qest	7	punct	_	SpaceAfter=No
7	vivía	vivir	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
8	allí	allí	ADV	rg	_	7	advmod	_	SpaceAfter=No
9	,	,	PUNCT	fc	PunctType=Comm	12	punct	_	_
10	en	en	ADP	sps00	_	12	case	_	_
11	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	masana	masana	NOUN	aq0fs0	Gender=Fem|Number=Sing	7	obl	_	SpaceAfter=No
13	?	?	PUNCT	fit	PunctSide=Fin|PunctType=Qest	7	punct	_	_

~~~


