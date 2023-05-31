---
layout: base
title:  'Statistics of iobj:agent in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `iobj:agent`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-iobj.html">iobj</a></tt>.

12 nodes (0%) are attached to their parents as `iobj:agent`.

8 instances of `iobj:agent` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.66666666666667.

The following 3 pairs of parts of speech are connected with `iobj:agent`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (7; 58% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (4; 33% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 iobj:agent	color:blue
1	Արդեն	արդեն	ADV	_	_	2	advmod	_	Translit=Arden|LTranslit=arden
2	մոտակա	մոտակա	ADJ	_	Degree=Pos	3	amod	_	Translit=motaka|LTranslit=motaka
3	խոտերն	խոտ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	5	iobj:agent	_	Translit=xotern|LTranslit=xot
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	_	Translit=ē|LTranslit=em
5	խշրտացնում	խշրտացնել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Cau	0	root	_	Translit=xšrtac’nowm|LTranslit=xšrtac’nel|SpaceAfter=No
6	...	...	PUNCT	_	_	5	punct	_	Translit=...|LTranslit=...

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj:agent	color:blue
1	Հենց	հենց	ADV	_	_	2	advmod:emph	_	Translit=Henc’|LTranslit=henc’
2	դա	դա	PRON	_	Case=Nom|Deixis=Med|Number=Sing|PronType=Dem	4	nsubj:caus	_	Translit=da|LTranslit=da
3	էլ	էլ	ADV	_	_	2	advmod:emph	_	Translit=ēl|LTranslit=ēl
4	հիվանդացրել	հիվանդացնել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Cau	0	root	_	Translit=hivandac’rel|LTranslit=hivandac’nel
5	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	4	aux	_	Translit=ēr|LTranslit=em
6	նրան	նա	PRON	_	Case=Dat|Definite=Def|Number=Sing|Person=3|PronType=Prs	4	iobj:agent	_	Translit=nran|LTranslit=na|SpaceAfter=No
7	:	:	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 14 iobj:agent	color:blue
1	Կանանցից	կին	NOUN	_	Animacy=Hum|Case=Abl|Definite=Ind|Number=Plur	2	nmod	_	Translit=Kananc’ic’|LTranslit=kin
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
12	կնիկ	կնիկ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing|Style=Coll	13	nmod	_	Translit=knik|LTranslit=knik
13	Բավականը	Բավական	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	23	nsubj:caus	_	Translit=Bavakanë|LTranslit=Bavakan
14	մի	մի	DET	_	PronType=Art	23	iobj:agent	_	Translit=mi|LTranslit=mi
15	քանիսին	քանիսը	PRON	_	Case=Dat|Number=Sing|PronType=Ind	14	fixed	_	Translit=k’anisin|LTranslit=k’anisë|SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	Translit=,|LTranslit=,
17	այդ	այդ	DET	_	Deixis=Med|PronType=Dem	14	advmod:emph	_	Translit=ayd|LTranslit=ayd
18	թվում	թիվ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	17	fixed	_	Translit=t’vowm|LTranslit=t’iv
19	և	և	CCONJ	_	_	17	fixed	_	Translit=ew|LTranslit=ew
20	Սաթոյին	Սաթո	PROPN	_	Animacy=Hum|Case=Dat|Definite=Def|NameType=Giv|Number=Sing	17	obl	_	Translit=Sat’oyin|LTranslit=Sat’o|SpaceAfter=No
21	,	,	PUNCT	_	_	23	punct	_	Translit=,|LTranslit=,
22	աչքունքով	աչքունք	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	23	obl	_	Translit=ačk’ownk’ov|LTranslit=ačk’ownk’
23	հասկացրեց	հասկանալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Cau	7	conj	_	Translit=haskac’rec’|LTranslit=haskanal|SpaceAfter=No
24	,	,	PUNCT	_	_	28	punct	_	Translit=,|LTranslit=,
25	որ	որ	SCONJ	_	_	28	mark	_	Translit=or|LTranslit=or
26	իր	ինքը	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Emp	28	obl	_	Translit=ir|LTranslit=ink’ë
27	հետևից	հետև	ADP	_	AdpType=Post|Case=Abl	26	case:loc	_	Translit=hetewic’|LTranslit=hetew
28	գնան	գնալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	23	ccomp	_	Translit=gnan|LTranslit=gnal|SpaceAfter=No
29	։	։	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~


