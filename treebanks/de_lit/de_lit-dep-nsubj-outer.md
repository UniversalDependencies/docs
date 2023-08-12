---
layout: base
title:  'Statistics of nsubj:outer in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="de_lit-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="de_lit-dep-nsubj-pass.html">nsubj:pass</a></tt>.

1 nodes (0%) are attached to their parents as `nsubj:outer`.

1 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 13.

The following 1 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 45	bgColor:blue
# visual-style 45	fgColor:white
# visual-style 45 32 nsubj:outer	color:blue
1	Eine	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	2	det	_	_
2	Definition	Definition	NOUN	NN	Case=Nom	7	nsubj	_	_
3	der	der	DET	ART	Definite=Def|PronType=Art	4	det	_	_
4	Poesie	Poesie	NOUN	NN	_	2	nmod	_	_
5	kann	können	AUX	VMFIN	_	7	aux	_	_
6	nur	nur	ADV	ADV	_	7	advmod	_	_
7	bestimmen	bestimmen	VERB	VVINF	_	0	root	_	SpaceAfter=No
8	,	,	PUNCT	$,	_	9	punct	_	_
9	was	was	PRON	PWS	Gender=Neut|Number=Sing|PronType=Int,Rel	7	ccomp	_	_
10	sie	sie	PRON	PPER	Case=Nom|Person=3|PronType=Prs	9	nsubj	_	_
11	sein	sein	AUX	VAINF	_	9	cop	_	_
12	soll	sollen	AUX	VMFIN	_	9	aux	_	SpaceAfter=No
13	,	,	PUNCT	$,	_	15	punct	_	_
14	nicht	nicht	PART	PTKNEG	_	15	advmod	_	_
15	was	was	PRON	PWS	Gender=Neut|Number=Sing|PronType=Int,Rel	9	parataxis	_	_
16	sie	sie	PRON	PPER	Case=Nom|Person=3|PronType=Prs	15	nsubj	_	_
17	in	in	ADP	APPR	_	19	case	_	_
18	der	der	DET	ART	Definite=Def|PronType=Art	19	det	_	_
19	Wirklichkeit	Wirklichkeit	NOUN	NN	_	15	obl	_	_
20	war	sein	AUX	VAFIN	_	15	cop	_	_
21	und	und	CCONJ	KON	_	22	cc	_	_
22	ist	sein	AUX	VAFIN	_	20	conj	_	SpaceAfter=No
23	;	;	PUNCT	$.	_	7	punct	_	_
24	sonst	sonst	ADV	ADV	_	30	advmod	_	_
25	würde	werden	AUX	VAFIN	_	30	aux	_	_
26	sie	sie	PRON	PPER	Case=Nom|Person=3|PronType=Prs	30	nsubj	_	_
27	am	an	ADP	APPRART	_	28	case	_	_
28	kürzesten	kürt	ADJ	ADJA	_	30	advmod	_	_
29	so	so	ADV	ADV	_	30	advmod	_	_
30	lauten	lauten	VERB	VVINF	_	7	parataxis	_	SpaceAfter=No
31	:	:	PUNCT	$.	_	45	punct	_	_
32	Poesie	Poesie	NOUN	NN	Case=Nom	45	nsubj:outer	_	_
33	ist	sein	AUX	VAFIN	_	45	cop	_	SpaceAfter=No
34	,	,	PUNCT	$,	_	45	punct	_	_
35	was	was	PRON	PWS	Case=Acc|Gender=Neut|Number=Sing|PronType=Int,Rel	45	obj	_	_
36	man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	45	nsubj	_	_
37	zu	zu	ADP	APPR	_	39	case	_	_
38	irgendeiner	irgendein	DET	PIAT	Number=Sing|PronType=Ind	39	det	_	_
39	Zeit	Zeit	NOUN	NN	Case=Dat	45	obl	_	SpaceAfter=No
40	,	,	PUNCT	$,	_	43	punct	_	_
41	an	an	ADP	APPR	_	43	case	_	_
42	irgendeinem	irgendein	DET	PIAT	Number=Sing|PronType=Ind	43	det	_	_
43	Orte	Ort	NOUN	NN	Case=Dat	45	obl	_	_
44	so	so	ADV	ADV	_	45	advmod	_	_
45	genannt	nennen	VERB	VVPP	_	30	ccomp	_	_
46	hat	haben	AUX	VAFIN	_	45	aux	_	SpaceAfter=No
47	.	.	PUNCT	$.	_	7	punct	_	_

~~~


