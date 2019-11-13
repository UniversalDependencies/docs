---
layout: base
title:  'Statistics of csubj in UD_Swiss_German-UZH'
udver: '2'
---

## Treebank Statistics: UD_Swiss_German-UZH: Relations: `csubj`

This relation is universal.

3 nodes (0%) are attached to their parents as `csubj`.

3 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.6666666666667.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="gsw_uzh-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gsw_uzh-pos-VERB.html">VERB</a></tt> (1; 33% instances), <tt><a href="gsw_uzh-pos-VERB.html">VERB</a></tt>-<tt><a href="gsw_uzh-pos-AUX.html">AUX</a></tt> (1; 33% instances), <tt><a href="gsw_uzh-pos-VERB.html">VERB</a></tt>-<tt><a href="gsw_uzh-pos-VERB.html">VERB</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	Es	_	DET	ART	_	2	det	_	_
2	Wunger	_	NOUN	NN	_	0	root	_	SpaceAfter=No
3	,	_	PUNCT	$,	_	2	punct	_	_
4	dass	_	SCONJ	KOUS	_	9	mark	_	_
5	i	_	PRON	PPER	_	9	nsubj	_	_
6	nid	_	PART	PTKNEG	_	9	advmod	_	_
7	grad	_	ADV	ADV	_	9	advmod	_	_
8	ha	_	AUX	VAFIN	_	9	aux	_	_
9	aafo	_	VERB	VVPP	_	2	csubj	_	_
10	gränne	_	VERB	VVINF	_	9	xcomp	_	SpaceAfter=No
11	.	_	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 21 csubj	color:blue
1	Das	_	PRON	PDS	_	2	nsubj	_	_
2	gitt	_	VERB	VVFIN	_	0	root	_	_
3	üüs	_	PRON	PPER	_	2	iobj	_	_
4	jedäs	_	DET	PIAT	_	5	det	_	_
5	Mòl	_	NOUN	NN	_	2	obl	_	_
6	sonä	_	DET	ART	_	9	det	_	_
7	richtig	_	ADJ	ADJD	_	8	amod	_	_
8	guäts	_	ADJ	ADJA	_	9	amod	_	_
9	Gfüül	_	NOUN	NN	_	2	obl	_	SpaceAfter=No
10	,	_	PUNCT	$,	_	2	punct	_	_
11	wemmer	_	SCONJ	KOUS	_	21	mark	_	_
12	nòchärä	_	ADP	APPRART	_	14	case	_	_
13	hartä	_	ADJ	ADJA	_	14	amod	_	_
14	Wuchä	_	NOUN	NN	_	21	obl	_	_
15	z	_	ADP	APPR	_	17	case	_	SpaceAfter=No
16	'	_	PUNCT	$(	_	15	punct	_	_
17	Bärn	_	PROPN	NE	_	14	nmod	_	_
18	wider	_	ADV	ADV	_	21	advmod	_	_
19	under	_	ADP	APPR	_	20	case	_	_
20	üüs	_	PRON	PPER	_	21	obl	_	_
21	sind	_	AUX	VAFIN	_	2	csubj	_	SpaceAfter=No
22	.	_	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 23 csubj	color:blue
1	Zerscht	_	ADV	ADV	_	5	advmod	_	_
2	hends	_	AUX	VAFIN+	_	5	aux	_	_
3	am	_	ADP	APPRART	_	4	case	_	_
4	Dani	_	PROPN	NE	_	5	obl	_	_
5	gsait	_	VERB	VVPP	_	0	root	_	SpaceAfter=No
6	,	_	PUNCT	$,	_	5	punct	_	_
7	är	_	PRON	PPER	_	11	nsubj	_	_
8	söli	_	AUX	VMFIN	_	11	aux	_	_
9	dòch	_	ADV	ADV	_	11	advmod	_	_
10	Hoochdütsch	_	ADJ	ADJD	_	11	advmod	_	_
11	redä	_	VERB	VVINF	_	5	ccomp	_	SpaceAfter=No
12	,	_	PUNCT	$,	_	14	punct	_	_
13	das	_	PRON	PDS	_	14	nsubj	_	_
14	gängi	_	VERB	VVFIN	_	11	conj	_	_
15	denn	_	ADV	ADV	_	14	advmod	_	_
16	grad	_	ADV	ADV	_	17	advmod	_	_
17	gaar	_	ADV	ADV	_	18	advmod	_	_
18	nöd	_	PART	PTKNEG	_	14	advmod	_	SpaceAfter=No
19	,	_	PUNCT	$,	_	14	punct	_	_
20	wenn	_	SCONJ	KOUS	_	23	mark	_	_
21	är	_	PRON	PPER	_	23	nsubj	_	_
22	so	_	ADV	ADV	_	23	advmod	_	_
23	redi	_	VERB	VVFIN	_	14	csubj	_	SpaceAfter=No
24	,	_	PUNCT	$,	_	23	punct	_	_
25	wiäner	_	SCONJ	KOUS	_	26	mark	_	_
26	redi	_	VERB	VVFIN	_	23	advcl	_	SpaceAfter=No
27	.	_	PUNCT	$.	_	5	punct	_	_

~~~


