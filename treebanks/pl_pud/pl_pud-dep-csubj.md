---
layout: base
title:  'Statistics of csubj in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="pl_pud-dep-csubj-pass.html">csubj:pass</a></tt>.

5 nodes (0%) are attached to their parents as `csubj`.

5 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.2.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (3; 60% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (2; 40% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj	color:blue
1	Pomimo	pomimo	ADP	prep:gen	AdpType=Prep	2	case	2:case	Case=Gen
2	tego	to	PRON	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	3	obl	3:obl	_
3	wydaje	wydawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	się	się	PRON	part	PronType=Prs|Reflex=Yes	3	expl:pv	3:expl:pv	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
6	że	że	SCONJ	comp	_	8	mark	8:mark	_
7	obaj	oba	NUM	num:pl:nom:m1:congr:ncol	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|NumForm=Word	8	nsubj	8:nsubj	_
8	kontrolowali	kontrolować	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	3	csubj	3:csubj	_
9	przynajmniej	przynajmniej	PART	part	_	10	advmod:emph	10:advmod:emph	_
10	część	część	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	8	obj	8:obj	_
11	terenów	teren	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	10	nmod:arg	10:nmod:arg	_
12	Dolnego	dolny	ADJ	adj:sg:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	13	amod:flat	13:amod:flat	_
13	Egiptu	Egipt	PROPN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	11	nmod	11:nmod	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 csubj	color:blue
1	Uznaje	uznawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	się	się	PRON	part	PronType=Prs|Reflex=Yes	1	expl:pv	1:expl:pv	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
4	że	że	SCONJ	comp	_	9	mark	9:mark	_
5	ostatnie	ostatni	ADJ	adj:pl:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	6	amod	6:amod	_
6	igrzyska	igrzyska	NOUN	subst:pl:nom:n:pt	Case=Nom|Gender=Neut|Number=Ptan	9	nsubj:pass	9:nsubj:pass	_
7	olimpijskie	olimpijski	ADJ	adj:pl:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	6	amod	6:amod	_
8	zostały	zostać	AUX	praet:pl:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	9	aux:pass	9:aux:pass	_
9	zorganizowane	zorganizować	ADJ	ppas:pl:nom:n:perf:aff	Aspect=Perf|Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	1	csubj	1:csubj	_
10	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	12	case	12:case	Case=Loc
11	393	393	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	12	amod:flat	12:amod:flat	_
12	r	rok	X	brev:pun	Abbr=Yes|Pun=Yes	9	obl	9:obl	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


