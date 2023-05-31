---
layout: base
title:  'Statistics of obj:advmod in UD_Old_French-SRCMF'
udver: '2'
---

## Treebank Statistics: UD_Old_French-SRCMF: Relations: `obj:advmod`

This relation is a language-specific subtype of <tt><a href="fro_srcmf-dep-obj.html">obj</a></tt>.
There are also 2 other language-specific subtypes of `obj`: <tt><a href="fro_srcmf-dep-obj-advneg.html">obj:advneg</a></tt>, <tt><a href="fro_srcmf-dep-obj-obl.html">obj:obl</a></tt>.

10 nodes (0%) are attached to their parents as `obj:advmod`.

10 instances of `obj:advmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1.

The following 2 pairs of parts of speech are connected with `obj:advmod`: <tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_srcmf-pos-PRON.html">PRON</a></tt> (9; 90% instances), <tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_srcmf-pos-ADV.html">ADV</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj:advmod	color:blue
1	Nel	_	PRON	ADVneg.PROper	Polarity=Neg|PronType=Prs	2	obj:advmod	_	XmlId=w_58_05322
2	di	_	VERB	VERcjg	VerbForm=Fin	0	root	_	XmlId=w_58_05323
3	por	_	ADP	PRE	_	4	case	_	XmlId=w_58_05324
4	ço	_	PRON	PROdem	PronType=Dem	2	obl	_	SpaceAfter=No|XmlId=w_58_05325
5	,	_	PUNCT	PONfbl	_	2	punct	_	XmlId=w_58_05326
6	des	_	ADP	PRE.DETdef	Definite=Def|PronType=Art	7	case:det	_	XmlId=w_58_05327
7	voz	_	PRON	PROpos	Poss=Yes|PronType=Prs	10	nmod	_	XmlId=w_58_05328
8	iert	_	VERB	VERcjg	VerbForm=Fin	2	dislocated	_	XmlId=w_58_05329
9	la	_	DET	DETdef	Definite=Def|PronType=Art	10	det	_	XmlId=w_58_05330
10	martirie	_	NOUN	NOMcom	_	8	nsubj	_	SpaceAfter=No|XmlId=w_58_05331
11	.	_	PUNCT	PONfrt	_	2	punct	_	XmlId=w_58_05332

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obj:advmod	color:blue
1	Ja	_	ADV	ADVgen	_	3	advmod	_	XmlId=w_26_00557
2	nu	_	ADV	ADVneg.PROper	Polarity=Neg	3	obj:advmod	_	XmlId=w_26_00558
3	pensast	_	VERB	VERcjg	VerbForm=Fin	0	root	_	XmlId=w_26_00559
4	nul	_	DET	DETind	PronType=Ind	5	det	_	XmlId=w_26_00560
5	jor	_	NOUN	NOMcom	_	3	obl	_	XmlId=w_26_00561
6	par	_	ADP	PRE	_	7	case	_	XmlId=w_26_00562
7	lui	_	PRON	PROper	PronType=Prs	3	obl	_	XmlId=w_26_00563
8	Q'	_	SCONJ	CONsub	_	12	mark	_	SpaceAfter=No|XmlId=w_26_00564
9	en	_	ADP	PRE	_	11	case	_	XmlId=w_26_00565
10	cest	_	DET	DETdem	PronType=Dem	11	det	_	XmlId=w_26_00566
11	pensé	_	NOUN	NOMcom	_	12	obl	_	XmlId=w_26_00567
12	fuson	_	VERB	VERcjg	VerbForm=Fin	3	dislocated	_	XmlId=w_26_00568
13	andui	@card@	PRON	PROcar	NumType=Card	12	nsubj	_	SpaceAfter=No|XmlId=w_26_00569
14	.	_	PUNCT	PONfrt	_	3	punct	_	XmlId=w_26_00570

~~~


