---
layout: base
title:  'Statistics of obj in UD_Old_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Old_French-ALTM: Relations: `obj`

This relation is universal.

805 nodes (5%) are attached to their parents as `obj`.

575 instances of `obj` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.93291925465839.

The following 4 pairs of parts of speech are connected with `obj`: <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-NOUN.html">NOUN</a></tt> (552; 69% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-PRON.html">PRON</a></tt> (249; 31% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fro_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_altm-pos-ADV.html">ADV</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obj	color:blue
1	le	le	DET	_	Definite=Def|PronType=Art	2	det	_	prpos=Da|uppos=D
2	deffendeor	défendeur	NOUN	_	Number=Sing	3	nsubj	_	prpos=Nc|uppos=NCS
3	proposoit	proposer	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
4	plusors	plusieurs	DET	_	Definite=Ind	5	det	_	prpos=Di|uppos=Q
5	articles	article	NOUN	_	Number=Plur	3	obl	_	prpos=Nc|uppos=NCPL
6	por	pour	ADP	_	_	9	mark	_	prpos=S|uppos=P
7	le	le	DET	_	Definite=Def|PronType=Art	8	det	_	prpos=Da|uppos=D
8	brief	bref	NOUN	_	Number=Sing	9	obj	_	prpos=Nc|uppos=NCS
9	abatre	abattre	VERB	_	VerbForm=Inf	3	advcl	_	prpos=Vvn|SpaceAfter=No|uppos=VX
10	.	.	PUNCT	_	_	3	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obj	color:blue
1	Jugié	juger	VERB	_	Tense=Past|VerbForm=Part	0	root	_	prpos=Ge|uppos=VPP
2	fu	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	1	aux:pass	_	prpos=Vuc|uppos=EJ
3	que	que	SCONJ	_	_	6	mark	_	prpos=Cs|uppos=CONJS
4	il	il	PRON	_	PronType=Prs	6	nsubj	_	prpos=Pp|uppos=PRO
5	l'	il	PRON	_	PronType=Prs	6	obj	_	prpos=Pp|uppos=PRO
6	amendast	amender	VERB	_	Number=Sing|Person=3|VerbForm=Fin	1	ccomp	_	prpos=Vvc|uppos=VJ
7	avant	avant	ADV	_	_	6	advmod	_	prpos=Rg|SpaceAfter=No|uppos=ADV
8	.	.	PUNCT	_	_	1	punct	_	join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 22 obj	color:blue
1	Il	il	PRON	_	PronType=Prs	2	nsubj	_	prpos=Pp|uppos=PRO
2	dist	dire	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc|uppos=VJ
3	que	que	SCONJ	_	_	7	mark	_	prpos=Cs|uppos=CONJS
4	«	«	PUNCT	_	_	3	punct	_	prpos=Fo|uppos=PON
5	il	il	PRON	_	PronType=Prs	7	nsubj	_	prpos=Pp|uppos=PRO
6	ne	ne	ADV	_	Polarity=Neg	7	advmod	_	prpos=Rp|uppos=NEG
7	vouloit	vouloir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	2	ccomp	_	prpos=Vvc|uppos=MDJ
8	aler	aller	VERB	_	VerbForm=Inf	7	xcomp	_	prpos=Vvn|uppos=VX
9	avant	avant	ADV	_	_	8	advmod	_	prpos=Rg|uppos=ADV
10	a	à	ADP	_	_	12	case	_	prpos=S|uppos=P
11	le	le	DET	_	Definite=Def|PronType=Art	12	det	_	prpos=Da|uppos=D
12	jugement	jugement	NOUN	_	Number=Sing	8	obl	_	prpos=Nc|uppos=NCS
13	et	et	CCONJ	_	_	19	cc	_	prpos=Cc|uppos=CONJO
14	que	que	SCONJ	_	_	19	mark	_	prpos=Cs|uppos=CONJS
15	la	le	DET	_	Definite=Def|PronType=Art	18	det	_	prpos=Da|uppos=D
16	plus	plus	ADV	_	_	17	advmod	_	prpos=Rg|uppos=ADV
17	fort	fort	ADJ	_	_	18	amod	_	prpos=Ag|uppos=ADJ
18	loy	loi	NOUN	_	Number=Sing	19	nsubj	_	prpos=Nc|uppos=NCS
19	abat	abattre	VERB	_	Number=Sing|Person=3|VerbForm=Fin	8	conj	_	prpos=Vvc|uppos=VJ
20	la	le	DET	_	Definite=Def|PronType=Art	22	det	_	prpos=Da|uppos=D
21	plus	plus	ADV	_	_	22	advmod	_	prpos=Rg|uppos=ADV
22	feible	faible	ADJ	_	_	19	obj	_	prpos=Ag|uppos=ADJ
23	par	par	ADP	_	_	25	case	_	prpos=S|uppos=P
24	la	le	DET	_	Definite=Def|PronType=Art	25	det	_	prpos=Da|uppos=D
25	coustume	coutume	NOUN	_	Number=Sing	19	obl	_	prpos=Nc|uppos=NCS
26	de	de	ADP	_	_	27	case	_	prpos=S|uppos=P
27	Normendie	Normandie	PROPN	_	Number=Sing	25	nmod	_	prpos=Np|SpaceAfter=No|uppos=NPRS
28	,	,	PUNCT	_	_	8	punct	_	join=left|prpos=Fw|uppos=PON
29	et	et	CCONJ	_	_	38	cc	_	prpos=Cc|uppos=CONJO
30	brief	bref	NOUN	_	Number=Sing	38	nsubj	_	prpos=Nc|uppos=NCS
31	de	de	ADP	_	_	33	case	_	prpos=S|uppos=P
32	haute	haut	ADJ	_	_	33	amod	_	prpos=Ag|uppos=ADJ
33	establie	établie	NOUN	_	Number=Sing	30	nmod	_	prpos=Nc|uppos=NCS
34	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	38	cop	_	prpos=Vuc|uppos=EJ
35	la	le	DET	_	Definite=Def|PronType=Art	38	det	_	prpos=Da|uppos=D
36	plus	plus	ADV	_	_	37	advmod	_	prpos=Rg|uppos=ADV
37	forte	fort	ADJ	_	_	38	amod	_	prpos=Ag|uppos=ADJ
38	loy	loi	NOUN	_	Number=Sing	8	conj	_	prpos=Nc|uppos=NCS
39	qui	qui	PRON	_	PronType=Rel	40	nsubj	_	prpos=Pr|uppos=WPRO
40	queure	courir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	38	acl:relcl	_	prpos=Vvc|SpaceAfter=No|uppos=VJ
41	,	,	PUNCT	_	_	8	punct	_	join=left|prpos=Fw|uppos=PON
42	et	et	CCONJ	_	_	44	cc	_	prpos=Cc|uppos=CONJO
43	je	je	PRON	_	PronType=Prs	44	nsubj	_	prpos=Pp|uppos=PRO
44	porte	porter	VERB	_	Number=Sing|Person=1|VerbForm=Fin	8	conj	_	prpos=Vvc|uppos=VJ
45	le	le	DET	_	Definite=Def|PronType=Art	46	det	_	prpos=Da|uppos=D
46	brief	bref	NOUN	_	Number=Sing	44	obj	_	prpos=Nc|uppos=NCS
47	vers	vers	ADP	_	_	48	case	_	prpos=S|uppos=P
48	moi	je	PRON	_	PronType=Prs	44	obl	_	prpos=Pp|uppos=PRO
49	qui	qui	PRON	_	PronType=Rel	52	nsubj	_	prpos=Pr|uppos=WPRO
50	sui	être	AUX	_	Number=Sing|Person=1|VerbForm=Fin	52	aux:pass	_	prpos=Vuc|uppos=EJ
51	tout	tout	ADV	_	_	52	advmod	_	prpos=Rg|uppos=ADV
52	seisi	saisir	VERB	_	Tense=Past|VerbForm=Part	48	acl:relcl	_	prpos=Ge|SpaceAfter=No|uppos=VPP
53	;	;	PUNCT	_	_	2	punct	_	join=left|prpos=Fw|uppos=PON

~~~


