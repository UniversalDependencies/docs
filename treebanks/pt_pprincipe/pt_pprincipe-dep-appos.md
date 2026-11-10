---
layout: base
title:  'Statistics of appos in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `appos`

This relation is universal.

11 nodes (0%) are attached to their parents as `appos`.

11 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.90909090909091.

The following 7 pairs of parts of speech are connected with `appos`: <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-PROPN.html">PROPN</a></tt> (3; 27% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (2; 18% instances), <tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt> (1; 9% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (1; 9% instances), <tt><a href="pt_pprincipe-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 appos	color:blue
1	Havia	haver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	em	em	ADP	_	_	4	case	_	_
3	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	estrela	estrela	NOUN	_	Gender=Fem|Number=Sing	1	obl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	em	em	ADP	_	_	8	case	_	_
7	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	planeta	planeta	NOUN	_	Number=Sing	1	obl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	meu	meu	PRON	_	Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	8	appos	_	SpaceAfter=No
12	,	,	PUNCT	_	_	14	punct	_	_
13	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	Terra	Terra	PROPN	_	_	8	appos	_	SpaceAfter=No
15	,	,	PUNCT	_	_	8	punct	_	_
16	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	principezinho	principezinho	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	_
18	a	a	ADP	_	_	19	mark	_	_
19	consolar	consolar	VERB	_	VerbForm=Inf	17	acl	_	SpaceAfter=No
20	!	!	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	Para	para	ADP	_	_	2	case	_	_
2	outros	outro	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	8	nmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	5	punct	_	_
4	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	sábios	sábio	NOUN	_	Gender=Masc|Number=Plur	2	appos	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	são	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	problemas	problema	NOUN	_	Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	Mas	mas	CCONJ	_	_	12	cc	_	_
2	nós	nós	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	10	reparandum	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	nós	nós	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	appos	_	_
5	que	que	PRON	_	PronType=Rel	6	nsubj	_	_
6	compreendemos	compreender	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
7	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	vida	vida	NOUN	_	Gender=Fem|Number=Sing	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	4	punct	_	_
10	nós	nós	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	_
11	não	não	ADV	_	_	12	advmod	_	_
12	ligamos	ligar	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
13	a	a	ADP	_	_	15	case	_	_
14	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	15	det	_	_
15	números	número	NOUN	_	Gender=Masc|Number=Plur	12	obl	_	SpaceAfter=No
16	!	!	PUNCT	_	_	12	punct	_	_

~~~


