

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

63 nodes (1%) are attached to their parents as `compound`.

61 instances of `compound` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49206349206349.

The following 9 pairs of parts of speech are connected with `compound`: [kk-pos/NOUN]()-[kk-pos/NOUN]() (41; 65% instances), [kk-pos/NUM]()-[kk-pos/NUM]() (7; 11% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (6; 10% instances), [kk-pos/NOUN]()-[kk-pos/PROPN]() (2; 3% instances), [kk-pos/PROPN]()-[kk-pos/NOUN]() (2; 3% instances), [kk-pos/PROPN]()-[kk-pos/PROPN]() (2; 3% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (1; 2% instances), [kk-pos/PROPN]()-[kk-pos/NUM]() (1; 2% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	Мені	мен	PRON	prn	_	3	dobj	_	_
2	бұзақы	бұзақы	NOUN	n	_	3	compound	_	_
3	_	адам	NOUN	n	_	5	ccomp	_	_
4	_	е	VERB	cop	_	3	cop	_	_
5	деп	де	VERB	v	_	9	advcl	_	_
6	,	,	PUNCT	cm	_	5	punct	_	_
7	сөйтіп	сөйт	VERB	v	_	9	advcl	_	_
8	болыстыққа	болыстық	NOUN	n	_	9	iobj	_	_
9	сайламай	сайла	VERB	v	_	0	root	_	_
10	қойғаны	қой	AUX	aux	_	9	aux	_	_
11	.	.	PUNCT	sent	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 compound	color:blue
1	1905	1905	NUM	num	_	3	compound	_	_
2	—	—	PUNCT	guio	_	3	punct	_	_
3	11	11	NUM	num	_	4	amod	_	_
4	ж.	ж.	NOUN	abbr	_	10	nmod	_	_
5	елде	ел	NOUN	n	_	10	nmod	_	loc
6	шетелдіктерге	шетелдік	NOUN	n	_	10	nmod	_	pl|dat
7	қарсы	қарсы	ADP	post	_	6	case	_	_
8	ұлт-азаттық	ұлт-азаттық	ADJ	adj	_	9	amod	_	_
9	қозғалысы	қозғалыс	NOUN	n	_	10	nsubj	_	px3sp|nom
10	болып	бол	VERB	v	_	11	advcl	_	iv|gna_perf
11	өтті	өт	VERB	v	_	0	root	_	tv|ifi|p3|sg
12	.	.	PUNCT	sent	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Мұнай	мұнай	NOUN	n	_	2	nmod:poss	_	nom
2	экспортынан	экспорт	NOUN	n	_	8	nmod	_	px3sp|abl
3	жыл__сайын	жыл__сайын	ADV	adv	_	8	advmod	_	_
4	16,3	16,3	NUM	num	_	5	compound	_	_
5	млрд.	млрд.	NOUN	abbr	_	6	nummod	_	_
6	АҚШ	АҚШ	PROPN	np	_	7	nmod:poss	_	top|nom
7	доллары	доллар	NOUN	n	_	8	nsubj	_	px3sp|nom
8	түседі	түс	VERB	v	_	0	root	_	iv|aor|p3|pl
9	.	.	PUNCT	sent	_	8	punct	_	_

~~~


