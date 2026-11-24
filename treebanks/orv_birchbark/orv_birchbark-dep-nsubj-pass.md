---
layout: base
title:  'Statistics of nsubj:pass in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="orv_birchbark-dep-nsubj.html">nsubj</a></tt>.

30 nodes (0%) are attached to their parents as `nsubj:pass`.

15 instances of `nsubj:pass` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.13333333333333.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt> (26; 87% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="orv_birchbark-pos-X.html">X</a></tt>-<tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nsubj:pass	color:blue
1	вода[н]о	вдати	VERB	V,partcp,praet,brev,pass,sg,n,nom	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="водано"|addr="227:3"
2	ти	ты	PRON	SPRO,sg,2p,dat,cl,PART?	Case=Dat|Clitic=Yes|Number=Sing|Person=2|PronType=Prs	1	iobj	_	wf="ти"|comment="PART?"|addr="227:3"
3	:ꙅ:	·ѕ҃·	NUM	NUM,card,digit	NumForm=Cyril|NumType=Card	4	nummod:gov	_	wf="ꙅ"|addr="227:3"
4	гр[ив](ьно	гривна	NOUN	S,f,fragment	Fragment=Yes|Gender=Fem	1	nsubj:pass	_	wf="гривьно"|addr="227:3"
5	по)лѹц[и](т)и	получити	VERB	V,inf,fragment	Fragment=Yes|VerbForm=Inf|Voice=Act	1	conj	_	wf="полуцити"|addr="227:3"
6	ти	ты	PRON	SPRO,sg,2p,dat,cl,PART?	Case=Dat|Clitic=Yes|Number=Sing|Person=2|PronType=Prs	5	iobj	_	wf="ти"|comment="PART?"|addr="227:3"
7	сот(о	сто	NOUN	_!	Case=Acc|Gender=Neut|Number=Sing	8	nummod:gov	_	wf="сото"|comment="alt_ana:lemma=сто:gr=S,n,sg,nom"|addr="227:3"
8	г)ривьно	гривна	NOUN	S,f,pl,gen,fragment	Case=Gen|Fragment=Yes|Gender=Fem|Number=Plur	5	obj	_	wf="гривьно"|addr="227:3"

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	лошачек	лошачекъ	NOUN	S,m,sg,nom	Case=Nom|Gender=Masc|Number=Sing	0	root	_	wf="лошачек"|addr="Мос._3:3"
2	гнѣд	гнѣдыи	ADJ	A,m,sg,nom,brev	Case=Nom|Gender=Masc|Number=Sing|Variant=Short	1	amod	_	wf="гнѣд"|addr="Мос._3:3"
3	да	да	CCONJ	CONJ	_	5	cc	_	wf="да"|addr="Мос._3:3"
4	--------	_	X	NONLEX	_	5	dep	_	wf="--------"|addr="Мос._3:3"
5	лошачек	лошачекъ	NOUN	S,m,sg,nom	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	wf="лошачек"|addr="Мос._3:3"
6	коѹръ	коурыи	ADJ	A,m,sg,nom,brev	Case=Nom|Gender=Masc|Number=Sing|Variant=Short	5	amod	_	wf="коуръ"|meaning="конская масть"|line_id="4"|addr="Мос._3:4"
7	да	да	CCONJ	CONJ	_	10	cc	_	wf="да"|addr="Мос._3:4"
8	другои	другыи	DET	A,m,sg,nom	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	10	nsubj:pass	_	wf="другои"|addr="Мос._3:4"
9	с(и)въ	сивыи	ADJ	A,m,sg,nom,brev	Case=Nom|Gender=Masc|Number=Sing|Variant=Short	8	amod	_	wf="сивъ"|meaning="конская масть"|addr="Мос._3:4"
10	ост(а)влен	оставити	VERB	V,partcp,praet,brev,pass,sg,m,nom	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	1	conj	_	wf="оставлен"|comment="alt_ana:lemma=оставити:gr=V,partcp,praet,brev,pass,pl,m,nom"|addr="Мос._3:4"
11	турабьѥвѣ	турабьѥвъ	ADJ	A,possess,f,sg,dat	Case=Dat|Gender=Fem|Number=Sing|Poss=Yes	12	amod	_	wf="турабьевѣ"|addr="Мос._3:4"
12	женѣ	жена	NOUN	S,f,sg,dat	Case=Dat|Gender=Fem|Number=Sing	10	iobj	_	wf="женѣ"|line_id="5"|addr="Мос._3:5"

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	ве	вѣ	PRON	SPRO,du,1p,nom	Case=Nom|Number=Dual|Person=1|PronType=Prs	3	nsubj:pass	_	wf="ве"|addr="1205:2"
2	ти	ти	PART	PART	_	1	advmod	_	wf="ти"|addr="1205:2"
3	ограблена	ограбити	VERB	V,partcp,praet,brev,pass,du,m,nom	Analyt=Yes|Case=Nom|Gender=Masc|Number=Dual|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="ограблена"|addr="1205:2"
4	есвь	быти	AUX	V,praes,du,1p	Analyt=Yes|Number=Dual|Person=1|Tense=Pres	3	aux	_	wf="есвь"|addr="1205:2"
5	тобе	ты	PRON	SPRO,sg,2p,dat,ton	Case=Dat|Number=Sing|Person=2|PronType=Prs	6	orphan	_	wf="тобе"|comment="clitic_ton"|addr="1205:2"
6	скота	скотъ	NOUN	S,m,sg,gen	Case=Gen|Gender=Masc|Number=Sing	3	parataxis	_	wf="скота"|ctxt_comment="деньги"|meaning="деньги"|addr="1205:2"
7	моного	много	NUM	NUM,card,nom	Case=Nom|NumForm=Word|NumType=Card	6	nummod:gov	_	wf="моного"|addr="1205:2"

~~~


