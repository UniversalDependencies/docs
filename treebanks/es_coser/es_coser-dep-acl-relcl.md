---
layout: base
title:  'Statistics of acl:relcl in UD_Spanish-COSER'
udver: '2'
---

## Treebank Statistics: UD_Spanish-COSER: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="es_coser-dep-acl.html">acl</a></tt>.

29 nodes (0%) are attached to their parents as `acl:relcl`.

29 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.86206896551724.

The following 3 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-VERB.html">VERB</a></tt> (26; 90% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="es_coser-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_coser-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl:relcl	color:blue
1	Un	uno	DET	di0ms0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	litro	litro	NOUN	ncms000	Gender=Masc|Number=Sing	0	root	_	_
3	o	o	CCONJ	cc	_	6	cc	_	SpaceAfter=No
4	...	...	PUNCT	_	PunctType=Comm	6	punct	_	_
5	la	el	DET	da0fs0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	cantidad	cantidad	NOUN	ncfs000	Gender=Fem|Number=Sing	2	conj	_	_
7	que	que	PRON	pr0cn000	PronType=Rel	8	obj	_	_
8	quisieran	querer	VERB	vmsi3p0	Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	6	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	fp	PunctType=Peri	2	punct	_	_

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


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl:relcl	color:blue
1	Había	haber	VERB	vmii3s0	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	unos	uno	DET	di0mp0	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	hermanos	hermano	NOUN	ncmp000	Gender=Masc|Number=Plur	1	obj	_	_
4	que	que	PRON	pr0cn000	PronType=Rel	7	nsubj	_	_
5	eran	ser	AUX	vsii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	7	cop	_	_
6	mu	mucho	ADV	rg	_	7	advmod	_	Ortho=muy
7	traviesos	travieso	ADJ	aq0mp0	Gender=Masc|Number=Plur	3	acl:relcl	_	SpaceAfter=No
8	,	,	PUNCT	fc	PunctType=Comm	7	punct	_	_
9	no	no	ADV	rn	Polarity=Neg	13	advmod	_	_
10	es	ser	AUX	vsip3s0	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
11	que	que	SCONJ	pr0cn000	_	13	mark	_	_
12	fueran	ser	AUX	vssi3p0	Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	13	cop	_	_
13	malos	malo	ADJ	aq0mp0	Gender=Masc|Number=Plur	1	ccomp	_	_
14	ni	ni	CCONJ	cc	_	16	cc	_	_
15	que	que	SCONJ	pr0cn000	_	16	mark	_	_
16	fueran	ser	AUX	vssi3p0	Mood=Sub|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	13	conj	_	SpaceAfter=No
17	,	,	PUNCT	fc	PunctType=Comm	16	punct	_	_
18	pero	pero	CCONJ	cc	_	21	cc	_	_
19	eran	ser	AUX	vsii3p0	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	21	cop	_	_
20	mu	mucho	ADV	rg	_	21	advmod	_	Ortho=muy
21	traviesillos	travieso	ADJ	_	Degree=Dim|Gender=Masc|Number=Plur	13	conj	_	SpaceAfter=No
22	,	,	PUNCT	fc	PunctType=Comm	23	punct	_	_
23	mu	mucho	ADV	rg	_	21	advmod	_	Ortho=muy|SpaceAfter=No
24	...	...	PUNCT	_	PunctType=Comm	1	punct	_	_

~~~


