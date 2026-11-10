---
layout: base
title:  'Statistics of xcomp in UD_Tigrinya-TiTB'
udver: '2'
---

## Treebank Statistics: UD_Tigrinya-TiTB: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="ti_titb-dep-xcomp-pred.html">xcomp:pred</a></tt>.

24 nodes (2%) are attached to their parents as `xcomp`.

24 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41666666666667.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-VERB.html">VERB</a></tt> (17; 71% instances), <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt> (5; 21% instances), <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 xcomp	color:blue
1	ክ	ክ	SCONJ	SCONJ	_	2	mark	_	_
2	ይመጽእ	መጽአ	VERB	VSTEM	Aspect=Imp|Gender=Masc|Number=Sing|Person=3	3	xcomp	_	Aimad=SERAHI
3	ደልዩ	ደለየ	VERB	VERB	Aspect=Perf|Gender=Masc|Number=Sing|Person=3	0	root	_	Translit=dəlyu
4	ኣሎ	ኣሎ	AUX	AUX	Gender=Masc|Number=Sing|Person=3|Tense=Pres	3	aux	_	Translit=ʔalo
5	፡	፡	PUNCT	PUNCT	_	10	punct	_	_
6	ንሳ	ንሳ	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	Translit=nsa
7	'ውን	'ውን	ADV	ADV	_	10	cc	_	Translit='wn
8	ክ	ክ	SCONJ	SCONJ	_	9	mark	_	_
9	ትመጽእ	መጽአ	VERB	VSTEM	Aspect=Imp|Gender=Fem|Number=Sing|Person=3	10	xcomp	_	Aimad=SERAHI
10	ደልያ	ደለየ	VERB	VERB	Aspect=Perf|Gender=Fem|Number=Sing|Person=3	3	conj	_	Translit=dəlya
11	ኣላ	ኣሎ	AUX	AUX	Gender=Fem|Number=Sing|Person=3|Tense=Pres	10	aux	_	Translit=ʔala
12	።	።	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 xcomp	color:blue
1	ወዲ	ወዲ	NOUN	NOUN	Number=Sing	8	nsubj	_	_
2	ኣ	ኣ	DET	DET	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	1	det:poss	_	_
3	ትምህርቲ	ትምህርቲ	NOUN	NOUN	Number=Sing	8	obj	_	_
4	ኡ	ኡ	DET	DET	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	det:poss	_	_
5	ተቢዑ	ተብዐ	VERB	VERB	Gender=Masc|Number=Sing|Person=3|VerbForm=Conv	8	advcl	_	Translit=təbiʕu
6	ን	ን	ADP	ADP	_	8	mark	_	_
7	ክ	ክ	SCONJ	SCONJ	_	8	mark	_	_
8	ይምሃር	መሃረ	VERB	VSTEM	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Voice=Pass	9	advcl	_	Aimad=TESERAHI
9	ምምካር	ምምካር	NOUN	NOUN	Number=Sing|VerbForm=Vnoun	11	xcomp	_	Translit=mmkar
10	ኣይ	ኣይ	ADV	ADV	Polarity=Neg	11	advmod:aff	_	_
11	ኣቋረጸት	ኣቋረጸ	VERB	VSTEM	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Cau	0	root	_	Aimad=ASARAHI
12	ን	ን	ADV	ADV	Polarity=Neg	11	advmod:aff	_	_
13	።	።	PUNCT	PUNCT	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 xcomp	color:blue
1	ትምህርቲ	ትምህርቲ	NOUN	NOUN	Number=Sing	5	obj	_	Translit=tmhrti
2	ተቢዑ	ተብዐ	VERB	VERB	Gender=Masc|Number=Sing|Person=3|VerbForm=Conv	5	advcl	_	Translit=təbiʕu
3	ን	ን	ADP	ADP	_	5	mark	_	_
4	ክ	ክ	SCONJ	SCONJ	_	5	mark	_	_
5	ይመሃር	ተማህረ	VERB	VERB	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Voice=Pass	9	xcomp	_	_
6	ን	ን	ADP	ADP	_	7	case:pre	_	_
7	ወዲ	ወዲ	NOUN	NOUN	Number=Sing	9	obj	_	_
8	ኣ	ኣ	DET	DET	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	7	det:poss	_	_
9	ምምካር	ምምካር	NOUN	NOUN	Number=Sing|VerbForm=Vnoun	11	xcomp	_	Translit=mmkar
10	ኣይ	ኣይ	ADV	ADV	Polarity=Neg	11	advmod:aff	_	_
11	ኣቋረጸት	ኣቋረጸ	VERB	VERB	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Cau	0	root	_	_
12	ን	ን	ADV	ADV	Polarity=Neg	11	advmod:aff	_	_
13	።	።	PUNCT	PUNCT	_	11	punct	_	_

~~~


