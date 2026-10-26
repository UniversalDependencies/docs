---
layout: base
title:  'Statistics of advcl in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `advcl`

This relation is universal.

177 nodes (2%) are attached to their parents as `advcl`.

95 instances of `advcl` (54%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.0508474576271.

The following 9 pairs of parts of speech are connected with `advcl`: <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (149; 84% instances), <tt><a href="frm_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (7; 4% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), <tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 advcl	color:blue
1	ou	ou	CCONJ	_	_	7	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	vel	vel	ADV	_	_	3	advmod	_	gold_pos=ADV|Lang=la|prpos=Xe|uppos=FW
3	sic	sic	ADV	_	_	7	advmod	_	gold_pos=ADV|Lang=la|prpos=Xe|SpaceAfter=No|uppos=FW
4	,	,	PUNCT	_	_	7	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
5	je	je	PRON	_	PronType=Prs	7	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
6	le	il	PRON	_	PronType=Prs	7	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
7	contraing	contraindre	VERB	_	Number=Sing|Person=1|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
8	et	et	CCONJ	_	_	9	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
9	justice	justice	NOUN	_	Number=Sing	7	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
10	pour	pour	ADP	_	_	11	mark	_	gold_pos=ADP|prpos=S|uppos=P
11	venir	venir	VERB	_	VerbForm=Inf	7	advcl	_	gold_pos=VERB|prpos=Vvn|uppos=VX
12	sauver	sauver	VERB	_	VerbForm=Inf	11	xcomp	_	gold_pos=VERB|prpos=Vvn|SpaceAfter=No|uppos=VX
13	.	.	PUNCT	_	_	7	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 19 advcl	color:blue
1	car	car	CCONJ	_	_	15	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	se	si	SCONJ	_	_	5	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
3	la	le	DET	_	Definite=Def|PronType=Art	4	det	_	gold_pos=DET|prpos=Da|uppos=D
4	partie	partie	NOUN	_	Number=Sing	5	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
5	contredisoit	contredire	VERB	_	Number=Sing|Person=3|VerbForm=Fin	15	advcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	ne	ne	ADV	_	PronType=Neg	15	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
7	peult	pouvoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	15	aux	_	gold_pos=AUX|prpos=Vvc|uppos=MDJ
8	cellui	celui	PRON	_	PronType=Dem	15	nsubj	_	gold_pos=PRON|prpos=Pd|uppos=PRO
9	pour	pour	ADP	_	_	10	case	_	gold_pos=ADP|prpos=S|uppos=P
10	qui	qui	PRON	_	PronType=Rel	13	obl	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
11	le	le	DET	_	Definite=Def|PronType=Art	12	det	_	gold_pos=DET|prpos=Da|uppos=D
12	jugement	jugement	NOUN	_	Number=Sing	13	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
13	vint	venir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	8	acl:relcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
14	plus	plus	ADV	_	_	15	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
15	gaigner	gagner	VERB	_	VerbForm=Inf	0	root	_	gold_pos=VERB|prpos=Vvn|uppos=VX
16	qu'	que	SCONJ	_	_	19	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
17	il	il	PRON	_	PronType=Prs	19	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
18	eust	avoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	19	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
19	fait	faire	VERB	_	Tense=Past|VerbForm=Part	14	advcl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
20	se	si	SCONJ	_	_	23	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
21	sa	son	DET	_	Poss=Yes	22	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
22	partie	partie	NOUN	_	Number=Sing	23	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
23	acceptoit	accepter	VERB	_	Number=Sing|Person=3|VerbForm=Fin	19	advcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
24	ou	ou	CCONJ	_	_	26	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
25	eust	avoir	AUX	_	Number=Sing|Person=3|VerbForm=Fin	26	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
26	accepte	accepter	VERB	_	Tense=Past|VerbForm=Part	23	conj	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
27	,	,	PUNCT	_	_	19	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advcl	color:blue
1	et	et	CCONJ	_	_	8	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	se	si	SCONJ	_	_	7	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
3	ilz	il	PRON	_	PronType=Prs	7	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	ne	ne	ADV	_	PronType=Neg	7	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
5	sont	être	AUX	_	Number=Plur|Person=3|VerbForm=Fin	7	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
6	assez	assez	ADV	_	_	7	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
7	fors	fort	ADJ	_	_	8	advcl	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
8	lievent	lever	VERB	_	Number=Plur|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
9	le	le	DET	_	Definite=Def|PronType=Art	10	det	_	gold_pos=DET|prpos=Da|uppos=D
10	cry	cri	NOUN	_	Number=Sing	8	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
11	de	de	ADP	_	_	12	case	_	gold_pos=ADP|prpos=S|uppos=P
12	haro	haro	NOUN	_	Number=Sing	10	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
13	sur	sur	ADP	_	_	14	case	_	gold_pos=ADP|prpos=S|uppos=P
14	luy	il	PRON	_	PronType=Prs	8	obl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
15	affin	afin	ADV	_	ExtPos=SCONJ	23	mark	_	gold_pos=ADV|prpos=Rg|uppos=ADV
16	que	que	SCONJ	_	_	15	fixed	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
17	par	par	ADP	_	_	20	case	_	gold_pos=ADP|prpos=S|uppos=P
18	plus	plus	ADV	_	_	19	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
19	grand	grand	ADJ	_	_	20	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
20	force	forcé	NOUN	_	Number=Sing	23	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
21	il	il	PRON	_	PronType=Prs	23	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
22	soit	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	23	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
23	prins	prendre	VERB	_	Tense=Past|VerbForm=Part	8	advcl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
24	et	et	CCONJ	_	_	25	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
25	admené	amener	VERB	_	Tense=Past|VerbForm=Part	23	conj	_	gold_pos=VERB|prpos=Ge|uppos=VPP
26	à	à	ADP	_	_	27	case	_	gold_pos=ADP|prpos=S|uppos=P
27	justice	justice	NOUN	_	Number=Sing	25	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
28	.	.	PUNCT	_	_	8	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


