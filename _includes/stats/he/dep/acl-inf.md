

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [acl]().
There are also 1 other language-specific subtypes of `acl`: [acl:relcl]().

283 nodes (0%) are attached to their parents as `acl:inf`.

283 instances of `acl:inf` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.79858657243816.

The following 4 pairs of parts of speech are connected with `acl:inf`: [he-pos/NOUN]()-[he-pos/VERB]() (278; 98% instances), [he-pos/ADV]()-[he-pos/VERB]() (3; 1% instances), [he-pos/NOUN]()-[he-pos/ADV]() (1; 0% instances), [he-pos/NOUN]()-[he-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl:inf	color:blue
1	זה	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3	3	nsubj	_	_
2	ה	_	DET	DET	PronType=Art	3	det:def	_	_
3	זמן	_	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
4	לנקום	_	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf	3	acl:inf	_	_
5	נקמתו	_	NOUN	NOUN	Gender=Fem|Number=Sing	4	dobj	_	_
6	הוא_	_	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nmod:poss	_	_
7	של	_	PART	PART	Case=Gen	9	case:gen	_	_
8	כל	_	DET	DET	Definite=Red	9	det	_	_
9	יהודי	_	NOUN	NOUN	Gender=Masc|Number=Sing	5	nmod:poss	_	_
10	"	_	PUNCT	PUNCT	_	3	punct	_	_
11	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 acl:inf	color:blue
1	מאמן	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	10	nsubj	_	_
2	ה	_	DET	DET	PronType=Art	3	det:def	_	_
3	נבחרת	_	NOUN	NOUN	Gender=Fem|Number=Sing	1	nmod:smixut	_	_
4	(	_	PUNCT	PUNCT	_	5	punct	_	_
5	נוער	_	NOUN	NOUN	Gender=Masc|Number=Sing	3	appos	_	_
6	א	_	PROPN	PROPN	_	5	dep	_	_
7	)	_	PUNCT	PUNCT	_	5	punct	_	_
8	אמנון	_	PROPN	PROPN	_	1	appos	_	_
9	רז	_	PROPN	PROPN	_	8	name	_	_
10	הגיב	_	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Past	0	root	_	_
11	אתמול	_	ADV	ADV	_	10	nmod:tmod	_	_
12	:	_	PUNCT	PUNCT	_	14	punct	_	_
13	"	_	PUNCT	PUNCT	_	14	punct	_	_
14	אין	_	VERB	VERB	HebExistential=True	10	ccomp	_	_
15	לי	_	ADP	ADP	_	16	case	_	_
16	אני_	_	PRON	PRON	Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	14	nmod	_	_
17	מה	_	ADV	ADV	PronType=Int	14	nsubj	_	_
18	להשיב	_	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf	17	acl:inf	_	_
19	להם	_	ADP	ADP	_	20	case	_	_
20	הם_	_	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs	18	nmod	_	_
21	,	_	PUNCT	PUNCT	_	14	punct	_	_
22	כי	_	SCONJ	SCONJ	_	25	mark	_	_
23	כרגע	_	ADV	ADV	_	25	advmod	_	_
24	לא	_	ADV	ADV	Negative=Neg	25	neg	_	_
25	מתוכננים	_	VERB	VERB	Gender=Masc|HebBinyan=PUAL|Number=Plur|Person=1,2,3|VerbForm=Part	14	advcl	_	_
26	לנו	_	ADP	ADP	_	27	case	_	_
27	אנחנו_	_	PRON	PRON	Gender=Fem,Masc|Number=Plur|Person=1|PronType=Prs	25	nmod	_	_
28	משחקי	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Plur	25	nsubj	_	_
29	אימון	_	NOUN	NOUN	Gender=Masc|Number=Sing	28	nmod:smixut	_	_
30	"	_	PUNCT	PUNCT	_	14	punct	_	_
31	.	_	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 20 acl:inf	color:blue
1	חוגים	_	NOUN	NOUN	Gender=Masc|Number=Plur	7	nsubj	_	_
2	בכירים	_	ADJ	ADJ	Gender=Masc|Number=Plur	1	amod	_	_
3	ב	_	ADP	ADP	_	4	case	_	_
4	משרד	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	1	nmod	_	_
5	ה	_	DET	DET	PronType=Art	6	det:def	_	_
6	ביטחון	_	NOUN	NOUN	Gender=Masc|Number=Sing	4	nmod:smixut	_	_
7	טענו	_	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=3|Tense=Past	0	root	_	_
8	ב	_	ADP	ADP	_	9	case	_	_
9	סוף	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Sing	7	nmod	_	_
10	ה	_	DET	DET	PronType=Art	11	det:def	_	_
11	שבוע	_	NOUN	NOUN	Gender=Masc|Number=Sing	9	nmod:smixut	_	_
12	,	_	PUNCT	PUNCT	_	7	punct	_	_
13	כי	_	SCONJ	SCONJ	_	14	mark	_	_
14	אין	_	VERB	VERB	HebExistential=True	7	ccomp	_	_
15	כל	_	DET	DET	Definite=Red	16	det	_	_
16	צורך	_	NOUN	NOUN	Gender=Masc|Number=Sing	14	nsubj	_	_
17	להגיע	_	VERB	VERB	HebBinyan=HIFIL|HebSource=ConvUncertainHead|VerbForm=Inf	20	dep	_	_
18	עם	_	ADP	ADP	_	20	case	_	_
19	ה	_	X	X	Xtra=Junk	20	dep	_	_
20	אמריקאים	_	X	X	Xtra=Junk	16	acl:inf	_	_
21	ל	_	ADP	ADP	_	22	case	_	_
22	תיאום	_	NOUN	NOUN	Gender=Masc|Number=Sing	20	nmod	_	_
23	מראש	_	ADV	ADV	HebSource=ConvUncertainHead	22	dep	_	_
24	,	_	PUNCT	PUNCT	_	20	punct	_	_
25	ב	_	ADP	ADP	_	27	case	_	_
26	ה_	_	DET	DET	PronType=Art	27	det:def	_	_
27	דרג	_	NOUN	NOUN	Gender=Masc|Number=Sing	20	nmod	_	_
28	ה	_	DET	DET	PronType=Art	29	det:def	_	_
29	מדיני	_	ADJ	ADJ	Gender=Masc|Number=Sing	27	amod	_	_
30	ה	_	DET	DET	PronType=Art	31	det:def	_	_
31	עליון	_	ADJ	ADJ	Gender=Masc|Number=Sing	27	amod	_	_
32	,	_	PUNCT	PUNCT	_	20	punct	_	_
33	ב	_	ADP	ADP	_	36	case	_	_
34	כל	_	DET	DET	Definite=Red	36	dep	_	_
35	ה	_	SCONJ	SCONJ	_	36	mark	_	_
36	אמור	_	VERB	VERB	Gender=Masc|Mood=Imp|Number=Sing|Person=2	20	nmod	_	_
37	ב	_	X	X	Xtra=Junk	39	case	_	_
38	ה_	_	X	X	Xtra=Junk	39	dep	_	_
39	מהלכים	_	X	X	Xtra=Junk	36	advmod	_	_
40	ה	_	DET	DET	PronType=Art	41	det:def	_	_
41	אסטראטגיים	_	ADJ	ADJ	Gender=Masc|Number=Plur	39	amod	_	_
42	של	_	PART	PART	Case=Gen	45	case:gen	_	_
43	שתי	_	NUM	NUM	Definite=Red|Gender=Fem|Number=Plur	45	nummod	_	_
44	ה	_	DET	DET	PronType=Art	45	det:def	_	_
45	מדינות	_	NOUN	NOUN	Gender=Fem|Number=Plur	39	nmod	_	_
46	,	_	PUNCT	PUNCT	_	39	punct	_	_
47	ה	_	DET	DET	PronType=Art	48	dep	_	_
48	צפויים	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part	39	acl	_	_
49	ב	_	ADP	ADP	_	50	case	_	_
50	מקרה	_	NOUN	NOUN	Gender=Masc|Number=Sing	48	nmod	_	_
51	של	_	PART	PART	Case=Gen	52	case:gen	_	_
52	התלקחות	_	NOUN	NOUN	Gender=Fem|Number=Sing	50	nmod:poss	_	_
53	.	_	PUNCT	PUNCT	_	7	punct	_	_

~~~


