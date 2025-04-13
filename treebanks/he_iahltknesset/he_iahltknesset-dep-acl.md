---
layout: base
title:  'Statistics of acl in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="he_iahltknesset-dep-acl-relcl.html">acl:relcl</a></tt>.

221 nodes (0%) are attached to their parents as `acl`.

221 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.32126696832579.

The following 12 pairs of parts of speech are connected with `acl`: <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (150; 68% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (32; 14% instances), <tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (21; 10% instances), <tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt>-<tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt>-<tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 acl	color:blue
1	זכות	זכות	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
2	ו	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	1	nmod:poss	_	_
3	של	של	ADP	ADP	Case=Gen	4	case	_	_
4	חבר	חבר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	1	nmod:poss	_	Entity=(TTL)
5	כנסת	כנסת	PROPN	PROPN	_	4	compound	_	Entity=(ORG)
6	להגיע	הגיע	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf|Voice=Act	1	acl	_	_
7	ל	ל	ADP	ADP	_	9	case	_	_
8	כל	כול	DET	DET	Definite=Cons|PronType=Tot	9	det	_	_
9	מקום	מקום	NOUN	NOUN	Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl	color:blue
1	ניתן	נתן	VERB	VERB	HebBinyan=PAAL|Number=Plur|Person=1|Tense=Fut|Voice=Act	0	root	_	_
2	ל	ל	ADP	ADP	_	3	case	_	_
3	חברה	חברה	NOUN	NOUN	Gender=Fem|Number=Sing	1	obl	_	_
4	ממשלתית	ממשלתי	ADJ	ADJ	Gender=Fem|Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	8	punct	_	_
6	ש	ש	SCONJ	SCONJ	_	8	mark	_	_
7	היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	שותפה	שותף	NOUN	NOUN	Gender=Fem|Number=Sing	3	acl	_	_
9	ב	ב	ADP	ADP	Definite=Def|PronType=Art	10	case	_	_
10	אתר	אתר	NOUN	NOUN	Gender=Masc|Number=Sing	8	nmod	_	_
11	,	,	PUNCT	PUNCT	_	12	punct	_	_
12	לעשות	עשה	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	1	xcomp	_	_
13	את	את	ADP	ADP	Case=Acc	14	case	_	_
14	הצעת	הצעה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	12	obj	_	_
15	ה	ה	DET	DET	Definite=Def|PronType=Art	16	det	_	_
16	החלטה	החלטה	NOUN	NOUN	Gender=Fem|Number=Sing	14	compound	_	_
17	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl	color:blue
1	גם	גם	ADV	ADV	_	2	advmod	_	_
2	אלה	זה	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Dem	10	nsubj	_	_
3	ש	ש	SCONJ	SCONJ	_	4	mark	_	_
4	תמכו	תמך	VERB	VERB	HebBinyan=PAAL|Number=Plur|Person=3|Tense=Past|Voice=Act	2	acl	_	_
5	ב	ב	ADP	ADP	_	6	case	_	_
6	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	obl	_	_
7	אז	אז	ADV	ADV	_	4	advmod	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	2	punct	_	_
9	לא	לא	ADV	ADV	Polarity=Neg	10	advmod	_	_
10	תמכו	תמך	VERB	VERB	HebBinyan=PAAL|Number=Plur|Person=3|Tense=Past|Voice=Act	0	root	_	_
11	ב	ב	ADP	ADP	_	12	case	_	_
12	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	10	obl	_	_
13	ב	ב	ADP	ADP	Definite=Def|PronType=Art	14	case	_	_
14	עוצמה	עוצמה	NOUN	NOUN	Gender=Fem|Number=Sing	10	obl	_	_
15	ה	ה	DET	DET	Definite=Def|PronType=Art	16	det	_	_
16	מספקת	מספק	ADJ	ADJ	Gender=Fem|Number=Sing	14	amod	_	_
17	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


