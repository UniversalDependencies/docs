

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

81 nodes (1%) are attached to their parents as `ccomp`.

81 instances of `ccomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.06172839506173.

The following 8 pairs of parts of speech are connected with `ccomp`: [kk-pos/VERB]()-[kk-pos/VERB]() (60; 74% instances), [kk-pos/VERB]()-[kk-pos/NOUN]() (7; 9% instances), [kk-pos/ADJ]()-[kk-pos/VERB]() (4; 5% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (4; 5% instances), [kk-pos/VERB]()-[kk-pos/ADV]() (3; 4% instances), [kk-pos/AUX]()-[kk-pos/VERB]() (1; 1% instances), [kk-pos/NOUN]()-[kk-pos/VERB]() (1; 1% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (1; 1% instances).


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
1	Мені	мен	PRON	prn	_	3	dobj	_	pers|p1|sg|acc
2	бұзақы	бұзақы	NOUN	n	_	3	compound	_	attr
3	_	адам	NOUN	n	_	5	ccomp	_	nom
4	_	е	AUX	cop	_	3	cop	_	aor|p3|sg
5	деп	де	VERB	v	_	9	advcl	_	tv|gna_perf
6	,	,	PUNCT	cm	_	5	punct	_	_
7	сөйтіп	сөйт	VERB	v	_	9	advcl	_	tv|gna_perf
8	болыстыққа	болыстық	NOUN	n	_	9	nmod	_	dat
9	сайламай	сайла	VERB	v	_	0	root	_	iv|neg|prc_perf
10	қойғаны	қой	AUX	aux	_	9	aux	_	ger_past|px3sp
11	.	.	PUNCT	sent	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 ccomp	color:blue
1	"	_	PUNCT	sent	_	7	punct	_	_
2	Бұл	бұл	DET	det	_	3	det	_	dem
3	жауыздың	жауыз	NOUN	n	_	4	nmod:poss	_	gen
4	көзінде	көз	NOUN	n	_	7	nmod	_	px3sp|loc
5	не	не	DET	det	_	6	det	_	itg|nom
6	сиқыр	сиқыр	NOUN	n	_	7	nsubj	_	nom
7	_	бар	ADJ	adj	_	11	ccomp	_	_
8	_	е	AUX	cop	_	7	cop	_	aor|p3|sg
9	?	_	PUNCT	sent	_	7	punct	_	_
10	"	_	PUNCT	sent	_	7	punct	_	_
11	деп	де	VERB	v	_	13	advcl	_	tv|gna_perf
12	ішінен	іш	NOUN	n	_	13	nmod	_	px3sp|loc
13	таң__қалды	таң__қал	VERB	v	_	0	root	_	iv|ifi|p3|sg
14	.	.	PUNCT	sent	_	13	punct	_	_

~~~


