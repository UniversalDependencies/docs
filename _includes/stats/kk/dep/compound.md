

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

74 nodes (1%) are attached to their parents as `compound`.

72 instances of `compound` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51351351351351.

The following 10 pairs of parts of speech are connected with `compound`: [kk-pos/NOUN]()-[kk-pos/NOUN]() (51; 69% instances), [kk-pos/NUM]()-[kk-pos/NUM]() (7; 9% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (6; 8% instances), [kk-pos/NOUN]()-[kk-pos/PROPN]() (2; 3% instances), [kk-pos/PROPN]()-[kk-pos/NOUN]() (2; 3% instances), [kk-pos/PROPN]()-[kk-pos/PROPN]() (2; 3% instances), [kk-pos/ADJ]()-[kk-pos/ADJ]() (1; 1% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (1; 1% instances), [kk-pos/ADV]()-[kk-pos/ADV]() (1; 1% instances), [kk-pos/PROPN]()-[kk-pos/NUM]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	Теке	теке	NOUN	n	_	2	compound	_	nom
2	көз	көз	NOUN	n	_	5	nmod	_	attr
3	қазақша	қазақша	ADV	adv	_	4	advmod	_	_
4	білетін	біл	VERB	v	_	5	acl:relcl	_	tv|gpr_impf
5	тілмәш	тілмәш	NOUN	n	_	0	root	_	nom
6	екен	е	AUX	cop	_	5	cop	_	aor|evid|p3|sg
7	.	.	PUNCT	sent	_	5	punct	_	_

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


