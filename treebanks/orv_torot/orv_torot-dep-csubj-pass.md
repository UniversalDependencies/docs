---
layout: base
title:  'Statistics of csubj:pass in UD_Old_East_Slavic-TOROT'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-TOROT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="orv_torot-dep-csubj.html">csubj</a></tt>.

18 nodes (0%) are attached to their parents as `csubj:pass`.

18 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.44444444444444.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="orv_torot-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_torot-pos-VERB.html">VERB</a></tt> (15; 83% instances), <tt><a href="orv_torot-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_torot-pos-SCONJ.html">SCONJ</a></tt> (2; 11% instances), <tt><a href="orv_torot-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_torot-pos-AUX.html">AUX</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj:pass	color:blue
1	таково	таковыи	ADJ	A-	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	4	advmod	_	ref=12
2	то	то	ADV	Df	_	1	advmod	_	ref=12
3	попущено	попустити	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	ref=12
4	дѣиствоват	дѣиствовати	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	3	csubj:pass	_	ref=12
5	антихристову	антихристовъ	ADJ	A-	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	6	amod	_	ref=12
6	духу	духъ	NOUN	Nb	Case=Dat|Gender=Masc|Number=Sing	3	obl:arg	_	ref=12
7	по	по	ADP	R-	_	9	case	_	ref=12
8	гд҃ню	господьнь	ADJ	A-	Case=Dat|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	9	amod	_	ref=12
9	речению	речение	NOUN	Nb	Case=Dat|Gender=Neut|Number=Sing	3	obl	_	ref=12

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 csubj:pass	color:blue
1	рѣхъ	рещи	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=22
2	ти	ты	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=2|PronType=Prs	1	obl:arg	_	ref=22
3	ꙗко	яко	SCONJ	G-	_	4	mark	_	ref=22
4	повелѣно	повелѣти	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	1	ccomp	_	ref=22
5	ми	азъ	PRON	Pp	Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs	4	obl:arg	_	ref=22
6	ѥсть	быти	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	ref=22
7	отъ	отъ	ADP	R-	_	8	case	_	ref=22
8	игѹмена	игуменъ	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	4	obl:agent	_	ref=22
9	ꙗко	яко	SCONJ	G-	_	4	csubj:pass	_	ref=22

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 csubj:pass	color:blue
1	гдѣ	къдѣ	ADV	Dq	PronType=Rel	2	advcl	_	ref=38
2	оустроено	устроити	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	7	dislocated	_	ref=38
3	быти	быти	AUX	V-	Tense=Pres|VerbForm=Inf|Voice=Act	2	csubj:pass	_	ref=38
4	в	въ	ADP	R-	_	6	case	_	ref=38
5	чистомъ	чистыи	ADJ	A-	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	6	amod	_	ref=38
6	мѣстѣ	мѣсто	NOUN	Nb	Case=Loc|Gender=Neut|Number=Sing	7	obl	_	ref=38
7	лежало	лежати	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=PartRes|Voice=Act	0	root	_	ref=38
8	бы	быти	AUX	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	aux	_	ref=38
9	ѡпрокинѹто	опрокынути	VERB	V-	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Act	7	advcl	_	ref=38
10	ницъ	ниць	ADJ	A-	_	9	advmod	_	ref=38

~~~


