---
layout: base
title:  'Statistics of det in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `det`

This relation is universal.
There are 3 language-specific subtypes of `det`: <tt><a href="pl_pdb-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="pl_pdb-dep-det-nummod.html">det:nummod</a></tt>, <tt><a href="pl_pdb-dep-det-poss.html">det:poss</a></tt>.

4200 nodes (1%) are attached to their parents as `det`.

3879 instances of `det` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25119047619048.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (3983; 95% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (82; 2% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (62; 1% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (32; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (32; 1% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Ta	ten	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	_
2	robota	robota	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	_
3	na	na	ADP	prep:acc	AdpType=Prep	4	case	4:case	Case=Acc
4	akord	akord	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	nmod	2:nmod	_
5	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	6	cop	6:cop	_
6	morderstwo	morderstwo	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 det	color:blue
1	-	-	PUNCT	interp	PunctType=Hyph	3	punct	3:punct	_
2	Nie	nie	PART	part	Polarity=Neg	3	advmod:neg	3:advmod:neg	_
3	zauważył	zauważyć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Long	3	aux:clitic	3:aux:clitic	_
5	nic	nic	PRON	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing|PronType=Neg	3	obj	3:obj	_
6	takiego	taki	DET	adj:sg:gen:n:pos	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	5	det	5:det	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det	color:blue
1	–	–	PUNCT	interp	PunctType=Dash	8	punct	8:punct	_
2	znaczy	znaczyć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	parataxis:insert	8:parataxis:insert	_
3	się	się	PRON	part	PronType=Prs|Reflex=Yes	2	expl:pv	2:expl:pv	_
4	Łódź	Łódź	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	8:nsubj	_
5	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
6	o	o	ADP	prep:acc	AdpType=Prep	7	case	7:case	Case=Acc
7	tyle	tyle	ADV	adv	_	8	advmod	8:advmod	_
8	fajna	fajny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	0:root	_
9	że	że	SCONJ	comp	_	12	mark	12:mark	_
10	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
11	taka	taki	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	12	det	12:det	_
12	przestronna	przestronny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	ccomp	7:ccomp	_

~~~


