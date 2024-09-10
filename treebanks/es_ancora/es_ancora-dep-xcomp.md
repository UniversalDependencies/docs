---
layout: base
title:  'Statistics of xcomp in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `xcomp`

This relation is universal.

4831 nodes (1%) are attached to their parents as `xcomp`.

4663 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.1885737942455.

The following 21 pairs of parts of speech are connected with `xcomp`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (3946; 82% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (465; 10% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (182; 4% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (153; 3% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (21; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (15; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADV.html">ADV</a></tt> (13; 0% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (11; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="es_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-AUX.html">AUX</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt>-<tt><a href="es_ancora-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 xcomp	color:blue
1	Y	y	CCONJ	cc	_	11	cc	11:cc	_
2	tú	tú	PRON	pp2csn00	Case=Nom|Number=Sing|Person=2|PronType=Prs	11	nsubj	11:nsubj	ArgTem=arg0:agt
3	con	con	ADP	sps00	_	5	case	5:case	_
4	tus	tu	DET	dp2cps	Number=Plur|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	5	det	5:det	_
5	caras	cara	NOUN	ncfp000	Gender=Fem|Number=Plur	11	obl	11:obl	ArgTem=argM:adv
6	y	y	CCONJ	cc	_	8	cc	8:cc	_
7	tus	tu	DET	dp2cps	Number=Plur|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	8	det	8:det	_
8	nombres	nombre	NOUN	ncmp000	Gender=Masc|Number=Plur	5	conj	5:conj	SpaceAfter=No
9	,	,	PUNCT	fc	PunctType=Comm	5	punct	5:punct	_
10	nos	yo	PRON	pp1cp000	Case=Dat|Number=Plur|Person=1|PrepCase=Npr|PronType=Prs	11	obl:arg	11:obl:arg	ArgTem=arg2:ben
11	dejaste	dejar	VERB	vmis2s0	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	0	root	0:root	_
12	tutear	tutear	VERB	vmn0000	VerbForm=Inf	11	xcomp	11:xcomp	ArgTem=arg1:pat
13	te	tú	PRON	_	Case=Acc|Number=Sing|Person=2|PrepCase=Npr|PronType=Prs	12	obj	12:obj	_
14	.	.	PUNCT	fp	PunctType=Peri	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	Pero	pero	CCONJ	cc	_	5	advmod	5:advmod	_
2	ella	él	PRON	pp3fs000	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	ArgTem=arg0:agt
3	nunca	nunca	ADV	rg	_	5	advmod	5:advmod	ArgTem=argM:tmp
4	lo	él	PRON	pp3msa00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	5	obj	5:obj	ArgTem=arg1:pat
5	vio	ver	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
6	claro	claro	ADJ	aq0ms0	Gender=Masc|Number=Sing	5	xcomp	5:xcomp	SpaceAfter=No|ArgTem=argM:atr
7	.	.	PUNCT	fp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	Una	uno	DET	di0fs0	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	2	det	2:det	_
2	vecina	vecina	NOUN	ncfs000	Gender=Fem|Number=Sing	4	nsubj	4:nsubj	ArgTem=arg0:agt
3	nos	yo	PRON	pp1cp000	Case=Dat|Number=Plur|Person=1|PrepCase=Npr|PronType=Prs	4	obl:arg	4:obl:arg	ArgTem=arg2:ben
4	dijo	decir	VERB	vmis3s0	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	SpaceAfter=No
5	:	:	PUNCT	fd	PunctType=Colo	7	punct	7:punct	_
6	-	-	PUNCT	fg	PunctType=Dash	7	punct	7:punct	_
7	Parecía	parecer	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	ccomp	4:ccomp	ArgTem=arg1:pat
8	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	9:det	_
9	cura	cura	NOUN	ncms000	Gender=Masc|Number=Sing	7	xcomp	7:xcomp	ArgTem=arg2:atr
10	o	o	CCONJ	cc	_	11	cc	11:cc	_
11	algo	algo	PRON	pi0cs000	Number=Sing|PronType=Ind	9	conj	9:conj	_
12	así	así	ADV	rg	_	11	advmod	11:advmod	_
13	-	-	PUNCT	fg	PunctType=Dash	4	punct	4:punct	SpaceAfter=No
14	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


