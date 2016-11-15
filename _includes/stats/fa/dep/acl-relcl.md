

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is a language-specific subtype of [acl]().

1424 nodes (1%) are attached to their parents as `acl:relcl`.

1423 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.90098314606742.

The following 23 pairs of parts of speech are connected with `acl:relcl`: [fa-pos/NOUN]()-[fa-pos/VERB]() (830; 58% instances), [fa-pos/NOUN]()-[fa-pos/NOUN]() (221; 16% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (200; 14% instances), [fa-pos/PRON]()-[fa-pos/VERB]() (87; 6% instances), [fa-pos/PRON]()-[fa-pos/NOUN]() (30; 2% instances), [fa-pos/ADV]()-[fa-pos/VERB]() (12; 1% instances), [fa-pos/PRON]()-[fa-pos/ADJ]() (9; 1% instances), [fa-pos/VERB]()-[fa-pos/VERB]() (7; 0% instances), [fa-pos/ADV]()-[fa-pos/ADJ]() (6; 0% instances), [fa-pos/ADJ]()-[fa-pos/VERB]() (4; 0% instances), [fa-pos/ADV]()-[fa-pos/NOUN]() (3; 0% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (2; 0% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (2; 0% instances), [fa-pos/NOUN]()-[fa-pos/NUM]() (2; 0% instances), [fa-pos/ADP]()-[fa-pos/ADJ]() (1; 0% instances), [fa-pos/ADP]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/ADV]()-[fa-pos/AUX]() (1; 0% instances), [fa-pos/DET]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/AUX]() (1; 0% instances), [fa-pos/NUM]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/ADV]() (1; 0% instances), [fa-pos/PRON]()-[fa-pos/NUM]() (1; 0% instances), [fa-pos/X]()-[fa-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl:relcl	color:blue
1	کسی	کس	NOUN	N_SING	Number=Sing	5	nsubj	_	_
2	که	که	SCONJ	CON	_	4	mark	_	_
3	انذار	_	NOUN	N_SING	Number=Sing	4	compound:lvc	_	_
4	کند	کرد#کن	VERB	V_SUB	Mood=Sub|Number=Sing|Person=3|Tense=Pres	1	acl:relcl	_	_
5	معذور	_	ADJ	ADJ	Degree=Pos	0	root	_	_
6	است	است	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	5	cop	_	_
7	.	.	PUNCT	DELM	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	فکرشو	_	NOUN	N_SING	Number=Sing	2	dobj	_	_
2	نکن	کرد#کن	VERB	V_SUB	Mood=Sub	0	root	_	_
3	،	،	PUNCT	DELM	_	2	punct	_	_
4	هفت	هفت	NOUN	N_SING	Number=Sing	5	nummod	_	_
5	ساعت	ساعت	NOUN	N_SING	Number=Sing	2	nsubj	_	_
6	که	که	SCONJ	CON	_	7	mark	_	_
7	چیزی	چیز	NOUN	N_SING	Number=Sing	5	acl:relcl	_	_
8	نیست	هست	VERB	V_PRS	Negative=Neg|Number=Sing|Person=3|Tense=Pres	7	cop	_	_
9	.	.	PUNCT	DELM	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 acl:relcl	color:blue
1	احمد	احمد	NOUN	N_SING	Number=Sing	6	nsubj	_	_
2	با	با	ADP	P	_	3	case	_	_
3	شنیدن	شنیدن	NOUN	N_SING	Number=Sing	6	nmod	_	_
4	صدا	صدا	NOUN	N_SING	Number=Sing	3	nmod:poss	_	_
5	سر	سر	NOUN	N_SING	Number=Sing	6	compound:lvc	_	_
6	برمی‌دارد	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	_
7	و	و	CONJ	CON	_	6	cc	_	_
8	دست	دست	NOUN	N_SING	Number=Sing	14	dobj	_	_
9	پدر	پدر	NOUN	N_SING	Number=Sing	8	nmod:poss	_	_
10	را	را	PART	CLITIC	_	8	case	_	_
11	که	که	SCONJ	CON	_	12	mark	_	_
12	دراز	دراز	ADJ	ADJ	Degree=Pos	8	acl:relcl	_	_
13	شده	کرد#کن	VERB	V_PP	Number=Sing|Person=3|VerbForm=Part	12	cop	_	_
14	می‌بیند	دید#بین	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	6	conj	_	_
15	.	.	PUNCT	DELM	_	6	punct	_	_

~~~


