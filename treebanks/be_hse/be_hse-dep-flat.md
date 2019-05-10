---
layout: base
title:  'Statistics of flat in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `flat`

This relation is universal.
There are 2 language-specific subtypes of `flat`: <tt><a href="be_hse-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="be_hse-dep-flat-name.html">flat:name</a></tt>.

7 nodes (0%) are attached to their parents as `flat`.

7 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.57142857142857.

The following 6 pairs of parts of speech are connected with `flat`: <tt><a href="be_hse-pos-DET.html">DET</a></tt>-<tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt> (2; 29% instances), <tt><a href="be_hse-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="be_hse-pos-CCONJ.html">CCONJ</a></tt> (1; 14% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (1; 14% instances), <tt><a href="be_hse-pos-NUM.html">NUM</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (1; 14% instances), <tt><a href="be_hse-pos-SYM.html">SYM</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 flat	color:blue
1	Але	але	CCONJ	CC	_	2	cc	_	_
2	ж	ж	PART	UH	_	4	advmod:discourse	_	_
3	усё	усё	PRON	DT	Case=Nom|Number=Plur|PronType=Tot	4	nsubj	_	_
4	ўпіраецца	упірацца	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
5	ва	ва	ADP	IN	_	6	case	_	_
6	ўпартасць	ўпартасць	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	8	punct	_	_
8	помсту	помста	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	6	conj	_	_
9	аднаго	адзін	DET	DT	Case=Gen|Gender=Masc|Number=Sing|PronType=Ind	12	amod	_	SpaceAfter=No
10	-	-	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
11	адзінага	адзіны	ADJ	JJL	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	9	flat	_	_
12	чалавека	чалавек	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 flat	color:blue
1	У	у	ADP	IN	_	3	case	_	_
2	гэтай	гэты	DET	DT	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	праблеме	праблема	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	5	obl	_	_
4	не	не	PART	UH	Polarity=Neg	5	advmod	_	_
5	можа	магчы	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	быць	быць	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	5	xcomp	_	_
7	ніякага	ніякi	DET	DT	Case=Gen|Gender=Masc|Number=Sing|PronType=Neg	8	det	_	_
8	кампрамісу	кампраміс	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	5	nsubj	_	SpaceAfter=No
9	:	:	PUNCT	PUNCT	_	13	punct	_	_
10	тут	тут	ADV	RB	Degree=Pos	13	advmod	_	_
11	ужо	ужо	ADV	RB	Degree=Pos	13	advmod	_	_
12	"	"	PUNCT	PUNCT	_	13	punct	_	SpaceAfter=No
13	або	або	CCONJ	CC	_	5	parataxis	_	_
14	-	-	PUNCT	PUNCT	_	15	punct	_	_
15	або	або	CCONJ	CC	_	13	flat	_	SpaceAfter=No
16	"	"	PUNCT	PUNCT	_	13	punct	_	SpaceAfter=No
17	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 20 flat	color:blue
1	Але	але	CCONJ	_	_	3	cc	_	_
2	галоўнымі	галоўны	ADJ	_	Case=Ins|Degree=Pos|Number=Plur	3	amod	_	_
3	гераінямі	гераіня	NOUN	_	Animacy=Anim|Case=Ins|Gender=Fem|Number=Plur	0	root	_	_
4	былі	быць	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
5	пятнаццаць	пятнаццаць	NUM	_	Case=Nom	6	nummod:gov	_	_
6	дзяўчат	дзяўчына	NOUN	_	Animacy=Anim|Case=Gen|Gender=Fem|Number=Plur	3	nsubj	_	_
7	—	—	PUNCT	_	_	6	punct	_	_
8	удзельніц	удзельніца	NOUN	_	Animacy=Anim|Case=Gen|Gender=Fem|Number=Plur	6	appos	_	_
9	нацыянальнага	нацыянальны	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	10	amod	_	_
10	фіналу	фінал	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
11	Міжнароднага	міжнародны	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	13	amod	_	_
12	міжуніверсітэцкага	міжуніверсітэцкi	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	13	amod	_	_
13	конкурсу	конкурс	NOUN	_	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	_
14	грацыі	грацыя	NOUN	_	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	13	nmod	_	_
15	і	і	CCONJ	_	_	17	cc	_	_
16	артыстычнага	артыстычны	ADJ	_	Case=Gen|Degree=Pos|Gender=Neut|Number=Sing	17	amod	_	_
17	майстэрства	майстэрства	NOUN	_	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	14	conj	_	_
18	“	“	PUNCT	_	_	19	punct	_	SpaceAfter=No
19	Каралева	каралева	NOUN	_	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	17	nmod	_	_
20	Вясна	вясна	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	19	flat	_	_
21	—	—	PUNCT	_	_	22	punct	_	_
22	2017	2017	NUM	_	_	19	appos	_	SpaceAfter=No
23	”	”	PUNCT	_	_	19	punct	_	SpaceAfter=No
24	.	.	PUNCT	_	_	3	punct	_	_

~~~


