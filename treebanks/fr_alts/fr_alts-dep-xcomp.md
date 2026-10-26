---
layout: base
title:  'Statistics of xcomp in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `xcomp`

This relation is universal.

1148 nodes (2%) are attached to their parents as `xcomp`.

1136 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25522648083624.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (995; 87% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (54; 5% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (41; 4% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (27; 2% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (18; 2% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	Et	et	CCONJ	CONJO	_	5	cc	_	prpos=Cc
2	par	par	ADP	P	_	4	case	_	prpos=S
3	la	le	DET	D	Definite=Def|PronType=Art	4	det	_	prpos=Da
4	Court	cour	NOUN	NCS	Number=Sing	5	obl	_	prpos=Nc
5	dit	dire	VERB	VJ	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc
6	bien	bien	ADV	ADV	_	7	advmod	_	prpos=Rg
7	iugé	juger	VERB	VPP	Tense=Past|VerbForm=Part	5	xcomp	_	prpos=Ge|SpaceAfter=No
8	.	.	PUNCT	PON	_	5	punct	_	join=left|prpos=Fw

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


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 xcomp	color:blue
1	et	et	CCONJ	_	_	4	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	tu	tu	PRON	_	PronType=Prs	4	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
3	le	il	PRON	_	PronType=Prs	4	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	voiras	voir	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
5	encor	encore	ADV	_	_	4	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
6	ung	un	DET	_	Definite=Ind	8	det	_	gold_pos=DET|prpos=Di|uppos=D
7	viell	vieux	ADJ	_	_	8	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
8	home	homme	NOUN	_	_	4	xcomp	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
9	.	.	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP
10	»	»	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|prpos=Fs|uppos=PONFP

~~~


