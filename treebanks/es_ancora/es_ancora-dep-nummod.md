---
layout: base
title:  'Statistics of nummod in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `nummod`

This relation is universal.

6005 nodes (1%) are attached to their parents as `nummod`.

5239 instances of `nummod` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28376353039134.

The following 11 pairs of parts of speech are connected with `nummod`: <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (5154; 86% instances), <tt><a href="es_ancora-pos-SYM.html">SYM</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (355; 6% instances), <tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (204; 3% instances), <tt><a href="es_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (167; 3% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (73; 1% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (24; 0% instances), <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (15; 0% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-SYM.html">SYM</a></tt> (5; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Anthoney	Anthoney	PROPN	np0000p	_	3	nsubj	3:nsubj	MWE=Anthoney_Mngani|MWEPOS=PROPN|ArgTem=arg1:tem|Entity=(NOCOREF:Spec.person-person-1-gstype:spec
2	Mngani	Mngani	PROPN	_	_	1	flat	1:flat	Entity=NOCOREF:Spec.person)
3	tenía	tener	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	0:root	_
4	29	29	NUM	_	NumForm=Digit|NumType=Card	5	nummod	5:nummod	_
5	años	año	NOUN	ncmp000	Gender=Masc|Number=Plur	3	obj	3:obj	SpaceAfter=No|ArgTem=arg2:atr
6	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nummod	color:blue
1	Los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	2:det	Entity=(CESSCASTP1999100161c2--2-CorefType:ident,gstype:gen,HomoDD
2	letrados	letrado	NOUN	ncmp000	Gender=Masc|Number=Plur	3	nsubj	3:nsubj	ArgTem=arg0:agt|Entity=CESSCASTP1999100161c2)
3	piden	pedir	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	que	que	SCONJ	cs	_	13	mark	13:mark	_
5	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	6:det	Entity=(NOCOREF:Gen--2-gstype:gen,HomoDD
6	cantidad	cantidad	NOUN	ncfs000	Gender=Fem|Number=Sing	13	nsubj	13:nsubj	ArgTem=arg1:tem|Entity=NOCOREF:Gen)
7	sea	ser	AUX	vssp3s0	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	13:cop	ArgTem=arg1:pat
8	a	a	ADP	rg	ExtPos=ADP	13	case	13:case	MWE=al_menos|MWEPOS=ADV
9	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	13:det	_
10	menos	menos	ADV	_	Degree=Cmp	8	fixed	8:fixed	_
11	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	13:det	Entity=(NOCOREF:Spec.number-number-2-gstype:spec
12	80	80	NUM	_	NumForm=Digit|NumType=Card	13	nummod	13:nummod	SpaceAfter=No
13	%	%	SYM	zp	_	3	ccomp	3:ccomp	SpaceAfter=No|ArgTem=arg2:atr|Entity=NOCOREF:Spec.number)
14	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 nummod	color:blue
1	Helio	Helio	PROPN	np0000p	_	0	root	0:root	Entity=(NOCOREF:Spec.person-person-1-gstype:spec(CESSCASTA2000061814736c16-person-1-CorefType:ident,gstype:spec|MWE=Helio_Castro_Neves|MWEPOS=PROPN
2	Castro	Castro	PROPN	_	_	1	flat	1:flat	_
3	Neves	Neves	PROPN	_	_	1	flat	1:flat	Entity=CESSCASTA2000061814736c16)
4	(	(	PUNCT	fpa	PunctSide=Ini|PunctType=Brck	5	punct	5:punct	SpaceAfter=No|Entity=(CESSCASTA2000061814736c1-organization-2-CorefType:ident,gstype:spec
5	Reynard/Honda	Reynard/Honda	PROPN	np0000o	_	1	flat	1:flat	SpaceAfter=No
6	)	)	PUNCT	fpt	PunctSide=Fin|PunctType=Brck	5	punct	5:punct	Entity=CESSCASTA2000061814736c1)NOCOREF:Spec.person)
7	2	2	NUM	_	NumForm=Digit|NumType=Card	1	nummod	1:nummod	SpaceAfter=No
8	.	.	PUNCT	fp	PunctType=Peri	1	punct	1:punct	_

~~~


