---
layout: base
title:  'Statistics of cc in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="pl_pdb-dep-cc-preconj.html">cc:preconj</a></tt>.

10393 nodes (3%) are attached to their parents as `cc`.

10254 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.18339266814202.

The following 13 pairs of parts of speech are connected with `cc`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (4316; 42% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (4119; 40% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (1089; 10% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (411; 4% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (158; 2% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (125; 1% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (61; 1% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (52; 1% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (21; 0% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (18; 0% instances), <tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (15; 0% instances), <tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), <tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
1	Dziewczynka	dziewczynka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj|9:nsubj	_
2	siedzi	siedzieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	na	na	ADP	prep:loc	AdpType=Prep	4	case	4:case	Case=Loc
4	łóżku	łóżko	NOUN	subst:sg:loc:n:ncol	Case=Loc|Gender=Neut|Number=Sing	2	obl	2:obl	_
5	pod	pod	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Ins
6	różową	różowy	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	_
7	ścianą	ściana	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	2	obl	2:obl	_
8	i	i	CCONJ	conj	_	9	cc	9:cc	_
9	gra	grać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	0:root|2:conj	_
10	na	na	ADP	prep:loc	AdpType=Prep	11	case	11:case	Case=Loc
11	gitarze	gitara	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	9	obl:arg	9:obl:arg	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc	color:blue
1	Jasnobrązowy	jasnobrązowy	ADJ	adj:sg:nom:m2:pos	Animacy=Nhum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
2	i	i	CCONJ	conj	_	4	cc	4:cc	_
3	czarny	czarny	ADJ	adj:sg:nom:m2:pos	Animacy=Nhum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	amod	4:amod	_
4	pies	pies	NOUN	subst:sg:nom:m2	Animacy=Nhum|Case=Nom|Gender=Masc|Number=Sing	1	conj	1:conj|5:nsubj	_
5	bawią	bawić	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	się	się	PRON	part	PronType=Prs|Reflex=Yes	5	expl:pv	5:expl:pv	_
7	ze	z	ADP	prep:inst:wok	AdpType=Prep|Variant=Long	8	case	8:case	Case=Ins
8	sobą	siebie	PRON	siebie:inst	Case=Ins|PronType=Prs|Reflex=Yes	5	obl:arg	5:obl:arg	_
9	na	na	ADP	prep:loc	AdpType=Prep	10	case	10:case	Case=Loc
10	trawie	trawa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	5	obl	5:obl	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Nie	nie	PART	part	Polarity=Neg	2	advmod:neg	2:advmod:neg	_
2	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	3:aux|5:aux	_
3	dokarmiane	dokarmiać	ADJ	ppas:pl:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	ani	ani	CCONJ	conj	_	5	cc	5:cc	_
5	pojone	poić	ADJ	ppas:pl:nom:n:imperf:aff	Aspect=Imp|Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	3	conj	0:root|3:conj	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


