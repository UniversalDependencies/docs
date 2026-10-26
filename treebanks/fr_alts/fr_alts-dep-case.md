---
layout: base
title:  'Statistics of case in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `case`

This relation is universal.

7964 nodes (12%) are attached to their parents as `case`.

7959 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66813159216474.

The following 17 pairs of parts of speech are connected with `case`: <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (5588; 70% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (1161; 15% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (710; 9% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (200; 3% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (95; 1% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (77; 1% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (53; 1% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (48; 1% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (11; 0% instances), <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (11; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	Et	et	CCONJ	_	_	2	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	pensse	penser	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
3	que	que	SCONJ	_	_	6	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
4	ladite	ledit	DET	_	Definite=Ind	5	det	_	gold_pos=DET|prpos=Di|uppos=D
5	hourque	hulque	NOUN	_	_	6	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
6	estoet	être	VERB	_	VerbForm=Fin	2	ccomp	_	gold_pos=VERB|prpos=Vuc|uppos=EJ
7	de	de	ADP	_	_	8	case	_	gold_pos=ADP|prpos=S|uppos=P
8	Hollande	Hollande	PROPN	_	Number=Plur	6	obl	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
9	.	.	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	Pour	pour	ADP	P	_	2	case	_	prpos=S
2	laquelle	lequel	PRON	WPRO	PronType=Rel	7	obl	_	prpos=Pr
3	le	le	DET	D	Definite=Def|PronType=Art	4	det	_	prpos=Da
4	plet	plet	NOUN	NCS	Number=Sing	7	nsubj	_	prpos=Nc
5	ne	ne	ADV	NEG	_	7	advmod	_	prpos=Rp
6	sera	être	AUX	EJ	Number=Sing|Person=3|VerbForm=Fin	7	aux:pass	_	prpos=Vuc
7	delayé	délayer	VERB	VPP	Tense=Past|VerbForm=Part	0	root	_	prpos=Ge|SpaceAfter=No
8	,	,	PUNCT	PON	_	7	punct	_	join=left|prpos=Fw
9	si	si	SCONJ	CONJS	_	13	mark	_	prpos=Cs
10	le	le	DET	D	Definite=Def|PronType=Art	11	det	_	prpos=Da
11	demandeur	demandeur	NOUN	NCS	Number=Sing	13	nsubj	_	prpos=Nc
12	ne	ne	ADV	NEG	_	13	advmod	_	prpos=Rp
13	veut	vouloir	VERB	MDJ	Number=Sing|Person=3|VerbForm=Fin	7	advcl	_	prpos=Vvc|SpaceAfter=No
14	.	.	PUNCT	PON	_	7	punct	_	join=left|prpos=Fw

~~~


