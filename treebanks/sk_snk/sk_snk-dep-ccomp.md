---
layout: base
title:  'Statistics of ccomp in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `ccomp`

This relation is universal.

1257 nodes (1%) are attached to their parents as `ccomp`.

702 instances of `ccomp` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.05250596658711.

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (1063; 85% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (84; 7% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (83; 7% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (12; 1% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	Väčšina	väčšina	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	4:nsubj	_
2	zdrojov	zdroj	NOUN	SSip2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	nmod	1:nmod:gen	_
3	však	však	PART	T	_	4	advmod	4:advmod	_
4	uvádza	uvádzať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	ZIP	_	8	punct	8:punct	_
6	že	že	SCONJ	O	_	8	mark	8:mark	_
7	by	by	AUX	Y	Mood=Cnd	8	aux	8:aux	_
8	mal	mať	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	4	ccomp	4:ccomp	_
9	byť	byť	VERB	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	8	xcomp	8:xcomp	_
10	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	11	case	11:case	_
11	Šanghaji	šanghaj	PROPN	SSis6:r	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	9:obl:v:loc	SpaceAfter=No
12	.	.	PUNCT	ZIP	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 ccomp	color:blue
1	Ako	ako	SCONJ	O	_	2	mark	2:mark	_
2	dôvod	dôvod	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	xcomp	4:xcomp	_
3	administratíva	administratíva	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	4:nsubj	_
4	uviedla	uviesť	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	Z	_	10	punct	10:punct	_
6	že	že	SCONJ	O	_	10	mark	10:mark	_
7	už	už	PART	T	_	10	advmod	10:advmod	_
8	nie	nie	PART	T	_	10	advmod	10:advmod	_
9	je	byť	AUX	VKesc-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
10	relevantná	relevantný	ADJ	AAfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	ccomp	4:ccomp	SpaceAfter=No
11	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 ccomp	color:blue
1	To	to	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	4:nsubj	_
2	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	fantastická	fantastický	ADJ	AAfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	amod	4:amod	_
4	novina	novina	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	7	ccomp	7:ccomp	SpaceAfter=No
5	!	!	PUNCT	Z	_	4	punct	4:punct	SpaceAfter=No
6	“	“	PUNCT	Z	_	4	punct	4:punct	_
7	zvolala	zvolať	VERB	VLdsaf+	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
8	som	byť	AUX	VKesa+	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
9	a	a	CCONJ	O	_	10	cc	10:cc	_
10	objala	objať	VERB	VLdsaf+	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	7	conj	0:root|7:conj	_
11	ju	ona	PRON	PFfs4	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	obj	10:obj	SpaceAfter=No
12	.	.	PUNCT	Z	_	7	punct	7:punct	_

~~~


