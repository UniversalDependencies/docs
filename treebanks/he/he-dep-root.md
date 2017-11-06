---
layout: base
title:  'Statistics of root in UD_Hebrew'
udver: '2'
---

## Treebank Statistics: UD_Hebrew: Relations: `root`

This relation is universal.

6216 nodes (4%) are attached to their parents as `root`.

6216 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.98439510939511.

The following 12 pairs of parts of speech are connected with `root`: -<tt><a href="he-pos-VERB.html">VERB</a></tt> (4736; 76% instances), -<tt><a href="he-pos-NOUN.html">NOUN</a></tt> (608; 10% instances), -<tt><a href="he-pos-AUX.html">AUX</a></tt> (360; 6% instances), -<tt><a href="he-pos-ADJ.html">ADJ</a></tt> (263; 4% instances), -<tt><a href="he-pos-PROPN.html">PROPN</a></tt> (108; 2% instances), -<tt><a href="he-pos-ADV.html">ADV</a></tt> (66; 1% instances), -<tt><a href="he-pos-PRON.html">PRON</a></tt> (34; 1% instances), -<tt><a href="he-pos-CCONJ.html">CCONJ</a></tt> (16; 0% instances), -<tt><a href="he-pos-NUM.html">NUM</a></tt> (9; 0% instances), -<tt><a href="he-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), -<tt><a href="he-pos-X.html">X</a></tt> (6; 0% instances), -<tt><a href="he-pos-DET.html">DET</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	ה	ה	DET	DET	PronType=Art	2	det:def	_	_
2	מוח	מוח	NOUN	NOUN	Gender=Masc|Number=Sing	3	nsubj	_	_
3	מתפלץ	התפלץ	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
4	לא	לא	ADV	ADV	Polarity=Neg	5	advmod	_	_
5	רק	רק	ADV	ADV	_	6	advmod	_	_
6	מ	מ	ADP	ADP	_	8	case	_	_
7	ה	ה	DET	DET	PronType=Art	8	det:def	_	_
8	תופעה	תופעה	NOUN	NOUN	Gender=Fem|Number=Sing	3	obl	_	_
9	ה	ה	DET	DET	PronType=Art	10	det:def	_	_
10	מבישה	מביש	ADJ	ADJ	Gender=Fem|Number=Sing	8	amod	_	_
11	אלא	אלא	CCONJ	CCONJ	_	14	cc	_	_
12	גם	גם	ADV	ADV	_	13	advmod	_	_
13	מ	מ	ADP	ADP	_	14	case	_	_
14	דרכי	דרך	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Plur	8	conj	_	_
15	ה	ה	DET	DET	PronType=Art	16	det:def	_	_
16	הערמה	הערמה	NOUN	NOUN	Gender=Fem|Number=Sing	14	compound:smixut	_	_
17	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 17 root	color:blue
1	מורשת	מורשת	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	17	nsubj	_	_
2	ה	ה	DET	DET	PronType=Art	3	det:def	_	_
3	קרב	קרב	NOUN	NOUN	Gender=Masc|Number=Sing	1	compound:smixut	_	_
4	ש	ש	SCONJ	SCONJ	_	6	mark	_	_
5	צה"ל	צה"ל	PROPN	PROPN	Abbr=Yes	6	nsubj	_	_
6	אימץ	אימץ	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=3|Tense=Past|Voice=Act	1	acl:relcl	_	_
7	כ	כ	ADP	ADP	_	8	case	_	_
8	תוצאה	תוצאה	NOUN	NOUN	Gender=Fem|Number=Sing	6	obl	_	_
9	מ	מ	ADP	ADP	_	11	case	_	_
10	ה	ה	DET	DET	PronType=Art	11	det:def	_	_
11	קרב	קרב	NOUN	NOUN	Gender=Masc|Number=Sing	8	nmod	_	_
12	על	על	ADP	ADP	_	13	case	_	_
13	מנזר	מנזר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	11	nmod	_	_
14	סן	סן	PROPN	PROPN	_	13	compound:smixut	_	_
15	סימון	סימון	PROPN	PROPN	_	14	flat:name	_	_
16	איננה	אינו	VERB	VERB	Gender=Fem|Number=Sing|Person=3|Polarity=Neg|VerbForm=Part|VerbType=Cop	17	advmod	_	_
17	מיתוס	מיתוס	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	שם	שם	ADV	ADV	_	3	advmod	_	_
2	היה	היה	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	3	aux	_	_
3	אמור	אמור	AUX	AUX	Gender=Masc|Number=Sing|Person=1,2,3|VerbType=Mod	0	root	_	_
4	להיפגש	נפגש	VERB	VERB	HebBinyan=NIFAL|VerbForm=Inf|Voice=Mid	3	xcomp	_	_
5	עם	עם	ADP	ADP	_	6	case	_	_
6	איש_	איש	NOUN	NOUN	Definite=Def|Gender=Fem|Number=Sing	4	obl	_	_
7	_של_	של	ADP	ADP	_	8	case:gen	_	_
8	_הוא	הוא	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	_
9	,	,	PUNCT	PUNCT	_	6	punct	_	_
10	ש	ש	SCONJ	SCONJ	_	11	mark	_	_
11	עשתה	עשה	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	6	acl:relcl	_	_
12	ב	ב	ADP	ADP	_	13	case	_	_
13	בוסטון	בוסטון	PROPN	PROPN	_	11	obl	_	_
14	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


