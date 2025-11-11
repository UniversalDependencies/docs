---
layout: base
title:  'Statistics of amod in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `amod`

This relation is universal.

1121 nodes (2%) are attached to their parents as `amod`.

642 instances of `amod` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1935771632471.

The following 4 pairs of parts of speech are connected with `amod`: <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (1029; 92% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (69; 6% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (21; 2% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	Et	et	CCONJ	_	_	7	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	le	le	DET	_	Definite=Def	3	det	_	gold_pos=DET|prpos=Da|uppos=D
3	soer	soir	NOUN	_	_	7	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
4	enssuyvant	ensuivant	ADJ	_	_	3	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
5	elle	il	PRON	_	PronType=Prs	7	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
6	fut	être	AUX	_	VerbForm=Fin	7	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
7	prynse	prendre	VERB	_	VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|uppos=VPP
8	de	de	ADP	_	_	9	case	_	gold_pos=ADP|prpos=S|uppos=P
9	mal	mal	NOUN	_	_	7	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
10	,	,	PUNCT	_	_	7	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 amod	color:blue
1	Et	et	CCONJ	_	_	2	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	disoet	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
3	ledit	ledit	DET	_	Definite=Ind	4	det	_	gold_pos=DET|prpos=Di|uppos=D
4	Flocell	Flocel	PROPN	_	Number=Plur	2	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
5	que	que	SCONJ	_	_	8	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
6	il	il	PRON	_	PronType=Prs	8	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
7	avoet	avoir	AUX	_	VerbForm=Fin	8	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
8	achapté	acheter	VERB	_	VerbForm=Part	2	ccomp	_	gold_pos=VERB|prpos=Ge|uppos=VPP
9	lesditez	ledit	DET	_	Definite=Ind	10	det	_	gold_pos=DET|prpos=Di|uppos=D
10	dentz	dent	NOUN	_	Number=Plur	8	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
11	de	de	ADP	_	_	12	case	_	gold_pos=ADP|prpos=S|uppos=P
12	Thomas	Thomas	PROPN	_	Number=Plur	8	obl	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
13	de	de	PROPN	_	Number=Plur	12	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
14	Puteron	Puteron	PROPN	_	Number=Plur	12	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
15	le	le	DET	_	Definite=Def	16	det	_	gold_pos=DET|prpos=Da|uppos=D
16	jeune	jeune	ADJ	_	_	12	amod	_	gold_pos=ADJ|prpos=Ag|SpaceAfter=No|uppos=ADJ
17	.	.	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
1	Cest	ce	DET	D	PronType=Dem	2	det	_	prpos=Dd
2	Aduocat	avocat	NOUN	NCS	Number=Sing	10	nsubj	_	prpos=Nc
3	ny	ni	CCONJ	CONJO	_	4	cc	_	prpos=Cc
4	autre	autre	PRON	PRO	_	2	conj	_	prpos=Pi
5	quelconque	quelconque	ADJ	ADJ	_	4	amod	_	prpos=Ag
6	de	de	ADP	P	_	8	case	_	prpos=S
7	sa	son	DET	DZ	Poss=Yes	8	det	_	prpos=Ds
8	qualité	qualité	NOUN	NCS	Number=Sing	4	nmod	_	prpos=Nc
9	ne	ne	ADV	NEG	_	10	advmod	_	prpos=Rp
10	doit	devoir	VERB	MDJ	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc
11	se	se	PRON	PRO	PronType=Prs	12	expl	_	prpos=Pp
12	complaindre	complaindre	VERB	VX	VerbForm=Inf	10	xcomp	_	prpos=Vvn
13	de	de	ADP	P	_	15	case	_	prpos=S
14	tel	tel	ADJ	ADJ	_	15	amod	_	prpos=Ag
15	reglement	règlement	NOUN	NCS	Number=Sing	12	obl	_	prpos=Nc|SpaceAfter=No
16	:	:	PUNCT	PON	_	10	punct	_	join=left|prpos=Fw

~~~


