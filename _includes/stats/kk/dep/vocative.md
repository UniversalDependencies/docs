

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

4 nodes (0%) are attached to their parents as `vocative`.

3 instances of `vocative` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75.

The following 3 pairs of parts of speech are connected with `vocative`: [kk-pos/VERB]()-[kk-pos/PROPN]() (2; 50% instances), [kk-pos/PRON]()-[kk-pos/NOUN]() (1; 25% instances), [kk-pos/VERB]()-[kk-pos/NOUN]() (1; 25% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 vocative	color:blue
1	"	"	PUNCT	sent	_	6	punct	_	_
2	Жоқ	жоқ	INTJ	ij	_	6	discourse	_	_
3	,	,	PUNCT	cm	_	2	punct	_	_
4	Айгүл	Айгүл	PROPN	np	_	6	vocative	_	ant|f|nom
5	,	,	PUNCT	cm	_	4	punct	_	_
6	айта	айт	VERB	v	_	9	ccomp	_	tv|prc_impf
7	алмаймын	ал	AUX	vaux	_	6	aux	_	neg|aor|p1|sg
8	"	"	PUNCT	sent	_	6	punct	_	_
9	деп	де	VERB	v	_	11	advcl	_	tv|gna_perf
10	анасы	ана	NOUN	n	_	11	nsubj	_	px3sp|nom
11	жауап__береді	жауап__бер	VERB	v	_	0	root	_	iv|aor|p3|sg
12	.	.	PUNCT	sent	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 vocative	color:blue
1	Қожа	Қожа	PROPN	np	_	3	nsubj	_	ant|m|nom
2	етті	ет	NOUN	n	_	3	dobj	_	acc
3	жемей	же	VERB	v	_	20	advcl	_	tv|neg|gna_perf
4	,	,	PUNCT	cm	_	3	punct	_	_
5	табаққа	табақ	NOUN	n	_	8	nmod	_	dat
6	шапанының	шапан	NOUN	n	_	7	nmod:poss	_	px3sp|gen
7	жеңін	жең	NOUN	n	_	8	dobj	_	px3sp|acc
8	малып	мал	VERB	v	_	20	advcl	_	tv|gna_perf
9	:	:	PUNCT	sent	_	8	punct	_	_
10	-	-	PUNCT	guio	_	8	punct	_	_
11	Же	же	VERB	v	_	15	conj	_	tv|imp|p2|sg
12	,	,	PUNCT	cm	_	15	punct	_	_
13	шапаным	шапан	NOUN	n	_	15	vocative	_	px1sg|nom
14	,	,	PUNCT	cm	_	13	punct	_	_
15	же	же	VERB	v	_	18	ccomp	_	tv|imp|p2|sg
16	!	!	PUNCT	sent	_	15	punct	_	_
17	-	-	PUNCT	guio	_	15	punct	_	_
18	деп	де	VERB	v	_	20	advcl	_	tv|gna_perf
19	,	,	PUNCT	cm	_	18	punct	_	_
20	отыра	отыр	VERB	v	_	0	root	_	iv|prc_impf
21	береді	бер	AUX	vaux	_	20	aux	_	aor|p3|sg
22	.	.	PUNCT	sent	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 vocative	color:blue
1	—	—	PART	guio	_	2	punct	_	—|guio
2	_	немене	PRON	prn	Case=Nom|PronType=Itg	0	root	_	немене|prn|itg|nom
3	_	е	AUX	cop	Number=Sing|Person=3|Tense=Aor	2	cop	_	е|cop|aor|p3|sg
4	,	,	PUNCT	cm	_	2	punct	_	,|cm
5	жаным	жан	NOUN	n	Case=Nom|Number[psor]=Sing|Person[psor]=1	2	vocative	_	жан|n|px1sg|nom
6	?	?	PUNCT	sent	_	2	punct	_	?|sent

~~~


