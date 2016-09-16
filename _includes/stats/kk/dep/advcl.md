

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

184 nodes (4%) are attached to their parents as `advcl`.

183 instances of `advcl` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.47282608695652.

The following 11 pairs of parts of speech are connected with `advcl`: [kk-pos/VERB]()-[kk-pos/VERB]() (149; 81% instances), [kk-pos/ADJ]()-[kk-pos/VERB]() (9; 5% instances), [kk-pos/NOUN]()-[kk-pos/VERB]() (9; 5% instances), [kk-pos/VERB]()-[kk-pos/NOUN]() (7; 4% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (4; 2% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (1; 1% instances), [kk-pos/NOUN]()-[kk-pos/PRON]() (1; 1% instances), [kk-pos/NUM]()-[kk-pos/VERB]() (1; 1% instances), [kk-pos/PRON]()-[kk-pos/VERB]() (1; 1% instances), [kk-pos/PUNCT]()-[kk-pos/VERB]() (1; 1% instances), [kk-pos/VERB]()-[kk-pos/NUM]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 advcl	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advcl	color:blue
1	Сізбен	сіз	PRON	prn	_	2	nmod	_	pers|p2|sg|frm|ins
2	танысқаныма	таны	VERB	v	_	3	advcl	_	tv|coop|ger_past|px1sg|dat
3	_	қуанышты	ADJ	adj	_	0	root	_	_
4	_	е	VERB	cop	_	3	cop	_	aor|p1|sg
5	.	.	PUNCT	sent	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 advcl	color:blue
1	Қандай	қандай	PRON	prn	_	12	advcl	_	itg|sim
2	_	бол	VERB	v	_	1	cop	_	iv|ger_past|loc
3	_	да	PART	postadv	_	2	advmod	_	_
4	,	,	PUNCT	cm	_	1	punct	_	_
5	қала	қала	NOUN	n	_	12	nsubj	_	nom
6	ескі	ескі	ADJ	adj	_	7	amod	_	_
7	_	заман	NOUN	n	_	12	nmod	_	abl
8	_	-ақ	PART	postadv	_	7	advmod	_	_
9	адамдардың	адам	NOUN	n	_	10	nsubj	_	pl|gen
10	өмір__сүруіне	өмір__сүр	VERB	v	_	12	advcl	_	iv|ger|px3sp|dat
11	қолайлы	қолайлы	ADJ	adj	_	12	amod	_	_
12	мекен	мекен	NOUN	n	_	0	root	_	nom
13	болған	бол	VERB	v	_	12	cop	_	iv|past|p3|sg
14	.	.	PUNCT	sent	_	12	punct	_	_

~~~


