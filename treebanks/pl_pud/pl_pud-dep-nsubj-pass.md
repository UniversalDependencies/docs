---
layout: base
title:  'Statistics of nsubj:pass in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-nsubj.html">nsubj</a></tt>.

113 nodes (1%) are attached to their parents as `nsubj:pass`.

104 instances of `nsubj:pass` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.23008849557522.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (79; 70% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (18; 16% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (7; 6% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (6; 5% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	Nowe	nowy	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	amod	2:amod	_
2	wydatki	wydatek	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	3	nsubj:pass	3:nsubj:pass	_
3	finansowane	finansować	ADJ	ppas:pl:nom:m3:imperf:aff	Animacy=Inan|Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	są	być	AUX	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	_
5	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Gen
6	zasobnego	zasobny	ADJ	adj:sg:gen:n:pos	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	7	amod	7:amod	_
7	konta	konto	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	3	obl:arg	3:obl:arg	_
8	Clinton	Clinton	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	—	—	PUNCT	interp	PunctType=Dash	7	punct	7:punct	_
2	ETA	ETA	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	5	nsubj:pass	5:nsubj:pass	_
3	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux:pass	5:aux:pass	_
4	kompletnie	kompletnie	ADV	adv:pos	Degree=Pos	5	advmod	5:advmod	_
5	pokonana	pokonać	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	7	parataxis:obj	7:parataxis:obj	_
6	—	—	PUNCT	interp	PunctType=Dash	7	punct	7:punct	_
7	ujawniła	ujawnić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	strona	strona	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	7:nsubj	_
9	francuska	francuski	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	amod	8:amod	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubj:pass	color:blue
1	–	–	PUNCT	interp	PunctType=Dash	11	punct	11:punct	_
2	Będą	być	VERB	bedzie:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	11	parataxis:obj	11:parataxis:obj	_
3	protesty	protest	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	2:nsubj	_
4	i	i	CCONJ	conj	_	5	cc	5:cc	_
5	inne	inny	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	3	conj	2:nsubj|3:conj	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
7	to	to	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	nsubj:pass	9:nsubj:pass	_
8	już	już	PART	part	_	9	advmod:emph	9:advmod:emph	_
9	zaplanowane	zaplanować	ADJ	ppas:pl:nom:n:perf:aff	Aspect=Perf|Case=Nom|Gender=Neut|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	2	conj	2:conj|11:parataxis:obj	_
10	–	–	PUNCT	interp	PunctType=Dash	11	punct	11:punct	_
11	powiedziała	powiedzieć	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
12	„	„	PUNCT	interp	PunctSide=Ini|PunctType=Quot	13	punct	13:punct	SpaceAfter=No
13	El	El	X	frag	Foreign=Yes	11	iobj	11:iobj	_
14	Mundo	Mundo	PROPN	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing	13	flat	13:flat	SpaceAfter=No
15	”	”	PUNCT	interp	PunctSide=Fin|PunctType=Quot	13	punct	13:punct	_
16	opozycja	opozycja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	11:nsubj	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	11	punct	11:punct	_

~~~


