---
layout: base
title:  'Statistics of obl:arg in UD_Bokota-ChibErgIS'
udver: '2'
---

## Treebank Statistics: UD_Bokota-ChibErgIS: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="sab_chibergis-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="sab_chibergis-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="sab_chibergis-dep-obl-mod.html">obl:mod</a></tt>, <tt><a href="sab_chibergis-dep-obl-tmod.html">obl:tmod</a></tt>.

127 nodes (5%) are attached to their parents as `obl:arg`.

121 instances of `obl:arg` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.53543307086614.

The following 5 pairs of parts of speech are connected with `obl:arg`: <tt><a href="sab_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="sab_chibergis-pos-NOUN.html">NOUN</a></tt> (110; 87% instances), <tt><a href="sab_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="sab_chibergis-pos-PRON.html">PRON</a></tt> (8; 6% instances), <tt><a href="sab_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="sab_chibergis-pos-ADJ.html">ADJ</a></tt> (4; 3% instances), <tt><a href="sab_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="sab_chibergis-pos-PROPN.html">PROPN</a></tt> (4; 3% instances), <tt><a href="sab_chibergis-pos-ADV.html">ADV</a></tt>-<tt><a href="sab_chibergis-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obl:arg	color:blue
1	y	y	X	_	Foreign=Yes	7	discourse	_	AlignBegin=38170|AlignEnd=38595|GE=and|Gloss=and|Lang=es|nWord=1|RX=[COORDCONN]
2	che	che	PRON	_	_	3	nmod:poss	_	AlignBegin=38595|AlignEnd=39020|GE=[1/2/3PL]|Gloss=1/2/3PL|nWord=2|RX=[PRO]
3	doia	doia	NOUN	_	_	7	nsubj	_	AlignBegin=39020|AlignEnd=39445|GE=enemy|Gloss=enemy|nWord=3|RX=[N]
4	kle	kle	AUX	_	_	7	aux	_	AlignBegin=39445|AlignEnd=39870|GE=be|Gloss=be|nWord=4|RX=[V]
5	che	che	PRON	_	_	6	nmod:poss	_	AlignBegin=39870|AlignEnd=40295|GE=[1/2/3PL]|Gloss=1/2/3PL|nWord=5|RX=[PRO]
6	samlaia	samla	NOUN	_	_	7	obj	_	AlignBegin=40295|AlignEnd=40720|GE=[POSS]|Gloss=meat-POSS|nWord=6|RX=[N:ANY]
7	kete	ket	VERB	_	_	0	root	_	AlignBegin=40720|AlignEnd=41145|GE=[THM]|Gloss=give-THM|nWord=7|RX=[V:ANY]
8	daba	daba	NOUN	_	_	7	obl:arg	_	AlignBegin=41145|AlignEnd=41570|GE=brother|Gloss=brother|nWord=8|RX=[N]
9	salebli	salebli	ADJ	_	_	8	amod	_	AlignBegin=41570|AlignEnd=41995|GE=different|Gloss=different|nWord=9|RX=[ADJ]
10	ke	ke	ADP	_	_	8	case	_	AlignBegin=41995|AlignEnd=42420|GE=[DAT]|Gloss=DAT|nWord=10|RX=[ADP]
11	.	_	PUNCT	_	_	7	punct	_	AlignBegin=42420|AlignEnd=42850|Gloss=.|nWord=11

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:arg	color:blue
1	si	si	SCONJ	_	Foreign=Yes	4	mark	_	AlignBegin=145515|AlignEnd=145749|GE=if|Gloss=if|Lang=es|nWord=1|RX=[CONN]
2	ba	ba	PRON	_	_	4	nsubj	_	AlignBegin=145749|AlignEnd=145983|GE=[2SG]|Gloss=2SG|nWord=2|RX=[PRO]
3	be	be	AUX	_	_	4	aux	_	AlignBegin=145983|AlignEnd=146217|GE=[FUT]|Gloss=FUT|nWord=3|RX=[VERBPRT]
4	hoke	hoke	VERB	_	_	12	advcl	_	AlignBegin=146217|AlignEnd=146451|GE=go|Gloss=go|nWord=4|RX=[VI]
5	cha	cha	PRON	_	_	4	obl:arg	_	AlignBegin=146451|AlignEnd=146685|GE=[1SG]|Gloss=1SG|nWord=5|RX=[PRO]
6	ole	ole	ADP	_	_	5	case	_	AlignBegin=146685|AlignEnd=146919|GE=[COM]|Gloss=COM|nWord=6|RX=[ADP]
7	,	_	PUNCT	_	_	12	punct	_	AlignBegin=146919|AlignEnd=147155|nWord=7
8	cha	cha	PRON	_	_	12	nsubj	_	AlignBegin=147475|AlignEnd=147643|GE=[1SG]|Gloss=1SG|nWord=8|RX=[PRO]
9	mim	me	AUX	_	_	12	aux	_	AlignBegin=147643|AlignEnd=147811|GE=[NEG]|Gloss=NEG|nWord=9|RX=[VERBPRT]
10	be	be	AUX	_	_	12	aux	_	AlignBegin=147811|AlignEnd=147979|GE=[FUT]|Gloss=FUT|nWord=10|RX=[VERBPRT]
11	ba	ba	PRON	_	_	12	obj	_	AlignBegin=147979|AlignEnd=148147|GE=[2SG]|Gloss=2SG|nWord=11|RX=[PRO]
12	gweda	gwe	VERB	_	_	0	root	_	AlignBegin=148147|AlignEnd=148315|GE=[0]|Gloss=sleep-ASP|nWord=12|RX=[VERB]
13	.	_	PUNCT	_	_	12	punct	_	AlignBegin=148315|AlignEnd=148485|Gloss=.|nWord=13

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:arg	color:blue
1	entonces	entonces	ADV	_	Foreign=Yes	3	discourse	_	AlignBegin=36355|AlignEnd=36816|GE=so|Gloss=so|Lang=es|nWord=1|RX=[ADV]
2	kle	kle	AUX	_	_	3	aux	_	AlignBegin=36816|AlignEnd=37277|GE=be|Gloss=be|nWord=2|RX=[V]
3	chage	chage	VERB	_	_	0	root	_	AlignBegin=37277|AlignEnd=37738|GE=walk|Gloss=walk|nWord=3|RX=[VI]
4	gwakoningke	gwakoningke	ADV	_	_	3	advmod	_	AlignBegin=37738|AlignEnd=38199|GE=together|Gloss=together|nWord=4|RX=[ADV]
5	muireia	muire	ADJ	_	_	3	obl:arg	_	AlignBegin=38199|AlignEnd=38660|GE=[POSS]|Gloss=female-POSS|nWord=5|RX=[N:ANY]
6	ole	ole	ADP	_	_	5	case	_	AlignBegin=38660|AlignEnd=39121|GE=[COM]|Gloss=COM|nWord=6|RX=[ADP]
7	.	_	PUNCT	_	_	3	punct	_	AlignBegin=39121|AlignEnd=39585|Gloss=.|nWord=7

~~~


