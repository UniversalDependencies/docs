---
layout: base
title:  'Statistics of dep in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `dep`

This relation is universal.

5 nodes (0%) are attached to their parents as `dep`.

3 instances of `dep` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.2.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (3; 60% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 dep	color:blue
1	Ողջ	ողջ	DET	_	PronType=Tot	2	dep	_	_
2	գիշեր	գիշեր	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	5	obl	_	_
3	լույս	լույս	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	5	xcomp	_	_
4	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	5	aux	_	_
5	լինում	լինել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	_	_
7	իսկ	իսկ	CCONJ	_	_	10	cc	_	_
8	առավոտյան	առավոտյան	ADV	_	_	10	obl	_	_
9	Գյուղը	գյուղ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	10	nsubj	_	_
10	զարթնում	զարթնել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	5	conj	_	_
11	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	10	aux	_	_
12	հաճույքից	հաճույք	NOUN	_	Animacy=Inan|Case=Abl|Definite=Ind|Number=Sing	13	obj	_	_
13	խոնջացած	խոնջանալ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	14	acl	_	_
14	կնոջ	կին	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	15	obl	_	_
15	նման	նման	ADJ	_	_	10	advmod	_	SpaceAfter=No
16	։	։	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 21 dep	color:blue
1	Այդ	այդ	DET	_	Distance=Med|PronType=Dem	2	det	_	_
2	ամենի	ամեն	PRON	_	Case=Dat|Definite=Ind|Number=Sing|PronType=Tot	3	nmod:poss	_	_
3	ֆոնին	ֆոն	NOUN	_	Animacy=Inan|Case=Dat|Definite=Def|Number=Sing	23	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	միակ	միակ	ADJ	_	_	6	amod	_	_
6	կետը	կետ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	23	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	որտեղ	որտեղ	PRON	_	Case=Nom|PronType=Rel	10	obl	_	_
9	գործնականում	գործնական	NOUN	_	Animacy=Inan|Case=Loc|Definite=Ind|Number=Sing	10	obl	_	_
10	առկա	առկա	ADJ	_	_	6	acl:relcl	_	_
11	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	_
12	քիչ	քիչ	ADV	_	Degree=Pos	15	advmod	_	_
13	թե	թե	CCONJ	_	_	14	cc	_	_
14	շատ	շատ	ADV	_	Degree=Pos	12	conj	_	_
15	շոշափելի	շոշափելի	ADJ	_	Degree=Pos	16	amod	_	_
16	կոնսենսուս	կոնսենսուս	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	10	nsubj	_	_
17	ուժային	ուժային	ADJ	_	Degree=Pos	18	amod	_	_
18	կենտրոնների	կենտրոն	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Plur	10	obl	_	_
19	միջև	միջև	ADP	_	AdpType=Post	18	case	_	SpaceAfter=No
20	,	,	PUNCT	_	_	23	punct	_	_
21	դա	դա	PRON	_	Case=Nom|Distance=Med|Number=Sing|PronType=Dem	6	dep	_	_
22	Հարավային	հարավային	ADJ	_	Degree=Pos	23	amod	_	_
23	Կովկասն	Կովկաս	PROPN	_	Animacy=Inan|Case=Nom|Definite=Def|NameType=Geo|Number=Sing	0	root	_	_
24	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	23	cop	_	SpaceAfter=No
25	՝	՝	PUNCT	_	_	28	punct	_	_
26	Մինսկի	Մինսկ	PROPN	_	Animacy=Inan|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	27	nmod:poss	_	_
27	խմբի	խումբ	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	28	nmod:poss	_	_
28	ձևաչափը	ձևաչափ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	23	conj	_	SpaceAfter=No
29	,	,	PUNCT	_	_	30	punct	_	_
30	ներառյալ	ներառյալ	ADV	_	_	28	advmod:emph	_	_
31	արցախյան	արցախյան	ADJ	_	_	32	amod	_	_
32	խնդրում	խնդիր	NOUN	_	Animacy=Inan|Case=Loc|Definite=Ind|Number=Sing	35	obl	_	_
33	ոչ	ոչ	PART	_	_	34	advmod	_	_
34	պաշտոնապես	պաշտոնապես	ADV	_	_	35	advmod	_	_
35	ներգրավված	ներգրավել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	39	acl	_	_
36	միջնորդ	միջնորդ	ADJ	_	_	39	amod	_	SpaceAfter=No
37	-	-	PUNCT	_	_	38	punct	_	SpaceAfter=No
38	շահառու	շահառու	ADJ	_	_	36	conj	_	_
39	կենտրոնները	կենտրոն	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Plur	30	obl	_	SpaceAfter=No
40	:	:	PUNCT	_	_	23	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 dep	color:blue
1	Ցուցանակի	ցուցանակ	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	3	obl	_	_
2	վրա	վրա	ADP	_	AdpType=Post|Case=Nom	1	case	_	_
3	նշված	նշել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	_
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	SpaceAfter=No
5	՝	՝	PUNCT	_	_	7	punct	_	_
6	«	«	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	Զաբել	Զաբել	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	3	parataxis	_	_
8	Եսայան	Եսայան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Sur|Number=Sing	7	flat	_	SpaceAfter=No
9	.	.	PUNCT	_	_	10	punct	_	_
10	1878-1943	1878-1943	NUM	_	NumForm=Digit|NumType=Range	7	dep	_	SpaceAfter=No
11	.	.	PUNCT	_	_	14	punct	_	_
12	հայ	հայ	ADJ	_	_	14	amod	_	_
13	կին	կին	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	14	nmod	_	_
14	գրող	գրող	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	7	appos	_	SpaceAfter=No
15	,	,	PUNCT	_	_	18	punct	_	_
16	մարդու	մարդ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	17	nmod:poss	_	_
17	իրավունքների	իրավունք	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Plur	18	nmod:poss	_	_
18	ակտիվիստ	ակտիվիստ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	14	conj	_	SpaceAfter=No
19	»	»	PUNCT	_	_	7	punct	_	SpaceAfter=No
20	։	։	PUNCT	_	_	3	punct	_	_

~~~


