---
layout: base
title:  'Statistics of obl:npmod in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Relations: `obl:npmod`

This relation is a language-specific subtype of <tt><a href="he_iahltwiki-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="he_iahltwiki-dep-obl-tmod.html">obl:tmod</a></tt>.

14 nodes (0%) are attached to their parents as `obl:npmod`.

12 instances of `obl:npmod` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.64285714285714.

The following 7 pairs of parts of speech are connected with `obl:npmod`: <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (3; 21% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (3; 21% instances), <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt> (2; 14% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt> (2; 14% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt> (2; 14% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (1; 7% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:npmod	color:blue
1	ב	ב	ADP	ADP	_	2	case	_	_
2	מרכז	מרכז	NOUN	NOUN	Gender=Masc|Number=Sing	4	obl	_	_
3	ו	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	_	_
4	ניצב	ניצב	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=3|Tense=Past|Voice=Mid	0	root	_	_
5	מזבח	מזבח	NOUN	NOUN	Gender=Masc|Number=Sing	4	nsubj	_	_
6	עשוי	עשוי	ADJ	ADJ	Gender=Masc|Number=Sing	5	acl	_	_
7	אבן	אבן	NOUN	NOUN	Gender=Fem|Number=Sing	6	obl:npmod	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 obl:npmod	color:blue
1	מ	מ	ADP	ADP	_	3	case	_	_
2	אז	אז	ADV	ADV	_	1	fixed	_	_
3	תחילת	תחילה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	16	obl	_	_
4	ה	ה	DET	DET	Definite=Def|PronType=Art	5	det	_	_
5	משא	משא	NOUN	NOUN	Gender=Masc|Number=Sing	3	compound	_	_
6	ו	ו	CCONJ	CCONJ	_	7	cc	_	_
7	מתן	מתן	NOUN	NOUN	Gender=Masc|Number=Sing	5	conj	_	_
8	ה	ה	DET	DET	Definite=Def|PronType=Art	9	det	_	_
9	מדיני	מדיני	ADJ	ADJ	Gender=Masc|Number=Sing	5	amod	_	_
10	בין	בין	ADP	ADP	_	11	case	_	_
11	ישראל	ישראל	PROPN	PROPN	_	5	nmod	_	_
12	ל	ל	ADP	ADP	Definite=Def|PronType=Art	13	case	_	_
13	פלסטינים	פלסטיני	NOUN	NOUN	Gender=Masc|Number=Plur	11	conj	_	_
14	,	,	PUNCT	PUNCT	_	3	punct	_	_
15	ישראל	ישראל	PROPN	PROPN	_	16	nsubj	_	_
16	נמנעת	נמנע	VERB	VERB	Gender=Fem|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Mid	0	root	_	_
17	מ	מ	ADP	ADP	_	18	case	_	_
18	הקמת	הקמה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	16	obl	_	_
19	התנחלויות	התנחלות	NOUN	NOUN	Gender=Fem|Number=Plur	18	compound	_	_
20	חדשות	חדש	ADJ	ADJ	Gender=Fem|Number=Plur	19	amod	_	_
21	ו	ו	CCONJ	CCONJ	_	22	cc	_	_
22	נוהגת	נהג	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	16	conj	_	_
23	ריסון	ריסון	NOUN	NOUN	Gender=Masc|Number=Sing	22	obl:npmod	_	_
24	ב	ב	ADP	ADP	_	25	case	_	_
25	אישורי	אישור	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	22	obl	_	_
26	בנייה	בנייה	NOUN	NOUN	Gender=Fem|Number=Sing	25	compound	_	SpaceAfter=No
27	.	.	PUNCT	PUNCT	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 14 obl:npmod	color:blue
1	לצד	לצד	ADP	ADP	_	2	case	_	_
2	צור	צור	PROPN	PROPN	_	6	obl	_	_
3	ו	ו	CCONJ	CCONJ	_	4	cc	_	_
4	יצחק	יצחק	PROPN	PROPN	_	2	conj	_	_
5	יעקב	יעקב	PROPN	PROPN	_	4	flat	_	_
6	השתתף	השתתף	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=3|Tense=Past|Voice=Mid	0	root	_	_
7	ב	ב	ADP	ADP	Definite=Def|PronType=Art	8	case	_	_
8	דיונים	דיון	NOUN	NOUN	Gender=Fem|Number=Sing	6	obl	_	_
9	גם	גם	ADV	ADV	_	10	advmod	_	_
10	אלוף	אלוף	PROPN	PROPN	_	6	nsubj	_	SpaceAfter=No
11	-	-	PUNCT	PUNCT	_	12	punct	_	SpaceAfter=No
12	משנה	משנה	ADV	ADV	Prefix=Yes	10	compound:affix	_	_
13	(	(	PUNCT	PUNCT	_	14	punct	_	SpaceAfter=No
14	מיל'	מיל'	PROPN	PROPN	Abbr=Yes	10	obl:npmod	_	SpaceAfter=No
15	)	)	PUNCT	PUNCT	_	14	punct	_	_
16	יובל	יובל	PROPN	PROPN	_	10	flat	_	_
17	נאמן	נאמן	PROPN	PROPN	_	10	flat	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


