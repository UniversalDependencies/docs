

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
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 23 acl:inf	color:blue
1	יש	_	VERB	VERB	HebExistential=True	0	root	_	_
2	ל	_	ADP	ADP	_	4	case	_	_
3	ה_	_	DET	DET	PronType=Art	4	det:def	_	_
4	ליכוד	_	NOUN	NOUN	Gender=Masc|Number=Sing	1	nmod	_	_
5	אומץ	_	NOUN	NOUN	Gender=Masc|Number=Sing	1	nsubj	_	_
6	להתעמת	_	VERB	VERB	HebBinyan=HITPAEL|VerbForm=Inf	5	acl:inf	_	_
7	עם	_	ADP	ADP	_	8	case	_	_
8	ארה"ב	_	PROPN	PROPN	_	6	iobj	_	_
9	ו	_	CONJ	CONJ	_	8	cc	_	_
10	ה	_	DET	DET	PronType=Art	11	det:def	_	_
11	או"ם	_	PROPN	PROPN	_	8	conj	_	_
12	,	_	PUNCT	PUNCT	_	1	punct	_	_
13	ו	_	CONJ	CONJ	_	1	cc	_	_
14	בעיקר	_	ADV	ADV	_	15	advmod	_	_
15	יש	_	VERB	VERB	HebExistential=True	1	conj	_	_
16	לו	_	ADP	ADP	_	17	case	_	_
17	הוא_	_	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nmod	_	_
18	אומץ	_	NOUN	NOUN	Gender=Masc|Number=Sing	15	nsubj	_	_
19	לצאת	_	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf	18	acl:inf	_	_
20	ל	_	ADP	ADP	_	22	case	_	_
21	עוד	_	ADV	ADV	_	22	det	_	_
22	מלחמה	_	NOUN	NOUN	Gender=Fem|Number=Sing	19	nmod	_	_
23	רק	_	ADV	ADV	_	18	acl:inf	_	_
24	לא	_	ADV	ADV	HebSource=ConvUncertainHead|Negative=Neg	23	dep	_	_
25	לדבר	_	VERB	VERB	HebBinyan=PIEL|HebSource=ConvUncertainHead|VerbForm=Inf	23	dep	_	_
26	.	_	PUNCT	PUNCT	_	1	punct	_	_

~~~


