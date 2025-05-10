---
layout: base
title:  'Statistics of obj in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `obj`

This relation is universal.

1675 nodes (4%) are attached to their parents as `obj`.

1165 instances of `obj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.36.

The following 6 pairs of parts of speech are connected with `obj`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (976; 58% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (536; 32% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (148; 9% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (11; 1% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 obj	color:blue
1	et	et	CCONJ	_	_	2	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	donnoet	donner	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
3	aprés	après	ADP	_	_	5	case	_	gold_pos=ADP|prpos=S|uppos=P
4	ladite	ledit	DET	_	Definite=Ind	5	det	_	gold_pos=DET|prpos=Di|uppos=D
5	vache	vache	NOUN	_	_	2	nsubj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
6	son	son	DET	_	_	7	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
7	layct	lait	NOUN	_	_	2	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
8	come	comme	ADP	_	_	9	case	_	gold_pos=ADP|prpos=S|uppos=CONJS
9	auparavant	auparavant	ADV	_	_	2	advmod	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
10	.	.	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obj	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obj	color:blue
1	et	et	CCONJ	_	_	11	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	ycelluy	icelui	DET	_	_	3	det	_	gold_pos=DET|prpos=Dd|uppos=D
3	Bequet	Bequet	PROPN	_	Number=Plur	11	nsubj	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
4	,	,	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
5	voyant	voir	VERB	_	_	11	advcl	_	gold_pos=VERB|prpos=Ga|uppos=VG
6	ledit	ledit	DET	_	Definite=Ind	7	det	_	gold_pos=DET|prpos=Di|uppos=D
7	Mangeur	Mangeur	PROPN	_	Number=Plur	5	obj	_	gold_pos=PROPN|prpos=Np|SpaceAfter=No|uppos=NPRS
8	,	,	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
9	s'	se	PRON	_	PronType=Prs	11	expl	_	gold_pos=PRON|prpos=Pp|SpaceAfter=No|uppos=PRO
10	en	en	PRON	_	PronType=Prs	11	obl	_	gold_pos=PRON|join=left|prpos=Pp|uppos=PRO
11	alla	aller	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
12	traverssant	traverser	VERB	_	_	11	advcl	_	gold_pos=VERB|prpos=Ga|uppos=VG
13	les	le	DET	_	Definite=Def	14	det	_	gold_pos=DET|prpos=Da|uppos=D
14	fosseis	fossé	NOUN	_	Number=Plur	12	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCPL
15	.	.	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


