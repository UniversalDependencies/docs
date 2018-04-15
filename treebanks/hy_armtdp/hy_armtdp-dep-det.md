---
layout: base
title:  'Statistics of det in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="hy_armtdp-dep-det-poss.html">det:poss</a></tt>.

314 nodes (3%) are attached to their parents as `det`.

314 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26751592356688.

The following 6 pairs of parts of speech are connected with `det`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (288; 92% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (18; 6% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Որն	որ	PRON	_	Case=Nom|Definite=Def|Number=Sing|PronType=Int	0	root	_	_
2	՞	՞	PUNCT	_	_	1	punct	_	_
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	_
4	այդ	այդ	DET	_	Distance=Med|PronType=Dem	5	det	_	_
5	փոփոխության	փոփոխություն	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	6	nmod:poss	_	_
6	պատճառը	պատճառ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	1	nsubj	_	SpaceAfter=No
7	։	։	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 det	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det	color:blue
1	Հայ	հայ	ADJ	_	_	2	amod	_	_
2	ոստիկանները	ոստիկան	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	7	nsubj	_	_
3	ոչ	ոչ	PART	_	_	5	det	_	_
4	մի	մի	DET	_	PronType=Art	3	fixed	_	_
5	անգամ	անգամ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	7	obl	_	_
6	բռնություն	բռնություն	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	7	obj	_	_
7	չկիրառեցին	կիրառել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
8	:	:	PUNCT	_	_	7	punct	_	_

~~~


