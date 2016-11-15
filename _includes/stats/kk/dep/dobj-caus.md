

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is a language-specific subtype of [dobj]().

1 nodes (0%) are attached to their parents as `dobj:caus`.

1 instances of `dobj:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `dobj:caus`: [kk-pos/VERB]()-[kk-pos/NOUN]() (1; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 dobj:caus	color:blue
1	Өліп	өл	VERB	v	Aspect=Perf|VerbForm=Coverb	4	ccomp	_	өл|v|iv|prcperf
2	бара	бар	AUX	vaux	Aspect=Impf|VerbForm=Coverb	1	aux	_	бар|vaux|prcimpf
3	жатырмын	жат	AUX	vaux	Number=Sing|Person=1|Tense=Prs	1	aux	_	жат|vaux|pres|p1|sg
4	десең	де	VERB	v	Mood=Cond|Number=Sing|Person=2|VerbForm=Trans	9	advcl	_	де|v|tv|gnacond|p2|sg
5	,	,	PUNCT	cm	_	9	punct	_	,|cm
6	қойға	қой	NOUN	n	Case=Dat	9	nmod	_	қой|n|dat
7	бір	бір	DET	det	PronType=Ind	8	det	_	бір|det|ind
8	тайын	тай	NOUN	n	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3	9	dobj:caus	_	тай|n|px3sp|acc
9	мінгізбейді	мінгіз	VERB	v	Number=Sing|Person=3|Polarity=Neg|Tense=Aor	0	root	_	мінгіз|v|tv|neg|aor|p3|sg
10	.	.	PUNCT	sent	_	9	punct	_	.|sent

~~~


