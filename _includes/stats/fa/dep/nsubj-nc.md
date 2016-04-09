

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is a language-specific subtype of [nsubj]().

22 nodes (0%) are attached to their parents as `nsubj:nc`.

18 instances of `nsubj:nc` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `nsubj:nc`: [fa-pos/NOUN]()-[fa-pos/PRON]() (9; 41% instances), [fa-pos/ADJ]()-[fa-pos/PRON]() (5; 23% instances), [fa-pos/ADV]()-[fa-pos/PRON]() (4; 18% instances), [fa-pos/VERB]()-[fa-pos/PRON]() (4; 18% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nsubj:nc	color:blue
1	احمد	_	NOUN	N_SING	Number=Sing	0	root	_	_
2	:	_	PUNCT	DELM	_	1	punct	_	_
3	ا	_	INTJ	INT	_	1	parataxis	_	_
4	…	_	PUNCT	DELM	_	1	punct	_	_
5	آره	_	INTJ	INT	_	9	parataxis	_	_
6	-	_	PUNCT	DELM	_	9	punct	_	_
7	یاد	_	NOUN	N_SING	Number=Sing	9	compound:lvc	_	_
8	م	_	PRON	PRO	Number=Sing|Person=1|PronType=Prs	7	nsubj:nc	_	_
9	رفته	_	VERB	V_PP	Number=Sing|Person=3|VerbForm=Part	1	parataxis	_	_
10	بود	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	9	aux	_	_
11	ها	_	NOUN	N_SING	Number=Sing	9	parataxis	_	_
12	.	_	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nsubj:nc	color:blue
1	مردم	_	NOUN	N_SING	Number=Sing	14	nsubj	_	_
2	هم	_	SCONJ	CON	_	14	advmod	_	_
3	حتی	_	ADV	ADV	_	14	advmod	_	_
4	اگر	_	SCONJ	CON	_	10	mark	_	_
5	بخواهی	_	VERB	V_SUB	Mood=Sub|Number=Sing|Person=2|Tense=Pres	10	aux	_	_
6	یک	_	NUM	NUM	NumType=Card	7	nummod	_	_
7	چیز	_	NOUN	N_SING	Number=Sing	10	dobj	_	_
8	غیرکلیشه	_	ADJ	ADJ	Degree=Pos	7	amod	_	_
9	نشان	_	NOUN	N_SING	Number=Sing	10	compound:lvc	_	_
10	بدهی	_	VERB	V_SUB	Mood=Sub|Number=Sing|Person=2|Tense=Pres	14	advcl	_	_
11	،	_	PUNCT	DELM	_	14	punct	_	_
12	بد	_	ADJ	ADJ	Degree=Pos	14	compound:lvc	_	_
13	شان	_	PRON	PRO	Number=Plur|Person=3|PronType=Prs	12	nsubj:nc	_	_
14	می‌آید	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	_
15	.	_	PUNCT	DELM	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:nc	color:blue
1	مادر	_	NOUN	N_SING	Number=Sing	0	root	_	_
2	:	_	PUNCT	DELM	_	1	punct	_	_
3	چ	_	ADV	ADV_I	PronType=Int	5	advcl	_	_
4	ت	_	PRON	PRO	Number=Sing|Person=2|PronType=Prs	5	nsubj:nc	_	_
5	ه	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	1	parataxis	_	_
6	احمد	_	NOUN	N_SING	Number=Sing	1	parataxis	_	_
7	؟	_	PUNCT	DELM	_	1	punct	_	_

~~~


