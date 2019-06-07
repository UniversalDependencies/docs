---
layout: base
title:  'Statistics of acl in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pl_pdb-dep-acl-relcl.html">acl:relcl</a></tt>.

2967 nodes (1%) are attached to their parents as `acl`.

1515 instances of `acl` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.02999662959218.

The following 6 pairs of parts of speech are connected with `acl`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (2878; 97% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (60; 2% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (11; 0% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (10; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 acl	color:blue
1	Drapieżny	drapieżny	ADJ	adj:sg:nom:m2:pos	Animacy=Nhum|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	2:amod	_
2	ptak	ptak	NOUN	subst:sg:nom:m2	Animacy=Nhum|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
3	siedzi	siedzieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	na	na	ADP	prep:loc	AdpType=Prep	7	case	7:case	Case=Loc
5	osłoniętej	osłonić	ADJ	ppas:sg:loc:f:perf:aff	Aspect=Perf|Case=Loc|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	7	acl	7:acl	_
6	rękawicą	rękawica	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	5	iobj	5:iobj	_
7	dłoni	dłoń	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl	_
8	mężczyzny	mężczyzna	NOUN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 acl	color:blue
1	Funt	Funt	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	doganiał	doganiać	VERB	praet:sg:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	mnie	ja	PRON	ppron12:sg:acc:f:pri:akc	Case=Acc|Gender=Fem|Number=Sing|Person=1|PronType=Prs|Variant=Long	2	obj	2:obj	_
4	kłusem	kłus	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	2	obl	2:obl	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
6	spocony	spocić	ADJ	ppas:sg:nom:m1:perf:aff	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	1	acl	1:acl	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
8	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Ins
9	twarzą	twarz	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	6	conj	1:acl|6:conj	_
10	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Loc
11	wypiekach	wypieki	NOUN	subst:pl:loc:n:pt	Case=Loc|Gender=Neut|Number=Ptan	9	obl:arg	9:obl:arg	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	Inne	inny	ADJ	adj:pl:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	6	nsubj:pass	6:nsubj:pass	_
2	-	-	PUNCT	interp	PunctType=Hyph	3	punct	3:punct	_
3	kupione	kupić	ADJ	ppas:pl:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	1	acl	1:acl	_
4	-	-	PUNCT	interp	PunctType=Hyph	3	punct	3:punct	_
5	zostały	zostać	AUX	praet:pl:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	6	aux:pass	6:aux:pass	_
6	postawione	postawić	ADJ	ppas:pl:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
7	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Acc
8	stan	stan	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	6	obl:arg	6:obl:arg	_
9	likwidacji	likwidacja	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	nmod	8:nmod	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


