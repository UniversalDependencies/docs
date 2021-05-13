---
layout: base
title:  'Statistics of mark:q in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `mark:q`

This relation is a language-specific subtype of <tt><a href="he_htb-dep-mark.html">mark</a></tt>.

42 nodes (0%) are attached to their parents as `mark:q`.

42 instances of `mark:q` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.92857142857143.

The following 10 pairs of parts of speech are connected with `mark:q`: <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (22; 52% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (8; 19% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-DET.html">DET</a></tt> (2; 5% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-SCONJ.html">SCONJ</a></tt> (2; 5% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-SCONJ.html">SCONJ</a></tt> (2; 5% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt>-<tt><a href="he_htb-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="he_htb-pos-PRON.html">PRON</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark:q	color:blue
1	שאלנו	שאל	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=1|Tense=Past|Voice=Act	0	root	_	_
2	על	על	ADP	ADP	_	4	case	_	_
3	ה	ה	DET	DET	Definite=Def|PronType=Art	4	det	_	_
4	פולנים	פולני	NOUN	NOUN	Gender=Masc|Number=Plur	1	obl	_	_
5	:	:	PUNCT	PUNCT	_	7	punct	_	HebSource=ConvUncertainHead
6	האם	האם	ADV	ADV	PronType=Int	7	mark:q	_	_
7	יכלו	יכל	VERB	VERB	Gender=Fem,Masc|Number=Plur|Person=3|Tense=Fut	1	dep	_	HebSource=ConvUncertainHead
8	לעשות	עשה	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	7	xcomp	_	_
9	יותר	יותר	ADV	ADV	_	10	advmod	_	_
10	מ	מ	ADP	ADP	_	12	case	_	_
11	ש	_	SCONJ	SCONJ	_	12	mark	_	_
12	עשו	_	VERB	VERB	_	8	obl	_	_
13	למען	למען	ADP	ADP	_	15	case	_	_
14	ה	ה	DET	DET	Definite=Def|PronType=Art	15	det	_	_
15	יהודים	יהודי	NOUN	NOUN	Gender=Masc|Number=Plur	8	obl	_	_
16	?	?	PUNCT	PUNCT	_	1	punct	_	HebSource=ConvUncertainHead

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 mark:q	color:blue
1	האם	האם	ADV	ADV	PronType=Int	3	mark:q	_	_
2	אתם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	_
3	יכולים	יכול	AUX	AUX	Gender=Masc|Number=Plur|Person=1,2,3|VerbForm=Part|VerbType=Mod	4	aux	_	_
4	להתעלות	התעלה	VERB	VERB	HebBinyan=HITPAEL|VerbForm=Inf	0	root	_	_
5	על	על	ADP	ADP	_	6	case	_	_
6	כך	כך	PRON	PRON	Person=3|PronType=Dem	4	obl	_	SpaceAfter=No
7	?	?	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 16 mark:q	color:blue
1	ב	ב	ADP	ADP	_	2	case	_	_
2	דיון	דיון	NOUN	NOUN	Gender=Masc|Number=Sing	28	obl	_	_
3	ש	ש	SCONJ	SCONJ	_	4	mark	_	_
4	התקיים	התקיים	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=3|Tense=Past	2	acl:relcl	_	_
5	לא	לא	ADV	ADV	Polarity=Neg	4	advmod	_	_
6	מ	מ	ADP	ADP	_	4	advmod	_	_
7	כבר	כבר	ADV	ADV	_	6	fixed	_	_
8	ב	ב	ADP	ADP	_	9	case	_	_
9	מכון	מכון	NOUN	NOUN	Gender=Masc|Number=Sing	4	obl	_	_
10	ון	ון	PROPN	PROPN	_	9	flat:name	_	SpaceAfter=No
11	-	-	PUNCT	PUNCT	_	12	punct	_	SpaceAfter=No
12	ליר	ליר	PROPN	PROPN	_	10	flat:name	_	_
13	ב	ב	ADP	ADP	_	14	case	_	_
14	נושא	נושא	NOUN	NOUN	Gender=Masc|Number=Sing	4	obl	_	_
15	"	"	PUNCT	PUNCT	_	20	punct	_	SpaceAfter=No
16	ה	ה	DET	DET	Definite=Def|PronType=Art	20	mark:q	_	_
17	יהיה	היה	AUX	AUX	VerbType=Cop	20	cop	_	_
18	ה	ה	DET	DET	Definite=Def|PronType=Art	19	det	_	_
19	קיבוץ	קיבוץ	NOUN	NOUN	Gender=Masc|Number=Sing	20	nsubj	_	_
20	קיים	קיים	ADJ	ADJ	Gender=Masc|Number=Sing	14	dep	_	_
21	ב	ב	ADP	ADP	_	23	case	_	_
22	ה_	ה	DET	DET	Definite=Def|PronType=Art	23	det	_	_
23	מאה	מאה	NUM	NUM	Gender=Fem|Number=Sing	20	obl	_	_
24	ה	ה	DET	DET	Definite=Def|PronType=Art	25	det	_	_
25	21	21	NUM	NUM	_	23	amod	_	_
26	"	"	PUNCT	PUNCT	_	20	punct	_	SpaceAfter=No
27	,	,	PUNCT	PUNCT	_	2	punct	_	_
28	כרך	כרך	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
29	ה	ה	DET	DET	Definite=Def|PronType=Art	30	det	_	_
30	פרוף	פרופסור	NOUN	NOUN	Gender=Masc|Number=Sing	28	nsubj	_	_
31	ל	ל	ADP	ADP	_	32	case	_	_
32	כלכלה	כלכלה	NOUN	NOUN	Gender=Fem|Number=Sing	30	nmod	_	_
33	אסף	אסף	PROPN	PROPN	_	30	flat:name	_	_
34	רזין	רזין	PROPN	PROPN	_	30	flat:name	_	_
35	את	את	ADP	ADP	Case=Acc	36	case:acc	_	_
36	עתיד_	עתיד	NOUN	NOUN	Definite=Def|Gender=Masc|Number=Sing	28	obj	_	_
37	_של_	של	ADP	ADP	_	38	case:gen	_	_
38	_הוא	הוא	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	36	nmod:poss	_	_
39	של	של	ADP	ADP	Case=Gen	41	case:gen	_	_
40	ה	ה	DET	DET	Definite=Def|PronType=Art	41	det	_	_
41	קיבוץ	קיבוץ	NOUN	NOUN	Gender=Masc|Number=Sing	36	nmod:poss	_	_
42	ב	ב	ADP	ADP	_	43	case	_	_
43	עתיד_	עתיד	NOUN	NOUN	Definite=Def|Gender=Masc|Number=Sing	28	obl	_	_
44	_של_	של	ADP	ADP	_	45	case:gen	_	_
45	_היא	הוא	PRON	PRON	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	43	nmod:poss	_	_
46	של	של	ADP	ADP	Case=Gen	48	case:gen	_	_
47	ה	ה	DET	DET	Definite=Def|PronType=Art	48	det	_	_
48	עלייה	עלייה	NOUN	NOUN	Gender=Fem|Number=Sing	43	nmod:poss	_	_
49	.	.	PUNCT	PUNCT	_	28	punct	_	_

~~~


