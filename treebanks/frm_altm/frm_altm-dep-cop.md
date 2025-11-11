---
layout: base
title:  'Statistics of cop in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `cop`

This relation is universal.

45 nodes (1%) are attached to their parents as `cop`.

44 instances of `cop` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.62222222222222.

The following 5 pairs of parts of speech are connected with `cop`: <tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="frm_altm-pos-AUX.html">AUX</a></tt> (24; 53% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-AUX.html">AUX</a></tt> (14; 31% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-AUX.html">AUX</a></tt> (4; 9% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-AUX.html">AUX</a></tt> (2; 4% instances), <tt><a href="frm_altm-pos-ADV.html">ADV</a></tt>-<tt><a href="frm_altm-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
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


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 cop	color:blue
1	Et	et	CCONJ	_	_	7	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	aussi	aussi	ADV	_	_	7	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
3	n'	ne	ADV	_	PronType=Neg	7	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
4	est	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	7	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
5	-il	il	PRON	_	PronType=Prs	7	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
6	jà	jà	ADV	_	_	7	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
7	neccessité	nécessité	NOUN	_	Number=Sing	0	root	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
8	de	de	ADP	_	_	9	mark	_	gold_pos=ADP|prpos=S|uppos=P
9	faire	faire	VERB	_	VerbForm=Inf	7	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
10	adjournement	ajournement	NOUN	_	Number=Sing	9	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
11	à	à	ADP	_	_	12	case	_	gold_pos=ADP|prpos=S|uppos=P
12	bouche	bouche	NOUN	_	Number=Sing	10	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
13	,	,	PUNCT	_	_	7	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cop	color:blue
1	Et	et	CCONJ	_	_	13	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	se	si	SCONJ	_	_	8	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
3	en	en	ADP	_	_	4	case	_	gold_pos=ADP|prpos=S|uppos=P
4	Normendie	Normandie	PROPN	_	Number=Sing	8	nmod	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
5	mesme	même	ADJ	_	_	4	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
6	il	il	PRON	_	PronType=Prs	8	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
7	estoit	être	AUX	_	Number=Sing|Person=3|VerbForm=Fin	8	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
8	bany	bannir	VERB	_	Tense=Past|VerbForm=Part	13	advcl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
9	sans	sans	ADP	_	_	10	case	_	gold_pos=ADP|prpos=S|uppos=P
10	chevaliers	chevalier	NOUN	_	Number=Plur	8	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
11	sy	si	ADV	_	_	13	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
12	ne	ne	ADV	_	PronType=Neg	13	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
13	vauldroit	valoir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
14	le	le	DET	_	Definite=Def|PronType=Art	15	det	_	gold_pos=DET|prpos=Da|uppos=D
15	banissement	bannissement	NOUN	_	Number=Sing	13	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
16	.	.	PUNCT	_	_	13	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


