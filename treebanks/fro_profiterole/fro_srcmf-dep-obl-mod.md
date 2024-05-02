---
layout: base
title:  'Statistics of obl:mod in UD_Old_French-SRCMF'
udver: '2'
---

## Treebank Statistics: UD_Old_French-SRCMF: Relations: `obl:mod`

This relation is a language-specific subtype of <tt><a href="fro_srcmf-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="fro_srcmf-dep-obl-advmod.html">obl:advmod</a></tt>.

3 nodes (0%) are attached to their parents as `obl:mod`.

3 instances of `obl:mod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.33333333333333.

The following 3 pairs of parts of speech are connected with `obl:mod`: <tt><a href="fro_srcmf-pos-ADV.html">ADV</a></tt>-<tt><a href="fro_srcmf-pos-PRON.html">PRON</a></tt> (1; 33% instances), <tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_srcmf-pos-ADJ.html">ADJ</a></tt> (1; 33% instances), <tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_srcmf-pos-NOUN.html">NOUN</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 obl:mod	color:blue
1	ki	_	PRON	PROrel	PronType=Prs,Rel	4	nsubj	_	_
2	ceste	_	DET	DETdem	PronType=Dem	3	det	_	_
3	piere	_	NOUN	NOMcom	_	4	obj	_	_
4	portet	_	VERB	VERcjg	VerbForm=Fin	7	dislocated	_	_
5	ele	_	PRON	PROper	PronType=Prs	7	nsubj	_	_
6	li	_	PRON	PROper	PronType=Prs	7	iobj	_	_
7	valt	_	VERB	VERcjg	VerbForm=Fin	0	root	_	_
8	aultretant	_	ADV	ADVgen	_	7	advmod	_	_
9	cume	_	SCONJ	CONsub	_	12	case	_	_
10	tutes	_	DET	DETind	PronType=Ind	12	det	_	_
11	les	_	DET	DETdef	Definite=Def|PronType=Art	12	det	_	_
12	altres	_	PRON	PROind	PronType=Ind	8	obl:mod	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 obl:mod	color:blue
1	Querant	_	VERB	VERppa	Tense=Pres|VerbForm=Part	3	xcomp	_	_
2	le	_	PRON	PROper	PronType=Prs	1	obj	_	_
3	vont	_	VERB	VERcjg	VerbForm=Fin	0	root	_	_
4	destre	_	ADJ	ADJqua	_	1	obl:mod	_	_
5	et	_	CCONJ	CONcoo	_	6	cc	_	_
6	senestre	_	ADJ	ADJqua	_	4	conj	_	_
7	Par	_	ADP	PRE	_	9	case	_	_
8	les	_	DET	DETdef	Definite=Def|PronType=Art	9	det	_	_
9	ostex	_	NOUN	NOMcom	_	1	obl	_	_
10	as	_	ADP	PRE.DETdef	Definite=Def|PronType=Art	11	case:det	_	_
11	chevaliers	_	NOUN	NOMcom	_	9	nmod	_	_
12	Et	_	CCONJ	CONcoo	_	14	cc	_	_
13	par	_	ADP	PRE	_	14	case	_	_
14	haies	_	NOUN	NOMcom	_	9	conj	_	_
15	et	_	CCONJ	CONcoo	_	17	cc	_	_
16	par	_	ADP	PRE	_	17	case	_	_
17	vergiers	_	NOUN	NOMcom	_	9	conj	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:mod	color:blue
1	si	_	ADV	ADVgen	_	2	advmod	_	_
2	vit	_	VERB	VERcjg	VerbForm=Fin	0	root	_	_
3	Ne	_	ADV	ADVneg	Polarity=Neg	4	advmod	_	_
4	demora	_	VERB	VERcjg	VerbForm=Fin	2	parataxis	_	_
5	que	_	ADV	ADVgen	_	4	advmod	_	_
6	un	_	DET	DETndf	Definite=Ind|PronType=Art	7	det	_	_
7	petit	_	NOUN	ADVgen	_	4	obl:mod	_	_
8	Denoalan	_	PROPN	NOMpro	_	2	obj	_	_
9	venir	_	VERB	VERinf	VerbForm=Inf	2	xcomp	_	_
10	anblant	_	VERB	VERppa	Tense=Pres|VerbForm=Part	9	xcomp	_	_
11	O	_	ADP	PRE	_	13	case	_	_
12	deus	_	NUM	DETcar	NumType=Card	13	nummod	_	_
13	levriers	_	NOUN	NOMcom	_	9	obl	_	_
14	mervelles	_	ADV	ADVgen	_	15	advmod	_	_
15	grant	_	ADJ	ADJqua	_	13	amod	_	_

~~~


