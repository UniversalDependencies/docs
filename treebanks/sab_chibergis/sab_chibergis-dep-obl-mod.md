---
layout: base
title:  'Statistics of obl:mod in UD_Bokota-ChibErgIS'
udver: '2'
---

## Treebank Statistics: UD_Bokota-ChibErgIS: Relations: `obl:mod`

This relation is a language-specific subtype of <tt><a href="sab_chibergis-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="sab_chibergis-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="sab_chibergis-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="sab_chibergis-dep-obl-tmod.html">obl:tmod</a></tt>.

26 nodes (1%) are attached to their parents as `obl:mod`.

19 instances of `obl:mod` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.73076923076923.

The following 6 pairs of parts of speech are connected with `obl:mod`: <tt><a href="sab_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="sab_chibergis-pos-NOUN.html">NOUN</a></tt> (17; 65% instances), <tt><a href="sab_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="sab_chibergis-pos-NUM.html">NUM</a></tt> (4; 15% instances), <tt><a href="sab_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="sab_chibergis-pos-PROPN.html">PROPN</a></tt> (2; 8% instances), <tt><a href="sab_chibergis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sab_chibergis-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="sab_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="sab_chibergis-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="sab_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="sab_chibergis-pos-X.html">X</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obl:mod	color:blue
1	ba	ba	PRON	_	_	3	nsubj	_	AlignBegin=11220|AlignEnd=11945|GE=[2SG]|Gloss=2SG|nWord=1|RX=[PRO]
2	be	be	AUX	_	_	3	aux	_	AlignBegin=11945|AlignEnd=12670|GE=[FUT]|Gloss=FUT|nWord=2|RX=[VERBPRT]
3	hoke	hoke	VERB	_	_	0	root	_	AlignBegin=12670|AlignEnd=13395|GE=go|Gloss=go|nWord=3|RX=[VI]
4	Rio	Rio	NOUN	_	_	3	obl:mod	_	AlignBegin=13395|AlignEnd=14120|GE=[Rio]|Gloss=Rio|nWord=4|RX=[N]
5	Luis	Luis	PROPN	_	_	4	flat	_	AlignBegin=14120|AlignEnd=14845|GE=[Luis]|Gloss=Luis|nWord=5|RX=[NPROP]
6	.	_	PUNCT	_	_	3	punct	_	AlignBegin=14845|AlignEnd=15570|Gloss=.|nWord=6

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 obl:mod	color:blue
1	apa	apa	NUM	_	_	5	obl:mod	_	AlignBegin=49335|AlignEnd=49615|GE=eight|Gloss=eight|nWord=1|RX=[NUM]
2	ke	ke	ADP	_	_	1	case	_	AlignBegin=49615|AlignEnd=49895|GE=[LOC]|Gloss=LOC|nWord=1|RX=[ADP]
3	gire	gire	ADV	_	_	5	advmod	_	AlignBegin=49895|AlignEnd=50455|GE=then|Gloss=then|nWord=2|RX=[ADV]
4	samla	samla	NOUN	_	_	5	obj	_	AlignBegin=50455|AlignEnd=51015|GE=meat|Gloss=meat|nWord=3|RX=[N]
5	gutadale	gut	VERB	_	_	0	root	_	AlignBegin=51015|AlignEnd=51575|GE=[IRR]|Gloss=eat-0-IRR|nWord=4|RX=[V:ANY]
6	.	_	PUNCT	_	_	5	punct	_	AlignBegin=51575|AlignEnd=52135|Gloss=.|nWord=5

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:mod	color:blue
1	hoke	hoke	VERB	_	_	0	root	_	AlignBegin=54390|AlignEnd=55262|GE=go|Gloss=go|nWord=1|RX=[VI]
2	chke	chk	VERB	_	_	1	compound:svc	_	AlignBegin=55262|AlignEnd=56134|GE=[THM]|Gloss=arrive-THM|nWord=2|RX=[V:ANY]
3	Cuay	Cuay	PROPN	_	_	2	obl:mod	_	AlignBegin=56134|AlignEnd=57006|GE=[Cuay]|Gloss=Cuay|nWord=3|RX=[NPROP]
4	.	_	PUNCT	_	_	1	punct	_	AlignBegin=57006|AlignEnd=57880|Gloss=.|nWord=4

~~~


