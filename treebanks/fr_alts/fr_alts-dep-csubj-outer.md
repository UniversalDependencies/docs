---
layout: base
title:  'Statistics of csubj:outer in UD_French-ALTS'
udver: '2'
---

## Treebank Statistics: UD_French-ALTS: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="fr_alts-dep-csubj.html">csubj</a></tt>.

30 nodes (0%) are attached to their parents as `csubj:outer`.

27 instances of `csubj:outer` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.7.

The following 5 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (12; 40% instances), <tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (8; 27% instances), <tt><a href="fr_alts-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (7; 23% instances), <tt><a href="fr_alts-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_alts-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="fr_alts-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_alts-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 12 csubj:outer	color:blue
1	Et	et	CCONJ	CONJO	_	2	cc	_	prpos=Cc
2	fait-	faire	VERB	VJ	Number=Sing|Person=3|VerbForm=Fin	0	root	_	prpos=Vvc
3	l'	le	DET	D	Definite=Def|PronType=Art	4	det	_	join=left|prpos=Da
4	en	on	PRON	P	PronType=Prs	2	nsubj	_	join=left|prpos=S
5	commandement	commandement	NOUN	NCS	Number=Sing	2	obj	_	prpos=Nc|wordform=co[m]mandement
6	à	à	ADP	P	_	7	case	_	prpos=S
7	tous	tout	PRON	Q	PronType=Ind	2	obl	_	prpos=Pi|SpaceAfter=No
8	,	,	PUNCT	PON	_	2	punct	_	join=left|prpos=Fw
9	que	que	SCONJ	CONJS	_	16	mark	_	prpos=Cs
10	qui	qui	PRON	WPRO	PronType=Rel	12	nsubj	_	prpos=Pr
11	le	il	PRON	PRO	PronType=Prs	12	obj	_	prpos=Pp
12	verra	voir	VERB	VJ	Number=Sing|Person=3|VerbForm=Fin	16	csubj:outer	_	prpos=Vvc|SpaceAfter=No
13	,	,	PUNCT	PON	_	16	punct	_	join=left|prpos=Fw
14	si	si	ADV	ADV	_	16	advmod	_	prpos=Rg
15	luy	il	PRON	PRO	PronType=Prs	16	nsubj	_	prpos=Pp
16	die	dire	VERB	VJ	Number=Sing|Person=3|VerbForm=Fin	2	ccomp	_	prpos=Vvc
17	que	que	SCONJ	CONJS	_	21	mark	_	prpos=Cs
18	la	le	DET	D	Definite=Def|PronType=Art	19	det	_	prpos=Da
19	veuë	vue	NOUN	NCS	Number=Sing	21	nsubj	_	prpos=Nc
20	est	être	AUX	EJ	Number=Sing|Person=3|VerbForm=Fin	21	aux:pass	_	prpos=Vuc
21	termee	termer	VERB	VPP	Tense=Past|VerbForm=Part	16	ccomp	_	prpos=Ge
22	à	à	ADP	P	_	24	case	_	prpos=S
23	ledit	ledit	DET	P	Definite=Def|PronType=Art	24	det	_	prpos=Da
24	iour	jour	NOUN	NCS	Number=Sing	21	obl	_	prpos=Nc|SpaceAfter=No
25	.	.	PUNCT	PON	_	2	punct	_	join=left|prpos=Fw

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubj:outer	color:blue
1	Vray	vrai	ADJ	ADJ	_	0	root	_	prpos=Ag
2	est	être	AUX	EJ	Number=Sing|Person=3|VerbForm=Fin	1	cop	_	prpos=Vuc
3	qu'	que	SCONJ	CONJS	_	8	mark	_	prpos=Cs
4	aucunesfois	aucunefois	ADV	ADV	_	8	advmod	_	join=left|prpos=Rg
5	le	le	DET	D	Definite=Def|PronType=Art	6	det	_	prpos=Da
6	defaillant	défaillant	NOUN	NCS	Number=Sing	8	nsubj	_	prpos=Nc
7	est	être	AUX	EJ	Number=Sing|Person=3|VerbForm=Fin	8	aux:pass	_	prpos=Vuc
8	mis	mettre	VERB	VPP	Tense=Past|VerbForm=Part	1	csubj:outer	_	prpos=Ge
9	en	en	ADP	P	_	10	case	_	prpos=S
10	amende	amende	NOUN	NCS	Number=Sing	8	obl	_	prpos=Nc
11	par	par	ADP	P	_	14	case	_	prpos=S
12	vn	un	DET	D	Definite=Ind|PronType=Art	14	det	_	prpos=Dn
13	seul	seul	ADJ	ADJ	_	14	amod	_	prpos=Ag
14	defaut	défaut	NOUN	NCS	Number=Sing	8	obl	_	prpos=Nc|SpaceAfter=No
15	,	,	PUNCT	PON	_	8	punct	_	join=left|prpos=Fw
16	quand	quand	SCONJ	CONJS	_	25	mark	_	prpos=Cs
17	le	le	DET	D	Definite=Def|PronType=Art	18	det	_	prpos=Da
18	cas	cas	NOUN	NCS	Number=Sing	25	nsubj	_	prpos=Nc
19	de	de	ADP	P	_	20	case	_	prpos=S
20	soy	se	PRON	PRO	PronType=Prs	18	nmod	_	prpos=Pp|SpaceAfter=No
21	,	,	PUNCT	PON	_	25	punct	_	join=left|prpos=Fw
22	sans	sans	ADP	P	_	24	case	_	prpos=S
23	le	le	DET	D	Definite=Def|PronType=Art	24	det	_	prpos=Da
24	defaut	défaut	NOUN	NCS	Number=Sing	25	obl	_	prpos=Nc
25	requiert	requérir	VERB	VJ	Number=Sing|Person=3|VerbForm=Fin	8	advcl	_	prpos=Vvc
26	amende	amende	NOUN	NCS	Number=Sing	25	obj	_	prpos=Nc|SpaceAfter=No
27	:	:	PUNCT	PON	_	1	punct	_	join=left|prpos=Fw

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 csubj:outer	color:blue
1	et	et	CCONJ	CONJO	_	6	cc	_	prpos=Cc|wordform=[et]
2	n'	ne	ADV	NEG	_	6	advmod	_	prpos=Rp
3	est	être	AUX	EJ	Number=Sing|Person=3|VerbForm=Fin	6	cop	_	join=left|prpos=Vuc
4	plus	plus	ADV	ADVNEG	_	6	advmod	_	prpos=Rg
5	en	en	ADP	P	_	6	case	_	prpos=S
6	vsage	usage	NOUN	NCS	Number=Sing	0	root	_	prpos=Nc
7	que	que	SCONJ	CONJS	_	10	mark	_	prpos=Cs
8	l'	le	DET	D	Definite=Def|PronType=Art	9	det	_	prpos=Da
9	exoineur	essonieur	NOUN	NCS	Number=Sing	10	nsubj	_	join=left|prpos=Nc
10	mene	mener	VERB	VJ	Number=Sing|Person=3|VerbForm=Fin	6	csubj:outer	_	prpos=Vvc
11	un	un	DET	D	Definite=Ind|PronType=Art	12	det	_	prpos=Dn
12	tesmoin	témoin	NOUN	NCS	Number=Sing	10	obj	_	prpos=Nc
13	avec	avec	ADP	P	_	14	case	_	prpos=S
14	luy	il	PRON	PRO	PronType=Prs	10	obl	_	prpos=Pp|SpaceAfter=No
15	.	.	PUNCT	PON	_	6	punct	_	join=left|prpos=Fw

~~~


