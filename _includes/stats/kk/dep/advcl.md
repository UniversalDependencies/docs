

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

244 nodes (4%) are attached to their parents as `advcl`.

243 instances of `advcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.61065573770492.

The following 14 pairs of parts of speech are connected with `advcl`: [kk-pos/VERB]()-[kk-pos/VERB]() (200; 82% instances), [kk-pos/NOUN]()-[kk-pos/VERB]() (11; 5% instances), [kk-pos/VERB]()-[kk-pos/NOUN]() (10; 4% instances), [kk-pos/ADJ]()-[kk-pos/VERB]() (9; 4% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (4; 2% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (2; 1% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (1; 0% instances), [kk-pos/NOUN]()-[kk-pos/PRON]() (1; 0% instances), [kk-pos/NUM]()-[kk-pos/VERB]() (1; 0% instances), [kk-pos/PRON]()-[kk-pos/VERB]() (1; 0% instances), [kk-pos/PUNCT]()-[kk-pos/VERB]() (1; 0% instances), [kk-pos/VERB]()-[kk-pos/AUX]() (1; 0% instances), [kk-pos/VERB]()-[kk-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 advcl	color:blue
1	1968	1968	NUM	num	_	2	amod	_	_
2	жылдан	жыл	NOUN	n	_	3	nmod	_	abl
3	бастап	баста	VERB	v	_	7	advcl	_	tv|gna_perf
4	Ширазда	Шираз	PROPN	np	_	7	nmod	_	top|loc
5	театр	театр	NOUN	n	_	6	nmod:poss	_	nom
6	фестивалы	фестиваль	NOUN	n	_	7	nsubj	_	px3sp|nom
7	өткізіліп	өткіз	VERB	v	_	0	root	_	tv|pass|prc_perf
8	тұрды	тұр	AUX	vaux	_	7	aux	_	ifi|p3|sg
9	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 advcl	color:blue
1	Кім	кім	PRON	prn	Case=Nom|PronType=Itg	2	nsubj	_	кім|prn|itg|nom
2	біледі	біл	VERB	v	Number=Sing|Person=3|Tense=Aor	0	root	_	біл|v|tv|aor|p3|sg
3	,	,	PUNCT	cm	_	2	punct	_	,|cm
4	қолына	қол	NOUN	n	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	6	nmod	_	қол|n|px3sp|dat
5	қару	қару	NOUN	n	Case=Nom	6	dobj	_	қару|n|nom
6	берсе	бер	VERB	v	Mood=Cond|Number=Sing|Person=3|VerbForm=Trans	10	advcl	_	бер|v|tv|gnacond|p3|sg
7	,	,	PUNCT	cm	_	12	punct	_	,|cm
8	орыс	орыс	NOUN	n	Case=Nom	9	nmod:poss	_	орыс|n|nom
9	жұртына	жұрт	NOUN	n	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3	10	nmod	_	жұрт|n|px3sp|dat
10	жау	жау	NOUN	n	Case=Nom	15	ccomp	_	жау|n|nom
11	болып	бол	VERB	v	Aspect=Perf|VerbForm=Coverb	10	cop	_	бол|v|iv|prcperf
12	кетпесіне	кет	AUX	vaux	Case=Dat|Number[psor]=Plur,Sing|Person[psor]=3|Polarity=Neg	10	aux	_	кет|vaux|neg|gerfut|px3sp|dat
13	кімнің	кім	PRON	prn	Case=Gen|PronType=Itg	14	nmod:poss	_	кім|prn|itg|gen
14	көзі	көз	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	15	nsubj	_	көз|n|px3sp|nom
15	жетеді	жет	VERB	v	Number=Sing|Person=3|Tense=Aor	2	parataxis	_	жет|v|iv|aor|p3|sg
16	?	?	PUNCT	sent	_	2	punct	_	?|sent

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advcl	color:blue
1	Ауылда	ауыл	NOUN	n	_	6	nmod	_	loc
2	клуб	клуб	NOUN	n	_	3	nmod:poss	_	nom
3	директоры	директор	NOUN	n	_	6	advcl	_	px3sp|nom
4	болып	бол	VERB	v	_	3	cop	_	iv|gna_perf
5	қызмет	қызмет	NOUN	n	_	6	dobj	_	nom
6	атқарды	атқар	VERB	v	_	0	root	_	tv|ifi|p3|sg
7	.	.	PUNCT	sent	_	6	punct	_	_

~~~


