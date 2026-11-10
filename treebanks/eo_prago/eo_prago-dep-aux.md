---
layout: base
title:  'Statistics of aux in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="eo_prago-dep-aux-pass.html">aux:pass</a></tt>.

73 nodes (2%) are attached to their parents as `aux`.

72 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.97260273972603.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> (38; 52% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> (23; 32% instances), <tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt>-<tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> (7; 10% instances), <tt><a href="eo_prago-pos-ADV.html">ADV</a></tt>-<tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> (3; 4% instances), <tt><a href="eo_prago-pos-NUM.html">NUM</a></tt>-<tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="eo_prago-pos-PRON.html">PRON</a></tt>-<tt><a href="eo_prago-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Neniam	neniam	ADV	_	_	4	advmod	_	_
2	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	devas	devi	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	malami	malami	VERB	_	VerbForm=Inf	0	root	_	_
5	moki	moki	VERB	_	VerbForm=Inf	4	xcomp	_	_
6	aŭ	aŭ	CCONJ	_	_	7	cc	_	_
7	persekuti	persekuti	VERB	_	VerbForm=Inf	5	conj	_	_
8	iun	iu	PRON	_	Case=Acc|Number=Sing|PronType=Art	7	obj	_	_
9	pro	pro	ADP	_	_	10	case	_	_
10	tio	tio	PRON	_	Case=Nom|Number=Sing|PronType=Dem	7	obl	_	SpaceAfter=No
11	,	,	PUNCT	_	_	18	punct	_	_
12	ke	ke	SCONJ	_	_	18	mark	_	_
13	lia	lia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	14	nmod:poss	_	_
14	kredo	kredo	NOUN	_	Case=Nom|Number=Sing	18	nsubj	_	_
15	pri	pri	ADP	_	_	16	case	_	_
16	Dio	dio	NOUN	_	Case=Nom|Number=Sing	14	nmod	_	_
17	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	18	aux	_	_
18	alia	alia	PRON	_	Case=Nom|Number=Sing|PronType=Dem	10	acl:relcl	_	_
19	ol	ol	CCONJ	_	_	20	cc	_	_
20	mia	mia	PRON	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	18	nmod	_	SpaceAfter=No
21	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	Homarano	homarano	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
4	;	;	PUNCT	_	_	6	punct	_	_
5	tio	tio	PRON	_	Case=Nom|Number=Sing|PronType=Dem	6	nsubj	_	_
6	signifas	signifi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	parataxis	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	ke	ke	SCONJ	_	_	10	mark	_	_
9	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	gvidas	gvidi	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	6	ccomp	_	_
11	min	mi	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	10	obj	_	_
12	en	en	ADP	_	_	14	case	_	_
13	la	la	DET	_	Definite=Def|PronType=Art	14	det	_	_
14	vivo	vivo	NOUN	_	Case=Nom|Number=Sing	10	obl	_	_
15	per	per	ADP	_	_	18	case	_	_
16	la	la	DET	_	Definite=Def|PronType=Art	18	det	_	_
17	sekvantaj	sekvanta	ADJ	_	Case=Nom|Number=Plur	18	amod	_	_
18	principoj	principo	NOUN	_	Case=Nom|Number=Plur	10	obl	_	SpaceAfter=No
19	:	:	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 aux	color:blue
1	Apartenado	Apartenado	NOUN	_	Case=Nom|Number=Sing	11	nsubj	_	_
2	al	al	ADP	_	_	5	case	_	_
3	ia	ia	ADJ	_	Case=Nom|Number=Sing	5	amod	_	_
4	aktiva	aktiva	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	5	amod	_	_
5	societo	societo	NOUN	_	Case=Nom|Number=Sing	1	nmod	_	_
6	Esperantista	Esperantista	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	5	amod	_	_
7	por	por	ADP	_	_	9	case	_	_
8	ĉiu	ĉiu	PRON	_	Case=Nom|Number=Sing|PronType=Tot	9	det	_	_
9	Esperantisto	Esperantisto	NOUN	_	Case=Nom|Number=Sing	11	obl	_	_
10	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	rekomendinda	rekomendinda	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	_	_
13	sed	sed	CCONJ	_	_	15	cc	_	_
14	ne	ne	ADV	_	_	15	advmod	_	_
15	deviga	deviga	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	11	conj	_	SpaceAfter=No
16	.	.	PUNCT	_	_	11	punct	_	_

~~~


