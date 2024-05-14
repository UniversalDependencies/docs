---
layout: base
title:  'Statistics of nummod in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `nummod`

This relation is universal.

6271 nodes (1%) are attached to their parents as `nummod`.

5086 instances of `nummod` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21129006538032.

The following 10 pairs of parts of speech are connected with `nummod`: <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (4656; 74% instances), <tt><a href="ca_ancora-pos-SYM.html">SYM</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (599; 10% instances), <tt><a href="ca_ancora-pos-DET.html">DET</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (559; 9% instances), <tt><a href="ca_ancora-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (223; 4% instances), <tt><a href="ca_ancora-pos-ADV.html">ADV</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (184; 3% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (20; 0% instances), <tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (14; 0% instances), <tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="ca_ancora-pos-NUM.html">NUM</a></tt> (11; 0% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	També	també	ADV	rg	_	4	advmod	4:advmod	_
2	s'	ell	PRON	p0000000	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	4	obj	4:obj	SpaceAfter=No
3	ha	haver	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
4	fet	fer	VERB	vmp00sm	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
5	una	un	NUM	dn0fs0	Gender=Fem|Number=Sing|NumForm=Word|NumType=Card	6	nummod	6:nummod	_
6	ofrena	ofrena	NOUN	ncfs000	Gender=Fem|Number=Sing	4	nsubj	4:nsubj	ArgTem=arg1:pat
7	simbòlica	simbòlic	ADJ	aq0fs0	Gender=Fem|Number=Sing	6	amod	6:amod	_
8	a	a	ADP	sps00	_	11	case	11:case	_
9	'	'	PUNCT	fz	PunctType=Quot	11	punct	11:punct	SpaceAfter=No|Entity=(NOCOREF:Spec.person-person-3-gstype:spec
10	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	11:det	_
11	Moreneta	Moreneta	PROPN	np0000p	_	4	obl:arg	4:obl:arg	SpaceAfter=No|ArgTem=arg2:ben
12	'	'	PUNCT	fz	PunctType=Quot	11	punct	11:punct	SpaceAfter=No|Entity=NOCOREF:Spec.person)
13	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	L'	el	DET	da0cs0	Definite=Def|Number=Sing|PronType=Art	2	det	2:det	SpaceAfter=No|Entity=(NOCOREF:Spec.organization-organization-2-gstype:spec
2	SCH	SCH	PROPN	np0000o	_	4	nsubj	4:nsubj	ArgTem=arg0:agt|Entity=NOCOREF:Spec.organization)
3	va	anar	AUX	vaip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	4:aux	_
4	perdre	perdre	VERB	vmn0000	VerbForm=Inf	0	root	0:root	_
5	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	7:det	Entity=(NOCOREF:Spec.number-number-2-gstype:spec
6	3,33	3,33	NUM	_	NumForm=Digit|NumType=Card	7	nummod	7:nummod	SpaceAfter=No
7	%	%	SYM	zp	_	4	obj	4:obj	ArgTem=arg1:pat|Entity=NOCOREF:Spec.number)
8	i	i	CCONJ	cc	_	10	cc	10:cc	_
9	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	10:det	Entity=(NOCOREF:Spec.organization-organization-2-gstype:spec
10	BBVA	BBVA	PROPN	np0000o	_	4	conj	4:conj	SpaceAfter=No|Entity=NOCOREF:Spec.organization)
11	,	,	PUNCT	fc	PunctType=Comm	14	punct	14:punct	_
12	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	14:det	Entity=(NOCOREF:Spec.number-number-2-gstype:spec
13	2,21	2,21	NUM	_	NumForm=Digit|NumType=Card	14	nummod	14:nummod	SpaceAfter=No
14	%	%	SYM	zp	_	10	appos	10:appos	SpaceAfter=No|Entity=NOCOREF:Spec.number)
15	.	.	PUNCT	fp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nummod	color:blue
1	Els	el	DET	da0mp0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	3:det	_
2	tres	tres	NUM	dn0cp0	Number=Plur|NumForm=Word|NumType=Card	1	nummod	1:nummod	_
3	accidentats	accidentat	NOUN	ncmp000	Gender=Masc|Number=Plur	6	nsubj	6:nsubj	ArgTem=arg1:tem
4	són	ser	AUX	vmip3p0	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	6:cop	_
5	de	de	ADP	sps00	_	6	case	6:case	_
6	nacionalitat	nacionalitat	NOUN	ncfs000	Gender=Fem|Number=Sing	0	root	0:root	ArgTem=arg2:atr
7	marroquina	marroquí	ADJ	aq0fs0	Gender=Fem|Number=Sing	6	amod	6:amod	SpaceAfter=No
8	.	.	PUNCT	fp	PunctType=Peri	6	punct	6:punct	_

~~~


