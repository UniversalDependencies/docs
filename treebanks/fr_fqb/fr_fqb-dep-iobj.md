---
layout: base
title:  'Statistics of iobj in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `iobj`

This relation is universal.

9 nodes (0%) are attached to their parents as `iobj`.

7 instances of `iobj` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44444444444444.

The following 2 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (7; 78% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (2; 22% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 iobj	color:blue
1	Quand	quand	ADV	_	PronType=Int	7	advmod	_	_
2	et	et	CCONJ	_	_	3	cc	_	_
3	comment	comment	ADV	_	PronType=Int	1	conj	_	_
4	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	-t-on	il	PRON	_	Number=Sing|Person=3|PronType=Ind	4	nsubj	_	_
6	me	moi	PRON	_	Number=Sing|Person=1|PronType=Prs	7	iobj	_	_
7	verser	verser	VERB	_	VerbForm=Inf	4	xcomp	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	prime	prime	NOUN	_	Gender=Fem|Number=Sing	7	obj	_	_
10	pour	pour	ADP	_	_	12	case	_	_
11	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	12	det	_	SpaceAfter=No
12	emploi	emploi	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	_
13	?	?	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 iobj	color:blue
1	Quel	quel	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	mois	mois	NOUN	_	Gender=Masc	1	nsubj	_	_
5	où	où	ADV	_	PronType=Rel	7	iobj	_	_
6	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:tense	_	_
7	entré	entrer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	acl:relcl	_	_
8	en	en	ADP	_	_	9	case	_	_
9	vigueur	vigueur	NOUN	_	_	7	obl:arg	_	_
10	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	11	det	_	SpaceAfter=No
11	embargo	embargo	NOUN	_	Gender=Masc|Number=Sing	7	nsubj	_	_
12	de	de	ADP	_	_	14	case	_	_
13	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	14	det	_	SpaceAfter=No
14	ONU	O.N.U.	PROPN	_	Gender=Fem|Number=Sing	11	nmod	_	_
15	sur	sur	ADP	_	_	17	case	_	_
16	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	pétrole	pétrole	NOUN	_	Gender=Masc|Number=Sing	11	nmod	_	_
18	visant	viser	VERB	_	Tense=Pres|VerbForm=Part	11	acl	_	_
19	Haïti	Haïti	PROPN	_	Gender=Fem|Number=Sing	18	obj	_	_
20	?	?	PUNCT	_	_	1	punct	_	_

~~~


