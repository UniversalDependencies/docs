

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

134 nodes (2%) are attached to their parents as `cc`.

132 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.42537313432836.

The following 9 pairs of parts of speech are connected with `cc`: [kk-pos/NOUN]()-[kk-pos/CONJ]() (60; 45% instances), [kk-pos/VERB]()-[kk-pos/CONJ]() (32; 24% instances), [kk-pos/ADJ]()-[kk-pos/CONJ]() (21; 16% instances), [kk-pos/PROPN]()-[kk-pos/CONJ]() (12; 9% instances), [kk-pos/VERB]()-[kk-pos/SCONJ]() (5; 4% instances), [kk-pos/ADJ]()-[kk-pos/SCONJ]() (1; 1% instances), [kk-pos/NOUN]()-[kk-pos/SCONJ]() (1; 1% instances), [kk-pos/NUM]()-[kk-pos/CONJ]() (1; 1% instances), [kk-pos/PUNCT]()-[kk-pos/CONJ]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc	color:blue
1	Орыс	орыс	NOUN	n	_	3	conj	_	nom
2	және	және	CONJ	cnjcoo	_	3	cc	_	_
3	қазақ	қазақ	NOUN	n	_	4	nmod:poss	_	nom
4	тілдерін	тіл	NOUN	n	_	5	dobj	_	pl|px3sp|acc
5	біледі	біл	VERB	v	_	0	root	_	tv|aor|p3|sg
6	.	.	PUNCT	sent	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Бірақ	бірақ	CONJ	cnjcoo	_	5	cc	_	_
2	мысығы	мысық	NOUN	n	_	5	nsubj	_	px3sp|nom
3	үйде	үй	NOUN	n	_	5	nmod	_	loc
4	,	,	PUNCT	cm	_	5	punct	_	_
5	ұйықтап	ұйықта	VERB	v	_	0	root	_	iv|prc_perf
6	жатыр	жат	AUX	vaux	_	5	aux	_	pres|p3|sg
7	.	.	PUNCT	sent	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	Ал	ал	CONJ	cnjcoo	_	4	cc	_	_
2	Айгүлдің	Айгүл	PROPN	np	_	3	nmod:poss	_	ant|f|gen
3	күшігі	күшік	NOUN	n	_	4	nsubj	_	px3sp|nom
4	_	бар	ADJ	adj	_	0	root	_	_
5	_	е	AUX	cop	_	4	cop	_	aor|p3|sg
6	_	ма	PART	qst	_	4	discourse	_	_
7	?	?	PUNCT	sent	_	4	punct	_	_

~~~


