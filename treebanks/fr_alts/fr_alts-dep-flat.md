---
layout: base
title:  'Statistics of flat in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `flat`

This relation is universal.

2377 nodes (3%) are attached to their parents as `flat`.

2377 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26167437946992.

The following 10 pairs of parts of speech are connected with `flat`: <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (2145; 90% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (92; 4% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (62; 3% instances), <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_alts-pos-NUM.html">NUM</a></tt> (56; 2% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (9; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (9; 0% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	Et	et	CCONJ	_	_	2	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	dit	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
3	que	que	SCONJ	_	_	7	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
4	Collenette	Collenette	PROPN	_	Number=Plur	7	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
5	Gascoing	Gascoing	PROPN	_	Number=Plur	4	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
6	la	il	PRON	_	PronType=Prs	7	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
7	tenoet	tenir	VERB	_	VerbForm=Fin	2	ccomp	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
8	ainsy	ainsi	ADV	_	_	7	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
9	malade	malade	ADJ	_	_	7	xcomp	_	gold_pos=ADJ|prpos=Ag|SpaceAfter=No|uppos=ADJ
10	,	,	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	et	et	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	en	en	ADP	_	_	4	case	_	gold_pos=ADP|prpos=S|uppos=P
3	la	le	DET	_	Definite=Def	4	det	_	gold_pos=DET|prpos=Da|uppos=D
4	barque	barque	NOUN	_	_	5	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
5	estoet	être	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vuc|uppos=EJ
6	cappitaine	capitaine	NOUN	_	_	5	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
7	Abseley	Apseley	PROPN	_	Number=Plur	6	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 flat	color:blue
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


