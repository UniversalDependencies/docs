---
layout: base
title:  'Statistics of dislocated in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `dislocated`

This relation is universal.

9 nodes (0%) are attached to their parents as `dislocated`.

7 instances of `dislocated` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.77777777777778.

The following 3 pairs of parts of speech are connected with `dislocated`: <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (5; 56% instances), <tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (2; 22% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (2; 22% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 8 dislocated	color:blue
1	et	et	CCONJ	_	_	5	cc	_	prpos=Cc|uppos=CONJO
2	doit	devoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	5	aux	_	prpos=Vvc|uppos=MDJ
3	le	le	DET	_	Definite=Def|PronType=Art	4	det	_	prpos=Da|uppos=D
4	mestre	maître	NOUN	_	Number=Sing	5	nsubj	_	prpos=Nc|uppos=NCS
5	dire	dire	VERB	_	VerbForm=Inf	0	root	_	prpos=Vvn|SpaceAfter=No|uppos=VX
6	:	:	PUNCT	_	_	5	punct	_	join=left|prpos=Fw|uppos=PON
7	«	«	PUNCT	_	_	5	punct	_	prpos=Fo|uppos=PON
8	Ce	ce	PRON	_	PronType=Dem	15	dislocated	_	prpos=Pd|uppos=PRO
9	que	que	PRON	_	PronType=Rel	11	obj	_	prpos=Pr|uppos=WPRO
10	cestui	cist	PRON	_	PronType=Dem	11	nsubj	_	prpos=Pd|uppos=PRO
11	fist	faire	VERB	_	Number=Sing|Person=3|VerbForm=Fin	8	acl:relcl	_	prpos=Vvc|SpaceAfter=No|uppos=VJ
12	,	,	PUNCT	_	_	8	punct	_	join=left|prpos=Fw|uppos=PON
13	il	il	PRON	_	PronType=Prs	15	nsubj	_	prpos=Pp|uppos=PRO
14	le	il	PRON	_	PronType=Prs	15	obj	_	prpos=Pp|uppos=PRO
15	fist	faire	VERB	_	Number=Sing|Person=3|VerbForm=Fin	5	ccomp	_	prpos=Vvc|uppos=VJ
16	en	en	ADP	_	_	18	case	_	prpos=S|uppos=P
17	mon	mon	DET	_	Poss=Yes	18	det	_	prpos=Ds|uppos=DZ
18	non	nom	NOUN	_	Number=Sing	15	obl	_	prpos=Nc|uppos=NCS

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 dislocated	color:blue
1	Et	et	CCONJ	_	_	2	cc	_	prpos=Cc|uppos=CONJO
2	dist	dire	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
3	son	son	DET	_	Poss=Yes	4	det	_	prpos=Ds|uppos=DZ
4	garant	garant	NOUN	_	Number=Sing	2	nsubj	_	prpos=Nc|uppos=NCS
5	«	«	PUNCT	_	_	2	punct	_	prpos=Fo|uppos=PON
6	C'	ce	PRON	_	PronType=Dem	8	nsubj	_	prpos=Pd|uppos=PRO
7	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	8	cop	_	prpos=Vuc|uppos=EJ
8	voir	voir	ADJ	_	_	2	ccomp	_	prpos=Ag|uppos=ADJ
9	ce	ce	PRON	_	PronType=Dem	8	dislocated	_	prpos=Pd|uppos=PRO
10	que	que	PRON	_	PronType=Rel	12	obj	_	prpos=Pr|uppos=WPRO
11	il	il	PRON	_	PronType=Prs	12	nsubj	_	prpos=Pp|uppos=PRO
12	dist	dire	VERB	_	Number=Sing|Person=3|VerbForm=Fin	9	acl:relcl	_	prpos=Vvc|uppos=VJ

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 8 dislocated	color:blue
1	Item	item	ADV	_	_	5	advmod	_	prpos=Rg|SpaceAfter=No|uppos=ADV
2	,	,	PUNCT	_	_	1	punct	_	join=left|prpos=Fw|uppos=PON
3	il	il	PRON	_	PronType=Prs	5	expl	_	prpos=Pp|uppos=PRO
4	fu	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	5	aux:pass	_	prpos=Vuc|uppos=EJ
5	rendu	rendre	VERB	_	Tense=Past|VerbForm=Part	0	root	_	prpos=Ge|uppos=VPP
6	que	que	SCONJ	_	_	23	mark	_	prpos=Cs|uppos=CONJS
7	un	un	DET	_	Definite=Ind|PronType=Art	8	det	_	prpos=Dn|uppos=D
8	enfant	enfant	NOUN	_	Number=Sing	23	dislocated	_	prpos=Nc|uppos=NCS
9	sous	sous	ADP	_	_	10	case	_	prpos=S|uppos=P
10	aage	âge	NOUN	_	Number=Sing	8	nmod	_	prpos=Nc|SpaceAfter=No|uppos=NCS
11	,	,	PUNCT	_	_	8	punct	_	join=left|prpos=Fw|uppos=PON
12	qui	qui	PRON	_	PronType=Rel	13	nsubj	_	prpos=Pr|uppos=WPRO
13	estoit	être	VERB	_	Number=Sing|Person=3|VerbForm=Fin	8	acl:relcl	_	prpos=Vuc|uppos=EJ
14	en	en	ADP	_	_	16	case	_	prpos=S|uppos=P
15	la	le	DET	_	Definite=Def|PronType=Art	16	det	_	prpos=Da|uppos=D
16	garde	garde	NOUN	_	Number=Sing	13	obl	_	prpos=Nc|uppos=NCS
17	son	son	DET	_	Poss=Yes	18	det	_	prpos=Ds|uppos=DZ
18	seignor	seigneur	NOUN	_	Number=Sing	16	nmod	_	prpos=Nc|SpaceAfter=No|uppos=NCS
19	,	,	PUNCT	_	_	8	punct	_	join=left|prpos=Fw|uppos=PON
20	son	son	DET	_	Poss=Yes	21	det	_	prpos=Ds|uppos=DZ
21	seignor	seigneur	NOUN	_	Number=Sing	23	nsubj	_	prpos=Nc|uppos=NCS
22	fu	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	23	aux	_	prpos=Vuc|uppos=EJ
23	mort	mourir	VERB	_	Tense=Past|VerbForm=Part	5	ccomp	_	prpos=Ge|uppos=VPP
24	et	et	CCONJ	_	_	25	cc	_	prpos=Cc|uppos=CONJO
25	fu	être	VERB	_	Number=Sing|Person=3|VerbForm=Fin	23	conj	_	prpos=Vuc|uppos=EJ
26	son	son	DET	_	Poss=Yes	27	det	_	prpos=Ds|uppos=DZ
27	hoir	hoir	NOUN	_	Number=Sing	25	nsubj	_	prpos=Nc|uppos=NCS
28	sous	sous	ADP	_	_	29	case	_	prpos=S|uppos=P
29	aage	âge	NOUN	_	Number=Sing	25	obl	_	prpos=Nc|uppos=NCS
30	et	et	CCONJ	_	_	31	cc	_	prpos=Cc|uppos=CONJO
31	chaï	choir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	25	conj	_	prpos=Vvc|uppos=VJ
32	en	en	ADP	_	_	34	case	_	prpos=S|uppos=P
33	la	le	DET	_	Definite=Def|PronType=Art	34	det	_	prpos=Da|uppos=D
34	garde	garde	NOUN	_	Number=Sing	31	obl	_	prpos=Nc|uppos=NCS
35	le	le	DET	_	Definite=Def|PronType=Art	36	det	_	prpos=Da|uppos=D
36	roy	roi	NOUN	_	Number=Sing	34	nmod	_	prpos=Nc|uppos=NCS
37	par	par	ADP	_	_	38	case	_	prpos=S|uppos=P
38	reson	raison	NOUN	_	Number=Sing	31	obl	_	prpos=Nc|uppos=NCS
39	de	de	ADP	_	_	41	case	_	prpos=S|uppos=P
40	son	son	DET	_	Poss=Yes	41	det	_	prpos=Ds|uppos=DZ
41	fieu	fief	NOUN	_	Number=Sing	38	nmod	_	prpos=Nc|uppos=NCS
42	et	et	CCONJ	_	_	43	cc	_	prpos=Cc|uppos=CONJO
43	fu	être	VERB	_	Number=Sing|Person=3|VerbForm=Fin	23	conj	_	prpos=Vuc|uppos=EJ
44	tout	tout	DET	_	Definite=Ind	46	det	_	prpos=Di|uppos=D
45	le	le	DET	_	Definite=Def|PronType=Art	46	det	_	prpos=Da|uppos=D
46	soen	sien	PRON	_	Poss=Yes	43	nsubj	_	prpos=Ps|uppos=PRO
47	en	en	ADP	_	_	49	case	_	prpos=S|uppos=P
48	la	le	DET	_	Definite=Def|PronType=Art	49	det	_	prpos=Da|uppos=D
49	garde	garde	NOUN	_	Number=Sing	43	obl	_	prpos=Nc|uppos=NCS
50	le	le	DET	_	Definite=Def|PronType=Art	51	det	_	prpos=Da|uppos=D
51	roy	roi	NOUN	_	Number=Sing	49	nmod	_	prpos=Nc|SpaceAfter=No|uppos=NCS
52	.	.	PUNCT	_	_	5	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


