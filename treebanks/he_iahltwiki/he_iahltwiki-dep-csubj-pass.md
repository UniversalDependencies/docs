---
layout: base
title:  'Statistics of csubj:pass in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="he_iahltwiki-dep-csubj.html">csubj</a></tt>.

82 nodes (0%) are attached to their parents as `csubj:pass`.

82 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.14634146341463.

The following 4 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt> (71; 87% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt> (7; 9% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 csubj:pass	color:blue
1	עם	עם	ADP	ADP	_	2	case	_	_
2	זאת	זה	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	5	obl	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	לא	לא	ADV	ADV	_	5	advmod	_	_
5	ניתן	ניתן	VERB	VERB	Gender=Masc|Number=Sing	0	root	_	_
6	להעביר	העביר	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf|Voice=Act	5	csubj:pass	_	_
7	רווחי	רווח	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	6	obj	_	_
8	הון	הון	NOUN	NOUN	Gender=Masc|Number=Sing	7	compound	_	_
9	בין	בין	ADP	ADP	_	10	case	_	_
10	שנים	שנה	NOUN	NOUN	Gender=Fem|Number=Plur	6	obl	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 14 csubj:pass	color:blue
1	נדרש	נדרש	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	_
2	כי	כי	SCONJ	SCONJ	_	14	mark	_	_
3	ה	ה	DET	DET	Definite=Def|PronType=Art	4	det	_	_
4	אמצעים	אמצעי	NOUN	NOUN	Gender=Masc|Number=Plur	14	nsubj	_	_
5	ש	ש	SCONJ	SCONJ	_	6	mark	_	_
6	נבחרו	נבחר	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Plur|Person=3|Tense=Past|Voice=Pass	4	acl:relcl	_	_
7	ל	ל	ADP	ADP	_	8	case	_	_
8	הגשמת	הגשמה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	6	obl	_	_
9	ה	ה	DET	DET	Definite=Def|PronType=Art	10	det	_	_
10	תכלית	תכלית	NOUN	NOUN	Gender=Fem|Number=Sing	8	compound	_	_
11	ה	ה	DET	DET	Definite=Def|PronType=Art	12	det	_	_
12	ראויה	ראוי	ADJ	ADJ	Gender=Fem|Number=Sing	10	amod	_	_
13	הם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=3|Polarity=Pos	14	cop	_	_
14	מידתיים	מידתי	ADJ	ADJ	Gender=Masc|Number=Plur	1	csubj:pass	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 csubj:pass	color:blue
1	ב	ב	ADP	ADP	Definite=Def|PronType=Art	2	case	_	_
2	נוסחים	נוסח	NOUN	NOUN	Gender=Masc|Number=Plur	5	obl	_	_
3	ה	ה	DET	DET	Definite=Def|PronType=Art	4	det	_	_
4	שונים	שונה	ADJ	ADJ	Gender=Masc|Number=Plur	2	amod	_	_
5	נקבע	נקבע	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
6	במפורש	במפורש	ADV	ADV	_	5	advmod	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	10	punct	_	_
8	ש	ש	SCONJ	SCONJ	_	10	mark	_	_
9	ב	ב	ADP	ADP	_	10	case	_	_
10	כוח	כוח	NOUN	NOUN	Gender=Masc|Number=Sing	5	csubj:pass	_	_
11	ה	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	nmod:poss	_	_
12	של	של	ADP	ADP	_	14	case	_	_
13	ה	ה	DET	DET	Definite=Def|PronType=Art	14	det	_	_
14	כנסת	כנסת	PROPN	PROPN	_	10	nmod:poss	_	_
15	לחוקק	חוקק	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	10	csubj	_	_
16	חוק	חוק	NOUN	NOUN	Gender=Masc|Number=Sing	15	obj	_	_
17	אף	אף	ADV	ADV	_	22	mark	_	_
18	על	על	ADP	ADP	_	17	fixed	_	_
19	פי	פה	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	17	fixed	_	_
20	ש	ש	SCONJ	SCONJ	_	17	fixed	_	_
21	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	nsubj	_	_
22	פוגע	פגע	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	15	obl	_	_
23	שלא	שלא	ADV	ADV	_	25	advmod	_	_
24	כ	כ	ADP	ADP	Definite=Def|PronType=Art	25	case	_	_
25	דין	דין	NOUN	NOUN	Gender=Masc|Number=Sing	22	obl	_	_
26	ב	ב	ADP	ADP	Definite=Def|PronType=Art	27	case	_	_
27	חובה	חובה	NOUN	NOUN	Gender=Fem|Number=Sing	22	obl	_	_
28	לכבד	כיבד	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	27	acl	_	_
29	את	את	ADP	ADP	_	30	case	_	_
30	זכויות	זכות	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Plur	28	obj	_	_
31	ה	ה	DET	DET	Definite=Def|PronType=Art	32	det	_	_
32	אדם	אדם	NOUN	NOUN	Gender=Masc|Number=Sing	30	compound	_	_
33	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


