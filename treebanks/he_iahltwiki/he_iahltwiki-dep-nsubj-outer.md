---
layout: base
title:  'Statistics of nsubj:outer in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="he_iahltwiki-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="he_iahltwiki-dep-nsubj-pass.html">nsubj:pass</a></tt>.

92 nodes (0%) are attached to their parents as `nsubj:outer`.

91 instances of `nsubj:outer` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.81521739130435.

The following 14 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (66; 72% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt> (6; 7% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt> (4; 4% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-AUX.html">AUX</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-AUX.html">AUX</a></tt>-<tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:outer	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	הצעה	הצעה	NOUN	NOUN	Gender=Fem|Number=Sing	6	nsubj:outer	_	_
3	ה	ה	DET	DET	Definite=Def|PronType=Art	4	det	_	_
4	שנייה	שני	ADJ	ADJ	Gender=Fem|Number=Sing|NumType=Ord	2	amod	_	_
5	הייתה	היה	AUX	AUX	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|VerbType=Cop	6	cop	_	_
6	ליצור	יצר	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	0	root	_	_
7	מדינה	מדינה	NOUN	NOUN	Gender=Fem|Number=Sing	6	obj	_	_
8	פדרלית	פדרלי	ADJ	ADJ	Gender=Fem|Number=Sing	7	amod	_	_
9	דו	דו	ADV	ADV	Prefix=Yes	11	compound:affix	_	SpaceAfter=No
10	-	-	PUNCT	PUNCT	_	9	punct	_	SpaceAfter=No
11	לאומית	לאומי	ADJ	ADJ	Gender=Fem|Number=Sing	7	amod	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubj:outer	color:blue
1	מי	מי	PRON	PRON	_	9	nsubj:outer	_	Comment=PronType
2	ש	ש	SCONJ	SCONJ	_	3	mark	_	_
3	מנסה	ניסה	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	1	acl:relcl	_	_
4	לפגוע	פגע	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	3	xcomp	_	_
5	ב	ב	ADP	ADP	_	6	case	_	_
6	נו	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=1|PronType=Prs	4	obl	_	_
7	-	-	PUNCT	PUNCT	_	1	punct	_	_
8	אנו	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
9	פוגעים	פגע	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
10	ב	ב	ADP	ADP	_	11	case	_	_
11	ו	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obl	_	_
12	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:outer	color:blue
1	ל	ל	ADP	ADP	_	2	case	_	_
2	אונר"א	אונר"א	PROPN	PROPN	_	3	nsubj:outer	_	_
3	אין	אין	VERB	VERB	Polarity=Neg	0	root	_	_
4	שום	שום	DET	DET	Definite=Cons	5	det	_	_
5	בדיקות	בדיקה	NOUN	NOUN	Gender=Fem|Number=Plur	3	nsubj	_	_
6	ביטחוניות	ביטחוני	ADJ	ADJ	Gender=Fem|Number=Plur	5	amod	_	_
7	לפני	לפני	ADP	ADP	_	8	case	_	_
8	העסקת	העסקה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	5	nmod	_	_
9	עובדים	עובד	NOUN	NOUN	Gender=Masc|Number=Plur	8	compound	_	_
10	ו	ו	CCONJ	CCONJ	_	12	cc	_	_
11	אינה	אינו	AUX	AUX	Gender=Fem|Number=Sing|Polarity=Neg|VerbForm=Part	12	aux	_	_
12	מפקחת	פיקח	VERB	VERB	Gender=Fem|HebBinyan=PIEL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	3	conj	_	_
13	על	על	ADP	ADP	_	15	case	_	_
14	ה	ה	DET	DET	Definite=Def|PronType=Art	15	det	_	_
15	התנהגות	התנהגות	NOUN	NOUN	Gender=Fem|Number=Sing	12	obl	_	_
16	מ	מ	ADP	ADP	_	19	case	_	_
17	חוץ	חוץ	NOUN	NOUN	Gender=Masc|Number=Sing	16	fixed	_	_
18	ל	ל	ADP	ADP	_	16	fixed	_	_
19	זמן	זמן	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	12	obl	_	_
20	ה	ה	DET	DET	Definite=Def|PronType=Art	21	det	_	_
21	עבודה	עבודה	NOUN	NOUN	Gender=Fem|Number=Sing	19	compound	_	_
22	של	של	ADP	ADP	Case=Gen	23	case	_	_
23	עובדי	עובד	NOUN	NOUN	Gender=Masc|Number=Plur	21	nmod:poss	_	_
24	ה	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	23	nmod:poss	_	_
25	כדי	כדי	SCONJ	SCONJ	_	26	mark	_	_
26	להבטיח	הבטיח	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf|Voice=Act	12	advcl	_	_
27	תאימות	תאימות	NOUN	NOUN	Gender=Fem|Number=Sing	26	obl	_	_
28	עם	עם	ADP	ADP	_	30	case	_	_
29	ה	ה	DET	DET	Definite=Def|PronType=Art	30	det	_	_
30	חוקים	חוק	NOUN	NOUN	Gender=Masc|Number=Plur	27	nmod	_	_
31	נגד	נגד	ADP	ADP	_	32	case	_	_
32	טרור	טרור	NOUN	NOUN	Gender=Masc|Number=Sing	30	nmod	_	_
33	של	של	ADP	ADP	Case=Gen	35	case	_	_
34	ה	ה	DET	DET	Definite=Def|PronType=Art	35	det	_	_
35	ארגון	ארגון	NOUN	NOUN	Gender=Masc|Number=Sing	30	nmod:poss	_	_
36	"	"	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No
37	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


