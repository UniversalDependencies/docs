---
layout: base
title:  'Statistics of xcomp in UD_Swiss_German-UZH'
udver: '2'
---

## Treebank Statistics: UD_Swiss_German-UZH: Relations: `xcomp`

This relation is universal.

12 nodes (1%) are attached to their parents as `xcomp`.

12 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66666666666667.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="gsw_uzh-pos-VERB.html">VERB</a></tt>-<tt><a href="gsw_uzh-pos-VERB.html">VERB</a></tt> (8; 67% instances), <tt><a href="gsw_uzh-pos-AUX.html">AUX</a></tt>-<tt><a href="gsw_uzh-pos-VERB.html">VERB</a></tt> (2; 17% instances), <tt><a href="gsw_uzh-pos-VERB.html">VERB</a></tt>-<tt><a href="gsw_uzh-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="gsw_uzh-pos-VERB.html">VERB</a></tt>-<tt><a href="gsw_uzh-pos-ADV.html">ADV</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 xcomp	color:blue
1	Mir	_	PRON	PPER	_	3	nsubj	_	_
2	hei	_	AUX	VAFIN	_	3	aux	_	_
3	gseit	_	VERB	VVPP	_	0	root	_	SpaceAfter=No
4	,	_	PUNCT	$,	_	3	punct	_	_
5	mir	_	PRON	PPER	_	6	nsubj	_	_
6	gönge	_	VERB	VVPP	_	3	ccomp	_	_
7	jetz	_	ADV	ADV	_	6	advmod	_	_
8	go	_	PART	PTKINF	_	10	mark	_	_
9	Chuttle	_	NOUN	NN	_	10	obj	_	_
10	sueche	_	VERB	VVINF	_	6	xcomp	_	SpaceAfter=No
11	!	_	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 15 xcomp	color:blue
1	Nach	_	ADP	APPR	_	3	case	_	_
2	em	_	DET	ART	_	3	det	_	_
3	Gig	_	NOUN	NN	_	4	obl	_	_
4	si	_	AUX	VAFIN	_	0	root	_	_
5	mer	_	PRON	PPER	_	4	nsubj	_	_
6	mit	_	ADP	APPR	_	8	case	_	_
7	em	_	DET	ART	_	8	det	_	_
8	Veraastauter	_	NOUN	NN	_	4	obl	_	_
9	und	_	CCONJ	KON	_	11	cc	_	_
10	de	_	DET	ART	_	11	det	_	_
11	Techniker	_	NOUN	NN	_	8	conj	_	_
12	no	_	ADV	ADV	_	4	advmod	_	_
13	go	_	PART	PTKINF	_	15	mark	_	_
14	Znacht	_	NOUN	NN	_	15	obj	_	_
15	näh	_	VERB	VVINF	_	4	xcomp	_	SpaceAfter=No
16	.	_	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 xcomp	color:blue
1	Und	_	CCONJ	KON	_	9	advmod	_	_
2	dä	_	DET	ART	_	3	det	_	_
3	Hakan	_	PROPN	NE	_	9	nsubj	_	_
4	isch	_	AUX	VAFIN	_	9	aux	_	_
5	im	_	ADP	APPRART	_	6	case	_	_
6	Schtròòfruum	_	NOUN	NN	_	9	obl	_	_
7	vom	_	ADP	APPRART	_	8	case	_	_
8	Gägner	_	NOUN	NN	_	6	nmod	_	_
9	ghògged	_	VERB	VVPP	_	0	root	_	_
10	und	_	CCONJ	KON	_	16	cc	_	_
11	hätt	_	AUX	VAFIN	_	16	aux	_	_
12	sich	_	PRON	PRF	_	16	iobj	_	_
13	d	_	DET	ART	_	15	det	_	SpaceAfter=No
14	'	_	PUNCT	$(	_	13	punct	_	_
15	Schuä	_	NOUN	NN	_	16	obj	_	_
16	gschnüert	_	VERB	VVPP	_	9	conj	_	_
17	wiä	_	CCONJ	KOKOM	_	18	mark	_	_
18	wild	_	ADJ	ADJD	_	16	xcomp	_	SpaceAfter=No
19	!	_	PUNCT	$.	_	9	punct	_	_

~~~


