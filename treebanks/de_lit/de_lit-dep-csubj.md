---
layout: base
title:  'Statistics of csubj in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `csubj`

This relation is universal.

135 nodes (0%) are attached to their parents as `csubj`.

78 instances of `csubj` (58%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.74074074074074.

The following 22 pairs of parts of speech are connected with `csubj`: <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (34; 25% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (32; 24% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (31; 23% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (6; 4% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (3; 2% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-DET.html">DET</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 csubj	color:blue
1	es	es	PRON	PPER	_	5	obj	_	_
2	schlechthin	schlechthin	ADV	ADV	_	5	advmod	_	_
3	nicht	nicht	PART	PTKNEG	_	5	advmod	_	_
4	zu	zu	PART	PTKZU	_	5	mark	_	_
5	wollen	wollen	VERB	VMINF	_	8	csubj	_	SpaceAfter=No
6	,	--	PUNCT	$,	_	5	punct	_	_
7	der	der	DET	ART	_	8	det	_	_
8	Anfang	Anfang	NOUN	NN	_	0	root	_	_
9	der	der	DET	ART	_	10	det	_	_
10	Narrheit	Narrheit	NOUN	NN	_	8	nmod	_	SpaceAfter=No
11	.	--	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 5 csubj	color:blue
1	Daß	daß	SCONJ	KOUS	_	5	mark	_	_
2	er	er	PRON	PPER	_	5	nsubj	_	_
3	ihn	ihn	PRON	PPER	_	5	obj	_	_
4	aber	aber	ADV	ADV	_	5	advmod	_	_
5	äußre	äußren	VERB	VVFIN	_	11	csubj	_	_
6	und	und	CCONJ	KON	_	7	cc	_	_
7	schreibe	schreiben	VERB	VVFIN	_	5	conj	_	SpaceAfter=No
8	,	--	PUNCT	$,	_	11	punct	_	_
9	ist	sein	AUX	VAFIN	_	11	cop	_	_
10	nicht	nicht	PART	PTKNEG	_	11	advmod	_	_
11	nötig	nötig	ADJ	ADJD	_	0	root	_	SpaceAfter=No
12	.	--	PUNCT	$.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 csubj	color:blue
1	–	–	PUNCT	XY	_	11	punct	_	_
2	Wer	wer	PRON	PWS	_	3	nsubj	_	_
3	gebildet	bilden	VERB	VVPP	_	11	csubj	_	_
4	sein	sein	AUX	VAINF	_	3	aux:pass	_	_
5	will	wollen	AUX	VMFIN	_	3	aux	_	SpaceAfter=No
6	,	--	PUNCT	$,	_	3	punct	_	_
7	mag	mögen	AUX	VMFIN	_	11	aux	_	_
8	sich	sich	PRON	PRF	_	11	obj	_	_
9	doch	doch	ADV	ADV	_	11	advmod	_	_
10	selbst	selbst	ADV	ADV	_	11	advmod	_	_
11	bilden	bilden	VERB	VVINF	_	0	root	_	SpaceAfter=No
12	.	--	PUNCT	$.	_	11	punct	_	_

~~~


