

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Persian)

This relation is universal.

865 nodes (1%) are attached to their parents as `advcl`.

694 instances of `advcl` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.83468208092486.

The following 26 pairs of parts of speech are connected with `advcl`: [fa-pos/VERB]()-[fa-pos/VERB]() (283; 33% instances), [fa-pos/VERB]()-[fa-pos/ADJ]() (118; 14% instances), [fa-pos/VERB]()-[fa-pos/ADV]() (82; 9% instances), [fa-pos/ADJ]()-[fa-pos/VERB]() (66; 8% instances), [fa-pos/NOUN]()-[fa-pos/VERB]() (66; 8% instances), [fa-pos/VERB]()-[fa-pos/NOUN]() (59; 7% instances), [fa-pos/NOUN]()-[fa-pos/ADJ]() (56; 6% instances), [fa-pos/ADJ]()-[fa-pos/ADJ]() (29; 3% instances), [fa-pos/ADJ]()-[fa-pos/NOUN]() (19; 2% instances), [fa-pos/NOUN]()-[fa-pos/ADV]() (18; 2% instances), [fa-pos/ADJ]()-[fa-pos/ADV]() (16; 2% instances), [fa-pos/NOUN]()-[fa-pos/NOUN]() (14; 2% instances), [fa-pos/VERB]()-[fa-pos/CCONJ]() (8; 1% instances), [fa-pos/PRON]()-[fa-pos/VERB]() (6; 1% instances), [fa-pos/ADJ]()-[fa-pos/CCONJ]() (4; 0% instances), [fa-pos/ADV]()-[fa-pos/NOUN]() (4; 0% instances), [fa-pos/ADV]()-[fa-pos/ADJ]() (3; 0% instances), [fa-pos/ADV]()-[fa-pos/VERB]() (3; 0% instances), [fa-pos/ADP]()-[fa-pos/ADJ]() (2; 0% instances), [fa-pos/AUX]()-[fa-pos/NOUN]() (2; 0% instances), [fa-pos/PRON]()-[fa-pos/ADJ]() (2; 0% instances), [fa-pos/ADJ]()-[fa-pos/NUM]() (1; 0% instances), [fa-pos/AUX]()-[fa-pos/VERB]() (1; 0% instances), [fa-pos/NOUN]()-[fa-pos/CCONJ]() (1; 0% instances), [fa-pos/NUM]()-[fa-pos/ADJ]() (1; 0% instances), [fa-pos/VERB]()-[fa-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 16 advcl	color:blue
1	گفت	گفت#گو	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
2	:	:	PUNCT	DELM	_	1	punct	_	_
3	بر	بر	ADP	P	_	4	case	_	_
4	من	من	PRON	PRO	Number=Sing|Person=1|PronType=Prs	6	obl	_	_
5	روزی	روز	NOUN	N_SING	Number=Sing	6	nsubj	_	_
6	نمی‌گذرد	_	VERB	V_PRS	Number=Sing|Person=3|Tense=Pres	1	ccomp	_	_
7	مگر	مگر	ADV	ADV_I	PronType=Int	16	mark	_	_
8	آن	آن	PRON	PRO	Number=Sing|PronType=Dem	7	fixed	_	_
9	که	که	CCONJ	CON	_	7	fixed	_	_
10	علی	علی	NOUN	N_SING	Number=Sing	16	obj	_	SpaceAfter=No
11	)	)	PUNCT	DELM	_	10	punct	_	_
12	ع	ع	NOUN	N_SING	Number=Sing	10	dep	_	_
13	(	(	PUNCT	DELM	_	10	punct	_	SpaceAfter=No
14	را	را	PART	CLITIC	_	10	case	_	_
15	یاد	یاد	NOUN	N_SING	Number=Sing	16	compound:lvc	_	_
16	می‌کنم	_	VERB	V_PRS	Number=Sing|Person=1|Tense=Pres	6	advcl	_	SpaceAfter=No
17	.	.	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 advcl	color:blue
1	همه	همه	PRON	PRO	PronType=Tot	4	nsubj	_	_
2	این‌ها	این	PRON	PRO	Number=Plur|PronType=Dem	4	nsubj	_	_
3	خیلی	خیلی	ADV	ADV	_	4	advmod	_	_
4	خوب	خوب	ADJ	ADJ	Degree=Pos	0	root	_	_
5	بود	بود#باش	AUX	V_PA	Number=Sing|Person=3|Tense=Past	4	cop	_	SpaceAfter=No
6	،	،	PUNCT	DELM	_	4	punct	_	_
7	تا	تا	ADP	P	_	8	case	_	_
8	آخر	آخر	ADJ	ADJ	Degree=Pos	11	advcl	_	_
9	تماشاگر	تماشاگر	NOUN	N_SING	Number=Sing	11	obj	_	_
10	را	را	PART	CLITIC	_	9	case	_	_
11	می‌گرفت	گرفت#گیر	VERB	V_PA	Number=Sing|Person=3|Tense=Past	4	ccomp	_	SpaceAfter=No
12	.	.	PUNCT	DELM	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advcl	color:blue
1	بایستی	_	AUX	V_AUX	VerbForm=Inf	5	aux	_	_
2	گامی	گام	NOUN	N_SING	Number=Sing	5	obj	_	_
3	به	به	ADP	P	_	4	case	_	_
4	پیش	پیش	ADV	ADV_LOC	Case=Loc	5	advcl	_	_
5	نهاد	_	VERB	V_PA	Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
6	.	.	PUNCT	DELM	_	5	punct	_	_

~~~


