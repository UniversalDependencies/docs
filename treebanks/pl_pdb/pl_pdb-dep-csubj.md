---
layout: base
title:  'Statistics of csubj in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="pl_pdb-dep-csubj-pass.html">csubj:pass</a></tt>.

217 nodes (0%) are attached to their parents as `csubj`.

208 instances of `csubj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.4147465437788.

The following 12 pairs of parts of speech are connected with `csubj`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (133; 61% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (25; 12% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (17; 8% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (15; 7% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (8; 4% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (4; 2% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	I	i	CCONJ	conj	_	2	cc	2:cc	_
2	okazało	okazać	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	się	się	PRON	part	PronType=Prs|Reflex=Yes	2	expl:pv	2:expl:pv	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
5	że	że	SCONJ	comp	_	6	mark	6:mark	_
6	doniósł	donieść	VERB	praet:sg:m1:perf:nagl	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	csubj	2:csubj	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj	color:blue
1	To	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	2	cop	2:cop	_
2	ważne	ważny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
4	żeby	żeby	SCONJ	comp	_	8	mark	8:mark	_
5	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Short	8	aux:clitic	8:aux:clitic	_
6	się	się	PRON	part	PronType=Prs|Reflex=Yes	8	expl:pv	8:expl:pv	_
7	tego	to	PRON	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	8	obj	8:obj	_
8	nauczyła	nauczyć	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	csubj	2:csubj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 csubj	color:blue
1	Wydaje	wydawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	się	się	PRON	part	PronType=Prs|Reflex=Yes	1	expl:pv	1:expl:pv	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
4	że	że	SCONJ	comp	_	10	mark	10:mark	_
5	powrót	powrót	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	10:nsubj	_
6	do	do	ADP	prep:gen	AdpType=Prep	7	case	7:case	Case=Gen
7	pracy	praca	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	5	nmod	5:nmod	_
8	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
9	swoistym	swoisty	ADJ	adj:sg:inst:n:pos	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	10	amod	10:amod	_
10	lekarstwem	lekarstwo	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	1	csubj	1:csubj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


