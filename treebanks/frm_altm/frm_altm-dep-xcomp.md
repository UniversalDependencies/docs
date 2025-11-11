---
layout: base
title:  'Statistics of xcomp in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `xcomp`

This relation is universal.

121 nodes (2%) are attached to their parents as `xcomp`.

121 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.90082644628099.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (108; 89% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (7; 6% instances), <tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (3; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	item	item	ADV	_	_	4	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
2	sur	sur	ADP	_	_	3	case	_	gold_pos=ADP|prpos=S|uppos=P
3	iceulx	icelui	PRON	_	PronType=Dem	4	obl	_	gold_pos=PRON|prpos=Pd|uppos=PRO
4	convient	convenir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
5	adjourner	ajourner	VERB	_	VerbForm=Inf	4	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
6	par	par	ADP	_	_	7	case	_	gold_pos=ADP|prpos=S|uppos=P
7	contrainte	contrainte	NOUN	_	Number=Sing	5	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
8	.	.	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 xcomp	color:blue
1	Et	et	CCONJ	_	_	11	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	par	par	ADP	_	_	3	case	_	gold_pos=ADP|prpos=S|uppos=P
3	vertu	vertu	NOUN	_	Number=Sing	11	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
4	d'	de	ADP	_	_	6	case	_	gold_pos=ADP|prpos=S|uppos=P
5	icellui	icelui	DET	_	PronType=Dem	6	det	_	gold_pos=DET|prpos=Dd|uppos=D
6	adjournement	ajournement	NOUN	_	Number=Sing	3	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
7	,	,	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
8	il	il	PRON	_	PronType=Prs	11	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
9	a	avoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	11	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
10	esté	être	AUX	_	Tense=Past|VerbForm=Part	11	aux:pass	_	gold_pos=AUX|prpos=Ge|uppos=EPP
11	appellé	appeler	VERB	_	Tense=Past|VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|uppos=VPP
12	à	à	ADP	_	_	16	case	_	gold_pos=ADP|prpos=S|uppos=P
13	les	le	DET	_	Definite=Def|PronType=Art	16	det	_	gold_pos=DET|prpos=Da|uppos=D
14	dittes	dit	ADJ	_	_	16	acl	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
15	prouchaines	prochain	ADJ	_	_	16	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
16	assises	assise	NOUN	_	Number=Plur	11	xcomp	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
17	et	et	CCONJ	_	_	18	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
18	derraines	derrain	ADJ	_	_	16	conj	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
19	passées	passer	VERB	_	Tense=Past|VerbForm=Part	16	acl	_	gold_pos=AUX|prpos=Ge|SpaceAfter=No|uppos=VPP
20	,	,	PUNCT	_	_	16	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
21	à	à	ADP	_	_	22	case	_	gold_pos=ADP|prpos=S|uppos=P
22	lesquelles	lequel	PRON	_	PronType=Rel	26	obl	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
23	il	il	PRON	_	PronType=Prs	26	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
24	n'	ne	ADV	_	PronType=Neg	26	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
25	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	26	aux	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
26	venu	venir	VERB	_	Tense=Past|VerbForm=Part	16	acl:relcl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
27	ne	ni	CCONJ	_	_	28	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
28	comparu	comparaître	VERB	_	Tense=Past|VerbForm=Part	26	conj	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
29	.	.	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 xcomp	color:blue
1	je	je	PRON	_	PronType=Prs	3	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
2	le	il	PRON	_	PronType=Prs	3	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
3	vy	voir	VERB	_	Number=Sing|Person=1|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
4	et	et	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
5	oy	ouïr	VERB	_	Number=Sing|Person=1|VerbForm=Fin	3	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	et	et	CCONJ	_	_	9	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
7	en	en	PRON	_	PronType=Prs	12	nmod	_	gold_pos=PRON|prpos=Pp|uppos=PRO
8	suis	être	AUX	_	Number=Sing|Person=1|VerbForm=Fin	9	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
9	prest	prêt	ADJ	_	_	3	conj	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
10	de	de	ADP	_	_	11	mark	_	gold_pos=ADP|prpos=S|uppos=P
11	faire	faire	VERB	_	VerbForm=Inf	9	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
12	serment	serment	NOUN	_	Number=Sing	11	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
13	à	à	ADP	_	_	15	case	_	gold_pos=ADP|prpos=S|uppos=P
14	l'	le	DET	_	Definite=Def|PronType=Art	15	det	_	gold_pos=DET|prpos=Da|uppos=D
15	esgard	égard	NOUN	_	Number=Sing	11	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
16	de	de	ADP	_	_	18	case	_	gold_pos=ADP|prpos=S|uppos=P
17	la	le	DET	_	Definite=Def|PronType=Art	18	det	_	gold_pos=DET|prpos=Da|uppos=D
18	cour	coeur	NOUN	_	Number=Sing	15	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
19	.	.	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


