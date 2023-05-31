---
layout: base
title:  'Statistics of nummod in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `nummod`

This relation is universal.

22 nodes (0%) are attached to their parents as `nummod`.

21 instances of `nummod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.09090909090909.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-NUM.html">NUM</a></tt> (20; 91% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NUM.html">NUM</a></tt> (2; 9% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Nur	nur	ADV	ADV	_	5	advmod	_	_
2	vor	vor	ADP	APPR	_	4	case	_	_
3	drei	drei	NUM	CARD	_	4	nummod	_	_
4	Fehlern	Fehler	NOUN	NN	_	5	nmod	_	_
5	hat	haben	AUX	VAFIN	_	0	root	_	_
6	man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	5	nsubj	_	_
7	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	5	obj	_	_
8	zu	zu	PART	PTKZU	_	9	mark	_	_
9	hüten	hüten	VERB	VVINF	_	5	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 25 nummod	color:blue
1	Man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	4	nsubj	_	_
2	muß	müssen	AUX	VMFIN	_	4	aux	_	_
3	etwas	etwas	PRON	PIS	Gender=Neut|Number=Sing|PronType=Ind	4	obj	_	_
4	haben	haben	VERB	VVINF	_	0	root	_	SpaceAfter=No
5	,	,	PUNCT	$,	_	7	punct	_	_
6	was	was	PRON	PRELS	Case=Nom|Gender=Neut|Number=Sing|PronType=Int,Rel	7	nsubj:pass	_	_
7	mitgeteilt	mitteilen	VERB	VVPP	_	3	acl	_	_
8	werden	werden	AUX	VAINF	_	7	aux:pass	_	_
9	soll	sollen	AUX	VMFIN	_	7	aux	_	SpaceAfter=No
10	;	;	PUNCT	$.	_	16	punct	_	_
11	2	2	NUM	CARD	_	16	nummod	_	SpaceAfter=No
12	)	)	PUNCT	$(	_	11	punct	_	_
13	man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	16	nsubj	_	_
14	muß	müssen	AUX	VMFIN	_	16	aux	_	_
15	jemand	jemand	PRON	PIS	Case=Acc|Number=Sing|PronType=Ind	16	obj	_	_
16	haben	haben	VERB	VVINF	_	4	parataxis	_	SpaceAfter=No
17	,	,	PUNCT	$,	_	21	punct	_	_
18	dem	der	PRON	PRELS	Case=Dat|PronType=Dem,Rel	21	obl:arg	_	_
19	man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	21	nsubj	_	SpaceAfter=No
20	's	es	PRON	PPER	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	21	obj	_	_
21	mitteilen	mitteilen	VERB	VVINF	_	15	acl	_	_
22	wollen	wollen	AUX	VMFIN	_	21	aux	_	_
23	darf	dürfen	AUX	VMFIN	_	21	aux	_	SpaceAfter=No
24	;	;	PUNCT	$.	_	31	punct	_	_
25	3	3	NUM	CARD	_	31	nummod	_	SpaceAfter=No
26	)	)	PUNCT	$(	_	25	punct	_	_
27	man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	31	nsubj	_	_
28	muß	müssen	AUX	VMFIN	_	31	aux	_	_
29	es	es	PRON	PPER	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	31	obj	_	_
30	wirklich	wirklich	ADV	ADV	_	31	advmod	_	_
31	mitteilen	mitteilen	VERB	VVINF	_	4	parataxis	_	SpaceAfter=No
32	,	,	PUNCT	$,	_	35	punct	_	_
33	mit	mit	ADP	APPR	_	34	case	_	_
34	ihm	er	PRON	PPER	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	35	obl	_	_
35	teilen	teilen	VERB	VVINF	_	31	parataxis	_	_
36	können	können	AUX	VMFIN	_	35	aux	_	SpaceAfter=No
37	,	,	PUNCT	$,	_	41	punct	_	_
38	nicht	nicht	PART	PTKNEG	_	41	advmod	_	_
39	bloß	bloß	ADV	ADV	_	41	advmod	_	_
40	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	41	obj	_	_
41	äußern	äußern	VERB	VVINF	_	31	parataxis	_	SpaceAfter=No
42	,	,	PUNCT	$,	_	41	punct	_	_
43	allein	allein	ADV	ADV	_	41	advmod	_	SpaceAfter=No
44	;	;	PUNCT	$.	_	4	punct	_	_

~~~


