---
layout: base
title:  'Statistics of xcomp:subj in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `xcomp:subj`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-xcomp.html">xcomp</a></tt>.
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="pl_pdb-dep-xcomp-cleft.html">xcomp:cleft</a></tt>, <tt><a href="pl_pdb-dep-xcomp-pred.html">xcomp:pred</a></tt>.

38 nodes (0%) are attached to their parents as `xcomp:subj`.

29 instances of `xcomp:subj` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.15789473684211.

The following 6 pairs of parts of speech are connected with `xcomp:subj`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (19; 50% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (6; 16% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (6; 16% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (4; 11% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 xcomp:subj	color:blue
1	Na	na	ADP	prep:acc	AdpType=Prep	2	case	2:case	Case=Acc
2	czas	czas	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	5:obl	_
3	hakafot	hakafot	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	nmod:arg	2:nmod:arg	_
4	policja	policja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	_
5	zamyka	zamykać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	ulice	ulica	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	5	obj	5:obj	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
8	żeby	żeby	SCONJ	comp	_	9	mark	9:mark	_
9	było	być	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	5	advcl	5:advcl	_
10	gdzie	gdzie	ADV	adv	PronType=Int	11	advmod	11:advmod	_
11	tańczyć	tańczyć	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	9	xcomp:subj	9:xcomp:subj	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 xcomp:subj	color:blue
1	Czy	czy	PART	part	PartType=Int	10	advmod	10:advmod	_
2	korzystać	korzystać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	10	xcomp:subj	10:xcomp:subj	_
3	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Gen
4	takiego	taki	DET	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	5	det	5:det	_
5	podręcznika	podręcznik	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	obl:arg	2:obl:arg	_
6	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	10:cop	_
7	może	może	PART	part	PartType=Mod	9	advmod:emph	9:advmod:emph	_
8	dla	dla	ADP	prep:gen	AdpType=Prep	9	case	9:case	Case=Gen
9	kogoś	ktoś	PRON	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|PronType=Ind	10	nmod	10:nmod	_
10	uchybieniem	uchybienie	NOUN	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
11	?	?	PUNCT	interp	PunctType=Qest	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 xcomp:subj	color:blue
1	Magda	Magda	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
2	Mołek	Mołek	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	1	flat	1:flat	_
3	chciała	chcieć	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	8	parataxis:obj	8:parataxis:obj	_
4	mieć	mieć	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	3	xcomp	3:xcomp	_
5	trójkę	trójka	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	4	iobj	4:iobj	_
6	dzieci	dziecko	NOUN	subst:pl:gen:n:col	Case=Gen|Gender=Neut|Number=Plur|NumType=Sets	5	nmod:arg	5:nmod:arg	_
7	-	-	PUNCT	interp	PunctType=Hyph	8	punct	8:punct	_
8	pisze	pisać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
9	"	"	PUNCT	interp	PunctType=Quot	11	punct	11:punct	SpaceAfter=No
10	Na	na	ADP	prep:acc	AdpType=Prep	11	case	11:case	Case=Acc
11	żywo	żywo	ADV	adv:pos	Degree=Pos	8	xcomp:subj	8:xcomp:subj	SpaceAfter=No
12	"	"	PUNCT	interp	PunctType=Quot	11	punct	11:punct	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


