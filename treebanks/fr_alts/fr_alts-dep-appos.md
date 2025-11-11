---
layout: base
title:  'Statistics of appos in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `appos`

This relation is universal.

349 nodes (1%) are attached to their parents as `appos`.

349 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.9025787965616.

The following 12 pairs of parts of speech are connected with `appos`: <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (251; 72% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (65; 19% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (7; 2% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (6; 2% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (6; 2% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 appos	color:blue
1	et	et	CCONJ	_	_	13	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	a	à	ADP	_	_	4	case	_	gold_pos=ADP|prpos=S|uppos=P
3	l'	le	DET	_	Definite=Def	4	det	_	gold_pos=DET|prpos=Da|SpaceAfter=No|uppos=D
4	aultre	autre	PRON	_	PronType=Ind	13	obl	_	gold_pos=PRON|join=left|prpos=Pi|uppos=PRO
5	estoet	être	AUX	_	VerbForm=Fin	13	aux	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
6	Johanne	Jehanne	PROPN	_	Number=Plur	13	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
7	Bequet	Bequet	PROPN	_	Number=Plur	6	flat	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
8	,	,	PUNCT	_	_	6	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
9	sa	son	DET	_	_	10	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
10	fille	fille	NOUN	_	_	6	appos	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
11	,	,	PUNCT	_	_	10	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
12	toute	tout	ADV	_	_	13	advmod	_	gold_pos=ADV|prpos=Rg|uppos=Q
13	desgree	dégréer	VERB	_	VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
14	.	.	PUNCT	_	_	13	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	car	car	CCONJ	CONJO	_	7	cc	_	prpos=Cc
2	ce	ce	DET	D	PronType=Dem	3	det	_	prpos=Dd
3	terme	terme	NOUN	NCS	Number=Sing	7	nsubj	_	prpos=Nc|SpaceAfter=No
4	,	,	PUNCT	PON	_	5	punct	_	join=left|prpos=Fw
5	defendu	défendu	NOUN	NCS	Number=Sing	3	appos	_	prpos=Nc|SpaceAfter=No
6	,	,	PUNCT	PON	_	5	punct	_	join=left|prpos=Fw
7	emporteroit	emporter	VERB	VJ	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc
8	gain	gain	NOUN	NCS	Number=Sing	7	obj	_	prpos=Nc
9	et	et	CCONJ	CONJO	_	10	cc	_	prpos=Cc|wordform=[et]
10	effect	effet	NOUN	NCS	Number=Sing	8	conj	_	prpos=Nc
11	de	de	ADP	P	_	14	case	_	prpos=S
12	toute	tout	DET	Q	Definite=Ind	14	det	_	prpos=Di
13	la	le	DET	D	Definite=Def|PronType=Art	14	det	_	prpos=Da
14	cause	cause	NOUN	NCS	Number=Sing	8	nmod	_	prpos=Nc|SpaceAfter=No
15	.	.	PUNCT	PON	_	7	punct	_	join=left|prpos=Fw

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 appos	color:blue
1	mays	mais	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	dempuys	depuis	ADV	_	_	5	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
3	l'	il	PRON	_	PronType=Prs	5	obj	_	gold_pos=PRON|prpos=Pp|SpaceAfter=No|uppos=PRO
4	ont	avoir	AUX	_	VerbForm=Fin	5	aux	_	gold_pos=AUX|join=left|prpos=Vuc|uppos=AJ
5	nommey	nommer	VERB	_	VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|uppos=VPP
6	le	le	DET	_	Definite=Def	7	det	_	gold_pos=DET|prpos=Da|uppos=D
7	navire	navire	NOUN	_	_	5	xcomp	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
8	Corbet	Corbet	PROPN	_	Number=Plur	7	appos	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
9	.	.	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


