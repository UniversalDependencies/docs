---
layout: base
title:  'Statistics of csubj:outer in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="en_lines-dep-csubj-pass.html">csubj:pass</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:outer`.

1 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 1 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 csubj:outer	color:blue
1	But	but	CCONJ	_	_	13	cc	_	_
2	what	what	PRON	WH-REL	PronType=Rel	9	obj	_	_
3	their	their	PRON	P3PL-GEN	Case=Gen|Number=Plur|Person=3|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
4	contented	content	ADJ	PASS	Degree=Pos	6	amod	_	_
5	little	little	ADJ	POS	Degree=Pos	6	amod	_	_
6	minds	mind	NOUN	PL-NOM	Number=Plur	9	nsubj	_	_
7	will	will	AUX	PRES-AUX	VerbForm=Fin	9	aux	_	_
8	never	never	ADV	NEG	PronType=Neg	9	advmod	_	_
9	know	know	VERB	INF	VerbForm=Inf	13	csubj:outer	_	_
10	is	be	AUX	PRES	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
11	that	that	SCONJ	_	_	13	mark	_	_
12	I	I	PRON	PERS-P1SG-NOM	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
13	knew	know	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
14	it	it	PRON	PERS-SG	_	13	obj	_	_
15	when	when	SCONJ	_	_	17	mark	_	_
16	I	I	PRON	PERS-P1SG-NOM	Case=Nom|Number=Sing|Person=1|PronType=Prs	17	nsubj	_	_
17	took	take	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	13	advcl	_	_
18	the	the	DET	DEF	Definite=Def|PronType=Art	19	det	_	_
19	job	job	NOUN	SG-NOM	Number=Sing	17	obj	_	SpaceAfter=No
20	,	,	PUNCT	Comma	_	22	punct	_	_
21	I	I	PRON	PERS-P1SG-NOM	Case=Nom|Number=Sing|Person=1|PronType=Prs	22	nsubj	_	_
22	knew	know	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	13	conj	_	_
23	it	it	PRON	PERS-SG	_	22	obj	_	_
24	all	all	ADV	TOT	_	25	advmod	_	_
25	along	along	ADV	_	_	22	advmod	_	SpaceAfter=No
26	,	,	PUNCT	Comma	_	30	punct	_	_
27	and	and	CCONJ	_	_	30	cc	_	_
28	I	I	PRON	PERS-P1SG-NOM	Case=Nom|Number=Sing|Person=1|PronType=Prs	30	nsubj	_	_
29	'll	will	AUX	PRES-AUX	VerbForm=Fin	30	aux	_	_
30	say	say	VERB	INF	VerbForm=Inf	13	conj	_	_
31	it	it	PRON	PERS-SG	_	30	obj	_	_
32	now	now	ADV	_	PronType=Dem	30	advmod	_	_
33	as	as	ADV	_	_	34	advmod	_	_
34	loud	loud	ADJ	POS	_	30	advmod	_	_
35	as	as	SCONJ	_	_	38	mark	_	_
36	I	I	PRON	PERS-P1SG-NOM	Case=Nom|Number=Sing|Person=1|PronType=Prs	38	nsubj	_	_
37	'd	will	AUX	PAST-AUX	Mood=Ind|Tense=Past|VerbForm=Fin	38	aux	_	_
38	say	say	VERB	INF	VerbForm=Inf	34	acl	_	_
39	it	it	PRON	PERS-SG	_	38	obj	_	_
40	then	then	ADV	_	PronType=Dem	38	advmod	_	SpaceAfter=No
41	...	...	PUNCT	Dots	_	13	punct	_	_

~~~


