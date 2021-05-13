---
layout: base
title:  'Statistics of dislocated in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `dislocated`

This relation is universal.

16 nodes (0%) are attached to their parents as `dislocated`.

16 instances of `dislocated` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.375.

The following 9 pairs of parts of speech are connected with `dislocated`: <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt> (6; 38% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt>-<tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt> (3; 19% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt>-<tt><a href="he_htb-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="he_htb-pos-PRON.html">PRON</a></tt>-<tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 dislocated	color:blue
1	איך	איך	ADV	ADV	PronType=Int	2	advmod	_	_
2	ייתכן	ייתכן	AUX	AUX	VerbType=Mod	0	root	_	_
3	ש	ש	SCONJ	SCONJ	_	8	mark	_	_
4	מוצר	מוצר	NOUN	NOUN	Gender=Masc|Number=Sing	8	dislocated	_	_
5	ה	ה	SCONJ	SCONJ	_	6	mark	_	_
6	מכיל	הכיל	VERB	VERB	Gender=Masc|Number=Sing|Person=1,2,3|VerbForm=Part	4	acl:relcl	_	_
7	ביצים	ביצה	NOUN	NOUN	Gender=Fem|Number=Plur	6	obj	_	_
8	אין	אין	VERB	VERB	HebExistential=Yes	2	advcl	_	_
9	ב_	ב	ADP	ADP	_	10	case	_	_
10	_הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obl	_	_
11	כולסטרול	כולסטרול	NOUN	NOUN	Gender=Masc|Number=Sing	8	nsubj	_	SpaceAfter=No
12	?	?	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 dislocated	color:blue
1	כל	כול	DET	DET	Definite=Cons	2	det	_	_
2	נסיון	ניסיון	NOUN	NOUN	Gender=Masc|Number=Sing	4	dislocated	_	_
3	לפגוע	פגע	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	2	acl	_	_
4	יש	יש	AUX	AUX	VerbType=Mod	5	aux	_	_
5	לגנות	גינה	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	0	root	_	_
6	את_	את_	ADP	ADP	Case=Acc	7	case:acc	_	_
7	_הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
8	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 1 dislocated	color:blue
1	מי	מי	ADV	ADV	PronType=Int	14	dislocated	_	_
2	מבין	מבין	ADP	ADP	_	4	case	_	_
3	ה	ה	DET	DET	Definite=Def|PronType=Art	4	det	_	_
4	קצינים	קצין	NOUN	NOUN	Gender=Masc|Number=Plur	1	obl	_	_
5	ה	ה	DET	DET	Definite=Def|PronType=Art	6	det	_	_
6	אלה	אלה	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Dem	4	det	_	_
7	ש	ש	SCONJ	SCONJ	_	9	mark	_	_
8	לא	לא	ADV	ADV	Polarity=Neg	9	advmod	_	_
9	יזכה	זכה	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Tense=Fut	1	acl:relcl	_	_
10	ב	ב	ADP	ADP	_	12	case	_	_
11	ה_	ה	DET	DET	Definite=Def|PronType=Art	12	det	_	_
12	מינוי	מינוי	NOUN	NOUN	Gender=Masc|Number=Sing	9	obl	_	_
13	,	,	PUNCT	PUNCT	_	1	punct	_	_
14	טובים	טוב	ADJ	ADJ	Gender=Masc|Number=Plur	0	root	_	_
15	סיכוי_	סיכוי	NOUN	NOUN	Definite=Def|Gender=Masc|Number=Plur	14	nsubj	_	_
16	_של_	של	ADP	ADP	_	17	case:gen	_	_
17	_הוא	הוא	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nmod:poss	_	_
18	להשתבץ	השתבץ	VERB	VERB	HebBinyan=HITPAEL|VerbForm=Inf	15	acl	_	_
19	ב	ב	ADP	ADP	_	22	case	_	_
20	אחד	אחד	NUM	NUM	Definite=Cons|Gender=Masc|Number=Sing	22	nummod	_	_
21	ה	ה	DET	DET	Definite=Def|PronType=Art	22	det	_	_
22	תפקידים	תפקיד	NOUN	NOUN	Gender=Masc|Number=Plur	18	obl	_	_
23	ה	ה	DET	DET	Definite=Def|PronType=Art	24	det	_	_
24	אחרים	אחר	ADJ	ADJ	Gender=Masc|Number=Plur	22	amod	_	_
25	ה	ה	DET	DET	Definite=Def|PronType=Art	26	det	_	_
26	זמינים	זמין	ADJ	ADJ	Gender=Masc|Number=Plur	22	amod	_	_
27	,	,	PUNCT	PUNCT	_	29	punct	_	_
28	כמו	כמו	ADP	ADP	_	29	case	_	_
29	מפקד	מפקד	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	22	nmod	_	_
30	ה	ה	DET	DET	Definite=Def|PronType=Art	31	det	_	_
31	מחוז	מחוז	NOUN	NOUN	Gender=Masc|Number=Sing	29	compound:smixut	_	_
32	ה	ה	DET	DET	Definite=Def|PronType=Art	33	det	_	_
33	דרומי	דרומי	ADJ	ADJ	Gender=Masc|Number=Sing	31	amod	_	_
34	,	,	PUNCT	PUNCT	_	35	punct	_	_
35	מפקד	מפקד	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	29	conj	_	_
36	משמר	משמר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	35	compound:smixut	_	_
37	ה	ה	DET	DET	Definite=Def|PronType=Art	38	det	_	_
38	גבול	גבול	NOUN	NOUN	Gender=Masc|Number=Sing	36	compound:smixut	_	_
39	,	,	PUNCT	PUNCT	_	41	punct	_	_
40	או	או	CCONJ	CCONJ	_	41	cc	_	_
41	ראש	ראש	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	29	conj	_	_
42	ה	ה	DET	DET	Definite=Def|PronType=Art	43	det	_	_
43	מטה	מטה	NOUN	NOUN	Gender=Masc|Number=Sing	41	compound:smixut	_	_
44	של	של	ADP	ADP	Case=Gen	45	case:gen	_	_
45	שר	שר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	41	nmod:poss	_	_
46	ה	ה	DET	DET	Definite=Def|PronType=Art	47	det	_	_
47	משטרה	משטרה	NOUN	NOUN	Gender=Fem|Number=Sing	45	compound:smixut	_	_
48	.	.	PUNCT	PUNCT	_	14	punct	_	_

~~~


