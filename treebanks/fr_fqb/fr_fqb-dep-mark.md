---
layout: base
title:  'Statistics of mark in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `mark`

This relation is universal.

297 nodes (1%) are attached to their parents as `mark`.

297 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.98989898989899.

The following 13 pairs of parts of speech are connected with `mark`: <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-SCONJ.html">SCONJ</a></tt> (128; 43% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (110; 37% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-SCONJ.html">SCONJ</a></tt> (26; 9% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-SCONJ.html">SCONJ</a></tt> (13; 4% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (6; 2% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_fqb-pos-X.html">X</a></tt>-<tt><a href="fr_fqb-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 mark	color:blue
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


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 mark	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 mark	color:blue
1	Comment	comment	ADV	_	PronType=Int	3	advmod	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	calculée	calculer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
4	mon	son	DET	_	Number=Sing|Poss=Yes	5	det	_	_
5	aide	aide	NOUN	_	Number=Sing	3	nsubj:pass	_	_
6	à	à	ADP	_	_	8	case	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	logement	logement	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
9	si	si	SCONJ	_	_	11	mark	_	_
10	je	il	PRON	_	Number=Sing|Person=1	11	nsubj	_	_
11	vis	vivre	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	advcl	_	_
12	en	en	ADP	_	_	13	case	_	_
13	couple	couple	NOUN	_	Number=Sing	11	obl:mod	_	_
14	?	?	PUNCT	_	_	3	punct	_	_

~~~


