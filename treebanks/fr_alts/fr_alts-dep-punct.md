---
layout: base
title:  'Statistics of punct in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `punct`

This relation is universal.

3733 nodes (9%) are attached to their parents as `punct`.

3675 instances of `punct` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 15.1735869274042.

The following 11 pairs of parts of speech are connected with `punct`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PUNCT.html">PUNCT</a></tt> (2407; 64% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-PUNCT.html">PUNCT</a></tt> (679; 18% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PUNCT.html">PUNCT</a></tt> (398; 11% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-PUNCT.html">PUNCT</a></tt> (85; 2% instances), <tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fr_alts-pos-PUNCT.html">PUNCT</a></tt> (68; 2% instances), <tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_alts-pos-PUNCT.html">PUNCT</a></tt> (53; 1% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-PUNCT.html">PUNCT</a></tt> (23; 1% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-PUNCT.html">PUNCT</a></tt> (15; 0% instances), <tt><a href="fr_alts-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_alts-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="fr_alts-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_alts-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_alts-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 punct	color:blue
1	Et	et	CCONJ	_	_	4	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	aprés	après	ADV	_	_	4	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
3	il	il	PRON	_	PronType=Prs	4	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	aperceult	apercevoir	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
5	incontinent	incontinent	ADV	_	_	4	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
6	estre	être	AUX	_	VerbForm=Inf	7	cop	_	gold_pos=AUX|prpos=Vun|uppos=EX
7	sain	sain	ADJ	_	_	4	ccomp	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
8	et	et	CCONJ	_	_	9	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
9	guery	guérir	VERB	_	VerbForm=Part	7	conj	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
10	.	.	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 punct	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 punct	color:blue
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


