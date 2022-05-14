---
layout: base
title:  'Statistics of nsubj:pass in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="orv_birchbark-dep-nsubj.html">nsubj</a></tt>.

29 nodes (0%) are attached to their parents as `nsubj:pass`.

15 instances of `nsubj:pass` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.13793103448276.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt> (24; 83% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="orv_birchbark-pos-X.html">X</a></tt>-<tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nsubj:pass	color:blue
1	вода[н]о	вдати	VERB	_	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	wf="водано"|addr="227:3"|SpaceAfter=Yes
2	ти	ты	PRON	_	Case=Dat|Clitic=Yes|Number=Sing|Person=2	1	iobj	_	wf="ти"|comment=PART?|addr="227:3"|SpaceAfter=Yes
3	:ꙅ:	·ѕ҃·	NUM	_	NumForm=Digit|NumType=Card	4	nummod:gov	_	wf=":ꙅ:"|addr="227:3"|SpaceAfter=Yes
4	гр[ив](ьно	гривна	NOUN	_	Gender=Fem	1	nsubj:pass	_	wf="гривьно"|addr="227:3"|SpaceAfter=Yes
5	по)лѹц[и](т)и	получити	VERB	_	VerbForm=Inf|Voice=Act	1	conj	_	wf="полѹцити"|addr="227:3"|SpaceAfter=Yes
6	ти	ты	PRON	_	Case=Dat|Clitic=Yes|Number=Sing|Person=2	5	iobj	_	wf="ти"|comment=PART?|addr="227:3"|SpaceAfter=Yes
7	сот(о	сто	NOUN	_!	Case=Acc|Gender=Neut|Number=Sing	8	nummod:gov	_	wf="сото"|addr="227:3"|SpaceAfter=Yes
8	г)ривьно	гривна	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	5	obj	_	wf="гривьно"|addr="227:3"|SpaceAfter=Yes

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	лошачек	лошачекъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	wf="лошачек"|addr="Мос._3:3"|SpaceAfter=Yes
2	гнѣд	гнѣдыи	ADJ	_	Case=Nom|Gender=Masc|Number=Sing|Variant=Short	1	amod	_	wf="гнѣд"|addr="Мос._3:3"|SpaceAfter=Yes
3	да	да	CCONJ	_	_	5	cc	_	wf="да"|addr="Мос._3:3"|SpaceAfter=Yes
4	--------	--------	X	_	_	5	dep	_	wf="--------"|addr="Мос._3:3"|SpaceAfter=Yes
5	лошачек	лошачекъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	wf="лошачек"|addr="Мос._3:3"|SpaceAfter=Yes
6	коѹръ	коурыи	ADJ	_	Case=Nom|Gender=Masc|Number=Sing|Variant=Short	5	amod	_	wf="коѹръ"|meaning="конская_масть"|addr="Мос._3:4"|line_id=4|SpaceAfter=Yes
7	да	да	CCONJ	_	_	10	cc	_	wf="да"|addr="Мос._3:4"|SpaceAfter=Yes
8	другои	другыи	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	10	nsubj:pass	_	wf="другои"|addr="Мос._3:4"|SpaceAfter=Yes
9	с(и)въ	сивыи	ADJ	_	Case=Nom|Gender=Masc|Number=Sing|Variant=Short	8	amod	_	wf="сивъ"|meaning="конская_масть"|addr="Мос._3:4"|SpaceAfter=Yes
10	ост(а)влен	оставити	VERB	_	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	1	conj	_	wf="оставлен"|addr="Мос._3:4"|SpaceAfter=Yes
11	турабьѥвѣ	Турабьѥвъ	ADJ	_	Case=Dat|Gender=Fem|Number=Sing|Poss=Yes	12	amod	_	wf="турабьѥвѣ"|addr="Мос._3:4"|SpaceAfter=Yes
12	женѣ	жена	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	10	iobj	_	wf="женѣ"|addr="Мос._3:5"|line_id=5|SpaceAfter=Yes

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nsubj:pass	color:blue
1	+	+	SYM	_	_	3	parataxis	_	wf="+"|line_id=1|SpaceAfter=Yes
2	а	а	CCONJ	_	_	3	cc	_	wf="а"|addr="1021:1"|SpaceAfter=Yes
3	заплачьно	заплатити	VERB	_	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="заплачьно"|addr="1021:1"|SpaceAfter=Yes
4	на	на	ADP	_	_	5	case	_	wf="на"|addr="1021:1"|SpaceAfter=Yes
5	бьль	бѣла	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	3	obl	_	wf="бьль"|comment="aggr"|meaning="беличьи_шкурки"|addr="1021:1"|SpaceAfter=Yes
6	пло	полъ	NUM	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	_	wf="пло"|meaning="половина"|addr="1021:1"|SpaceAfter=Yes
7	пѧта	пѧтыи	ADJ	_	Case=Gen|Gender=Masc|Number=Sing|Variant=Short	6	nmod	_	wf="пѧта"|comment=in_NUM|addr="1021:1"|SpaceAfter=Yes
8	дьсѧть	десѧть	NUM	_	Case=Gen|NumType=Card	6	flat	_	wf="дьсѧть"|addr="1021:1"|SpaceAfter=Yes
9	и	и	CCONJ	_	_	11	cc	_	wf="и"|addr="1021:1"|SpaceAfter=Yes
10	двь	два	NUM	_	Case=Nom|Gender=Fem|NumType=Card	11	nummod:gov	_	wf="двь"|addr="1021:1"|SpaceAfter=Yes
11	ногать	ногата	NOUN	_	Case=Nom|Gender=Fem|Number=Count	6	conj	_	wf="ногать"|addr="1021:1"|SpaceAfter=Yes
12	моѧ	мои	DET	_	Case=Nom|Gender=Fem|Number=Sing	6	det	_	wf="моѧ"|addr="1021:1"|SpaceAfter=Yes

~~~


