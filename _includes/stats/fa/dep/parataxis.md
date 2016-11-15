

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.

208 nodes (0%) are attached to their parents as `parataxis`.

191 instances of `parataxis` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.19711538461539.

The following 15 pairs of parts of speech are connected with `parataxis`: [fa-pos/NOUN]()-[fa-pos/NOUN]() (89; 43% instances), [fa-pos/NOUN]()-[fa-pos/VERB]() (52; 25% instances), [fa-pos/VERB]()-[fa-pos/NOUN]() (17; 8% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (11; 5% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (11; 5% instances), [fa-pos/NOUN]()-[fa-pos/INTJ]() (9; 4% instances), [fa-pos/VERB]()-[fa-pos/VERB]() (6; 3% instances), [fa-pos/ADJ]()-[fa-pos/VERB]() (3; 1% instances), [fa-pos/NOUN]()-[fa-pos/CONJ]() (3; 1% instances), [fa-pos/VERB]()-[fa-pos/INTJ]() (2; 1% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (1; 0% instances), [fa-pos/ADV]()-[fa-pos/INTJ]() (1; 0% instances), [fa-pos/INTJ]()-[fa-pos/NOUN]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/DET]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis	color:blue
1	لندن	لندن	NOUN	N_SING	Number=Sing	0	root	_	_
2	-	-	PUNCT	DELM	_	1	punct	_	_
3	ایرنا	ایرنا	NOUN	N_SING	Number=Sing	1	parataxis	_	_
4	:	:	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	مادر	مادر	NOUN	N_SING	Number=Sing	0	root	_	_
2	:	:	PUNCT	DELM	_	1	punct	_	_
3	احمد	احمد	NOUN	N_SING	Number=Sing	1	vocative	_	_
4	پا	پا	NOUN	N_SING	Number=Sing	5	compound:lvc	_	_
5	شو	_	VERB	V_IMP	Mood=Imp|Number=Sing|Person=2	1	parataxis	_	_
6	،	،	PUNCT	DELM	_	1	punct	_	_
7	مدرسه	مدرسه	NOUN	N_SING	Number=Sing	9	nsubj	_	_
8	ات	تو	PRON	PRO	Number=Sing|Person=2|PronType=Prs	7	nmod:poss	_	_
9	دیر	دیر	ADV	ADV	_	1	parataxis	_	_
10	شد	کرد#کن	VERB	V_PA	Number=Sing|Person=3|Tense=Past	9	cop	_	_
11	.	.	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 parataxis	color:blue
1	مادر	مادر	NOUN	N_SING	Number=Sing	4	parataxis	_	_
2	!	!	PUNCT	DELM	_	4	punct	_	_
3	پا	پا	NOUN	N_SING	Number=Sing	4	compound:lvc	_	_
4	شو	_	VERB	V_IMP	Mood=Imp|Number=Sing|Person=2	0	root	_	_
5	!	!	PUNCT	DELM	_	4	punct	_	_

~~~


