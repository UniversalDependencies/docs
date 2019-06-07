---
layout: base
title:  'Statistics of det in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `det`

This relation is universal.
There are 3 language-specific subtypes of `det`: <tt><a href="pl_pdb-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="pl_pdb-dep-det-nummod.html">det:nummod</a></tt>, <tt><a href="pl_pdb-dep-det-poss.html">det:poss</a></tt>.

4258 nodes (1%) are attached to their parents as `det`.

3912 instances of `det` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26632221700329.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (4055; 95% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (83; 2% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (67; 2% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (32; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (11; 0% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Trwa	trwać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	dochodzenie	dochodzenie	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	1	nsubj	1:nsubj	_
3	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Loc
4	tej	ten	DET	adj:sg:loc:f:pos	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	5	det	5:det	_
5	sprawie	sprawa	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	2	obl:arg	2:obl:arg	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 det	color:blue
1	Co	co	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	3	nsubj	3:nsubj	_
2	takiego	taki	DET	adj:sg:gen:n:pos	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	1	det	1:det	_
3	stało	stać	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	się	się	PRON	part	PronType=Prs|Reflex=Yes	3	expl:pv	3:expl:pv	_
5	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Acc
6	ostatnią	ostatni	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	_
7	sobotę	sobota	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	3	obl	3:obl	SpaceAfter=No
8	?	?	PUNCT	interp	PunctType=Qest	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Ten	ten	DET	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	2	det	2:det	_
2	ostatni	ostatni	ADJ	adj:sg:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
3	pokonał	pokonać	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	Płaczkiewicza	Płaczkiewicz	PROPN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	3	obj	3:obj	SpaceAfter=No
5	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


