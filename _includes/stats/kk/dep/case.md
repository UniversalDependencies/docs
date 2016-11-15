

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

91 nodes (1%) are attached to their parents as `case`.

91 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.05494505494505.

The following 6 pairs of parts of speech are connected with `case`: [kk-pos/NOUN]()-[kk-pos/ADP]() (55; 60% instances), [kk-pos/PRON]()-[kk-pos/ADP]() (13; 14% instances), [kk-pos/VERB]()-[kk-pos/ADP]() (11; 12% instances), [kk-pos/NUM]()-[kk-pos/ADP]() (5; 5% instances), [kk-pos/PROPN]()-[kk-pos/ADP]() (4; 4% instances), [kk-pos/AUX]()-[kk-pos/ADP]() (3; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Кафедра	кафедра	NOUN	n	_	8	nsubj	_	nom
2	«	«	PUNCT	lquot	_	3	punct	_	_
3	Менеджмент	менеджмент	NOUN	n	_	1	appos	_	nom
4	»	»	PUNCT	rquot	_	3	punct	_	_
5	мамандық	мамандық	NOUN	n	_	8	nmod	_	nom
6	бойынша	бойынша	ADP	post	_	5	case	_	_
7	бакалавр	бакалавр	NOUN	n	_	8	dobj	_	nom
8	дайындайды	дайында	VERB	v	_	0	root	_	tv|aor|p3|sg
9	.	.	PUNCT	sent	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Одан	ол	PRON	prn	_	7	nmod	_	dem|abl
2	кейін	кейін	ADP	post	_	1	case	_	_
3	оған	ол	PRON	prn	_	7	nmod	_	dem|dat
4	кішкентай	кішкентай	ADJ	adj	_	6	amod	_	_
5	бір	бір	DET	det	_	6	det	_	ind
6	қол	қол	NOUN	n	_	7	nsubj	_	nom
7	көрінеді	көрін	VERB	v	_	0	root	_	iv|aor|p3|sg
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 case	color:blue
1	Шайларын	шай	NOUN	n	Case=Acc|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	2	dobj	_	шай|n|pl|px3sp|acc
2	ішіп	іш	VERB	v	Aspect=Perf|VerbForm=Trans	5	conj	_	іш|v|tv|gnaperf
3	,	,	PUNCT	cm	_	5	punct	_	,|cm
4	шылымдарын	шылым	NOUN	n	Case=Acc|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	5	dobj	_	шылым|n|pl|px3sp|acc
5	тартысып	тарт	VERB	v	Aspect=Perf|VerbForm=Trans|Voice=Coop	11	advcl	_	тарт|v|tv|coop|gnaperf
6	болған	бол	VERB	v	Case=Nom|Tense=Past|VerbForm=Ger	5	aux	_	бол|v|iv|gerpast|nom
7	соң	соң	ADP	post	_	5	case	_	соң|post
8	,	,	PUNCT	cm	_	11	punct	_	,|cm
9	өзгелері	өзге	ADJ	adj	Case=Nom|Number=Plur|Number[psor]=Plur,Sing|Person[psor]=3	11	nsubj	_	өзге|adj|subst|pl|px3sp|nom
10	тысқа	тыс	NOUN	n	Case=Dat	11	nmod	_	тыс|n|dat
11	шықты	шық	VERB	v	Number=Sing|Person=3|Tense=Past	0	root	_	шық|v|tv|ifi|p3|sg
12	.	.	PUNCT	sent	_	11	punct	_	.|sent

~~~


