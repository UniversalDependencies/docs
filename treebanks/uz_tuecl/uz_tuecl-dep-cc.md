---
layout: base
title:  'Statistics of cc in UD_Uzbek-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-TueCL: Relations: `cc`

This relation is universal.

17 nodes (2%) are attached to their parents as `cc`.

14 instances of `cc` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.58823529411765.

The following 3 pairs of parts of speech are connected with `cc`: <tt><a href="uz_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_tuecl-pos-CCONJ.html">CCONJ</a></tt> (9; 53% instances), <tt><a href="uz_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uz_tuecl-pos-CCONJ.html">CCONJ</a></tt> (4; 24% instances), <tt><a href="uz_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uz_tuecl-pos-CCONJ.html">CCONJ</a></tt> (4; 24% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc	color:blue
1	U	u	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
2	chekish	chek	VERB	_	Case=Nom|VerbForm=Vnoun	5	xcomp	_	_
3	va	va	CCONJ	_	_	4	cc	_	_
4	ichishni	ich	VERB	_	Case=Acc|VerbForm=Vnoun	2	conj	_	_
5	tashlashga	tashla	VERB	_	Case=Dat|VerbForm=Vnoun	6	xcomp	_	_
6	harakat	harakat	NOUN	_	Case=Nom|Number=Sing	7	compound:lvc	_	_
7	qildi	qil	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Iguazu	Iguazu	PROPN	_	Case=Nom|Number=Sing	3	nsubj	_	_
2	katta	katta	ADJ	_	_	3	amod	_	_
3	mamlakatmi	mamlakat	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
4	yoki	yoki	CCONJ	_	_	5	cc	_	_
5	kichik	kichik	ADJ	_	_	2	conj	_	SpaceAfter=No
6	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 cc	color:blue
1	Piter	Piter	PROPN	_	Case=Nom|Number=Sing	9	nsubj	_	_
2	Smit	Smit	PROPN	_	Case=Nom|Number=Sing	1	flat	_	_
3	ham	ham	CCONJ	_	_	1	cc	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	Meri	Meri	PROPN	_	Case=Nom|Number=Sing	1	conj	_	_
6	Braun	Braun	PROPN	_	Case=Nom|Number=Sing	5	flat	_	_
7	ham	ham	CCONJ	_	_	5	cc	_	_
8	saylana	sayla	VERB	_	VerbForm=Conv	9	compound	_	_
9	olmaydi	ol	VERB	_	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


