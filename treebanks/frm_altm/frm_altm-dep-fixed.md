---
layout: base
title:  'Statistics of fixed in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `fixed`

This relation is universal.

75 nodes (1%) are attached to their parents as `fixed`.

75 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.30666666666667.

The following 16 pairs of parts of speech are connected with `fixed`: <tt><a href="frm_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="frm_altm-pos-SCONJ.html">SCONJ</a></tt> (13; 17% instances), <tt><a href="frm_altm-pos-ADP.html">ADP</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (10; 13% instances), <tt><a href="frm_altm-pos-ADP.html">ADP</a></tt>-<tt><a href="frm_altm-pos-SCONJ.html">SCONJ</a></tt> (8; 11% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (7; 9% instances), <tt><a href="frm_altm-pos-ADP.html">ADP</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (6; 8% instances), <tt><a href="frm_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (6; 8% instances), <tt><a href="frm_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="frm_altm-pos-ADP.html">ADP</a></tt> (5; 7% instances), <tt><a href="frm_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="frm_altm-pos-ADV.html">ADV</a></tt> (4; 5% instances), <tt><a href="frm_altm-pos-DET.html">DET</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="frm_altm-pos-ADP.html">ADP</a></tt>-<tt><a href="frm_altm-pos-ADP.html">ADP</a></tt> (3; 4% instances), <tt><a href="frm_altm-pos-ADP.html">ADP</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-SCONJ.html">SCONJ</a></tt> (2; 3% instances), <tt><a href="frm_altm-pos-ADP.html">ADP</a></tt>-<tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 fixed	color:blue
1	Et	et	CCONJ	_	_	27	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	supposé	supposer	ADV	_	ExtPos=SCONJ	9	mark	_	gold_pos=ADV|prpos=Rg|uppos=ADV
3	que	que	SCONJ	_	_	2	fixed	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
4	cellui	celui	PRON	_	PronType=Dem	9	nsubj	_	gold_pos=PRON|prpos=Pd|uppos=PRO
5	qui	qui	PRON	_	PronType=Rel	7	nsubj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
6	se	se	PRON	_	PronType=Prs	7	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
7	fait	faire	VERB	_	Number=Sing|Person=3|VerbForm=Fin	4	acl:relcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
8	respiter	répiter	VERB	_	VerbForm=Inf	7	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
9	soit	être	VERB	_	Number=Sing|Person=3|VerbForm=Fin	27	advcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
10	en	en	ADP	_	_	12	case	_	gold_pos=ADP|prpos=S|uppos=P
11	la	le	DET	_	Definite=Def|PronType=Art	12	det	_	gold_pos=DET|prpos=Da|uppos=D
12	ville	ville	NOUN	_	Number=Sing	9	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
13	,	,	PUNCT	_	_	9	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
14	mais	mais	CCONJ	_	_	17	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
15	qu'	que	SCONJ	_	_	17	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
16	il	il	PRON	_	PronType=Prs	17	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
17	soit	être	VERB	_	Number=Sing|Person=3|VerbForm=Fin	9	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
18	hors	hors	ADV	_	ExtPos=ADP	21	case	_	gold_pos=ADV|prpos=Rg|uppos=ADV
19	de	de	ADP	_	_	21	case	_	gold_pos=ADP|prpos=S|uppos=P
20	le	le	DET	_	Definite=Def|PronType=Art	21	det	_	gold_pos=DET|prpos=Da|uppos=D
21	prétoire	prétoire	NOUN	_	Number=Sing	17	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
22	de	de	ADP	_	_	24	case	_	gold_pos=ADP|prpos=S|uppos=P
23	la	le	DET	_	Definite=Def|PronType=Art	24	det	_	gold_pos=DET|prpos=Da|uppos=D
24	Cohue	Cohue	PROPN	_	Number=Sing	21	nmod	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
25	,	,	PUNCT	_	_	9	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
26	si	si	ADV	_	_	27	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
27	vault	valoir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
28	le	le	DET	_	Definite=Def|PronType=Art	29	det	_	gold_pos=DET|prpos=Da|uppos=D
29	respit	répit	NOUN	_	Number=Sing	27	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
30	.	.	PUNCT	_	_	27	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 fixed	color:blue
1	Laquelle	lequel	DET	_	PronType=Rel	2	det	_	gold_pos=DET|prpos=Dr|uppos=WD
2	chose	chose	NOUN	_	Number=Sing	5	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
3	lui	il	PRON	_	PronType=Prs	5	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	sera	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	5	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
5	octroyée	octroyer	VERB	_	Tense=Past|VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|uppos=VPP
6	par	par	ADP	_	_	8	case	_	gold_pos=ADP|prpos=S|uppos=P
7	le	le	DET	_	Definite=Def|PronType=Art	8	det	_	gold_pos=DET|prpos=Da|uppos=D
8	juge	juge	NOUN	_	Number=Sing	5	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
9	;	;	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP
10	pour	pour	ADP	_	ExtPos=SCONJ	14	mark	_	gold_pos=ADP|prpos=S|uppos=P
11	ce	ce	PRON	_	PronType=Dem	10	fixed	_	gold_pos=PRON|prpos=Pd|uppos=PRO
12	que	que	SCONJ	_	_	10	fixed	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
13	tel	tel	PRON	_	PronType=Ind	14	obj	_	gold_pos=PRON|prpos=Pi|uppos=PRO
14	requiert	requérir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	5	advcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
15	la	le	DET	_	Definite=Def|PronType=Art	16	det	_	gold_pos=DET|prpos=Da|uppos=D
16	lay	loi	NOUN	_	Number=Sing	14	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
17	qui	qui	PRON	_	PronType=Rel	20	nsubj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
18	ne	ne	ADV	_	PronType=Neg	20	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
19	la	il	PRON	_	PronType=Prs	20	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
20	poursient	poursuir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	16	acl:relcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
21	mie	mie	ADV	_	PronType=Neg	20	advmod	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADVNEG
22	.	.	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 fixed	color:blue
1	Laquelle	lequel	DET	_	PronType=Rel	2	det	_	gold_pos=DET|prpos=Dr|uppos=WD
2	chose	chose	NOUN	_	Number=Sing	5	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
3	lui	il	PRON	_	PronType=Prs	5	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	sera	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	5	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
5	octroyée	octroyer	VERB	_	Tense=Past|VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|uppos=VPP
6	par	par	ADP	_	_	8	case	_	gold_pos=ADP|prpos=S|uppos=P
7	le	le	DET	_	Definite=Def|PronType=Art	8	det	_	gold_pos=DET|prpos=Da|uppos=D
8	juge	juge	NOUN	_	Number=Sing	5	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
9	;	;	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP
10	pour	pour	ADP	_	ExtPos=SCONJ	14	mark	_	gold_pos=ADP|prpos=S|uppos=P
11	ce	ce	PRON	_	PronType=Dem	10	fixed	_	gold_pos=PRON|prpos=Pd|uppos=PRO
12	que	que	SCONJ	_	_	10	fixed	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
13	tel	tel	PRON	_	PronType=Ind	14	obj	_	gold_pos=PRON|prpos=Pi|uppos=PRO
14	requiert	requérir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	5	advcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
15	la	le	DET	_	Definite=Def|PronType=Art	16	det	_	gold_pos=DET|prpos=Da|uppos=D
16	lay	loi	NOUN	_	Number=Sing	14	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
17	qui	qui	PRON	_	PronType=Rel	20	nsubj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
18	ne	ne	ADV	_	PronType=Neg	20	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
19	la	il	PRON	_	PronType=Prs	20	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
20	poursient	poursuir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	16	acl:relcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
21	mie	mie	ADV	_	PronType=Neg	20	advmod	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADVNEG
22	.	.	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


