---
layout: base
title:  'Statistics of discourse in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `discourse`

This relation is universal.

2 nodes (0%) are attached to their parents as `discourse`.

1 instances of `discourse` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-INTJ.html">INTJ</a></tt> (1; 50% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-INTJ.html">INTJ</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	בבקשה	בבקשה	INTJ	INTJ	_	2	discourse	_	_
2	נא	_	ADV	ADV	_	0	root	_	_
3	להפסיק	הפסיק	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf|Voice=Act	2	xcomp	_	_
4	את	את	ADP	ADP	Case=Acc	6	case:acc	_	_
5	ה	ה	DET	DET	Definite=Def|PronType=Art	6	det	_	_
6	טרור	טרור	NOUN	NOUN	Gender=Masc|Number=Sing	3	obj	_	_
7	של	של	ADP	ADP	Case=Gen	8	case:gen	_	_
8	גיבריל	גיבריל	PROPN	PROPN	_	6	nmod:poss	_	_
9	אבו	אבו	PROPN	PROPN	_	8	flat:name	_	SpaceAfter=No
10	-	-	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
11	נידאל	נידאל	PROPN	PROPN	_	9	flat:name	_	_
12	ו	_	ADV	ADV	_	8	advmod	_	_
13	כו	_	ADV	ADV	_	12	fixed	_	_
14	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 discourse	color:blue
1	מאמר	מאמר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	24	nsubj	_	_
2	ה	ה	DET	DET	Definite=Def|PronType=Art	3	det	_	_
3	מערכת	מערכת	NOUN	NOUN	Gender=Fem|Number=Sing	1	compound:smixut	_	_
4	ש	ש	SCONJ	SCONJ	_	5	mark	_	_
5	התפרסם	התפרסם	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=3|Tense=Past	1	acl:relcl	_	_
6	תחת	תחת	ADP	ADP	_	8	case	_	_
7	ה	ה	DET	DET	Definite=Def|PronType=Art	8	det	_	_
8	כותרת	כותרת	NOUN	NOUN	Gender=Fem|Number=Sing	5	obl	_	_
9	"	"	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No
10	יחדל	חדל	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Fut|Voice=Act	8	appos	_	_
11	נא	נא	INTJ	INTJ	_	10	discourse	_	_
12	מילוא	מילוא	NOUN	NOUN	Gender=Masc|Number=Sing	10	nsubj	_	_
13	להתלבט	התלבט	VERB	VERB	HebBinyan=HITPAEL|VerbForm=Inf	10	xcomp	_	SpaceAfter=No
14	"	"	PUNCT	PUNCT	_	10	punct	_	_
15	(	(	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
16	"	"	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
17	ה	ה	DET	DET	Definite=Def|PronType=Art	18	det	_	_
18	ארץ	ארץ	NOUN	NOUN	Gender=Fem|Number=Sing	1	appos	_	_
19	"	"	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
20	,	,	PUNCT	PUNCT	_	21	punct	_	_
21	111	111	NUM	NUM	_	18	nummod	_	SpaceAfter=No
22	)	)	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
23	,	,	PUNCT	PUNCT	_	1	punct	_	_
24	תובע	תבע	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Act	0	root	_	_
25	למצות	מיצה	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	24	xcomp	_	_
26	את	את	ADP	ADP	Case=Acc	28	case:acc	_	_
27	ה	ה	DET	DET	Definite=Def|PronType=Art	28	det	_	_
28	דין	דין	NOUN	NOUN	Gender=Masc|Number=Sing	25	obj	_	_
29	עם	עם	ADP	ADP	_	31	case	_	_
30	ה	ה	DET	DET	Definite=Def|PronType=Art	31	det	_	_
31	מפכ"ל	מפכ"ל	NOUN	NOUN	Abbr=Yes|Gender=Masc|Number=Sing	25	obl	_	_
32	ו	ו	CCONJ	CCONJ	_	33	cc	_	_
33	קציני	קצין	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	31	conj	_	_
34	ה	ה	DET	DET	Definite=Def|PronType=Art	35	det	_	_
35	משטרה	משטרה	NOUN	NOUN	Gender=Fem|Number=Sing	33	compound:smixut	_	_
36	ה	ה	DET	DET	Definite=Def|PronType=Art	37	det	_	_
37	בכירים	בכיר	ADJ	ADJ	Gender=Masc|Number=Plur	33	amod	_	_
38	בגלל	בגלל	ADP	ADP	_	39	case	_	_
39	מחדל_	מחדל	NOUN	NOUN	Definite=Def|Gender=Masc|Number=Plur	24	obl	_	_
40	_של_	של	ADP	ADP	_	41	case:gen	_	_
41	_הם	הוא	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	39	nmod:poss	_	_
42	ב	ב	ADP	ADP	_	43	case	_	_
43	אירועי	אירוע	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	39	nmod	_	_
44	הר	הר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	43	compound:smixut	_	_
45	ה	ה	DET	DET	Definite=Def|PronType=Art	46	det	_	_
46	בית	בית	NOUN	NOUN	Gender=Masc|Number=Sing	44	compound:smixut	_	_
47	.	.	PUNCT	PUNCT	_	24	punct	_	_

~~~


