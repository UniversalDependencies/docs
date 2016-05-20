

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

125 nodes (0%) are attached to their parents as `foreign`.

125 instances of `foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.928.

The following 17 pairs of parts of speech are connected with `foreign`: [et-pos/PROPN]()-[et-pos/PROPN]() (44; 35% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (26; 21% instances), [et-pos/X]()-[et-pos/X]() (20; 16% instances), [et-pos/VERB]()-[et-pos/ADV]() (6; 5% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (5; 4% instances), [et-pos/VERB]()-[et-pos/NOUN]() (4; 3% instances), [et-pos/CONJ]()-[et-pos/PROPN]() (3; 2% instances), [et-pos/NOUN]()-[et-pos/X]() (3; 2% instances), [et-pos/X]()-[et-pos/NOUN]() (3; 2% instances), [et-pos/PROPN]()-[et-pos/CONJ]() (2; 2% instances), [et-pos/VERB]()-[et-pos/PROPN]() (2; 2% instances), [et-pos/X]()-[et-pos/ADV]() (2; 2% instances), [et-pos/INTJ]()-[et-pos/X]() (1; 1% instances), [et-pos/NOUN]()-[et-pos/ADV]() (1; 1% instances), [et-pos/NOUN]()-[et-pos/PRON]() (1; 1% instances), [et-pos/PROPN]()-[et-pos/VERB]() (1; 1% instances), [et-pos/PROPN]()-[et-pos/X]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 foreign	color:blue
1	Võit	võit	NOUN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	tuli	tulema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	filmiga	film	NOUN	S	Case=Com|Number=Sing	2	nmod	_	_
4	"	"	PUNCT	Z	_	7	punct	_	_
5	Dead	Dea	PROPN	S	Case=Nom|Number=Plur	3	nmod	_	_
6	Man	Man	PROPN	S	Case=Nom|Number=Sing	5	foreign	_	_
7	Walking	Walking	PROPN	S	Case=Nom|Number=Sing	5	foreign	_	_
8	"	"	PUNCT	Z	_	7	punct	_	_
9	(	(	PUNCT	Z	_	10	punct	_	_
10	1995	1995	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	7	nummod	_	_
11	)	)	PUNCT	Z	_	10	punct	_	_
12	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 foreign	color:blue
1	"	"	PUNCT	Z	_	2	punct	_	_
2	V	V	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
3	naših	naših	NOUN	S	Case=Nom|Number=Sing	2	foreign	_	_
4	karmanah	karmanah	NOUN	S	Case=Nom|Number=Sing	2	foreign	_	_
5	tolko	tolko	NOUN	S	Case=Gen|Number=Sing	2	foreign	_	_
6	põl	põl	NOUN	S	Case=Nom|Number=Sing	2	foreign	_	_
7	ot	ot	X	Y	Abbr=Yes	2	foreign	_	_
8	travõ3	travõ3	X	Y	Abbr=Yes	2	foreign	_	_
9	.	.	PUNCT	Z	_	2	punct	_	_
10	"	"	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 foreign	color:blue
1	"	"	PUNCT	Z	_	8	punct	_	_
2	You	You	X	T	Foreign=Yes	8	advcl	_	_
3	are	are	X	T	Foreign=Yes	2	foreign	_	_
4	so	so	ADV	T	Foreign=Yes	2	foreign	_	_
5	beautiful	beautiful	X	T	Foreign=Yes	2	foreign	_	_
6	!	!	PUNCT	Z	_	8	punct	_	_
7	"	"	PUNCT	Z	_	8	punct	_	_
8	proovis	proovima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	Jan	Jan	PROPN	S	Case=Nom|Number=Sing	8	nsubj	_	_
10	.	.	PUNCT	Z	_	8	punct	_	_

~~~


