---
layout: base
title:  'Statistics of nsubj:pass in UD_Bokota-ChibErgIS'
udver: '2'
---

## Treebank Statistics: UD_Bokota-ChibErgIS: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="sab_chibergis-dep-nsubj.html">nsubj</a></tt>.

14 nodes (1%) are attached to their parents as `nsubj:pass`.

14 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21428571428571.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="sab_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="sab_chibergis-pos-NOUN.html">NOUN</a></tt> (13; 93% instances), <tt><a href="sab_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="sab_chibergis-pos-PRON.html">PRON</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nsubj:pass	color:blue
1	entonces	entonces	ADV	_	Foreign=Yes	4	discourse	_	AlignBegin=51275|AlignEnd=51635|GE=so|Gloss=so|Lang=es|nWord=1|RX=[ADV]
2	bi	bi	ADV	_	_	4	advmod	_	AlignBegin=51635|AlignEnd=51995|GE=then|Gloss=then|nWord=2|RX=[ADV]
3	die	die	NOUN	_	_	4	nsubj:pass	_	AlignBegin=51995|AlignEnd=52355|GE=thing|Gloss=thing|nWord=3|RX=[N]
4	bekale	bek	VERB	_	_	0	root	_	AlignBegin=52355|AlignEnd=52715|GE=[ADJZ]|Gloss=put-PASS-ADJZ|nWord=4|RX=[N>ADJ]
5	gli	gli	NOUN	_	_	4	obl:arg	_	AlignBegin=52715|AlignEnd=53075|GE=tree|Gloss=tree|nWord=5|RX=[N]
6	hegwale	hegwale	ADP	_	_	5	case	_	AlignBegin=53075|AlignEnd=53435|GE=next_to|Gloss=next_to|nWord=6|RX=[ADP]
7	para	para	ADP	_	Foreign=Yes	10	case	_	AlignBegin=53435|AlignEnd=53795|GE=to|Gloss=to|Lang=es|nWord=7|RX=[ADP]
8	gli	gli	NOUN	_	_	10	nmod:poss	_	AlignBegin=53795|AlignEnd=54155|GE=tree|Gloss=tree|nWord=8|RX=[N]
9	ese	ese	DET	_	_	8	dep	_	AlignBegin=54155|AlignEnd=54515|GE=that|Gloss=that|nWord=9|RX=[DET]
10	ki	ki	NOUN	_	_	4	obl:mod	_	AlignBegin=54515|AlignEnd=54875|GE=sap|Gloss=sap|nWord=10|RX=[N]
11	.	_	PUNCT	_	_	4	punct	_	AlignBegin=54875|AlignEnd=55235|Gloss=.|nWord=11

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	cha	cha	PRON	_	_	3	nsubj:pass	_	AlignBegin=37350|AlignEnd=37612|GE=[1SG]|Gloss=1SG|nWord=1|RX=[PRO]
2	ho	hoke	AUX	_	_	3	aux	_	AlignBegin=37612|AlignEnd=37874|GE=[go].[PST]|Gloss=go.PST|nWord=2|RX=[VI]
3	bekado	bek	VERB	_	_	0	root	_	AlignBegin=37874|AlignEnd=38136|GE=[PART]|Gloss=put-PART|nWord=3|RX=[VERB]
4	ble	ble	NOUN	_	_	3	obl:arg	_	AlignBegin=38136|AlignEnd=38398|GE=sea|Gloss=sea|nWord=4|RX=[N]
5	ke	ke	ADP	_	_	4	case	_	AlignBegin=38398|AlignEnd=38660|GE=[LOC]|Gloss=LOC|nWord=5|RX=[ADP]
6	.	_	PUNCT	_	_	3	punct	_	AlignBegin=38660|AlignEnd=38920|Gloss=.|nWord=6

~~~


