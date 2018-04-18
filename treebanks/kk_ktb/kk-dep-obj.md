---
layout: base
title:  'Statistics of obj in UD_Kazakh'
udver: '2'
---

## Treebank Statistics: UD_Kazakh: Relations: `obj`

This relation is universal.

532 nodes (5%) are attached to their parents as `obj`.

531 instances of `obj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.81015037593985.

The following 12 pairs of parts of speech are connected with `obj`: <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (437; 82% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (60; 11% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-PROPN.html">PROPN</a></tt> (15; 3% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="kk-pos-ADV.html">ADV</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="kk-pos-PRON.html">PRON</a></tt>-<tt><a href="kk-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	Бала	бала	NOUN	n	Case=Nom	2	obj	_	_
2	сұрады	сұра	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	7	punct	_	_
4	қалай	қалай	X	x	_	5	dep	_	_
5	да	да	SCONJ	cnjadv	_	7	cc	_	_
6	бала	бала	NOUN	n	Case=Nom	7	nsubj	_	_
7	болмады	бол	VERB	v	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	2	conj	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	Не	не	PRON	prn	Case=Nom|PronType=Int	2	obj	_	_
2	істемеді	істе	VERB	v	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past|VerbForm=Fin	0	root	_	_
3	Шолпан	Шолпан	PROPN	np	Case=Nom|Gender=Fem	2	nsubj	_	SpaceAfter=No
4	?	?	PUNCT	sent	_	2	punct	_	SpaceAfter=No
5	!	!	PUNCT	sent	_	2	punct	_	_

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


