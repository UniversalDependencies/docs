---
layout: base
title:  'Statistics of det:poss in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-det.html">det</a></tt>.

494 nodes (1%) are attached to their parents as `det:poss`.

494 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38866396761134.

The following 6 pairs of parts of speech are connected with `det:poss`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (484; 98% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:poss	color:blue
1	Ես	ես	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	Translit=es|LTranslit=es
2	ջարդում	ջարդել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=ǰardowm|LTranslit=ǰardel
3	եմ	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	Translit=em|LTranslit=em
4	նրա	նա	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	det:poss	_	Translit=nra|LTranslit=na
5	օղիները	օղի	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	2	obj	_	Translit=òġinerë|LTranslit=òġi|SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
7	մեկը	մեկը	PRON	_	Case=Nom|PronType=Ind	2	obl	_	Translit=mekë|LTranslit=mekë
8	մյուսի	մյուս	PRON	_	Case=Dat|Definite=Ind|Distance=Dist|Number=Sing|PronType=Dem	7	nmod:npmod	_	Translit=myowsi|LTranslit=myows
9	հետևից	հետև	ADP	_	AdpType=Post|Case=Abl	8	case:loc	_	Translit=hetewic’|LTranslit=hetew|SpaceAfter=No
10	:	:	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:poss	color:blue
1	Եվրոպայի	Եվրոպա	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	2	nmod:poss	_	Translit=evropayi|LTranslit=evropa
2	կտրվածքով	կտրվածք	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	6	obl	_	Translit=ktrvaçk’ov|LTranslit=ktrvaçk’
3	էլ	էլ	PART	_	_	2	advmod:emph	_	Translit=ēl|LTranslit=ēl
4	մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	5	det:poss	_	Translit=mer|LTranslit=menk’
5	Հայաստանը	Հայաստան	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Def|NameType=Geo|Number=Sing	6	nsubj	_	Translit=hayastanë|LTranslit=hayastan
6	մոտ	մոտ	ADJ	_	Degree=Pos	0	root	_	Translit=mot|LTranslit=mot
7	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	Translit=ē|LTranslit=em
8	լավագույն	լավ	ADJ	_	Degree=Sup	10	amod	_	Translit=lavagowyn|LTranslit=lav
9	30	30	NUM	_	NumForm=Digit|NumType=Card	10	nummod	_	Translit=30|LTranslit=30
10	հավաքականների	հավաքական	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	11	nmod:poss	_	Translit=havak’akanneri|LTranslit=havak’akan
11	շարքում	շարք	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	12	obl	_	Translit=šark’owm|LTranslit=šark’
12	ընդգրկվելուն	ընդգրկել	VERB	_	Case=Dat|Definite=Def|Number=Coll|Polarity=Pos|Subcat=Intr|VerbForm=Gdv|Voice=Pass	6	obl	_	Translit=ëndgrkvelown|LTranslit=ëndgrkel|SpaceAfter=No
13	:	:	PUNCT	_	_	6	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 det:poss	color:blue
1	Սատանան	սատանա	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	Translit=satanan|LTranslit=satana
2	ժպտում	ժպտալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	Translit=žptowm|LTranslit=žptal
3	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	2	aux	_	Translit=ēr|LTranslit=em|SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	Translit=,|LTranslit=,
5	և	և	CCONJ	_	_	7	cc	_	Translit=ew|LTranslit=ew
6	Եսային	Եսայի	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	7	nsubj	_	Translit=esayin|LTranslit=esayi
7	զգաց	զգալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	Translit=zgac’|LTranslit=zgal|SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	Translit=,|LTranslit=,
9	որ	որ	SCONJ	_	_	12	mark	_	Translit=or|LTranslit=or
10	ինքը	ինքը	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Emp	12	nsubj	_	Translit=ink’ë|LTranslit=ink’ë
11	արդեն	արդեն	ADV	_	_	12	advmod	_	Translit=arden|LTranslit=arden
12	զզվում	զզվել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	7	ccomp	_	Translit=zzvowm|LTranslit=zzvel
13	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	aux	_	Translit=ē|LTranslit=em
14	աշխարհից	աշխարհ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	12	obl	_	Translit=ašxarhic’|LTranslit=ašxarh|SpaceAfter=No
15	,	,	PUNCT	_	_	17	punct	_	Translit=,|LTranslit=,
16	նրա	նա	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	17	det:poss	_	Translit=nra|LTranslit=na
17	անտրամաբանությունից	անտրամաբանություն	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	14	conj	_	Translit=antramabanowt’yownic’|LTranslit=antramabanowt’yown|SpaceAfter=No
18	,	,	PUNCT	_	_	21	punct	_	Translit=,|LTranslit=,
19	նրա	նա	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	21	det:poss	_	Translit=nra|LTranslit=na
20	անհեռանկար	անհեռանկար	ADJ	_	_	21	xcomp	_	Translit=anheṙankar|LTranslit=anheṙankar
21	լինելուց	լինել	VERB	_	Case=Abl|Definite=Ind|Number=Coll|Polarity=Pos|Subcat=Intr|VerbForm=Gdv|Voice=Mid	14	conj	_	Translit=linelowc’|LTranslit=linel|SpaceAfter=No
22	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


