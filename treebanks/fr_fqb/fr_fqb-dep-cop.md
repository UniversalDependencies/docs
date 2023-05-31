---
layout: base
title:  'Statistics of cop in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `cop`

This relation is universal.

947 nodes (4%) are attached to their parents as `cop`.

711 instances of `cop` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26504751847941.

The following 4 pairs of parts of speech are connected with `cop`: <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-AUX.html">AUX</a></tt> (547; 58% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-AUX.html">AUX</a></tt> (201; 21% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-AUX.html">AUX</a></tt> (179; 19% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-AUX.html">AUX</a></tt> (20; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Quel	quel	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
4	plus	plus	ADV	_	_	5	advmod	_	_
5	grand	grand	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
6	pays	pays	NOUN	_	Gender=Masc	1	nsubj	_	_
7	exportateur	exportateur	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	_
8	de	de	ADP	_	_	9	case	_	_
9	pétrole	pétrole	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
10	brut	brut	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	_
11	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Je	il	PRON	_	Number=Sing|Person=1	3	nsubj	_	_
2	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	étudiant	étudiant	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
4	et	et	CCONJ	_	_	6	cc	_	_
5	je	il	PRON	_	Number=Sing|Person=1	6	nsubj	_	_
6	cherche	chercher	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
7	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	aide	aide	NOUN	_	Number=Sing	6	obj	_	_
9	pour	pour	ADP	_	_	10	mark	_	_
10	payer	payer	VERB	_	VerbForm=Inf	8	acl	_	_
11	mon	son	DET	_	Number=Sing|Poss=Yes	12	det	_	_
12	logement	logement	NOUN	_	Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Qu'	que	PRON	_	PronType=Int	0	root	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	-ce	ce	PRON	_	_	1	nsubj	_	_
4	qu'	que	SCONJ	_	_	6	mark	_	SpaceAfter=No
5	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	aide	aide	NOUN	_	Number=Sing	1	dislocated	_	_
7	à	à	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	logement	logement	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
10	?	?	PUNCT	_	_	1	punct	_	_

~~~


