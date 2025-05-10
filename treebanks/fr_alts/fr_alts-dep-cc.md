---
layout: base
title:  'Statistics of cc in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `cc`

This relation is universal.

2882 nodes (7%) are attached to their parents as `cc`.

2882 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.7824427480916.

The following 7 pairs of parts of speech are connected with `cc`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt> (2073; 72% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt> (437; 15% instances), <tt><a href="fr_alts-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt> (160; 6% instances), <tt><a href="fr_alts-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt> (86; 3% instances), <tt><a href="fr_alts-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt> (55; 2% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt> (44; 2% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-CCONJ.html">CCONJ</a></tt> (27; 1% instances).


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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
1	Et	et	CCONJ	_	_	12	cc	_	gold_pos=CCONJ|prpos=Cc|SpaceAfter=No|uppos=CONJO
2	,	,	PUNCT	_	_	1	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
3	se	ce	PRON	_	PronType=Prs	4	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
4	voyant	voir	VERB	_	_	12	advcl	_	gold_pos=VERB|prpos=Ga|SpaceAfter=No|uppos=VG
5	,	,	PUNCT	_	_	4	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
6	ledit	ledit	DET	_	Definite=Ind	7	det	_	gold_pos=DET|prpos=Di|uppos=D
7	Michiell	Michel	PROPN	_	Number=Plur	12	nsubj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
8	et	et	CCONJ	_	_	9	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
9	Tardyff	Tardif	PROPN	_	Number=Plur	7	conj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS
10	s'	se	PRON	_	PronType=Prs	12	expl	_	gold_pos=PRON|prpos=Pp|SpaceAfter=No|uppos=PRO
11	en	en	PRON	_	PronType=Prs	12	obl	_	gold_pos=PRON|join=left|prpos=Pp|uppos=PRO
12	allerent	aller	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
13	a	à	ADP	_	_	15	case	_	gold_pos=ADP|prpos=S|uppos=P|wordform=à
14	le	le	DET	_	Definite=Def	15	det	_	gold_pos=DET|prpos=Da|uppos=D
15	gallé	gallé	NOUN	_	_	12	obl	_	gold_pos=NOUN|prpos=Nc|uppos=NCS
16	pour	pour	ADP	_	_	17	mark	_	gold_pos=ADP|prpos=S|uppos=P
17	rancontrer	rencontrer	VERB	_	VerbForm=Inf	12	advcl	_	gold_pos=VERB|prpos=Vvn|uppos=VX
18	ledit	ledit	DET	_	Definite=Ind	19	det	_	gold_pos=DET|prpos=Di|uppos=D
19	Puteron	Puteron	PROPN	_	Number=Plur	17	obj	_	gold_pos=PROPN|prpos=Np|uppos=NPRS

~~~


