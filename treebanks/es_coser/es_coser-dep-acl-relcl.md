---
layout: base
title:  'Statistics of acl:relcl in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="es_coser-dep-acl.html">acl</a></tt>.

33 nodes (0%) are attached to their parents as `acl:relcl`.

33 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.78787878787879.

The following 4 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-VERB.html">VERB</a></tt> (27; 82% instances), <tt><a href="es_coser-pos-PRON.html">PRON</a></tt>-<tt><a href="es_coser-pos-VERB.html">VERB</a></tt> (3; 9% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl:relcl	color:blue
1	Un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	litro	litro	NOUN	ncms000	Gender=Masc|Number=Sing	0	root	_	_
3	o	o	CCONJ	cc	_	6	cc	_	SpaceAfter=No
4	...	...	PUNCT	_	PunctType=Comm	3	punct	_	_
5	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	cantidad	cantidad	NOUN	ncfs000	Gender=Fem|Number=Sing	2	conj	_	_
7	que	que	PRON	pr0cn000	PronType=Rel	8	obj	_	_
8	quisieran	querer	VERB	vmsi3p0	Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	6	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	fp	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 acl:relcl	color:blue
1	El	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	que	que	PRON	pr0cn000	PronType=Rel	3	nsubj	_	_
3	tenía	tener	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
4	más	más	ADV	rg	Degree=Cmp	3	advmod	_	_
5	pues	pues	SCONJ	cs	_	6	discourse	_	_
6	tenía	tener	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	advcl	_	_
7	un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	petromá	petromax	NOUN	ncmc000	Gender=Masc|Number=Sing	6	obj	_	Ortho=petromax
9	de	de	ADP	sps00	_	10	case	_	_
10	esos	ese	PRON	dd0mp0	Gender=Masc|Number=Plur|PronType=Dem	8	nmod	_	_
11	que	que	PRON	pr0cn000	PronType=Rel	14	nsubj	_	SpaceAfter=No
12	,	,	PUNCT	fc	PunctType=Comm	11	punct	_	_
13	no	no	ADV	rn	Polarity=Neg	14	advmod	_	_
14	sé	saber	VERB	vmip1s0	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	acl:relcl	_	_
15	con	con	ADP	sps00	_	16	case	_	_
16	qué	qué	PRON	pt0cn000	PronType=Int	18	obl:arg	_	_
17	lo	él	PRON	da0ns0	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	18	obj	_	_
18	encendían	encender	VERB	vmii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	14	ccomp	_	SpaceAfter=No
19	.	.	PUNCT	fp	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 15 acl:relcl	color:blue
1	Pues	pues	SCONJ	cs	_	5	mark	_	_
2	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	fiesta	fiesta	NOUN	ncfs000	Gender=Fem|Number=Sing	5	reparandum	_	SpaceAfter=No
4	,	,	PUNCT	fc	PunctType=Comm	3	punct	_	_
5	llega	llegar	VERB	vmip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	día	día	NOUN	ncms000	Gender=Masc|Number=Sing	5	nsubj	_	_
8	de	de	ADP	sps00	_	10	case	_	_
9	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	fiesta	fiesta	NOUN	ncfs000	Gender=Fem|Number=Sing	7	nmod	_	_
11	que	que	PRON	pr0cn000	PronType=Rel	15	nsubj	_	_
12	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
13	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
14	primer	primero	ADJ	ao0ms0	Gender=Masc|Number=Sing|NumType=Ord	15	amod	_	_
15	día	día	NOUN	ncms000	Gender=Masc|Number=Sing	7	acl:relcl	_	SpaceAfter=No
16	,	,	PUNCT	fc	PunctType=Comm	18	punct	_	_
17	el	el	DET	da0ms0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	sábado	sábado	NOUN	ncms000	Gender=Masc|Number=Sing	15	appos	_	SpaceAfter=No
19	.	.	PUNCT	fp	PunctType=Peri	5	punct	_	_

~~~


