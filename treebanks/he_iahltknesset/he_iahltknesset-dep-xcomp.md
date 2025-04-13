---
layout: base
title:  'Statistics of xcomp in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `xcomp`

This relation is universal.

687 nodes (1%) are attached to their parents as `xcomp`.

686 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.01018922852984.

The following 15 pairs of parts of speech are connected with `xcomp`: <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (614; 89% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt> (24; 3% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (20; 3% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="he_iahltknesset-pos-AUX.html">AUX</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 xcomp	color:blue
1	אנחנו	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	נהיה	היה	AUX	AUX	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1|Tense=Fut	3	cop	_	_
3	אלה	זה	PRON	PRON	Gender=Masc|Number=Plur|Person=3|PronType=Dem	0	root	_	_
4	ש	ש	SCONJ	SCONJ	_	5	mark	_	_
5	יצטרכו	הצטרך	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Plur|Person=3|Tense=Fut|Voice=Mid	3	acl:relcl	_	_
6	אחר	אחר	ADP	ADP	_	7	case	_	_
7	כך	כך	PRON	PRON	PronType=Dem	5	obl	_	_
8	לטפל	טיפל	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	5	xcomp	_	_
9	ב	ב	ADP	ADP	Definite=Def|PronType=Art	10	case	_	_
10	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	8	obl	_	_
11	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	אנחנו	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	צריכים	צריך	AUX	AUX	Gender=Masc|Number=Plur|VerbType=Mod	3	aux	_	_
3	להיות	היה	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	0	root	_	_
4	בטוחים	בטוח	ADJ	ADJ	Gender=Masc|Number=Plur	3	xcomp	_	_
5	ש	ש	SCONJ	SCONJ	_	6	mark	_	_
6	אין	אין	VERB	VERB	Polarity=Neg	4	advcl	_	Cxn=Existential-NotExistPred-VblPart
7	פה	פה	ADV	ADV	_	6	advmod	_	_
8	מניפולציות	מניפולציה	NOUN	NOUN	Gender=Fem|Number=Plur	6	nsubj	_	CxnElt=6:Existential-NotExistPred-VblPart.Pivot|SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 xcomp	color:blue
1	לא	לא	ADV	ADV	Polarity=Neg	2	advmod	_	_
2	מדובר	דובר	VERB	VERB	Gender=Masc|HebBinyan=PUAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	_
3	פה	פה	ADV	ADV	_	2	advmod	_	_
4	ב	ב	ADP	ADP	_	6	case	_	_
5	איזו	איזה	PRON	PRON	Gender=Fem|Number=Sing|PronType=Ind	6	det	_	_
6	מלגת	מלגה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	2	obl	_	_
7	קיום	קיום	NOUN	NOUN	Gender=Masc|Number=Sing	6	compound	_	_
8	של	של	ADP	ADP	Case=Gen	9	case	_	_
9	מה	מה	PRON	PRON	PronType=Rel	6	nmod:poss	_	_
10	ש	ש	SCONJ	SCONJ	_	11	mark	_	_
11	נקרא	נקרא	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Pass	9	acl:relcl	_	_
12	חלומות	חלום	NOUN	NOUN	Gender=Masc|Number=Plur	11	xcomp	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


