---
layout: base
title:  'Statistics of obj in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `obj`

This relation is universal.

517 nodes (5%) are attached to their parents as `obj`.

516 instances of `obj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.79690522243714.

The following 8 pairs of parts of speech are connected with `obj`: <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (430; 83% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt> (59; 11% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt> (14; 3% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt>-<tt><a href="kk_ktb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obj	color:blue
1	Қазақстан	Қазақстан	PROPN	np	Case=Nom	5	nsubj	_	_
2	осы	осы	DET	det	PronType=Dem	3	det	_	_
3	өңірдегі	өңір	NOUN	n	Case=Loc	4	amod	_	_
4	бейбітшілікті	бейбітшілік	NOUN	n	Case=Acc	5	obj	_	_
5	қолдайды	қолда	VERB	v	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	.	.	PUNCT	sent	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obj	color:blue
1	Қой	қой	VERB	v	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	cm	_	7	punct	_	_
3	қазақ	қазақ	NOUN	n	Case=Nom	7	nsubj	_	_
4	бұлармен	бұл	PRON	prn	Case=Ins|Number=Plur|PronType=Dem	7	obl	_	_
5	не	не	PRON	prn	Case=Nom|PronType=Int	6	obj	_	_
6	ғып	қыл	VERB	v	Aspect=Perf|VerbForm=Conv	7	advcl	_	_
7	соғыса	соқ	VERB	v	Aspect=Imp|VerbForm=Inf|Voice=Rcp	1	parataxis	_	_
8	алсын	ал	AUX	vaux	Mood=Opt|Number=Sing|Person=3|VerbForm=Fin	7	aux	_	SpaceAfter=No
9	?	?	PUNCT	sent	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obj	color:blue
1	Бекболат	Бекболат	PROPN	np	Case=Nom|Gender=Masc	8	nsubj	_	_
2	Жылтырға	Жылтыр	PROPN	np	Case=Dat|Gender=Fem	3	obj	_	_
3	жолыққаннан	жолық	VERB	v	Case=Abl|Tense=Past|VerbForm=Ger	8	advcl	_	_
4	бері	бері	ADP	post	_	3	case	_	_
5	бұл	бұл	DET	det	PronType=Dem	6	det	_	_
6	әңгімелерге	әңгіме	NOUN	n	Case=Dat|Number=Plur	8	nmod	_	_
7	әбден	әбден	ADV	adv	_	8	advmod	_	_
8	қанған	қан	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	sent	_	8	punct	_	_

~~~


