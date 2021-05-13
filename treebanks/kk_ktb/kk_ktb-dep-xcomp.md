---
layout: base
title:  'Statistics of xcomp in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `xcomp`

This relation is universal.

17 nodes (0%) are attached to their parents as `xcomp`.

17 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47058823529412.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (8; 47% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt> (5; 29% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt> (3; 18% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 xcomp	color:blue
1	Бұл	бұл	PRON	prn	Case=Nom|PronType=Dem	4	nsubj	_	_
2	сені	сен	PRON	prn	Case=Acc|Number=Sing|Person=2|PronType=Prs	4	obj	_	_
3	қатын	қатын	NOUN	n	Case=Nom	4	xcomp	_	_
4	қылады	қыл	VERB	v	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 xcomp	color:blue
1	Кімге	кім	PRON	prn	Case=Dat|PronType=Int	2	obj	_	_
2	сенуге	сен	VERB	v	Case=Dat|VerbForm=Ger	6	xcomp	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	5	punct	_	_
4	кіммен	кім	PRON	prn	Case=Ins|PronType=Int	5	nmod	_	_
5	істесуге	істе	VERB	v	Case=Dat|VerbForm=Ger|Voice=Rcp	2	conj	_	_
6	болады	бол	VERB	v	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
7	?	?	PUNCT	sent	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	Одан	ол	PRON	prn	Case=Abl|Number=Sing|Person=3|PronType=Prs	2	nmod	_	_
2	өзгесін	өзге	ADJ	adj	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3	5	obj	_	_
3	артық	артық	ADJ	adj	_	4	advmod	_	_
4	керек	керек	ADJ	adj	_	5	xcomp	_	_
5	қылмады	қыл	VERB	v	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	5	punct	_	_

~~~


