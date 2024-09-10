---
layout: base
title:  'Statistics of list in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `list`

This relation is universal.

28 nodes (1%) are attached to their parents as `list`.

28 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.3571428571429.

The following 3 pairs of parts of speech are connected with `list`: <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (19; 68% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (8; 29% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 12 list	color:blue
1	Fotbalul	fotbal	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	_	_	3	punct	_	_
3	patroni	patron	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	1	list	_	_
4	misogini	misogin	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	antrenori	antrenor	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	1	list	_	_
7	misogini	misogin	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	fotbaliști	fotbalist	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	1	list	_	_
10	misogini	misogin	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	9	amod	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	femei	femeie	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	1	list	_	_
13	trofeu	trofeu	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	12	nmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	1	punct	_	_
15	Lumea	lume	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	parataxis	_	SpaceAfter=No
16	:	:	PUNCT	_	_	17	punct	_	_
17	de	de	ADP	_	AdpType=Prep|Case=Acc	19	advmod	_	_
18	ce	ce	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	17	fixed	_	_
19	sunt	fi	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	15	parataxis	_	_
20	unii	unul	DET	_	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|Position=Prenom|PronType=Ind	21	det	_	_
21	suporteri	suporter	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	19	nsubj	_	_
22	misogini	misogin	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	19	obj	_	_
23	cu	cu	ADP	_	AdpType=Prep|Case=Acc	24	case	_	_
24	Ioana	Ioana	PROPN	_	_	19	obl	_	_
25	Cosma	Cosma	PROPN	_	_	24	flat	_	SpaceAfter=No
26	?	?	PUNCT	_	_	15	punct	_	_
27	WTF	what_the_fuck	X	_	Abbr=Yes|Foreign=Yes	15	discourse:emo	_	Lang=en|SpaceAfter=No
28	?	?	PUNCT	_	_	27	punct	_	SpaceAfter=No
29	!	!	PUNCT	_	_	27	punct	_	_

~~~


~~~ conllu
# visual-style 60	bgColor:blue
# visual-style 60	fgColor:white
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 44 60 list	color:blue
1	Este	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	foarte	foarte	ADV	_	_	3	advmod	_	_
3	ușor	ușor	ADV	_	Degree=Pos	0	root	_	_
4	să	să	PART	_	Mood=Sub	5	mark	_	_
5	faci	face	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	csubj	_	_
6	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	7	det	_	_
7	femeie	femeie	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	5	obj	_	_
8	fericită	fericit	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	trebuie	trebui	VERB	_	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
11	să-	să	PART	_	Mood=Sub	15	mark	_	SpaceAfter=No
12	i	el	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	15	iobj	_	_
13	fii	fi	AUX	_	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	15	cop	_	SpaceAfter=No
14	:	:	PUNCT	_	_	15	punct	_	_
15	prieten	prieten	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	10	csubj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	partener	partener	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
18	,	,	PUNCT	_	_	19	punct	_	_
19	iubit	iubit	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	frate	frate	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	tată	tată	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
24	,	,	PUNCT	_	_	25	punct	_	_
25	profesor	profesor	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
26	,	,	PUNCT	_	_	27	punct	_	_
27	educator	educator	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
28	,	,	PUNCT	_	_	29	punct	_	_
29	bucătar	bucătar	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
30	,	,	PUNCT	_	_	31	punct	_	_
31	mecanic	mecanic	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
32	,	,	PUNCT	_	_	33	punct	_	_
33	electrician	electrician	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
34	,	,	PUNCT	_	_	35	punct	_	_
35	sexolog	sexolog	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
36	,	,	PUNCT	_	_	37	punct	_	_
37	ginecolog	ginecolog	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
38	,	,	PUNCT	_	_	39	punct	_	_
39	psiholog	psiholog	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
40	,	,	PUNCT	_	_	41	punct	_	_
41	terapeut	terapeut	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
42	,	,	PUNCT	_	_	44	punct	_	_
43	și	și	CCONJ	_	Polarity=Pos	44	cc	_	_
44	amabil	amabil	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
45	,	,	PUNCT	_	_	46	punct	_	_
46	simpatic	simpatic	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
47	,	,	PUNCT	_	_	48	punct	_	_
48	sportiv	sportiv	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
49	,	,	PUNCT	_	_	50	punct	_	_
50	iubitor	iubitor	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
51	,	,	PUNCT	_	_	52	punct	_	_
52	atent	atent	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
53	,	,	PUNCT	_	_	54	punct	_	_
54	creativ	creativ	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
55	,	,	PUNCT	_	_	56	punct	_	_
56	sensibil	sensibil	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
57	,	,	PUNCT	_	_	58	punct	_	_
58	puternic	puternic	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
59	,	,	PUNCT	_	_	60	punct	_	_
60	înțelegător	înțelegător	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
61	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 44 list	color:blue
1	Este	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
2	foarte	foarte	ADV	_	_	3	advmod	_	_
3	ușor	ușor	ADV	_	Degree=Pos	0	root	_	_
4	să	să	PART	_	Mood=Sub	5	mark	_	_
5	faci	face	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	csubj	_	_
6	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	7	det	_	_
7	femeie	femeie	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	5	obj	_	_
8	fericită	fericit	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	trebuie	trebui	VERB	_	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
11	să-	să	PART	_	Mood=Sub	15	mark	_	SpaceAfter=No
12	i	el	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	15	iobj	_	_
13	fii	fi	AUX	_	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	15	cop	_	SpaceAfter=No
14	:	:	PUNCT	_	_	15	punct	_	_
15	prieten	prieten	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	10	csubj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	partener	partener	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
18	,	,	PUNCT	_	_	19	punct	_	_
19	iubit	iubit	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
20	,	,	PUNCT	_	_	21	punct	_	_
21	frate	frate	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
22	,	,	PUNCT	_	_	23	punct	_	_
23	tată	tată	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
24	,	,	PUNCT	_	_	25	punct	_	_
25	profesor	profesor	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
26	,	,	PUNCT	_	_	27	punct	_	_
27	educator	educator	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
28	,	,	PUNCT	_	_	29	punct	_	_
29	bucătar	bucătar	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
30	,	,	PUNCT	_	_	31	punct	_	_
31	mecanic	mecanic	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
32	,	,	PUNCT	_	_	33	punct	_	_
33	electrician	electrician	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
34	,	,	PUNCT	_	_	35	punct	_	_
35	sexolog	sexolog	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
36	,	,	PUNCT	_	_	37	punct	_	_
37	ginecolog	ginecolog	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
38	,	,	PUNCT	_	_	39	punct	_	_
39	psiholog	psiholog	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
40	,	,	PUNCT	_	_	41	punct	_	_
41	terapeut	terapeut	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
42	,	,	PUNCT	_	_	44	punct	_	_
43	și	și	CCONJ	_	Polarity=Pos	44	cc	_	_
44	amabil	amabil	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	15	list	_	SpaceAfter=No
45	,	,	PUNCT	_	_	46	punct	_	_
46	simpatic	simpatic	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
47	,	,	PUNCT	_	_	48	punct	_	_
48	sportiv	sportiv	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
49	,	,	PUNCT	_	_	50	punct	_	_
50	iubitor	iubitor	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
51	,	,	PUNCT	_	_	52	punct	_	_
52	atent	atent	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
53	,	,	PUNCT	_	_	54	punct	_	_
54	creativ	creativ	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
55	,	,	PUNCT	_	_	56	punct	_	_
56	sensibil	sensibil	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
57	,	,	PUNCT	_	_	58	punct	_	_
58	puternic	puternic	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
59	,	,	PUNCT	_	_	60	punct	_	_
60	înțelegător	înțelegător	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	44	list	_	SpaceAfter=No
61	.	.	PUNCT	_	_	3	punct	_	_

~~~


