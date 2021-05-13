---
layout: base
title:  'Statistics of nsubj:pass in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="hy_armtdp-dep-nsubj-caus.html">nsubj:caus</a></tt>.

184 nodes (0%) are attached to their parents as `nsubj:pass`.

103 instances of `nsubj:pass` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.10869565217391.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (144; 78% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (31; 17% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (6; 3% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 nsubj:pass	color:blue
1	Քո	դու	DET	_	Case=Gen|Number=Sing|Person=2|Polite=Infm|Poss=Yes|PronType=Prs	3	det:poss	_	Translit=K’o|LTranslit=dow
2	բոլոր	բոլոր	DET	_	PronType=Tot	3	det	_	Translit=bolor|LTranslit=bolor
3	ճակատամարտերն	ճակատամարտ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	7	nsubj:pass	_	Translit=č̣akatamartern|LTranslit=č̣akatamart
4	այլևս	այլևս	ADV	_	_	7	advmod	_	Translit=aylews|LTranslit=aylews
5	տանուլ	տանուլ	X	_	_	7	compound:lvc	_	Translit=tanowl|LTranslit=tanowl
6	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	Translit=en|LTranslit=em
7	տրված	տալ	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	Translit=trvaç|LTranslit=tal|SpaceAfter=No
8	:	:	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Դա	դա	PRON	_	Case=Nom|Deixis=Med|Number=Sing|PronType=Dem	2	nsubj:pass	_	Translit=Da|LTranslit=da
2	արտահայտվեց	արտահայտել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Translit=artahaytvec’|LTranslit=artahaytel
3	հիմնականում	հիմնականում	ADV	_	_	4	advmod:emph	_	Translit=himnakanowm|LTranslit=himnakanowm
4	ներմուծման	ներմուծում	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	6	nmod:poss	_	Translit=nermowçman|LTranslit=nermowçowm
5	առաջանցիկ	առաջանցիկ	ADJ	_	_	6	amod	_	Translit=aṙaǰanc’ik|LTranslit=aṙaǰanc’ik
6	աճի	աճ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	7	nmod:poss	_	Translit=ač̣i|LTranslit=ač̣
7	տեսքով	տեսք	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	2	obl	_	Translit=tesk’ov|LTranslit=tesk’|SpaceAfter=No
8	։	։	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 nsubj:pass	color:blue
1	—	—	PUNCT	_	_	3	punct	_	Translit=—|LTranslit=—
2	Հնարավոր	հնարավոր	ADJ	_	Degree=Pos	3	xcomp	_	Translit=Hnaravor|LTranslit=hnaravor
3	համարում	համարել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	Translit=hamarowm|LTranslit=hamarel
4	՞	՞	PUNCT	_	_	3	punct	_	Translit=?|LTranslit=?
5	եք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	Translit=ek’|LTranslit=em|SpaceAfter=No
6	,	,	PUNCT	_	_	11	punct	_	Translit=,|LTranslit=,
7	որ	որ	SCONJ	_	_	11	mark	_	Translit=or|LTranslit=or
8	Սերժ	Սերժ	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	11	nsubj:pass	_	Translit=Serž|LTranslit=Serž
9	Սարգսյանը	Սարգսյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	8	flat	_	Translit=Sargsyanë|LTranslit=Sargsyan
10	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	11	aux	_	Translit=či|LTranslit=em
11	առաջադրվի	առաջադրել	VERB	_	Aspect=Prosp|Connegative=Yes|Mood=Cnd|Subcat=Intr|VerbForm=Fin|Voice=Pass	3	ccomp	_	Translit=aṙaǰadrvi|LTranslit=aṙaǰadrel
12	վարչապետի	վարչապետ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	13	nmod:poss	_	Translit=varčapeti|LTranslit=varčapet
13	թեկնածու	թեկնածու	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	11	obl	_	Translit=t’eknaçow|LTranslit=t’eknaçow|SpaceAfter=No
14	։	։	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.

~~~


