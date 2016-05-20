

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

463 nodes (9%) are attached to their parents as `nsubj`.

462 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.79481641468682.

The following 22 pairs of parts of speech are connected with `nsubj`: [kk-pos/VERB]()-[kk-pos/NOUN]() (228; 49% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (56; 12% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (45; 10% instances), [kk-pos/VERB]()-[kk-pos/PROPN]() (45; 10% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (37; 8% instances), [kk-pos/NOUN]()-[kk-pos/PRON]() (9; 2% instances), [kk-pos/NOUN]()-[kk-pos/PROPN]() (7; 2% instances), [kk-pos/ADJ]()-[kk-pos/PRON]() (6; 1% instances), [kk-pos/ADJ]()-[kk-pos/PROPN]() (4; 1% instances), [kk-pos/ADV]()-[kk-pos/PROPN]() (4; 1% instances), [kk-pos/ADV]()-[kk-pos/NOUN]() (3; 1% instances), [kk-pos/PRON]()-[kk-pos/NOUN]() (3; 1% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (3; 1% instances), [kk-pos/VERB]()-[kk-pos/NUM]() (3; 1% instances), [kk-pos/PROPN]()-[kk-pos/NOUN]() (2; 0% instances), [kk-pos/PROPN]()-[kk-pos/PRON]() (2; 0% instances), [kk-pos/ADJ]()-[kk-pos/ADJ]() (1; 0% instances), [kk-pos/AUX]()-[kk-pos/PROPN]() (1; 0% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (1; 0% instances), [kk-pos/NUM]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/PRON]()-[kk-pos/PRON]() (1; 0% instances), [kk-pos/PUNCT]()-[kk-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	Мына	мына	DET	det	_	2	det	_	dem
2	пойыз	пойыз	NOUN	n	_	4	nsubj	_	nom
3	қайда	қайда	ADV	adv	_	4	advmod	_	itg
4	барады	бар	VERB	v	_	0	root	_	iv|aor|p3|sg
5	?	?	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Мен	мен	PRON	prn	_	2	nsubj	_	pers|p1|sg|nom
2	адасып	адас	VERB	v	_	0	root	_	iv|prc_perf
3	кеттім	кет	AUX	vaux	_	2	aux	_	ifi|p1|sg
4	.	.	PUNCT	sent	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj	color:blue
1	Кейінірек	кейін	ADV	adv	_	6	advmod	_	comp
2	ФИФА	ФИФА	PROPN	np	_	6	nsubj	_	org|nom
3	ротация	ротация	NOUN	n	_	4	nmod:poss	_	nom
4	принципі	принцип	NOUN	n	_	5	nsubj	_	px3sp|nom
5	өзгеретінін	өзгер	VERB	v	_	6	ccomp	_	iv|ger_impf|px3sp|acc
6	жариялады	жарияла	VERB	v	_	0	root	_	tv|ifi|p3|sg
7	.	.	PUNCT	sent	_	6	punct	_	_

~~~


