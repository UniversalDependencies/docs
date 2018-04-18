---
layout: base
title:  'Statistics of compound:redup in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="hy_armtdp-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="hy_armtdp-dep-compound-svc.html">compound:svc</a></tt>.

10 nodes (0%) are attached to their parents as `compound:redup`.

10 instances of `compound:redup` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.9.

The following 3 pairs of parts of speech are connected with `compound:redup`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (5; 50% instances), <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (4; 40% instances), <tt><a href="hy_armtdp-pos-DET.html">DET</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 compound:redup	color:blue
1	Ինքը	ինքը	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Emp	2	nsubj	_	_
2	փախել	փախչել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	մտել	մտնել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	2	conj	_	_
5	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	4	aux	_	_
6	գոմը	գոմ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	4	obl	_	SpaceAfter=No
7	՝	՝	PUNCT	_	_	15	punct	_	_
8	մորն	մայր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Sing	15	obj	_	_
9	ու	ու	CCONJ	_	_	11	cc	_	_
10	իր	ինքը	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Emp|Reflex=Yes	11	det:poss	_	_
11	վիժածը	վիժած	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	8	conj	_	_
12	երես	երես	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	15	obl	_	SpaceAfter=No
13	-	-	PUNCT	_	_	14	punct	_	SpaceAfter=No
14	երեսի	երես	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	12	compound:redup	_	_
15	թողած	թողնել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	2	advcl	_	SpaceAfter=No
16	...	...	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 compound:redup	color:blue
1	Ժամանակի	ժամանակ	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	2	nmod:poss	_	_
2	ընթացքում	ընթացք	NOUN	_	Animacy=Inan|Case=Loc|Definite=Ind|Number=Sing	11	obl	_	_
3	խաղաղապահ	խաղաղապահ	ADJ	_	_	4	amod	_	_
4	ուժերի	ուժ	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Plur	5	nmod:poss	_	_
5	վիճակն	վիճակ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	11	nsubj	_	_
6	ու	ու	CCONJ	_	_	7	cc	_	_
7	ներկայությունն	ներկայություն	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	5	conj	_	_
8	ավելի	ավելի	ADV	_	Degree=Cmp	11	advmod	_	_
9	ու	ու	CCONJ	_	_	10	cc	_	_
10	ավելի	ավելի	ADV	_	Degree=Cmp	8	compound:redup	_	_
11	կախված	կախվել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	_
12	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	aux	_	_
13	լինելու	լինել	AUX	_	Aspect=Prosp|VerbForm=Part	11	aux	_	_
14	Ադրբեջանից	Ադրբեջան	PROPN	_	Animacy=Inan|Case=Abl|Definite=Ind|NameType=Geo|Number=Sing	11	obl	_	SpaceAfter=No
15	:	:	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 compound:redup	color:blue
1	Նա	նա	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	մազերը	մազ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Plur	3	obj	_	_
3	հարդարած	հարդարել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
4	պիտի	պիտի	PART	_	Mood=Nec|Polarity=Pos	3	aux	_	_
5	լիներ	լինել	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	3	aux	_	SpaceAfter=No
6	,	,	PUNCT	_	_	13	punct	_	_
7	բայց	բայց	CCONJ	_	_	13	cc	_	_
8	ինչ	ինչ	DET	_	Case=Nom|PronType=Int	11	det	_	SpaceAfter=No
9	-	-	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	ինչ	ինչ	DET	_	Case=Nom|PronType=Int	8	compound:redup	_	_
11	պատճառներով	պատճառ	NOUN	_	Animacy=Inan|Case=Ins|Definite=Ind|Number=Plur	13	obl	_	_
12	չէր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	13	aux	_	_
13	արել	անել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	3	conj	_	_
14	այդ	այդ	DET	_	Distance=Med|PronType=Dem	15	det	_	_
15	օրը	օր	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	13	obl	_	SpaceAfter=No
16	:	:	PUNCT	_	_	3	punct	_	_

~~~


