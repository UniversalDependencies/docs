---
layout: base
title:  'Statistics of nsubj:pass in UD_Swiss_German-UZH'
udver: '2'
---

## Treebank Statistics: UD_Swiss_German-UZH: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="gsw_uzh-dep-nsubj.html">nsubj</a></tt>.

7 nodes (0%) are attached to their parents as `nsubj:pass`.

6 instances of `nsubj:pass` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.71428571428571.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="gsw_uzh-pos-VERB.html">VERB</a></tt>-<tt><a href="gsw_uzh-pos-NOUN.html">NOUN</a></tt> (4; 57% instances), <tt><a href="gsw_uzh-pos-VERB.html">VERB</a></tt>-<tt><a href="gsw_uzh-pos-PRON.html">PRON</a></tt> (2; 29% instances), <tt><a href="gsw_uzh-pos-AUX.html">AUX</a></tt>-<tt><a href="gsw_uzh-pos-NOUN.html">NOUN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 nsubj:pass	color:blue
1	Loufend	_	ADJ	ADJD	_	5	amod	_	_
2	wärde	_	AUX	VAFIN	_	5	aux:pass	_	_
3	nöii	_	ADJ	ADJA	_	4	amod	_	_
4	Marktsegmänt	_	NOUN	NN	_	5	nsubj:pass	_	_
5	erschlosse	_	VERB	VVPP	_	0	root	_	_
6	u	_	CCONJ	KON	_	12	cc	_	_
7	erwitereti	_	ADJ	ADJD	_	8	advmod	_	_
8	kapazitiivi	_	ADJ	ADJA	_	11	amod	_	_
9	u	_	CCONJ	KON	_	10	cc	_	_
10	taktiili	_	ADJ	ADJA	_	8	conj	_	_
11	Funktioonä	_	NOUN	NN	_	12	nsubj:pass	_	_
12	entwicklet	_	VERB	VVPP	_	5	conj	_	SpaceAfter=No
13	.	_	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 nsubj:pass	color:blue
1	I	_	PRON	PPER	_	5	nsubj	_	_
2	ha	_	AUX	VAFIN	_	5	aux	_	_
3	d	_	DET	ART	_	4	det	_	_
4	Charten	_	NOUN	NN	_	5	obj	_	_
5	aagluegt	_	VERB	VVPP	_	0	root	_	SpaceAfter=No
6	,	_	PUNCT	$,	_	5	punct	_	_
7	wo	_	PRON	PRELS	_	13	nsubj:pass	_	_
8	am	_	ADP	APPRART	_	9	case	_	_
9	Chüeuschrank	_	NOUN	NN	_	13	obl	_	_
10	mit	_	ADP	APPR	_	11	case	_	_
11	Magnet	_	NOUN	NN	_	13	obl	_	_
12	si	_	AUX	VAFIN	_	13	aux	_	_
13	befeschtiget	_	VERB	VVPP	_	4	acl:relcl	_	_
14	gsi	_	AUX	VAPP	_	13	aux	_	SpaceAfter=No
15	.	_	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 nsubj:pass	color:blue
1	für	_	ADP	APPR	_	2	case	_	_
2	si	_	PRON	PPER	_	3	obl	_	_
3	wird	_	AUX	VAFIN	_	0	root	_	_
4	so	_	ADV	ADV	_	3	advmod	_	_
5	ihres	_	DET	PPOSAT	_	7	nmod:poss	_	_
6	individuelle	_	ADJ	ADJA	_	7	amod	_	_
7	Schmuckstück	_	NOUN	NN	_	3	nsubj:pass	_	_
8	zum	_	ADP	APPRART	_	9	case	_	_
9	Statement	_	NOUN	NN	_	3	obl	_	SpaceAfter=No
10	.	_	PUNCT	$.	_	3	punct	_	_

~~~


