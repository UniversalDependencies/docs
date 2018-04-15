---
layout: base
title:  'Statistics of obl:tmod in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="he_htb-dep-obl.html">obl</a></tt>.

231 nodes (0%) are attached to their parents as `obl:tmod`.

171 instances of `obl:tmod` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.58874458874459.

The following 4 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (218; 94% instances), <tt><a href="he_htb-pos-AUX.html">AUX</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (6; 3% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (6; 3% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obl:tmod	color:blue
1	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	נוצח	נוצח	VERB	VERB	Gender=Masc|HebBinyan=PUAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
3	השבוע	השבוע	ADV	ADV	_	2	obl:tmod	_	_
4	ב	ב	ADP	ADP	_	5	case	_	_
5	הפרש	הפרש	NOUN	NOUN	Gender=Masc|Number=Sing	2	obl	_	_
6	של	של	PART	PART	Case=Gen	8	case:gen	_	_
7	שני	שני	NUM	NUM	Definite=Cons|Gender=Masc|Number=Plur	8	nummod	_	_
8	אחוזים	אחוז	NOUN	NOUN	Gender=Masc|Number=Plur	5	nmod:poss	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 obl:tmod	color:blue
1	אתמול	אתמול	ADV	ADV	_	2	obl:tmod	_	_
2	ערך	ערך	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
3	לאזארק	לאזארק	PROPN	PROPN	_	2	nsubj	_	_
4	אימון	אימון	NOUN	NOUN	Gender=Masc|Number=Sing	2	obj	_	_
5	ו	ו	CCONJ	CCONJ	_	7	cc	_	_
6	היום	היום	ADV	ADV	_	7	obl:tmod	_	_
7	אמור	אמור	AUX	AUX	Gender=Masc|Number=Sing|Person=1,2,3|VerbType=Mod	2	conj	_	_
8	להיות	היה	VERB	VERB	Polarity=Pos|VerbForm=Inf|VerbType=Cop	7	xcomp	_	_
9	אימון	אימון	NOUN	NOUN	Gender=Masc|Number=Sing	7	nsubj	_	_
10	נוסף	נוסף	ADJ	ADJ	Gender=Masc|Number=Sing	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 obl:tmod	color:blue
1	נושא	נושא	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	11	nsubj:cop	_	_
2	ה	ה	DET	DET	PronType=Art	3	det:def	_	_
3	לימוד	לימוד	NOUN	NOUN	Gender=Masc|Number=Sing	1	compound:smixut	_	_
4	ב	ב	ADP	ADP	_	5	case	_	_
5	בתי	בית	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	1	nmod	_	_
6	ה	ה	DET	DET	PronType=Art	7	det:def	_	_
7	ספר	ספר	NOUN	NOUN	Gender=Masc|Number=Sing	5	compound:smixut	_	_
8	השנה	השנה	ADV	ADV	_	11	obl:tmod	_	_
9	הוא	הוא	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|VerbForm=Part|VerbType=Cop	11	cop	_	_
10	"	"	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
11	עלייה	עלייה	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
12	ו	ו	CCONJ	CCONJ	_	13	cc	_	_
13	קליטה	קליטה	NOUN	NOUN	Gender=Fem|Number=Sing	11	conj	_	_
14	"	"	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	11	punct	_	_

~~~


