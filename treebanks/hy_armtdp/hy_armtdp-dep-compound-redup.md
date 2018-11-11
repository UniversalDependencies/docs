---
layout: base
title:  'Statistics of compound:redup in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="hy_armtdp-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="hy_armtdp-dep-compound-svc.html">compound:svc</a></tt>.

31 nodes (0%) are attached to their parents as `compound:redup`.

30 instances of `compound:redup` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.90322580645161.

The following 6 pairs of parts of speech are connected with `compound:redup`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (18; 58% instances), <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (9; 29% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="hy_armtdp-pos-DET.html">DET</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="hy_armtdp-pos-X.html">X</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound:redup	color:blue
1	Վերցված	վերցնել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	2	acl	_	_
2	գերիներին	գերի	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	10	nsubj	_	_
3	և	և	CCONJ	_	_	4	cc	_	_
4	վիրավորներին	վիրավոր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	2	conj	_	_
5	խումբ	խումբ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	10	advmod	_	SpaceAfter=No
6	-	֊	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	խումբ	խումբ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	5	compound:redup	_	_
8	թիկունք	թիկունք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	10	obl	_	_
9	էինք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Imp|VerbForm=Fin	10	aux	_	_
10	ուղարկում	ուղարկել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
11	:	:	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 compound:redup	color:blue
1	Շատ	շատ	ADV	_	Degree=Pos	7	discourse	_	SpaceAfter=No
2	-	-	PUNCT	_	_	3	punct	_	SpaceAfter=No
3	շատ	շատ	ADV	_	Degree=Pos	1	compound:redup	_	SpaceAfter=No
4	՝	՝	PUNCT	_	_	7	punct	_	_
5	Հայաստան	Հայաստան	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	7	nsubj	_	_
6	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	մնա	մնալ	VERB	_	Aspect=Prosp|Connegative=Yes|Mood=Cnd|Subcat=Intr|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	13	punct	_	_
9	ուրեմն	ուրեմն	SCONJ	_	_	13	mark	_	_
10	իրենք	ինքը	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Emp	13	nsubj	_	_
11	էլ	էլ	ADV	_	_	10	advmod:emph	_	_
12	չեն	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	մնա	մնալ	VERB	_	Aspect=Prosp|Connegative=Yes|Mood=Cnd|Subcat=Intr|VerbForm=Fin|Voice=Mid	7	advcl	_	SpaceAfter=No
14	:	:	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 compound:redup	color:blue
1	Այն	այն	PRON	_	Distance=Dist|Number=Sing|PronType=Dem	8	nsubj	_	_
2	մշտապես	մշտապես	ADV	_	_	5	advmod	_	_
3	լեփ	լեփ	ADJ	_	Echo=Ech	5	compound:redup	_	SpaceAfter=No
4	-	-	PUNCT	_	_	5	punct	_	SpaceAfter=No
5	լեցուն	լեցուն	ADJ	_	Degree=Pos	6	amod	_	_
6	դահլիճներում	դահլիճ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Plur	8	obl	_	_
7	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	անցել	անցնել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	10	punct	_	_
10	ներգրավված	ներգրավել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	8	parataxis	_	_
11	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	10	aux	_	_
12	հրաշալի	հրաշալի	ADJ	_	Degree=Pos	14	amod	_	_
13	դերասանական	դերասանական	ADJ	_	_	14	amod	_	_
14	կազմ	կազմ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	10	nsubj:pass	_	SpaceAfter=No
15	:	:	PUNCT	_	_	8	punct	_	_

~~~


