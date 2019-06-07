---
layout: base
title:  'Statistics of ccomp in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `ccomp`

This relation is universal.

150 nodes (0%) are attached to their parents as `ccomp`.

144 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.

The following 19 pairs of parts of speech are connected with `ccomp`: <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (69; 46% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (19; 13% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (18; 12% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (9; 6% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (8; 5% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (4; 3% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 ccomp	color:blue
1	Wer	wer	PRON	PWS	_	4	nsubj	_	_
2	etwas	etwas	DET	PIAT	_	4	obj	_	_
3	Unendliches	unendlich	NOUN	NN	_	2	appos	_	_
4	will	wollen	VERB	VMFIN	_	0	root	_	SpaceAfter=No
5	,	--	PUNCT	$,	_	4	punct	_	_
6	der	der	PRON	PDS	_	7	nsubj	_	_
7	weiß	weiß	VERB	VVFIN	_	4	parataxis	_	_
8	nicht	nicht	PART	PTKNEG	_	7	advmod	_	_
9	was	was	PRON	PWS	_	11	obj	_	_
10	er	er	PRON	PPER	_	11	nsubj	_	_
11	will	wollen	VERB	VMFIN	_	7	ccomp	_	SpaceAfter=No
12	.	--	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Man	man	PRON	PIS	_	2	nsubj	_	_
2	sieht	sehen	VERB	VVFIN	_	0	root	_	_
3	hier	hier	ADV	ADV	_	2	advmod	_	SpaceAfter=No
4	,	--	PUNCT	$,	_	2	punct	_	_
5	wie	wie	ADV	PWAV	_	6	advmod	_	_
6	relativ	relativ	ADJ	ADJD	_	2	ccomp	_	_
7	das	der	DET	ART	_	8	det	_	_
8	Herausgehn	Herausgehn	NOUN	NN	_	6	nsubj	_	_
9	und	und	CCONJ	KON	_	10	cc	_	_
10	Hineingehn	Hineingehn	NOUN	NN	_	8	conj	_	_
11	ist	sein	AUX	VAFIN	_	6	cop	_	SpaceAfter=No
12	.	--	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Es	es	PRON	PPER	_	2	nsubj	_	_
2	zeigt	zeigen	VERB	VVFIN	_	0	root	_	_
3	sich	sich	PRON	PRF	_	2	iobj	_	_
4	auch	auch	ADV	ADV	_	2	advmod	_	_
5	hierin	hierin	ADV	ADV	_	2	advmod	_	_
6	daß	dass	SCONJ	KOUS	_	8	mark	_	_
7	wir	wir	PRON	PPER	_	8	nsubj	_	_
8	Hyperboreer	Hyperboreer	NOUN	NN	_	2	ccomp	_	_
9	sind	sein	AUX	VAFIN	_	8	cop	_	SpaceAfter=No
10	.	--	PUNCT	$.	_	2	punct	_	_

~~~


