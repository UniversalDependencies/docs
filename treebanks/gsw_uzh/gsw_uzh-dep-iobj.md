---
layout: base
title:  'Statistics of iobj in UD_Swiss_German-UZH'
udver: '2'
---

## Treebank Statistics: UD_Swiss_German-UZH: Relations: `iobj`

This relation is universal.

11 nodes (1%) are attached to their parents as `iobj`.

10 instances of `iobj` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.72727272727273.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="gsw_uzh-pos-VERB.html">VERB</a></tt>-<tt><a href="gsw_uzh-pos-PRON.html">PRON</a></tt> (6; 55% instances), <tt><a href="gsw_uzh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gsw_uzh-pos-PRON.html">PRON</a></tt> (2; 18% instances), <tt><a href="gsw_uzh-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gsw_uzh-pos-PROPN.html">PROPN</a></tt> (1; 9% instances), <tt><a href="gsw_uzh-pos-AUX.html">AUX</a></tt>-<tt><a href="gsw_uzh-pos-PRON.html">PRON</a></tt> (1; 9% instances), <tt><a href="gsw_uzh-pos-VERB.html">VERB</a></tt>-<tt><a href="gsw_uzh-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 iobj	color:blue
1	I	_	PRON	PPER	_	2	nsubj	_	_
2	main	_	VERB	VVFIN	_	0	root	_	SpaceAfter=No
3	,	_	PUNCT	$,	_	2	punct	_	_
4	das	_	DET	ART	_	5	det	_	_
5	Ganze	_	NOUN	NN	_	12	nsubj	_	_
6	letscht	_	ADJ	ADJA	_	7	amod	_	_
7	Wuchä	_	NOUN	NN	_	5	nmod	_	_
8	isch	_	AUX	VAFIN	_	12	aux	_	_
9	mier	_	PRON	PRF	_	12	iobj	_	_
10	scho	_	ADV	ADV	_	12	advmod	_	_
11	ächli	_	ADV	ADV	_	12	advmod	_	_
12	iigfaarä	_	VERB	VVPP	_	2	ccomp	_	SpaceAfter=No
13	.	_	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 iobj	color:blue
1	I	_	PRON	PPER	_	5	nsubj	_	_
2	ha	_	AUX	VAFIN	_	5	aux	_	_
3	ar	_	ADP	APPRART	_	4	case	_	_
4	Marie-Claire	_	PROPN	NE	_	5	obl	_	_
5	gseit	_	VERB	VVPP	_	0	root	_	SpaceAfter=No
6	,	_	PUNCT	$,	_	5	punct	_	_
7	es	_	PRON	PPER	_	11	expl	_	_
8	sig	_	AUX	VAFIN	_	11	cop	_	_
9	mer	_	PRON	PPER	_	11	iobj	_	_
10	chli	_	ADV	ADV	_	11	advmod	_	_
11	schlächt	_	ADJ	ADJD	_	5	ccomp	_	_
12	und	_	CCONJ	KON	_	17	cc	_	_
13	i	_	PRON	PPER	_	17	nsubj	_	_
14	mög	_	AUX	VMFIN	_	17	aux	_	_
15	jetz	_	ADV	ADV	_	17	advmod	_	_
16	nümm	_	PART	PTKNEG	_	17	advmod	_	_
17	liire	_	VERB	VVINF	_	11	conj	_	SpaceAfter=No
18	.	_	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 iobj	color:blue
1	Dä	_	PRON	PDS	_	7	obj	_	_
2	hends	_	AUX	VAFIN+	_	7	aux	_	_
3	mittlerwiile	_	ADV	ADV	_	7	advmod	_	_
4	z	_	ADP	APPR	_	6	case	_	SpaceAfter=No
5	'	_	PUNCT	$(	_	4	punct	_	_
6	Luzern	_	PROPN	NE	_	7	obl	_	_
7	entlòò	_	VERB	VVPP	_	0	root	_	SpaceAfter=No
8	,	_	PUNCT	$,	_	7	punct	_	_
9	will	_	SCONJ	KOUS	_	13	mark	_	_
10	är	_	PRON	PPER	_	13	nsubj	_	_
11	zvill	_	DET	PIAT	_	12	det	_	_
12	Gool	_	NOUN	NN	_	13	obj	_	_
13	gschòssä	_	VERB	VVPP	_	7	advcl	_	_
14	hätt	_	AUX	VAFIN	_	13	aux	_	_
15	und	_	CCONJ	KON	_	21	cc	_	_
16	wäg	_	ADP	APPR	_	17	case	_	_
17	dem	_	PRON	PDS	_	21	obl	_	_
18	dä	_	DET	PDAT	_	19	det	_	_
19	Luzerner	_	PROPN	NE	_	21	iobj	_	_
20	irgendwiä	_	ADV	ADV	_	21	advmod	_	_
21	unhaimlich	_	ADJ	ADJD	_	13	conj	_	_
22	wòrdän	_	AUX	VAPP	_	21	cop	_	_
23	isch	_	AUX	VAFIN	_	21	aux	_	SpaceAfter=No
24	.	_	PUNCT	$.	_	7	punct	_	_

~~~


