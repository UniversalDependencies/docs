---
layout: base
title:  'Statistics of flat in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `flat`

This relation is universal.

74 nodes (0%) are attached to their parents as `flat`.

74 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.39189189189189.

The following 5 pairs of parts of speech are connected with `flat`: <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (67; 91% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gentle-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat	color:blue
1	Jović	Jović	PROPN	NNP	Number=Sing	3	nsubj	3:nsubj	Discourse=joint-sequence_m:78->62:0|Entity=(31-person-giv:inact-cf1-1-coref-Luka_Jović)|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	1:punct	_
3	turned	turn	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	,	_	5	punct	5:punct	_
5	van	van	PROPN	NNP	Number=Sing	9	nsubj	9:nsubj	Discourse=context-circumstance:79->80:0|Entity=(32-person-giv:inact-cf2-1,2,3-coref-Donny_van_de_Beek
6	de	de	PROPN	NNP	Number=Sing	5	flat	5:flat	_
7	Beek	Beek	PROPN	NNP	Number=Sing	5	flat	5:flat	Entity=32)|SpaceAfter=No
8	,	,	PUNCT	,	_	5	punct	5:punct	_
9	looking	look	VERB	VBG	VerbForm=Ger	3	parataxis	3:parataxis	_
10	for	for	ADP	IN	_	11	case	11:case	_
11	something	something	PRON	NN	Number=Sing|PronType=Ind	9	obl	9:obl:for	Entity=(76-abstract-new-cf3-1-sgl)|SpaceAfter=No
12	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Diabetes	diabetes	NOUN	NN	Number=Sing	0	root	0:root	Discourse=joint-list_m:5->2:0|Entity=(7-abstract-new-cf1-1,2-coref-Diabetes
2	mellitus	mellitus	NOUN	NN	Number=Sing	1	flat	1:flat	Entity=7)|SpaceAfter=No
3	,	,	PUNCT	,	_	7	punct	7:punct	_
4	currently	currently	ADV	RB	Degree=Pos	7	advmod	7:advmod	_
5	on	on	ADP	IN	_	7	case	7:case	_
6	oral	oral	ADJ	JJ	Degree=Pos	7	amod	7:amod	Entity=(8-abstract-new-cf2-2-coref
7	therapy	therapy	NOUN	NN	Number=Sing	1	parataxis	1:parataxis	Entity=8)|SpaceAfter=No
8	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	enPR	enPR	NOUN	NN	Number=Sing	3	dep	3:dep	Discourse=organization-preparation:35->36:0|Entity=(55-abstract-new-cf2-1-sgl)|SpaceAfter=No|XML=<ref target:::"https://en.wiktionary.org/wiki/Appendix:English_pronunciation"></ref>
2	:	:	PUNCT	:	_	1	punct	1:punct	_
3	nĕ	nĕ	INTJ	UH	_	0	root	0:root	Discourse=joint-other_m:36->4:3|Entity=(56-abstract-new-cf4-1,2-sgl
4	kst	kst	INTJ	UH	_	3	flat	3:flat	Entity=56)|SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	6:punct	_
6	IPA	IPA	PROPN	NNP	Number=Sing	12	dep	12:dep	Discourse=organization-preparation:37->39:0|Entity=(57-abstract-new-cf1-1-sgl-International_Phonetic_Alphabet)|XML=<ref target:::"https://en.wiktionary.org/wiki/Wiktionary:International_Phonetic_Alphabet"></ref>
7	(	(	PUNCT	-LRB-	_	8	punct	8:punct	Discourse=elaboration-additional:38->37:0|SpaceAfter=No
8	key	key	NOUN	NN	Number=Sing	6	parataxis	6:parataxis	Entity=(58-abstract-new-cf3-1-sgl)|SpaceAfter=No
9	)	)	PUNCT	-RRB-	_	8	punct	8:punct	SpaceAfter=No
10	:	:	PUNCT	:	_	6	punct	6:punct	_
11	/	/	PUNCT	SYM	_	6	punct	6:punct	Discourse=joint-list_m:39->36:1
12	nɛkst	nɛkst	ADJ	JJ	Degree=Pos	3	parataxis	3:parataxis	Entity=(59-abstract-new-cf5-1-sgl)
13	/	/	PUNCT	SYM	_	3	punct	3:punct	_

~~~


