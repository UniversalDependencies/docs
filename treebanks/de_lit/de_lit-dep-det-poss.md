---
layout: base
title:  'Statistics of det:poss in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="de_lit-dep-det.html">det</a></tt>.

382 nodes (1%) are attached to their parents as `det:poss`.

381 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37696335078534.

The following 9 pairs of parts of speech are connected with `det:poss`: <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (364; 95% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (5; 1% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="de_lit-pos-X.html">X</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det:poss	color:blue
1	Er	er	PRON	PPER	_	4	nsubj	_	_
2	ist	sein	AUX	VAFIN	_	4	cop	_	_
3	der	der	DET	ART	_	4	det	_	_
4	Champagner	Champagner	NOUN	NN	_	0	root	_	_
5	seiner	sein	DET	PPOSAT	_	6	det:poss	_	_
6	Gattung	Gattung	NOUN	NN	_	4	nmod	_	SpaceAfter=No
7	.	--	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 det:poss	color:blue
1	Aber	aber	CCONJ	KON	_	10	cc	_	_
2	freilich	freilich	ADV	ADV	_	10	advmod	_	_
3	ist	sein	AUX	VAFIN	_	10	aux:pass	_	_
4	bei	bei	ADP	APPR	_	5	case	_	_
5	ihnen	ihnen	PRON	PPER	_	10	obl	_	_
6	auch	auch	ADV	ADV	_	10	advmod	_	_
7	das	der	DET	ART	_	8	det	_	_
8	meiste	meiste	PRON	PIS	_	10	nsubj	_	_
9	so	so	ADV	ADV	_	10	advmod	_	_
10	isoliert	isolieren	VERB	VVPP	_	0	root	_	_
11	und	und	CCONJ	KON	_	12	cc	_	_
12	getrennt	trennen	VERB	VVPP	_	10	conj	_	_
13	wie	wie	CCONJ	KOKOM	_	18	case	_	_
14	ihre	ihr	DET	PPOSAT	_	15	det:poss	_	_
15	Diese	dieser	PRON	PDS	_	18	det	_	_
16	und	und	CCONJ	KON	_	15	cc	_	_
17	Jene	jener	PROPN	NE	_	15	nmod	_	_
18	Welt	Welt	NOUN	NN	_	12	nmod	_	SpaceAfter=No
19	.	--	PUNCT	$.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 det:poss	color:blue
1	Wie	wie	ADV	ADV	_	2	advmod	_	_
2	bequem	bequem	ADJ	ADJD	_	0	root	_	_
3	ist	sein	AUX	VAFIN	_	2	cop	_	_
4	es	es	PRON	PPER	_	2	expl	_	_
5	doch	doch	ADV	ADV	_	10	advmod	_	_
6	daß	daß	ADJ	ADJD	_	8	det:poss	_	_
7	mythologische	mythologisch	ADJ	ADJA	_	8	amod	_	_
8	Wesen	Wesen	NOUN	NN	_	10	obl	_	_
9	allerlei	allerlei	PRON	PIS	_	10	obj	_	_
10	bedeuten	bedeuten	VERB	VVINF	_	2	csubj	_	SpaceAfter=No
11	,	--	PUNCT	$,	_	10	punct	_	_
12	was	was	ADV	PWAV	_	15	obj	_	_
13	man	man	PRON	PIS	_	15	nsubj	_	_
14	sich	sich	PRON	PRF	_	15	iobj	_	_
15	zueignen	zueignen	VERB	VVINF	_	10	advcl	_	_
16	möchte	möchten	VERB	VMFIN	_	15	aux	_	SpaceAfter=No
17	!	--	PUNCT	$.	_	2	punct	_	_

~~~


