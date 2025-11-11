---
layout: base
title:  'Statistics of cc in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `cc`

This relation is universal.

4205 nodes (6%) are attached to their parents as `cc`.

4205 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.08632580261593.

The following 8 pairs of parts of speech are connected with `cc`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt> (2797; 67% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt> (862; 20% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt> (171; 4% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt> (139; 3% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt> (108; 3% instances), <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt> (66; 2% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt> (60; 1% instances), <tt><a href="fr_alts-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 cc	color:blue
1	Et	et	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	aprés	après	ADP	_	_	3	case	_	gold_pos=ADP|prpos=S|uppos=P
3	ce	ce	PRON	_	PronType=Dem	5	obl	_	gold_pos=PRON|prpos=Pd|uppos=PRO
4	il	il	PRON	_	PronType=Prs	5	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	aperceult	apercevoir	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	que	que	SCONJ	_	_	9	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
7	il	il	PRON	_	PronType=Prs	9	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
8	luy	il	PRON	_	PronType=Prs	9	iobj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
9	amendoet	amender	VERB	_	VerbForm=Fin	5	ccomp	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
10	et	et	CCONJ	_	_	13	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
11	a	à	ADP	_	_	13	case	_	gold_pos=ADP|prpos=S|uppos=P
12	sadite	sondit	DET	_	_	13	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
13	bruc	bru	NOUN	_	_	9	conj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
14	.	.	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 cc	color:blue
1	Iugé	juger	VERB	VPP	Tense=Past|VerbForm=Part	0	root	_	prpos=Ge
2	par	par	ADP	P	_	3	case	_	prpos=S
3	arrest	arrêt	NOUN	NCS	Number=Sing	1	obl	_	prpos=Nc
4	le	le	DET	D	Definite=Def|PronType=Art	5	det	_	prpos=Da
5	13.	treizième	ADJ	ADJNUM	NumType=Card	1	obl	_	prpos=Mc
6	de	de	ADP	P	_	7	case	_	prpos=S
7	May	mai	NOUN	NCS	Number=Sing	5	nmod	_	prpos=Nc
8	1513.	1513	NUM	NUM	NumType=Card	7	nmod	_	prpos=Mc
9	entre	entre	ADP	P	_	10	case	_	prpos=S
10	Iean	Jean	PROPN	NPRS	Number=Sing	1	obl	_	prpos=Np
11	et	et	CCONJ	CONJO	_	12	cc	_	prpos=Cc|wordform=[et]
12	Paul	Paul	PROPN	NPRS	Number=Sing	10	conj	_	prpos=Np
13	dits	dire	VERB	VPP	Tense=Past|VerbForm=Part	10	acl	_	prpos=Ge
14	Hamon	Hamon	PROPN	NPRS	Number=Sing	13	xcomp	_	prpos=Np
15	freres	frère	NOUN	NCPL	Number=Plur	14	appos	_	prpos=Nc|SpaceAfter=No
16	.	.	PUNCT	PON	_	1	punct	_	join=left|prpos=Fw

~~~


