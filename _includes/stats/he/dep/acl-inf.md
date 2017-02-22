

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [acl]().
There are also 1 other language-specific subtypes of `acl`: [acl:relcl]().

261 nodes (0%) are attached to their parents as `acl:inf`.

261 instances of `acl:inf` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.04980842911877.

The following 4 pairs of parts of speech are connected with `acl:inf`: [he-pos/NOUN]()-[he-pos/VERB]() (256; 98% instances), [he-pos/ADV]()-[he-pos/VERB]() (3; 1% instances), [he-pos/NOUN]()-[he-pos/ADV]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl:inf	color:blue
1	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
2	ה	ה	DET	DET	PronType=Art	3	det:def	_	_
3	זמן	זמן	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
4	לנקום	נקם	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	3	acl:inf	_	_
5	נקמה_	נקמה	NOUN	NOUN	Definite=Def|Gender=Fem|Number=Sing	4	obj	_	_
6	_של_	של	ADP	ADP	_	7	case:gen	_	_
7	_הוא	הוא	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nmod:poss	_	_
8	של	של	PART	PART	Case=Gen	10	case:gen	_	_
9	כל	כול	DET	DET	Definite=Cons	10	det	_	_
10	יהודי	יהודי	NOUN	NOUN	Gender=Masc|Number=Sing	5	nmod:poss	_	_
11	"	_	PUNCT	PUNCT	_	3	punct	_	_
12	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 acl:inf	color:blue
1	מאמן	מאמן	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	10	nsubj	_	_
2	ה	ה	DET	DET	PronType=Art	3	det:def	_	_
3	נבחרת	נבחרת	NOUN	NOUN	Gender=Fem|Number=Sing	1	compound:smixut	_	_
4	(	_	PUNCT	PUNCT	_	5	punct	_	_
5	נוער	נוער	NOUN	NOUN	Gender=Masc|Number=Sing	3	appos	_	_
6	א	א	PROPN	PROPN	_	5	dep	_	_
7	)	_	PUNCT	PUNCT	_	5	punct	_	_
8	אמנון	אמנון	PROPN	PROPN	_	1	appos	_	_
9	רז	רז	PROPN	PROPN	_	8	flat:name	_	_
10	הגיב	הגיב	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
11	אתמול	אתמול	ADV	ADV	_	10	obl:tmod	_	_
12	:	_	PUNCT	PUNCT	_	14	punct	_	_
13	"	_	PUNCT	PUNCT	_	14	punct	_	_
14	אין	אין	VERB	VERB	HebExistential=True	10	ccomp	_	_
15	לי	ל	ADP	ADP	_	16	case	_	_
16	_אני	הוא	PRON	PRON	Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	14	obl	_	_
17	מה	מה	ADV	ADV	PronType=Int	14	nsubj	_	_
18	להשיב	השיב	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf|Voice=Act	17	acl:inf	_	_
19	להם	ל	ADP	ADP	_	20	case	_	_
20	_הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs	18	obl	_	_
21	,	_	PUNCT	PUNCT	_	14	punct	_	_
22	כי	כי	SCONJ	SCONJ	_	25	mark	_	_
23	כרגע	כרגע	ADV	ADV	_	25	advmod	_	_
24	לא	לא	ADV	ADV	Polarity=Neg	25	advmod	_	_
25	מתוכננים	תוכנן	VERB	VERB	Gender=Masc|HebBinyan=PUAL|Number=Plur|Person=1,2,3|VerbForm=Part|Voice=Pass	14	advcl	_	_
26	לנו	ל	ADP	ADP	_	27	case	_	_
27	_אנחנו	הוא	PRON	PRON	Gender=Fem,Masc|Number=Plur|Person=1|PronType=Prs	25	obl	_	_
28	משחקי	משחק	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	25	nsubj	_	_
29	אימון	אימון	NOUN	NOUN	Gender=Masc|Number=Sing	28	compound:smixut	_	_
30	"	_	PUNCT	PUNCT	_	14	punct	_	_
31	.	_	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 20 acl:inf	color:blue
1	חוגים	חוג	NOUN	NOUN	Gender=Masc|Number=Plur	7	nsubj	_	_
2	בכירים	בכיר	ADJ	ADJ	Gender=Masc|Number=Plur	1	amod	_	_
3	ב	ב	ADP	ADP	_	4	case	_	_
4	משרד	משרד	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	1	nmod	_	_
5	ה	ה	DET	DET	PronType=Art	6	det:def	_	_
6	ביטחון	ביטחון	NOUN	NOUN	Gender=Masc|Number=Sing	4	compound:smixut	_	_
7	טענו	טען	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=3|Tense=Past|Voice=Act	0	root	_	_
8	ב	ב	ADP	ADP	_	9	case	_	_
9	סוף	סוף	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	7	obl	_	_
10	ה	ה	DET	DET	PronType=Art	11	det:def	_	_
11	שבוע	שבוע	NOUN	NOUN	Gender=Masc|Number=Sing	9	compound:smixut	_	_
12	,	_	PUNCT	PUNCT	_	7	punct	_	_
13	כי	כי	SCONJ	SCONJ	_	14	mark	_	_
14	אין	אין	VERB	VERB	HebExistential=True	7	ccomp	_	_
15	כל	כול	DET	DET	Definite=Cons	16	det	_	_
16	צורך	צורך	NOUN	NOUN	Gender=Masc|Number=Sing	14	nsubj	_	_
17	להגיע	הגיע	VERB	VERB	HebBinyan=HIFIL|HebSource=ConvUncertainHead|VerbForm=Inf|Voice=Act	20	dep	_	_
18	עם	עם	ADP	ADP	_	20	case	_	_
19	ה	_	X	X	Xtra=Junk	20	dep	_	_
20	אמריקאים	_	X	X	Xtra=Junk	16	acl:inf	_	_
21	ל	ל	ADP	ADP	_	22	case	_	_
22	תיאום	תיאום	NOUN	NOUN	Gender=Masc|Number=Sing	20	obl	_	_
23	מראש	מראש	ADV	ADV	HebSource=ConvUncertainHead	22	dep	_	_
24	,	_	PUNCT	PUNCT	_	20	punct	_	_
25	ב	ב	ADP	ADP	_	27	case	_	_
26	ה_	ה	DET	DET	PronType=Art	27	det:def	_	_
27	דרג	דרג	NOUN	NOUN	Gender=Masc|Number=Sing	20	obl	_	_
28	ה	ה	DET	DET	PronType=Art	29	det:def	_	_
29	מדיני	מדיני	ADJ	ADJ	Gender=Masc|Number=Sing	27	amod	_	_
30	ה	ה	DET	DET	PronType=Art	31	det:def	_	_
31	עליון	עליון	ADJ	ADJ	Gender=Masc|Number=Sing	27	amod	_	_
32	,	_	PUNCT	PUNCT	_	20	punct	_	_
33	ב	ב	ADP	ADP	_	36	case	_	_
34	כל	כול	DET	DET	Definite=Cons	36	dep	_	_
35	ה	ה	SCONJ	SCONJ	_	36	mark	_	_
36	אמור	אמר	VERB	VERB	Gender=Masc|Mood=Imp|Number=Sing|Person=2	20	obl	_	_
37	ב	ב	X	X	Xtra=Junk	39	case	_	_
38	ה_	ה	X	X	Xtra=Junk	39	dep	_	_
39	מהלכים	_	X	X	Xtra=Junk	36	advmod	_	_
40	ה	ה	DET	DET	PronType=Art	41	det:def	_	_
41	אסטראטגיים	אסטרטגי	ADJ	ADJ	Gender=Masc|Number=Plur	39	amod	_	_
42	של	של	PART	PART	Case=Gen	45	case:gen	_	_
43	שתי	שתיים	NUM	NUM	Definite=Cons|Gender=Fem|Number=Plur	45	nummod	_	_
44	ה	ה	DET	DET	PronType=Art	45	det:def	_	_
45	מדינות	מדינה	NOUN	NOUN	Gender=Fem|Number=Plur	39	obl	_	_
46	,	_	PUNCT	PUNCT	_	39	punct	_	_
47	ה	ה	DET	DET	PronType=Art	48	dep	_	_
48	צפויים	צפה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part|Voice=Act	39	acl	_	_
49	ב	ב	ADP	ADP	_	50	case	_	_
50	מקרה	מקרה	NOUN	NOUN	Gender=Masc|Number=Sing	48	obl	_	_
51	של	של	PART	PART	Case=Gen	52	case:gen	_	_
52	התלקחות	התלקחות	NOUN	NOUN	Gender=Fem|Number=Sing	50	nmod:poss	_	_
53	.	_	PUNCT	PUNCT	_	7	punct	_	_

~~~


