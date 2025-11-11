---
layout: base
title:  'Statistics of acl in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="eo_prago-dep-acl-relcl.html">acl:relcl</a></tt>.

13 nodes (0%) are attached to their parents as `acl`.

12 instances of `acl` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.15384615384615.

The following 2 pairs of parts of speech are connected with `acl`: <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (12; 92% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl	color:blue
1	Ĉiu	ĉiu	DET	_	Case=Nom|Number=Sing|PronType=Tot	2	det	_	_
2	komunumano	komunumano	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
3	akceptis	akcepti	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	la	la	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	taskon	tasko	NOUN	_	Case=Acc|Number=Sing	3	obj	_	_
6	lerni	lerni	VERB	_	VerbForm=Inf	5	acl	_	_
7	almenaŭ	almenaŭ	ADV	_	_	8	advmod	_	_
8	unu	unu	NUM	_	NumForm=Word|NumType=Card	10	nummod	_	_
9	fremdan	fremda	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	10	amod	_	_
10	lingvon	lingvo	NOUN	_	Case=Acc|Number=Sing	6	obj	_	_
11	ĝis	ĝis	ADP	_	_	13	case	_	_
12	parola	parola	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	13	amod	_	_
13	grado	grado	NOUN	_	Case=Nom|Number=Sing	10	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 48	bgColor:blue
# visual-style 48	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 48 acl	color:blue
1	Mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	konscias	konscii	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	10	punct	_	_
4	ke	ke	SCONJ	_	_	10	mark	_	_
5	ĉiu	ĉiu	DET	_	Case=Nom|Number=Sing|PronType=Tot	6	det	_	_
6	regno	regno	NOUN	_	Case=Nom|Number=Sing	10	nsubj	_	_
7	kaj	kaj	CCONJ	_	_	9	cc	_	_
8	ĉiu	ĉiu	DET	_	Case=Nom|Number=Sing|PronType=Tot	9	det	_	_
9	provinco	provinco	NOUN	_	Case=Nom|Number=Sing	6	conj	_	_
10	devas	devi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
11	porti	porti	VERB	_	VerbForm=Inf	10	xcomp	_	_
12	nomon	nomo	NOUN	_	Case=Acc|Number=Sing	11	obj	_	_
13	neŭtrale-geografian	neŭtrale-geografia	ADJ	_	Case=Acc|Number=Sing	12	amod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	18	punct	_	_
15	sed	sed	CCONJ	_	_	16	cc	_	_
16	ne	ne	ADV	_	_	18	advmod	_	_
17	la	la	DET	_	Definite=Def	18	det	_	_
18	nomon	nomo	NOUN	_	Case=Acc|Number=Sing	12	conj	_	_
19	de	de	ADP	_	_	21	case	_	_
20	ia	ia	DET	_	Case=Nom|Number=Sing|PronType=Ind	21	det	_	_
21	gento	gento	NOUN	_	Case=Nom|Number=Sing	18	nmod	_	SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	lingvo	lingvo	NOUN	_	Case=Nom|Number=Sing	21	conj	_	_
24	aŭ	aŭ	CCONJ	_	_	23	cc	_	_
25	religio	religio	NOUN	_	Case=Nom|Number=Sing	23	conj	_	SpaceAfter=No
26	,	,	PUNCT	_	_	45	punct	_	_
27	ĉar	ĉar	SCONJ	_	_	45	mark	_	_
28	la	la	DET	_	Definite=Def	30	det	_	_
29	gentaj	genta	ADJ	_	Case=Nom|Number=Plur	30	amod	_	_
30	nomoj	nomo	NOUN	_	Case=Nom|Number=Plur	45	nsubj	_	SpaceAfter=No
31	,	,	PUNCT	_	_	33	punct	_	_
32	kiujn	kiu	PRON	_	Case=Acc|Number=Plur	33	obj	_	Rel=Yes
33	portas	porti	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	30	acl:relcl	_	_
34	ankoraŭ	ankoraŭ	ADV	_	_	33	advmod	_	_
35	multaj	multa	ADJ	_	Case=Nom|Number=Plur	36	amod	_	_
36	landoj	lando	NOUN	_	Case=Nom|Number=Plur	33	nsubj	_	_
37	de	de	ADP	_	_	40	case	_	_
38	la	la	DET	_	Definite=Def	40	det	_	_
39	malnova	malnova	ADJ	_	Case=Nom|Number=Sing	40	amod	_	_
40	mondo	mondo	NOUN	_	Case=Nom|Number=Sing	36	nmod	_	SpaceAfter=No
41	,	,	PUNCT	_	_	45	punct	_	_
42	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	45	aux	_	_
43	la	la	DET	_	Definite=Def	45	det	_	_
44	ĉefa	ĉefa	ADJ	_	Case=Nom|Number=Sing	45	amod	_	_
45	kaŭzo	kaŭzo	NOUN	_	Case=Nom|Number=Sing	10	advcl	_	SpaceAfter=No
46	,	,	PUNCT	_	_	48	punct	_	_
47	pro	pro	ADP	_	_	48	case	_	_
48	kiu	kiu	PRON	_	Case=Nom|Number=Sing	45	acl	_	Rel=Yes
49	la	la	DET	_	Definite=Def	50	det	_	_
50	loĝantoj	loĝanto	NOUN	_	Case=Nom|Number=Plur	55	nsubj	_	_
51	de	de	ADP	_	_	54	case	_	_
52	unu	unu	NUM	_	NumType=Card	54	nummod	_	_
53	supozata	supozi	VERB	_	Case=Nom|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Pass	54	amod	_	_
54	deveno	deveno	NOUN	_	Case=Nom|Number=Sing	50	nmod	_	_
55	rigardas	rigardi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	48	acl:relcl	_	_
56	sin	sin	PRON	_	Case=Acc|Person=3	55	obj	_	Reflex=Yes
57	kiel	kiel	ADP	_	_	58	case	_	_
58	mastrojn	mastro	NOUN	_	Case=Acc|Number=Plur	55	obl	_	_
59	super	super	ADP	_	_	61	case	_	_
60	la	la	DET	_	Definite=Def	61	det	_	_
61	loĝantoj	loĝanto	NOUN	_	Case=Nom|Number=Plur	58	nmod	_	_
62	de	de	ADP	_	_	64	case	_	_
63	alia	alia	ADJ	_	Case=Nom|Number=Sing	64	amod	_	_
64	deveno	deveno	NOUN	_	Case=Nom|Number=Sing	61	nmod	_	SpaceAfter=No
65	.	.	PUNCT	_	_	2	punct	_	_

~~~


