---
layout: base
title:  'Statistics of nsubj in UD_Middle_French-ALTM'
udver: '2'
---

## Treebank Statistics: UD_Middle_French-ALTM: Relations: `nsubj`

This relation is universal.

490 nodes (7%) are attached to their parents as `nsubj`.

462 instances of `nsubj` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.51224489795918.

The following 11 pairs of parts of speech are connected with `nsubj`: <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (264; 54% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (183; 37% instances), <tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (17; 3% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (8; 2% instances), <tt><a href="frm_altm-pos-VERB.html">VERB</a></tt>-<tt><a href="frm_altm-pos-PROPN.html">PROPN</a></tt> (8; 2% instances), <tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="frm_altm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="frm_altm-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="frm_altm-pos-PRON.html">PRON</a></tt>-<tt><a href="frm_altm-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="frm_altm-pos-PROPN.html">PROPN</a></tt>-<tt><a href="frm_altm-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj	color:blue
1	Toutes	tout	DET	_	ExtPos=ADV|PronType=Ind	4	advmod	_	gold_pos=PRON|prpos=Pi|uppos=PRO
2	voyes	voie	NOUN	_	Number=Plur	1	fixed	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
3	ce	ce	PRON	_	PronType=Dem	4	nsubj	_	gold_pos=PRON|prpos=Pd|uppos=PRO
4	fault	faillir	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=VJ|uppos=Vvc
5	en	en	ADP	_	_	6	case	_	gold_pos=ADP|prpos=S|uppos=P
6	Normendie	Normandie	PROPN	_	_	4	obl	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
7	,	,	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nsubj	color:blue
1	et	et	CCONJ	_	_	4	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	ne	ne	ADV	_	PronType=Neg	4	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
3	se	se	PRON	_	PronType=Prs	4	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	fait	faire	VERB	_	Number=Sing|Person=3|VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
5	cestuy	cist	DET	_	PronType=Dem	6	det	_	gold_pos=DET|prpos=Dd|uppos=D
6	adjournement	adjournement	NOUN	_	Number=Sing	4	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
7	général	général	ADJ	_	_	6	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
8	fors	fors	ADV	_	_	10	case	_	gold_pos=ADV|prpos=Rg|uppos=ADV
9	en	en	ADP	_	_	10	case	_	gold_pos=ADP|prpos=S|uppos=P
10	cas	cas	NOUN	_	Number=Sing	4	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
11	de	de	ADP	_	_	12	case	_	gold_pos=ADP|prpos=S|uppos=P
12	meuble	meuble	NOUN	_	Number=Sing	10	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
13	.	.	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 nsubj	color:blue
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


