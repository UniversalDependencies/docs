---
layout: base
title:  'Statistics of csubj in UD_Old_French-SRCMF'
udver: '2'
---

## Treebank Statistics: UD_Old_French-SRCMF: Relations: `csubj`

This relation is universal.

256 nodes (0%) are attached to their parents as `csubj`.

179 instances of `csubj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.80078125.

The following 8 pairs of parts of speech are connected with `csubj`: <tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt> (150; 59% instances), <tt><a href="fro_srcmf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt> (44; 17% instances), <tt><a href="fro_srcmf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt> (37; 14% instances), <tt><a href="fro_srcmf-pos-ADV.html">ADV</a></tt>-<tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt> (18; 7% instances), <tt><a href="fro_srcmf-pos-PRON.html">PRON</a></tt>-<tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_srcmf-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fro_srcmf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_srcmf-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_srcmf-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	S'	_	SCONJ	CONsub	_	2	mark	_	_
2	est	_	VERB	VERcjg	VerbForm=Fin	7	advcl	_	_
3	kil	_	PRON	PROrel.PROper	_	4	nsubj:obj	_	_
4	demandet	_	VERB	VERcjg	VerbForm=Fin	2	csubj	_	_
5	ne	_	ADV	ADVneg	Polarity=Neg	7	advmod	_	_
6	l'	_	PRON	PROper	PronType=Prs	7	obj	_	_
7	estoet	_	VERB	VERcjg	VerbForm=Fin	0	root	_	_
8	enseigner	_	VERB	VERinf	VerbForm=Inf	7	xcomp	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 csubj	color:blue
1	Tant	_	ADV	ADVgen	_	3	advmod	_	_
2	ad	_	AUX	VERcjg	VerbForm=Fin	3	aux	_	_
3	erret	_	VERB	VERppe	Tense=Past|VerbForm=Part	0	root	_	_
4	nen	_	ADV	ADVgen	_	6	advmod	_	_
5	est	_	AUX	VERcjg	VerbForm=Fin	6	cop	_	_
6	dreiz	_	NOUN	NOMcom	_	1	advcl	_	_
7	que	_	SCONJ	CONsub	_	9	mark	_	_
8	plus	_	ADV	ADVgen	_	9	advmod	_	_
9	vivet	_	VERB	VERcjg	VerbForm=Fin	6	csubj	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 csubj	color:blue
1	Cunseill	_	NOUN	NOMcom	_	10	nsubj	_	_
2	d'	_	ADP	PRE	_	3	case	_	_
3	orguill	_	NOUN	NOMcom	_	1	nmod	_	_
4	n'	_	ADV	ADVneg	Polarity=Neg	6	advmod	_	_
5	est	_	AUX	VERcjg	VerbForm=Fin	6	cop	_	_
6	dreiz	_	ADJ	ADJqua	_	0	root	_	_
7	que	_	SCONJ	CONsub	_	10	mark	_	_
8	a	_	ADP	PRE	_	9	case	_	_
9	plus	_	ADV	ADVgen	_	10	advmod	_	_
10	munt	_	VERB	VERcjg	VerbForm=Fin	6	csubj	_	_

~~~


