---
layout: base
title:  'Statistics of cop in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `cop`

This relation is universal.

3373 nodes (1%) are attached to their parents as `cop`.

2796 instances of `cop` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.950785650756.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (1611; 48% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (1517; 45% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (99; 3% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (87; 3% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (30; 1% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (20; 1% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cop	color:blue
1	Ta	ten	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	_
2	robota	robota	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	_
3	na	na	ADP	prep:acc	AdpType=Prep	4	case	4:case	Case=Acc
4	akord	akord	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	nmod	2:nmod	_
5	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	6	cop	6:cop	_
6	morderstwo	morderstwo	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 cop	color:blue
1	Nagle	nagle	ADV	adv:pos	Degree=Pos	3	advmod	3:advmod	_
2	ją	on	PRON	ppron3:sg:acc:f:ter:akc:npraep	Case=Acc|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	3	obj	3:obj	_
3	znienawidził	znienawidzić	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Long	3	aux:clitic	3:aux:clitic	_
5	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
6	bo	bo	SCONJ	comp	_	11	mark	11:mark	_
7	ten	ten	DET	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	8	det	8:det	_
8	śmiech	śmiech	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	11	nsubj	11:nsubj	_
9	był	być	AUX	praet:sg:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
10	bardzo	bardzo	ADV	adv:pos	Degree=Pos	11	advmod	11:advmod	_
11	okrutny	okrutny	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	advcl	3:advcl	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	To	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	2	cop	2:cop	_
2	wszystko	wszystko	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	0	root	0:root	SpaceAfter=No
3	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


