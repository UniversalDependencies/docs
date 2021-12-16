---
layout: base
title:  'Statistics of iobj in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `iobj`

This relation is universal.

2107 nodes (0%) are attached to their parents as `iobj`.

1122 instances of `iobj` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.29852871381111.

The following 15 pairs of parts of speech are connected with `iobj`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1148; 54% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (516; 24% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (255; 12% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (153; 7% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADV.html">ADV</a></tt> (11; 1% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-INTJ.html">INTJ</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-PART.html">PART</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 iobj	color:blue
1	Y	y	CCONJ	cc	_	11	advmod	11:advmod	_
2	tú	tú	PRON	pp2csn00	Case=Nom|Number=Sing|Person=2|PronType=Prs	11	nsubj	11:nsubj	_
3	con	con	ADP	sps00	_	5	case	5:case	_
4	tus	tu	DET	dp2cps	Number=Plur|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	5	det	5:det	_
5	caras	cara	NOUN	ncfp000	Gender=Fem|Number=Plur	11	obl	11:obl	_
6	y	y	CCONJ	cc	_	8	cc	8:cc	_
7	tus	tu	DET	dp2cps	Number=Plur|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	8	det	8:det	_
8	nombres	nombre	NOUN	ncmp000	Gender=Masc|Number=Plur	5	conj	5:conj	SpaceAfter=No
9	,	,	PUNCT	fc	PunctType=Comm	5	punct	5:punct	_
10	nos	yo	PRON	pp1cp000	Case=Dat|Number=Plur|Person=1|PrepCase=Npr|PronType=Prs	11	iobj	11:iobj	_
11	dejaste	dejar	VERB	vmis2s0	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	0	root	0:root	_
12	tutear	tutear	VERB	vmn0000	VerbForm=Inf	11	xcomp	11:xcomp	_
13	te	tú	PRON	_	Case=Acc|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	12	obj	12:obj	_
14	.	.	PUNCT	fp	PunctType=Peri	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 iobj	color:blue
1	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	2:det	_
2	presidente	presidente	NOUN	ncms000	Gender=Masc|Number=Sing	4	nsubj	4:nsubj	ClusterId=CESS-CAST-P-20000202-35_d-c1|ClusterType=Spec.person|MentionSpan=1-3|MentionMisc=Title
3	indonesio	indonesio	ADJ	aq0ms0	Gender=Masc|Number=Sing	2	amod	2:amod	_
4	pide	pedir	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	a	a	ADP	spcms	_	7	case	7:case	_
6	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	_
7	general	general	NOUN	nccs000	Number=Sing	4	iobj	4:iobj	ClusterId=CESS-CAST-P-20000202-35_d-c3|ClusterType=Spec.person|MentionSpan=7-8|MentionMisc=Title
8	Wiranto	Wiranto	PROPN	np00000	_	7	appos	7:appos	ClusterId=CESS-CAST-P-20000202-35_d-s1.sn.18|ClusterType=Spec.person|MentionSpan=8|MentionMisc=Title
9	que	que	SCONJ	cs	_	10	mark	10:mark	_
10	dimita	dimitir	VERB	vmsp3s0	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	ccomp	4:ccomp	SpaceAfter=No
11	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 iobj	color:blue
1	Lo	él	PRON	pp3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	2	obj	2:obj	_
2	anuncian	anunciar	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	en	en	ADP	sps00	_	5	case	5:case	_
4	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	5:det	_
5	tele	tele	NOUN	ncfs000	Gender=Fem|Number=Sing	2	obl	2:obl	SpaceAfter=No
6	,	,	PUNCT	fc	PunctType=Comm	9	punct	9:punct	_
7	en	en	ADP	sps00	_	9	case	9:case	_
8	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	9:det	_
9	prensa	prensa	NOUN	ncfs000	Gender=Fem|Number=Sing	5	conj	5:conj	_
10	Ford	Ford	PROPN	np0000a	_	2	iobj	2:iobj	MWE=Ford_Mondeo|MWEPOS=PROPN|ClusterId=3LB-CAST-a15-2-s14.sn.26|ClusterType=Spec.other|MentionSpan=10-11
11	Mondeo	Mondeo	PROPN	_	_	10	flat	10:flat	SpaceAfter=No
12	.	.	PUNCT	fp	PunctType=Peri	2	punct	2:punct	_

~~~


