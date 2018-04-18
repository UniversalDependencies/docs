---
layout: base
title:  'Statistics of aux:pass in UD_Old_French-SRCMF'
udver: '2'
---

## Treebank Statistics: UD_Old_French-SRCMF: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="fro_srcmf-dep-aux.html">aux</a></tt>.

441 nodes (0%) are attached to their parents as `aux:pass`.

400 instances of `aux:pass` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.63038548752834.

The following 5 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_srcmf-pos-AUX.html">AUX</a></tt> (417; 95% instances), <tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt>-<tt><a href="fro_srcmf-pos-VERB.html">VERB</a></tt> (11; 2% instances), <tt><a href="fro_srcmf-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fro_srcmf-pos-AUX.html">AUX</a></tt> (7; 2% instances), <tt><a href="fro_srcmf-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fro_srcmf-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="fro_srcmf-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fro_srcmf-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:pass	color:blue
1	En	_	ADP	PRE	_	3	case	_	_
2	la	_	DET	DETdef	Definite=Def|PronType=Art	3	det	_	_
3	citet	_	NOUN	NOMcom	_	6	obl	_	_
4	nen	_	PRON	ADVgen.PROper	_	6	advmod	_	_
5	ad	_	VERB	VERcjg	VerbForm=Fin	6	aux	_	_
6	remés	_	VERB	VERppe	Tense=Past|VerbForm=Part	0	root	_	_
7	paien	_	NOUN	NOMcom	_	6	nsubj	_	_
8	Ne	_	ADV	ADVneg	Polarity=Neg	10	advmod	_	_
9	seit	_	AUX	VERcjg	VerbForm=Fin	10	aux:pass	_	_
10	ocis	_	VERB	VERppe	Tense=Past|VerbForm=Part	7	acl	_	_
11	u	_	CCONJ	CONcoo	_	13	cc	_	_
12	devient	_	VERB	VERcjg	VerbForm=Fin	13	cop	_	_
13	chrestïen	_	NOUN	NOMcom	_	10	conj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux:pass	color:blue
1	Provez	_	VERB	VERppe	Tense=Past|VerbForm=Part	0	root	_	_
2	estes	_	VERB	VERcjg	VerbForm=Fin	1	aux:pass	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 aux:pass	color:blue
1	et	_	CCONJ	CONcoo	_	9	cc:nc	_	_
2	fu	_	AUX	VERcjg	VerbForm=Fin	9	aux:pass	_	_
3	des	_	ADP	PRE	_	4	case	_	_
4	lors	_	ADV	ADVgen	_	9	advmod	_	_
5	en	_	ADP	PRE	_	6	case	_	_
6	avant	_	ADV	ADVgen	_	9	advmod	_	_
7	apelee	_	VERB	VERppe	Tense=Past|VerbForm=Part	9	cop	_	_
8	la	_	DET	DETdef	Definite=Def|PronType=Art	9	det	_	_
9	fontainne	_	NOUN	NOMcom	_	0	root	_	_
10	Galaad	_	PROPN	NOMpro	_	9	nmod	_	_

~~~


