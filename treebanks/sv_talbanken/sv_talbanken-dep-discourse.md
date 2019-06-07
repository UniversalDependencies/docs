---
layout: base
title:  'Statistics of discourse in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `discourse`

This relation is universal.

21 nodes (0%) are attached to their parents as `discourse`.

21 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.47619047619048.

The following 3 pairs of parts of speech are connected with `discourse`: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-INTJ.html">INTJ</a></tt> (14; 67% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-INTJ.html">INTJ</a></tt> (5; 24% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-INTJ.html">INTJ</a></tt> (2; 10% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Jo	jo	INTJ	IN	_	5	discourse	5:discourse	SpaceAfter=No
2	,	,	PUNCT	MID	_	5	punct	5:punct	_
3	kvinnorna	kvinna	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	5	nsubj	5:nsubj	_
4	måste	måste	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
5	betrakta	betrakta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	_
6	även	även	ADV	AB	_	7	advmod	7:advmod	_
7	detta	denna	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	5	obj	5:obj|10:nsubj	_
8	som	som	SCONJ	KN	_	10	mark	10:mark	_
9	sin	sig	PRON	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	10	nmod:poss	10:nmod:poss	_
10	angelägenhet	angelägenhet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	xcomp	5:xcomp	SpaceAfter=No
11	.	.	PUNCT	MAD	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 discourse	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	nsubj	2:nsubj	_
2	gäller	gälla	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	er	ni	PRON	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	4	nmod:poss	4:nmod:poss	_
4	familj	familj	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	2:obj	_
5	-	-	PUNCT	MID	_	4	punct	4:punct	_
6	ert	ni	PRON	PS|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	7	nmod:poss	7:nmod:poss	_
7	hjärta	hjärta	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	conj	2:obj|4:conj	_
8	-	-	PUNCT	MID	_	4	punct	4:punct	_
9	ja	ja	INTJ	IN	_	12	discourse	12:discourse	SpaceAfter=No
10	,	,	PUNCT	MID	_	12	punct	12:punct	_
11	hela	hel	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	12	amod	12:amod	_
12	samhället	samhälle	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	4	conj	2:obj|4:conj	SpaceAfter=No
13	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 1 discourse	color:blue
1	Ja	ja	INTJ	IN	_	21	discourse	21:discourse	SpaceAfter=No
2	,	,	PUNCT	MID	_	21	punct	21:punct	_
3	först	först	ADV	AB	_	21	advmod	21:advmod	_
4	och	och	CCONJ	KN	_	3	fixed	3:fixed	_
5	främst	främst	ADV	AB|SUV	Degree=Sup	3	fixed	3:fixed	_
6	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	21	cop	21:cop	_
7	ju	ju	ADV	AB	_	21	advmod	21:advmod	_
8	detta	denna	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	21	nsubj	21:nsubj	_
9	-	-	PUNCT	MID	_	21	punct	21:punct	_
10	sett	se	ADJ	PC|PRF|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part	21	advcl	21:advcl	_
11	i	i	ADP	PP	_	16	case	16:case	_
12	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	16	det	16:det	_
13	globalt	global	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	16	amod	16:amod	_
14	och	och	CCONJ	KN	_	15	cc	15:cc	_
15	historiskt	historisk	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	13	conj	13:conj:och|16:amod	_
16	perspektiv	perspektiv	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	10	obl	10:obl:i	_
17	-	-	PUNCT	MID	_	21	punct	21:punct	_
18	ingalunda	ingalunda	ADV	AB	Polarity=Neg	21	advmod	21:advmod	_
19	något	någon	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Ind	21	det	21:det	_
20	särskilt	särskilt	ADV	AB	_	21	advmod	21:advmod	_
21	karakteristiskt	karakteristisk	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	_
22	för	för	ADP	PP	_	23	case	23:case	_
23	kristendomen	kristendom	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	21	obl	21:obl:för	SpaceAfter=No
24	.	.	PUNCT	MAD	_	21	punct	21:punct	_

~~~


