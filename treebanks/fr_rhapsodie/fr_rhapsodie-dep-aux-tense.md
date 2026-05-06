---
layout: base
title:  'Statistics of aux:tense in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `aux:tense`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-aux.html">aux</a></tt>.
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_rhapsodie-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_rhapsodie-dep-aux-pass.html">aux:pass</a></tt>.

492 nodes (1%) are attached to their parents as `aux:tense`.

490 instances of `aux:tense` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49390243902439.

The following 6 pairs of parts of speech are connected with `aux:tense`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (469; 95% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (10; 2% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (6; 1% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 aux:tense	color:blue
1	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	AlignBegin=23980|AlignEnd=24095|Exponence[Number]=Inherent|Exponence[Person]=Inherent
2	vois	voir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	14	discourse	_	AlignBegin=24095|AlignEnd=24285|Exponence[Person]=Absent|SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	AlignBegin=24285|AlignEnd=24285
4	euh	euh	INTJ	_	_	2	discourse	_	AlignBegin=24285|AlignEnd=24745|SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	AlignBegin=24745|AlignEnd=24745
6	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	14	dislocated:obl	_	AlignBegin=24745|AlignEnd=25095|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
7	,	,	PUNCT	_	_	6	punct	_	AlignBegin=25095|AlignEnd=25095
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	AlignBegin=25095|AlignEnd=25195|HasSpokenGender=OnlySingExceptWithLiaison
9	fac	fac	NOUN	_	Gender=Fem|Number=Sing	14	dislocated:subj	_	AlignBegin=25195|AlignEnd=25385|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	_	AlignBegin=25385|AlignEnd=25385
11	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	AlignBegin=25385|AlignEnd=25485|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
12	m'	moi	PRON	_	Case=Dat|Emph=No|Number=Sing|Person=1|PronType=Prs	14	iobj	_	AlignBegin=25485|AlignEnd=25535|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
13	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:tense	_	AlignBegin=25535|AlignEnd=25565
14	fait	faire	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	AlignBegin=25565|AlignEnd=25685|Exponence[Number]=Absent|PastPartHasSpokenGender=Yes|Tense[denom]=Past
15	beaucoup	beaucoup	ADV	_	_	14	obj	_	AlignBegin=25685|AlignEnd=25885
16	de	de	ADP	_	_	17	case	_	AlignBegin=25885|AlignEnd=25975
17	bien	bien	NOUN	_	Gender=Masc|Number=Sing	15	obl:arg	_	AlignBegin=25975|AlignEnd=26157|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
18	.	.	PUNCT	_	_	14	punct	_	AlignBegin=26157|AlignEnd=26157

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 aux:tense	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	10	nsubj	_	AlignBegin=73395|AlignEnd=73490|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	AlignBegin=73490|AlignEnd=73520
3	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	10	cop	_	AlignBegin=73520|AlignEnd=73680|Tense[denom]=Past
4	vraiment	vraiment	ADV	_	_	10	advmod	_	AlignBegin=73680|AlignEnd=73960
5	pour	pour	ADP	_	_	6	case	_	AlignBegin=73960|AlignEnd=74150
6	lui	lui	PRON	_	Emph=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	obl:mod	_	AlignBegin=74150|AlignEnd=74410|Exponence[Person]=Inherent
7	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	reparandum	_	AlignBegin=74410|AlignEnd=74570|SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	AlignBegin=74570|AlignEnd=74570
9	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	10	det	_	AlignBegin=74570|AlignEnd=74780
10	révélation	révélation	NOUN	_	Gender=Fem|Number=Sing	0	root	_	AlignBegin=74780|AlignEnd=75300|Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	AlignBegin=75300|AlignEnd=75300

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 aux:tense	color:blue
1	et	et	CCONJ	_	_	6	cc	_	AlignBegin=65408|AlignEnd=65690|SpaceAfter=No
2	,	,	PUNCT	_	_	6	punct	_	AlignBegin=65690|AlignEnd=65690
3	euh	euh	INTJ	_	_	6	discourse	_	AlignBegin=65690|AlignEnd=65990|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=65990|AlignEnd=65990
5	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	AlignBegin=65990|AlignEnd=66130|Exponence[Number]=Inherent|Exponence[Person]=Inherent
6	pense	penser	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=66130|AlignEnd=66370|Exponence[Person]=Absent
7	que	que	SCONJ	_	_	12	mark	_	AlignBegin=66370|AlignEnd=66710
8	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	nsubj	_	AlignBegin=68055|AlignEnd=68184|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|Overlap=Rhap_D0006-23
9	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:tense	_	AlignBegin=68184|AlignEnd=68214|Overlap=Rhap_D0006-23
10	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	12	cop	_	AlignBegin=68214|AlignEnd=68364|Overlap=Rhap_D0006-23|Tense[denom]=Past
11	très	très	ADV	_	_	12	advmod	_	AlignBegin=68364|AlignEnd=68554|Overlap=Rhap_D0006-23
12	bénéfique	bénéfique	ADJ	_	Gender=Masc|Number=Sing	6	ccomp	_	AlignBegin=68554|AlignEnd=69102|Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|Overlap=Rhap_D0006-23|SpaceAfter=No
13	.	.	PUNCT	_	_	6	punct	_	AlignBegin=69553|AlignEnd=69553|Overlap=Rhap_D0006-16

~~~


