---
layout: base
title:  'Statistics of obl in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `obl`

This relation is universal.

3560 nodes (8%) are attached to their parents as `obl`.

2397 instances of `obl` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.09129213483146.

The following 17 pairs of parts of speech are connected with `obl`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (2158; 61% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (726; 20% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (427; 12% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (78; 2% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (62; 2% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (41; 1% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (30; 1% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (10; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (8; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (6; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 obl	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
1	et	et	CCONJ	_	_	3	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	en	en	PRON	_	PronType=Prs	3	obl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
3	partyrent	partir	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
4	il	il	PRON	_	ExtPos=ADP|PronType=Prs	9	case	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	y	y	PRON	_	PronType=Prs	4	fixed	_	gold_pos=PRON|prpos=Pp|uppos=PRO
6	a	à	ADP	_	_	4	fixed	_	gold_pos=ADP|prpos=S|uppos=P
7	viron	viron	ADV	_	_	9	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
8	ung	un	DET	_	Definite=Ind	9	det	_	gold_pos=DET|prpos=Dn|uppos=D
9	moes	mois	NOUN	_	_	3	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
10	passey	passer	VERB	_	VerbForm=Part	9	acl	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
11	.	.	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl	color:blue
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


