---
layout: base
title:  'Statistics of obj in UD_Finnish-OOD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-OOD: Relations: `obj`

This relation is universal.

999 nodes (5%) are attached to their parents as `obj`.

664 instances of `obj` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.97597597597598.

The following 11 pairs of parts of speech are connected with `obj`: <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (761; 76% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (139; 14% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-PROPN.html">PROPN</a></tt> (67; 7% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt> (16; 2% instances), <tt><a href="fi_ood-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ood-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_ood-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ood-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obj	color:blue
1	Päivystävä	päivystävä	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	2	amod	_	_
2	kirurgi	kirurgi	NOUN	_	Case=Nom|Number=Sing	3	nsubj	_	_
3	käynyt	käydä	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	katsomassa	katsoa	VERB	_	Case=Ine|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	3	xcomp	_	_
5	kaulan	kaula	NOUN	_	Case=Gen|Number=Sing	6	nmod:poss	_	_
6	pattia	patti	NOUN	_	Case=Par|Number=Sing	4	obj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obj	color:blue
1	Muuten	muuten	ADV	_	_	2	advmod	_	_
2	asiallinen	asiallinen	ADJ	_	Case=Nom|Degree=Pos|Derivation=Llinen|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	haluaisi	haluta	VERB	_	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	2	conj	_	SENSE=0
5	jo	jo	ADV	_	_	4	advmod	_	_
6	syödä	syödä	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	4	xcomp	_	SENSE=0
7	jotakin	jokin	PRON	_	Case=Par|Number=Sing|PronType=Ind	6	obj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obj	color:blue
1	RR	RR	NOUN	_	Abbr=Yes|Case=Nom|Number=Sing	2	compound	_	Gen=Verenpaine
2	taso	taso	NOUN	_	Case=Nom|Number=Sing	3	nsubj:cop	_	_
3	matala	matala	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
4	aloitettu	aloittaa	VERB	_	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	3	parataxis	_	_
5	abbodop	Abbodop	PROPN	_	Case=Nom|Number=Sing	4	obj	_	Gen_desc=lääke
6	ja	ja	CCONJ	_	_	7	cc	_	_
7	noradrenaliini	noradrenaliini	NOUN	_	Case=Nom|Number=Sing	4	conj	_	Gen_desc=vaikuttava-aine|SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


