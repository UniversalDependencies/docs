---
layout: base
title:  'Statistics of iobj in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `iobj`

This relation is universal.

606 nodes (0%) are attached to their parents as `iobj`.

425 instances of `iobj` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.57260726072607.

The following 6 pairs of parts of speech are connected with `iobj`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (309; 51% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (240; 40% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (33; 5% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (12; 2% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (11; 2% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 iobj	color:blue
1	A	a	CCONJ	Cc	_	7	cc	_	Dep=7|Rel=Conj
2	nekaj	nekaj	PRON	Pi-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	7	nsubj	_	Dep=7|Rel=Sb
3	v	v	ADP	Sl	Case=Loc	4	case	_	Dep=4|Rel=Atr
4	meni	jaz	PRON	Pp1-sl	Case=Loc|Number=Sing|Person=1|PronType=Prs	2	nmod	_	Dep=2|Rel=Atr
5	mi	jaz	PRON	Pp1-sd--y	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	7	iobj	_	Dep=7|Rel=Obj
6	ni	biti	AUX	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	aux	_	Dep=7|Rel=PPart
7	dovolilo	dovoliti	VERB	Vmep-sn	Aspect=Perf|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
8	,	,	PUNCT	Z	_	11	punct	_	Dep=0|Rel=Root
9	da	da	SCONJ	Cs	_	11	mark	_	Dep=11|Rel=Conj
10	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	11	aux	_	Dep=11|Rel=PPart
11	zaploskala	zaploskati	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	7	ccomp	_	SpaceAfter=No|Dep=7|Rel=Obj
12	.	.	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 iobj	color:blue
1	Posebno	poseben	ADJ	Agpfsa	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	Dep=2|Rel=Atr
2	skrb	skrb	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	Dep=4|Rel=Obj
3	bomo	biti	AUX	Va-f1p-n	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin	4	aux	_	Dep=4|Rel=PPart
4	namenili	nameniti	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	Dep=0|Rel=Root
5	prehrani	prehrana	NOUN	Ncfsd	Case=Dat|Gender=Fem|Number=Sing	4	iobj	_	SpaceAfter=No|Dep=4|Rel=Obj
6	.	.	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	Idi	Ida	PROPN	Npfsd	Case=Dat|Gender=Fem|Number=Sing	3	iobj	_	Dep=3|Rel=Obj
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	Dep=3|Rel=PPart
3	pomolil	pomoliti	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
4	svoj	svoj	DET	Px-msa	Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	6	det	_	Dep=6|Rel=Atr
5	mobilni	mobilen	ADJ	Agpmsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	Dep=6|Rel=Atr
6	telefon	telefon	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No|Dep=3|Rel=Obj
7	.	.	PUNCT	Z	_	3	punct	_	Dep=0|Rel=Root

~~~


