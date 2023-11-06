---
layout: base
title:  'Statistics of det:numgov in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-det.html">det</a></tt>.
There are also 2 other language-specific subtypes of `det`: <tt><a href="pl_pdb-dep-det-nummod.html">det:nummod</a></tt>, <tt><a href="pl_pdb-dep-det-poss.html">det:poss</a></tt>.

602 nodes (0%) are attached to their parents as `det:numgov`.

570 instances of `det:numgov` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39867109634551.

The following 5 pairs of parts of speech are connected with `det:numgov`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (565; 94% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (19; 3% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (8; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det:numgov	color:blue
1	Kilka	kilka	DET	num:pl:nom:f:rec:ncol	Case=Nom|Gender=Fem|Number=Plur|PronType=Ind	2	det:numgov	2:det:numgov	_
2	osób	osoba	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	3	nsubj	3:nsubj	_
3	idzie	iść	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
5	mijając	mijać	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	3	advcl	3:advcl	_
6	budynek	budynek	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obj	5:obj	_
7	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Ins
8	kolorowymi	kolorowy	ADJ	adj:pl:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Plur	9	amod	9:amod	_
9	malunkami	malunek	NOUN	subst:pl:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	6	nmod	6:nmod	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 det:numgov	color:blue
1	Czy	czy	PART	part	PartType=Int	2	advmod	2:advmod	_
2	chcę	chcieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	9	ccomp	9:ccomp	_
3	ich	on	PRON	ppron3:pl:acc:m1:ter:akc:npraep	Animacy=Hum|Case=Acc|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	7	obj	7:obj	_
4	oboje	oba	DET	num:pl:acc:m1:rec:col	Animacy=Hum|Case=Acc|Gender=Masc|Number=Plur|NumType=Sets|PronType=Ind	3	det:numgov	3:det:numgov	_
5	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Ins
6	Cezarem	Cezar	PROPN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	3	nmod	3:nmod	_
7	obrazić	obrazić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
9	zapytała	zapytać	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:numgov	color:blue
1	—	—	PUNCT	interp	PunctType=Dash	4	punct	4:punct	_
2	Wielu	wiele	DET	num:pl:nom:m1:rec	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	3	det:numgov	3:det:numgov	_
3	Europejczyków	Europejczyk	PROPN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	4	nsubj	4:nsubj	_
4	wyznaje	wyznawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	ideologię	ideologia	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	4	obj	4:obj	_
6	komunistyczną	komunistyczny	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	5	amod	5:amod	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


