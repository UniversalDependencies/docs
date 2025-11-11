---
layout: base
title:  'Statistics of parataxis in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `parataxis`

This relation is universal.

62 nodes (0%) are attached to their parents as `parataxis`.

61 instances of `parataxis` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.758064516129.

The following 7 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (26; 42% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-PRON.html">PRON</a></tt> (22; 35% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (6; 10% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (4; 6% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis	color:blue
1	«	«	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON
2	Non	non	ADV	_	Polarity=Neg	3	advmod	_	gold_pos=ADV|prpos=Rp|uppos=NEG
3	feroy	faire	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|SpaceAfter=No|uppos=VJ
4	,	,	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
5	»	»	PUNCT	_	_	3	punct	_	gold_pos=PUNCT|prpos=Fw|uppos=PON
6	se	ce	PRON	_	PronType=Prs	7	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
7	dyst	dire	VERB	_	VerbForm=Fin	3	parataxis	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
8	elle	il	PRON	_	PronType=Prs	7	nsubj	_	gold_pos=PRON|prpos=Pp|SpaceAfter=No|uppos=PRO
9	,	,	PUNCT	_	_	7	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 parataxis	color:blue
1	Et	et	CCONJ	_	_	5	cc	_	gold_pos=CCONJ|prpos=Cc|uppos=CONJO
2	sur	sur	ADP	_	_	3	case	_	gold_pos=ADP|prpos=S|uppos=P
3	ce	ce	PRON	_	PronType=Dem	5	obl	_	gold_pos=PRON|prpos=Pd|uppos=PRO
4	le	il	PRON	_	PronType=Prs	5	obj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
5	prierent	prier	VERB	_	VerbForm=Fin	0	root	_	gold_pos=VERB|prpos=Vvc|uppos=VJ
6	d'	de	ADP	_	_	8	mark	_	gold_pos=ADP|prpos=S|SpaceAfter=No|uppos=P
7	en	en	PRON	_	PronType=Prs	10	nmod	_	gold_pos=PRON|join=left|prpos=Pp|uppos=PRO
8	avoir	avoir	VERB	_	VerbForm=Inf	5	xcomp	_	gold_pos=VERB|prpos=Vun|uppos=AX
9	la	le	DET	_	Definite=Def	10	det	_	gold_pos=DET|prpos=Da|uppos=D
10	veue	vue	NOUN	_	_	8	obj	_	gold_pos=NOUN|prpos=Nc|SpaceAfter=No|uppos=NCS
11	,	,	PUNCT	_	_	8	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON
12	ce	ce	PRON	_	PronType=Dem	5	parataxis	_	gold_pos=PRON|prpos=Pd|uppos=PRO
13	que	que	PRON	_	PronType=Rel	15	obj	_	gold_pos=PRON|prpos=Pr|uppos=WPRO
14	ilz	il	PRON	_	PronType=Prs	15	nsubj	_	gold_pos=PRON|prpos=Pp|uppos=PRO
15	fyst	faire	VERB	_	VerbForm=Fin	12	acl:relcl	_	gold_pos=VERB|prpos=Vvc|SpaceAfter=No|uppos=VJ
16	,	,	PUNCT	_	_	5	punct	_	gold_pos=PUNCT|join=left|prpos=Fw|uppos=PON

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 19 parataxis	color:blue
1	Et	et	CCONJ	CONJO	_	4	cc	_	prpos=Cc
2	à	à	ADP	P	_	4	case	_	prpos=S
3	l'	le	DET	D	Definite=Def|PronType=Art	4	det	_	prpos=Da
4	heure	heure	NOUN	NCS	Number=Sing	0	root	_	join=left|prpos=Nc
5	que	que	PRON	WPRO	PronType=Rel	9	obl	_	prpos=Pr
6	la	le	DET	D	Definite=Def|PronType=Art	7	det	_	prpos=Da
7	iurisdiction	juridiction	NOUN	NCS	Number=Sing	9	nsubj	_	prpos=Nc
8	a	avoir	AUX	AJ	Number=Sing|Person=3|VerbForm=Fin	9	aux	_	prpos=Vuc
9	accoustumé	accoutumer	VERB	VPP	Tense=Past|VerbForm=Part	4	acl	_	prpos=Ge
10	de	de	ADP	P	_	11	mark	_	prpos=S
11	tenir	tenir	VERB	VX	VerbForm=Inf	9	xcomp	_	prpos=Vvn|SpaceAfter=No
12	:	:	PUNCT	PON	_	17	punct	_	join=left|prpos=Fw
13	quia	quia	SCONJ	FW	_	17	mark	_	Lang=la|prpos=Xe
14	tota	totus	ADJ	FW	_	15	amod	_	Lang=la|prpos=Xe
15	dies	dies	NOUN	FW	_	17	nsubj	_	Lang=la|prpos=Xe
16	non	non	ADV	FW	_	17	advmod	_	Lang=la|prpos=Xe
17	cedit	cedo	VERB	FW	_	11	ccomp	_	Lang=la|prpos=Xe|SpaceAfter=No
18	,	,	PUNCT	PON	_	11	punct	_	join=left|prpos=Fw
19	Bart.	Bartolus	NOUN	FW	_	11	parataxis	_	Lang=la|prpos=Xe
20	in	in	ADP	FW	_	21	case	_	Lang=la|prpos=Xe
21	l.	lex	NOUN	FW	_	19	nmod	_	Lang=la|prpos=Xe
22	contumax.	contumax	ADJ	FW	_	21	flat	_	Lang=la|prpos=Xe
23	§.	paragraphe	NOUN	FW	_	21	nmod	_	Lang=la|prpos=Xe
24	contumacia.	contumacia	NOUN	FW	_	23	flat	_	Lang=la|prpos=Xe
25	ff.	fragmentum	NOUN	FW	_	27	orphan	_	Lang=la|prpos=Xe
26	de	de	ADP	FW	_	27	case	_	Lang=la|prpos=Xe
27	iudic	iudicium	NOUN	FW	_	21	nmod	_	Lang=la|prpos=Xe|SpaceAfter=No
28	.	.	PUNCT	PON	_	4	punct	_	join=left|prpos=Fw

~~~


