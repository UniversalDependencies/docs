---
layout: base
title:  'Statistics of csubj in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `csubj`

This relation is universal.

103 nodes (0%) are attached to their parents as `csubj`.

98 instances of `csubj` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.94174757281553.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (68; 66% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (22; 21% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (11; 11% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt>-<tt><a href="he_htb-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 csubj	color:blue
1	סרוסי	סרוסי	PROPN	PROPN	_	3	nsubj:cop	_	_
2	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|Polarity=Pos	3	cop	_	_
3	מלחין	מלחין	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
4	ש	ש	SCONJ	SCONJ	_	5	mark	_	_
5	ראוי	ראוי	ADJ	ADJ	Gender=Masc|Number=Sing	3	acl:relcl	_	Modal=Yes
6	לשים	שם	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	5	csubj	_	_
7	לב	לב	NOUN	NOUN	Gender=Masc|Number=Sing	6	obj	_	_
8	ל	ל	ADP	ADP	_	9	case	_	_
9	התפתחות_	התפתחות	NOUN	NOUN	Definite=Def|Gender=Fem|Number=Sing	6	obl	_	_
10	_של_	של	ADP	ADP	_	11	case:gen	_	_
11	_הוא	הוא	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nmod:poss	_	_
12	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 csubj	color:blue
1	על	על	ADP	ADP	_	2	case	_	_
2	פרס	פרס	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	13	obl	_	_
3	נובל	נובל	NOUN	NOUN	Gender=Masc|Number=Sing	2	flat:name	_	_
4	ל	ל	ADP	ADP	_	5	case	_	_
5	שלום	שלום	NOUN	NOUN	Gender=Masc|Number=Sing	2	nmod	_	_
6	ש	ש	SCONJ	SCONJ	_	7	mark	_	_
7	זכו	זכה	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=3|Tense=Past|Voice=Act	2	acl:relcl	_	_
8	ב_	ב	ADP	ADP	_	9	case	_	_
9	_הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obl	_	_
10	שני	שני	NUM	NUM	Definite=Cons|Gender=Masc|Number=Plur	11	nummod	_	_
11	חתנים	חתן	NOUN	NOUN	Gender=Masc|Number=Plur	7	nsubj	_	_
12	אחרים	אחר	ADJ	ADJ	Gender=Masc|Number=Plur	11	amod	_	_
13	מוטב	מוטב	ADV	ADV	_	0	root	_	Modal=Yes
14	לא	לא	ADV	ADV	Polarity=Neg	13	advmod	_	_
15	לדבר	דיבר	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	13	csubj	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	יש	יש	VERB	VERB	HebExistential=Yes	0	root	_	_
2	ה	ה	SCONJ	SCONJ	_	3	mark	_	_
3	מקבלים	קיבל	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Plur|Person=1,2,3|VerbForm=Part|Voice=Act	1	csubj	_	_
4	תקציב	תקציב	NOUN	NOUN	Gender=Masc|Number=Sing	3	obj	_	_
5	שנתי	שנתי	ADJ	ADJ	Gender=Masc|Number=Sing	4	amod	_	_
6	ב	ב	ADP	ADP	_	7	case	_	_
7	סך	סך	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	4	nmod	_	_
8	350,000	350,000	NUM	NUM	_	9	nummod	_	_
9	שקל	שקל	NOUN	NOUN	Gender=Masc|Number=Sing	7	compound:smixut	_	_
10	בלבד	בלבד	ADV	ADV	_	9	advmod	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


