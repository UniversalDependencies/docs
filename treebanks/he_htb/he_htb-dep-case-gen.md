---
layout: base
title:  'Statistics of case:gen in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `case:gen`

This relation is a language-specific subtype of <tt><a href="he_htb-dep-case.html">case</a></tt>.
There are also 1 other language-specific subtypes of `case`: <tt><a href="he_htb-dep-case-acc.html">case:acc</a></tt>.

4849 nodes (3%) are attached to their parents as `case:gen`.

4842 instances of `case:gen` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17405650649618.

The following 10 pairs of parts of speech are connected with `case:gen`: <tt><a href="he_htb-pos-PRON.html">PRON</a></tt>-<tt><a href="he_htb-pos-ADP.html">ADP</a></tt> (2755; 57% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-ADP.html">ADP</a></tt> (1543; 32% instances), <tt><a href="he_htb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_htb-pos-ADP.html">ADP</a></tt> (474; 10% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-ADP.html">ADP</a></tt> (25; 1% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-ADP.html">ADP</a></tt> (16; 0% instances), <tt><a href="he_htb-pos-NUM.html">NUM</a></tt>-<tt><a href="he_htb-pos-ADP.html">ADP</a></tt> (16; 0% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-ADP.html">ADP</a></tt> (14; 0% instances), <tt><a href="he_htb-pos-DET.html">DET</a></tt>-<tt><a href="he_htb-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="he_htb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="he_htb-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="he_htb-pos-ADP.html">ADP</a></tt>-<tt><a href="he_htb-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case:gen	color:blue
1	התבוננתי	התבונן	VERB	VERB	Gender=Fem,Masc|HebBinyan=HITPAEL|Number=Sing|Person=1|Tense=Past	0	root	_	_
2	ב	ב	ADP	ADP	_	3	case	_	_
3	בן	בן	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	1	obl	_	_
4	שיח_	שיח	NOUN	NOUN	Definite=Def|Gender=Masc|Number=Sing	3	compound:smixut	_	_
5	_של_	של	ADP	ADP	_	6	case:gen	_	_
6	_אני	הוא	PRON	PRON	Case=Gen|Gender=Fem,Masc|Number=Sing|Person=1|PronType=Prs	4	nmod:poss	_	_
7	ב	ב	ADP	ADP	_	8	case	_	_
8	הפתעה	הפתעה	NOUN	NOUN	Gender=Fem|Number=Sing	1	obl	_	_
9	ניכרת	ניכר	ADJ	ADJ	Gender=Fem|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 case:gen	color:blue
1	כאן	כאן	ADV	ADV	_	3	advmod	_	_
2	אין	_	ADV	ADV	Polarity=Neg	3	advmod	_	_
3	אוהבים	אהב	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part|Voice=Act	0	root	_	_
4	ביותר	ביותר	ADV	ADV	_	3	advmod	_	_
5	את	את	ADP	ADP	Case=Acc	7	case:acc	_	_
6	ה	ה	DET	DET	Definite=Def|PronType=Art	7	det	_	_
7	רעיון	רעיון	NOUN	NOUN	Gender=Masc|Number=Sing	3	obj	_	_
8	של	של	ADP	ADP	Case=Gen	9	case:gen	_	_
9	מלחמה	מלחמה	NOUN	NOUN	Gender=Fem|Number=Sing	7	nmod:poss	_	_
10	ב	ב	ADP	ADP	_	12	case	_	_
11	ה_	ה	DET	DET	Definite=Def|PronType=Art	12	det	_	_
12	מפרץ	מפרץ	NOUN	NOUN	Gender=Masc|Number=Sing	9	nmod	_	_
13	ה	ה	DET	DET	Definite=Def|PronType=Art	14	det	_	_
14	פרסי	פרסי	ADJ	ADJ	Gender=Masc|Number=Sing	12	amod	_	_
15	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 11 case:gen	color:blue
1	זוהי	זהו	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	_
2	ה	ה	DET	DET	Definite=Def|PronType=Art	3	det	_	_
3	מחצית	מחצית	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
4	ה	ה	DET	DET	Definite=Def|PronType=Art	5	det	_	_
5	צפונית	צפוני	ADJ	ADJ	Gender=Fem|Number=Sing	3	amod	_	_
6	של	של	ADP	ADP	Case=Gen	8	case:gen	_	_
7	ה	ה	DET	DET	Definite=Def|PronType=Art	8	det	_	_
8	מחוז	מחוז	NOUN	NOUN	Gender=Masc|Number=Sing	3	nmod	_	_
9	ה	ה	DET	DET	Definite=Def|PronType=Art	10	det	_	_
10	גרמני	גרמני	ADJ	ADJ	Gender=Masc|Number=Sing	8	amod	_	_
11	של	של	ADP	ADP	Case=Gen	14	case:gen	_	_
12	מזרח	מזרח	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	14	nmod	_	SpaceAfter=No
13	-	-	PUNCT	PUNCT	_	12	punct	_	SpaceAfter=No
14	רוסיה	רוסיה	PROPN	PROPN	_	8	nmod	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


