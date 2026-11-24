---
layout: base
title:  'Statistics of det in UD_Tigrinya-TiTB'
udver: '2'
---

## Treebank Statistics: UD_Tigrinya-TiTB: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="ti_titb-dep-det-poss.html">det:poss</a></tt>.

84 nodes (5%) are attached to their parents as `det`.

83 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 4 pairs of parts of speech are connected with `det`: <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-DET.html">DET</a></tt> (75; 89% instances), <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-DET.html">DET</a></tt> (7; 8% instances), <tt><a href="ti_titb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ti_titb-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ti_titb-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	እቲ	እቲ	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	Translit=ʔti
2	ሰብኣይ	ሰብኣይ	NOUN	NOUN	Number=Sing	3	nsubj	_	Translit=səbʔay
3	ጠምዩ	ጠመየ	VERB	VERB	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Person=3	0	root	_	Translit=t'əmyu
4	።	።	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 det	color:blue
1	ን	ን	ADP	ADP	_	5	case:pre	_	_
2	እቲ	እቲ	DET	DET	Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
3	ብ	ብ	ADP	ADP	_	4	case:pre	_	_
4	ድሕሪት	ድሕሪት	NOUN	NOUN	Number=Sing	5	obl	_	_
5	ተሰሪዑ	ተሰርዐ	VERB	VERB	Gender=Masc|Number=Sing|Person=3|VerbForm=Conv|Voice=Pass	8	ccomp	_	Translit=təsəriʕu
6	ዝ	ዝ	SCONJ	SCONJ	_	5	mark	_	_
7	ኣሎ	ኣሎ	AUX	AUX	Gender=Masc|Number=Sing|Person=3|Tense=Pres	5	aux	_	Aimad=SERAHI
8	ጸውዓዮ	ጸውዐ	VERB	VERB	Gender=Masc|Gender[obj]=Masc|Mood=Imp|Number=Sing|Number[obj]=Sing|Person=2|Person[obj]=3	0	root	_	Translit=s'əwʕayo
9	።	።	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	ን	ን	ADP	ADP	_	3	case:pre	_	_
2	እቲ	እቲ	DET	DET	Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	ዓብይ	ዓብይ	ADJ	ADJ	Gender=Masc|Number=Sing	4	obj	_	Translit=ʕaby
4	እደሊ	ደለየ	VERB	VERB	Aspect=Imp|Number=Sing|Person=1	0	root	_	Translit=ʔdəli
5	እየ	እዩ	AUX	AUX	Number=Sing|Person=1|Tense=Pres	4	aux	_	Translit=ʔyə
6	።	።	PUNCT	PUNCT	_	4	punct	_	_

~~~


