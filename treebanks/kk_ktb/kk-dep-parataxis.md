---
layout: base
title:  'Statistics of parataxis in UD_Kazakh'
udver: '2'
---

## Treebank Statistics: UD_Kazakh: Relations: `parataxis`

This relation is universal.

96 nodes (1%) are attached to their parents as `parataxis`.

54 instances of `parataxis` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.38541666666667.

The following 18 pairs of parts of speech are connected with `parataxis`: <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (44; 46% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (9; 9% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (9; 9% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (6; 6% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (6; 6% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-ADJ.html">ADJ</a></tt> (4; 4% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="kk-pos-NUM.html">NUM</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="kk-pos-NUM.html">NUM</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="kk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="kk-pos-X.html">X</a></tt>-<tt><a href="kk-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
1	Қой	қой	VERB	v	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	cm	_	1	punct	_	_
3	қазақ	қазақ	NOUN	n	Case=Nom	7	nsubj	_	_
4	бұлармен	бұл	PRON	prn	Case=Ins|Number=Plur|PronType=Dem	7	obl	_	_
5	не	не	PRON	prn	Case=Nom|PronType=Int	6	obj	_	_
6	ғып	қыл	VERB	v	Aspect=Perf|VerbForm=Conv	7	advcl	_	_
7	соғыса	соқ	VERB	v	Aspect=Imp|VerbForm=Cov|Voice=Coop	1	parataxis	_	_
8	алсын	ал	AUX	vaux	Mood=Opt|Number=Sing|Person=3|VerbForm=Fin	7	aux	_	SpaceAfter=No
9	?	?	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 parataxis	color:blue
1	Мерекелеріңізбен	мереке	NOUN	n	Case=Ins|Number=Plur|Number[psor]=Sing|Person[psor]=2|Polite=Form	4	parataxis	_	SpaceAfter=No
2	,	,	PUNCT	cm	_	4	punct	_	_
3	қымбатты	қымбатты	ADJ	adj	_	4	amod	_	_
4	отандастар	отандас	NOUN	n	Case=Nom|Number=Plur	0	root	_	SpaceAfter=No
5	!	!	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 12 parataxis	color:blue
1	Бітеу	Бітеу	PART	mod_emo	_	2	amod	_	_
2	жара	жара	NOUN	n	Case=Nom	0	root	_	_
3	болды	бол	AUX	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	SpaceAfter=No
4	,	,	PUNCT	cm	_	2	punct	_	_
5	жалғыз	жалғыз	NOUN	n	Case=Nom	6	advmod	_	_
6	өртенді	өртен	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	parataxis	_	SpaceAfter=No
7	,	,	PUNCT	cm	_	6	punct	_	_
8	жалғыз	жалғыз	NOUN	n	Case=Nom	9	advmod	_	_
9	жылады	жыла	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	parataxis	_	SpaceAfter=No
10	,	,	PUNCT	cm	_	9	punct	_	_
11	дүниеден	дүниеден	NOUN	n	Case=Nom	12	obl	_	_
12	безді	без	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	parataxis	_	SpaceAfter=No
13	,	,	PUNCT	cm	_	12	punct	_	_
14	сопы	соп	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	2	parataxis	_	_
15	болды	бол	AUX	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	14	cop	_	SpaceAfter=No
16	.	.	PUNCT	sent	_	14	punct	_	_

~~~


