---
layout: base
title:  'Statistics of parataxis:parenth in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `parataxis:parenth`

This relation is a language-specific subtype of <tt><a href="fr_rhapsodie-dep-parataxis.html">parataxis</a></tt>.
There are also 1 other language-specific subtypes of `parataxis`: <tt><a href="fr_rhapsodie-dep-parataxis-insert.html">parataxis:insert</a></tt>.

39 nodes (0%) are attached to their parents as `parataxis:parenth`.

30 instances of `parataxis:parenth` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.46153846153846.

The following 17 pairs of parts of speech are connected with `parataxis:parenth`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (10; 26% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (7; 18% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (5; 13% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (3; 8% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-X.html">X</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 parataxis:parenth	color:blue
1	et	et	CCONJ	_	_	6	cc	_	AlignBegin=237931|AlignEnd=238086
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	AlignBegin=238086|AlignEnd=238136|SpaceAfter=No
3	-ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	expl:subj	_	AlignBegin=238136|AlignEnd=238166|Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
4	qu'	que	SCONJ	_	_	6	mark	_	AlignBegin=238166|AlignEnd=238216|SpaceAfter=No
5	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	expl:subj	_	AlignBegin=238216|AlignEnd=238356|Exponence[Person]=Inherent
6	faut	falloir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=238356|AlignEnd=238666|Exponence[Person]=Absent
7	que	que	SCONJ	_	_	9	mark	_	AlignBegin=238666|AlignEnd=238809
8	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	AlignBegin=238809|AlignEnd=238923|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
9	aie	avoir	VERB	_	Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	6	ccomp	_	AlignBegin=238923|AlignEnd=239168|SpaceAfter=No
10	,	,	PUNCT	_	_	14	punct	_	AlignBegin=239168|AlignEnd=239431
11	parce	parce	ADV	_	ExtPos=SCONJ	14	mark	_	AlignBegin=239431|AlignEnd=239576|Idiom=Yes
12	que	que	SCONJ	_	_	11	fixed	_	AlignBegin=239576|AlignEnd=239656|InIdiom=Yes
13	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	14	nsubj	_	AlignBegin=239656|AlignEnd=239726|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
14	aime	aimer	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	parataxis:parenth	_	AlignBegin=239726|AlignEnd=239866|Exponence[Person]=Absent
15	pas	pas	ADV	_	Polarity=Neg	16	advmod	_	AlignBegin=239866|AlignEnd=240006
16	trop	trop	ADV	_	_	14	advmod	_	AlignBegin=240006|AlignEnd=240346|SpaceAfter=No
17	,	,	PUNCT	_	_	19	punct	_	AlignBegin=240346|AlignEnd=240346
18	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	AlignBegin=240346|AlignEnd=240556|HasSpokenGender=OnlySingExceptWithLiaison
19	frange	frange	NOUN	_	Gender=Fem|Number=Sing	9	obj	_	AlignBegin=240556|AlignEnd=240866|Exponence[Gender]=Inherent|Exponence[Number]=Absent
20	tout	tout	ADV	_	_	21	advmod	_	AlignBegin=240866|AlignEnd=241056
21	autour	autour	ADV	_	_	19	advmod	_	AlignBegin=241056|AlignEnd=241427
22	encore	encore	ADV	_	_	9	advmod	_	AlignBegin=241427|AlignEnd=241876
23	?	?	PUNCT	_	_	6	punct	_	AlignBegin=241876|AlignEnd=241876

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 12 parataxis:parenth	color:blue
1	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	AlignBegin=17805|AlignEnd=17930|HasSpokenGender=OnlySingExceptWithLiaison
2	tendance	tendance	NOUN	_	Gender=Fem|Number=Sing	6	nsubj	_	AlignBegin=17930|AlignEnd=18320|Exponence[Gender]=Inherent|Exponence[Number]=Absent
3	dans	dans	ADP	_	_	5	case	_	AlignBegin=18320|AlignEnd=18460
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	5	det	_	AlignBegin=18460|AlignEnd=18590|HasSpokenGender=OnlySingExceptWithLiaison
5	médias	média	NOUN	_	Gender=Masc|Number=Plur	2	nmod	_	AlignBegin=18590|AlignEnd=18930|Exponence[Gender]=Inherent|Exponence[Number]=Absent
6	est	être	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=18930|AlignEnd=19020
7	plutôt	plutôt	ADV	_	_	16	advmod	_	AlignBegin=19020|AlignEnd=19300|SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	AlignBegin=19300|AlignEnd=19300
9	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	12	nsubj	_	AlignBegin=19300|AlignEnd=19370|Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Unknown
10	l'	lui	PRON	_	Case=Acc|Emph=No|Number=Sing|Person=3|PronType=Prs	12	obj	_	AlignBegin=19370|AlignEnd=19410|Exponence[Person]=Inherent|SpaceAfter=No
11	avez	avoir	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	12	aux:tense	_	AlignBegin=19410|AlignEnd=19570
12	vu	voir	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	16	parataxis:parenth	_	AlignBegin=19570|AlignEnd=19680|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|SpaceAfter=No|Tense[denom]=Past
13	,	,	PUNCT	_	_	12	punct	_	AlignBegin=19680|AlignEnd=19680
14	de	de	ADP	_	_	16	case	_	AlignBegin=19680|AlignEnd=19780
15	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	AlignBegin=19680|AlignEnd=19780
16	côté	côté	NOUN	_	Gender=Masc|Number=Sing	6	obl:arg	_	AlignBegin=19780|AlignEnd=20040|Exponence[Gender]=Inherent|Exponence[Number]=Absent
17	d'	de	ADP	_	_	20	case	_	AlignBegin=20040|AlignEnd=20100|SpaceAfter=No
18	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	20	det	_	AlignBegin=20100|AlignEnd=20224
19	léger	léger	ADJ	_	Gender=Masc|Number=Sing	20	amod	_	AlignBegin=20443|AlignEnd=20908|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|LiaisonAfter=Yes
20	assoupissement	assoupissement	NOUN	_	Gender=Masc|Number=Sing	16	nmod	_	AlignBegin=20908|AlignEnd=21618|Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No
21	.	.	PUNCT	_	_	6	punct	_	AlignBegin=21618|AlignEnd=21618

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis:parenth	color:blue
1	ensuite	ensuite	ADV	_	_	15	advmod	_	AlignBegin=279442|AlignEnd=280027|SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	_	AlignBegin=280027|AlignEnd=280027
3	euh	euh	INTJ	_	_	1	discourse	_	AlignBegin=280027|AlignEnd=280317|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	AlignBegin=280317|AlignEnd=280317
5	disons	dire	VERB	_	Mood=Imp|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis:parenth	_	AlignBegin=280317|AlignEnd=280637
6	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	7	det	_	AlignBegin=280637|AlignEnd=280757|HasSpokenGender=OnlySingExceptWithLiaison
7	mots	mot	NOUN	_	Gender=Masc|Number=Plur	5	obj	_	AlignBegin=280757|AlignEnd=280887|Exponence[Gender]=Inherent|Exponence[Number]=Absent
8	comme	comme	SCONJ	_	_	10	mark	_	AlignBegin=280887|AlignEnd=281047
9	ils	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	AlignBegin=281047|AlignEnd=281137|Exponence[Person]=Inherent
10	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	acl	_	AlignBegin=281137|AlignEnd=281457|SpaceAfter=No
11	,	,	PUNCT	_	_	1	punct	_	AlignBegin=281457|AlignEnd=281457
12	vous	vous	PRON	_	Case=Nom|Emph=No|Number=Plur|Person=2|PronType=Prs	15	nsubj:pass	_	AlignBegin=281457|AlignEnd=281620|Exponence[Number]=Inherent|Exponence[Person]=Inherent|Polite=Yes
13	avez	avoir	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	15	aux:tense	_	AlignBegin=281620|AlignEnd=281847
14	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	15	aux:pass	_	AlignBegin=281847|AlignEnd=282097|Tense[denom]=Past
15	ruinée	ruiner	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	AlignBegin=282097|AlignEnd=282529|Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|SpaceAfter=No|Tense[denom]=Past
16	.	.	PUNCT	_	_	15	punct	_	AlignBegin=282529|AlignEnd=282529

~~~


