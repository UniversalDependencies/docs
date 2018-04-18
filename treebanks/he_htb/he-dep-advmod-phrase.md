---
layout: base
title:  'Statistics of advmod:phrase in UD_Hebrew'
udver: '2'
---

## Treebank Statistics: UD_Hebrew: Relations: `advmod:phrase`

This relation is a language-specific subtype of <tt><a href="he-dep-advmod.html">advmod</a></tt>.
There are also 1 other language-specific subtypes of `advmod`: <tt><a href="he-dep-advmod-inf.html">advmod:inf</a></tt>.

170 nodes (0%) are attached to their parents as `advmod:phrase`.

86 instances of `advmod:phrase` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.44117647058824.

The following 13 pairs of parts of speech are connected with `advmod:phrase`: <tt><a href="he-pos-VERB.html">VERB</a></tt>-<tt><a href="he-pos-ADV.html">ADV</a></tt> (135; 79% instances), <tt><a href="he-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he-pos-ADV.html">ADV</a></tt> (7; 4% instances), <tt><a href="he-pos-AUX.html">AUX</a></tt>-<tt><a href="he-pos-ADV.html">ADV</a></tt> (7; 4% instances), <tt><a href="he-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he-pos-ADV.html">ADV</a></tt> (5; 3% instances), <tt><a href="he-pos-VERB.html">VERB</a></tt>-<tt><a href="he-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="he-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="he-pos-VERB.html">VERB</a></tt>-<tt><a href="he-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="he-pos-VERB.html">VERB</a></tt>-<tt><a href="he-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="he-pos-VERB.html">VERB</a></tt>-<tt><a href="he-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="he-pos-VERB.html">VERB</a></tt>-<tt><a href="he-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="he-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="he-pos-VERB.html">VERB</a></tt>-<tt><a href="he-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="he-pos-VERB.html">VERB</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 advmod:phrase	color:blue
1	בני	בן	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	5	nsubj	_	_
2	ה	ה	DET	DET	PronType=Art	3	det:def	_	_
3	זוג	זוג	NOUN	NOUN	Gender=Masc|Number=Sing	1	compound:smixut	_	_
4	גרוסבורד	גרוסבורד	PROPN	PROPN	_	1	appos	_	_
5	תוכננו	תוכנן	VERB	VERB	Gender=Fem,Masc|HebBinyan=PUAL|Number=Plur|Person=3|Tense=Past|Voice=Pass	0	root	_	_
6	לשוב	שב	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	5	xcomp	_	_
7	היום	היום	ADV	ADV	_	6	advmod:phrase	_	_
8	אחרי	אחרי	ADP	ADP	_	11	case	_	SpaceAfter=No
9	-	-	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No
10	ה	ה	DET	DET	PronType=Art	11	det:def	_	_
11	צהריים	צהריים	NOUN	NOUN	Gender=Masc|Number=Plur	7	advmod	_	_
12	ל	ל	ADP	ADP	_	13	case	_	_
13	ישראל	ישראל	PROPN	PROPN	_	6	obl	_	_
14	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 advmod:phrase	color:blue
1	ה	ה	DET	DET	PronType=Art	2	det:def	_	_
2	נושאים	נושא	NOUN	NOUN	Gender=Masc|Number=Plur	13	nsubj	_	_
3	ה	ה	SCONJ	SCONJ	_	4	mark	_	_
4	מוכרים	הוכר	VERB	VERB	Gender=Masc|Number=Plur|Person=1,2,3|VerbForm=Part	2	acl:relcl	_	_
5	מן	מן	ADP	ADP	_	7	case	_	_
6	ה	ה	DET	DET	PronType=Art	7	det:def	_	_
7	טקסטים	טקסט	NOUN	NOUN	Gender=Masc|Number=Plur	4	obl	_	_
8	ו	ו	CCONJ	CCONJ	_	10	cc	_	_
9	ה	ה	DET	DET	PronType=Art	10	det:def	_	_
10	מחזות	מחזה	NOUN	NOUN	Gender=Masc|Number=Plur	7	conj	_	_
11	של	של	PART	PART	Case=Gen	12	case:gen	_	_
12	לוין	לוין	PROPN	PROPN	_	7	nmod:poss	_	_
13	מצויים	מצוי	ADJ	ADJ	Gender=Masc|Number=Plur	0	root	_	_
14	גם	גם	ADV	ADV	_	15	advmod	_	_
15	כאן	כאן	ADV	ADV	_	13	advmod:phrase	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 advmod:phrase	color:blue
1	גזר	גזר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	7	nsubj	_	_
2	דין_	דין	NOUN	NOUN	Definite=Def|Gender=Masc|Number=Sing	1	compound:smixut	_	_
3	_של_	של	ADP	ADP	_	4	case:gen	_	_
4	_הוא	הוא	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nmod:poss	_	_
5	של	של	PART	PART	Case=Gen	6	case:gen	_	_
6	מילקן	מילקן	PROPN	PROPN	_	1	nmod:poss	_	_
7	אמור	אמור	AUX	AUX	Gender=Masc|Number=Sing|Person=1,2,3|VerbType=Mod	0	root	_	_
8	להיחרץ	נחרץ	VERB	VERB	HebBinyan=NIFAL|VerbForm=Inf|Voice=Mid	7	xcomp	_	_
9	החודש	החודש	ADV	ADV	_	7	advmod:phrase	_	SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	9	punct	_	_
11	אולי	אולי	ADV	ADV	_	13	advmod	_	_
12	אף	_	ADV	ADV	_	13	advmod	_	_
13	השבוע	השבוע	ADV	ADV	_	9	conj	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


