

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

231 nodes (4%) are attached to their parents as `cop`.

231 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02597402597403.

The following 13 pairs of parts of speech are connected with `cop`: [kk-pos/ADJ]()-[kk-pos/AUX]() (78; 34% instances), [kk-pos/NOUN]()-[kk-pos/AUX]() (59; 26% instances), [kk-pos/NOUN]()-[kk-pos/VERB]() (34; 15% instances), [kk-pos/PRON]()-[kk-pos/AUX]() (16; 7% instances), [kk-pos/ADJ]()-[kk-pos/VERB]() (14; 6% instances), [kk-pos/ADV]()-[kk-pos/AUX]() (10; 4% instances), [kk-pos/VERB]()-[kk-pos/AUX]() (5; 2% instances), [kk-pos/PRON]()-[kk-pos/VERB]() (4; 2% instances), [kk-pos/PROPN]()-[kk-pos/AUX]() (3; 1% instances), [kk-pos/VERB]()-[kk-pos/VERB]() (3; 1% instances), [kk-pos/NUM]()-[kk-pos/AUX]() (2; 1% instances), [kk-pos/NUM]()-[kk-pos/VERB]() (2; 1% instances), [kk-pos/PROPN]()-[kk-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	Жер	жер	NOUN	n	_	2	nmod:poss	_	nom
2	беті	бет	NOUN	n	_	3	nmod:poss	_	px3sp|nom
3	суы	су	NOUN	n	_	4	nsubj	_	px3sp|nom
4	_	аз	ADJ	adj	_	0	root	_	_
5	_	е	AUX	cop	_	4	cop	_	aor|p3|sg
6	.	.	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cop	color:blue
1	Иран	Иран	PROPN	np	_	4	nsubj	_	top|nom
2	—	—	PUNCT	guio	_	1	punct	_	_
3	діни	діни	ADJ	adj	_	4	amod	_	_
4	_	мемлекет	NOUN	n	_	0	root	_	nom
5	_	е	AUX	cop	_	4	cop	_	aor|p3|sg
6	.	.	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 cop	color:blue
1	Ауылда	ауыл	NOUN	n	_	6	nmod	_	loc
2	клуб	клуб	NOUN	n	_	3	nmod:poss	_	nom
3	директоры	директор	NOUN	n	_	6	advcl	_	px3sp|nom
4	болып	бол	VERB	v	_	3	cop	_	iv|gna_perf
5	қызмет	қызмет	NOUN	n	_	6	dobj	_	nom
6	атқарды	атқар	VERB	v	_	0	root	_	tv|ifi|p3|sg
7	.	.	PUNCT	sent	_	6	punct	_	_

~~~


