

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.
There are 1 language-specific subtypes of `dobj`: [dobj:caus]().

334 nodes (5%) are attached to their parents as `dobj`.

332 instances of `dobj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.53293413173653.

The following 8 pairs of parts of speech are connected with `dobj`: [kk-pos/VERB]()-[kk-pos/NOUN]() (279; 84% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (32; 10% instances), [kk-pos/VERB]()-[kk-pos/PROPN]() (11; 3% instances), [kk-pos/VERB]()-[kk-pos/ADJ]() (7; 2% instances), [kk-pos/VERB]()-[kk-pos/NUM]() (2; 1% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/NOUN]()-[kk-pos/PRON]() (1; 0% instances), [kk-pos/PRON]()-[kk-pos/AUX]() (1; 0% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 dobj	color:blue
1	Анау	анау	DET	det	PronType=Dem	2	det	_	анау|det|dem
2	жігіттен	жігіт	NOUN	n	Case=Abl	7	nmod	_	жігіт|n|abl
3	сені	сен	PRON	prn	Case=Acc|Number=Sing|Person=2|PronType=Prs	5	dobj	_	сен|prn|pers|p2|sg|acc
4	маған	мен	PRON	prn	Case=Dat|Number=Sing|Person=1|PronType=Prs	5	nmod	_	мен|prn|pers|p1|sg|dat
5	бер	бер	VERB	v	Mood=Imper|Number=Sing|Person=2	6	ccomp	_	бер|v|tv|imp|p2|sg
6	деп	де	VERB	v	Aspect=Perf|VerbForm=Trans	7	advcl	_	де|v|tv|gnaperf
7	сұраған	сұра	VERB	v	Number=Sing|Person=3|Tense=Past	0	root	_	сұра|v|tv|past|p3|sg
8	.	.	PUNCT	sent	_	7	punct	_	.|sent

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


