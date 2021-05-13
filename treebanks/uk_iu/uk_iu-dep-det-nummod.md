---
layout: base
title:  'Statistics of det:nummod in UD_Ukrainian-IU'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-IU: Relations: `det:nummod`

This relation is a language-specific subtype of <tt><a href="uk_iu-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="uk_iu-dep-det-numgov.html">det:numgov</a></tt>.

35 nodes (0%) are attached to their parents as `det:nummod`.

35 instances of `det:nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37142857142857.

The following 3 pairs of parts of speech are connected with `det:nummod`: <tt><a href="uk_iu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_iu-pos-DET.html">DET</a></tt> (33; 94% instances), <tt><a href="uk_iu-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_iu-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="uk_iu-pos-X.html">X</a></tt>-<tt><a href="uk_iu-pos-DET.html">DET</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det:nummod	color:blue
1	Кількість	кількість	NOUN	Ncfsnn	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	4:nsubj|5:nsubj:x	Id=2d5n|LTranslit=kiľkisť|Translit=Kiľkisť
2	таких	такий	DET	Pd----pga	Case=Gen|Number=Plur|PronType=Dem	3	det	3:det	Id=2d5o|LTranslit=takyj|Translit=takych
3	утворень	утворення	NOUN	Ncnpgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Plur	1	nmod	1:nmod	Id=2d5p|LTranslit=utvorenńа|Translit=utvoreń
4	може	могти	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Id=2d5q|LTranslit=mohty|Translit=može
5	коливатись	коливатися	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	4	xcomp	4:xcomp	Id=2d5r|LTranslit=kolyvatyśа|Translit=kolyvatyś
6	від	від	ADP	Spsg	Case=Gen	7	case	7:case	Id=2d5s|LTranslit=vid|Translit=vid
7	1	1	NUM	Mlcmsg	Case=Gen|Gender=Masc|NumType=Card|Uninflect=Yes	5	obl	5:obl	Id=2d5t|LTranslit=1|SpaceAfter=No|Translit=1
8	-	-	PUNCT	U	PunctType=Dash	9	punct	9:punct	Id=2d5u|LTranslit=-|SpaceAfter=No|Translit=-
9	10	10	NUM	Mlc-g	Case=Gen|NumType=Card|Uninflect=Yes	7	flat:range	7:flat:range	Id=2d5v|LTranslit=10|Translit=10
10	до	до	ADP	Spsg	Case=Gen	12	case	12:case	Id=2d5w|LTranslit=do|Translit=do
11	декількох	декілька	DET	Mlc-g	Case=Gen|NumType=Card|PronType=Ind	12	det:nummod	12:det:nummod	Id=2d5x|LTranslit=dekiľka|Translit=dekiľkoch
12	сотень	сотня	NOUN	Ncfpgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Plur	5	obl	5:obl	Id=2d5y|LTranslit=sotńа|SpaceAfter=No|Translit=soteń
13	.	.	PUNCT	U	_	4	punct	4:punct	Id=2d5z|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:nummod	color:blue
1	Якщо	якщо	SCONJ	Css	_	2	mark	2:mark	Id=2hbj|LTranslit=jakščo|Translit=Jakščo
2	говорити	говорити	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	14	parataxis:discourse	14:parataxis:discourse	Id=2hbk|LTranslit=hovoryty|Translit=hovoryty
3	про	про	ADP	Spsa	Case=Acc	4	case	4:case	Id=2hbl|LTranslit=pro|Translit=pro
4	проблеми	проблема	NOUN	Ncfpan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Plur	2	obl	2:obl	Id=2hbm|LTranslit=problema|SpaceAfter=No|Translit=problemy
5	,	,	PUNCT	U	_	2	punct	2:punct	Id=2hbn|LTranslit=,|Translit=,
6	то	то	PART	Q	_	14	discourse	14:discourse	Id=2hbo|LTranslit=to|Translit=to
7	багато	багато	DET	Mlc-n	Case=Nom|NumType=Card|PronType=Ind	8	det:nummod	8:det:nummod	Id=2hbp|LTranslit=bahato|Translit=bahato
8	хто	хто	PRON	Pr--mysnn	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	14	nsubj	14:nsubj|15:nsubj:x	Id=2hbq|LTranslit=chto|Translit=chto
9	із	із	ADP	Spsg	Case=Gen	13	case	13:case	Id=2hbr|LTranslit=iz|Translit=iz
10	сучасної	сучасний	ADJ	Afpfsgf	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	13	amod	13:amod	Id=2hbs|LTranslit=sučasnyj|Translit=sučasnoji
11	арт	арт	NOUN	Ncmsnn	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	13	compound	13:compound	Id=2hbt|LTranslit=art|SpaceAfter=No|Translit=art
12	-	-	PUNCT	U	PunctType=Dash	11	punct	11:punct	Id=2hbu|LTranslit=-|SpaceAfter=No|Translit=-
13	спільноти	спільнота	NOUN	Ncfsgn	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	8	nmod	8:nmod	Id=2hbv|LTranslit=spiľnota|Translit=spiľnoty
14	відмовився	відмовитися	VERB	Vmeis-sm	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	0:root	Id=2hbw|LTranslit=vidmovytyśа|Translit=vidmovyvśа
15	зніматися	зніматися	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	14	xcomp	14:xcomp	Id=2hbx|LTranslit=znimatyśа|Translit=znimatyśа
16	в	в	ADP	Spsl	Case=Loc	18	case	18:case	Id=2hby|LTranslit=v|Translit=v
17	цій	цей	DET	Pd--f-sla	Case=Loc|Gender=Fem|Number=Sing|PronType=Dem	18	det	18:det	Id=2hbz|LTranslit=cej|Translit=cij
18	стрічці	стрічка	NOUN	Ncfsln	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	15	obl	15:obl	Id=2hc0|LTranslit=strička|SpaceAfter=No|Translit=stričci
19	.	.	PUNCT	U	_	14	punct	14:punct	Id=2hc1|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 det:nummod	color:blue
1	Писатиму	писати	VERB	Vmpif1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	0	root	0:root	Id=1sab|LTranslit=pysaty|Translit=Pysatymu
2	тут	тут	ADV	Pd------r	PronType=Dem	1	advmod	1:advmod	Id=1sac|LTranslit=tut|Translit=tut
3	про	про	ADP	Spsa	Case=Acc	5	case	5:case	Id=1sad|LTranslit=pro|Translit=pro
4	свої	свій	DET	Pps--npaa	Animacy=Inan|Case=Acc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	5:det	Id=1sae|LTranslit=svij|Translit=svoji
5	успіхи	успіх	NOUN	Ncmpan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	1	obl	1:obl	Id=1saf|LTranslit=uspich|Translit=uspichy
6	в	в	ADP	Spsl	Case=Loc	7	case	7:case	Id=1sag|LTranslit=v|Translit=v
7	справі	справа	NOUN	Ncfsln	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	5	nmod	5:nmod	Id=1sah|LTranslit=sprava|Translit=spravi
8	імплементування	імплементування	NOUN	Ncnsgn	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	7	nmod	7:nmod	Id=1sai|LTranslit=implementuvanńа|Translit=implementuvanńа
9	UEFI	UEFI	X	X	Foreign=Yes	8	nmod	8:nmod	Id=1saj|LTranslit=UEFI|Translit=UEFI
10	на	на	ADP	Spsl	Case=Loc	12	case	12:case	Id=1sak|LTranslit=na|Translit=na
11	кількох	кілька	DET	Mlc-l	Case=Loc|NumType=Card|PronType=Ind	12	det:nummod	12:det:nummod	Id=1sal|LTranslit=kiľka|Translit=kiľkoch
12	mips	mips	X	X	Foreign=Yes	8	nmod	8:nmod	Id=1sam|LTranslit=mips|Translit=mips
13	і	і	CCONJ	Ccs	_	16	cc	16:cc	Id=1san|LTranslit=i|Translit=i
14	arm	arm	X	X	Foreign=Yes	15	compound	15:compound	Id=1sao|LTranslit=arm|Translit=arm
15	одноплатних	одноплатний	ADJ	Ao--plf	Case=Loc|Number=Plur	16	amod	16:amod	Id=1sap|LTranslit=odnoplatnyj|Translit=odnoplatnych
16	компутерах	компутер	NOUN	Ncmpln	Animacy=Inan|Case=Loc|Gender=Masc|Number=Plur	12	conj	8:nmod|12:conj	Id=1saq|LTranslit=komputer|Translit=komputerach
17	(	(	PUNCT	U	_	18	punct	18:punct	Id=1sar|LTranslit=(|SpaceAfter=No|Translit=(
18	ОПК	ОПК	NOUN	Y	Abbr=Yes|Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Uninflect=Yes	16	appos	16:appos	Id=1sas|LTranslit=OPK|SpaceAfter=No|Translit=OPK
19	)	)	PUNCT	U	_	18	punct	18:punct	Id=1sat|LTranslit=)|SpaceAfter=No|Translit=)
20	.	.	PUNCT	U	_	1	punct	1:punct	Id=1sau|LTranslit=.|Translit=.

~~~


