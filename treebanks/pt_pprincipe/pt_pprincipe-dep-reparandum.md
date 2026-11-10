---
layout: base
title:  'Statistics of reparandum in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `reparandum`

This relation is universal.

4 nodes (0%) are attached to their parents as `reparandum`.

4 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 3 pairs of parts of speech are connected with `reparandum`: <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-ADP.html">ADP</a></tt> (1; 25% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 reparandum	color:blue
1	-	-	PUNCT	_	_	10	punct	_	_
2	Tua	teu	DET	_	Gender=Fem|Number=Sing|Person=2|Poss=Yes|PronType=Prs	3	det	_	_
3	raposa	raposo	NOUN	_	Gender=Fem|Number=Sing	6	reparandum	_	SpaceAfter=No
4	...	...	PUNCT	_	_	3	punct	_	_
5	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	orelhas	orelha	NOUN	_	Gender=Fem|Number=Plur	10	nsubj	_	_
7	de	de	ADP	_	_	8	case	_	_
8	ela	ele	PRON	_	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	nmod	_	_
9	...	...	PUNCT	_	_	10	punct	_	_
10	parecem	parecer	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
11	chifres	chifre	NOUN	_	Gender=Masc|Number=Plur	10	xcomp	_	SpaceAfter=No
12	...	...	PUNCT	_	_	14	punct	_	_
13	são	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
14	compridas	comprido	ADJ	_	Gender=Fem|Number=Plur	10	conj	_	_
15	demais	demais	ADV	_	_	14	advmod	_	SpaceAfter=No
16	!	!	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 reparandum	color:blue
1	-	-	PUNCT	_	_	7	punct	_	_
2	De	de	ADP	_	_	7	reparandum	_	_
3	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	dep	_	_
4	...	...	PUNCT	_	_	2	punct	_	_
5	de	de	ADP	_	_	7	case	_	_
6	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	justiça	justiça	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
8	!	!	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 reparandum	color:blue
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


