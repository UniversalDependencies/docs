---
layout: base
title:  'Statistics of xcomp in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `xcomp`

This relation is universal.
There are 3 language-specific subtypes of `xcomp`: <tt><a href="pl_pdb-dep-xcomp-cleft.html">xcomp:cleft</a></tt>, <tt><a href="pl_pdb-dep-xcomp-pred.html">xcomp:pred</a></tt>, <tt><a href="pl_pdb-dep-xcomp-subj.html">xcomp:subj</a></tt>.

4613 nodes (1%) are attached to their parents as `xcomp`.

4519 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.01972685887709.

The following 18 pairs of parts of speech are connected with `xcomp`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (3976; 86% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (320; 7% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (130; 3% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (69; 1% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (49; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (48; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-ADP.html">ADP</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Potem	potem	ADV	adv	_	2	advmod	2:advmod	_
2	zaproponowano	zaproponować	VERB	imps:perf	Aspect=Perf|Mood=Ind|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	urządzić	urządzić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	_
4	koniowi	koń	NOUN	subst:sg:dat:m2	Animacy=Nhum|Case=Dat|Gender=Masc|Number=Sing	3	iobj	3:iobj	_
5	pogrzeb	pogrzeb	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	3:obj	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 xcomp	color:blue
1	Nie	nie	PART	part	Polarity=Neg	2	advmod:neg	2:advmod:neg	_
2	wyczuł	wyczuć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Long	2	aux:clitic	2:aux:clitic	_
4	kpiny	kpina	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	2	obj	2:obj	_
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Loc
6	jej	on	PRON	ppron3:sg:gen:f:ter:akc:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	7	nmod	7:nmod	_
7	głosie	głos	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	2	obl:arg	2:obl:arg	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
9	choć	choć	SCONJ	comp	_	10	mark	10:mark	_
10	należało	należeć	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	2:advcl	_
11	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	12	cop	12:cop	_
12	ostrożnym	ostrożny	ADJ	adj:sg:inst:m1:pos	Animacy=Hum|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	10	xcomp	10:xcomp	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Lepiej	dobrze	ADV	adv:com	Degree=Cmp	0	root	0:root	_
2	wróć	wrócić	VERB	impt:sg:sec:perf	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	1	xcomp	1:xcomp	_
3	do	do	ADP	prep:gen	AdpType=Prep	4	case	4:case	Case=Gen
4	Lawrence	Lawrence	PROPN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	2	obl	2:obl	_
5	i	i	CCONJ	conj	_	6	cc	6:cc	_
6	zdobądź	zdobyć	VERB	impt:sg:sec:perf	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	2	conj	1:xcomp|2:conj	_
7	te	ten	DET	adj:pl:acc:m3:pos	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	8	det	8:det	_
8	dokumenty	dokument	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	6	obj	6:obj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


