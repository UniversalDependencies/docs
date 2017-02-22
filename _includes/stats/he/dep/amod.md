

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is universal.

6932 nodes (5%) are attached to their parents as `amod`.

6932 instances of `amod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.80164454702827.

The following 23 pairs of parts of speech are connected with `amod`: [he-pos/NOUN]()-[he-pos/ADJ]() (5849; 84% instances), [he-pos/NOUN]()-[he-pos/PRON]() (525; 8% instances), [he-pos/NOUN]()-[he-pos/VERB]() (191; 3% instances), [he-pos/NOUN]()-[he-pos/NUM]() (176; 3% instances), [he-pos/PROPN]()-[he-pos/ADJ]() (52; 1% instances), [he-pos/NOUN]()-[he-pos/NOUN]() (50; 1% instances), [he-pos/VERB]()-[he-pos/ADJ]() (26; 0% instances), [he-pos/NUM]()-[he-pos/NUM]() (13; 0% instances), [he-pos/ADJ]()-[he-pos/ADJ]() (12; 0% instances), [he-pos/NOUN]()-[he-pos/ADV]() (11; 0% instances), [he-pos/X]()-[he-pos/ADJ]() (7; 0% instances), [he-pos/NUM]()-[he-pos/ADJ]() (4; 0% instances), [he-pos/NOUN]()-[he-pos/DET]() (3; 0% instances), [he-pos/ADJ]()-[he-pos/NOUN]() (2; 0% instances), [he-pos/NOUN]()-[he-pos/PROPN]() (2; 0% instances), [he-pos/PROPN]()-[he-pos/VERB]() (2; 0% instances), [he-pos/ADJ]()-[he-pos/VERB]() (1; 0% instances), [he-pos/DET]()-[he-pos/ADJ]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/SCONJ]() (1; 0% instances), [he-pos/NUM]()-[he-pos/PRON]() (1; 0% instances), [he-pos/PRON]()-[he-pos/ADJ]() (1; 0% instances), [he-pos/PROPN]()-[he-pos/NOUN]() (1; 0% instances), [he-pos/PUNCT]()-[he-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 amod	color:blue
1	ה	ה	DET	DET	PronType=Art	2	det:def	_	_
2	מוח	מוח	NOUN	NOUN	Gender=Masc|Number=Sing	3	nsubj	_	_
3	מתפלץ	התפלץ	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
4	לא	לא	ADV	ADV	Polarity=Neg	5	advmod	_	_
5	רק	רק	ADV	ADV	_	6	advmod	_	_
6	מ	מ	ADP	ADP	_	8	case	_	_
7	ה	ה	DET	DET	PronType=Art	8	det:def	_	_
8	תופעה	תופעה	NOUN	NOUN	Gender=Fem|Number=Sing	3	obl	_	_
9	ה	ה	DET	DET	PronType=Art	10	det:def	_	_
10	מבישה	מביש	ADJ	ADJ	Gender=Fem|Number=Sing	8	amod	_	_
11	אלא	אלא	CCONJ	CCONJ	_	14	cc	_	_
12	גם	גם	ADV	ADV	_	13	advmod	_	_
13	מ	מ	ADP	ADP	_	14	case	_	_
14	דרכי	דרך	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Plur	8	conj	_	_
15	ה	ה	DET	DET	PronType=Art	16	det:def	_	_
16	הערמה	הערמה	NOUN	NOUN	Gender=Fem|Number=Sing	14	compound:smixut	_	_
17	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	אבקשכם	_	VERB	VERB	_	0	root	_	_
2	_אתם	הוא	PRON	PRON	Case=Acc|Gender=Masc|Number=Plur|Person=2|PronType=Prs	1	obj	_	_
3	לשלוח	שלח	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	1	xcomp	_	_
4	אלי	אל	ADP	ADP	_	5	case	_	_
5	_אני	הוא	PRON	PRON	Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	3	obl	_	_
6	חומר	חומר	NOUN	NOUN	Gender=Masc|Number=Sing	3	obj	_	_
7	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	amod	_	_
8	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 amod	color:blue
1	ערוך	ערך	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Mood=Imp|Number=Sing|Person=2|Voice=Act	0	root	_	_
2	בדיקה	בדיקה	NOUN	NOUN	Gender=Fem|Number=Sing	1	obj	_	_
3	מחודשת	מחודש	ADJ	ADJ	Gender=Fem|Number=Sing	2	amod	_	_
4	,	_	PUNCT	PUNCT	_	2	punct	_	_
5	נוקבת	נקב	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Act	2	amod	_	_
6	ו	ו	CCONJ	CCONJ	_	7	cc	_	_
7	קטלנית	קטלני	ADJ	ADJ	Gender=Fem|Number=Sing	5	conj	_	_
8	,	_	PUNCT	PUNCT	_	1	punct	_	_
9	ל	ל	ADP	ADP	_	10	case	_	_
10	דוגמות	דוגמה	NOUN	NOUN	Gender=Fem|Number=Plur	1	obl	_	_
11	ליברליות	ליברלי	ADJ	ADJ	Gender=Fem|Number=Plur	10	amod	_	_
12	עייפות	עייף	ADJ	ADJ	Gender=Fem|Number=Plur	10	amod	_	_
13	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


