---
layout: base
title:  'Statistics of aux in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `aux`

This relation is universal.

174 nodes (2%) are attached to their parents as `aux`.

174 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.11494252873563.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-AUX.html">AUX</a></tt> (160; 92% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-AUX.html">AUX</a></tt> (9; 5% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-AUX.html">AUX</a></tt> (4; 2% instances), <tt><a href="kk_ktb-pos-ADV.html">ADV</a></tt>-<tt><a href="kk_ktb-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 aux	color:blue
1	Есірткі	есірткі	NOUN	n	Case=Nom	2	nmod:poss	_	_
2	бизнесі	бизнес	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	8	nsubj	_	_
3	де	да	ADV	postadv	_	2	advmod	_	_
4	Орталық	орталық	ADJ	adj	_	6	nmod:poss	_	_
5	Азия	Азия	PROPN	np	Case=Nom	4	flat:name	_	_
6	аймағы	аймақ	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	8	obl	_	_
7	үшін	үшін	ADP	post	_	6	case	_	_
8	қауіп	қауіп	NOUN	n	Case=Nom	0	root	_	_
9	болып	бол	AUX	v	Aspect=Perf|VerbForm=Inf	8	cop	_	_
10	отыр	отыр	AUX	vaux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 aux	color:blue
1	Осы	осы	DET	det	PronType=Dem	2	det	_	_
2	орайда	орай	NOUN	n	Case=Loc	8	obl	_	_
3	Сіздің	сіз	PRON	prn	Case=Gen|Number=Sing|Person=2|Polite=Form|PronType=Prs	4	nmod:poss	_	_
4	сапарыңыз	сапар	NOUN	n	Case=Nom|Number[psor]=Sing|Person[psor]=2|Polite=Form	8	nsubj	_	_
5	аса	аса	ADV	adv	_	8	advmod	_	_
6	мәнді	мәнді	ADJ	adj	_	0	root	_	_
7	әрі	әрі	CCONJ	cnjcoo	_	8	cc	_	_
8	маңызды	маңызды	ADJ	adj	_	6	conj	_	_
9	болып	бол	AUX	v	Aspect=Perf|VerbForm=Inf	8	cop	_	_
10	отыр	отыр	AUX	vaux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	8	punct	_	_

~~~


