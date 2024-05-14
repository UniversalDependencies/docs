---
layout: base
title:  'Statistics of discourse:intj in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `discourse:intj`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-discourse.html">discourse</a></tt>.

150 nodes (0%) are attached to their parents as `discourse:intj`.

124 instances of `discourse:intj` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.53333333333333.

The following 9 pairs of parts of speech are connected with `discourse:intj`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt> (100; 67% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt> (24; 16% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt> (10; 7% instances), <tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt> (4; 3% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt> (4; 3% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 discourse:intj	color:blue
1	-	-	PUNCT	interp	PunctType=Dash	11	punct	11:punct	_
2	No	no	INTJ	interj	_	11	discourse:intj	11:discourse:intj	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
4	co	co	SCONJ	comp	_	5	mark	5:mark	_
5	to	to	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	8	advcl	8:advcl	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
7	to	to	SCONJ	comp	_	8	mark	8:mark	_
8	nie	nie	INTJ	interj	_	2	conj	2:conj|11:discourse:intj	SpaceAfter=No
9	!	!	PUNCT	interp	PunctType=Excl	2	punct	2:punct	_
10	-	-	PUNCT	interp	PunctType=Dash	11	punct	11:punct	_
11	kręci	kręcić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
12	głową	głowa	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	11	iobj	11:iobj	_
13	siostrunia	siostrunia	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	11:nsubj	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse:intj	color:blue
1	-	-	PUNCT	interp	PunctType=Dash	8	punct	8:punct	_
2	A	a	INTJ	interj	_	5	discourse:intj	5:discourse:intj	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	2	punct	2:punct	_
4	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	5	cop	5:cop	_
5	pan	pan	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	8	parataxis:obj	8:parataxis:obj	_
6	komisarz	komisarz	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	5	appos	5:appos	_
7	-	-	PUNCT	interp	PunctType=Dash	8	punct	8:punct	_
8	wyszczerzył	wyszczerzyć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	spróchniałe	spróchniały	ADJ	adj:pl:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	10	amod	10:amod	_
10	zęby	ząb	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	8	obj	8:obj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse:intj	color:blue
1	Cóż	cóż	INTJ	interj	_	6	discourse:intj	6:discourse:intj	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	1	punct	1:punct	_
3	nikt	nikt	PRON	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|PronType=Neg	6	nsubj	6:nsubj	_
4	nie	nie	PART	part	Polarity=Neg	5	advmod:neg	5:advmod:neg	_
5	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
6	doskonały	doskonały	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


