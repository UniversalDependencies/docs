---
layout: base
title:  'Statistics of expl in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `expl`

This relation is universal.

623 nodes (1%) are attached to their parents as `expl`.

621 instances of `expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80738362760835.

The following 3 pairs of parts of speech are connected with `expl`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (599; 96% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (12; 2% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (12; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 expl	color:blue
1	Et	et	CCONJ	_	_	2	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	dit	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
3	que	que	SCONJ	_	_	11	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
4	teille	tel	DET	_	Definite=Ind	5	det	_	gold_pos=DET|prpos=Di|uppos=D
5	choze	chose	NOUN	_	_	11	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
6	jamais	jamais	ADV	_	_	11	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
7	il	il	PRON	_	PronType=Prs	11	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
8	ne	ne	ADV	_	Polarity=Neg	11	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
9	luy	il	PRON	_	PronType=Prs	11	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
10	estoet	être	AUX	_	VerbForm=Fin	11	aux	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
11	advenu	advenir	VERB	_	VerbForm=Part	2	ccomp	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
12	.	.	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl	color:blue
1	Car	car	CCONJ	CONJO	_	5	cc	_	prpos=Cc
2	il	il	PRON	PRO	PronType=Prs	5	expl	_	prpos=Pp
3	n'	ne	ADV	NEG	_	5	advmod	_	prpos=Rp
4	est	être	AUX	EJ	Number=Sing|Person=3|VerbForm=Fin	5	cop	_	join=left|prpos=Vuc
5	raisonnable	raisonnable	ADJ	ADJ	_	0	root	_	prpos=Ag
6	de	de	ADP	P	_	7	mark	_	prpos=S
7	tirer	tirer	VERB	VX	VerbForm=Inf	5	acl	_	prpos=Vvn
8	ex	ex	ADP	FW	_	9	case	_	Lang=la|prpos=Xe
9	officina	officina	NOUN	FW	_	7	obl	_	Lang=la|prpos=Xe
10	aduersarij	adversarius	NOUN	FW	_	9	nmod	_	Lang=la|prpos=Xe
11	instrumens	instrument	NOUN	NCPL	Number=Sing	7	obj	_	prpos=Nc
12	et	et	CCONJ	CONJO	_	13	cc	_	prpos=Cc|wordform=[et]
13	preuues	preuve	NOUN	NCPL	Number=Plur	11	conj	_	prpos=Nc
14	contre	contre	ADP	P	_	15	case	_	prpos=S
15	luy	il	PRON	PRO	PronType=Prs	11	nmod	_	prpos=Pp|SpaceAfter=No
16	.	.	PUNCT	PON	_	5	punct	_	join=left|prpos=Fw

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 expl	color:blue
1	Car	car	CCONJ	CONJO	_	15	cc	_	prpos=Cc
2	si	si	SCONJ	CONJS	_	6	mark	_	prpos=Cs
3	les	le	DET	D	Definite=Def|PronType=Art	4	det	_	prpos=Da
4	faicts	fait	NOUN	NCPL	Number=Plur	6	nsubj	_	prpos=Nc
5	sont	être	AUX	EJ	Number=Plur|Person=3|VerbForm=Fin	6	aux:pass	_	prpos=Vuc
6	defendus	défendre	VERB	VPP	Tense=Past|VerbForm=Part	15	advcl	_	prpos=Ge
7	et	et	CCONJ	CONJO	_	8	cc	_	prpos=Cc|wordform=[et]
8	arguez	arguer	VERB	VPP	Tense=Past|VerbForm=Part	6	conj	_	prpos=Ge
9	d'	de	ADP	P	_	10	case	_	prpos=S
10	impertinence	impertinence	NOUN	NCS	Number=Sing	8	obl	_	join=left|prpos=Nc|SpaceAfter=No
11	,	,	PUNCT	PON	_	15	punct	_	join=left|prpos=Fw
12	il	il	PRON	PRO	PronType=Prs	15	expl	_	prpos=Pp
13	n'	ne	ADV	NEG	_	15	advmod	_	prpos=Rp
14	est	être	AUX	EJ	Number=Sing|Person=3|VerbForm=Fin	15	cop	_	join=left|prpos=Vuc
15	besoin	besoin	NOUN	NCS	Number=Sing	0	root	_	prpos=Nc
16	d'	de	ADP	P	_	17	case	_	prpos=S
17	interrogatoire	interrogatoire	NOUN	NCS	Number=Sing	15	obl	_	join=left|prpos=Nc|SpaceAfter=No
18	.	.	PUNCT	PON	_	15	punct	_	join=left|prpos=Fw

~~~


