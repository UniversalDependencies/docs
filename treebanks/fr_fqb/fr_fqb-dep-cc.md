---
layout: base
title:  'Statistics of cc in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `cc`

This relation is universal.

98 nodes (0%) are attached to their parents as `cc`.

98 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83673469387755.

The following 9 pairs of parts of speech are connected with `cc`: <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-CCONJ.html">CCONJ</a></tt> (35; 36% instances), <tt><a href="fr_fqb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_fqb-pos-CCONJ.html">CCONJ</a></tt> (32; 33% instances), <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-CCONJ.html">CCONJ</a></tt> (23; 23% instances), <tt><a href="fr_fqb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_fqb-pos-CCONJ.html">CCONJ</a></tt> (3; 3% instances), <tt><a href="fr_fqb-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_fqb-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_fqb-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-DET.html">DET</a></tt>-<tt><a href="fr_fqb-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="fr_fqb-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_fqb-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 cc	color:blue
1	Qui	qui	PRON	_	PronType=Int	3	nsubj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:tense	_	_
3	remporté	remporter	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	Oscar	Oscar	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
6	pour	pour	ADP	_	_	9	case	_	_
7	"	"	PUNCT	_	_	9	punct	_	SpaceAfter=No
8	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	belle	beau	ADJ	_	Gender=Fem|Number=Sing	3	advcl	_	_
10	et	et	CCONJ	_	_	12	cc	_	_
11	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	bête	bête	NOUN	_	Gender=Fem|Number=Sing	9	conj	_	SpaceAfter=No
13	"	"	PUNCT	_	_	9	punct	_	_
14	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 cc	color:blue
1	Combien	combien	ADV	_	PronType=Int	4	obl:arg	_	_
2	de	de	ADP	_	_	3	case	_	_
3	temps	temps	NOUN	_	Gender=Masc	1	obl:arg	_	_
4	dure	durer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	voyage	voyage	NOUN	_	Gender=Masc|Number=Sing	4	nsubj	_	_
7	entre	entre	ADP	_	_	8	case	_	_
8	Tokyo	Tokyo	PROPN	_	Gender=Masc|Number=Sing	6	nmod	_	_
9	et	et	CCONJ	_	_	10	cc	_	_
10	Niigata	Niigata	PROPN	_	_	8	conj	_	_
11	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
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


