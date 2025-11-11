---
layout: base
title:  'Statistics of orphan in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `orphan`

This relation is universal.

7 nodes (0%) are attached to their parents as `orphan`.

5 instances of `orphan` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.28571428571429.

The following 5 pairs of parts of speech are connected with `orphan`: <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (3; 43% instances), <tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 21 orphan	color:blue
1	Si	si	ADV	_	_	2	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
2	commencerons	commencer	VERB	_	Number=Plur|Person=1|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
3	sur	sur	ADP	_	_	5	case	_	gold_pos=ADP|prpos=S|uppos=P
4	les	le	DET	_	Definite=Def|PronType=Art	5	det	_	gold_pos=DET|prpos=Da|uppos=D
5	personnieulx	personnel	NOUN	_	Number=Plur	2	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCPL
6	,	,	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
7	de	de	ADP	_	_	9	case	_	gold_pos=ADP|prpos=S|uppos=P
8	les	le	DET	_	Definite=Def|PronType=Art	9	det	_	gold_pos=DET|prpos=Da|uppos=D
9	quieulx	quel	PRON	_	PronType=Rel	12	nmod	_	gold_pos=PRON|prpos=Pi|uppos=PRO
10	les	le	DET	_	Definite=Def|PronType=Art	12	det	_	gold_pos=DET|prpos=Da|uppos=D
11	ungs	un	DET	_	Definite=Ind|PronType=Art	12	det	_	gold_pos=DET|prpos=Dn|uppos=D
12	adjournemens	ajournement	NOUN	_	Number=Plur	13	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
13	sont	être	VERB	_	Number=Plur|Person=3|VerbForm=Fin	5	acl:relcl	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
14	sur	sur	ADP	_	_	15	case	_	gold_pos=ADP|prpos=S|uppos=P
15	cas	cas	NOUN	_	Number=Sing	13	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
16	civilz	civil	ADJ	_	_	15	amod	_	gold_pos=ADJ|prpos=Ag|SpaceAfter=No|uppos=ADJ
17	,	,	PUNCT	_	_	13	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
18	les	le	DET	_	Definite=Def|PronType=Art	19	det	_	gold_pos=DET|prpos=Da|uppos=D
19	aultres	autre	PRON	_	PronType=Ind	13	conj	_	gold_pos=PRON|prpos=Pi|uppos=PRO
20	sur	sur	ADP	_	_	21	case	_	gold_pos=ADP|prpos=S|uppos=P
21	cas	cas	NOUN	_	Number=Sing	19	orphan	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
22	crimineulx	criminel	ADJ	_	_	21	amod	_	gold_pos=ADJ|prpos=Ag|SpaceAfter=No|uppos=ADJ
23	.	.	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 orphan	color:blue
1	les	le	DET	_	Definite=Def|PronType=Art	2	det	_	gold_pos=DET|prpos=Da|uppos=D
2	ungs	un	PRON	_	PronType=Ind	5	nsubj	_	gold_pos=PRON|prpos=Pi|uppos=PRO
3	sont	être	AUX	_	Number=Plur|Person=3|VerbForm=Fin	5	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
4	sinplement	simplement	ADV	_	_	5	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
5	criminieulx	criminel	ADJ	_	_	0	root	_	gold_pos=ADJ|prpos=Ag|SpaceAfter=No|uppos=ADJ
6	,	,	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
7	les	le	DET	_	Definite=Def|PronType=Art	8	det	_	gold_pos=DET|prpos=Da|uppos=D
8	aultres	autre	PRON	_	PronType=Ind	9	orphan	_	gold_pos=PRON|prpos=Pi|uppos=PRO
9	criminieulx	criminel	ADJ	_	_	5	conj	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
10	et	et	CCONJ	_	_	11	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
11	cappitaulx	capital	ADJ	_	_	9	conj	_	gold_pos=ADJ|prpos=Ag|SpaceAfter=No|uppos=ADJ
12	.	.	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 33 orphan	color:blue
1	§	§	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|prpos=Fo|uppos=PON
2	L'	le	DET	_	Definite=Def|PronType=Art	3	det	_	gold_pos=DET|prpos=Da|uppos=D
3	en	en	PRON	_	PronType=Prs	5	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	doit	devoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	5	aux	_	gold_pos=AUX|prpos=Vvc|uppos=MDJ
5	savoir	savoir	VERB	_	VerbForm=Inf	0	root	_	gold_pos=VERB|prpos=Vvn|uppos=MDX
6	que	que	SCONJ	_	_	11	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
7	les	le	DET	_	Definite=Def|PronType=Art	8	det	_	gold_pos=DET|prpos=Da|uppos=D
8	barons	baron	NOUN	_	Number=Plur	11	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
9	doivent	devoir	AUX	_	Number=Plur|Person=3|VerbForm=Fin	11	aux	_	gold_pos=AUX|prpos=Vvc|uppos=MDJ
10	estre	être	AUX	_	VerbForm=Inf	11	aux:pass	_	gold_pos=AUX|prpos=Vun|uppos=EX
11	adjournés	ajourner	VERB	_	Tense=Past|VerbForm=Part	5	ccomp	_	gold_pos=VERB|prpos=Ge|uppos=VPP
12	par	par	ADP	_	_	14	case	_	gold_pos=ADP|prpos=S|uppos=P
13	le	le	DET	_	Definite=Def|PronType=Art	14	det	_	gold_pos=DET|prpos=Da|uppos=D
14	bailli	bailli	NOUN	_	Number=Sing	11	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
15	,	,	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
16	le	le	DET	_	Definite=Def|PronType=Art	17	det	_	gold_pos=DET|prpos=Da|uppos=D
17	viconte	vicomte	NOUN	_	Number=Sing	11	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
18	ou	ou	CCONJ	_	_	21	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
19	aultre	autre	DET	_	PronType=Ind	21	det	_	gold_pos=DET|prpos=Di|uppos=D
20	maistre	maître	ADJ	_	_	21	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
21	sergent	sergent	NOUN	_	Number=Sing	17	conj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
22	,	,	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
23	présens	présent	ADJ	_	_	25	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
24	IIII	quatre	NUM	_	NumType=Card	25	nummod	_	gold_pos=NUM|prpos=Mc|uppos=ADJNUM
25	chevaliers	chevalier	NOUN	_	Number=Plur	11	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCPL
26	,	,	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
27	et	et	CCONJ	_	_	30	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
28	les	le	DET	_	Definite=Def|PronType=Art	30	det	_	gold_pos=DET|prpos=Da|uppos=D
29	aultres	autre	ADJ	_	_	30	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
30	seigneurs	seigneur	NOUN	_	Number=Plur	11	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
31	à	à	ADP	_	_	33	case	_	gold_pos=ADP|prpos=S|uppos=P
32	leurs	leur	DET	_	Poss=Yes	33	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
33	seneschaulx	sénéchal	NOUN	_	Number=Plur	30	orphan	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
34	ou	ou	CCONJ	_	_	35	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
35	prevostz	prévôt	NOUN	_	Number=Plur	33	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
36	selon	selon	ADP	_	_	38	case	_	gold_pos=ADP|prpos=S|uppos=P
37	la	le	DET	_	Definite=Def|PronType=Art	38	det	_	gold_pos=DET|prpos=Da|uppos=D
38	coustume	coutume	NOUN	_	Number=Sing	33	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
39	.	.	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


