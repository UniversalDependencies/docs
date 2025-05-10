---
layout: base
title:  'Statistics of amod in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `amod`

This relation is universal.

96 nodes (11%) are attached to their parents as `amod`.

90 instances of `amod` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.375.

The following 4 pairs of parts of speech are connected with `amod`: <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt> (92; 96% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="eo_prago-pos-PRON.html">PRON</a></tt>-<tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod	color:blue
1	Manifesto	manifesto	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
2	de	de	ADP	_	_	3	case	_	_
3	Prago	Prago	PROPN	_	Case=Nom|Number=Sing	1	nmod	_	_
4	de	de	ADP	_	_	6	case	_	_
5	la	la	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	movado	movado	NOUN	_	Case=Nom|Number=Sing	3	nmod	_	_
7	por	por	ADP	_	_	10	case	_	_
8	la	la	DET	_	Definite=Def|PronType=Art	10	det	_	_
9	internacia	internacia	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	10	amod	_	_
10	lingvo	lingvo	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
11	Esperanto	Esperanto	PROPN	_	Case=Nom|Number=Sing	10	appos	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 amod	color:blue
1	Ni	ni	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	asertas	aserti	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	13	punct	_	_
4	ke	ke	SCONJ	_	_	13	mark	_	_
5	la	la	DET	_	Definite=Def|PronType=Art	6	det	_	_
6	edukado	edukado	NOUN	_	Case=Nom|Number=Sing	13	nsubj	_	_
7	per	per	ADP	_	_	11	case	_	_
8	iu	iu	DET	_	Definite=Ind|PronType=Art	11	det	_	_
9	ajn	ajn	PART	_	_	8	advmod	_	_
10	etna	etna	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	11	amod	_	_
11	lingvo	lingvo	NOUN	_	Case=Nom|Number=Sing	6	nmod	_	_
12	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	ligita	ligi	VERB	_	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	2	ccomp	_	_
14	al	al	ADP	_	_	16	case	_	_
15	difinita	difini	VERB	_	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	16	amod	_	_
16	perspektivo	perspektivo	NOUN	_	Case=Nom|Number=Sing	13	obl	_	_
17	pri	pri	ADP	_	_	19	case	_	_
18	la	la	DET	_	Definite=Def|PronType=Art	19	det	_	_
19	mondo	mondo	NOUN	_	Case=Nom|Number=Sing	16	nmod	_	SpaceAfter=No
20	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 amod	color:blue
1	Ni	ni	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	asertas	aserti	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ke	ke	SCONJ	_	_	14	mark	_	_
4	la	la	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	anoj	ano	NOUN	_	Case=Nom|Number=Plur	14	nsubj	_	_
6	de	de	ADP	_	_	8	case	_	_
7	ĉiuj	ĉiu	DET	_	Case=Nom|Number=Plur|PronType=Tot	8	det	_	_
8	lingvoj	lingvo	NOUN	_	Case=Nom|Number=Plur	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	grandaj	granda	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	8	amod	_	_
11	kaj	kaj	CCONJ	_	_	12	cc	_	_
12	malgrandaj	malgranda	ADJ	_	Case=Nom|Number=Plur	10	amod	_	SpaceAfter=No
13	,	,	PUNCT	_	_	14	punct	_	_
14	devus	devi	VERB	_	Mood=Sub|VerbForm=Fin	2	ccomp	_	_
15	disponi	disponi	VERB	_	VerbForm=Inf	14	xcomp	_	_
16	pri	pri	ADP	_	_	18	case	_	_
17	reala	reala	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	18	amod	_	_
18	ŝanco	ŝanco	NOUN	_	Case=Nom|Number=Sing	15	nmod	_	_
19	por	por	ADP	_	_	20	mark	_	_
20	alproprigi	alproprigi	VERB	_	VerbForm=Inf	18	acl	_	_
21	duan	dua	ADJ	_	Case=Acc|Degree=Pos|Number=Sing	22	amod	_	_
22	lingvon	lingvo	NOUN	_	Case=Acc|Number=Sing	20	obj	_	_
23	ĝis	ĝis	ADP	_	_	26	case	_	_
24	alta	alta	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	26	amod	_	_
25	komunika	komunika	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	26	amod	_	_
26	nivelo	nivelo	NOUN	_	Case=Nom|Number=Sing	20	nmod	_	SpaceAfter=No
27	.	.	PUNCT	_	_	2	punct	_	_

~~~


