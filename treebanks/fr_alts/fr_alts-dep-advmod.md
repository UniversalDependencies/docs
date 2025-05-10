---
layout: base
title:  'Statistics of advmod in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `advmod`

This relation is universal.

1557 nodes (4%) are attached to their parents as `advmod`.

1069 instances of `advmod` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.19910083493899.

The following 14 pairs of parts of speech are connected with `advmod`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (1309; 84% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (127; 8% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (49; 3% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (41; 3% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (7; 0% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 advmod	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	et	et	CCONJ	_	_	4	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	fut	être	AUX	_	VerbForm=Fin	4	cop	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
3	tout	tout	ADV	_	_	4	advmod	_	gold_pos=ADV|prpos=Rg|uppos=Q
4	sain	sain	ADJ	_	_	0	root	_	gold_pos=ADJ|prpos=Ag|uppos=ADJ
5	et	et	CCONJ	_	_	6	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
6	guery	guérir	VERB	_	VerbForm=Part	4	conj	_	gold_pos=VERB|prpos=Ge|uppos=VPP
7	dedens	dedans	ADP	_	_	9	case	_	gold_pos=ADP|prpos=S|uppos=P
8	troys	trois	NUM	_	NumType=Card	9	nummod	_	gold_pos=NUM|prpos=Mc|uppos=ADJNUM
9	jours	jour	NOUN	_	Number=Plur	4	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCPL
10	.	.	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


