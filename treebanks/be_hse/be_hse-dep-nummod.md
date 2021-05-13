---
layout: base
title:  'Statistics of nummod in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="be_hse-dep-nummod-gov.html">nummod:gov</a></tt>.

1591 nodes (1%) are attached to their parents as `nummod`.

1508 instances of `nummod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33689503456945.

The following 15 pairs of parts of speech are connected with `nummod`: <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (1272; 80% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (138; 9% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (68; 4% instances), <tt><a href="be_hse-pos-SYM.html">SYM</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (60; 4% instances), <tt><a href="be_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (16; 1% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="be_hse-pos-NUM.html">NUM</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="be_hse-pos-SYM.html">SYM</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="be_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="be_hse-pos-X.html">X</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="be_hse-pos-DET.html">DET</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-NUM.html">NUM</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-PART.html">PART</a></tt>-<tt><a href="be_hse-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	"	"	PUNCT	PUNCT	_	4	punct	4:punct	SpaceAfter=No
2	Мы	мы	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	4:nsubj	_
3	часта	часта	ADV	RB	Degree=Pos	4	advmod	4:advmod	_
4	рухаемся	рухацца	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	0:root	_
5	дзесьці	дзесьці	ADV	RB	Degree=Pos	9	advmod	9:advmod	_
6	паміж	паміж	ADP	IN	_	9	case	9:case	_
7	гэтымі	гэты	DET	DT	Case=Ins|Number=Plur|PronType=Dem	9	det	9:det	_
8	двума	два	NUM	CD	Case=Ins|Gender=Masc|NumType=Card	9	nummod	9:nummod	_
9	падыходамі	падыход	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Masc|Number=Plur	4	obl	4:obl:паміж:ins	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nummod	color:blue
1	Насельніцтва	насельніцтва	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	3	nsubj	3:nsubj	_
2	раёна	раён	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	1:nmod:gen	_
3	складае	складаць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	29,7	29,7	NUM	CD	NumType=Card	5	nummod:gov	5:nummod:gov	_
5	тыс.	тысяча	NOUN	NN	Abbr=Yes	6	nummod	6:nummod	_
6	чалавек	чалавек	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	3	obj	3:obj	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	ДВУХ	два	NUM	CD	Animacy=Anim|Case=Acc|Gender=Masc|NumType=Card	2	nummod	2:nummod	_
2	ПАСАДЗІЛІ	пасадзіць	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	5	punct	5:punct	_
4	ТРЭЦЯГА	трэці	ADJ	JJL	Animacy=Anim|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	5	obj	5:obj	_
5	АШТРАФАВАЛІ	аштрафаваць	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	0:root|2:conj	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	2	punct	2:punct	_

~~~


