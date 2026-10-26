---
layout: base
title:  'Statistics of obl:pronmod in UD_Russian-SynTagRus'
udver: '2'
---

## Treebank Statistics: UD_Russian-SynTagRus: Relations: `obl:pronmod`

This relation is a language-specific subtype of <tt><a href="ru_syntagrus-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="ru_syntagrus-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="ru_syntagrus-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="ru_syntagrus-dep-obl-float.html">obl:float</a></tt>, <tt><a href="ru_syntagrus-dep-obl-tmod.html">obl:tmod</a></tt>.

250 nodes (0%) are attached to their parents as `obl:pronmod`.

141 instances of `obl:pronmod` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14.

The following 18 pairs of parts of speech are connected with `obl:pronmod`: <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt> (65; 26% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt> (51; 20% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt> (33; 13% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (32; 13% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (17; 7% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (16; 6% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (10; 4% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt> (5; 2% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (4; 2% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt> (4; 2% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="ru_syntagrus-pos-ADV.html">ADV</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="ru_syntagrus-pos-DET.html">DET</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-NUM.html">NUM</a></tt>-<tt><a href="ru_syntagrus-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt>-<tt><a href="ru_syntagrus-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obl:pronmod	color:blue
1	Мало	мало	NUM	_	Case=Nom|NumForm=Word|NumType=Card	2	obl:pronmod	2:obl:pronmod	_
2	кто	кто	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	5	nsubj	5:nsubj	_
3	из	из	ADP	_	_	4	case	4:case	_
4	них	они	PRON	_	Case=Gen|Number=Plur|Person=3|PronType=Prs	1	nmod	1:nmod:из:gen	_
5	шел	идти	VERB	_	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	с	с	ADP	_	_	8	case	8:case	_
7	пустыми	пустой	ADJ	_	Case=Ins|Degree=Pos|Number=Plur	8	amod	8:amod	_
8	руками	рука	NOUN	_	Animacy=Inan|Case=Ins|Gender=Fem|Number=Plur	5	obl	5:obl:с:ins	SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:pronmod	color:blue
1	И	и	CCONJ	_	_	4	cc	4:cc	_
2	редко	редко	ADV	_	Degree=Pos	3	obl:pronmod	3:obl:pronmod	_
3	кто	кто	PRON	_	Animacy=Anim|Case=Nom|PronType=Int,Rel	4	nsubj	4:nsubj	_
4	скажет	сказать	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	:	:	PUNCT	_	_	9	punct	4:punct	_
6	человек	человек	NOUN	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	9:nsubj	_
7	-	-	PUNCT	_	_	6	punct	6:punct	_
8	это	это	PART	_	_	9	expl	9:expl	_
9	душа	душа	NOUN	_	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	parataxis	4:parataxis	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl:pronmod	color:blue
1	Что	что	PRON	_	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Int,Rel	5	obj	5:obj	_
2	в	в	ADP	_	_	3	case	3:case	_
3	принципе	принцип	NOUN	_	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	4	obl	4:obl:в:loc	_
4	можно	можно	VERB	_	_	0	root	0:root	_
5	направить	направить	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	4	csubj	4:csubj	_
6	куда	куда	ADV	_	Degree=Pos|PronType=Ind	5	advmod	5:advmod	pos="ADVPRO"|_
7	угодно	угодно	ADV	_	Degree=Pos	6	obl:pronmod	6:obl:pronmod	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


