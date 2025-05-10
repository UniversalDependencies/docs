---
layout: base
title:  'Statistics of xcomp in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `xcomp`

This relation is universal.

472 nodes (1%) are attached to their parents as `xcomp`.

472 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.22881355932203.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (421; 89% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (17; 4% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (16; 3% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	il	il	PRON	_	PronType=Prs	3	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
2	te	tu	PRON	_	PronType=Prs	4	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
3	fauldera	falloir	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
4	copper	couper	VERB	_	VerbForm=Inf	3	xcomp	_	gold_pos=VERB|prpos=Vvn|uppos=VX
5	les	le	DET	_	Definite=Def	6	det	_	gold_pos=DET|prpos=Da|uppos=D
6	oreilles	oreille	NOUN	_	Number=Plur	4	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCPL
7	!	!	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|prpos=Fs|uppos=PONFP
8	»	»	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 xcomp	color:blue
1	Item	item	ADV	_	_	2	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
2	dit	dire	VERB	_	VerbForm=Inf	0	root	_	gold_pos=VERB|prpos=Vvn|uppos=VX
3	que	que	SCONJ	_	_	10	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
4	le	le	DET	_	Definite=Def	5	det	_	gold_pos=DET|prpos=Da|uppos=D
5	mestre	maître	NOUN	_	_	10	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
6	de	de	ADP	_	_	8	case	_	gold_pos=ADP|prpos=S|uppos=P
7	leur	leur	DET	_	_	8	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
8	navire	navire	NOUN	_	_	5	nmod	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
9	estoet	être	AUX	_	VerbForm=Fin	10	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
10	nommey	nommer	VERB	_	VerbForm=Part	2	ccomp	_	gold_pos=VERB|prpos=Ge|uppos=VPP
11	Foster	Foster	PROPN	_	Number=Plur	10	xcomp	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
12	et	et	CCONJ	_	_	16	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
13	que	que	SCONJ	_	_	16	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
14	il	il	PRON	_	PronType=Prs	16	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
15	fut	être	AUX	_	VerbForm=Fin	16	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
16	pryntz	prendre	VERB	_	VerbForm=Part	10	conj	_	gold_pos=VERB|prpos=Ge|uppos=VPP
17	a	à	ADP	_	_	18	case	_	gold_pos=ADP|prpos=S|uppos=P
18	Londres	Londres	PROPN	_	Number=Plur	16	obl	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
19	.	.	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
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


