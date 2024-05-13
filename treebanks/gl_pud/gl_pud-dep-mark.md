---
layout: base
title:  'Statistics of mark in UD_Galician-PUD'
udver: '2'
---

## Treebank Statistics: UD_Galician-PUD: Relations: `mark`

This relation is universal.

342 nodes (1%) are attached to their parents as `mark`.

342 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.24561403508772.

The following 15 pairs of parts of speech are connected with `mark`: <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-SCONJ.html">SCONJ</a></tt> (254; 74% instances), <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-SCONJ.html">SCONJ</a></tt> (26; 8% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-ADV.html">ADV</a></tt> (19; 6% instances), <tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_pud-pos-SCONJ.html">SCONJ</a></tt> (17; 5% instances), <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-SCONJ.html">SCONJ</a></tt> (5; 1% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-CCONJ.html">CCONJ</a></tt> (4; 1% instances), <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_pud-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="gl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="gl_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="gl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="gl_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="gl_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 mark	color:blue
1	Foi	ser	AUX	VSIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	cop	_	_
2	extremadamente	extremadamente	ADV	RG	_	3	advmod	_	_
3	elegante	elegante	ADJ	AQ0CS	_	0	root	_	_
4	e	e	CCONJ	CC	_	5	cc	_	_
5	tomou	tomar	VERB	VMIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	3	conj	_	_
6	o	o	PRON	PP3MSA00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
7	ben	ben	ADV	RG	_	5	advmod	_	SpaceAfter=No
8	,	,	PUNCT	Fc	_	9	punct	_	_
9	estou	estar	VERB	VMIP1S0	Mood=Ind|Number=Sing|Person=1|Tense=Pres	3	parataxis	_	_
10	que	que	SCONJ	CS	_	11	mark	_	_
11	boto	botar	VERB	VMIP1S0	Mood=Ind|Number=Sing|Person=1|Tense=Pres	9	ccomp	_	_
12	lume	lume	NOUN	NCMS000	Gender=Masc|Number=Sing	11	obj	_	SpaceAfter=No
13	.	.	PUNCT	Fp	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 mark	color:blue
1	Como	como	SCONJ	CS	_	3	mark	_	_
2	os	o	DET	DA0MP0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	fiordos	fiordos	NOUN	NCMP000	Gender=Masc|Number=Plur	10	obl	_	SpaceAfter=No
4	,	,	PUNCT	Fc	_	3	punct	_	_
5	os	o	DET	DA0MP0	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	lagos	lago	NOUN	NCMP000	Gender=Masc|Number=Plur	10	nsubj	_	_
7	de	de	ADP	SP	AdpType=Prep	8	case	_	_
8	auga	auga	NOUN	NCFS000	Gender=Fem|Number=Sing	6	nmod	_	_
9	doce	12	NUM	Z	NumType=Card	8	nummod	_	_
10	adoitan	adoitar	VERB	VMIP3P0	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
11	ser	ser	AUX	VSN0000	VerbForm=Inf	12	cop	_	_
12	profundos	profundo	ADJ	AQ0MP	_	10	xcomp	_	SpaceAfter=No
13	.	.	PUNCT	Fp	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 mark	color:blue
1	Quizais	quizais	ADV	RG	_	3	advmod	_	_
2	non	non	ADV	RN	Polarity=Neg	3	advmod	_	_
3	importe	importe	NOUN	NCMS000	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Fc	_	9	punct	_	_
5	xa	xa	ADV	RG	_	9	mark	_	_
6	que	que	SCONJ	CS	_	5	fixed	_	_
7	non	non	ADV	RN	Polarity=Neg	9	advmod	_	_
8	estarei	estar	AUX	VMIF1S0	Mood=Ind|Number=Sing|Person=1|Tense=Fut	9	cop	_	_
9	preocupado	preocupar	VERB	VMP00SM	Gender=Masc|Number=Sing|VerbForm=Part	3	advcl	_	_
10	por	por	ADP	SP	AdpType=Prep	12	case	_	_
11	moito	moito	DET	DI0MS0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	tempo	tempo	NOUN	NCMS000	Gender=Masc|Number=Sing	9	obl	_	SpaceAfter=No
13	.	.	PUNCT	Fp	_	3	punct	_	_

~~~


