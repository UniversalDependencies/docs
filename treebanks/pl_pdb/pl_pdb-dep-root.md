---
layout: base
title:  'Statistics of root in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `root`

This relation is universal.

22152 nodes (6%) are attached to their parents as `root`.

22152 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.98225893824485.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (18616; 84% instances), -<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1531; 7% instances), -<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1451; 7% instances), -<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (170; 1% instances), -<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (164; 1% instances), -<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (79; 0% instances), -<tt><a href="pl_pdb-pos-X.html">X</a></tt> (61; 0% instances), -<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (38; 0% instances), -<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (29; 0% instances), -<tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt> (5; 0% instances), -<tt><a href="pl_pdb-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), -<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (2; 0% instances), -<tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Pies	pies	NOUN	subst:sg:nom:m2	Animacy=Nhum|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	płynie	płynąć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Ins
4	małą	mały	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
6	żółtą	żółty	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	4	conj	4:conj|7:amod	_
7	piłką	piłka	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	2	obl:arg	2:obl:arg	_
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Loc
9	pysku	pysk	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	Ta	ten	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	_
2	robota	robota	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	_
3	na	na	ADP	prep:acc	AdpType=Prep	4	case	4:case	Case=Acc
4	akord	akord	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	nmod	2:nmod	_
5	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	6	cop	6:cop	_
6	morderstwo	morderstwo	NOUN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Tutaj	tutaj	ADV	adv	PronType=Dem	4	advmod	4:advmod|7:advmod	_
2	firma	firma	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	4	nsubj:pass	4:nsubj:pass|7:nsubj:pass	_
3	została	zostać	AUX	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
4	założona	założyć	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	i	i	CCONJ	conj	_	7	cc	7:cc	_
6	najmocniej	mocno	ADV	adv:sup	Degree=Sup	7	advmod	7:advmod	_
7	wrosła	wrosnąć	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	conj	0:root|4:conj	_
8	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Acc
9	pejzaż	pejzaż	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obl:arg	7:obl:arg	_
10	społeczny	społeczny	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	9	amod	9:amod	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


