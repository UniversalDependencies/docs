---
layout: base
title:  'Statistics of det:quant in UD_Hebrew'
udver: '2'
---

## Treebank Statistics: UD_Hebrew: Relations: `det:quant`

This relation is a language-specific subtype of <tt><a href="he-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="he-dep-det-def.html">det:def</a></tt>.

50 nodes (0%) are attached to their parents as `det:quant`.

50 instances of `det:quant` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.58.

The following 5 pairs of parts of speech are connected with `det:quant`: <tt><a href="he-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he-pos-NOUN.html">NOUN</a></tt> (40; 80% instances), <tt><a href="he-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (7; 14% instances), <tt><a href="he-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="he-pos-PRON.html">PRON</a></tt>-<tt><a href="he-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="he-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 det:quant	color:blue
1	היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	אומרת	אמר	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Act	0	root	_	_
3	לעומת	לעומת	ADP	ADP	_	4	case	_	_
4	זאת	זאת	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	2	obl	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	2	punct	_	_
6	ש	ש	SCONJ	SCONJ	_	13	mark	_	_
7	משהו	משהו	NOUN	NOUN	Gender=Masc|Number=Sing	10	det:quant	_	_
8	מן	מן	ADP	ADP	HebSource=ConvUncertainLabel	10	case	_	_
9	ה	ה	DET	DET	PronType=Art	10	det:def	_	_
10	קסם	קסם	NOUN	NOUN	Gender=Masc|Number=Sing	13	nsubj	_	_
11	של_	של	ADP	ADP	Case=Gen	12	case:gen	_	_
12	_הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nmod:poss	_	_
13	אבד	אבד	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Past	2	ccomp	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 det:quant	color:blue
1	ה	ה	DET	DET	PronType=Art	2	det:def	_	_
2	מקורות	מקור	NOUN	NOUN	Gender=Masc|Number=Plur	5	nsubj	_	_
3	ה	ה	DET	DET	PronType=Art	4	det:def	_	_
4	פלשתיניים	פלסטיני	ADJ	ADJ	Gender=Masc|Number=Plur	2	amod	_	_
5	הוסיפו	הוסיף	VERB	VERB	Gender=Fem,Masc|HebBinyan=HIFIL|Number=Plur|Person=3|Tense=Past|Voice=Act	0	root	_	_
6	כי	כי	SCONJ	SCONJ	_	9	mark	_	_
7	כוחות	כוח	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	9	nsubj	_	_
8	צה"ל	צה"ל	PROPN	PROPN	Abbr=Yes	7	compound:smixut	_	_
9	עצרו	עצר	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=3|Tense=Past|Voice=Act	5	ccomp	_	_
10	רבים	רב	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part|Voice=Act	13	det:quant	_	_
11	מן	מן	ADP	ADP	HebSource=ConvUncertainLabel	13	case	_	_
12	ה	ה	DET	DET	PronType=Art	13	det:def	_	_
13	מתפרעים	מתפרע	NOUN	NOUN	Gender=Masc|Number=Plur	9	obj	_	_
14	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 19 det:quant	color:blue
1	ו	ו	CCONJ	CCONJ	_	5	cc	_	_
2	אילו	אילו	CCONJ	CCONJ	_	5	advmod	_	_
3	מקורות	מקור	NOUN	NOUN	Gender=Masc|Number=Plur	5	nsubj	_	_
4	פלשתיניים	פלסטיני	ADJ	ADJ	Gender=Masc|Number=Plur	3	amod	_	_
5	גורסים	גרס	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part|Voice=Act	0	root	_	_
6	כי	כי	SCONJ	SCONJ	_	13	mark	_	_
7	כל	כול	DET	DET	Definite=Cons	9	det	_	_
8	ה	ה	DET	DET	PronType=Art	9	det:def	_	_
9	מקרים	מקרה	NOUN	NOUN	Gender=Masc|Number=Plur	13	nsubj:cop	_	_
10	הם	הוא	VERB	VERB	Gender=Masc|Number=Plur|Person=3|Polarity=Pos|VerbForm=Part|VerbType=Cop	13	cop	_	_
11	על	על	ADP	ADP	_	13	case	_	_
12	רקע	רקע	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	11	fixed	_	_
13	שיתוף	שיתוף	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	5	ccomp	_	_
14	פעולה	פעולה	NOUN	NOUN	Gender=Fem|Number=Sing	13	compound:smixut	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	13	punct	_	_
16	למרות	למרות	ADP	ADP	_	22	case	_	_
17	ש	ש	SCONJ	SCONJ	_	22	mark	_	_
18	ל	ל	ADP	ADP	_	22	case	_	_
19	חלק	חלק	NOUN	NOUN	Gender=Masc|Number=Sing	22	det:quant	_	_
20	מ	מ	ADP	ADP	HebSource=ConvUncertainLabel	22	case	_	_
21	ה	ה	DET	DET	PronType=Art	22	det:def	_	_
22	מעורבים	מעורב	ADJ	ADJ	Gender=Masc|Number=Plur	13	nmod	_	_
23	עבר	עבר	NOUN	NOUN	Gender=Masc|Number=Sing	22	nsubj	_	_
24	פלילי	פלילי	ADJ	ADJ	Gender=Masc|Number=Sing	23	amod	_	SpaceAfter=No
25	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


