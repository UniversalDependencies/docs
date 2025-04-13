---
layout: base
title:  'Statistics of mark:q in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `mark:q`

This relation is a language-specific subtype of <tt><a href="he_htb-dep-mark.html">mark</a></tt>.

41 nodes (0%) are attached to their parents as `mark:q`.

41 instances of `mark:q` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.95121951219512.

The following 11 pairs of parts of speech are connected with `mark:q`: <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (23; 56% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (5; 12% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-SCONJ.html">SCONJ</a></tt> (2; 5% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-SCONJ.html">SCONJ</a></tt> (2; 5% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-SCONJ.html">SCONJ</a></tt> (1; 2% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="he_htb-pos-PRON.html">PRON</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 mark:q	color:blue
1	האם	האם	ADV	ADV	PronType=Int	3	mark:q	_	_
2	אתם	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	_
3	יכולים	יכול	VERB	VERB	Gender=Masc|Number=Plur|Person=1,2,3|VerbForm=Part	0	root	_	Cxn=Interrogative-Polar-Direct|CxnElt=3:Interrogative-Polar-Direct.Clause|Modal=Yes
4	להתעלות	התעלה	VERB	VERB	HebBinyan=HITPAEL|VerbForm=Inf	3	xcomp	_	_
5	על	על	ADP	ADP	_	6	case	_	_
6	כך	כך	PRON	PRON	Person=3|PronType=Dem	4	obl	_	SpaceAfter=No
7	?	?	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 mark:q	color:blue
1	האם	האם	ADV	ADV	PronType=Int	3	mark:q	_	_
2	זאבי	זאבי	PROPN	PROPN	_	3	nsubj	_	_
3	חייב	חייב	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	Cxn=Interrogative-Polar-Direct|CxnElt=3:Interrogative-Polar-Direct.Clause|Modal=Yes
4	את	את	ADP	ADP	Case=Acc	5	case:acc	_	_
5	מושב_	מושב	NOUN	NOUN	Definite=Def|Gender=Masc|Number=Sing	3	obj	_	_
6	_של_	של	ADP	ADP	_	7	case:gen	_	_
7	_הוא	הוא	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nmod:poss	_	_
8	ב	ב	ADP	ADP	_	10	case	_	_
9	ה_	ה	DET	DET	PronType=Art	10	det	_	_
10	כנסת	כנסת	PROPN	PROPN	_	5	nmod	_	_
11	ל	ל	ADP	ADP	_	12	case	_	_
12	כהנא	כהנא	PROPN	PROPN	_	3	obl	_	_
13	?	?	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 mark:q	color:blue
1	אך	אך	CCONJ	CCONJ	_	3	cc	_	_
2	האם	האם	ADV	ADV	PronType=Int	3	mark:q	_	_
3	אפשר	אפשר	ADV	ADV	_	0	root	_	Cxn=Interrogative-Polar-Direct|CxnElt=3:Interrogative-Polar-Direct.Clause|Modal=Yes
4	לא	לא	ADV	ADV	Polarity=Neg	3	advmod	_	_
5	להשמיץ	השמיץ	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf|Voice=Act	3	xcomp	_	_
6	קלות	קלות	ADV	ADV	_	5	advmod	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	5	punct	_	_
8	לרמוז	רמז	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	5	conj	_	_
9	רמזים	רמז	NOUN	NOUN	Gender=Masc|Number=Plur	8	obj	_	_
10	עולבים	עלב	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part|Voice=Act	9	amod	_	_
11	ו	ו	CCONJ	CCONJ	_	5	cc	_	_
12	כ	כ	ADP	ADP	_	14	case	_	_
13	ה_	ה	DET	DET	PronType=Art	14	det	_	_
14	יוצא	יוצא	NOUN	NOUN	Gender=Masc|Number=Sing	3	dep	_	_
15	ב	ב	ADP	ADP	_	17	case	_	_
16	ה_	ה	DET	DET	PronType=Art	17	det	_	_
17	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	14	nmod	_	_
18	,	,	PUNCT	PUNCT	_	3	punct	_	_
19	כש	כש	SCONJ	SCONJ	Case=Tem	23	mark	_	_
20	ה	ה	DET	DET	PronType=Art	21	det	_	_
21	מדובר	דובר	VERB	VERB	Gender=Masc|HebBinyan=PUAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Pass	23	nsubj	_	_
22	ב	ב	ADP	ADP	_	23	case	_	_
23	פרס	פרס	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	3	advcl	_	_
24	נובל	נובל	NOUN	NOUN	Gender=Masc|Number=Sing	23	flat:name	_	SpaceAfter=No
25	,	,	PUNCT	PUNCT	_	23	punct	_	_
26	או	או	CCONJ	CCONJ	_	29	cc	_	_
27	ב	ב	ADP	ADP	_	29	case	_	_
28	כל	כול	DET	DET	Definite=Cons	29	det	_	_
29	פרס	פרס	NOUN	NOUN	Gender=Masc|Number=Sing	23	conj	_	_
30	ספרותי	ספרותי	ADJ	ADJ	Gender=Masc|Number=Sing	29	amod	_	_
31	כלשהו	כלשהו	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Ind	29	det	_	SpaceAfter=No
32	?	?	PUNCT	PUNCT	_	3	punct	_	_

~~~


