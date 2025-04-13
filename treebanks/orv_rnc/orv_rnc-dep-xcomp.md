---
layout: base
title:  'Statistics of xcomp in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `xcomp`

This relation is universal.

1471 nodes (1%) are attached to their parents as `xcomp`.

1244 instances of `xcomp` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.47654656696125.

The following 13 pairs of parts of speech are connected with `xcomp`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1235; 84% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (109; 7% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (41; 3% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (35; 2% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (31; 2% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 xcomp	color:blue
1	Роспись	роспись	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	wf="Роспись"|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	wf=","|_
3	скол(ь)ко	сколько	NUM	_	Case=Nom|NumForm=Word|NumType=Card	1	acl	_	wf="сколько"|_
4	судов	судъ	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	3	nsubj	_	wf="судов"|_
5	медных	мѣдный	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	wf="медных"|_
6	худых	худой	ADJ	_	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	wf="худых"|SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	wf=","|_
8	что	что	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	9	obj	_	wf="что"|_
9	отдат(ь)	отдати	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	4	acl:relcl	_	wf="отдать"|_
10	делат(ь)	дѣлати	VERB	_	VerbForm=Inf|Voice=Act	9	xcomp	_	wf="делать"|SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	wf="."|_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 xcomp	color:blue
1	Имѣти	имѣти	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
2	ти	ты	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	1	iobj	_	_
3	менѧ	я	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	1	obj	_	_
4	себѣ	себя	PRON	_	Case=Dat|PronType=Prs|Reflex=Yes	1	iobj	_	_
5	братѡм	братъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	1	xcomp	_	_
6	старѣишим	старѣйший	ADJ	_	Case=Ins|Degree=Cmp|Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 xcomp	color:blue
1	А	а	CCONJ	_	_	7	cc	_	wf="А"
2	прикащик	приказчикъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	wf="прикащик"
3	де	де	PART	_	_	2	discourse	_	wf="де"
4	у	у	ADP	_	_	6	case	_	wf="у"
5	тово	тотъ	DET	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	wf="тово"
6	белевца	бѣлевецъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	7	obl	_	wf="белевца"
7	кр(е)стьянин	крестьянинъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	wf="креетьянин"
8	Микиткаю	Микитка	PROPN	_	Case=Ins|Gender=Masc|NameType=Giv|Number=Sing	9	xcomp	_	wf="Микиткаю"
9	[зовут]	звати	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	wf="."

~~~


