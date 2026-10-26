---
layout: base
title:  'Statistics of advcl in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `advcl`

This relation is universal.

1441 nodes (2%) are attached to their parents as `advcl`.

971 instances of `advcl` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.5093684941013.

The following 14 pairs of parts of speech are connected with `advcl`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (1160; 80% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (102; 7% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (60; 4% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (56; 4% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (31; 2% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 advcl	color:blue
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


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 advcl	color:blue
1	et	et	CCONJ	CONJO	_	3	cc	_	prpos=Cc|wordform=[et]
2	ne	ne	ADV	NEG	_	3	advmod	_	prpos=Rp
3	reste	rester	VERB	VJ	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc
4	qu'	que	ADV	ADV	_	6	advmod	_	prpos=Rg
5	à	à	ADP	P	_	6	mark	_	join=left|prpos=S
6	iuger	juger	VERB	VX	VerbForm=Inf	3	xcomp	_	prpos=Vvn
7	s'	si	SCONJ	CONJS	_	10	mark	_	prpos=Cs
8	ils	il	PRON	PRO	PronType=Prs	10	nsubj	_	join=left|prpos=Pp
9	sont	être	AUX	EJ	Number=Plur|Person=3|VerbForm=Fin	10	cop	_	prpos=Vuc
10	destructifs	destructif	ADJ	ADJ	_	6	advcl	_	prpos=Ag|SpaceAfter=No
11	,	,	PUNCT	PON	_	10	punct	_	join=left|prpos=Fw
12	ou	ou	CCONJ	CONJO	_	13	cc	_	prpos=Cc
13	non	non	ADV	ADV	_	10	conj	_	prpos=Rg|SpaceAfter=No
14	.	.	PUNCT	PON	_	3	punct	_	join=left|prpos=Fw

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 advcl	color:blue
1	Mais	mais	CCONJ	CONJO	_	10	cc	_	prpos=Cc
2	s'	si	SCONJ	CONJS	_	4	mark	_	prpos=Cs
3	il	il	PRON	PRO	PronType=Prs	4	nsubj	_	join=left|prpos=Pp
4	vouloit	vouloir	VERB	MDJ	Number=Sing|Person=3|VerbForm=Fin	10	advcl	_	prpos=Vvc
5	estre	être	AUX	EX	VerbForm=Inf	6	aux:pass	_	prpos=Vun
6	defendu	défendre	VERB	VPP	Tense=Past|VerbForm=Part	4	xcomp	_	prpos=Ge|SpaceAfter=No
7	,	,	PUNCT	PON	_	10	punct	_	join=left|prpos=Fw
8	il	il	PRON	PRO	PronType=Prs	10	nsubj	_	prpos=Pp
9	seroit	être	AUX	EJ	Number=Sing|Person=3|VerbForm=Fin	10	cop	_	prpos=Vuc
10	suiet	sujet	ADJ	ADJ	_	0	root	_	prpos=Ag
11	les	il	PRON	PRO	PronType=Prs	12	obj	_	prpos=Pp
12	prouuer	prouver	VERB	VX	VerbForm=Inf	10	xcomp	_	prpos=Vvn|SpaceAfter=No
13	.	.	PUNCT	PON	_	10	punct	_	join=left|prpos=Fw

~~~


