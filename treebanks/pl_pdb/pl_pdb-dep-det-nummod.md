---
layout: base
title:  'Statistics of det:nummod in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-det.html">det</a></tt>.
There are also 2 other language-specific subtypes of `det`: <tt><a href="pl_pdb-dep-det-numgov.html">det:numgov</a></tt>, <tt><a href="pl_pdb-dep-det-poss.html">det:poss</a></tt>.

240 nodes (0%) are attached to their parents as `det:nummod`.

235 instances of `det:nummod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17083333333333.

The following 4 pairs of parts of speech are connected with `det:nummod`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (231; 96% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (4; 2% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det:nummod	color:blue
1	Oba	oba	DET	num:pl:nom:m3:congr:ncol	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	2	det:nummod	2:det:nummod	_
2	światy	świat	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	3	nsubj	3:nsubj	_
3	wypełniają	wypełniać	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	się	się	PRON	part	PronType=Prs|Reflex=Yes	3	expl:pv	3:expl:pv	_
5	codziennie	codziennie	ADV	adv:pos	Degree=Pos	3	advmod	3:advmod	_
6	nowym	nowy	ADJ	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	_
7	towarem	towar	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	3	iobj	3:iobj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 det:nummod	color:blue
1	-	-	PUNCT	interp	PunctType=Dash	6	punct	6:punct	_
2	Nam	my	PRON	ppron12:pl:dat:m1:pri	Animacy=Hum|Case=Dat|Gender=Masc|Number=Plur|Person=1|PronType=Prs	6	iobj	6:iobj	_
3	obu	oba	DET	num:pl:dat:m1:congr:ncol	Animacy=Hum|Case=Dat|Gender=Masc|Number=Plur|PronType=Ind	2	det:nummod	2:det:nummod	_
4	było	być	AUX	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
5	by	by	AUX	part	_	6	aux:cnd	6:aux:cnd	_
6	lepiej	dobrze	ADV	adv:com	Degree=Cmp	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
8	gdyby	gdyby	SCONJ	comp	_	11	mark	11:mark	_
9	do	do	ADP	prep:gen	AdpType=Prep	10	case	10:case	Case=Gen
10	domu	dom	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	11	obl	11:obl	_
11	wprowadziła	wprowadzić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	advcl	6:advcl	_
12	się	się	PRON	part	PronType=Prs|Reflex=Yes	11	expl:pv	11:expl:pv	_
13	kobieta	kobieta	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	11:nsubj	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det:nummod	color:blue
1	Zarówno	zarówno	PART	part	_	4	cc:preconj	4:cc:preconj	_
2	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	4	case	4:case	Case=Loc
3	tej	ten	DET	adj:sg:loc:f:pos	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	4	det	4:det	_
4	branży	branża	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	12	obl	12:obl	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
6	jak	jak	CCONJ	conj	_	10	cc	10:cc	_
7	i	i	PART	part	_	6	fixed	6:fixed	_
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	10	case	10:case	Case=Loc
9	kilku	kilka	DET	num:pl:loc:f:congr:ncol	Case=Loc|Gender=Fem|Number=Plur|PronType=Ind	10	det:nummod	10:det:nummod	_
10	innych	inny	ADJ	adj:pl:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur	4	conj	4:conj|12:obl	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	4	punct	4:punct	_
12	następuje	następować	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
13	szybka	szybki	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	14	amod	14:amod	_
14	konsolidacja	konsolidacja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	12	nsubj	12:nsubj	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	12	punct	12:punct	_

~~~


