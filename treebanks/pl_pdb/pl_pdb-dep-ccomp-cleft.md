---
layout: base
title:  'Statistics of ccomp:cleft in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `ccomp:cleft`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-ccomp.html">ccomp</a></tt>.
There are also 1 other language-specific subtypes of `ccomp`: <tt><a href="pl_pdb-dep-ccomp-obj.html">ccomp:obj</a></tt>.

235 nodes (0%) are attached to their parents as `ccomp:cleft`.

232 instances of `ccomp:cleft` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.37021276595745.

The following 5 pairs of parts of speech are connected with `ccomp:cleft`: <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (197; 84% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (25; 11% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (11; 5% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 ccomp:cleft	color:blue
1	Kościół	kościół	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
2	nie	nie	PART	part	Polarity=Neg	3	advmod:neg	3:advmod:neg	_
3	zobowiązuje	zobowiązywać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	katolików	katolik	NOUN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	3	obj	3:obj	_
5	do	do	ADP	prep:gen	AdpType=Prep	6	case	6:case	Case=Gen
6	tego	to	PRON	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	3	obl	3:obl	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
8	aby	aby	SCONJ	comp	_	9	mark	9:mark	_
9	wierzyli	wierzyć	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	6	ccomp:cleft	6:ccomp:cleft	_
10	w	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	11	case	11:case	Case=Acc
11	cuda	cud	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	9	obl:arg	9:obl:arg	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp:cleft	color:blue
1	Wygląda	wyglądać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	na	na	ADP	prep:acc	AdpType=Prep	3	case	3:case	Case=Acc
3	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	1	obl:arg	1:obl:arg	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
5	że	że	SCONJ	comp	_	9	mark	9:mark	_
6	samochody	samochód	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	9	nsubj:pass	9:nsubj:pass	_
7	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux:pass	9:aux:pass	_
8	niewłaściwie	niewłaściwie	ADV	adv:pos	Degree=Pos	9	advmod	9:advmod	_
9	zaparkowane	zaparkować	ADJ	ppas:pl:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	3	ccomp:cleft	3:ccomp:cleft	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 ccomp:cleft	color:blue
1	Wyglądało	wyglądać	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	na	na	ADP	prep:acc	AdpType=Prep	3	case	3:case	Case=Acc
3	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	1	obl:arg	1:obl:arg	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
5	że	że	SCONJ	comp	_	10	mark	10:mark	_
6	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	10:aux	_
7	to	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	10	cop	10:cop	_
8	ich	on	PRON	ppron3:pl:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	10	nmod	10:nmod	_
9	pierwszy	pierwszy	ADJ	adj:sg:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	10	amod	10:amod	_
10	posiłek	posiłek	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	ccomp:cleft	3:ccomp:cleft	_
11	od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	12	case	12:case	Case=Gen
12	rana	rano	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	9	obl	9:obl	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


