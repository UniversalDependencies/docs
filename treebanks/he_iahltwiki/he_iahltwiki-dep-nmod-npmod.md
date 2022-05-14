---
layout: base
title:  'Statistics of nmod:npmod in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="he_iahltwiki-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="he_iahltwiki-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="he_iahltwiki-dep-nmod-tmod.html">nmod:tmod</a></tt>.

43 nodes (0%) are attached to their parents as `nmod:npmod`.

43 instances of `nmod:npmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.93023255813953.

The following 9 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (20; 47% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt> (7; 16% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (5; 12% instances), <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (5; 12% instances), <tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt>-<tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-SYM.html">SYM</a></tt> (1; 2% instances), <tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:npmod	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	סוכנות	סוכנות	NOUN	NOUN	Gender=Fem|Number=Sing	3	nsubj:pass	_	_
3	הוקמה	הוקם	VERB	VERB	Gender=Fem|HebBinyan=HUFAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
4	על	על	ADP	ADP	_	6	case	_	_
5	סמך	סמך	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	4	fixed	_	_
6	החלטה	החלטה	NOUN	NOUN	Gender=Fem|Number=Sing	3	obl	_	_
7	302	302	NUM	NUM	_	6	nmod:npmod	_	Comment=deprel
8	של	של	ADP	ADP	Case=Gen	10	case	_	_
9	ה	ה	DET	DET	Definite=Def|PronType=Art	10	det	_	_
10	עצרת	עצרת	PROPN	PROPN	_	6	nmod:poss	_	_
11	ה	ה	DET	DET	Definite=Def|PronType=Art	12	det	_	_
12	כללית	כללי	ADJ	ADJ	Gender=Fem|Number=Sing	10	amod	_	_
13	של	של	ADP	ADP	Case=Gen	15	case	_	_
14	ה	ה	DET	DET	Definite=Def|PronType=Art	15	det	_	_
15	או"ם	או"ם	PROPN	PROPN	Abbr=Yes	10	nmod:poss	_	_
16	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:npmod	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	חצר	חצר	NOUN	NOUN	Gender=Fem|Number=Sing	9	nsubj	_	_
3	עצמה	עצמו	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Emp|Reflex=Yes	2	nmod:npmod	_	_
4	ו	ו	CCONJ	CCONJ	_	6	cc	_	_
5	ה	ה	DET	DET	Definite=Def|PronType=Art	6	det	_	_
6	מנזרים	מנזר	NOUN	NOUN	Gender=Masc|Number=Plur	2	conj	_	_
7	סביב	סביב	ADP	ADP	_	8	case	_	_
8	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	acl:relcl	_	_
9	מהווים	היווה	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Plur|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
10	חלק	חלק	NOUN	NOUN	Gender=Masc|Number=Sing	9	obj	_	_
11	אינטגרלי	אינטגרלי	ADJ	ADJ	Gender=Masc|Number=Sing	10	amod	_	_
12	מ	מ	ADP	ADP	_	14	case	_	_
13	ה	ה	DET	DET	Definite=Def|PronType=Art	14	det	_	_
14	כנסייה	כנסייה	NOUN	NOUN	Gender=Fem|Number=Sing	10	nmod	_	_
15	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:npmod	color:blue
1	לעומת	לעומת	ADP	ADP	_	2	case	_	_
2	זאת	זה	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	11	obl	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	2	punct	_	_
4	ב	ב	ADP	ADP	_	5	case	_	_
5	סוכרת	סוכרת	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	11	obl	_	_
6	סוג	סוג	NOUN	NOUN	Gender=Masc|Number=Sing	5	nmod:npmod	_	_
7	2	2	NUM	NUM	_	6	xcomp	_	_
8	ו	ו	CCONJ	CCONJ	_	9	cc	_	_
9	סוכרת	סוכרת	NOUN	NOUN	Gender=Fem|Number=Sing	6	conj	_	_
10	הריונית	הריוני	ADJ	ADJ	Gender=Fem|Number=Sing	9	amod	_	_
11	יש	יש	VERB	VERB	_	0	root	_	_
12	תנגודת	תנגודת	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	11	nsubj	_	_
13	אינסולין	אינסולין	NOUN	NOUN	Gender=Masc|Number=Sing	12	compound	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	11	punct	_	_

~~~


