---
layout: base
title:  'Statistics of nummod in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `nummod`

This relation is universal.

6005 nodes (1%) are attached to their parents as `nummod`.

4499 instances of `nummod` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28442964196503.

The following 11 pairs of parts of speech are connected with `nummod`: <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (4445; 74% instances), <tt><a href="es_ancora-pos-DET.html">DET</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (744; 12% instances), <tt><a href="es_ancora-pos-SYM.html">SYM</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (355; 6% instances), <tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (193; 3% instances), <tt><a href="es_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (167; 3% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (54; 1% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (24; 0% instances), <tt><a href="es_ancora-pos-NUM.html">NUM</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (15; 0% instances), <tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_ancora-pos-SYM.html">SYM</a></tt> (5; 0% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="es_ancora-pos-ADP.html">ADP</a></tt>-<tt><a href="es_ancora-pos-NUM.html">NUM</a></tt> (1; 0% instances).


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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	Y	y	CCONJ	cc	_	7	cc	7:cc	_
2	a	a	ADP	sps00	_	5	case	5:case	_
3	los	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	5:det	_
4	dos	dos	NUM	dn0cp0	Number=Plur|NumForm=Word|NumType=Card	3	nummod	3:nummod	_
5	días	día	NOUN	ncmp000	Gender=Masc|Number=Plur	7	obl	7:obl	ArgTem=argM:tmp
6	la	él	PRON	pp3fsa00	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	7	obj	7:obj	ArgTem=arg1:pat
7	desmienten	desmentir	VERB	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
8	.	.	PUNCT	fp	PunctType=Peri	7	punct	7:punct	_

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
8	a	a	ADP	rg	_	13	case	13:case	MWE=al_menos|MWEPOS=ADV
9	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	13:det	_
10	menos	menos	ADV	_	Degree=Cmp	8	fixed	8:fixed	_
11	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	13:det	Entity=(NOCOREF:Spec.number-number-2-gstype:spec
12	80	80	NUM	_	NumForm=Digit|NumType=Card	13	nummod	13:nummod	SpaceAfter=No
13	%	%	SYM	zp	_	3	ccomp	3:ccomp	SpaceAfter=No|ArgTem=arg2:atr|Entity=NOCOREF:Spec.number)
14	.	.	PUNCT	fp	PunctType=Peri	3	punct	3:punct	_

~~~


