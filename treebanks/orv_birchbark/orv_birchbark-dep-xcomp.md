---
layout: base
title:  'Statistics of xcomp in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `xcomp`

This relation is universal.

108 nodes (0%) are attached to their parents as `xcomp`.

98 instances of `xcomp` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.60185185185185.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (96; 89% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-ADJ.html">ADJ</a></tt> (4; 4% instances), <tt><a href="orv_birchbark-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_birchbark-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="orv_birchbark-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	али	али	SCONJ	CONJ	_	3	mark	_	wf="али"|addr="118:4"
2	еси	быти	AUX	V,praes,sg,2p,in_perf	Analyt=Yes|Number=Sing|Person=2|Tense=Pres	3	aux	_	wf="еси"|comment="in_perf"|addr="118:4"
3	въ(зѧ)ль	взѧти	VERB	V,l-partcp,perf,sg,2p,m,reconstr	Analyt=Yes|Gender=Masc|Number=Sing|Person=2|Tense=Past|VerbForm=PartRes|Voice=Act	5	advcl	_	wf="възяль"|tense=perf|comment="reconstr"|addr="118:4"
4	[а	а	CCONJ	CONJ	_	5	cc	_	wf="а"|addr="118:4"
5	вор]оти	воротити	VERB	V,imper,sg,2p	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	wf="вороти"|addr="118:4"
6	хотѧть	хотѣти	VERB	V,nonpast,pl,3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	wf="хотять"|comment="tense_nonpast"|line_id="5"|addr="118:5"
7	в[ъ]----	_	X	NONLEX	_	8	dep	_	wf="въ----"|addr="118:5"
8	(въ)зѧ[т]и	взѧти	VERB	V,inf,fragment,lemma_unsure	Fragment=Yes|VerbForm=Inf|Voice=Act	6	xcomp	_	wf="възяти"|comment="lemma_unsure"|addr="118:5"

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	…	…	PUNCT	_	_	2	punct	_	wf="…"|line_id="2"|addr="400:2"
2	(пог)[ꙑб]ло	погыбнути	VERB	V,l-partcp,perf,sg,n	Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="погыбло"|tense=perf|comment="alt_ana:lemma=погынути:gr=V,l-partcp,perf,sg,n"|addr="400:2"
3	[оже]	оже	SCONJ	CONJ	_	7	mark	_	wf="оже"|addr="400:2"
4	нꙑ	мы	PRON	SPRO,pl,1p,acc,cl	Case=Acc|Clitic=Yes|Number=Plur|Person=1|PronType=Prs	7	obj	_	wf="ны"|addr="400:2"
5	ѥси	быти	AUX	V,praes,sg,2p,in_perf	Analyt=Yes|Number=Sing|Person=2|Tense=Pres	7	aux	_	wf="еси"|comment="in_perf"|addr="400:2"
6	холопꙑ	холопъ	NOUN	S,m,pl,acc	Case=Acc|Gender=Masc|Number=Plur	7	xcomp	_	wf="холопы"|comment="alt_ana:lemma=холопъ:gr=S,m,pl,ins"|addr="400:2"
7	нарек[л]а	наречи	VERB	V,l-partcp,perf,sg,2p,f	Analyt=Yes|Gender=Fem|Number=Sing|Person=2|Tense=Past|VerbForm=PartRes|Voice=Act	2	advcl	_	wf="нарекла"|tense=perf|addr="400:2"

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	а	а	CCONJ	CONJ	_	3	cc	_	wf="а"|addr="129: Внутренняя сторона,_начало_грамоты:16а"
2	па(къ	пакы	PART	PART,fragment	Fragment=Yes	3	advmod	_	wf="пакъ"|addr="129:_Внутренняя_сторона,_начало_грамоты:16а"
3	творѧ)<lbr/>ть	творити	VERB	V,nonpast,pl,3p,fragment	Fragment=Yes|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	wf="творять"|meaning="считать (чем), утверждать (про кого что)"|comment="tense_nonpast"|addr="129:_Внутренняя_сторона,_начало_грамоты:16а"
4	виновату	виноватыи	ADJ	A,f,sg,acc	Case=Acc|Gender=Fem|Number=Sing	3	xcomp	_	wf="виновату"|page_id="129: Внешняя сторона"|line_id="1б"|addr="129:_Внешняя_сторона:1б"

~~~


