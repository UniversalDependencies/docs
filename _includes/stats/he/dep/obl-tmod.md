

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [obl]().

222 nodes (0%) are attached to their parents as `obl:tmod`.

167 instances of `obl:tmod` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.57207207207207.

The following 4 pairs of parts of speech are connected with `obl:tmod`: [he-pos/VERB]()-[he-pos/ADV]() (211; 95% instances), [he-pos/NOUN]()-[he-pos/ADV]() (6; 3% instances), [he-pos/AUX]()-[he-pos/ADV]() (4; 2% instances), [he-pos/ADJ]()-[he-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:tmod	color:blue
1	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	נוצח	נוצח	VERB	VERB	Gender=Masc|HebBinyan=PUAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
3	השבוע	השבוע	ADV	ADV	_	2	obl:tmod	_	_
4	ב	ב	ADP	ADP	_	5	case	_	_
5	הפרש	הפרש	NOUN	NOUN	Gender=Masc|Number=Sing	2	obl	_	_
6	של	של	PART	PART	Case=Gen	8	case:gen	_	_
7	שני	שניים	NUM	NUM	Definite=Cons|Gender=Masc|Number=Plur	8	nummod	_	_
8	אחוזים	אחוז	NOUN	NOUN	Gender=Masc|Number=Plur	5	nmod:poss	_	_
9	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 obl:tmod	color:blue
1	נושא	נושא	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	11	nsubj:cop	_	_
2	ה	ה	DET	DET	PronType=Art	3	det:def	_	_
3	לימוד	לימוד	NOUN	NOUN	Gender=Masc|Number=Sing	1	compound:smixut	_	_
4	ב	ב	ADP	ADP	_	5	case	_	_
5	בתי	בית	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	1	nmod	_	_
6	ה	ה	DET	DET	PronType=Art	7	det:def	_	_
7	ספר	ספר	NOUN	NOUN	Gender=Masc|Number=Sing	5	compound:smixut	_	_
8	השנה	השנה	ADV	ADV	_	11	obl:tmod	_	_
9	הוא	הוא	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|VerbForm=Part|VerbType=Cop	11	cop	_	_
10	"	_	PUNCT	PUNCT	_	11	punct	_	_
11	עלייה	עלייה	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
12	ו	ו	CCONJ	CCONJ	_	13	cc	_	_
13	קליטה	קליטה	NOUN	NOUN	Gender=Fem|Number=Sing	11	conj	_	_
14	"	_	PUNCT	PUNCT	_	11	punct	_	_
15	.	_	PUNCT	PUNCT	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl:tmod	color:blue
1	השבוע	השבוע	ADV	ADV	_	3	obl:tmod	_	_
2	,	_	PUNCT	PUNCT	_	3	punct	_	_
3	אמורה	אמור	AUX	AUX	Gender=Fem|Number=Sing|Person=1,2,3|VerbType=Mod	0	root	_	_
4	עיריית	עירייה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	3	nsubj	_	_
5	ירושלים	ירושלים	PROPN	PROPN	_	4	compound:smixut	_	_
6	להציע	הציע	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf|Voice=Act	3	xcomp	_	_
7	ל	ל	ADP	ADP	_	8	case	_	_
8	משרד	משרד	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	6	obl	_	_
9	ה	ה	DET	DET	PronType=Art	10	det:def	_	_
10	שיכון	שיכון	NOUN	NOUN	Gender=Masc|Number=Sing	8	compound:smixut	_	_
11	ארבעה	ארבעה	NUM	NUM	Gender=Masc|Number=Sing	12	nummod	_	_
12	אתרים	אתר	NOUN	NOUN	Gender=Masc|Number=Plur	6	iobj	_	_
13	חלופיים	חלופי	ADJ	ADJ	Gender=Masc|Number=Plur	12	amod	_	_
14	ל	ל	ADP	ADP	_	15	case	_	_
15	הצבה_	הצבה	NOUN	NOUN	Definite=Def|Gender=Fem|Number=Sing	6	obl	_	_
16	_של_	של	ADP	ADP	_	17	case:gen	_	_
17	_הם	הוא	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	15	nmod:poss	_	_
18	של	של	PART	PART	Case=Gen	19	case:gen	_	_
19	קרוואנים	קרוואן	NOUN	NOUN	Gender=Masc|Number=Plur	15	nmod:poss	_	_
20	.	_	PUNCT	PUNCT	_	3	punct	_	_

~~~


