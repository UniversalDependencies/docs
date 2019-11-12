---
layout: base
title:  'Statistics of orphan in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `orphan`

This relation is universal.

61 nodes (0%) are attached to their parents as `orphan`.

45 instances of `orphan` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.83606557377049.

The following 21 pairs of parts of speech are connected with `orphan`: <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (21; 34% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (5; 8% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (4; 7% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (3; 5% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-SCONJ.html">SCONJ</a></tt> (3; 5% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (3; 5% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (2; 3% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-PART.html">PART</a></tt> (2; 3% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 orphan	color:blue
1	Ein	ein	DET	ART	_	2	det	_	_
2	Kommandowort	Kommandowort	NOUN	NN	_	3	nsubj	_	_
3	bewegt	bewegen	VERB	VVFIN	_	0	root	_	_
4	Armeen	Armee	NOUN	NN	_	3	obj	_	SpaceAfter=No
5	;	--	PUNCT	$,	_	7	punct	_	_
6	das	der	DET	ART	_	7	det	_	_
7	Wort	Wort	NOUN	NN	_	3	parataxis	_	_
8	Freyheit	Freyheit	NOUN	NN	_	7	appos	_	_
9	Nazionen	Nation	NOUN	NN	_	7	orphan	_	SpaceAfter=No
10	.	--	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 orphan	color:blue
1	Einer	einer	PRON	PIS	_	2	nsubj	_	_
2	hat	haben	AUX	VAFIN	_	0	root	_	_
3	mehr	mehr	DET	PIAT	_	4	det	_	_
4	Sinn	Sinn	NOUN	NN	_	2	obj	_	SpaceAfter=No
5	,	--	PUNCT	$,	_	7	punct	_	_
6	der	der	PRON	PRELS	_	7	nsubj	_	_
7	andere	anderer	PRON	PIS	_	2	parataxis	_	_
8	mehr	mehr	DET	PIAT	_	9	advmod	_	_
9	Verstand	Verstand	NOUN	NN	_	7	orphan	_	_
10	für	für	ADP	APPR	_	11	case	_	_
11	dieselbe	derselbe	DET	PDAT	_	7	orphan	_	SpaceAfter=No
12	.	--	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 29 orphan	color:blue
1	Sollte	sollen	AUX	VMFIN	_	8	aux	_	_
2	dies	dieser	PRON	PDS	_	8	nsubj	_	_
3	nicht	nicht	PART	PTKNEG	_	8	advmod	_	_
4	auch	auch	ADV	ADV	_	6	advmod	_	_
5	bei	bei	ADP	APPR	_	6	case	_	_
6	Malern	Maler	NOUN	NN	_	8	nmod	_	_
7	der	der	DET	ART	_	8	det	_	_
8	Fall	Fall	NOUN	NN	_	0	root	_	_
9	sein	sein	AUX	VAINF	_	8	cop	_	SpaceAfter=No
10	;	--	PUNCT	$.	_	11	punct	_	_
11	malt	malen	VERB	VVFIN	_	8	parataxis	_	_
12	nicht	nicht	PART	PTKNEG	_	11	advmod	_	_
13	Michelangelo	Michelangelo	PROPN	NE	_	11	nsubj	_	_
14	in	in	ADP	APPR	_	16	case	_	_
15	gewissem	gewiß	ADJ	ADJA	_	16	amod	_	_
16	Sinn	Sinn	NOUN	NN	_	11	obl	_	_
17	wie	wie	CCONJ	KOKOM	_	19	case	_	_
18	ein	ein	DET	ART	_	19	det	_	_
19	Bildhauer	Bildhauer	NOUN	NN	_	11	obl	_	SpaceAfter=No
20	,	--	PUNCT	$,	_	21	punct	_	_
21	Raffael	Raffael	PROPN	NE	_	11	conj	_	_
22	wie	wie	CCONJ	KOKOM	_	24	case	_	_
23	ein	ein	DET	ART	_	24	det	_	_
24	Architekt	Architekt	NOUN	NN	_	21	orphan	_	SpaceAfter=No
25	,	--	PUNCT	$,	_	26	punct	_	_
26	Correggio	Correggio	PROPN	NE	_	11	conj	_	_
27	wie	wie	CCONJ	KOKOM	_	29	case	_	_
28	ein	ein	DET	ART	_	29	det	_	_
29	Musiker	Musiker	NOUN	NN	_	26	orphan	_	SpaceAfter=No
30	?	--	PUNCT	$.	_	8	punct	_	_

~~~


