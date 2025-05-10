---
layout: base
title:  'Statistics of acl in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_alts-dep-acl-relcl.html">acl:relcl</a></tt>.

296 nodes (1%) are attached to their parents as `acl`.

294 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (237; 80% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (36; 12% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 acl	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 acl	color:blue
1	Johan	Jehan	PROPN	_	Number=Plur	3	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
2	Piquot	Piquot	PROPN	_	Number=Plur	1	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
3	dit	dire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
4	et	et	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
5	raporte	rapporter	VERB	_	VerbForm=Fin	3	conj	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	que	que	SCONJ	_	_	15	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
7	lesditz	ledit	DET	_	Definite=Ind	8	det	_	gold_pos=DET|prpos=Di|uppos=D
8	Collas	Gallés	PROPN	_	Number=Plur	15	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRPL
9	et	et	CCONJ	_	_	10	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
10	Jehan	Jehan	PROPN	_	Number=Plur	8	conj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
11	ditz	dire	VERB	_	VerbForm=Part	8	acl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
12	le	le	PROPN	_	Number=Plur	11	obj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
13	Gallees	Gallées	PROPN	_	Number=Plur	12	flat	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
14	ont	avoir	AUX	_	VerbForm=Fin	15	aux	_	gold_pos=AUX|prpos=Vuc|uppos=AJ
15	menachy	menacer	VERB	_	VerbForm=Part	3	ccomp	_	gold_pos=VERB|prpos=Ge|uppos=VPP
16	sa	son	DET	_	_	17	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
17	fame	femme	NOUN	_	_	15	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
18	pour	pour	ADP	_	_	20	mark	_	gold_pos=ADP|prpos=S|uppos=P
19	la	il	PRON	_	PronType=Prs	20	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
20	battre	battre	VERB	_	VerbForm=Inf	15	advcl	_	gold_pos=VERB|prpos=Vvn|SpaceAfter=No|uppos=VX
21	.	.	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 acl	color:blue
1	et	et	CCONJ	_	_	3	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	y	y	PRON	_	PronType=Prs	3	obl	_	gold_pos=PRON|prpos=Pp|uppos=PRO
3	est	être	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vuc|uppos=EJ
4	touchant	touchant	ADP	_	_	6	case	_	gold_pos=ADP|prpos=S|uppos=P
5	leur	leur	DET	_	_	6	det	_	gold_pos=DET|prpos=Ds|uppos=DZ
6	comport	comport	NOUN	_	_	3	obj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
7	et	et	CCONJ	_	_	8	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
8	governe	gouverne	NOUN	_	_	6	conj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
9	,	,	PUNCT	_	_	6	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
10	et	et	CCONJ	_	_	12	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
11	de	de	ADP	_	_	12	case	_	gold_pos=ADP|prpos=S|uppos=P
12	ce	ce	PRON	_	PronType=Dem	6	conj	_	gold_pos=PRON|prpos=Pd|uppos=PRO
13	que	que	SCONJ	_	_	16	mark	_	gold_pos=SCONJ|prpos=Cs|uppos=CONJS
14	ilz	il	PRON	_	PronType=Prs	16	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
15	sont	être	AUX	_	VerbForm=Fin	16	aux:pass	_	gold_pos=AUX|prpos=Vuc|uppos=EJ
16	suspectés	suspecter	VERB	_	VerbForm=Part	12	acl	_	gold_pos=VERB|prpos=Ge|uppos=VPP
17	d'	de	ADP	_	_	19	mark	_	gold_pos=ADP|prpos=S|SpaceAfter=No|uppos=P
18	avoir	avoir	AUX	_	VerbForm=Inf	19	aux	_	gold_pos=AUX|join=left|prpos=Vun|uppos=AX
19	usé	user	VERB	_	VerbForm=Part	16	ccomp	_	gold_pos=VERB|prpos=Ge|uppos=VPP
20	de	de	ADP	_	_	21	case	_	gold_pos=ADP|prpos=S|uppos=P
21	art	art	NOUN	_	_	19	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
22	et	et	CCONJ	_	_	23	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
23	sort	sort	NOUN	_	_	21	conj	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
24	de	de	ADP	_	_	25	case	_	gold_pos=ADP|prpos=S|uppos=P
25	sorcherie	sorcerie	NOUN	_	_	21	nmod	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
26	.	.	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fs|uppos=PONFP

~~~


