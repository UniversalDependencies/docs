---
layout: base
title:  'Statistics of vocative in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `vocative`

This relation is universal.

41 nodes (0%) are attached to their parents as `vocative`.

24 instances of `vocative` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.34146341463415.

The following 8 pairs of parts of speech are connected with `vocative`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (19; 46% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (6; 15% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (6; 15% instances), <tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (4; 10% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 vocative	color:blue
1	mais	mais	CCONJ	_	_	7	cc	_	AlignBegin=197208|AlignEnd=197572
2	Sara	Sara	PROPN	_	_	7	vocative	_	AlignBegin=197651|AlignEnd=197988|Gender[lex]=Unknown
3	Ghibaudo	Ghibaudo	PROPN	_	_	2	flat:name	_	AlignBegin=197988|AlignEnd=198474|Gender[lex]=Unknown|SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	AlignBegin=198474|AlignEnd=198829
5	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	AlignBegin=198829|AlignEnd=199000
6	ne	ne	ADV	_	Polarity=Neg	7	advmod	_	AlignBegin=199000|AlignEnd=199167
7	pourra	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	AlignBegin=199167|AlignEnd=199464
8	pas	pas	ADV	_	Polarity=Neg	7	advmod	_	AlignBegin=199464|AlignEnd=199595
9	contenter	contenter	VERB	_	VerbForm=Inf	7	xcomp	_	AlignBegin=199595|AlignEnd=200054|Subject=SubjRaising
10	tout	tout	ADJ	_	Gender=Masc	12	amod	_	AlignBegin=200054|AlignEnd=200234|Number[ctxt]=Sing
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	AlignBegin=200234|AlignEnd=200344
12	monde	monde	NOUN	_	_	9	obj	_	AlignBegin=200344|AlignEnd=200494|Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
13	.	.	PUNCT	_	_	7	punct	_	AlignBegin=200494|AlignEnd=200494

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 vocative	color:blue
1	bonjour	bonjour	NOUN	_	ExtPos=INTJ	0	root	_	AlignBegin=14525|AlignEnd=14869
2	Eric	Eric	PROPN	_	_	1	vocative	_	AlignBegin=14869|AlignEnd=15213|Gender[lex]=Unknown|SpaceAfter=No
3	.	.	PUNCT	_	_	1	punct	_	AlignBegin=15213|AlignEnd=15213

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 vocative	color:blue
1	ou	ou	CCONJ	_	_	8	cc	_	AlignBegin=175286|AlignEnd=175391
2	encore	encore	ADV	_	_	8	advmod	_	AlignBegin=175391|AlignEnd=175861
3	fillette	fillette	NOUN	_	_	8	vocative	_	AlignBegin=175861|AlignEnd=176345|Gender[lex]=Fem|Number[ctxt]=Sing|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=176345|AlignEnd=176345
5	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	AlignBegin=176345|AlignEnd=176551
6	te	toi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=2|PronType=Prs	8	iobj	_	AlignBegin=176551|AlignEnd=176671
7	le	le	PRON	_	Case=Acc|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	obj	_	AlignBegin=176671|AlignEnd=176781
8	dis	dire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=176781|AlignEnd=177021|Reported=Yes
9	lève	lever	VERB	_	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	ccomp	_	AlignBegin=177354|AlignEnd=177629|Reported=Yes|SpaceAfter=No
10	-toi	toi	PRON	_	Number=Sing|Person=2|PronType=Prs	9	obj	_	AlignBegin=177629|AlignEnd=178050|SpaceAfter=No
11	.	.	PUNCT	_	_	8	punct	_	AlignBegin=178050|AlignEnd=178050

~~~


