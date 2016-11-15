

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

3 nodes (0%) are attached to their parents as `dep`.

2 instances of `dep` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `dep`: [kk-pos/NUM]()-[kk-pos/SYM]() (2; 67% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (1; 33% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dep	color:blue
1	Мемлекеттік	мемлекеттік	ADJ	adj	_	2	amod	_	_
2	кірістің	кіріс	NOUN	n	_	7	remnant	_	gen
3	1	1	NUM	num	_	8	remnant	_	_
4	/	/	SYM	sym	_	3	dep	_	_
5	3	3	NUM	num	_	3	nmod	_	_
6	және	және	CONJ	cnjcoo	_	7	cc	_	_
7	экспорттың	экспорт	NOUN	n	_	8	nmod:poss	_	gen
8	90%-ына	90	NUM	num	_	9	nmod	_	percent|px3sp|dat
9	жуығы	жуық	ADJ	adj	_	12	nsubj	_	subst|px3sp|nom
10	осы	осы	DET	det	_	11	det	_	dem
11	салалардан	сала	NOUN	n	_	12	nmod	_	pl|abl
12	алынады	ал	VERB	v	_	0	root	_	tv|pass|aor|p3|sg
13	.	.	PUNCT	sent	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 dep	color:blue
1	Бірақ	бірақ	CONJ	cnjcoo	_	6	cc	_	бірақ|cnjcoo
2	енді	енді	ADV	adv	_	6	advmod	_	енді|adv
3	қайта	қайт	VERB	v	Aspect=Impf|VerbForm=Trans	4	dep	_	қайт|v|iv|gnaimpf
4	сүюге	сүй	VERB	v	Case=Dat|VerbForm=Ger	6	ccomp	_	сүй|v|tv|ger|dat
5	қызға	қыз	NOUN	n	Case=Dat	6	nmod	_	қыз|n|dat
6	ұмтылмады	ұмтыл	VERB	v	Number=Sing|Person=3|Polarity=Neg|Tense=Past	0	root	_	ұмтыл|v|iv|neg|ifi|p3|sg
7	.	.	PUNCT	sent	_	6	punct	_	.|sent

~~~


