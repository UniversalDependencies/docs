---
layout: base
title:  'Statistics of fixed in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `fixed`

This relation is universal.

451 nodes (1%) are attached to their parents as `fixed`.

451 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.3059866962306.

The following 18 pairs of parts of speech are connected with `fixed`: <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (85; 19% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (77; 17% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (77; 17% instances), <tt><a href="fr_alts-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (41; 9% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (35; 8% instances), <tt><a href="fr_alts-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (33; 7% instances), <tt><a href="fr_alts-pos-DET.html">DET</a></tt>-<tt><a href="fr_alts-pos-DET.html">DET</a></tt> (27; 6% instances), <tt><a href="fr_alts-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (24; 5% instances), <tt><a href="fr_alts-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (13; 3% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (10; 2% instances), <tt><a href="fr_alts-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (7; 2% instances), <tt><a href="fr_alts-pos-DET.html">DET</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-SCONJ.html">SCONJ</a></tt> (6; 1% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_alts-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_alts-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 fixed	color:blue
1	et	et	CCONJ	_	_	15	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	dempuys	depuis	ADV	_	ExtPos=SCONJ	7	mark	_	gold_pos=ADV|prpos=Rg|uppos=ADV
3	qu'	que	SCONJ	_	_	2	fixed	_	gold_pos=SCONJ|prpos=Cs|SpaceAfter=No|uppos=CONJS
4	yll	il	PRON	_	PronType=Prs	7	nsubj	_	gold_pos=PRON|join=left|prpos=Pp|uppos=PRO
5	a	avoir	AUX	_	VerbForm=Fin	7	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
6	estey	être	AUX	_	VerbForm=Part	7	aux:pass	_	gold_pos=AUX|prpos=Ge|uppos=EPP
7	myns	mettre	VERB	_	VerbForm=Part	15	advcl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
8	a	à	ADP	_	_	10	case	_	gold_pos=ADP|prpos=S|uppos=P|wordform=à
9	le	le	DET	_	Definite=Def	10	det	_	gold_pos=DET|prpos=Da|uppos=D
10	Chateau	château	NOUN	_	_	7	obl	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
11	,	,	PUNCT	_	_	7	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
12	il	il	PRON	_	PronType=Prs	15	expl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
13	luy	il	PRON	_	PronType=Prs	15	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
14	est	être	AUX	_	VerbForm=Fin	15	aux	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
15	amendey	amender	VERB	_	VerbForm=Part	0	root	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
16	.	.	PUNCT	_	_	15	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 fixed	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 fixed	color:blue
1	et	et	CCONJ	_	_	2	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	dit	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
3	que	que	SCONJ	_	_	17	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
4	il	il	PRON	_	ExtPos=ADP|PronType=Prs	9	case	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	y	y	PRON	_	PronType=Prs	4	fixed	_	gold_pos=PRON|prpos=Pp|uppos=PRO
6	avoet	avoir	VERB	_	VerbForm=Fin	4	fixed	_	gold_pos=VERB|prpos=Vuc|uppos=AJ
7	bien	bien	ADV	_	_	9	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADV
8	.viii.	huit	NUM	_	NumType=Card	9	nummod	_	gold_pos=NUM|prpos=Mc|uppos=ADJNUM
9	jours	jour	NOUN	_	Number=Plur	17	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCPL
10	qu'	que	SCONJ	_	_	17	mark	_	gold_pos=SCONJ|prpos=Cs|SpaceAfter=No|uppos=CONJS
11	elle	il	PRON	_	PronType=Prs	17	nsubj	_	gold_pos=PRON|join=left|prpos=Pp|uppos=PRO
12	n'	ne	ADV	_	Polarity=Neg	17	advmod	_	gold_pos=ADV|prpos=Rp|SpaceAfter=No|uppos=NEG
13	en	en	PRON	_	PronType=Prs	17	obl	_	gold_pos=PRON|join=left|prpos=Pp|uppos=PRO
14	n'	ne	ADV	_	Polarity=Neg	17	advmod	_	gold_pos=ADV|prpos=Rp|SpaceAfter=No|uppos=NEG
15	avoet	avoir	AUX	_	VerbForm=Fin	17	aux	_	gold_pos=AUX|join=left|prpos=Vuc|uppos=AJ
16	point	point	ADV	_	_	17	advmod	_	gold_pos=ADV|prpos=Rg|uppos=ADVNEG
17	donney	donner	VERB	_	VerbForm=Part	2	ccomp	_	gold_pos=VERB|prpos=Ge|SpaceAfter=No|uppos=VPP
18	.	.	PUNCT	_	_	2	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


