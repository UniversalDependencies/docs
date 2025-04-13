---
layout: base
title:  'Statistics of csubj:outer in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="he_iahltwiki-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="he_iahltwiki-dep-csubj-pass.html">csubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:outer`.

2 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 2 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-X.html">X</a></tt> (1; 50% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 33 csubj:outer	color:blue
1	תוך	תוך	ADP	ADP	_	2	case	_	_
2	התייחסות	התייחסות	NOUN	NOUN	Gender=Fem|Number=Sing	19	obl	_	_
3	ל	ל	ADP	ADP	_	5	case	_	SpaceAfter=No
4	-	-	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No
5	WorldPride	WorldPride	PROPN	PROPN	_	2	nmod	_	Entity=(EVE)|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	7	punct	_	_
7	אירוע	אירוע	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	5	appos	_	_
8	גאווה	גאווה	NOUN	NOUN	Gender=Fem|Number=Sing	7	compound	_	_
9	בינלאומי	בינלאומי	ADJ	ADJ	Gender=Masc|Number=Sing	7	amod	_	_
10	ש	ש	SCONJ	SCONJ	_	11	mark	_	_
11	נערך	נערך	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Past|Voice=Mid	7	acl:relcl	_	_
12	ב	ב	ADP	ADP	_	13	case	_	_
13	שנת	שנה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	11	obl	_	Entity=(TIMEX
14	2006	2006	NUM	NUM	_	13	compound	_	Entity=TIMEX)
15	ב	ב	ADP	ADP	_	16	case	_	_
16	ירושלים	ירושלים	PROPN	PROPN	_	11	obl	_	Entity=(GPE)
17	,	,	PUNCT	PUNCT	_	7	punct	_	_
18	פואר	פואר	PROPN	PROPN	_	19	nsubj	_	Entity=(PER)
19	כותבת	כתב	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
20	:	:	PUNCT	PUNCT	_	37	punct	_	_
21	"	"	PUNCT	PUNCT	_	37	punct	_	SpaceAfter=No
22	בתוך	בתוך	ADP	ADP	_	24	case	_	_
23	ה	ה	DET	DET	Definite=Def|PronType=Art	24	det	_	_
24	מעגלים	מעגל	NOUN	NOUN	Gender=Masc|Number=Plur	37	obl	_	_
25	ה	ה	DET	DET	Definite=Def|PronType=Art	28	det	_	_
26	הומו	הומו	ADV	ADV	_	28	compound:affix	_	_
27	-	-	PUNCT	PUNCT	_	26	punct	_	SpaceAfter=No
28	לסביים	לסבי	ADJ	ADJ	Gender=Masc|Number=Plur	24	amod	_	_
29	ה	ה	DET	DET	Definite=Def|PronType=Art	30	det	_	_
30	גלובליים	גלובלי	ADJ	ADJ	Gender=Masc|Number=Plur	24	amod	_	_
31	,	,	PUNCT	PUNCT	_	24	punct	_	_
32	להיות	היה	AUX	AUX	HebBinyan=PAAL|Polarity=Pos|VerbForm=Inf	33	aux	_	_
33	גיי	גיי	X	X	Foreign=Yes	37	csubj:outer	_	_
34	פרנדלי	פרנדלי	X	X	Foreign=Yes	33	flat	_	_
35	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	37	cop	_	_
36	להיות	היה	AUX	AUX	HebBinyan=PAAL|Polarity=Pos|VerbForm=Inf|VerbType=Cop	37	cop	_	_
37	מודרני	מודרני	ADJ	ADJ	Gender=Masc|Number=Sing	19	ccomp	_	SpaceAfter=No
38	,	,	PUNCT	PUNCT	_	39	punct	_	_
39	קוסמופוליטי	קוסמופוליטי	ADJ	ADJ	Gender=Masc|Number=Sing	37	conj	_	SpaceAfter=No
40	,	,	PUNCT	PUNCT	_	41	punct	_	_
41	מפותח	מפותח	ADJ	ADJ	Gender=Masc|Number=Sing	37	conj	_	_
42	...	...	PUNCT	PUNCT	_	46	punct	_	_
43	ו	ו	CCONJ	CCONJ	_	46	cc	_	_
44	בעיקר	בעיקר	ADV	ADV	_	46	advmod	_	_
45	-	-	PUNCT	PUNCT	_	44	punct	_	_
46	דמוקרטי	דמוקרטי	ADJ	ADJ	Gender=Masc|Number=Sing	37	conj	_	SpaceAfter=No
47	"	"	PUNCT	PUNCT	_	37	punct	_	SpaceAfter=No
48	.	.	PUNCT	PUNCT	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 17 csubj:outer	color:blue
1	ל	ל	ADP	ADP	_	2	case	_	_
2	צורך	צורך	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	8	obl	_	_
3	יישומ	יישום	NOUN	NOUN	Gender=Masc|Number=Sing	2	compound	_	_
4	ו	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	_	_
5	של	של	ADP	ADP	Case=Gen	7	case	_	_
6	ה	ה	DET	DET	Definite=Def|PronType=Art	7	det	_	_
7	הסכם	הסכם	NOUN	NOUN	Gender=Masc|Number=Sing	3	nmod:poss	_	_
8	התחייבה	התחייב	VERB	VERB	Gender=Fem|HebBinyan=HITPAEL|Number=Sing|Person=3|Tense=Past|Voice=Mid	0	root	_	_
9	ממשלת	ממשלה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	8	nsubj	_	Entity=(ORG
10	ישראל	ישראל	PROPN	PROPN	_	9	compound	_	Entity=(GPE)ORG)
11	לשגר	שיגר	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	8	xcomp	_	_
12	ל	ל	ADP	ADP	_	13	case	_	_
13	גרמניה	גרמניה	PROPN	PROPN	_	11	obl	_	_
14	משלחת	משלחת	NOUN	NOUN	Gender=Fem|Number=Sing	11	obj	_	_
15	אשר	אשר	SCONJ	SCONJ	_	20	mark	_	_
16	ב	ב	ADP	ADP	_	17	case	_	_
17	סמכות	סמכות	NOUN	NOUN	Gender=Fem|Number=Sing	20	csubj:outer	_	_
18	ה	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	17	nmod:poss	_	_
19	היה	היה	AUX	AUX	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Polarity=Pos|Tense=Past	20	cop	_	_
20	לחתום	חתם	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	14	acl:relcl	_	_
21	על	על	ADP	ADP	_	22	case	_	_
22	חוזים	חוזה	NOUN	NOUN	Gender=Masc|Number=Plur	20	obl	_	_
23	עם	עם	ADP	ADP	_	24	case	_	_
24	ספקי	ספק	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	20	obl	_	_
25	סחורות	סחורה	NOUN	NOUN	Gender=Fem|Number=Plur	24	compound	_	_
26	ו	ו	CCONJ	CCONJ	_	27	cc	_	_
27	שירותים	שירות	NOUN	NOUN	Gender=Masc|Number=Plur	25	conj	_	_
28	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


