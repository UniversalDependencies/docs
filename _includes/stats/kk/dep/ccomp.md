

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

57 nodes (1%) are attached to their parents as `ccomp`.

57 instances of `ccomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08771929824561.

The following 6 pairs of parts of speech are connected with `ccomp`: [kk-pos/VERB]()-[kk-pos/VERB]() (42; 74% instances), [kk-pos/VERB]()-[kk-pos/NOUN]() (5; 9% instances), [kk-pos/ADJ]()-[kk-pos/VERB]() (3; 5% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (3; 5% instances), [kk-pos/VERB]()-[kk-pos/ADV]() (3; 5% instances), [kk-pos/NOUN]()-[kk-pos/VERB]() (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 ccomp	color:blue
1	Кейінірек	кейін	ADV	adv	_	6	advmod	_	comp
2	ФИФА	ФИФА	PROPN	np	_	6	nsubj	_	org|nom
3	ротация	ротация	NOUN	n	_	4	nmod:poss	_	nom
4	принципі	принцип	NOUN	n	_	5	nsubj	_	px3sp|nom
5	өзгеретінін	өзгер	VERB	v	_	6	ccomp	_	iv|ger_impf|px3sp|acc
6	жариялады	жарияла	VERB	v	_	0	root	_	tv|ifi|p3|sg
7	.	.	PUNCT	sent	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 ccomp	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 ccomp	color:blue
1	Айгүл	Айгүл	PROPN	np	_	5	nsubj	_	ant|f|nom
2	Азаматтың	Азамат	PROPN	np	_	3	nsubj	_	ant|m|gen
3	қайда	қайда	ADV	adv	_	5	ccomp	_	itg
4	екенін	е	VERB	cop	_	3	cop	_	ger_past|px3sp|acc
5	білмейді	біл	VERB	v	_	0	root	_	tv|neg|aor|p3|sg
6	.	.	PUNCT	sent	_	5	punct	_	_

~~~


