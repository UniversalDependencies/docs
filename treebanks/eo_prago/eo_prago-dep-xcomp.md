---
layout: base
title:  'Statistics of xcomp in UD_Esperanto-Prago'
udver: '2'
---

## Treebank Statistics: UD_Esperanto-Prago: Relations: `xcomp`

This relation is universal.

28 nodes (1%) are attached to their parents as `xcomp`.

27 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.39285714285714.

The following 5 pairs of parts of speech are connected with `xcomp`: <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (20; 71% instances), <tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt>-<tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (4; 14% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="eo_prago-pos-AUX.html">AUX</a></tt>-<tt><a href="eo_prago-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="eo_prago-pos-VERB.html">VERB</a></tt>-<tt><a href="eo_prago-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 xcomp	color:blue
1	Mi	_	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	aprobas	_	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	la	_	DET	_	Definite=Def	4	det	_	_
4	esencon	_	NOUN	_	Case=Acc|Number=Sing	2	obj	_	_
5	de	_	ADP	_	_	7	case	_	_
6	la	_	DET	_	Definite=Def	7	det	_	_
7	Homaranismo	_	NOUN	_	Case=Nom|Number=Sing	4	nmod	_	_
8	kaj	_	CCONJ	_	_	10	cc	_	_
9	mi	_	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
10	petas	_	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	2	conj	_	_
11	enskribi	_	VERB	_	VerbForm=Inf	10	xcomp	_	_
12	min	_	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	11	obj	_	_
13	en	_	ADP	_	_	15	case	_	_
14	la	_	DET	_	Definite=Def	15	det	_	_
15	adresaron	_	NOUN	_	Case=Acc|Number=Sing	11	nmod	_	_
16	de	_	ADP	_	_	18	case	_	_
17	la	_	DET	_	Definite=Def	18	det	_	_
18	Homaranoj	_	NOUN	_	Case=Nom|Number=Plur	15	nmod	_	SpaceAfter=No
19	.	_	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 19 xcomp	color:blue
1	Tio	tio	PRON	_	Case=Nom|Number=Sing|PronType=Dem	4	nsubj	_	_
2	estas	esti	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	la	la	DET	_	Definite=Def	4	det	_	_
4	kaŭzo	kaŭzo	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	13	punct	_	_
6	pro	pro	ADP	_	_	7	case	_	_
7	kiu	kiu	PRON	_	Case=Nom|Number=Sing|PronType=Rel	13	nmod	_	_
8	mi	mi	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
9	dum	dum	ADP	_	_	12	case	_	_
10	tre	tre	ADV	_	_	11	advmod	_	_
11	longa	longa	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	12	amod	_	_
12	tempo	tempo	NOUN	_	Case=Nom|Number=Sing	13	nmod	_	_
13	havis	havi	VERB	_	Mood=Ind|Tense=Fut|VerbForm=Fin	4	advcl:relcl	_	_
14	la	la	DET	_	Definite=Def	15	det	_	_
15	intencon	intenco	NOUN	_	Case=Acc|Number=Sing	13	obj	_	_
16	aŭ	aŭ	CCONJ	_	_	19	cc	_	_
17	tute	tute	ADV	_	_	18	advmod	_	_
18	ne	ne	ADV	_	_	19	advmod	_	_
19	publikigi	publikigi	VERB	_	VerbForm=Inf	15	xcomp	_	_
20	mian	mi	PRON	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	21	nmod:poss	_	_
21	kredon	kredo	NOUN	_	Case=Acc|Number=Sing	19	obj	_	SpaceAfter=No
22	,	,	PUNCT	_	_	24	punct	_	_
23	aŭ	aŭ	CCONJ	_	_	24	cc	_	_
24	publikigi	publikigi	VERB	_	VerbForm=Inf	19	conj	_	_
25	ĝin	ĝi	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	24	obj	_	_
26	anonime	anonime	ADV	_	_	24	advmod	_	SpaceAfter=No
27	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 32 xcomp	color:blue
1	Nek	Nek	CCONJ	_	_	4	cc:preconj	_	_
2	la	la	DET	_	Definite=Def|PronType=Art	4	det	_	_
3	tutmonda	tutmonda	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	_
4	uzado	uzado	NOUN	_	Case=Nom|Number=Sing	25	nsubj	_	_
5	de	de	ADP	_	_	8	case	_	_
6	kelkaj	kelka	DET	_	Definite=Ind|PronType=Art	8	det	_	_
7	naciaj	nacia	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	8	amod	_	_
8	lingvoj	lingvo	NOUN	_	Case=Nom|Number=Plur	4	nmod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	nek	nek	CCONJ	_	_	11	cc:preconj	_	_
11	progresoj	progreso	NOUN	_	Case=Nom|Number=Plur	4	conj	_	_
12	en	en	ADP	_	_	14	case	_	_
13	la	la	DET	_	Definite=Def|PronType=Art	14	det	_	_
14	komunikad-tekniko	komunikad-tekniko	NOUN	_	Case=Nom|Number=Sing	11	nmod	_	SpaceAfter=No
15	,	,	PUNCT	_	_	18	punct	_	_
16	nek	nek	CCONJ	_	_	18	cc:preconj	_	_
17	la	la	DET	_	Definite=Def|PronType=Art	18	det	_	_
18	malkovro	malkovro	NOUN	_	Case=Nom|Number=Sing	11	conj	_	_
19	de	de	ADP	_	_	21	case	_	_
20	novaj	nova	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	21	amod	_	_
21	metodoj	metodo	NOUN	_	Case=Nom|Number=Plur	18	nmod	_	_
22	de	de	ADP	_	_	23	case	_	_
23	lingvo-instruado	lingvo-instruado	NOUN	_	Case=Nom|Number=Sing	21	nmod	_	_
24	verŝajne	verŝajne	ADV	_	_	25	advmod	_	_
25	realigos	realigi	VERB	_	Mood=Ind|Tense=Fut|VerbForm=Fin	0	root	_	_
26	jenajn	jena	ADJ	_	Case=Acc|Degree=Pos|Number=Plur	27	amod	_	_
27	principojn	principo	NOUN	_	Case=Acc|Number=Plur	25	obj	_	SpaceAfter=No
28	,	,	PUNCT	_	_	31	punct	_	_
29	kiujn	kiu	PRON	_	Case=Acc|Number=Plur|PronType=Rel	31	obj	_	_
30	ni	ni	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	31	nsubj	_	_
31	konsideras	konsideri	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	27	acl:relcl	_	_
32	esencaj	esenca	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	31	xcomp	_	_
33	por	por	ADP	_	_	38	case	_	_
34	justa	justa	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	38	amod	_	_
35	kaj	kaj	CCONJ	_	_	36	cc	_	_
36	efika	efika	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	34	conj	_	_
37	lingva	lingva	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	38	amod	_	_
38	ordo	ordo	NOUN	_	Case=Nom|Number=Sing	32	nmod	_	SpaceAfter=No
39	.	.	PUNCT	_	_	25	punct	_	_

~~~


