

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

30 nodes (1%) are attached to their parents as `name`.

30 instances of `name` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23333333333333.

The following 3 pairs of parts of speech are connected with `name`: [kk-pos/PROPN]()-[kk-pos/PROPN]() (16; 53% instances), [kk-pos/PROPN]()-[kk-pos/NOUN]() (9; 30% instances), [kk-pos/NOUN]()-[kk-pos/PROPN]() (5; 17% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 name	color:blue
1	Соғыстан	соғыс	NOUN	n	_	6	nmod	_	abl
2	кейін	кейін	ADP	post	_	1	case	_	_
3	Федор	Федор	PROPN	np	_	5	name	_	ant|m|nom
4	Федорович	Федорович	PROPN	np	_	6	nsubj	_	pat|m|nom
5	Қарағандыда	Қарағанды	PROPN	np	_	6	nmod	_	top|loc
6	тұрды	тұр	VERB	v	_	0	root	_	iv|ifi|p3|sg
7	.	.	PUNCT	sent	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 name	color:blue
1	Сөйтіп	сөйт	VERB	v	_	7	advcl	_	iv|gna_perf
2	,	,	PUNCT	cm	_	1	punct	_	_
3	Алашордасының	Алашорда	PROPN	np	_	4	nmod:poss	_	top|px3sp|gen
4	бастығына	бастық	NOUN	n	_	7	nmod	_	px3sp|dat
5	Ғ.	Ғ.	NOUN	abbr	_	6	name	_	_
6	Бөкейхан	Бөкейхан	PROPN	np	_	7	nsubj	_	ant|m|nom
7	сайланды	сайла	VERB	v	_	0	root	_	tv|pass|ifi|p3|sg
8	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 name	color:blue
1	1220	1220	NUM	num	_	3	conj	_	_
2	—	—	PUNCT	guio	_	3	punct	_	_
3	56	56	NUM	num	_	4	amod	_	_
4	ж.	ж.	NOUN	abbr	_	9	nmod	_	_
5	Иранды	Иран	PROPN	np	_	9	dobj	_	top|acc
6	Шыңғыс	Шыңғыс	PROPN	np	_	7	name	_	ant|m|attr
7	хан	хан	NOUN	n	_	8	nmod:poss	_	nom
8	әулеті	әулет	NOUN	n	_	9	nsubj	_	px3sp|nom
9	жаулап	жаула	VERB	v	_	0	root	_	tv|prc_perf
10	алды	ал	AUX	vaux	_	9	aux	_	ifi|p3|sg
11	.	.	PUNCT	sent	_	9	punct	_	_

~~~


