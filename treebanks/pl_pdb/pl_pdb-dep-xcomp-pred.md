---
layout: base
title:  'Statistics of xcomp:pred in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-xcomp.html">xcomp</a></tt>.
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="pl_pdb-dep-xcomp-cleft.html">xcomp:cleft</a></tt>, <tt><a href="pl_pdb-dep-xcomp-subj.html">xcomp:subj</a></tt>.

426 nodes (0%) are attached to their parents as `xcomp:pred`.

379 instances of `xcomp:pred` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.26291079812207.

The following 14 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (206; 48% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (165; 39% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (34; 8% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp:pred	color:blue
1	Burmistrzem	burmistrz	NOUN	subst:sg:inst:m1	Animacy=Hum|Case=Ins|Gender=Masc|Number=Sing	2	xcomp:pred	2:xcomp:pred	_
2	zostaje	zostawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	senator	senator	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
4	Franciszek	Franciszek	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	3	appos	3:appos	_
5	Bachleda	Bachleda	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	4	flat	4:flat	SpaceAfter=No
6	-	-	PUNCT	interp	PunctType=Dash	7	punct	7:punct	SpaceAfter=No
7	Księdzularz	Księdzularz	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	5	conj	4:flat|5:conj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp:pred	color:blue
1	Również	również	PART	part	_	2	advmod:emph	2:advmod:emph	_
2	fotel	fotel	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
3	obok	obok	ADP	prep:gen	AdpType=Prep	4	case	4:case	Case=Gen
4	niej	on	PRON	ppron3:sg:gen:f:ter:akc:praep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Pre|PronType=Prs|Variant=Long	2	nmod	2:nmod	_
5	pozostał	pozostać	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	pusty	pusty	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	xcomp:pred	5:xcomp:pred	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 xcomp:pred	color:blue
1	Na	na	ADP	prep:loc	AdpType=Prep	5	advmod	5:advmod	Case=Loc
2	razie	raz	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	1	fixed	1:fixed	_
3	jednak	jednak	CCONJ	conj	_	5	cc	5:cc	_
4	wiatr	wiatr	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	5:nsubj	_
5	zerwał	zerwać	VERB	praet:sg:m3:perf	Animacy=Inan|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Acc
7	ubiegły	ubiegły	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	8	amod	8:amod	_
8	czwartek	czwartek	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	5:obl	_
9	blachę	blacha	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj	_
10	będącą	być	ADJ	pact:sg:acc:f:imperf:aff	Aspect=Imp|Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	9	acl	9:acl	_
11	elementem	element	NOUN	subst:sg:inst:m3	Animacy=Inan|Case=Ins|Gender=Masc|Number=Sing	10	xcomp:pred	10:xcomp:pred	_
12	ozdobnym	ozdobny	ADJ	adj:sg:inst:m3:pos	Animacy=Inan|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	11	amod	11:amod	_
13	wiaty	wiata	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	11	nmod:arg	11:nmod:arg	_
14	stacji	stacja	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	13	nmod:arg	13:nmod:arg	SpaceAfter=No
15	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


