---
layout: base
title:  'Statistics of csubj in UD_Tigrinya-TiTB'
udver: '2'
---

## Treebank Statistics: UD_Tigrinya-TiTB: Relations: `csubj`

This relation is universal.
There are 3 language-specific subtypes of `csubj`: <tt><a href="ti_titb-dep-csubj-cleft.html">csubj:cleft</a></tt>, <tt><a href="ti_titb-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="ti_titb-dep-csubj-pass.html">csubj:pass</a></tt>.

14 nodes (1%) are attached to their parents as `csubj`.

14 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.42857142857143.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt> (5; 36% instances), <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt> (3; 21% instances), <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-VERB.html">VERB</a></tt> (3; 21% instances), <tt><a href="ti_titb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt> (2; 14% instances), <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-VERB.html">VERB</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj	color:blue
1	ሃብታማት	ሃብታም	ADJ	ADJ	Number=Plur	2	xcomp:pred	_	Translit=habtamat
2	ምዃን	ምዃን	NOUN	NOUN	Number=Sing|VerbForm=Vnoun	4	csubj	_	_
3	ኦም	ኦም	DET	DET	Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs	2	det:poss	_	_
4	ኣገሪሙና	ኣግረመ	VERB	VERB	Aspect=Perf|Gender=Masc|Number=Sing|Number[obj]=Plur|Person=3|Person[obj]=1|Voice=Cau	0	root	_	Translit=ʔagərimuna
5	።	።	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 csubj	color:blue
1	ን	ን	ADP	ADP	_	2	case:pre	_	_
2	ሰብ	ሰብ	NOUN	NOUN	Number=Sing	4	obj	_	_
3	ዘይ	ዘይ	ADV	ADV	Polarity=Neg	4	advmod:aff	_	_
4	ምክባር	ምኽባር	NOUN	NOUN	Number=Sing|VerbForm=Vnoun	8	csubj	_	_
5	ናይ	ናይ	ADP	ADP	_	7	case	_	Translit=nay
6	ዘይ	ዘይ	ADV	ADV	Polarity=Neg	7	advmod:aff	_	_
7	ምብሳል	ምብሳል	NOUN	NOUN	Number=Sing|VerbForm=Vnoun	8	nmod	_	_
8	ምልክት	ምልክት	NOUN	NOUN	Number=Sing	0	root	_	Translit=mlkt
9	እዩ	እዩ	AUX	AUX	Gender=Masc|Number=Sing|Person=3|Tense=Pres	8	cop	_	Translit=ʔyu
10	።	።	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj	color:blue
1	ዝ	ዝ	SCONJ	SCONJ	_	2	mark	_	_
2	መደብናዮ	መደበ	VERB	VSTEM	Aspect=Perf|Gender[obj]=Masc|Number=Plur|Number[obj]=Sing|Person=1|Person[obj]=3	4	csubj	_	Aimad=SERAHI
3	ኣይ	ኣይ	ADV	ADV	Polarity=Neg	4	advmod:aff	_	_
4	ሰለጠና	ሰለጠ	VERB	VSTEM	Aspect=Perf|Gender=Masc|Number=Sing|Number[obj]=Plur|Person=3|Person[obj]=1	0	root	_	Aimad=SERAHI
5	ን	ን	ADV	ADV	Polarity=Neg	4	advmod:aff	_	_
6	።	።	PUNCT	PUNCT	_	4	punct	_	_

~~~


