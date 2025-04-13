---
layout: base
title:  'Statistics of nsubj:pass in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="he_iahltknesset-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="he_iahltknesset-dep-nsubj-outer.html">nsubj:outer</a></tt>.

175 nodes (0%) are attached to their parents as `nsubj:pass`.

128 instances of `nsubj:pass` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.83428571428571.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (113; 65% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (50; 29% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt> (7; 4% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-SYM.html">SYM</a></tt> (2; 1% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:pass	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	נושא	נושא	NOUN	NOUN	Gender=Masc|Number=Sing	3	nsubj:pass	_	_
3	נבדק	נבדק	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
4	על	על	ADP	ADP	_	7	case	_	SpaceAfter=No
5	-	-	PUNCT	PUNCT	_	4	punct	_	SpaceAfter=No
6	ידי	יד	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Plur	4	fixed	_	_
7	מפקד	מפקד	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	3	obl	_	_
8	חטיבת	חטיבה	PROPN	PROPN	Definite=Cons	7	compound	_	Entity=(ORG
9	אפרים	אפרים	PROPN	PROPN	_	8	compound	_	Entity=ORG)|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nsubj:pass	color:blue
1	רבות	רב	NOUN	NOUN	Gender=Masc|Number=Plur	5	vocative	_	_
2	י	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	1	nmod:poss	_	_
3	,	,	PUNCT	PUNCT	_	5	punct	_	_
4	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj:pass	_	_
5	נקרא	נקרא	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	_
6	אני	הוא	PRON	PRON	Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
7	לא	לא	ADV	ADV	Polarity=Neg	8	advmod	_	_
8	רוצה	רצה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1|Tense=Pres|VerbForm=Part|Voice=Act	5	parataxis	_	_
9	להגיד	הגיד	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf|Voice=Act	8	xcomp	_	_
10	רמאות	רמה	NOUN	NOUN	Gender=Fem|Number=Sing	9	obj	_	_
11	או	או	CCONJ	CCONJ	_	13	cc	_	_
12	לא	לא	ADV	ADV	Polarity=Neg	13	advmod	_	_
13	רמאות	רמה	NOUN	NOUN	Gender=Fem|Number=Sing	10	conj	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	Entity=(ORG
2	כנסת	כנסת	PROPN	PROPN	_	5	nsubj:pass	_	Entity=ORG)
3	ה	ה	DET	DET	Definite=Def|PronType=Art	4	det	_	_
4	זאת	זה	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	2	det	_	_
5	בנויה	בנה	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	_
6	ב	ב	ADP	ADP	_	7	case	_	_
7	פסיפס	פסיפס	NOUN	NOUN	Gender=Masc|Number=Sing	5	obl	_	_
8	יותר	יותר	ADV	ADV	_	9	advmod	_	_
9	מורכב	מורכב	ADJ	ADJ	Gender=Masc|Number=Sing	7	amod	_	_
10	מ	מ	ADP	ADP	_	12	case	_	_
11	ה	ה	DET	DET	Definite=Def|PronType=Art	12	det	_	_
12	כנסת	כנסת	PROPN	PROPN	_	5	obl	_	_
13	ה	ה	DET	DET	Definite=Def|PronType=Art	14	det	_	_
14	קודמת	קודם	ADJ	ADJ	Gender=Fem|Number=Sing	12	amod	_	_
15	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


