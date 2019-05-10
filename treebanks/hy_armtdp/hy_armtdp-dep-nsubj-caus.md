---
layout: base
title:  'Statistics of nsubj:caus in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="hy_armtdp-dep-nsubj-pass.html">nsubj:pass</a></tt>.

10 nodes (0%) are attached to their parents as `nsubj:caus`.

9 instances of `nsubj:caus` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.2.

The following 3 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (5; 50% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (4; 40% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj:caus	color:blue
1	Այդպես	այդպես	ADV	_	Distance=Med|PronType=Dem	3	advmod	_	Translit=aydpes|LTranslit=aydpes
2	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	Translit=ē|LTranslit=em
3	սովորեցրել	սովորել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Cau	0	root	_	Translit=sovorec’rel|LTranslit=sovorel
4	պապս	պապ	NOUN	_	Animacy=Hum|Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nsubj:caus	_	Translit=paps|LTranslit=pap|SpaceAfter=No
5	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:caus	color:blue
1	Վիրակապ	վիրակապ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	compound:lvc	_	Translit=virakap|LTranslit=virakap
2	եմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	Translit=em|LTranslit=em
3	դնում	դնել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=dnowm|LTranslit=dnel|SpaceAfter=No
4	`	`	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
5	ինքն	ինքը	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Emp	7	nsubj:caus	_	Translit=ink’n|LTranslit=ink’ë
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	Translit=ē|LTranslit=em
7	սովորեցրել	սովորել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Cau	3	conj	_	Translit=sovorec’rel|LTranslit=sovorel|SpaceAfter=No
8	:	:	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 13 nsubj:caus	color:blue
1	Կանանցից	կին	NOUN	_	Animacy=Hum|Case=Abl|Definite=Ind|Number=Plur	2	nmod	_	Translit=kananc’ic’|LTranslit=kin
2	երկուսը	երկուս	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing|NumForm=Word	7	nsubj	_	Translit=erkowsë|LTranslit=erkows
3	նրա	նա	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	4	det:poss	_	Translit=nra|LTranslit=na
4	թևերն	թև	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	5	obl	_	Translit=t’ewern|LTranslit=t’ew
5	ընկած	ընկնել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	7	advcl	_	Translit=ënkaç|LTranslit=ënknel
6	քռքաշ	քռքաշ	ADV	_	Style=Vrnc	7	advmod	_	Translit=k’ṙk’aš|LTranslit=k’ṙk’aš
7	տարան	տանել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=taran|LTranslit=tanel
8	տուն	տուն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	7	obl	_	Translit=town|LTranslit=town|SpaceAfter=No
9	,	,	PUNCT	_	_	23	punct	_	Translit=,|LTranslit=,
10	իսկ	իսկ	CCONJ	_	_	23	cc	_	Translit=isk|LTranslit=isk
11	պատշարի	պատշար	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	12	nmod:poss	_	Translit=patšari|LTranslit=patšar
12	կնիկ	կնիկ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	13	nmod	_	Translit=knik|LTranslit=knik
13	Բավականը	Բավական	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	23	nsubj:caus	_	Translit=bavakanë|LTranslit=bavakan
14	մի	մի	DET	_	PronType=Art	23	iobj:agent	_	Translit=mi|LTranslit=mi
15	քանիսին	քանիսը	PRON	_	Case=Dat|Number=Sing|PronType=Ind	14	fixed	_	Translit=k’anisin|LTranslit=k’anisë|SpaceAfter=No
16	,	,	PUNCT	_	_	20	punct	_	Translit=,|LTranslit=,
17	այդ	այդ	DET	_	Distance=Med|PronType=Dem	18	det	_	Translit=ayd|LTranslit=ayd
18	թվում	թիվ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	20	nmod:npmod	_	Translit=t’vowm|LTranslit=t’iv
19	և	և	CCONJ	_	_	20	advmod:emph	_	Translit=ew|LTranslit=ew
20	Սաթոյին	Սաթո	PROPN	_	Animacy=Hum|Case=Dat|Definite=Def|NameType=Giv|Number=Sing	14	conj	_	Translit=sat’oyin|LTranslit=sat’o|SpaceAfter=No
21	,	,	PUNCT	_	_	23	punct	_	Translit=,|LTranslit=,
22	աչքունքով	աչքունք	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	23	obl	_	Translit=ačk’ownk’ov|LTranslit=ačk’ownk’
23	հասկացրեց	հասկանալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Cau	7	conj	_	Translit=haskac’rec’|LTranslit=haskanal|SpaceAfter=No
24	,	,	PUNCT	_	_	28	punct	_	Translit=,|LTranslit=,
25	որ	որ	SCONJ	_	_	28	mark	_	Translit=or|LTranslit=or
26	իր	ինքը	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Emp|Reflex=Yes	28	obl	_	Translit=ir|LTranslit=ink’ë
27	հետևից	հետևից	ADV	_	_	28	compound:lvc	_	Translit=hetewic’|LTranslit=hetewic’
28	գնան	գնալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	23	ccomp	_	Translit=gnan|LTranslit=gnal|SpaceAfter=No
29	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~


