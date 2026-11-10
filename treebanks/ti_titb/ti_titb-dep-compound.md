---
layout: base
title:  'Statistics of compound in UD_Tigrinya-TiTB'
udver: '2'
---

## Treebank Statistics: UD_Tigrinya-TiTB: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="ti_titb-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="ti_titb-dep-compound-redup.html">compound:redup</a></tt>.

11 nodes (1%) are attached to their parents as `compound`.

9 instances of `compound` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.09090909090909.

The following 4 pairs of parts of speech are connected with `compound`: <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt> (8; 73% instances), <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-PROPN.html">PROPN</a></tt> (1; 9% instances), <tt><a href="ti_titb-pos-NUM.html">NUM</a></tt>-<tt><a href="ti_titb-pos-NUM.html">NUM</a></tt> (1; 9% instances), <tt><a href="ti_titb-pos-PART.html">PART</a></tt>-<tt><a href="ti_titb-pos-VERB.html">VERB</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	ንሳ	ንሳ	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	Translit=nsa
2	ኣብ	ኣብ	ADP	ADP	_	3	case:pre	_	Translit=ʔab
3	ቤት	ቤት	NOUN	NOUN	Number=Sing	5	obl	_	Translit=bet
4	መመገቢ	መመገቢ	NOUN	NOUN	Number=Sing	3	compound	_	Translit=məməgəbi
5	ኣላ	ኣሎ	VERB	VERB	Gender=Fem|Number=Sing|Person=3|Tense=Pres	0	root	_	Translit=ʔala
6	።	።	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	ናብ	ናብ	ADP	ADP	_	2	case	_	Translit=nab
2	ከተማ	ከተማ	NOUN	NOUN	Number=Sing	4	obl	_	Translit=kətəma
3	ጅማ	ጅማ	PROPN	PROPN	Number=Sing	2	compound	_	Translit=ǰma
4	ከይዶም	ከደ	VERB	VERB	Aspect=Perf|Gender=Masc|Number=Plur|Person=3	0	root	_	Translit=kəydom
5	።	።	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	ን	ን	ADP	ADP	_	3	case:pre	_	_
2	እቲ	እቲ	DET	DET	Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	ክዳን	ክዳን	NOUN	NOUN	Number=Sing	7	obj	_	Translit=kdan
4	ሓደ	ሓደ	NUM	NUM	Number=Sing	5	compound	_	Translit=ħadə
5	ሽሕ	ሽሕ	NUM	NUM	Number=Sing	6	nummod	_	Translit=šħ
6	ብር	ብር	NOUN	NOUN	Number=Sing	7	obl	_	Translit=br
7	ገዚአዮ	ገዝአ	VERB	VERB	Aspect=Perf|Gender[obj]=Masc|Number=Sing|Number[obj]=Sing|Person=1|Person[obj]=3	0	root	_	Translit=gəziʔɛyo
8	።	።	PUNCT	PUNCT	_	7	punct	_	_

~~~


