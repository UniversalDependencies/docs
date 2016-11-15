

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

351 nodes (6%) are attached to their parents as `amod`.

347 instances of `amod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25356125356125.

The following 14 pairs of parts of speech are connected with `amod`: [kk-pos/NOUN]()-[kk-pos/ADJ]() (216; 62% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (86; 25% instances), [kk-pos/PROPN]()-[kk-pos/ADJ]() (14; 4% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (13; 4% instances), [kk-pos/NOUN]()-[kk-pos/ADV]() (7; 2% instances), [kk-pos/ADJ]()-[kk-pos/ADJ]() (3; 1% instances), [kk-pos/ADJ]()-[kk-pos/NUM]() (3; 1% instances), [kk-pos/NOUN]()-[kk-pos/PRON]() (2; 1% instances), [kk-pos/NOUN]()-[kk-pos/PROPN]() (2; 1% instances), [kk-pos/PRON]()-[kk-pos/ADJ]() (1; 0% instances), [kk-pos/PROPN]()-[kk-pos/ADV]() (1; 0% instances), [kk-pos/PROPN]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/PROPN]()-[kk-pos/PROPN]() (1; 0% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Иран	Иран	PROPN	np	_	4	nsubj	_	top|nom
2	—	—	PUNCT	guio	_	1	punct	_	_
3	діни	діни	ADJ	adj	_	4	amod	_	_
4	_	мемлекет	NOUN	n	_	0	root	_	nom
5	_	е	AUX	cop	_	4	cop	_	aor|p3|sg
6	.	.	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	Б.з.б.	б.з.б.	NOUN	abbr	_	3	compound	_	_
2	550	550	NUM	num	_	3	amod	_	_
3	ж.	ж.	NOUN	abbr	_	9	nmod	_	_
4	өкімет	өкімет	NOUN	n	_	5	nmod:poss	_	nom
5	билігі	билік	NOUN	n	_	9	nsubj	_	px3sp|nom
6	парсылық	парсылық	ADJ	adj	_	7	amod	_	_
7	Ахемен	Ахемен	PROPN	np	_	8	nmod:poss	_	al|nom
8	әулетіне	әулет	NOUN	n	_	9	nmod	_	px3sp|dat
9	көшті	көш	VERB	v	_	0	root	_	iv|ifi|p3|sg
10	.	.	PUNCT	sent	_	9	punct	_	_

~~~


