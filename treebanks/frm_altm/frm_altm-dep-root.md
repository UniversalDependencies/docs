---
layout: base
title:  'Statistics of root in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `root`

This relation is universal.

217 nodes (3%) are attached to their parents as `root`.

217 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.32718894009217.

The following 4 pairs of parts of speech are connected with `root`: -<tt><a href="frm_altm-pos-VERB.html">VERB</a></tt> (199; 92% instances), -<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (10; 5% instances), -<tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt> (6; 3% instances), -<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Commenchement	commencement	NOUN	_	Number=Sing	4	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
2	de	de	ADP	_	_	3	mark	_	gold_pos=ADP|prpos=S|uppos=P
3	plaidier	plaider	VERB	_	VerbForm=Inf	1	acl	_	gold_pos=VERB|prpos=Vvn|uppos=VX
4	est	être	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
5	semondre	semondre	VERB	_	VerbForm=Inf	4	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
6	et	et	CCONJ	_	_	7	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
7	adjourner	ajourner	VERB	_	VerbForm=Inf	5	conj	_	gold_pos=VERB|prpos=Vvn|uppos=VX
8	son	son	DET	_	Poss=Yes	9	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
9	adversaire	adversaire	NOUN	_	Number=Sing	5	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
10	.	.	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Après	après	ADV	_	_	3	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
2	de	de	ADP	_	_	3	case	_	gold_pos=ADP|prpos=S|uppos=P
3	cas	cas	NOUN	_	Number=Sing	0	root	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
4	personnieulx	personnel	ADJ	_	_	3	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
5	et	et	CCONJ	_	_	6	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
6	criminieulx	criminel	ADJ	_	_	4	conj	_	gold_pos=ADJ|prpos=Ag|SpaceAfter=No|uppos=ADJ
7	:	:	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
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


