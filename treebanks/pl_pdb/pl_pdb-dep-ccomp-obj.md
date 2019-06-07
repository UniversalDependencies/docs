---
layout: base
title:  'Statistics of ccomp:obj in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `ccomp:obj`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-ccomp.html">ccomp</a></tt>.

653 nodes (0%) are attached to their parents as `ccomp:obj`.

653 instances of `ccomp:obj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.7197549770291.

The following 12 pairs of parts of speech are connected with `ccomp:obj`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (475; 73% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (98; 15% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (57; 9% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp:obj	color:blue
1	Kmetko	Kmetko	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
2	nie	nie	PART	part	Polarity=Neg	3	advmod:neg	3:advmod:neg	_
3	mógł	móc	VERB	praet:sg:m1:imperf:nagl	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	by	by	AUX	part	_	3	aux:cnd	3:aux:cnd	_
5	udowodnić	udowodnić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	3	xcomp	3:xcomp	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
7	że	że	SCONJ	comp	_	9	mark	9:mark	_
8	ciężarówki	ciężarówka	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	9	nsubj	9:nsubj	_
9	należą	należeć	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	ccomp:obj	5:ccomp:obj	_
10	do	do	ADP	prep:gen	AdpType=Prep	12	case	12:case	Case=Gen
11	jego	on	PRON	ppron3:sg:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	12	nmod	12:nmod	_
12	firm	firma	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	9	obl:arg	9:obl:arg	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp:obj	color:blue
1	Teraz	teraz	ADV	adv	_	2	advmod	2:advmod	_
2	dostrzegła	dostrzec	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
4	że	że	SCONJ	comp	_	6	mark	6:mark	_
5	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux:pass	6:aux:pass	_
6	poukładane	poukładać	ADJ	ppas:pl:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	2	ccomp:obj	2:ccomp:obj	_
7	piętrami	piętro	NOUN	subst:pl:inst:n:ncol	Case=Ins|Gender=Neut|Number=Plur	6	iobj	6:iobj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 ccomp:obj	color:blue
1	I	i	CCONJ	conj	_	2	cc	2:cc	_
2	chciał	chcieć	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Long	2	aux:clitic	2:aux:clitic	_
4	ci	ty	PRON	ppron12:sg:dat:m1:sec:nakc	Animacy=Hum|Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs|Variant=Short	5	iobj	5:iobj	_
5	powiedzieć	powiedzieć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
7	że	że	SCONJ	comp	_	11	mark	11:mark	_
8	nie	nie	PART	part	Polarity=Neg	9	advmod:neg	9:advmod:neg	_
9	jestem	być	AUX	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	11:cop	_
10	starym	stary	ADJ	adj:sg:inst:m1:pos	Animacy=Hum|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	11	amod	11:amod	_
11	dupkiem	dupek	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	5	ccomp:obj	5:ccomp:obj	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


