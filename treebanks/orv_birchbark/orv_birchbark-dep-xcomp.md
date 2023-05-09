---
layout: base
title:  'Statistics of xcomp in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `xcomp`

This relation is universal.

100 nodes (0%) are attached to their parents as `xcomp`.

88 instances of `xcomp` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.61.

The following 7 pairs of parts of speech are connected with `xcomp`: <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (88; 88% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt> (5; 5% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="orv_birchbark-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_birchbark-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="orv_birchbark-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp	color:blue
1	али	али	SCONJ	_	_	3	mark	_	wf="али"|addr="118:4"|_
2	еси	быти	AUX	_	Analyt=Yes|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	wf="еси"|addr="118:4"|_
3	въ(зѧ)ль	взѧти	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	5	advcl	_	wf="възѧль"|tense=perf|comment=reconstr|addr="118:4"|_
4	[а	а	CCONJ	_	_	5	cc	_	wf="а"|addr="118:4"|_
5	вор]оти	воротити	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	wf="вороти"|addr="118:4"|_
6	хотѧть	хотѣти	VERB	_	Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	wf="хотѧть"|comment="tense_nonpast"|addr="118:5"|line_id=5|_
7	в[ъ]----	в[ъ]----	X	_	_	8	dep	_	wf="въ----"|addr="118:5"|_
8	(въ)зѧ[т]и	взѧти	VERB	_	VerbForm=Inf|Voice=Act	6	xcomp	_	wf="възѧти"|comment=lemma_unsure|addr="118:5"|_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 xcomp	color:blue
1	…	…	PUNCT	_	_	2	punct	_	wf="…"|line_id=2|_
2	(пог)[ꙑб]ло	погыбнути	VERB	_	Gender=Neut|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="погꙑбло"|tense=perf|addr="400:2"|_
3	[оже]	оже	SCONJ	_	_	7	mark	_	wf="оже"|addr="400:2"|_
4	нꙑ	мы	PRON	_	Case=Acc|Clitic=Yes|Number=Plur|Person=1	7	obj	_	wf="нꙑ"|addr="400:2"|_
5	ѥси	быти	AUX	_	Analyt=Yes|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	wf="ѥси"|addr="400:2"|_
6	холопꙑ	холопъ	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	7	xcomp	_	wf="холопꙑ"|addr="400:2"|_
7	нарек[л]а	наречи	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	2	advcl	_	wf="нарекла"|tense=perf|addr="400:2"|_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 xcomp	color:blue
1	реклъ	речи	VERB	_	Analyt=Yes|Gender=Masc|Number=Sing|Tense=Pqp|VerbForm=PartRes|Voice=Act	0	root	_	wf="реклъ"|addr="195:1"|_
2	ѥси	быти	AUX	_	Analyt=Yes|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	_	wf="ѥси"|addr="195:1"|_
3	былъ	быти	AUX	_	Analyt=Yes|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	aux	_	wf="былъ"|tense=perf|addr="195:1"|_
4	во	въ	ADP	_	_	6	case	_	wf="во"|addr="195:2"|line_id=2|_
5	своѥмь	свои	DET	_	Case=Loc|Gender=Neut|Number=Sing	6	det	_	wf="своѥмь"|addr="195:2"|_
6	селѣ	село	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	1	obl	_	wf="селѣ"|addr="195:2"|_
7	верши	вершь	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	1	obj	_	wf="верши"|meaning="хлеб_в_скирдах,_зерно"|addr="195:2"|_
8	всѣ	весь	DET	_	Case=Acc|Gender=Fem|Number=Plur	7	det	_	wf="всѣ"|addr="195:2"|_
9	добрꙑ	добрыи	ADJ	_	Case=Acc|Gender=Fem|Number=Plur|Variant=Short	1	xcomp	_	wf="добрꙑ"|addr="195:2"|_
10	и	и	CCONJ	_	_	12	cc	_	wf="и"|addr="195:2"|_
11	ѧраѧ	ꙗрыи	ADJ	_	Case=Acc|Gender=Neut|Number=Plur	12	amod	_	wf="ѧраѧ"|addr="195:2"|_
12	жита	жито	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	7	conj	_	wf="жита"|addr="195:2"|_
13	…	…	PUNCT	_	_	1	punct	_	wf="…"|line_id=3|_

~~~


