---
layout: base
title:  'Statistics of nmod in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `nmod`

This relation is universal.

3125 nodes (5%) are attached to their parents as `nmod`.

3060 instances of `nmod` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.9216.

The following 20 pairs of parts of speech are connected with `nmod`: <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (2009; 64% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (698; 22% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (99; 3% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (81; 3% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (50; 2% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NUM.html">NUM</a></tt> (49; 2% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (28; 1% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (27; 1% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (26; 1% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (19; 1% instances), <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (18; 1% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_alts-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod	color:blue
1	et	et	CCONJ	_	_	11	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	dempuys	depuis	ADV	_	_	11	advmod	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
3	,	,	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
4	petyt	petit	NOUN	_	_	11	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
5	a	à	ADP	_	_	6	case	_	gold_pos=ADP|prpos=S|uppos=P
6	petyt	petit	NOUN	_	_	4	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
7	,	,	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
8	il	il	PRON	_	PronType=Prs	11	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
9	luy	il	PRON	_	PronType=Prs	11	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
10	est	être	AUX	_	VerbForm=Fin	11	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
11	amendey	amender	VERB	_	VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
12	.	.	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 nmod	color:blue
1	C'	ce	PRON	PRO	PronType=Dem	2	nsubj	_	prpos=Pd
2	est	être	VERB	EJ	Number=Sing|Person=3|VerbForm=Fin	0	root	_	join=left|prpos=Vuc
3	à	à	ADP	P	_	4	mark	_	prpos=S
4	dire	dire	VERB	VX	VerbForm=Inf	2	xcomp	_	prpos=Vvn
5	qu'	que	SCONJ	CONJS	_	7	mark	_	prpos=Cs
6	il	il	PRON	PRO	PronType=Prs	7	nsubj	_	join=left|prpos=Pp
7	ait	avoir	VERB	AJ	Number=Sing|Person=3|VerbForm=Fin	4	ccomp	_	prpos=Vuc
8	domicile	domicile	NOUN	NCS	Number=Sing	7	obj	_	prpos=Nc
9	à	à	ADP	P	_	11	case	_	prpos=S
10	le	le	DET	D	Definite=Def|PronType=Art	11	det	_	prpos=Da
11	pays	pays	NOUN	NCS	Number=Sing	7	obl	_	prpos=Nc
12	de	de	ADP	P	_	13	case	_	prpos=S
13	Normandie	Normandie	PROPN	NPRS	Number=Sing	11	nmod	_	prpos=Np|SpaceAfter=No
14	.	.	PUNCT	PON	_	2	punct	_	join=left|prpos=Fw

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nmod	color:blue
1	Comme	comme	ADP	CONJS	_	3	case	_	prpos=Cs
2	de	de	ADP	P	_	3	case	_	prpos=S
3	telle	tel	PRON	PRO	_	0	root	_	prpos=Pi
4	dont	dont	PRON	WPRO	PronType=Rel	7	nmod	_	prpos=Pr
5	est	être	AUX	EJ	Number=Sing|Person=3|VerbForm=Fin	6	aux:pass	_	prpos=Vuc
6	faite	faire	VERB	VPP	Tense=Past|VerbForm=Part	3	acl:relcl	_	prpos=Ge
7	mention	mention	NOUN	NCS	Number=Sing	6	nsubj	_	prpos=Nc
8	in	in	ADP	FW	_	9	case	_	Lang=la|prpos=Xe
9	l.	lex	NOUN	FW	_	6	obl	_	Lang=la|prpos=Xe
10	si	si	SCONJ	FW	_	12	mark	_	Lang=la|prpos=Xe
11	quis	quis	PRON	FW	_	12	dislocated	_	Lang=la|prpos=Xe
12	filio	filius	NOUN	FW	_	9	flat	_	Lang=la|prpos=Xe|SpaceAfter=No
13	.	.	PUNCT	PON	_	12	punct	_	join=left|prpos=Fw

~~~


