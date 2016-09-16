

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is a language-specific subtype of [nmod]().

413 nodes (8%) are attached to their parents as `nmod:poss`.

413 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41404358353511.

The following 12 pairs of parts of speech are connected with `nmod:poss`: [kk-pos/NOUN]()-[kk-pos/NOUN]() (275; 67% instances), [kk-pos/NOUN]()-[kk-pos/PROPN]() (99; 24% instances), [kk-pos/NOUN]()-[kk-pos/PRON]() (16; 4% instances), [kk-pos/NUM]()-[kk-pos/NOUN]() (6; 1% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (5; 1% instances), [kk-pos/PRON]()-[kk-pos/NOUN]() (4; 1% instances), [kk-pos/VERB]()-[kk-pos/NOUN]() (3; 1% instances), [kk-pos/NOUN]()-[kk-pos/ADJ]() (1; 0% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (1; 0% instances), [kk-pos/PRON]()-[kk-pos/PROPN]() (1; 0% instances), [kk-pos/PROPN]()-[kk-pos/PRON]() (1; 0% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Кейінірек	кейін	ADV	adv	_	6	advmod	_	comp
2	ФИФА	ФИФА	PROPN	np	_	6	nsubj	_	org|nom
3	ротация	ротация	NOUN	n	_	4	nmod:poss	_	nom
4	принципі	принцип	NOUN	n	_	5	nsubj	_	px3sp|nom
5	өзгеретінін	өзгер	VERB	v	_	6	ccomp	_	iv|ger_impf|px3sp|acc
6	жариялады	жарияла	VERB	v	_	0	root	_	tv|ifi|p3|sg
7	.	.	PUNCT	sent	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Михайлов	Михайлов	PROPN	np	_	2	nmod:poss	_	cog|m|nom
2	зиратына	зират	NOUN	n	_	3	nmod	_	px3sp|dat
3	жерленген	жерле	VERB	v	_	0	root	_	tv|pass|past|p3|sg
4	.	.	PUNCT	sent	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Қыз	қыз	NOUN	n	_	3	nsubj	_	nom
2	оның	ол	PRON	prn	_	3	nmod:poss	_	pers|p3|sg|gen
3	_	қарындас	NOUN	n	_	8	parataxis	_	px3sp|nom
4	_	е	VERB	cop	_	3	cop	_	aor|p3|sg
5	,	,	PUNCT	cm	_	8	punct	_	_
6	ол	ол	PRON	prn	_	8	nsubj	_	pers|p3|sg|nom
7	бес	бес	NUM	num	_	8	nummod	_	_
8	_	жас	NOUN	n	_	0	root	_	loc
9	_	е	VERB	cop	_	8	cop	_	aor|p3|sg
10	.	.	PUNCT	sent	_	8	punct	_	_

~~~


