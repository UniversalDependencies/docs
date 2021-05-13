---
layout: base
title:  'Statistics of case in UD_Buryat-BDT'
udver: '2'
---

## Treebank Statistics: UD_Buryat-BDT: Relations: `case`

This relation is universal.

148 nodes (1%) are attached to their parents as `case`.

142 instances of `case` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14189189189189.

The following 8 pairs of parts of speech are connected with `case`: <tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bxr_bdt-pos-ADP.html">ADP</a></tt> (108; 73% instances), <tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr_bdt-pos-ADP.html">ADP</a></tt> (18; 12% instances), <tt><a href="bxr_bdt-pos-ADV.html">ADV</a></tt>-<tt><a href="bxr_bdt-pos-ADP.html">ADP</a></tt> (7; 5% instances), <tt><a href="bxr_bdt-pos-PRON.html">PRON</a></tt>-<tt><a href="bxr_bdt-pos-ADP.html">ADP</a></tt> (6; 4% instances), <tt><a href="bxr_bdt-pos-NUM.html">NUM</a></tt>-<tt><a href="bxr_bdt-pos-ADP.html">ADP</a></tt> (4; 3% instances), <tt><a href="bxr_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bxr_bdt-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="bxr_bdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bxr_bdt-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	Гэр	гэр	NOUN	_	Case=Nom	4	nsubj	_	_
2	хадын	хада	NOUN	_	Case=Gen	4	nmod	_	_
3	саана	саана	ADP	_	_	2	case	_	_
4	байна	бай	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 case	color:blue
1	Тиигээд	тиигээд	ADP	_	_	4	case	_	_
2	нютагаа	нютаг	NOUN	_	Case=Nom|Reflex=Yes	3	nmod	_	_
3	бусажа	буса	VERB	_	VerbForm=Inf	4	compound	_	_
4	ерээ	ерэ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	юм	юм	AUX	_	Evident=Fh	4	discourse	_	SpaceAfter=No
6	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 case	color:blue
1	Намааршье	би	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nmod	_	_
2	бодоод	бодо	VERB	_	Mood=Des|Number=Plur|Person=3	3	xcomp	_	_
3	үзэхэдэ	үзэ	VERB	_	Case=Dat|VerbForm=Ger	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	8	punct	_	_
5	би	би	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
6	хамһабариин	хамһабариин	ADJ	_	_	7	amod	_	_
7	ажахы	ажахы	NOUN	_	Case=Nom	8	obj	_	_
8	нээхэ	нээ	VERB	_	_	3	parataxis	_	_
9	гэхэдээ	гэхэ	PART	_	_	8	discourse	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	даб	даб	ADV	_	_	13	advmod	_	_
12	дээрээ	дээрээ	ADP	_	_	11	case	_	_
13	аргагүйдэнэб	аргал	VERB	_	VerbForm=Ger	8	parataxis	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


