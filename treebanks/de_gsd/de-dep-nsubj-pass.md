---
layout: base
title:  'Statistics of nsubj:pass in UD_German'
udver: '2'
---

## Treebank Statistics: UD_German: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="de-dep-nsubj.html">nsubj</a></tt>.

3190 nodes (1%) are attached to their parents as `nsubj:pass`.

3108 instances of `nsubj:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.19811912225705.

The following 26 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (1928; 60% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (728; 23% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (353; 11% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (34; 1% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (29; 1% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (29; 1% instances), <tt><a href="de-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (15; 0% instances), <tt><a href="de-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (15; 0% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (13; 0% instances), <tt><a href="de-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (7; 0% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (6; 0% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-NUM.html">NUM</a></tt> (5; 0% instances), <tt><a href="de-pos-AUX.html">AUX</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="de-pos-ADP.html">ADP</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="de-pos-ADP.html">ADP</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="de-pos-ADP.html">ADP</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="de-pos-AUX.html">AUX</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="de-pos-AUX.html">AUX</a></tt>-<tt><a href="de-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="de-pos-PRON.html">PRON</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="de-pos-X.html">X</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	Dieses	dies	PRON	PDAT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	_
2	Video	Video	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	6	nsubj:pass	_	_
3	konnte	können	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux	_	_
4	angeblich	angeblich	ADV	ADJD	_	5	advmod	_	_
5	nicht	nicht	PART	PTKNEG	Polarity=Neg	6	advmod	_	_
6	storniert	stornieren	VERB	VVPP	VerbForm=Part	0	root	_	_
7	werden	werden	AUX	VAINF	VerbForm=Inf	6	aux:pass	_	SpaceAfter=No
8	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:pass	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	nsubj:pass	_	_
2	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
3	absolut	absolut	ADV	ADJD	_	4	advmod	_	_
4	gut	gut	ADV	ADJD	_	7	advmod	_	_
5	und	und	CCONJ	KON	_	6	cc	_	_
6	sauber	sauber	ADV	ADJD	_	4	conj	_	_
7	gearbeitet	arbeiten	VERB	VVPP	VerbForm=Part	0	root	_	_
8	von	von	ADP	APPR	_	10	case	_	_
9	den	der	DET	ART	Case=Dat|Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	Monteuren	Monteur	NOUN	NN	Case=Dat|Number=Plur	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubj:pass	color:blue
1	Birkut	Birkut	PROPN	NE	Case=Nom|Number=Sing	9	nsubj:pass	_	_
2	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	aux:pass	_	_
3	bei	bei	ADP	APPR	_	5	case	_	_
4	den	der	DET	ART	Case=Dat|Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	Arbeiterunruhen	Arbeiterunruhe	NOUN	NN	Case=Dat|Number=Plur	9	obl	_	_
6	1970	1970	NUM	CARD	NumType=Card	9	obl	_	_
7	in	in	ADP	APPR	_	8	case	_	_
8	Danzig	Danzig	PROPN	NE	_	9	obl	_	_
9	erschossen	erschießen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
10	.	.	PUNCT	$.	_	9	punct	_	_

~~~


