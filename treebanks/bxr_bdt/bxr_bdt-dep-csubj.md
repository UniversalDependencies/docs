---
layout: base
title:  'Statistics of csubj in UD_Buryat-BDT'
udver: '2'
---

## Treebank Statistics: UD_Buryat-BDT: Relations: `csubj`

This relation is universal.

8 nodes (0%) are attached to their parents as `csubj`.

8 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.875.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="bxr_bdt-pos-ADV.html">ADV</a></tt>-<tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt> (4; 50% instances), <tt><a href="bxr_bdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="bxr_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bxr_bdt-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 csubj	color:blue
1	Буряад	буряад	ADJ	_	_	2	amod	_	_
2	хэлэ	хэлэн	NOUN	_	Case=Nom	3	nmod	_	_
3	мэдэдэг	мэдэ	VERB	_	_	4	xcomp	_	_
4	байхада	бай	VERB	_	Case=Dat|VerbForm=Ger	6	csubj	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	эшхэбтэр	эшхэбтэр	ADV	_	_	0	root	_	_
7	һэн	һэн	PART	_	_	6	discourse	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 csubj	color:blue
1	Хэды	хэды	ADV	_	PronType=Int	3	advmod	_	_
2	олон	олон	ADJ	_	_	3	amod	_	_
3	жэлэй	жэл	NOUN	_	Case=Gen	4	nmod	_	_
4	туршада	турша	NOUN	_	Case=Dat	7	nmod	_	_
5	буряад	буряад	ADJ	_	_	6	amod	_	_
6	хэлэеэ	хэлэн	NOUN	_	Case=Nom|Reflex=Yes	7	obj	_	_
7	шудалжал	шудал	VERB	_	VerbForm=Inf	0	root	_	_
8	байһан	бай	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux	_	_
9	аад	аад	CCONJ	_	_	7	advmod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	18	punct	_	_
11	гэнтэ	гэнтэ	ADV	_	_	17	advmod	_	_
12	гүрэнэй	гүрэнэй	NOUN	_	Case=Nom	13	amod	_	_
13	хэлэн	хэлэн	NOUN	_	Case=Nom	15	nmod	_	_
14	гэжэ	гэ	VERB	_	VerbForm=Inf	16	discourse	_	_
15	программа	программа	NOUN	_	Case=Nom	16	obj	_	_
16	шэлэн	шэлэ	VERB	_	_	17	xcomp	_	_
17	абалга	аба	VERB	_	VerbForm=Inf	18	csubj	_	_
18	гайхалтай	гайхалтай	ADJ	_	_	7	parataxis	_	SpaceAfter=No
19	.	.	PUNCT	_	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj	color:blue
1	Түрэл	түрэл	ADJ	_	_	2	amod	_	_
2	хэлэеэ	хэлэн	NOUN	_	Case=Nom|Reflex=Yes	3	obj	_	_
3	алдаһан	алда	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	acl	_	_
4	арад	арад	NOUN	_	Case=Nom	5	csubj	_	_
5	арад	арад	NOUN	_	Case=Nom	0	root	_	_
6	бэшэ	бэшэ	ADV	_	_	5	advmod:neg	_	_
7	гэжэ	гэ	VERB	_	VerbForm=Inf	11	discourse	_	_
8	сэсэн	сэсэн	ADJ	_	_	9	amod	_	_
9	үгые	үгы	NOUN	_	Case=Nom|Reflex=Yes	11	obj	_	_
10	эндэ	эндэ	ADV	_	_	11	advmod	_	_
11	дабтамаар	дабта	VERB	_	_	5	parataxis	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


