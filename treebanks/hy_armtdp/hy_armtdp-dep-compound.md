---
layout: base
title:  'Statistics of compound in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `compound`

This relation is universal.
There are 3 language-specific subtypes of `compound`: <tt><a href="hy_armtdp-dep-compound-lvc.html">compound:lvc</a></tt>, <tt><a href="hy_armtdp-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="hy_armtdp-dep-compound-svc.html">compound:svc</a></tt>.

58 nodes (0%) are attached to their parents as `compound`.

52 instances of `compound` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.82758620689655.

The following 10 pairs of parts of speech are connected with `compound`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (41; 71% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (4; 7% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-X.html">X</a></tt> (3; 5% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt>-<tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	Նա	նա	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	Translit=na|LTranslit=na
2	ռազմի	ռազմ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing|Style=Arch	3	compound	_	Translit=ṙazmi|LTranslit=ṙazm
3	դաշտում	դաշտ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	6	obl	_	Translit=daštowm|LTranslit=dašt
4	պարտություն	պարտություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	6	compound:lvc	_	Translit=partowt’yown|LTranslit=partowt’yown
5	չէր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	6	aux	_	Translit=čēr|LTranslit=em
6	կրել	կրել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=krel|LTranslit=krel|SpaceAfter=No
7	:	:	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 compound	color:blue
1	2017	2017	NUM	_	NumForm=Digit|NumType=Card	2	nummod	_	Translit=2017|LTranslit=2017
2	թվականի	թվական	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	3	nmod:poss	_	Translit=t’vakani|LTranslit=t’vakan
3	հունվարին	հունվար	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	21	obl	_	Translit=hownvarin|LTranslit=hownvar
4	Արփա	Արփա	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	7	nmod	_	Translit=arp’a|LTranslit=arp’a|SpaceAfter=No
5	-	-	PUNCT	_	_	6	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
6	Սևան	Սևան	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	4	compound	_	Translit=sewan|LTranslit=sewan
7	ջրատարով	ջրատար	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	11	obl	_	Translit=ǰratarov|LTranslit=ǰratar
8	Սևանա	Սևանա	ADJ	_	NameType=Geo|Poss=Yes	9	amod	_	Translit=sewana|LTranslit=sewana
9	լիճ	լիճ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	11	obl	_	Translit=lič̣|LTranslit=lič̣
10	մուտք	մուտք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	11	compound:lvc	_	Translit=mowtk’|LTranslit=mowtk’
11	գործած	գործել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	12	acl	_	Translit=gorçaç|LTranslit=gorçel
12	ջրի	ջուր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	13	nmod:poss	_	Translit=ǰri|LTranslit=ǰowr
13	ծավալը	ծավալ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	21	nsubj	_	Translit=çavalë|LTranslit=çaval
14	(	(	PUNCT	_	_	15	punct	_	Translit=(|LTranslit=(|SpaceAfter=No
15	ներառյալ	ներառյալ	ADV	_	_	13	parataxis	_	Translit=neraṙyal|LTranslit=neraṙyal
16	ջրատարի	ջրատար	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	17	nmod:poss	_	Translit=ǰratari|LTranslit=ǰratar
17	հատվածքով	հատվածք	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	19	nmod:npmod	_	Translit=hatvaçk’ov|LTranslit=hatvaçk’
18	ստորերկրյա	ստորերկրյա	ADJ	_	_	19	amod	_	Translit=storerkrya|LTranslit=storerkrya
19	ներհոսքը	ներհոսք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	15	obl	_	Translit=nerhosk’ë|LTranslit=nerhosk’|SpaceAfter=No
20	)	)	PUNCT	_	_	15	punct	_	Translit=)|LTranslit=)
21	կազմել	կազմել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=kazmel|LTranslit=kazmel
22	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	21	aux	_	Translit=ē|LTranslit=em
23	2	2	NUM	_	NumForm=Digit|NumType=Card	27	nummod	_	Translit=2|LTranslit=2
24	մլրդ	միլիարդ	NUM	_	Abbr=Yes|NumForm=Word|NumType=Card	23	flat	_	Translit=mlrd|LTranslit=miliard
25	630	630	NUM	_	NumForm=Digit|NumType=Card	23	flat	_	Translit=630|LTranslit=630
26	մլն	միլիոն	NUM	_	Abbr=Yes|NumForm=Word|NumType=Card	23	flat	_	Translit=mln|LTranslit=milion
27	խմ	խմ	NOUN	_	Abbr=Yes|Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	21	obl	_	Translit=xm|LTranslit=xm|SpaceAfter=No
28	,	,	PUNCT	_	_	34	punct	_	Translit=,|LTranslit=,
29	իսկ	իսկ	CCONJ	_	_	34	cc	_	Translit=isk|LTranslit=isk
30	2016	2016	NUM	_	NumForm=Digit|NumType=Card	31	nummod	_	Translit=2016|LTranslit=2016
31	թվականի	թվական	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	32	nmod:poss	_	Translit=t’vakani|LTranslit=t’vakan
32	հունվարին	հունվար	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	34	obl	_	Translit=hownvarin|LTranslit=hownvar
33	այն	այն	PRON	_	Distance=Dist|Number=Sing|PronType=Dem	34	nsubj	_	Translit=ayn|LTranslit=ayn
34	կազմել	կազմել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	21	conj	_	Translit=kazmel|LTranslit=kazmel
35	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	34	aux	_	Translit=ēr|LTranslit=em
36	2	2	NUM	_	NumForm=Digit|NumType=Card	40	nummod	_	Translit=2|LTranslit=2
37	մլրդ	միլիարդ	NUM	_	Abbr=Yes|NumForm=Word|NumType=Card	36	flat	_	Translit=mlrd|LTranslit=miliard
38	471	471	NUM	_	NumForm=Digit|NumType=Card	36	flat	_	Translit=471|LTranslit=471
39	մլն	միլիոն	NUM	_	Abbr=Yes|NumForm=Word|NumType=Card	36	flat	_	Translit=mln|LTranslit=milion
40	խմ	խմ	NOUN	_	Abbr=Yes|Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	34	obl	_	Translit=xm|LTranslit=xm|SpaceAfter=No
41	:	:	PUNCT	_	_	21	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 compound	color:blue
1	Դեմ	դեմ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	3	compound	_	Translit=dem|LTranslit=dem|SpaceAfter=No
2	-	֊	PUNCT	_	_	3	punct	_	Translit=-|LTranslit=-|SpaceAfter=No
3	դիմացի	դիմացի	ADJ	_	_	4	amod	_	Translit=dimac’i|LTranslit=dimac’i
4	գյուղը	գյուղ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	5	obj	_	Translit=gyowġë|LTranslit=gyowġ
5	վերցնելը	վերցնել	VERB	_	Case=Nom|Definite=Def|Number=Coll|Polarity=Pos|Subcat=Tran|VerbForm=Gdv|Voice=Act	6	nsubj	_	Translit=verc’nelë|LTranslit=verc’nel
6	դժվար	դժվար	ADJ	_	Degree=Pos	0	root	_	Translit=džvar|LTranslit=džvar
7	չէր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	6	cop	_	Translit=čēr|LTranslit=em|SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
9	բայց	բայց	CCONJ	_	_	11	cc	_	Translit=bayc’|LTranslit=bayc’
10	չէինք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Imp|VerbForm=Fin	11	aux	_	Translit=čēink’|LTranslit=em
11	ցանկանում	ցանկանալ	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	6	conj	_	Translit=c’ankanowm|LTranslit=c’ankanal
12	տղաներին	տղա	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	13	obj	_	Translit=tġanerin|LTranslit=tġa
13	կորցնել	կորչել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	11	xcomp	_	Translit=korc’nel|LTranslit=korčel|SpaceAfter=No
14	:	:	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~


