

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

317 nodes (6%) are attached to their parents as `amod`.

313 instances of `amod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29337539432177.

The following 12 pairs of parts of speech are connected with `amod`: [kk-pos/NOUN]()-[kk-pos/ADJ]() (190; 60% instances), [kk-pos/NOUN]()-[kk-pos/NUM]() (86; 27% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (12; 4% instances), [kk-pos/PROPN]()-[kk-pos/ADJ]() (12; 4% instances), [kk-pos/NOUN]()-[kk-pos/ADV]() (5; 2% instances), [kk-pos/ADJ]()-[kk-pos/ADJ]() (3; 1% instances), [kk-pos/ADJ]()-[kk-pos/NUM]() (3; 1% instances), [kk-pos/NOUN]()-[kk-pos/PROPN]() (2; 1% instances), [kk-pos/PRON]()-[kk-pos/ADJ]() (1; 0% instances), [kk-pos/PROPN]()-[kk-pos/ADV]() (1; 0% instances), [kk-pos/PROPN]()-[kk-pos/NOUN]() (1; 0% instances), [kk-pos/PROPN]()-[kk-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Бастауыш	бастауыш	ADJ	adj	_	2	amod	_	_
2	білім	білім	NOUN	n	_	4	nsubj	_	nom
3	баршаға	барша	PRON	prn	_	4	nmod	_	def|dat
4	міндетті	міндетті	ADJ	adj	_	6	nsubj	_	_
5	болуы	бол	VERB	v	_	4	cop	_	iv|ger|px3sp|nom
6	_	тиіс	ADJ	adj	_	0	root	_	_
7	_	е	VERB	cop	_	6	cop	_	aor|p3|sg
8	.	.	PUNCT	sent	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 amod	color:blue
1	Елдегі	ел	NOUN	n	_	5	amod	_	loc|attr
2	саяси	саяси	ADJ	adj	_	4	conj	_	_
3	және	және	CONJ	cnjcoo	_	4	cc	_	_
4	діни	діни	ADJ	adj	_	5	amod	_	_
5	билік	билік	NOUN	n	_	10	nsubj	_	nom
6	аятолла	аятолла	NOUN	n	_	9	compound	_	attr
7	Сейд	Сейд	PROPN	np	_	9	name	_	ant|m|attr
8	Әли	Әли	PROPN	np	_	9	name	_	ant|m|attr
9	Хаменеидің	Хаменеи	PROPN	np	_	10	nmod:poss	_	cog|mf|gen
10	_	қол	NOUN	n	_	0	root	_	px3sp|loc
11	_	е	VERB	cop	_	10	cop	_	aor|p3|sg
12	.	.	PUNCT	sent	_	10	punct	_	_

~~~


