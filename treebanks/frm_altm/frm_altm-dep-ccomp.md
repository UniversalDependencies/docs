---
layout: base
title:  'Statistics of ccomp in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `ccomp`

This relation is universal.

44 nodes (1%) are attached to their parents as `ccomp`.

44 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.95454545454545.

The following 4 pairs of parts of speech are connected with `ccomp`: <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (38; 86% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt> (2; 5% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	sy	si	SCONJ	_	_	2	mark	_	gold_pos=ADV|prpos=Rg|uppos=ADV
2	nul	nul	PRON	_	PronType=Ind	5	advcl	_	gold_pos=PRON|prpos=Pi|SpaceAfter=No|uppos=PRO
3	,	,	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
4	je	je	PRON	_	PronType=Prs	5	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	croy	croire	VERB	_	Number=Sing|Person=1|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	que	que	SCONJ	_	_	9	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
7	je	je	PRON	_	PronType=Prs	9	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
8	puis	pouvoir	AUX	_	Number=Sing|Person=1|VerbForm=Fin	9	aux	_	gold_pos=AUX|prpos=Vvc|uppos=MDJ
9	tollerer	tolérer	VERB	_	VerbForm=Inf	5	ccomp	_	gold_pos=VERB|prpos=Vvn|SpaceAfter=No|uppos=VX
10	.	.	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 15 ccomp	color:blue
1	Item	item	ADV	_	_	6	advmod	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
2	,	,	PUNCT	_	_	1	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
3	il	il	PRON	_	PronType=Prs	6	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	6	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
5	dessus	dessus	ADV	_	_	6	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
6	dit	dire	VERB	_	Tense=Past|VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|uppos=VPP
7	en	en	ADP	_	_	8	case	_	gold_pos=ADP|prpos=S|uppos=P
8	substance	substance	NOUN	_	Number=Sing	6	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
9	que	que	SCONJ	_	_	15	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
10	la	le	DET	_	Definite=Def|PronType=Art	11	det	_	gold_pos=DET|prpos=Da|uppos=D
11	duchié	duché	NOUN	_	Number=Sing	15	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
12	de	de	ADP	_	_	13	case	_	gold_pos=ADP|prpos=S|uppos=P
13	Normendie	Normandie	PROPN	_	Number=Sing	11	nmod	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
14	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	15	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
15	pays	pays	NOUN	_	Number=Plur	6	ccomp	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
16	seul	seul	ADJ	_	_	15	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
17	et	et	CCONJ	_	_	18	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
18	singulier	singulier	ADJ	_	_	16	conj	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
19	tenu	tenir	VERB	_	Tense=Past|VerbForm=Part	15	acl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
20	comme	comme	SCONJ	_	_	21	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
21	empire	empire	NOUN	_	Number=Sing	19	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
22	;	;	PUNCT	_	_	6	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 ccomp	color:blue
1	Et	et	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	à	à	ADP	_	_	3	case	_	gold_pos=ADP|prpos=S|uppos=P
3	ce	ce	PRON	_	PronType=Dem	5	obl	_	gold_pos=PRON|prpos=Pd|uppos=PRO
4	fu	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	5	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
5	présent	présent	ADJ	_	_	0	root	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
6	A.	A	PROPN	_	Number=Sing	5	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
7	qui	qui	PRON	_	PronType=Rel	8	nsubj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
8	dist	dire	VERB	_	Number=Sing|Person=3|VerbForm=Fin	6	acl:relcl	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
9	ainsi	ainsi	ADV	_	_	8	advmod	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
10	:	:	PUNCT	_	_	8	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
11	c'	ce	PRON	_	PronType=Dem	13	nsubj	_	gold_pos=PRON|prpos=Pd|uppos=PRO
12	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	13	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
13	voir	voir	ADJ	_	_	8	ccomp	_	gold_pos=ADJ|prpos=Ag|SpaceAfter=No|uppos=ADJ
14	,	,	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


