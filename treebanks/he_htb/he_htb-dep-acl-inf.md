---
layout: base
title:  'Statistics of acl:inf in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `acl:inf`

This relation is a language-specific subtype of <tt><a href="he_htb-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="he_htb-dep-acl-relcl.html">acl:relcl</a></tt>.

283 nodes (0%) are attached to their parents as `acl:inf`.

283 instances of `acl:inf` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.95759717314488.

The following 4 pairs of parts of speech are connected with `acl:inf`: <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (278; 98% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-X.html">X</a></tt> (1; 0% instances).


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
10	יהודי	יהודי	NOUN	NOUN	Gender=Masc|Number=Sing	5	nmod:poss	_	SpaceAfter=No
11	"	"	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	3	punct	_	_

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
4	(	(	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No
5	נוער	נוער	NOUN	NOUN	Gender=Masc|Number=Sing	3	appos	_	_
6	א	א	PROPN	PROPN	_	5	dep	_	SpaceAfter=No
7	)	)	PUNCT	PUNCT	_	5	punct	_	_
8	אמנון	אמנון	PROPN	PROPN	_	1	appos	_	_
9	רז	רז	PROPN	PROPN	_	8	flat:name	_	_
10	הגיב	הגיב	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
11	אתמול	אתמול	ADV	ADV	_	10	obl:tmod	_	SpaceAfter=No
12	:	:	PUNCT	PUNCT	_	14	punct	_	_
13	"	"	PUNCT	PUNCT	_	14	punct	_	SpaceAfter=No
14	אין	אין	VERB	VERB	HebExistential=True	10	ccomp	_	_
15	לי	ל	ADP	ADP	_	16	case	_	_
16	_אני	הוא	PRON	PRON	Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	14	obl	_	_
17	מה	מה	ADV	ADV	PronType=Int	14	nsubj	_	_
18	להשיב	השיב	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf|Voice=Act	17	acl:inf	_	_
19	להם	ל	ADP	ADP	_	20	case	_	_
20	_הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Prs	18	obl	_	_
21	,	,	PUNCT	PUNCT	_	14	punct	_	_
22	כי	כי	SCONJ	SCONJ	_	25	mark	_	_
23	כרגע	כרגע	ADV	ADV	_	25	advmod	_	_
24	לא	לא	ADV	ADV	Polarity=Neg	25	advmod	_	_
25	מתוכננים	תוכנן	VERB	VERB	Gender=Masc|HebBinyan=PUAL|Number=Plur|Person=1,2,3|VerbForm=Part|Voice=Pass	14	advcl	_	_
26	לנו	ל	ADP	ADP	_	27	case	_	_
27	_אנחנו	הוא	PRON	PRON	Gender=Fem,Masc|Number=Plur|Person=1|PronType=Prs	25	obl	_	_
28	משחקי	משחק	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	25	nsubj	_	_
29	אימון	אימון	NOUN	NOUN	Gender=Masc|Number=Sing	28	compound:smixut	_	SpaceAfter=No
30	"	"	PUNCT	PUNCT	_	14	punct	_	SpaceAfter=No
31	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 23 acl:inf	color:blue
1	יש	יש	VERB	VERB	HebExistential=True	0	root	_	_
2	ל	ל	ADP	ADP	_	4	case	_	_
3	ה_	ה	DET	DET	PronType=Art	4	det:def	_	_
4	ליכוד	ליכוד	NOUN	NOUN	Gender=Masc|Number=Sing	1	obl	_	_
5	אומץ	אומץ	NOUN	NOUN	Gender=Masc|Number=Sing	1	nsubj	_	_
6	להתעמת	התעמת	VERB	VERB	HebBinyan=HITPAEL|VerbForm=Inf	5	acl:inf	_	_
7	עם	עם	ADP	ADP	_	8	case	_	_
8	ארה"ב	ארה"ב	PROPN	PROPN	Abbr=Yes	6	iobj	_	_
9	ו	_	CCONJ	CCONJ	_	11	cc	_	_
10	ה	ה	DET	DET	PronType=Art	11	det:def	_	_
11	או"ם	והאו"ם	PROPN	PROPN	Abbr=Yes	8	conj	_	_
12	,	,	PUNCT	PUNCT	_	1	punct	_	_
13	ו	ו	CCONJ	CCONJ	_	15	cc	_	_
14	בעיקר	בעיקר	ADV	ADV	_	15	advmod	_	_
15	יש	יש	VERB	VERB	HebExistential=True	1	conj	_	_
16	לו	ל	ADP	ADP	_	17	case	_	_
17	_הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	obl	_	_
18	אומץ	אומץ	NOUN	NOUN	Gender=Masc|Number=Sing	15	nsubj	_	_
19	לצאת	יצא	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	18	acl:inf	_	_
20	ל	ל	ADP	ADP	_	22	case	_	_
21	עוד	עוד	ADV	ADV	_	22	det	_	_
22	מלחמה	מלחמה	NOUN	NOUN	Gender=Fem|Number=Sing	19	obl	_	_
23	רק	רק	ADV	ADV	_	18	acl:inf	_	_
24	לא	לא	ADV	ADV	HebSource=ConvUncertainHead|Polarity=Neg	23	dep	_	_
25	לדבר	דיבר	VERB	VERB	HebBinyan=PIEL|HebSource=ConvUncertainHead|VerbForm=Inf|Voice=Act	23	dep	_	SpaceAfter=No
26	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


