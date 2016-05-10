

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

251 nodes (5%) are attached to their parents as `dobj`.

250 instances of `dobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.54581673306773.

The following 8 pairs of parts of speech are connected with `dobj`: [kk-pos/VERB]()-[kk-pos/NOUN]() (217; 86% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (16; 6% instances), [kk-pos/VERB]()-[kk-pos/PROPN]() (10; 4% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (4; 2% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/NOUN]()-[kk-pos/PRON]() (1; 0% instances), [kk-pos/PRON]()-[kk-pos/VERB]() (1; 0% instances), [kk-pos/VERB]()-[kk-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 dobj	color:blue
1	Ауылда	ауыл	NOUN	n	_	6	nmod	_	loc
2	клуб	клуб	NOUN	n	_	3	nmod:poss	_	nom
3	директоры	директор	NOUN	n	_	6	advcl	_	px3sp|nom
4	болып	бол	VERB	v	_	3	cop	_	iv|gna_perf
5	қызмет	қызмет	NOUN	n	_	6	dobj	_	nom
6	атқарды	атқар	VERB	v	_	0	root	_	tv|ifi|p3|sg
7	.	.	PUNCT	sent	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 dobj	color:blue
1	Ол	ол	PRON	prn	_	14	nsubj	_	pers|p3|sg|nom
2	"	"	PUNCT	sent	_	9	punct	_	_
3	Азамат	Азамат	PROPN	np	_	6	nsubj	_	ant|m|nom
4	қай	қай	DET	det	_	5	det	_	itg
5	жерге	жер	NOUN	n	_	6	nmod	_	dat
6	кетті	кет	VERB	v	_	9	parataxis	_	iv|ifi|p3|sg
7	?	?	PUNCT	sent	_	6	punct	_	_
8	Оны	ол	PRON	prn	_	9	dobj	_	pers|p3|sg|acc
9	_	көр	VERB	v	_	13	ccomp	_	tv|ifi|p2|pl
10	_	ма	PART	qst	_	9	discourse	_	_
11	?	?	PUNCT	sent	_	9	punct	_	_
12	"	"	PUNCT	sent	_	9	punct	_	_
13	деп	де	VERB	v	_	14	advcl	_	tv|gna_perf
14	іздеп	ізде	VERB	v	_	0	root	_	tv|prc_perf
15	жатыр	жат	AUX	vaux	_	14	aux	_	pres|p3|sg
16	.	.	PUNCT	sent	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dobj	color:blue
1	Қожанасырды	Қожанасыр	PROPN	np	_	3	dobj	_	ant|m|acc
2	ешкім	ешкім	PRON	prn	_	3	nsubj	_	neg|nom
3	елемепті	еле	VERB	v	_	0	root	_	tv|neg|ifi|evid|p3|sg
4	.	.	PUNCT	sent	_	3	punct	_	_

~~~


