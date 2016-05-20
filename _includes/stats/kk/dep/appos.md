

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

48 nodes (1%) are attached to their parents as `appos`.

41 instances of `appos` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.04166666666667.

The following 12 pairs of parts of speech are connected with `appos`: [kk-pos/NOUN]()-[kk-pos/NOUN]() (15; 31% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (8; 17% instances), [kk-pos/NOUN]()-[kk-pos/PROPN]() (7; 15% instances), [kk-pos/PROPN]()-[kk-pos/NOUN]() (5; 10% instances), [kk-pos/PROPN]()-[kk-pos/NUM]() (4; 8% instances), [kk-pos/PROPN]()-[kk-pos/PROPN]() (3; 6% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (1; 2% instances), [kk-pos/NUM]()-[kk-pos/NOUN]() (1; 2% instances), [kk-pos/PRON]()-[kk-pos/NOUN]() (1; 2% instances), [kk-pos/PRON]()-[kk-pos/NUM]() (1; 2% instances), [kk-pos/PRON]()-[kk-pos/VERB]() (1; 2% instances), [kk-pos/VERB]()-[kk-pos/PROPN]() (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 appos	color:blue
1	11	11	NUM	num	_	2	amod	_	_
2	ғасырда	ғасыр	NOUN	n	_	11	nmod	_	loc
3	Иранға	Иран	PROPN	np	_	11	nmod	_	top|dat
4	түрік	түрік	NOUN	n	_	6	compound	_	attr
5	-	-	PUNCT	guio	_	6	punct	_	_
6	оғыздар	оғыз	NOUN	n	_	11	nsubj	_	pl|nom
7	(	(	PUNCT	lpar	_	8	punct	_	_
8	салжұқ	салжұқ	NOUN	n	_	6	appos	_	nom
9	)	)	PUNCT	rpar	_	8	punct	_	_
10	басып	бас	VERB	v	_	11	advcl	_	iv|gna_perf
11	кіре	кір	VERB	v	_	0	root	_	iv|prc_impf
12	бастады	баста	AUX	vaux	_	11	aux	_	ifi|p3|pl
13	.	.	PUNCT	sent	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 appos	color:blue
1	Халқы	халық	NOUN	n	_	4	nsubj	_	px3sp|nom
2	65,2	65,2	NUM	num	_	3	nummod	_	_
3	млн.	млн.	NOUN	abbr	_	4	nummod	_	_
4	_	адам	NOUN	n	_	0	root	_	nom
5	_	е	VERB	cop	_	4	cop	_	aor|p3|sg
6	(	(	PUNCT	lpar	_	7	punct	_	_
7	1999	1999	NUM	num	_	4	appos	_	_
8	)	)	PUNCT	rpar	_	7	punct	_	_
9	.	.	PUNCT	sent	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 appos	color:blue
1	Қазақстан	Қазақстан	PROPN	np	_	2	nmod:poss	_	top|nom
2	Президенті	президент	NOUN	n	_	14	nsubj	_	px3sp|nom
3	Нұрсұлтан	Нұрсұлтан	PROPN	np	_	4	name	_	ant|m|attr
4	Назарбаев	Назарбаев	PROPN	np	_	2	appos	_	cog|m|nom
5	екі	екі	NUM	num	_	6	nummod	_	_
6	рет	рет	NOUN	n	_	13	nmod	_	nom
7	(	(	PUNCT	lpar	_	10	punct	_	_
8	1992	1992	NUM	num	_	10	conj	_	_
9	;	;	PUNCT	sent	_	10	punct	_	_
10	1996	1996	NUM	num	_	6	appos	_	_
11	)	)	PUNCT	rpar	_	10	punct	_	_
12	Иранда	Иран	PROPN	np	_	13	nmod	_	top|loc
13	болып	бол	VERB	v	_	14	advcl	_	iv|prc_perf
14	қайтты	қайт	VERB	v	_	0	root	_	iv|ifi|p3|sg
15	.	.	PUNCT	sent	_	14	punct	_	_

~~~


