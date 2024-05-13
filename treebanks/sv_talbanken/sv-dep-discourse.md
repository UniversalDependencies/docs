---
layout: base
title:  'Statistics of discourse in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `discourse`

This relation is universal.

19 nodes (0%) are attached to their parents as `discourse`.

19 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.89473684210526.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-INTJ.html">INTJ</a></tt> (14; 74% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-INTJ.html">INTJ</a></tt> (3; 16% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-INTJ.html">INTJ</a></tt> (2; 11% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Jo	jo	INTJ	IN	_	5	discourse	_	SpaceAfter=No
2	,	,	PUNCT	MID	_	5	punct	_	_
3	kvinnorna	kvinna	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	5	nsubj	_	_
4	måste	måste	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
5	betrakta	betrakta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
6	även	även	ADV	AB	_	7	advmod	_	_
7	detta	denna	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	5	obj	_	_
8	som	som	CCONJ	KN	_	10	mark	_	_
9	sin	sig	DET	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	10	nmod:poss	_	_
10	angelägenhet	angelägenhet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Jo	jo	INTJ	IN	_	4	discourse	_	SpaceAfter=No
2	,	,	PUNCT	MID	_	4	punct	_	_
3	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
4	uttalande	uttalande	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
5	i	i	ADP	PP	_	6	case	_	_
6	Expressen	Expressen	PROPN	PM|NOM	Case=Nom	4	nmod	_	_
7	av	av	ADP	PP	_	8	case	_	_
8	Rose	Rose	PROPN	PM|NOM	Case=Nom	4	nmod	_	_
9	Kennedy	Kennedy	PROPN	PM|NOM	Case=Nom	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	MAD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 1 discourse	color:blue
1	Ja	ja	INTJ	IN	_	21	discourse	_	SpaceAfter=No
2	,	,	PUNCT	MID	_	21	punct	_	_
3	först	först	ADV	AB	_	21	advmod	_	_
4	och	och	CCONJ	KN	_	3	fixed	_	_
5	främst	främst	ADV	AB|SUV	Degree=Sup	3	fixed	_	_
6	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	21	cop	_	_
7	ju	ju	ADV	AB	_	21	advmod	_	_
8	detta	denna	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	21	nsubj	_	_
9	-	-	PUNCT	MID	_	21	punct	_	_
10	sett	se	ADJ	PC|PRF|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part	21	advcl	_	_
11	i	i	ADP	PP	_	16	case	_	_
12	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	16	det	_	_
13	globalt	global	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	16	amod	_	_
14	och	och	CCONJ	KN	_	15	cc	_	_
15	historiskt	historisk	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	13	conj	_	_
16	perspektiv	perspektiv	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	10	obl	_	_
17	-	-	PUNCT	MID	_	21	punct	_	_
18	ingalunda	ingalunda	ADV	AB	Polarity=Neg	21	advmod	_	_
19	något	någon	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Ind	21	det	_	_
20	särskilt	särskilt	ADV	AB	_	21	advmod	_	_
21	karakteristiskt	karakteristisk	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
22	för	för	ADP	PP	_	23	case	_	_
23	kristendomen	kristendom	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	21	obl	_	SpaceAfter=No
24	.	.	PUNCT	MAD	_	21	punct	_	_

~~~


