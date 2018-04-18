---
layout: base
title:  'Statistics of amod in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `amod`

This relation is universal.

786 nodes (6%) are attached to their parents as `amod`.

786 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29262086513995.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (759; 97% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (18; 2% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	Մատները	մատ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Plur	3	obj	_	_
2	բերանը	բերան	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	3	obl	_	_
3	խցկած	խցկել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	7	acl	_	_
4	ինչ	ինչ	DET	_	Case=Nom|PronType=Int	7	det	_	SpaceAfter=No
5	-	-	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	որ	որ	PART	_	_	4	fixed	_	_
7	մեկը	մեկ	PRON	_	Case=Nom|Definite=Def|Number=Sing|PronType=Ind	11	nsubj	_	_
8	պայմանական	պայմանական	ADJ	_	_	9	amod	_	_
9	ազդանշան	ազդանշան	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	11	obj	_	_
10	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	11	aux	_	_
11	տալիս	տալ	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
12	։	։	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 amod	color:blue
1	2016	2016	NUM	_	NumForm=Digit|NumType=Card	2	nummod	_	_
2	թվականի	թվական	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	3	nmod:poss	_	_
3	հունվարին	հունվար	NOUN	_	Animacy=Inan|Case=Dat|Definite=Def|Number=Sing	7	obl	_	_
4	Մեծ	մեծ	ADJ	_	Degree=Pos	5	amod	_	_
5	Սևանի	Սևան	PROPN	_	Animacy=Inan|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	6	nmod:poss	_	_
6	ծավալը	ծավալ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	_
7	կազմել	կազմել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
8	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	7	aux	_	_
9	23,83	23,83	NUM	_	NumForm=Digit|NumType=Frac	11	nummod	_	_
10	մլրդ	միլիարդ	NUM	_	Abbr=Yes|NumForm=Word|NumType=Card	9	flat	_	_
11	խմ	խմ	NOUN	_	Abbr=Yes|Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	7	obl	_	SpaceAfter=No
12	,	,	PUNCT	_	_	15	punct	_	_
13	իսկ	իսկ	CCONJ	_	_	15	cc	_	_
14	Փոքր	փոքր	ADJ	_	Degree=Pos	15	amod	_	_
15	Սևանինը	Սևանին	PROPN	_	Animacy=Inan|Case=Nom|Definite=Def|NameType=Geo|Number=Sing|Number[psor]=Sing|Poss=Yes	7	conj	_	SpaceAfter=No
16	`	`	PUNCT	_	_	18	punct	_	_
17	13,99	13,99	NUM	_	NumForm=Digit|NumType=Frac	18	nummod	_	_
18	մլրդ	միլիարդ	NOUN	_	Abbr=Yes|Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	15	orphan	_	SpaceAfter=No
19	:	:	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 amod	color:blue
1	«	«	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Հայաստանում	Հայաստան	PROPN	_	Animacy=Inan|Case=Loc|Definite=Ind|NameType=Geo|Number=Sing	3	obl	_	_
3	կիրականացվեն	իրականանալ	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	կանոնավոր	կանոնավոր	ADJ	_	Degree=Pos	6	amod	_	_
5	կառուցվածքային	կառուցվածքային	ADJ	_	_	6	amod	_	_
6	բարեփոխումներ	բարեփոխում	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Plur	3	nsubj:pass	_	SpaceAfter=No
7	,	,	PUNCT	_	_	13	punct	_	_
8	անգամ	անգամ	ADV	_	_	13	advmod	_	_
9	եթե	եթե	SCONJ	_	_	13	mark	_	_
10	այդ	այդ	DET	_	Distance=Med|PronType=Dem	11	amod	_	_
11	բարեփոխումները	բարեփոխում	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Plur	13	nsubj	_	_
12	ժողովրդականություն	ժողովրդականություն	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	13	obj	_	_
13	չվայելեն	վայելել	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Neg|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	SpaceAfter=No
14	»	»	PUNCT	_	_	3	punct	_	SpaceAfter=No
15	,	,	PUNCT	_	_	17	punct	_	SpaceAfter=No
16	-	-	PUNCT	_	_	17	punct	_	_
17	ասել	ասել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	3	parataxis	_	_
18	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	17	aux	_	_
19	Կարապետյանը	Կարապետյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	17	nsubj	_	SpaceAfter=No
20	:	:	PUNCT	_	_	3	punct	_	_

~~~


