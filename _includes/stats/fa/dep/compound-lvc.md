

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is a language-specific subtype of [compound]().
There are also 1 other language-specific subtypes of `compound`: [compound:prt]().

5475 nodes (4%) are attached to their parents as `compound:lvc`.

5466 instances of `compound:lvc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10301369863014.

The following 16 pairs of parts of speech are connected with `compound:lvc`: [fa-pos/VERB]()-[fa-pos/NOUN]() (4525; 83% instances), [fa-pos/VERB]()-[fa-pos/ADJ]() (548; 10% instances), [fa-pos/NOUN]()-[fa-pos/NOUN]() (208; 4% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (137; 3% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (25; 0% instances), [fa-pos/VERB]()-[fa-pos/PRON]() (12; 0% instances), [fa-pos/NOUN]()-[fa-pos/PRON]() (5; 0% instances), [fa-pos/VERB]()-[fa-pos/ADV]() (4; 0% instances), [fa-pos/NOUN]()-[fa-pos/VERB]() (2; 0% instances), [fa-pos/VERB]()-[fa-pos/ADP]() (2; 0% instances), [fa-pos/VERB]()-[fa-pos/CONJ]() (2; 0% instances), [fa-pos/ADP]()-[fa-pos/ADJ]() (1; 0% instances), [fa-pos/ADP]()-[fa-pos/NOUN]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/CONJ]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/SCONJ]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound:lvc	color:blue
1	تقاضاهای	_	NOUN	N_PL	Number=Plur	5	dobj	_	_
2	مردم	_	NOUN	N_SING	Number=Sing	1	nmod:poss	_	_
3	را	_	PART	CLITIC	_	1	case	_	_
4	تعدیل	_	NOUN	N_SING	Number=Sing	5	compound:lvc	_	_
5	می‌کنند	_	VERB	V_PRS	Number=Plur|Person=3|Tense=Pres	0	root	_	_
6	.	_	PUNCT	DELM	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 compound:lvc	color:blue
1	در	_	ADP	P	_	2	case	_	_
2	برخورد	_	NOUN	N_SING	Number=Sing	11	nmod	_	_
3	با	_	ADP	P	_	5	case	_	_
4	این	_	DET	DET	_	5	det	_	_
5	بحران‌آفرینی	_	NOUN	N_SING	Number=Sing	2	nmod	_	_
6	تنها	_	ADV	ADV	_	11	advmod	_	_
7	نمی‌توان	_	AUX	V_AUX	_	11	aux	_	_
8	به	_	ADP	P	_	9	case	_	_
9	تحلیل	_	NOUN	N_SING	Number=Sing	11	nmod	_	_
10	بسنده	_	ADJ	ADJ	Degree=Pos	11	compound:lvc	_	_
11	کرد	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	_
12	.	_	PUNCT	DELM	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound:lvc	color:blue
1	صدای	_	NOUN	N_SING	Number=Sing	10	nsubj	_	_
2	دست	_	NOUN	N_SING	Number=Sing	3	compound:lvc	_	_
3	زدن	_	NOUN	N_SING	Number=Sing	1	nmod:poss	_	_
4	بچه‌ها	_	NOUN	N_PL	Number=Plur	3	nmod:poss	_	_
5	،	_	PUNCT	DELM	_	10	punct	_	_
6	احمد	_	NOUN	N_SING	Number=Sing	10	dobj	_	_
7	را	را	PART	CLITIC	_	6	case	_	_
8	به	به	ADP	P	_	9	case	_	_
9	خود	_	PRON	PRO	Number=Sing|Person=3|PronType=Prs|Reflex=Yes	10	nmod	_	_
10	می‌آورد	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	0	root	_	_
11	.	_	PUNCT	DELM	_	10	punct	_	_

~~~


