

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.
There are 1 language-specific subtypes of `cc`: [cc:preconj]().

7655 nodes (5%) are attached to their parents as `cc`.

7368 instances of `cc` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.05016329196604.

The following 11 pairs of parts of speech are connected with `cc`: [fa-pos/NOUN]()-[fa-pos/CONJ]() (4114; 54% instances), [fa-pos/VERB]()-[fa-pos/CONJ]() (2080; 27% instances), [fa-pos/ADJ]()-[fa-pos/CONJ]() (1102; 14% instances), [fa-pos/ADP]()-[fa-pos/CONJ]() (125; 2% instances), [fa-pos/NUM]()-[fa-pos/CONJ]() (108; 1% instances), [fa-pos/PRON]()-[fa-pos/CONJ]() (65; 1% instances), [fa-pos/ADV]()-[fa-pos/CONJ]() (55; 1% instances), [fa-pos/CONJ]()-[fa-pos/CONJ]() (3; 0% instances), [fa-pos/VERB]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/X]() (1; 0% instances), [fa-pos/X]()-[fa-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cc	color:blue
1	ادامه	_	NOUN	N_SING	Number=Sing	10	nsubj	_	_
2	این	_	DET	DET	_	3	det	_	_
3	وضعیت	_	NOUN	N_SING	Number=Sing	1	nmod:poss	_	_
4	موج‌آفرینی	_	NOUN	N_SING	Number=Sing	3	nmod:poss	_	_
5	و	_	CONJ	CON	_	4	cc	_	_
6	بحران‌سازی	_	NOUN	N_SING	Number=Sing	4	conj	_	_
7	به	_	ADP	P	_	8	case	_	_
8	صلاح	_	NOUN	N_SING	Number=Sing	10	nmod	_	_
9	کشور	_	NOUN	N_SING	Number=Sing	8	nmod:poss	_	_
10	نیست	_	VERB	V_PRS	Negative=Neg|Number=Sing|Person=3|Tense=Pres	0	root	_	_
11	.	_	PUNCT	DELM	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 cc	color:blue
1	اما	_	CONJ	CON	_	8	cc	_	_
2	اکثریت	_	NOUN	N_SING	Number=Sing	8	nsubj	_	_
3	مردم	_	NOUN	N_SING	Number=Sing	2	nmod:poss	_	_
4	،	_	PUNCT	DELM	_	2	punct	_	_
5	بویژه	_	ADV	ADV	_	6	advmod	_	_
6	بنی‌هاشم	_	NOUN	N_SING	Number=Sing	2	appos	_	_
7	مقاومت	_	NOUN	N_SING	Number=Sing	8	compound:lvc	_	_
8	می‌کنند	_	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	0	root	_	_
9	.	_	PUNCT	DELM	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 cc	color:blue
1	و	_	CONJ	CON	_	6	cc	_	_
2	تو	_	PRON	PRO	Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
3	به	_	ADP	P	_	4	case	_	_
4	خود	_	PRON	PRO	Number=Sing|Person=3|PronType=Prs|Reflex=Yes	6	nmod	_	_
5	ت	_	PRON	PRO	Number=Sing|Person=2|PronType=Prs	4	nmod:poss	_	_
6	بیناتر	_	ADJ	ADJ	Degree=Pos	0	root	_	_
7	ی	_	VERB	V_PRS	Number=Sing|Person=2|Tense=Pres	6	cop	_	_
8	!	_	PUNCT	DELM	_	6	punct	_	_

~~~


