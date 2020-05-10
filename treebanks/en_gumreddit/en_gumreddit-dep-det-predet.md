---
layout: base
title:  'Statistics of det:predet in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `det:predet`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-det.html">det</a></tt>.

17 nodes (0%) are attached to their parents as `det:predet`.

17 instances of `det:predet` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.23529411764706.

The following 2 pairs of parts of speech are connected with `det:predet`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (16; 94% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 det:predet	color:blue
1	_	_	INTJ	UH	_	5	discourse	_	Lem=*LOWER*|Len=2
2	_	_	PRON	WP	PronType=Int	5	det:predet	_	Entity=(person-38|Lem=_|Len=4
3	_	_	DET	DT	Definite=Ind|PronType=Art	5	det	_	Lem=_|Len=1
4	_	_	NOUN	NN	Number=Sing	5	compound	_	Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	0	root	_	Entity=person-38)|Lem=_|Len=4

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:predet	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	7	nsubj:pass	_	Entity=(abstract-18)|Lem=*LOWER*|Len=4
2	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	Lem=be|Len=3
3	_	_	ADV	RB	_	7	advmod	_	Lem=_|Len=9
4	_	_	PRON	DT	_	5	det:predet	_	Lem=_|Len=3
5	_	_	PRON	WDT	PronType=Dem	7	nsubj:pass	_	Lem=_|Len=4
6	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	_	Lem=be|Len=3
7	_	_	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	Lem=say|Len=4
8	_	_	ADP	IN	_	10	case	_	Lem=_|Len=5
9	_	_	DET	DT	Definite=Def|PronType=Art	10	det	_	Entity=(object-12|Lem=_|Len=3
10	_	_	NOUN	NN	Number=Sing	7	obl	_	Entity=object-12)|Lem=_|Len=4|SpaceAfter=No
11	_	_	PUNCT	.	_	7	punct	_	Lem=_|Len=1

~~~


