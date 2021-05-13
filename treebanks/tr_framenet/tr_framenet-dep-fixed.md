---
layout: base
title:  'Statistics of fixed in UD_Turkish-FrameNet'
udver: '2'
---

## Treebank Statistics: UD_Turkish-FrameNet: Relations: `fixed`

This relation is universal.

8 nodes (0%) are attached to their parents as `fixed`.

8 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 5 pairs of parts of speech are connected with `fixed`: <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (3; 38% instances), <tt><a href="tr_framenet-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_framenet-pos-DET.html">DET</a></tt> (2; 25% instances), <tt><a href="tr_framenet-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_framenet-pos-SCONJ.html">SCONJ</a></tt> (1; 13% instances), <tt><a href="tr_framenet-pos-DET.html">DET</a></tt>-<tt><a href="tr_framenet-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances), <tt><a href="tr_framenet-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_framenet-pos-SCONJ.html">SCONJ</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Kıyafetlerin	kıyafet	NOUN	_	Case=Gen|Number=Plur|Person=3	2	nmod	_	_
2	fiyatını	fiyat	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obj	_	_
3	daha	daha	ADV	_	Degree=Cmp	5	advmod	_	_
4	da	da	CCONJ	_	_	3	fixed	_	_
5	düşürmüş	düşür	VERB	_	Aspect=Perf|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Öyle	öyle	ADV	_	_	3	advmod	_	_
2	bir	bir	DET	_	Definite=Ind	1	fixed	_	_
3	göçtü	göç	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	6	advcl	_	_
4	ki	ki	SCONJ	_	_	3	mark	_	_
5	sandalyeye	sandalye	NOUN	_	Case=Dat|Number=Sing|Person=3	3	obl	_	_
6	kırıldı	kır	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Belli	belli	ADJ	_	_	3	advmod	_	_
2	ki	ki	SCONJ	_	_	1	fixed	_	_
3	açtı	aç	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	6	parataxis	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	tabağını	tabak	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	obj	_	_
6	süpürdü	süpür	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


