---
layout: base
title:  'Statistics of nmod:appos in UD_Old_French-SRCMF'
udver: '2'
---

## Treebank Statistics: UD_Old_French-SRCMF: Relations: `nmod:appos`

This relation is a language-specific subtype of <tt><a href="fro_srcmf-dep-nmod.html">nmod</a></tt>.

3 nodes (0%) are attached to their parents as `nmod:appos`.

3 instances of `nmod:appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.66666666666667.

The following 3 pairs of parts of speech are connected with `nmod:appos`: <tt><a href="fro_srcmf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_srcmf-pos-PRON.html">PRON</a></tt> (1; 33% instances), <tt><a href="fro_srcmf-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_srcmf-pos-PRON.html">PRON</a></tt> (1; 33% instances), <tt><a href="fro_srcmf-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fro_srcmf-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:appos	color:blue
1	En	_	ADP	PRE	_	2	case	_	_
2	Rencesvals	_	PROPN	NOMpro	_	3	obl	_	_
3	guierai	_	VERB	VERcjg	VerbForm=Fin	0	root	_	_
4	ma	_	DET	DETpos	Poss=Yes	5	det	_	_
5	cumpaigne	_	NOUN	NOMcom	_	3	obj	_	_
6	.XX.	_	NUM	PROcar	NumType=Card	7	nummod	_	_
7	milie	_	PRON	PROcar	NumType=Card	5	nmod:appos	_	_
8	ad	_	ADP	PRE	_	9	case	_	_
9	escuz	_	NOUN	NOMcom	_	5	nmod	_	_
10	e	_	CCONJ	CONcoo	_	12	cc	_	_
11	a	_	ADP	PRE	_	12	case	_	_
12	lances	_	NOUN	NOMcom	_	5	conj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 nmod:appos	color:blue
1	Fors	_	ADV	ADVgen	_	3	advmod	_	_
2	del	_	ADP	PRE.DETdef	Definite=Def|PronType=Art	3	case:det	_	_
3	chastel	_	NOUN	NOMcom	_	13	obl	_	_
4	totes	_	PRON	PROind	PronType=Ind	13	nsubj	_	_
5	ensanble	_	ADV	ADVgen	_	4	advmod	_	_
6	Devant	_	ADP	PRE	_	7	case	_	_
7	lui	_	PRON	PROper	PronType=Prs	13	obl	_	_
8	.ii.	_	PRON	PROcar	NumType=Card	4	nmod:appos	_	_
9	et	_	CCONJ	CONcoo	_	10	cc:nc	_	_
10	.ii.	_	PRON	PROcar	NumType=Card	8	conj	_	_
11	s'	_	PRON	PROper	PronType=Prs	13	expl	_	_
12	an	_	ADV	PROadv	PronType=Dem	13	obl	_	_
13	issent	_	VERB	VERcjg	VerbForm=Fin	0	root	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:appos	color:blue
1	li	_	DET	DETdef	Definite=Def|PronType=Art	2	det	_	_
2	quinz	_	PRON	PROord	NumType=Ord	4	nsubj	_	_
3	aprés	_	ADV	ADVgen	_	4	advmod	_	_
4	ot	_	VERB	VERcjg	VerbForm=Fin	0	root	_	_
5	non	_	NOUN	NOMcom	_	4	obj	_	_
6	Janaans	_	PROPN	NOMpro	_	4	xcomp	_	_
7	bons	_	ADJ	ADJqua	_	8	amod	_	_
8	chevaliers	_	NOUN	NOMcom	_	6	nmod:appos	_	_
9	et	_	CCONJ	CONcoo	_	10	cc	_	_
10	loiax	_	ADJ	ADJqua	_	7	conj	_	_
11	et	_	CCONJ	CONcoo	_	12	cc	_	_
12	hardiz	_	VERB	VERppe	Tense=Past|VerbForm=Part	7	conj	_	_
13	plus	_	ADV	ADVgen	_	12	advmod	_	_
14	que	_	SCONJ	CONsub_pre	_	16	mark	_	_
15	nus	_	DET	DETind	PronType=Ind	16	det	_	_
16	hom	_	NOUN	NOMcom	_	13	nmod	_	_

~~~


