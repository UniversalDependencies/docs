---
layout: base
title:  'Statistics of discourse in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `discourse`

This relation is universal.

23 nodes (0%) are attached to their parents as `discourse`.

17 instances of `discourse` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.65217391304348.

The following 7 pairs of parts of speech are connected with `discourse`: <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-INTJ.html">INTJ</a></tt> (10; 43% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-INTJ.html">INTJ</a></tt> (5; 22% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt> (3; 13% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-INTJ.html">INTJ</a></tt> (1; 4% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 discourse	color:blue
1	אם	אם	SCONJ	SCONJ	_	2	mark	_	_
2	גילית	גילה	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=2|Tense=Past|Voice=Act	10	advcl	_	CxnElt=10:Conditional-NeutralEpistemic.Protasis
3	ש	ש	SCONJ	SCONJ	_	4	mark	_	_
4	יש	יש	VERB	VERB	Polarity=Pos	2	ccomp	_	Cxn=Existential-ExistPred-VblPart
5	שם	שם	ADV	ADV	_	4	advmod	_	_
6	קבר	קבר	NOUN	NOUN	Gender=Masc|Number=Sing	4	nsubj	_	CxnElt=4:Existential-ExistPred-VblPart.Pivot|SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	2	punct	_	_
8	בבקשה	בבקשה	INTJ	INTJ	_	10	discourse	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	8	punct	_	_
10	תעשה	עשה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Mood=Imp|Number=Sing|Person=2|Voice=Act	0	root	_	Cxn=Conditional-NeutralEpistemic|CxnElt=10:Conditional-NeutralEpistemic.Apodosis
11	גשר	גשר	NOUN	NOUN	Gender=Masc|Number=Sing	10	obj	_	_
12	עילי	עילי	ADJ	ADJ	Gender=Masc|Number=Sing	11	amod	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	בבקשה	בבקשה	INTJ	INTJ	_	3	discourse	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	גברת	גברת	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
4	י	הוא	PRON	PRON	Case=Gen|Definite=Def|Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod:poss	_	_
5	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 discourse	color:blue
1	ו	ו	CCONJ	CCONJ	_	12	cc	_	_
2	אני	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	_
3	,	,	PUNCT	PUNCT	_	7	punct	_	_
4	ל	ל	ADP	ADP	_	5	case	_	_
5	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obl	_	_
6	יכולתי	יכל	AUX	AUX	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1|Tense=Past|VerbType=Mod	7	aux	_	_
7	לצאת	יצא	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	2	acl:relcl	_	_
8	ב	ב	ADP	ADP	_	9	case	_	_
9	ססמה	ססמה	NOUN	NOUN	Gender=Fem|Number=Sing	7	obl	_	_
10	היום	היום	ADV	ADV	_	7	advmod	_	_
11	הייתי	היה	AUX	AUX	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1|Tense=Past	12	cop	_	_
12	אומר	אמר	VERB	VERB	Aspect=Prog|Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
13	:	:	PUNCT	PUNCT	_	14	punct	_	_
14	די	די	ADV	ADV	_	12	discourse	_	_
15	ל	ל	ADP	ADP	_	16	case	_	_
16	חברתיות	חברתיות	NOUN	NOUN	Gender=Fem|Number=Plur	14	obl	_	_
17	.	.	PUNCT	PUNCT	_	12	punct	_	_

~~~


