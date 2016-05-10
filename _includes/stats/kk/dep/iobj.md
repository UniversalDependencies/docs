

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Kazakh)

This relation is universal.

16 nodes (0%) are attached to their parents as `iobj`.

16 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.9375.

The following 8 pairs of parts of speech are connected with `iobj`: [kk-pos/VERB]()-[kk-pos/NOUN]() (6; 38% instances), [kk-pos/ADV]()-[kk-pos/NOUN]() (2; 13% instances), [kk-pos/NOUN]()-[kk-pos/NOUN]() (2; 13% instances), [kk-pos/VERB]()-[kk-pos/PROPN]() (2; 13% instances), [kk-pos/ADJ]()-[kk-pos/NOUN]() (1; 6% instances), [kk-pos/ADJ]()-[kk-pos/PROPN]() (1; 6% instances), [kk-pos/AUX]()-[kk-pos/NOUN]() (1; 6% instances), [kk-pos/VERB]()-[kk-pos/PRON]() (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 iobj	color:blue
1	Мені	мен	PRON	prn	_	3	dobj	_	_
2	бұзақы	бұзақы	NOUN	n	_	3	compound	_	_
3	_	адам	NOUN	n	_	5	ccomp	_	_
4	_	е	VERB	cop	_	3	cop	_	_
5	деп	де	VERB	v	_	9	advcl	_	_
6	,	,	PUNCT	cm	_	5	punct	_	_
7	сөйтіп	сөйт	VERB	v	_	9	advcl	_	_
8	болыстыққа	болыстық	NOUN	n	_	9	iobj	_	_
9	сайламай	сайла	VERB	v	_	0	root	_	_
10	қойғаны	қой	AUX	aux	_	9	aux	_	_
11	.	.	PUNCT	sent	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 iobj	color:blue
1	19	19	NUM	num	_	2	amod	_	_
2	ғасырдың	ғасыр	NOUN	n	_	5	nmod:poss	_	gen
3	2	2	NUM	num	_	5	amod	_	_
4	-	-	PUNCT	guio	_	5	punct	_	_
5	жартысынан	жарты	ADJ	adj	_	11	nmod	_	subst|px3sp|abl
6	Иран	Иран	PROPN	np	_	7	nmod:poss	_	top|nom
7	музыкасына	музыка	NOUN	n	_	11	iobj	_	px3sp|dat
8	еуропалық	еуропалық	ADJ	adj	_	10	amod	_	_
9	музыка	музыка	NOUN	n	_	10	nmod:poss	_	nom
10	мәдениеті	мәдениет	NOUN	n	_	11	nsubj	_	px3sp|nom
11	әсер	әсер	NOUN	n	_	12	dobj	_	nom
12	етті	ет	VERB	v	_	0	root	_	tv|ifi|p3|sg
13	.	.	PUNCT	sent	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 iobj	color:blue
1	Балшабайға	Балшабай	PROPN	np	_	2	iobj	_	_
2	жазылған	жаз	VERB	v	_	3	acl	_	_
3	кісіні	кісі	NOUN	n	_	5	dobj	_	_
4	ауылнай	ауылнай	NOUN	n	_	5	nmod	_	_
5	қылады	қыл	VERB	v	_	19	conj	_	_
6	,	,	PUNCT	cm	_	19	punct	_	_
7	болыс	болыс	NOUN	n	_	8	nmod	_	_
8	қояды	қой	VERB	v	_	19	conj	_	_
9	,	,	PUNCT	cm	_	19	punct	_	_
10	қолына	қол	NOUN	n	_	12	nmod	_	_
11	мылтық	мылтық	NOUN	n	_	12	dobj	_	_
12	береді	бер	VERB	v	_	19	conj	_	_
13	,	,	PUNCT	cm	_	19	punct	_	_
14	"	"	PUNCT	sent	_	15	punct	_	_
15	панимаешь	панимаешь	INTJ	ij	_	19	discourse	_	_
16	"	"	PUNCT	sent	_	15	punct	_	_
17	,	,	PUNCT	cm	_	15	punct	_	_
18	мылтық	мылтық	NOUN	n	_	19	dobj	_	_
19	береді	бер	VERB	v	_	0	root	_	_
20	.	.	PUNCT	sent	_	19	punct	_	_

~~~


