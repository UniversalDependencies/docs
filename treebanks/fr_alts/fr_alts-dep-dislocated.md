---
layout: base
title:  'Statistics of dislocated in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `dislocated`

This relation is universal.

41 nodes (0%) are attached to their parents as `dislocated`.

24 instances of `dislocated` (59%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.92682926829268.

The following 6 pairs of parts of speech are connected with `dislocated`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (17; 41% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (13; 32% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (8; 20% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 dislocated	color:blue
1	et	et	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	nous	nous	PRON	_	PronType=Prs	5	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
3	en	en	PRON	_	PronType=Prs	5	obl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	fuysmes	être	AUX	_	VerbForm=Fin	5	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
5	pardonnés	pardonner	VERB	_	VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|uppos=VPP
6	l'	le	DET	_	Definite=Def	7	det	_	gold_pos=DET|prpos=Da|SpaceAfter=No|uppos=D
7	ung	un	PRON	_	PronType=Ind	5	dislocated	_	gold_pos=PRON|join=left|prpos=Pi|uppos=PRO
8	a	à	ADP	_	_	10	case	_	gold_pos=ADP|prpos=S|uppos=P
9	l'	le	DET	_	Definite=Def	10	det	_	gold_pos=DET|prpos=Da|SpaceAfter=No|uppos=D
10	aultre	autre	PRON	_	PronType=Ind	7	nmod	_	gold_pos=PRON|join=left|prpos=Pi|SpaceAfter=No|uppos=PRO
11	,	,	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 dislocated	color:blue
1	et	et	CCONJ	_	_	3	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	n'	ne	ADV	_	Polarity=Neg	3	advmod	_	gold_pos=ADV|prpos=Rp|SpaceAfter=No|uppos=NEG
3	aportoient	apporter	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|join=left|prpos=Vvc|uppos=VJ
4	rien	rien	PRON	_	PronType=Ind	3	obj	_	gold_pos=PRON|prpos=Pi|uppos=Q
5	que	que	ADV	_	_	9	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
6	.ii.	deux	NUM	_	NumType=Card	9	nummod	_	gold_pos=NUM|prpos=Mc|uppos=ADJNUM
7	ou	ou	CCONJ	_	_	8	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
8	.iii.	trois	NUM	_	NumType=Card	6	conj	_	gold_pos=NUM|prpos=Mc|uppos=ADJNUM
9	mynches	mynche	NOUN	_	Number=Plur	3	dislocated	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
10	de	de	ADP	_	_	11	case	_	gold_pos=ADP|prpos=S|uppos=P
11	jaon	jonc	NOUN	_	_	9	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
12	.	.	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 15 dislocated	color:blue
1	Collas	Collas	PROPN	_	Number=Plur	3	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
2	Jehan	Jehan	PROPN	_	Number=Plur	1	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
3	dit	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
4	et	et	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
5	raporte	rapporter	VERB	_	VerbForm=Fin	3	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	que	que	SCONJ	_	_	11	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
7	ung	un	DET	_	Definite=Ind	8	det	_	gold_pos=DET|prpos=Dn|uppos=D
8	jour	jour	NOUN	_	_	11	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
9	passé	passé	ADJ	_	_	8	amod	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
10	il	il	PRON	_	PronType=Prs	11	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
11	communiquoent	communiquer	VERB	_	VerbForm=Fin	3	ccomp	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
12	enssemble	ensemble	ADV	_	_	11	advmod	_	gold_pos=ADV|prpos=Rg|SpaceAfter=No|uppos=ADV
13	,	,	PUNCT	_	_	11	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
14	ledit	ledit	DET	_	Definite=Ind	15	det	_	gold_pos=DET|prpos=Di|uppos=D
15	Hardy	Hardy	PROPN	_	Number=Plur	11	dislocated	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
16	et	et	CCONJ	_	_	17	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
17	luy	il	PRON	_	PronType=Prs	15	conj	_	gold_pos=PRON|prpos=Pp|SpaceAfter=No|uppos=PRO
18	,	,	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


