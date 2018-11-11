---
layout: base
title:  'Statistics of compound:lvc in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="hy_armtdp-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="hy_armtdp-dep-compound-svc.html">compound:svc</a></tt>.

170 nodes (1%) are attached to their parents as `compound:lvc`.

166 instances of `compound:lvc` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.34117647058824.

The following 9 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (78; 46% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (56; 33% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (13; 8% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-X.html">X</a></tt> (12; 7% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (3; 2% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 compound:lvc	color:blue
1	Հիմա	հիմա	ADV	_	_	8	advmod	_	_
2	էլ	էլ	ADV	_	_	1	advmod	_	_
3	վերջապես	վերջապես	ADV	_	_	8	advmod	_	_
4	միս	միս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	8	compound:lvc	_	_
5	ու	ու	CCONJ	_	_	6	cc	_	_
6	արյուն	արյուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	compound	_	_
7	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	առել	առնել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
9	։	։	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound:lvc	color:blue
1	Տեղի	տեղի	ADV	_	Style=Arch	2	compound:lvc	_	_
2	ունեցող	ունենալ	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	4	acl	_	_
3	մյուս	մյուս	DET	_	Distance=Dist|PronType=Dem	4	det	_	_
4	պրոցեսներին	պրոցես	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Plur	7	obj	_	_
5	անլուրջ	անլուրջ	ADV	_	Degree=Pos	7	advmod	_	_
6	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	վերաբերվում	վերաբերվել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	SpaceAfter=No
8	:	:	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound:lvc	color:blue
1	Չհաշված	հաշվել	VERB	_	Aspect=Perf|Polarity=Neg|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
2	Հարութը	Հարութ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	1	obj	_	SpaceAfter=No
3	՝	՝	PUNCT	_	_	5	punct	_	_
4	որ	որ	SCONJ	_	_	5	mark	_	_
5	իմացավ	իմանալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	2	acl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	տեղում	տեղ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	9	obl	_	_
8	վզքաշ	վզքաշ	ADJ	_	_	9	compound:lvc	_	_
9	կանի	անել	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	5	advcl	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	գլուխը	գլուխ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	12	obj	_	_
12	կշպրտի	շպրտել	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	9	conj	_	_
13	մի	մի	DET	_	PronType=Art	14	det	_	_
14	կողմ	կողմ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	12	obl	_	SpaceAfter=No
15	...	...	PUNCT	_	_	1	punct	_	_

~~~


